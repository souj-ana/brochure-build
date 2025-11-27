-- Add UPDATE policy to artists_waitlist - only admins can update records
CREATE POLICY "Only admins can update artist applications"
ON public.artists_waitlist
FOR UPDATE
TO authenticated
USING (public.has_role(auth.uid(), 'admin'))
WITH CHECK (public.has_role(auth.uid(), 'admin'));

-- Add DELETE policy to artists_waitlist - only admins can delete records
CREATE POLICY "Only admins can delete artist applications"
ON public.artists_waitlist
FOR DELETE
TO authenticated
USING (public.has_role(auth.uid(), 'admin'));