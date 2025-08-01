import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

export interface WaitlistEntry {
  id?: number
  email: string
  company_name?: string
  business_type?: string
  company_size?: string
  current_compliance_challenges?: string
  created_at?: string
}
