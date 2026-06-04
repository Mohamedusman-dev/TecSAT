import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { Resend } from "https://esm.sh/resend@3.5.0";

const RESEND_API_KEY = Deno.env.get('RESEND_API_KEY')

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: { 'Access-Control-Allow-Origin': '*' } })
  }

  try {
    const payload = await req.json()
    console.log('Webhook received payload:', JSON.stringify(payload, null, 2))

    // Supabase Webhooks send the data in 'record' for INSERT events
    const record = payload.record || payload

    if (!record || !record.email) {
      throw new Error('No record data found in payload')
    }

    if (!RESEND_API_KEY) {
      console.error('RESEND_API_KEY is missing in Secrets')
      return new Response(JSON.stringify({ error: 'Missing API Key' }), { status: 500 })
    }

    console.log(`Attempting to send email for inquiry from: ${record.email}`)

    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: 'tecSAT Website <onboarding@resend.dev>',
        to: ['audit.tecsat@gmail.com'], // IMPORTANT: Change this to your Resend login email if info@tecsat.in is not verified yet
        subject: `New Inquiry: ${record.company || 'N/A'} - ${record.name}`,
        html: `
          <div style="font-family: sans-serif; padding: 20px; border: 1px solid #eee; border-radius: 10px;">
            <h2 style="color: #2563eb;">New Website Inquiry</h2>
            <p><strong>Name:</strong> ${record.name}</p>
            <p><strong>Email:</strong> ${record.email}</p>
            <p><strong>Phone:</strong> ${record.phone}</p>
            <p><strong>Company:</strong> ${record.company}</p>
            <hr />
            <p><strong>Message:</strong></p>
            <p>${record.message}</p>
          </div>
        `,
      }),
    })

    const result = await res.json()
    console.log('Resend API Response:', JSON.stringify(result))

    if (!res.ok) {
      throw new Error(`Resend API error: ${JSON.stringify(result)}`)
    }

    return new Response(JSON.stringify({ message: 'Email sent successfully', result }), {
      headers: { 'Content-Type': 'application/json' },
      status: 200,
    })
  } catch (error) {
    console.error('Function error:', error.message)
    return new Response(JSON.stringify({ error: error.message }), {
      headers: { 'Content-Type': 'application/json' },
      status: 500,
    })
  }
})
