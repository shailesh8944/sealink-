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

const whyDifferent = [
  {
    label: '01',
    title: 'Built on physics, not just patterns',
    desc: 'Most optimization tools learn purely from historical data, which works fine until conditions change. AFCOS combines real ship hull and engine physics with live weather and sea-state data, so it can predict exactly how the engine will behave and how much load it\'ll need to handle in the conditions ahead — not just guess from past patterns. That\'s what makes its fuel optimization more accurate, even on routes and conditions it hasn\'t seen before. We\'re actively testing this on new routes to make sure it holds up in the real world, not just on paper.',
  },
  {
    label: '02',
    title: 'Designed with engine health in mind',
    desc: 'Because AFCOS understands how the engine actually behaves under different loads and sea conditions, it\'s designed to recommend speeds and power settings that protect the engine over the long run — not just save fuel today at the cost of wear and tear tomorrow.',
  },
  {
    label: '03',
    title: 'The crew stays in command',
    desc: 'AFCOS makes recommendations — it doesn\'t take over. Every suggestion comes with clear overrides and alerts, so the people on the bridge stay in charge.',
  },
]

const impactCards = [
  {
    label: 'Fleet economics',
    desc: 'Most fleet optimization systems ask you to install new hardware or commit to a long, expensive rollout before you see any benefit. AFCOS is software-first — built so fleets can start saving fuel without a major upfront investment or a multi-year integration project.',
  },
  {
    label: 'Emissions',
    desc: 'Every bit of fuel saved is carbon that doesn\'t get burned. Our target of 15% fuel savings isn\'t just a cost number — it\'s a direct cut in emissions per voyage, and a real step toward the decarbonization goals the shipping industry is being pushed toward.',
  },
  {
    label: 'Sovereignty',
    desc: 'Built and trained in India, AFCOS gives defence and commercial fleets a system they can trust with sensitive voyage and engine data — without routing that data through a foreign-owned platform.',
  },
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

      {/* Pain Point */}
      <section className="section pain-point-section">
        <div className="container">
          <FadeUp>
            <div className="pain-point-block">
              <p>
                Most ships today are stuck choosing between two things: burn less fuel, or protect
                the engine. Push speed and power too hard to save fuel, and you wear the engine down
                faster. Play it too safe, and you're leaving savings on the table. AFCOS doesn't
                make you choose — because it actually understands how the engine behaves, not just
                how much fuel it's burning.
              </p>
            </div>
          </FadeUp>
        </div>
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
                src="/assets/voyage-optimisation.jpg"
                alt="Container vessel at sea — AFCOS fuel and voyage optimization"
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
          {/* Live dashboard screenshots */}
          <FadeUp delay={0.15}>
            <div className="dashboard-intro">
              <p className="section-label" style={{ marginTop: 40 }}>Live system — MV Indus Guardian</p>
              <h3 className="dashboard-heading">AFCOS running at sea, not in a lab</h3>
              <p className="dashboard-sub">
                These are real screenshots from an active AFCOS deployment on MV Indus Guardian,
                tracking a voyage across the Indian Ocean. The system fuses live GPS position,
                engine telemetry, and open-ocean weather data to continuously update its fuel forecast.
              </p>
            </div>
          </FadeUp>
          <div className="dashboard-grid">
            <motion.figure
              className="dashboard-shot"
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.6, delay: 0.05, ease: 'easeOut' }}
            >
              <img
                src="/assets/afcos-dashboard-1.png"
                alt="AFCOS voyage monitoring dashboard showing MV Indus Guardian route with weather overlay"
                width={900}
                height={560}
                loading="lazy"
                decoding="async"
              />
              <figcaption className="dashboard-caption">
                <strong>Route intelligence with live weather fusion</strong>
                <span>
                  AFCOS plots the vessel's waypoints over real-time wind and wave data. The route
                  from East Africa to India is overlaid with sea-state arrows, letting the system
                  calculate added resistance and adjust speed recommendations before conditions are reached.
                  Predicted consumption: <em>13.4 MT/day</em>.
                </span>
              </figcaption>
            </motion.figure>
            <motion.figure
              className="dashboard-shot"
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.6, delay: 0.15, ease: 'easeOut' }}
            >
              <img
                src="/assets/afcos-dashboard-2.png"
                alt="AFCOS engine dynamics panel showing updated fuel prediction after speed adjustment"
                width={900}
                height={560}
                loading="lazy"
                decoding="async"
              />
              <figcaption className="dashboard-caption">
                <strong>Engine dynamics and updated fuel forecast</strong>
                <span>
                  After recalculating at the next waypoint, AFCOS updates its forecast to{' '}
                  <em>13.2 MT/day</em> — a direct result of an optimised speed recommendation.
                  The right-hand panel shows live engine power, RPM, SFOC, scavenge pressure,
                  and ship draft, all feeding the physics model in real time.
                </span>
              </figcaption>
            </motion.figure>
          </div>

          <div className="feature-grid" style={{ marginTop: 48 }}>
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

      {/* Why AFCOS is different */}
      <section className="section" id="why-afcos">
        <div className="container">
          <FadeUp>
            <p className="section-label">02 — What makes it work</p>
          </FadeUp>
          <FadeUp delay={0.05}>
            <h2>Why AFCOS is different</h2>
          </FadeUp>
          <div className="why-grid">
            {whyDifferent.map((card, i) => (
              <motion.article
                key={card.label}
                className="why-card"
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.55, delay: i * 0.1, ease: 'easeOut' }}
              >
                <div className="why-card-num">{card.label}</div>
                <h3>{card.title}</h3>
                <p>{card.desc}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Technology */}
      <section className="section section-dark" id="technology">
        <div className="container">
          <FadeUp>
            <p className="section-label">03 — Technology stack</p>
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

      {/* Why it matters */}
      <section className="section" id="impact">
        <div className="container">
          <FadeUp>
            <p className="section-label">04 — Why it matters</p>
          </FadeUp>
          <div className="impact-grid">
            {impactCards.map((card, i) => (
              <motion.article
                key={card.label}
                className="impact-card"
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.55, delay: i * 0.1, ease: 'easeOut' }}
              >
                <span className="impact-label">{card.label}</span>
                <p>{card.desc}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section section-cta">
        <FadeUp className="container">
          <div className="cta-panel">
            <div>
              <p className="section-label">05 — Get in touch</p>
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
