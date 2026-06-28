import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Message Sent',
  description: 'Your message has been received. Sealink will be in touch shortly.',
}

export default function ThankYouPage() {
  return (
    <main className="thank-you-main">
      <div className="container thank-you-panel card card-accent">
        <p className="eyebrow">Thank you</p>
        <h1>
          Message <span style={{ color: 'var(--teal)' }}>sent</span>
        </h1>
        <p>We have received your enquiry and will reply to you at the email address you provided.</p>
        <div className="hero-actions" style={{ marginTop: 28, marginBottom: 0 }}>
          <Link className="btn btn-primary" href="/">
            Back to home
          </Link>
          <Link className="btn btn-ghost" href="/contact">
            Send another message
          </Link>
        </div>
      </div>
    </main>
  )
}
