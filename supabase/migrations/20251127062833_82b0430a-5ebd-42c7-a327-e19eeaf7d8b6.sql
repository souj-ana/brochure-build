-- Remove the public SELECT policy that exposes all artist contact information
DROP POLICY IF EXISTS "Users can view their own application" ON public.artists_waitlist;

-- Keep the INSERT policy so anyone can still submit applications
-- (The "Anyone can submit artist application" policy remains unchanged)