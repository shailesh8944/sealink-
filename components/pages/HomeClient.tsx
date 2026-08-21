'use client'
import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Link from 'next/link'
import FadeUp from '@/components/ui/FadeUp'
import CapabilityCard from '@/components/ui/CapabilityCard'
import ArchitectureFlow from '@/components/ui/ArchitectureFlow'

const heroContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
}
const heroItem = {
  hidden: { opacity: 0, y: 36 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
}

const coreCapabilities = [
  { num: '01', title: 'Marine Propulsion', desc: 'Development and integration of compact, efficient and reliable propulsion systems for specialised marine platforms.', href: '/capabilities/marine-propulsion' },
  { num: '02', title: 'Engine & Propulsion Controls', desc: 'Engine control, electronic control systems, propulsion control, sensors, telemetry and monitoring.', href: '/capabilities/engine-controls' },
  { num: '03', title: 'Marine Electronics', desc: 'Sensor integration, data acquisition, onboard monitoring, communication and intelligent instrumentation.', href: '/capabilities/marine-electronics' },
  { num: '04', title: 'Intelligent Propulsion', desc: 'Physics-informed AI, fuel optimisation, performance prediction, diagnostics and digital twins.', href: '/capabilities/intelligent-propulsion' },
  { num: '05', title: 'Autonomous Maritime Systems', desc: 'Guidance, navigation, vessel control, mission planning and autonomous surface vessel technologies.', href: '/capabilities/autonomous-systems' },
  { num: '06', title: 'Digital Engineering', desc: 'Simulation, mathematical modelling, digital twins, system architecture and hardware/software integration.', href: '/capabilities/digital-engineering' },
]

export default function HomeClient() {
  const heroRef = useRef<HTMLElement>(null)
  const { scrollYProgress: heroProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  })
  const shipY = useTransform(heroProgress, [0, 1], ['0%', '18%'])

  return (
    <main>
      {/* Hero */}
      <section className="hero" ref={heroRef}>
        <div className="hero-bg" aria-hidden="true">
          <motion.img
            className="hero-ship"
            src="/assets/hero-ship.png"
            alt=""
            width={1920}
            height={800}
            fetchPriority="high"
            decoding="async"
            style={{ y: shipY }}
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
            Sea Link Electrical and Software Pvt. Ltd
          </motion.p>
          <motion.h1 variants={heroItem}>
            Indigenous marine propulsion{' '}
            <br />
            <span>&amp; intelligent maritime systems</span>
          </motion.h1>
          <motion.p className="hero-lead" variants={heroItem}>
            Engineering propulsion, control and intelligent maritime technologies for small craft,
            defence, specialised marine and autonomous platforms.
          </motion.p>
          <motion.div className="hero-actions" variants={heroItem}>
            <Link className="btn btn-primary" href="/capabilities">
              Explore Capabilities
            </Link>
            <Link className="btn btn-ghost" href="/contact">
              Discuss a Technology Project
            </Link>
          </motion.div>
          <motion.div variants={heroItem}>
            <Link href="/afcos" className="inline-link">
              Explore AFCOS →
            </Link>
          </motion.div>
          <motion.div className="capability-bar" variants={heroItem}>
            <span>Propulsion</span>
            <span>Controls</span>
            <span>Electronics</span>
            <span>AI</span>
            <span>Digital Twins</span>
            <span>Autonomy</span>
          </motion.div>
        </motion.div>
      </section>

      {/* From Marine Engineering to Maritime Intelligence */}
      <section className="section pain-point-section">
        <div className="container">
          <FadeUp>
            <p className="section-label">From marine engineering to maritime intelligence</p>
            <div className="pain-point-block">
              <p>
                Sealink combines marine engineering, propulsion, control systems, electronics,
                physics-based modelling and artificial intelligence to develop practical
                technologies for the next generation of maritime platforms.
              </p>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Core capabilities */}
      <section className="section section-dark" id="capabilities">
        <div className="container">
          <FadeUp>
            <p className="section-label">01 — What we do</p>
            <h2>Engineering Across the Maritime Technology Stack</h2>
          </FadeUp>
          <div className="feature-grid" style={{ marginTop: 28 }}>
            {coreCapabilities.map((c, i) => (
              <CapabilityCard key={c.num} num={c.num} title={c.title} desc={c.desc} href={c.href} delay={i * 0.07} />
            ))}
          </div>
        </div>
      </section>

      {/* Marine Propulsion */}
      <section className="section" id="propulsion">
        <div className="container">
          <FadeUp>
            <p className="section-label">02 — Marine propulsion</p>
            <h2>Indigenous Marine Propulsion</h2>
            <p className="product-intro">
              Sealink is developing indigenous propulsion technologies for compact marine
              platforms, with emphasis on efficiency, reliability, maintainability,
              controllability and integration with modern vessel systems.
            </p>
          </FadeUp>
          <FadeUp delay={0.08}>
            <ArchitectureFlow
              stages={['Engine', 'Fuel / Combustion', 'Engine Control', 'Propulsion', 'Vessel Control', 'Monitoring', 'Intelligent Optimisation']}
            />
          </FadeUp>
          <FadeUp delay={0.1} className="hero-actions" >
            <Link className="btn btn-primary" href="/capabilities/marine-propulsion">
              Explore Marine Propulsion
            </Link>
          </FadeUp>
        </div>
      </section>

      {/* Intelligent propulsion */}
      <section className="section section-dark" id="intelligent-propulsion">
        <div className="container">
          <FadeUp>
            <p className="section-label">03 — Software &amp; AI</p>
            <h2>Intelligence Behind the Propulsion System</h2>
            <p className="product-intro">
              Our software and AI technologies connect propulsion, vessel performance and
              operational data to make marine systems measurable, predictable and optimisable.
            </p>
          </FadeUp>
          <FadeUp delay={0.1} className="hero-actions">
            <Link className="btn btn-primary" href="/capabilities/intelligent-propulsion">
              Explore Intelligent Propulsion
            </Link>
          </FadeUp>
        </div>
      </section>

      {/* AFCOS teaser */}
      <section className="section" id="afcos">
        <div className="container">
          <FadeUp>
            <p className="section-label">04 — Flagship product</p>
          </FadeUp>
          <FadeUp delay={0.05}>
            <div className="product-header">
              <div>
                <h2>AFCOS</h2>
                <p className="product-sub">AI-Based Fuel Consumption Optimization System</p>
              </div>
              <span className="pill">Physics-informed voyage &amp; engine optimisation</span>
            </div>
          </FadeUp>
          <FadeUp delay={0.1}>
            <p className="product-intro">
              AFCOS fuses voyage data, weather, hull resistance models, and engine telemetry to
              recommend optimal speed and power settings — while keeping the crew in control at
              all times. It is Sealink&apos;s flagship demonstration of engineering knowledge turned
              into operational software.
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
          <FadeUp delay={0.15}>
            <div className="dashboard-intro">
              <p className="section-label" style={{ marginTop: 40 }}>Live system — MT TRF Kirkenes</p>
              <h3 className="dashboard-heading">AFCOS running at sea, not in a lab</h3>
              <p className="dashboard-sub">
                Deployed aboard MT TRF Kirkenes, covering voyage planning, IMO CII compliance,
                seakeeping safety, and bunker planning in one connected platform.
              </p>
            </div>
          </FadeUp>
          <FadeUp delay={0.1} className="hero-actions" style={{ marginTop: 32 }}>
            <Link className="btn btn-primary" href="/afcos">
              Explore AFCOS in full
            </Link>
          </FadeUp>
        </div>
      </section>

      {/* Incubation */}
      <section className="section" id="incubation">
        <div className="container">
          <FadeUp>
            <p className="section-label">Incubation</p>
          </FadeUp>
          <FadeUp delay={0.05}>
            <div className="incubation-panel">
              <div className="incubation-logos">
                <img
                  src="/assets/dst-logo.png"
                  alt="Department of Science &amp; Technology (DST), Government of India"
                  width={198}
                  height={71}
                  loading="lazy"
                  decoding="async"
                />
                <span className="incubation-divider" aria-hidden="true" />
                <img
                  src="/assets/dst-nidhi-logo.png"
                  alt="DST NIDHI — Start-to-Scale Startup Support"
                  width={203}
                  height={72}
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <p className="incubation-text">
                Sea Link Electrical and Software is incubated under the <strong>DST NIDHI</strong>{' '}
                cohort program of the Department of Science &amp; Technology, Government of India,
                conducted at <strong>IIT Madras</strong> — a company-wide credential behind our
                propulsion, controls, and intelligent systems work.
              </p>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* CTA */}
      <section className="section section-cta">
        <FadeUp className="container">
          <div className="cta-panel">
            <div>
              <p className="section-label">05 — Get in touch</p>
              <h2>Build the next maritime system with us</h2>
              <p>
                Discuss propulsion development, marine electronics, intelligent maritime systems,
                autonomy, software or technology partnerships with our engineering team.
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
