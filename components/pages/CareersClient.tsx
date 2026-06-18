'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'

const reasons = [
  {
    num: '01',
    title: 'Mission that matters',
    desc: 'Every line of code we write directly cuts fuel burn and emissions on real ships. You see the impact — in voyage data, in saved tonnes of CO₂, in fleets that run cleaner.',
  },
  {
    num: '02',
    title: 'Physics meets AI',
    desc: "We don't do black-box ML. We combine naval architecture, two-stroke engine physics, and gradient-boosted models — rare work that challenges you across multiple disciplines.",
  },
  {
    num: '03',
    title: 'Indigenous by design',
    desc: 'We are building sovereign maritime technology from India — for Indian defence fleets, commercial operators, and global export. Your work goes to sea, not to a slide deck.',
  },
  {
    num: '04',
    title: 'Early-stage ownership',
    desc: 'We are a small, IIT Madras-rooted team. You will own problems end-to-end, make real decisions, and see your contributions shipped fast — no queue of 40 reviewers.',
  },
]

const openRoles = [
  {
    title: 'ML / AI Engineer',
    type: 'Full-time',
    location: 'Remote / Varanasi',
    tag: 'Engineering',
    desc: 'Build and improve AFCOS fuel prediction models. Work with XGBoost, physics-informed ML, voyage telemetry, and open marine weather APIs. Strong Python and ML fundamentals required.',
  },
  {
    title: 'Full-Stack Developer',
    type: 'Full-time',
    location: 'Remote / Varanasi',
    tag: 'Engineering',
    desc: 'Build the voyage monitoring dashboard and fleet-facing UI. Next.js, React, TypeScript, REST APIs. You care about performance and want the UI to feel as precise as the models behind it.',
  },
  {
    title: 'Naval Architecture Intern',
    type: 'Internship · 6 months',
    location: 'Remote',
    tag: 'Domain',
    desc: 'Help validate our hull resistance and engine models against real vessel data. Background in naval architecture or marine engineering. Ideal for final-year B.Tech / M.Tech students.',
  },
  {
    title: 'Maritime Business Development',
    type: 'Full-time',
    location: 'India (flexible)',
    tag: 'Business',
    desc: 'Develop relationships with shipping companies, defence operators, and port authorities. Understand their operational challenges and translate them into product opportunities for our engineering team.',
  },
]

function FadeUp({ children, delay = 0, className }: { children: React.ReactNode; delay?: number; className?: string }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.55, ease: [0.25, 0.4, 0.25, 1] as [number, number, number, number], delay }}
    >
      {children}
    </motion.div>
  )
}

export default function CareersClient() {
  return (
    <main>
      {/* Hero */}
      <section className="page-hero page-hero--ship">
        <div className="page-hero-bg" aria-hidden="true">
          <img src="/assets/hero-ship.png" alt="" width={1920} height={800} loading="lazy" decoding="async" />
          <div className="page-hero-overlay" />
        </div>
        <div className="container">
          <motion.p
            className="eyebrow"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
          >
            Careers
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] as [number, number, number, number], delay: 0.2 }}
          >
            Build the future of <span>maritime AI</span>
          </motion.h1>
          <motion.p
            className="page-lead"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.32 }}
          >
            Join a small, focused team turning naval physics and machine learning into
            technology that ships actually use at sea.
          </motion.p>
        </div>
      </section>

      {/* Why join us */}
      <section className="section section-dark">
        <div className="container">
          <FadeUp>
            <p className="section-label">Why Sealink</p>
            <h2>Work that goes to sea</h2>
          </FadeUp>
          <div className="careers-grid">
            {reasons.map((r, i) => (
              <motion.article
                key={r.num}
                className="feature"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.5, delay: i * 0.08, ease: 'easeOut' }}
              >
                <div className="feature-icon">{r.num}</div>
                <h3>{r.title}</h3>
                <p>{r.desc}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Open positions */}
      <section className="section" id="open-roles">
        <div className="container">
          <FadeUp>
            <p className="section-label">Open positions</p>
            <h2>Current openings</h2>
            <p className="careers-intro">
              We hire for ability and curiosity, not credential checklists. If the work excites you,
              apply — even if you don't match every line.
            </p>
          </FadeUp>
          <div className="roles-list">
            {openRoles.map((role, i) => (
              <motion.article
                key={role.title}
                className="role-card card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.5, delay: i * 0.07, ease: 'easeOut' }}
              >
                <div className="role-header">
                  <div>
                    <span className="role-tag">{role.tag}</span>
                    <h3 className="role-title">{role.title}</h3>
                    <div className="role-meta">
                      <span>{role.type}</span>
                      <span className="role-dot" aria-hidden="true" />
                      <span>{role.location}</span>
                    </div>
                  </div>
                  <Link
                    href={`/contact?role=${encodeURIComponent(role.title)}`}
                    className="btn btn-primary role-apply"
                  >
                    Apply
                  </Link>
                </div>
                <p className="role-desc">{role.desc}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* General application CTA */}
      <section className="section section-cta">
        <FadeUp className="container">
          <div className="cta-panel">
            <div>
              <p className="section-label">Don't see the right role?</p>
              <h2>Send a general application</h2>
              <p>
                We are always interested in people who care deeply about maritime technology.
                Tell us what you do and why Sealink interests you — we read every message.
              </p>
            </div>
            <div className="contact-actions">
              <Link className="btn btn-primary" href="/contact">
                Get in touch
              </Link>
              <Link className="btn btn-ghost" href="/about">
                About us
              </Link>
            </div>
          </div>
        </FadeUp>
      </section>
    </main>
  )
}
