'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import FadeUp from '@/components/ui/FadeUp'
import PageHero from '@/components/ui/PageHero'
import StatusPill, { DevStage } from '@/components/ui/StatusPill'

const projects: {
  name: string
  domain: string
  problem: string
  technology: string
  stage: DevStage
  disciplines: string
  href?: string
}[] = [
  {
    name: 'AFCOS',
    domain: 'Fuel & voyage optimisation',
    problem: 'Ships lose fuel efficiency and engine health when speed and power are set without accounting for real engine and sea-state physics.',
    technology: 'Physics-informed AI, hull/propeller/engine models, live weather and telemetry.',
    stage: 'Field Tested',
    disciplines: 'Naval architecture, engine thermodynamics, machine learning, software engineering',
    href: '/afcos',
  },
  {
    name: 'Autonomous Maritime Systems',
    domain: 'Guidance, navigation & control',
    problem: 'Uncrewed maritime platforms need integrated sensing, decision-making, and propulsion control to operate safely.',
    technology: 'Sensor fusion, guidance and navigation logic, control systems.',
    stage: 'Research',
    disciplines: 'Controls engineering, robotics, sensor integration',
    href: '/capabilities/autonomous-systems',
  },
  {
    name: 'Digital Twin & Engine Modelling',
    domain: 'Digital engineering',
    problem: 'Physical testing alone is slow and expensive for validating propulsion and engine designs.',
    technology: 'CFD hull modelling, engine thermodynamic simulation, digital twin frameworks.',
    stage: 'Under Development',
    disciplines: 'Naval architecture, thermodynamics, simulation engineering',
    href: '/capabilities/digital-engineering',
  },
  {
    name: 'Marine Propulsion Development',
    domain: 'Indigenous propulsion',
    problem: 'Specialised marine platforms need compact, efficient, and controllable propulsion systems built and supported domestically.',
    technology: 'Engine architecture, propulsion matching, electronic control.',
    stage: 'Under Development',
    disciplines: 'Mechanical engineering, controls engineering, marine electronics',
    href: '/capabilities/marine-propulsion',
  },
]

export default function ProjectsClient() {
  return (
    <main>
      <PageHero
        eyebrow="Projects"
        title="Project"
        titleAccent="Portfolio"
        lead="Engineering work across propulsion, controls, intelligent systems, and autonomy — from active flagship product to research-stage work."
        variant="plain"
      />

      <section className="section">
        <div className="container">
          <div className="project-grid">
            {projects.map((p, i) => (
              <motion.article
                key={p.name}
                className="card card-accent"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.5, delay: i * 0.08, ease: 'easeOut' }}
              >
                <div className="project-card-header">
                  <div>
                    <p className="project-domain">{p.domain}</p>
                    <h3 style={{ fontSize: 20 }}>{p.name}</h3>
                  </div>
                  <StatusPill stage={p.stage} />
                </div>
                <p>{p.problem}</p>
                <ul className="project-meta-list">
                  <li><strong>Technology:</strong>{p.technology}</li>
                  <li><strong>Disciplines:</strong>{p.disciplines}</li>
                </ul>
                {p.href && (
                  <Link href={p.href} className="capability-link" style={{ marginTop: 16, display: 'inline-block' }}>
                    Learn more →
                  </Link>
                )}
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-cta">
        <FadeUp className="container">
          <div className="cta-panel">
            <div>
              <h2>Have a project in mind?</h2>
              <p>Talk to our engineering team about propulsion, controls, electronics, or intelligent systems work.</p>
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
