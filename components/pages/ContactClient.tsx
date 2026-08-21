'use client'
import { useState, type FormEvent } from 'react'
import FadeUp from '@/components/ui/FadeUp'
import PageHero from '@/components/ui/PageHero'

const WEB3FORMS_ACCESS_KEY = '21a8fced-a698-4fbe-9e5a-fe103f0bc4f3'

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
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = event.currentTarget
    const formData = new FormData(form)

    // Honeypot: bots fill hidden field, humans don't. Pretend success, send nothing.
    if (formData.get('_honey')) {
      setStatus('success')
      form.reset()
      return
    }

    setStatus('submitting')
    setErrorMessage('')

    const data = Object.fromEntries(formData.entries())

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(data),
      })

      const result = await response.json()

      if (!response.ok || !result.success) {
        throw new Error(result.message || `Web3Forms request failed with status ${response.status}`)
      }

      setStatus('success')
      form.reset()
    } catch (error) {
      console.error('Contact form: Web3Forms submission failed', error)
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
              <h2>Sea Link Electrical and Software Pvt. Ltd</h2>
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
              <input type="hidden" name="access_key" value={WEB3FORMS_ACCESS_KEY} />
              <input type="hidden" name="subject" value="New enquiry from Sealink website" />
              <input type="hidden" name="from_name" value="Sealink Website" />
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

              {status === 'success' && (
                <p className="form-success" role="status">
                  Thank you — your enquiry has been sent. Our team will get back to you shortly.
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
