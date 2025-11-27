-- Add verified column to artists_waitlist for spam filtering
ALTER TABLE public.artists_waitlist 
ADD COLUMN verified boolean NOT NULL DEFAULT false;

-- Add index for filtering verified applications
CREATE INDEX idx_artists_waitlist_verified ON public.artists_waitlist(verified);

COMMENT ON COLUMN public.artists_waitlist.verified IS 'Admin verification flag to distinguish legitimate applications from spam. Defaults to false for all new submissions.';