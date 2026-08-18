import { NextResponse } from 'next/server'
import { Resend } from 'resend'

const TO_EMAIL = process.env.CONTACT_TO_EMAIL ?? 'info@sealinkelectric.com'
const FROM_EMAIL = process.env.CONTACT_FROM_EMAIL ?? 'onboarding@resend.dev'

export async function POST(request: Request) {
  let data: Record<string, unknown>
  try {
    data = await request.json()
  } catch {
    return NextResponse.json({ error: 'Invalid request body' }, { status: 400 })
  }

  const { name, organisation, designation, phone, email, enquiry_type, project_stage, message, _honey } = data as Record<string, string>

  // Honeypot: bots fill hidden field, humans don't.
  if (_honey) {
    return NextResponse.json({ ok: true })
  }

  if (!name || !email || !enquiry_type || !message) {
    return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailPattern.test(email)) {
    return NextResponse.json({ error: 'Invalid email address' }, { status: 400 })
  }

  const rows = [
    ['Name', name],
    ['Organisation', organisation],
    ['Designation', designation],
    ['Phone', phone],
    ['Email', email],
    ['Enquiry type', enquiry_type],
    ['Project stage', project_stage],
    ['Message', message],
  ]
    .filter(([, value]) => value)
    .map(([label, value]) => `<tr><td style="padding:4px 12px 4px 0;font-weight:600">${label}</td><td style="padding:4px 0">${value}</td></tr>`)
    .join('')

  if (!process.env.RESEND_API_KEY) {
    console.error('Contact form: RESEND_API_KEY not configured', { name, email, enquiry_type })
    return NextResponse.json({ error: 'Server email not configured' }, { status: 500 })
  }

  const resend = new Resend(process.env.RESEND_API_KEY)

  try {
    const result = await resend.emails.send({
      from: `Sealink Website <${FROM_EMAIL}>`,
      to: TO_EMAIL,
      replyTo: email,
      subject: `New enquiry from Sealink website: ${enquiry_type}`,
      html: `<table>${rows}</table>`,
    })

    if (result.error) {
      console.error('Contact form: Resend send failed', result.error, { name, email, enquiry_type })
      return NextResponse.json({ error: 'Failed to send message' }, { status: 502 })
    }

    return NextResponse.json({ ok: true })
  } catch (error) {
    console.error('Contact form: unexpected error', error, { name, email, enquiry_type })
    return NextResponse.json({ error: 'Failed to send message' }, { status: 500 })
  }
}
