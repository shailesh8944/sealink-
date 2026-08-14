'use client'
import Link from 'next/link'
import FadeUp from '@/components/ui/FadeUp'
import PageHero from '@/components/ui/PageHero'
import CapabilityCard from '@/components/ui/CapabilityCard'

const capabilities = [
  { num: '01', title: 'Marine Propulsion', desc: 'Development and integration of compact, efficient and reliable propulsion systems for specialised marine platforms.', href: '/capabilities/marine-propulsion' },
  { num: '02', title: 'Engine & Propulsion Controls', desc: 'Engine control, electronic control systems, propulsion control, sensors, telemetry and monitoring.', href: '/capabilities/engine-controls' },
  { num: '03', title: 'Marine Electronics', desc: 'Sensor integration, data acquisition, onboard monitoring, communication and intelligent instrumentation.', href: '/capabilities/marine-electronics' },
  { num: '04', title: 'Intelligent Propulsion', desc: 'Physics-informed AI, fuel optimisation, performance prediction, diagnostics and digital twins.', href: '/capabilities/intelligent-propulsion' },
  { num: '05', title: 'Autonomous Maritime Systems', desc: 'Guidance, navigation, vessel control, mission planning and autonomous surface vessel technologies.', href: '/capabilities/autonomous-systems' },
  { num: '06', title: 'Digital Engineering', desc: 'Simulation, mathematical modelling, digital twins, system architecture and hardware/software integration.', href: '/capabilities/digital-engineering' },
]

export default function CapabilitiesHubClient() {
  return (
    <main>
      <PageHero
        eyebrow="Capabilities"
        title="Engineering Across the"
        titleAccent="Maritime Technology Stack"
        lead="From propulsion hardware to autonomy software — the disciplines Sealink works across to build maritime platforms."
        variant="plain"
      />
      <section className="section">
        <div className="container">
          <div className="feature-grid">
            {capabilities.map((c, i) => (
              <CapabilityCard key={c.num} num={c.num} title={c.title} desc={c.desc} href={c.href} delay={i * 0.07} />
            ))}
          </div>
        </div>
      </section>
      <section className="section section-cta">
        <FadeUp className="container">
          <div className="cta-panel">
            <div>
              <h2>Have a technology requirement?</h2>
              <p>Tell us about your propulsion, controls, electronics, or autonomy project.</p>
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
