'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'

const beliefs = [
  {
    num: '01',
    title: 'Crew-first design',
    desc: 'AI recommendations must be explainable, override-safe, and built for real bridge workflows.',
  },
  {
    num: '02',
    title: 'Physics-informed models',
    desc: 'We combine first-principles naval architecture with data-driven learning — not black-box guesses.',
  },
  {
    num: '03',
    title: 'Indigenous capability',
    desc: 'Built in India for Indian and global fleets — sovereign technology for critical maritime operations.',
  },
]

function FadeUp({ children, delay = 0, className }: { children: React.ReactNode; delay?: number; className?: string }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.55, ease: [0.25, 0.4, 0.25, 1] as [number, number, number, number], delay }}
    >
      {children}
    </motion.div>
  )
}

export default function AboutClient() {
  return (
    <main>
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
            About us
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          >
            Who we <span>are</span>
          </motion.h1>
          <motion.p
            className="page-lead"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.32 }}
          >
            Sealink Electric and Software Pvt Ltd builds indigenous maritime technology for
            operational crews, fleet operators, and defence applications.
          </motion.p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <FadeUp>
            <div className="about-grid">
              <div>
                <h2>Marine technology, engineered for operational reality</h2>
                <p>
                  Sealink develops software and digital systems for ships and maritime operators.
                  Our work combines machine learning, naval architecture physics, and live operational
                  data to help crews sail safer, cleaner, and more efficiently.
                </p>
                <p>
                  We are building AFCOS — an AI-Based Fuel Consumption Optimization System — with
                  applications across Indian Coast Guard operations, commercial tankers, and future
                  multi-vessel fleet deployments.
                </p>
              </div>
              <div className="about-cards">
                <article className="card card-accent">
                  <h3>Mission</h3>
                  <p>Deliver indigenous maritime AI that crews can trust — transparent, override-safe, and validated against real sea trials.</p>
                </article>
                <article className="card">
                  <h3>Focus areas</h3>
                  <ul className="check-list">
                    <li>Fuel &amp; voyage optimization</li>
                    <li>Engine performance monitoring</li>
                    <li>Weather-aware routing intelligence</li>
                    <li>CII / compliance support</li>
                  </ul>
                </article>
                <article className="card">
                  <h3>Company</h3>
                  <p className="card-meta">Sealink Electric and Software Pvt Ltd</p>
                  <p className="card-meta" style={{ marginTop: 8 }}>Designed and Developed by IIT Madras student lead Team</p>
                </article>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      <section className="section section-dark">
        <div className="container">
          <FadeUp>
            <p className="section-label">What we believe</p>
          </FadeUp>
          <div className="feature-grid">
            {beliefs.map((b, i) => (
              <motion.article
                key={b.num}
                className="feature"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.5, delay: i * 0.1, ease: 'easeOut' }}
              >
                <div className="feature-icon">{b.num}</div>
                <h3>{b.title}</h3>
                <p>{b.desc}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-cta">
        <FadeUp className="container">
          <div className="cta-panel">
            <div>
              <h2>Work with us</h2>
              <p>Pilots, partnerships, or custom maritime software — we would like to hear from you.</p>
            </div>
            <div className="contact-actions">
              <Link className="btn btn-primary" href="/contact">Contact us</Link>
              <Link className="btn btn-ghost" href="/#afcos">View AFCOS</Link>
            </div>
          </div>
        </FadeUp>
      </section>
    </main>
  )
}
