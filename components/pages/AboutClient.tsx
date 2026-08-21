'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import FadeUp from '@/components/ui/FadeUp'
import PageHero from '@/components/ui/PageHero'

const beliefs = [
  { num: '01', title: 'Engineering before hype', desc: 'We build technology first — the story follows the engineering, not the other way round.' },
  { num: '02', title: 'Physics before black-box assumptions', desc: 'We combine first-principles naval architecture and thermodynamics with data-driven learning — not black-box guesses.' },
  { num: '03', title: 'Crew and operator safety first', desc: 'Recommendations must be explainable, override-safe, and built for real bridge and operational workflows.' },
  { num: '04', title: 'Indigenous capability', desc: 'Built in India for Indian and global platforms — sovereign technology for critical maritime operations.' },
  { num: '05', title: 'Validation in the real world', desc: 'Models and prototypes are tested against real operational data and real sea conditions, not only simulations.' },
  { num: '06', title: 'Hardware + software integration', desc: 'Propulsion, controls, electronics, and software are engineered together, not as separate afterthoughts.' },
]

export default function AboutClient() {
  return (
    <main>
      <PageHero
        eyebrow="About us"
        title="Who we"
        titleAccent="are"
        lead="Sea Link Electrical and Software Pvt. Ltd is an Indian marine technology company developing propulsion, control, electronics, software and intelligent maritime systems."
        variant="ship"
        bgImage="/assets/vpo-spot.jpg"
      />

      <section className="section">
        <div className="container">
          <FadeUp>
            <div className="about-grid">
              <div>
                <h2>Marine engineering, engineered for operational reality</h2>
                <p>
                  Our engineering approach combines marine science, mechanical systems, control
                  engineering, computational modelling and artificial intelligence to solve real
                  maritime problems — across propulsion, controls, electronics, software, and
                  intelligent systems.
                </p>
                <p>
                  AFCOS, our AI-Based Fuel Consumption Optimization System, remains the clearest
                  evidence of this approach turned into operational technology — deployed and
                  running aboard MT TRF Kirkenes today.
                </p>
              </div>
              <div className="about-cards">
                <article className="card card-accent">
                  <h3>Mission</h3>
                  <p>Build indigenous maritime technologies that are technically rigorous, operationally practical and capable of deployment in the real world.</p>
                </article>
                <article className="card card-accent">
                  <h3>Vision</h3>
                  <p>Build globally relevant marine engineering and intelligent maritime systems from India.</p>
                </article>
                <article className="card">
                  <h3>Company</h3>
                  <p className="card-meta">Sea Link Electrical and Software Pvt. Ltd</p>
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
                transition={{ duration: 0.5, delay: i * 0.08, ease: 'easeOut' }}
              >
                <div className="feature-icon">{b.num}</div>
                <h3>{b.title}</h3>
                <p>{b.desc}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <FadeUp>
            <div className="incubation-panel">
              <div className="incubation-logos">
                <img src="/assets/dst-logo.png" alt="Department of Science &amp; Technology (DST), Government of India" width={198} height={71} loading="lazy" decoding="async" />
                <span className="incubation-divider" aria-hidden="true" />
                <img src="/assets/dst-nidhi-logo.png" alt="DST NIDHI — Start-to-Scale Startup Support" width={203} height={72} loading="lazy" decoding="async" />
              </div>
              <p className="incubation-text">
                Sea Link Electrical and Software is incubated under the <strong>DST NIDHI</strong>{' '}
                cohort program of the Department of Science &amp; Technology, Government of India,
                conducted at <strong>IIT Madras</strong>.
              </p>
            </div>
          </FadeUp>
        </div>
      </section>

      <section className="section section-cta">
        <FadeUp className="container">
          <div className="cta-panel">
            <div>
              <h2>Work with us</h2>
              <p>Pilots, partnerships, or custom maritime engineering — we would like to hear from you.</p>
            </div>
            <div className="contact-actions">
              <Link className="btn btn-primary" href="/contact">Contact us</Link>
              <Link className="btn btn-ghost" href="/afcos">View AFCOS</Link>
            </div>
          </div>
        </FadeUp>
      </section>
    </main>
  )
}
