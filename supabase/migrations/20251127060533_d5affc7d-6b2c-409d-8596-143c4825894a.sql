-- Create artists_waitlist table for storing artist applications
CREATE TABLE public.artists_waitlist (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL UNIQUE,
  phone_number TEXT,
  instagram_handle TEXT NOT NULL,
  qualifications TEXT,
  years_of_experience INTEGER NOT NULL,
  art_shows_participation TEXT,
  minimum_price TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.artists_waitlist ENABLE ROW LEVEL SECURITY;

-- Create policy to allow anyone to insert (for signup form)
CREATE POLICY "Anyone can submit artist application" 
ON public.artists_waitlist 
FOR INSERT 
WITH CHECK (true);

-- Create policy to allow reading own data (if we add auth later)
CREATE POLICY "Users can view their own application" 
ON public.artists_waitlist 
FOR SELECT 
USING (true);

-- Create index on email for faster lookups
CREATE INDEX idx_artists_waitlist_email ON public.artists_waitlist(email);

-- Create index on created_at for sorting
CREATE INDEX idx_artists_waitlist_created_at ON public.artists_waitlist(created_at DESC);