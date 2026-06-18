'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'

const heroContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
}
const heroItem = {
  hidden: { opacity: 0, y: 36 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
}

const features = [
  { num: '01', title: 'Live fuel intelligence', desc: 'Real-time MT/day consumption display with model-backed forecasts along the route.' },
  { num: '02', title: 'Speed recommendations', desc: 'Weather-integrated guidance that balances ETA, fuel cost, and operational limits.' },
  { num: '03', title: 'Engine dynamics', desc: 'Physics-informed two-stroke engine models with SCADA-aligned exhaust and load monitoring.' },
  { num: '04', title: 'Crew-first safety', desc: 'Explicit override controls, anomaly alerts, and validation workflows for sea trials.' },
  { num: '05', title: 'Weather integration', desc: 'Wave, swell, and wind data fused into added-resistance and voyage planning.' },
  { num: '06', title: 'Fleet learning', desc: 'Adaptive models that improve as more vessel operational data is ingested.' },
]

const techTags = ['Python / ML', 'XGBoost', 'MVEM engine core', 'Open-Meteo / ERA5', 'Voyage monitor UI', 'Docker-ready']

const metrics = [
  { value: '294+', label: 'Training voyages (Magenta Ray)' },
  { value: '107', label: 'Features per operational row' },
  { value: '100%', label: 'Position coverage on route data' },
  { value: '6-cylinder', label: 'Two-stroke ME engine model' },
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

export default function HomeClient() {
  return (
    <main>
      {/* Hero */}
      <section className="hero">
        <div className="hero-bg" aria-hidden="true">
          <img
            className="hero-ship"
            src="/assets/hero-ship.png"
            alt=""
            width={1920}
            height={800}
            fetchPriority="high"
            decoding="async"
          />
          <div className="hero-overlay" />
        </div>
        <motion.div
          className="container hero-content"
          variants={heroContainer}
          initial="hidden"
          animate="visible"
        >
          <motion.p className="eyebrow" variants={heroItem}>
            Sealink Electric and Software Pvt Ltd
          </motion.p>
          <motion.h1 variants={heroItem}>
            Intelligent systems
            <br />
            <span>for the open ocean</span>
          </motion.h1>
          <motion.p className="hero-lead" variants={heroItem}>
            We build AI-powered maritime software — from real-time fuel optimization and voyage
            intelligence to physics-informed engine models for defence and commercial fleets.
          </motion.p>
          <motion.div className="hero-actions" variants={heroItem}>
            <Link className="btn btn-primary" href="#afcos">
              Explore AFCOS
            </Link>
            <Link className="btn btn-ghost" href="/contact">
              Contact us
            </Link>
          </motion.div>
          <motion.div className="hero-stats" variants={heroItem}>
            <div className="stat">
              <strong>15%</strong>
              <span>Target fuel savings</span>
            </div>
            <div className="stat">
              <strong>Real-time</strong>
              <span>Voyage &amp; engine insight</span>
            </div>
            <div className="stat">
              <strong>Indigenous</strong>
              <span>Built in India</span>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* AFCOS */}
      <section className="section section-dark" id="afcos">
        <div className="container">
          <FadeUp>
            <p className="section-label">01 — Flagship product</p>
          </FadeUp>
          <FadeUp delay={0.05}>
            <div className="product-header">
              <div>
                <h2>AFCOS</h2>
                <p className="product-sub">AI-Based Fuel Consumption Optimization System</p>
              </div>
              <span className="pill">Defence &amp; commercial ready</span>
            </div>
          </FadeUp>
          <FadeUp delay={0.1}>
            <p className="product-intro">
              AFCOS fuses voyage data, weather, hull resistance models, and engine telemetry to
              recommend optimal speed and power settings — while keeping the crew in control at all times.
            </p>
          </FadeUp>
          <FadeUp delay={0.12}>
            <figure className="ship-showcase">
              <img
                src="/assets/hero-ship.png"
                alt="Container vessel with digital twin overlay — AFCOS fuel optimization"
                width={1120}
                height={400}
                loading="lazy"
                decoding="async"
              />
              <figcaption className="ship-showcase-caption">
                <span>Digital twin ready</span>
                <span>Real-time vessel intelligence</span>
              </figcaption>
            </figure>
          </FadeUp>
          <div className="feature-grid">
            {features.map((f, i) => (
              <motion.article
                key={f.num}
                className="feature"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.5, delay: i * 0.07, ease: 'easeOut' }}
              >
                <div className="feature-icon">{f.num}</div>
                <h3>{f.title}</h3>
                <p>{f.desc}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Technology */}
      <section className="section" id="technology">
        <div className="container">
          <FadeUp>
            <p className="section-label">02 — Technology stack</p>
          </FadeUp>
          <FadeUp delay={0.05}>
            <div className="tech-layout">
              <div>
                <h2>Physics + data, not black-box guesses</h2>
                <p>
                  AFCOS is built on Holtrop-Mennen resistance theory, MAN B&amp;W engine physics,
                  gradient-boosted fuel models, and open marine weather APIs — validated on
                  294+ operational rows from MT Magenta Ray and expanding multi-vessel datasets.
                </p>
              </div>
              <div className="tech-tags">
                {techTags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            </div>
          </FadeUp>
          <div className="metrics">
            {metrics.map((m, i) => (
              <motion.div
                key={m.label}
                className="metric card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: i * 0.08, ease: 'easeOut' }}
              >
                <strong>{m.value}</strong>
                <span>{m.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section section-cta">
        <FadeUp className="container">
          <div className="cta-panel">
            <div>
              <p className="section-label">03 — Get in touch</p>
              <h2>Partner with Sealink</h2>
              <p>
                Interested in AFCOS pilots, fleet integrations, or custom maritime software?
                Tell us about your project on our contact page.
              </p>
            </div>
            <div className="contact-actions">
              <Link className="btn btn-primary" href="/contact">
                Contact us
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
