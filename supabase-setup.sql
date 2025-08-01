-- Create waitlist table for ComplianceIQ
CREATE TABLE IF NOT EXISTS waitlist (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  email VARCHAR(255) NOT NULL UNIQUE,
  company_name VARCHAR(255),
  business_type VARCHAR(100),
  employee_count VARCHAR(50),
  current_compliance_pain TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create index on email for faster lookups
CREATE INDEX IF NOT EXISTS idx_waitlist_email ON waitlist(email);

-- Create index on created_at for analytics
CREATE INDEX IF NOT EXISTS idx_waitlist_created_at ON waitlist(created_at);

-- Enable Row Level Security
ALTER TABLE waitlist ENABLE ROW LEVEL SECURITY;

-- Create policy to allow inserts from anyone (for waitlist signup)
CREATE POLICY "Allow public inserts" ON waitlist
  FOR INSERT WITH CHECK (true);

-- Create policy to allow reads for authenticated users only
CREATE POLICY "Allow authenticated reads" ON waitlist
  FOR SELECT USING (auth.role() = 'authenticated');
