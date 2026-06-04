/*
  # Create Inquiries Table
  This migration creates a table to store contact form submissions.

  ## Query Description:
  - Creates `public.inquiries` table.
  - Enables Row Level Security (RLS).
  - Adds a policy to allow anyone (public) to submit an inquiry.
  
  ## Metadata:
  - Schema-Category: Structural
  - Impact-Level: Low
  - Requires-Backup: false
  - Reversible: true
*/

-- Create the inquiries table if it doesn't exist
CREATE TABLE IF NOT EXISTS public.inquiries (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    created_at TIMESTAMPTZ DEFAULT now(),
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    phone TEXT NOT NULL,
    company TEXT NOT NULL,
    message TEXT NOT NULL
);

-- Enable Row Level Security (using full syntax for compatibility)
ALTER TABLE public.inquiries ENABLE ROW LEVEL SECURITY;

-- Create policy to allow public inserts
-- We use 'anon' role because the contact form is accessible without login
DO $$ 
BEGIN
    IF NOT EXISTS (
        SELECT 1 FROM pg_policies 
        WHERE tablename = 'inquiries' 
        AND policyname = 'Allow public to insert inquiries'
    ) THEN
        CREATE POLICY "Allow public to insert inquiries" 
        ON public.inquiries 
        FOR INSERT 
        TO anon 
        WITH CHECK (true);
    END IF;
END $$;
