-- Add marketing consent column to artists_waitlist table
ALTER TABLE public.artists_waitlist 
ADD COLUMN marketing_consent boolean NOT NULL DEFAULT false;

COMMENT ON COLUMN public.artists_waitlist.marketing_consent IS 'Stores whether the artist has consented to receive marketing communications and future opportunity updates';