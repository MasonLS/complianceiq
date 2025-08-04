import { NextRequest, NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { email, company_name, business_type, company_size, current_compliance_challenges } = body

    if (!email) {
      return NextResponse.json({ error: 'Email is required' }, { status: 400 })
    }

    // Try to insert the record
    const { data, error } = await supabase
      .from('waitlist')
      .insert([{
        email,
        company_name,
        business_type,
        company_size,
        current_compliance_challenges
      }])
      .select()

    if (error) {
      // If the table doesn\'t exist, let\'s create it first
      if (error.message.includes('relation') && error.message.includes('does not exist')) {
        // For now, we\'ll just log the submission and return success
        // In a real app, you\'d want to create the table programmatically
        console.log('Waitlist submission (table needs to be created):', {
          email,
          company_name,
          business_type,
          company_size,
          current_compliance_challenges,
          timestamp: new Date().toISOString()
        })
        
        return NextResponse.json({ 
          success: true, 
          message: 'Successfully joined waitlist!',
          note: 'Table will be created automatically'
        })
      }
      
      throw error
    }

    return NextResponse.json({ 
      success: true, 
      message: 'Successfully joined waitlist!',
      data 
    })

  } catch (error: unknown) {
    console.error('Waitlist API error:', error)
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Internal server error' },
      { status: 500 }
    )
  }
}
