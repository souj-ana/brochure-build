-- Add commissioned work and workshops fields to artists_waitlist table
ALTER TABLE artists_waitlist 
ADD COLUMN accepts_commissioned_work boolean NOT NULL DEFAULT false,
ADD COLUMN hosts_workshops boolean NOT NULL DEFAULT false;