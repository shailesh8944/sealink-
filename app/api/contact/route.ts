import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

const TO_EMAIL = process.env.CONTACT_TO_EMAIL ?? 'info@sealinkelectric.com'
const SMTP_HOST = process.env.SMTP_HOST ?? 'smtp.zoho.com'
const SMTP_PORT = Number(process.env.SMTP_PORT ?? 465)
const SMTP_USER = process.env.SMTP_USER
const SMTP_PASS = process.env.SMTP_PASS

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

  if (!SMTP_USER || !SMTP_PASS) {
    console.error('Contact form: SMTP_USER/SMTP_PASS not configured', { name, email, enquiry_type })
    return NextResponse.json({ error: 'Server email not configured' }, { status: 500 })
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

  const transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port: SMTP_PORT,
    secure: SMTP_PORT === 465,
    auth: { user: SMTP_USER, pass: SMTP_PASS },
  })

  try {
    await transporter.sendMail({
      from: `Sealink Website <${SMTP_USER}>`,
      to: TO_EMAIL,
      replyTo: email,
      subject: `New enquiry from Sealink website: ${enquiry_type}`,
      html: `<table>${rows}</table>`,
    })

    return NextResponse.json({ ok: true })
  } catch (error) {
    console.error('Contact form: SMTP send failed', error, { name, email, enquiry_type })
    return NextResponse.json({ error: 'Failed to send message' }, { status: 502 })
  }
}
