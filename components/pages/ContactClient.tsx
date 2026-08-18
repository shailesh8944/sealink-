'use client'
import { useState, type FormEvent } from 'react'
import { useRouter } from 'next/navigation'
import FadeUp from '@/components/ui/FadeUp'
import PageHero from '@/components/ui/PageHero'

const enquiryTypes = [
  'Defence & Strategic Technology',
  'Marine Propulsion',
  'Engine & Controls',
  'Autonomous Systems',
  'AFCOS / Fuel Optimisation',
  'Commercial Marine',
  'R&D Collaboration',
  'Technology Partnership',
]

export default function ContactClient() {
  const router = useRouter()
  const [status, setStatus] = useState<'idle' | 'submitting' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setStatus('submitting')
    setErrorMessage('')

    const form = event.currentTarget
    const data = Object.fromEntries(new FormData(form).entries())

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })

      if (!response.ok) {
        const body = await response.json().catch(() => ({}))
        throw new Error(body.error || 'Something went wrong. Please try again.')
      }

      router.push('/thank-you')
    } catch (error) {
      setStatus('error')
      setErrorMessage(
        error instanceof Error
          ? error.message
          : 'Something went wrong. Please try again, or email us directly at info@sealinkelectric.com.'
      )
    }
  }

  return (
    <main>
      <PageHero
        eyebrow="Contact us"
        title="Build the Next Maritime"
        titleAccent="System With Us"
        lead={
          <>
            Discuss propulsion development, marine electronics, intelligent maritime systems,
            autonomy, software or technology partnerships with our engineering team, or write to{' '}
            <a className="inline-link" href="mailto:info@sealinkelectric.com">
              info@sealinkelectric.com
            </a>
            .
          </>
        }
        variant="contact"
      />

      <section className="section">
        <div className="container contact-layout">
          <FadeUp delay={0.05}>
            <div className="contact-info card card-accent">
              <h2>Sealink Electric and Software Pvt Ltd</h2>
              <p>Marine Engineering &amp; Intelligent Systems</p>
              <ul className="contact-details">
                <li>
                  <span className="detail-label">Email</span>
                  <a href="mailto:info@sealinkelectric.com">info@sealinkelectric.com</a>
                </li>
                <li>
                  <span className="detail-label">Enquiries</span>
                  <span>Propulsion · Controls · Electronics · Autonomy · AFCOS · R&amp;D · Partnerships</span>
                </li>
              </ul>
            </div>
          </FadeUp>

          <FadeUp delay={0.1}>
            <form className="contact-form card" onSubmit={handleSubmit}>
              <input
                type="text"
                name="_honey"
                className="form-honey"
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
              />

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">
                    Full name <span aria-hidden="true">*</span>
                  </label>
                  <input type="text" id="name" name="name" required autoComplete="name" placeholder="Your name" />
                </div>
                <div className="form-group">
                  <label htmlFor="organisation">Organisation</label>
                  <input type="text" id="organisation" name="organisation" autoComplete="organization" placeholder="Optional" />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="designation">Designation</label>
                  <input type="text" id="designation" name="designation" placeholder="Optional" />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Phone</label>
                  <input type="tel" id="phone" name="phone" autoComplete="tel" placeholder="+91 …" />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="email">
                  Email <span aria-hidden="true">*</span>
                </label>
                <input type="email" id="email" name="email" required autoComplete="email" placeholder="you@company.com" />
              </div>

              <div className="form-group">
                <label>
                  Enquiry type <span aria-hidden="true">*</span>
                </label>
                <div className="enquiry-grid">
                  {enquiryTypes.map((type) => (
                    <label className="enquiry-chip" key={type}>
                      <input type="radio" name="enquiry_type" value={type} required />
                      <span>{type}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="stage">Project stage</label>
                <input type="text" id="stage" name="project_stage" placeholder="e.g. Concept, Requirement definition, Pilot" />
              </div>

              <div className="form-group">
                <label htmlFor="message">
                  Requirement / message <span aria-hidden="true">*</span>
                </label>
                <textarea id="message" name="message" rows={6} required placeholder="Tell us about your project or question…" />
              </div>

              <p className="form-warning">
                Please do not submit classified, sensitive or confidential information through
                this form.
              </p>

              {status === 'error' && (
                <p className="form-warning" role="alert">
                  {errorMessage}
                </p>
              )}

              <button className="btn btn-primary btn-full" type="submit" disabled={status === 'submitting'}>
                {status === 'submitting' ? 'Sending…' : 'Send message'}
              </button>
              <p className="form-note">By submitting, you agree that we may contact you regarding your enquiry.</p>
            </form>
          </FadeUp>
        </div>
      </section>
    </main>
  )
}
