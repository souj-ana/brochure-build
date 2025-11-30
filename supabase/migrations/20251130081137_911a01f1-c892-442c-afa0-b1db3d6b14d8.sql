-- Add data_processing_consent column to artists_waitlist table
ALTER TABLE public.artists_waitlist 
ADD COLUMN data_processing_consent boolean NOT NULL DEFAULT false;

COMMENT ON COLUMN public.artists_waitlist.data_processing_consent IS 'GDPR data processing consent - required for application submission';