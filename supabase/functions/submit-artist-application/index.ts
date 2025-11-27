import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.39.3'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

// Simple in-memory rate limiting
const rateLimitMap = new Map<string, { count: number; resetTime: number }>()
const RATE_LIMIT_WINDOW_MS = 60 * 60 * 1000 // 1 hour
const MAX_SUBMISSIONS_PER_WINDOW = 3

interface ArtistApplication {
  name: string
  email: string
  phone_number?: string
  instagram_handle: string
  qualifications?: string
  years_of_experience: number
  minimum_price: string
  art_shows_participation?: string
  accepts_commissioned_work: boolean
  hosts_workshops: boolean
  marketing_consent: boolean
}

function getRateLimitKey(req: Request): string {
  // Use IP address for rate limiting
  const forwarded = req.headers.get('x-forwarded-for')
  const ip = forwarded ? forwarded.split(',')[0] : 'unknown'
  return ip
}

function checkRateLimit(key: string): { allowed: boolean; resetTime?: number } {
  const now = Date.now()
  const record = rateLimitMap.get(key)

  // Clean up old entries periodically
  if (rateLimitMap.size > 10000) {
    for (const [k, v] of rateLimitMap.entries()) {
      if (v.resetTime < now) {
        rateLimitMap.delete(k)
      }
    }
  }

  if (!record || record.resetTime < now) {
    // New window
    rateLimitMap.set(key, {
      count: 1,
      resetTime: now + RATE_LIMIT_WINDOW_MS,
    })
    return { allowed: true }
  }

  if (record.count >= MAX_SUBMISSIONS_PER_WINDOW) {
    return { allowed: false, resetTime: record.resetTime }
  }

  record.count++
  return { allowed: true }
}

function validateApplication(data: any): { valid: boolean; errors: string[] } {
  const errors: string[] = []

  if (!data.name || typeof data.name !== 'string' || data.name.trim().length === 0) {
    errors.push('Name is required')
  }
  if (!data.email || typeof data.email !== 'string' || !data.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
    errors.push('Valid email is required')
  }
  if (!data.instagram_handle || typeof data.instagram_handle !== 'string' || data.instagram_handle.trim().length === 0) {
    errors.push('Instagram handle is required')
  }
  if (data.years_of_experience === undefined || typeof data.years_of_experience !== 'number' || data.years_of_experience < 0) {
    errors.push('Years of experience must be a positive number')
  }
  if (!data.minimum_price || typeof data.minimum_price !== 'string' || data.minimum_price.trim().length === 0) {
    errors.push('Minimum price is required')
  }

  // Length validations
  if (data.name && data.name.length > 255) {
    errors.push('Name must be less than 255 characters')
  }
  if (data.email && data.email.length > 255) {
    errors.push('Email must be less than 255 characters')
  }
  if (data.phone_number && data.phone_number.length > 50) {
    errors.push('Phone number must be less than 50 characters')
  }
  if (data.instagram_handle && data.instagram_handle.length > 100) {
    errors.push('Instagram handle must be less than 100 characters')
  }

  return { valid: errors.length === 0, errors }
}

Deno.serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders })
  }

  try {
    // Rate limiting check
    const rateLimitKey = getRateLimitKey(req)
    const rateCheck = checkRateLimit(rateLimitKey)

    if (!rateCheck.allowed) {
      console.log(`Rate limit exceeded for ${rateLimitKey}`)
      return new Response(
        JSON.stringify({
          error: 'Too many submissions. Please try again later.',
          resetTime: rateCheck.resetTime,
        }),
        {
          status: 429,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        }
      )
    }

    // Parse request body
    const applicationData: ArtistApplication = await req.json()
    console.log('Received application submission:', { email: applicationData.email })

    // Validate input
    const validation = validateApplication(applicationData)
    if (!validation.valid) {
      console.log('Validation failed:', validation.errors)
      return new Response(
        JSON.stringify({ error: 'Validation failed', details: validation.errors }),
        {
          status: 400,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        }
      )
    }

    // Initialize Supabase client with service role key for inserting data
    const supabaseAdmin = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
    )

    // Insert the application into the database
    const { data, error } = await supabaseAdmin
      .from('artists_waitlist')
      .insert({
        name: applicationData.name.trim(),
        email: applicationData.email.trim().toLowerCase(),
        phone_number: applicationData.phone_number?.trim() || null,
        instagram_handle: applicationData.instagram_handle.trim(),
        qualifications: applicationData.qualifications?.trim() || null,
        years_of_experience: applicationData.years_of_experience,
        minimum_price: applicationData.minimum_price.trim(),
        art_shows_participation: applicationData.art_shows_participation?.trim() || null,
        accepts_commissioned_work: applicationData.accepts_commissioned_work,
        hosts_workshops: applicationData.hosts_workshops,
        marketing_consent: applicationData.marketing_consent ?? false,
      })
      .select()
      .single()

    if (error) {
      console.error('Database error:', error)
      return new Response(
        JSON.stringify({ error: 'Failed to submit application' }),
        {
          status: 500,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        }
      )
    }

    console.log('Application submitted successfully:', data.id)

    return new Response(
      JSON.stringify({ success: true, message: 'Application submitted successfully' }),
      {
        status: 200,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    )
  } catch (error) {
    console.error('Unexpected error:', error)
    return new Response(
      JSON.stringify({ error: 'An unexpected error occurred' }),
      {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    )
  }
})
