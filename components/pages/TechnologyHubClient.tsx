'use client'
import Link from 'next/link'
import FadeUp from '@/components/ui/FadeUp'
import PageHero from '@/components/ui/PageHero'
import CapabilityCard from '@/components/ui/CapabilityCard'

const technologies = [
  { num: '01', title: 'Physics-Informed AI', desc: 'Hybrid models that combine hydrodynamic and thermodynamic physics with machine learning.', href: '/technology/physics-informed-ai' },
  { num: '02', title: 'Hydrodynamics', desc: 'Hull resistance, waves, added resistance, and CFD/analytical modelling.', href: '/technology/hydrodynamics' },
  { num: '03', title: 'Engine Modelling', desc: 'Thermodynamics, load, exhaust parameters, and engine performance modelling.', href: '/technology/engine-modelling' },
  { num: '04', title: 'Control Systems', desc: 'Engine control, vessel control, guidance, and optimisation logic.', href: '/technology/control-systems' },
  { num: '05', title: 'Data & Telemetry', desc: 'NMEA, engine telemetry, sensors, operational data, and monitoring.', href: '/technology/data-telemetry' },
]

export default function TechnologyHubClient() {
  return (
    <main>
      <PageHero
        eyebrow="Technology"
        title="The Engineering Behind"
        titleAccent="Sealink Systems"
        lead="The modelling, simulation, and control disciplines that underpin our propulsion, controls, and intelligent systems work."
        variant="plain"
      />
      <section className="section">
        <div className="container">
          <div className="feature-grid">
            {technologies.map((t, i) => (
              <CapabilityCard key={t.num} num={t.num} title={t.title} desc={t.desc} href={t.href} delay={i * 0.07} />
            ))}
          </div>
        </div>
      </section>
      <section className="section section-cta">
        <FadeUp className="container">
          <div className="cta-panel">
            <div>
              <h2>Want the technical detail?</h2>
              <p>Reach out to discuss our modelling and engineering approach in depth.</p>
            </div>
            <div className="contact-actions">
              <Link className="btn btn-primary" href="/contact">Contact us</Link>
            </div>
          </div>
        </FadeUp>
      </section>
    </main>
  )
}
