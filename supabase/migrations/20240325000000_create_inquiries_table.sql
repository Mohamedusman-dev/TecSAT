/*
# Create Inquiries Table
This migration creates a table to store contact form submissions from the website.

## Query Description:
This operation creates a new table 'public.inquiries' to store user messages. It also enables Row Level Security (RLS) to ensure data is handled safely.

## Metadata:
- Schema-Category: Structural
- Impact-Level: Low
- Requires-Backup: false
- Reversible: true

## Structure Details:
- Table: inquiries
- Columns: id (uuid), created_at (timestamptz), name (text), email (text), phone (text), company (text), message (text)

## Security Implications:
- RLS Status: Enabled
- Policy Changes: Added "Allow public inserts" policy
- Auth Requirements: None (Publicly accessible for submissions)
*/

CREATE TABLE IF NOT EXISTS public.inquiries (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at TIMESTAMPTZ DEFAULT now(),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  company TEXT NOT NULL,
  message TEXT NOT NULL
);

-- Enable RLS
ALTER TABLE public.inquiries ENABLE RLS;

-- Create policy to allow anyone to insert a new inquiry (Contact Form)
CREATE POLICY "Allow public inserts" ON public.inquiries
  FOR INSERT 
  WITH CHECK (true);

-- Create policy to allow only authenticated users (admin) to view inquiries
CREATE POLICY "Allow authenticated users to view" ON public.inquiries
  FOR SELECT
  TO authenticated
  USING (true);
