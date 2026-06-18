'use client'
import { motion } from 'framer-motion'

function FadeUp({ children, delay = 0, className }: { children: React.ReactNode; delay?: number; className?: string }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.55, ease: [0.25, 0.4, 0.25, 1] as [number, number, number, number], delay }}
    >
      {children}
    </motion.div>
  )
}

export default function ContactClient() {
  return (
    <main>
      <section className="page-hero page-hero--contact">
        <div className="contact-hero-decor" aria-hidden="true" />
        <div className="container">
          <motion.p
            className="eyebrow"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
          >
            Contact us
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          >
            Get in <span>touch</span>
          </motion.h1>
          <motion.p
            className="page-lead"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.32 }}
          >
            Fill in the form below and we will respond to your enquiry at{' '}
            <a className="inline-link" href="mailto:info@sealinkelectric.com">
              info@sealinkelectric.com
            </a>.
          </motion.p>
        </div>
      </section>

      <section className="section">
        <div className="container contact-layout">
          <FadeUp delay={0.05}>
            <div className="contact-info card card-accent">
              <h2>Sealink Electric and Software Pvt Ltd</h2>
              <p>Maritime AI · Fuel optimization · Digital ship systems</p>
              <ul className="contact-details">
                <li>
                  <span className="detail-label">Email</span>
                  <a href="mailto:info@sealinkelectric.com">info@sealinkelectric.com</a>
                </li>
                <li>
                  <span className="detail-label">Registered Office</span>
                  <address className="contact-address">
                    Garthauli, Chaubeypur<br />
                    Varanasi, Uttar Pradesh<br />
                    India — 221104
                  </address>
                </li>
                <li>
                  <span className="detail-label">Enquiries</span>
                  <span>AFCOS pilots · Fleet integrations · R&amp;D partnerships</span>
                </li>
              </ul>
            </div>
          </FadeUp>

          <FadeUp delay={0.1}>
            <form
              className="contact-form card"
              action="https://formsubmit.co/info@sealinkelectric.com"
              method="POST"
            >
              <input type="hidden" name="_subject" value="New enquiry from Sealink website" />
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_template" value="table" />
              <input type="hidden" name="_next" value="https://sealinkelectric.com/thank-you/" />
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
                  <label htmlFor="email">
                    Email <span aria-hidden="true">*</span>
                  </label>
                  <input type="email" id="email" name="email" required autoComplete="email" placeholder="you@company.com" />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="phone">Phone</label>
                  <input type="tel" id="phone" name="phone" autoComplete="tel" placeholder="+91 …" />
                </div>
                <div className="form-group">
                  <label htmlFor="company">Company / Organisation</label>
                  <input type="text" id="company" name="company" autoComplete="organization" placeholder="Optional" />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="subject">
                  Subject <span aria-hidden="true">*</span>
                </label>
                <input type="text" id="subject" name="subject" required placeholder="e.g. AFCOS pilot enquiry" />
              </div>

              <div className="form-group">
                <label htmlFor="message">
                  Message <span aria-hidden="true">*</span>
                </label>
                <textarea id="message" name="message" rows={6} required placeholder="Tell us about your project or question…" />
              </div>

              <button className="btn btn-primary btn-full" type="submit">
                Send message
              </button>
              <p className="form-note">By submitting, you agree that we may contact you regarding your enquiry.</p>
            </form>
          </FadeUp>
        </div>
      </section>
    </main>
  )
}
