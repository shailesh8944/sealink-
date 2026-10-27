'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import FadeUp from '@/components/ui/FadeUp'
import PageHero from '@/components/ui/PageHero'

const reasons = [
  {
    num: '01',
    title: 'Mission that matters',
    desc: 'Every line of code and every design decision goes into propulsion, controls, or software built for real maritime platforms — not a slide deck.',
  },
  {
    num: '02',
    title: 'Physics meets engineering',
    desc: "We don't do black-box work. We combine naval architecture, engine physics, controls engineering, and machine learning — rare work that challenges you across multiple disciplines.",
  },
  {
    num: '03',
    title: 'Indigenous by design',
    desc: 'We are building sovereign maritime technology from India — for defence, commercial and export markets.',
  },
  {
    num: '04',
    title: 'Early-stage ownership',
    desc: 'We are a small, IIT Madras-rooted team. You will own problems end-to-end, make real decisions, and see your contributions shipped fast.',
  },
]

const domains = [
  'Marine Engineering',
  'Propulsion',
  'Controls & Electronics',
  'AI / ML',
  'Software',
  'Autonomous Systems',
  'Naval Architecture',
  'Business Development',
]

const openRoles: {
  title: string
  type: string
  location: string
  tag: string
  desc: string
}[] = []

export default function CareersClient() {
  return (
    <main>
      <PageHero
        eyebrow="Careers"
        title="Build the Future of"
        titleAccent="Maritime Engineering"
        lead="Work across propulsion, controls, AI and autonomous maritime systems to build technology that operates beyond the laboratory."
        variant="ship"
        bgImage="/assets/hero-ship.png"
      />

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
          <FadeUp delay={0.1}>
            <p className="section-label" style={{ marginTop: 40 }}>Career domains</p>
            <div className="domain-tags">
              {domains.map((d) => (
                <span key={d}>{d}</span>
              ))}
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Open positions */}
      <section className="section" id="open-roles">
        <div className="container">
          <FadeUp>
            <p className="section-label">Open positions</p>
            <h2>Current openings</h2>
            <p className="careers-intro">
              No open roles right now. Send a general application below — we read every message.
            </p>
          </FadeUp>
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
                We are always interested in people who care deeply about maritime engineering.
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
