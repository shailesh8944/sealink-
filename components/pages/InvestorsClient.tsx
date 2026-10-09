'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import FadeUp from '@/components/ui/FadeUp'
import PageHero from '@/components/ui/PageHero'

const WEB3FORMS_KEY = '21a8fced-a698-4fbe-9e5a-fe103f0bc4f3'

const traction = [
  { label: 'Vessels deployed', value: '1', note: 'MT TRF Kirkenes — live at sea' },
  { label: 'Incubation programme', value: 'DST', note: 'I-NCUBATE, IIT Madras' },
  { label: 'Recognition', value: 'Startup India', note: 'DPIIT, Govt. of India' },
  { label: 'Target fuel saving', value: 'Up to 15%', note: 'Under validation' },
]

const team = [
  { name: 'Shailesh Yadav', role: 'Co-Founder & CEO', note: 'Marine Engineer · MS Ocean Engineering, IIT Madras · Class 4 CoC · Commercial sea experience' },
  { name: 'Sagar Yadav', role: 'Co-Founder & CBO', note: 'B.Tech Mech. Engg. · MS Management Science, IIT Madras · 3+ years Supply Chain' },
  { name: 'Vinay Tripathi', role: 'Co-Founder & COO', note: 'Marine Engineer · 15+ years aboard Dual Fuel Vessels' },
  { name: 'Fazal', role: 'Technical Head', note: 'B.Tech Marine Engg., IMU · MS Ocean Engineering, IIT Madras' },
]

function DeckRequestForm() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'done' | 'error'>('idle')
  const [form, setForm] = useState({ name: '', company: '', email: '', note: '' })

  function set(field: string, val: string) {
    setForm(f => ({ ...f, [field]: val }))
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          subject: 'Investor deck request — Sealink website',
          from_name: 'Sealink Investors Page',
          ...form,
        }),
      })
      const data = await res.json()
      setStatus(data.success ? 'done' : 'error')
    } catch {
      setStatus('error')
    }
  }

  if (status === 'done') {
    return (
      <div className="fuel-review-thanks">
        <p>Thank you. We will send the investor deck to your email within one business day.</p>
      </div>
    )
  }

  return (
    <form className="fuel-review-form" onSubmit={handleSubmit}>
      <div className="fuel-review-grid">
        <label className="fuel-review-field">
          <span>Full name</span>
          <input required type="text" value={form.name} onChange={e => set('name', e.target.value)} placeholder="Your name" />
        </label>
        <label className="fuel-review-field">
          <span>Organisation</span>
          <input required type="text" value={form.company} onChange={e => set('company', e.target.value)} placeholder="Fund / family office / corporate" />
        </label>
        <label className="fuel-review-field fuel-review-field--full">
          <span>Email</span>
          <input required type="email" value={form.email} onChange={e => set('email', e.target.value)} placeholder="you@fund.com" />
        </label>
        <label className="fuel-review-field fuel-review-field--full">
          <span>Brief note (optional)</span>
          <input type="text" value={form.note} onChange={e => set('note', e.target.value)} placeholder="What you are looking for" />
        </label>
      </div>
      {status === 'error' && (
        <p className="form-error">Something went wrong — email <a href="mailto:info@sealinkelectric.com">info@sealinkelectric.com</a> directly.</p>
      )}
      <button type="submit" className="btn btn-primary" disabled={status === 'sending'}>
        {status === 'sending' ? 'Sending…' : 'Request investor deck'}
      </button>
    </form>
  )
}

export default function InvestorsClient() {
  return (
    <main>
      <PageHero
        eyebrow="Investors"
        title="Sealink"
        titleAccent="Electric"
        lead="Physics-informed fuel optimisation for the global commercial shipping fleet. Early-stage. Deployed at sea. Incubated at IIT Madras."
        variant="plain"
      />

      {/* Problem and market */}
      <section className="section">
        <div className="container">
          <FadeUp>
            <p className="section-label">The problem</p>
            <h2>Shipping burns 300 million tonnes of fuel a year</h2>
            <div className="about-grid">
              <div>
                <p>
                  The global shipping fleet consumes approximately 300 million tonnes of fuel
                  annually, accounting for roughly 2.9% of global greenhouse gas emissions. The
                  International Maritime Organization (IMO) Carbon Intensity Indicator (CII)
                  regulation, effective from 2023, requires every commercial vessel to demonstrate
                  year-on-year improvement in fuel efficiency — or face port-state restrictions.
                </p>
                <p>
                  Existing voyage optimisation tools are either expensive black-box systems from
                  large Western incumbents, or simple spreadsheet-based approaches that ignore
                  real hull and engine physics. There is no affordable, physics-grounded solution
                  built for the 50,000+ vessels that operate in Asian and emerging-market fleets.
                  That is the gap Sealink is closing with AFCOS.
                </p>
              </div>
              <div className="about-cards">
                <article className="card card-accent">
                  <h3>Market</h3>
                  <p>~50,000 commercial vessels globally. Voyage optimisation software market growing at 12–15% annually. CII regulation creates mandatory demand from 2024 onwards.</p>
                </article>
                <article className="card card-accent">
                  <h3>Model</h3>
                  <p>Per-vessel annual subscription. Low hardware cost. Scalable from single vessel to entire fleet. Implementation partner network for installation.</p>
                </article>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Traction */}
      <section className="section section-dark">
        <div className="container">
          <FadeUp>
            <p className="section-label">Traction</p>
            <h2>Where we are today</h2>
          </FadeUp>
          <div className="hero-stats" style={{ marginTop: 36 }}>
            {traction.map((item, i) => (
              <motion.div
                key={item.label}
                className="stat-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.45, delay: i * 0.09, ease: 'easeOut' }}
              >
                <span className="stat-value">{item.value}</span>
                <span className="stat-label">{item.label}</span>
                <span className="stat-note">{item.note}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section">
        <div className="container">
          <FadeUp>
            <p className="section-label">Team</p>
            <h2>Marine engineers who have sailed commercially</h2>
          </FadeUp>
          <div className="roadmap-grid" style={{ marginTop: 28 }}>
            {team.map((m, i) => (
              <motion.div
                key={m.name}
                className="why-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.45, delay: i * 0.08, ease: 'easeOut' }}
              >
                <h3 style={{ fontSize: 16, marginBottom: 4 }}>{m.name}</h3>
                <p style={{ fontSize: 12, color: 'var(--teal)', margin: '0 0 8px', fontWeight: 600 }}>{m.role}</p>
                <p style={{ fontSize: 13, color: 'var(--muted)', margin: 0 }}>{m.note}</p>
              </motion.div>
            ))}
          </div>
          <FadeUp delay={0.1} className="hero-actions">
            <Link className="btn btn-ghost" href="/about">Full team &amp; advisors</Link>
          </FadeUp>
        </div>
      </section>

      {/* Incubation and recognition */}
      <section className="section section-dark">
        <div className="container">
          <FadeUp>
            <div className="incubation-panel">
              <div className="incubation-logos">
                <img src="/assets/dst-logo.png" alt="Department of Science and Technology (DST), Government of India" width={198} height={71} loading="lazy" decoding="async" />
                <span className="incubation-divider" aria-hidden="true" />
                <img src="/assets/dst-nidhi-logo.png" alt="DST NIDHI — Start-to-Scale Startup Support" width={203} height={72} loading="lazy" decoding="async" />
              </div>
              <p className="incubation-text">
                Incubated under <strong>DST I-NCUBATE</strong> at the{' '}
                <strong>Gopalakrishnan-Deshpande Centre, IIT Madras</strong> ·{' '}
                Recognised under <strong>Startup India</strong> (DPIIT, Government of India)
              </p>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Deck request */}
      <section className="section" id="deck">
        <div className="container">
          <FadeUp>
            <p className="section-label">Request</p>
            <h2>Request our investor deck</h2>
            <p style={{ color: 'var(--muted)', maxWidth: 520, marginBottom: 32 }}>
              We will send a confidential investor deck by email within one business day.
            </p>
          </FadeUp>
          <FadeUp delay={0.06}>
            <DeckRequestForm />
          </FadeUp>
        </div>
      </section>
    </main>
  )
}
