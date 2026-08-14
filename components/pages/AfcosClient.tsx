'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import FadeUp from '@/components/ui/FadeUp'
import PageHero from '@/components/ui/PageHero'
import ArchitectureFlow from '@/components/ui/ArchitectureFlow'
import StatusPill from '@/components/ui/StatusPill'

const capabilities = [
  { num: '01', title: 'Fuel optimisation', desc: 'Real-time MT/day consumption display with model-backed forecasts along the route.' },
  { num: '02', title: 'Voyage planning', desc: 'Route and speed plans that weigh ETA, fuel cost, and weather constraints across the full passage.' },
  { num: '03', title: 'Speed recommendations', desc: 'Weather-integrated guidance that balances ETA, fuel cost, and operational limits.' },
  { num: '04', title: 'Weather-aware planning', desc: 'Wave, swell, and wind data fused into added-resistance and voyage planning.' },
  { num: '05', title: 'Engine insight', desc: 'Physics-informed two-stroke engine models with SCADA-aligned exhaust and load monitoring.' },
  { num: '06', title: 'Seakeeping', desc: 'Predicts roll, pitch, and slamming in waves, then recommends heading and speed to protect ship and cargo.' },
  { num: '07', title: 'Bunker planning', desc: 'Forecasts consumption against bunker prices to optimise purchase timing, quantity, and port selection.' },
  { num: '08', title: 'CII support', desc: 'Tracks and forecasts a vessel\'s IMO Carbon Intensity Indicator (A–E) rating to plan ahead for compliance.' },
]

const whyDifferent = [
  {
    label: '01',
    title: 'Physics, not just historical patterns',
    desc: 'AFCOS combines real hull and engine physics with live weather and sea-state data, so it predicts engine behaviour under the conditions ahead — not just from past patterns. That holds up on routes and conditions the system has not seen before.',
  },
  {
    label: '02',
    title: 'Engine health, not fuel savings alone',
    desc: 'Because AFCOS understands how the engine behaves under different loads and sea conditions, it recommends speeds and power settings that protect the engine over the long run — not just save fuel today at the cost of wear tomorrow.',
  },
  {
    label: '03',
    title: 'Crew remains in command',
    desc: 'AFCOS makes recommendations — it does not take over. Every suggestion comes with clear overrides and alerts, so the people on the bridge stay in charge.',
  },
]

export default function AfcosClient() {
  return (
    <main>
      <PageHero
        eyebrow="Products — Flagship"
        title="AFCOS"
        lead="AI-Based Fuel Consumption Optimization System — physics-informed voyage and engine optimisation for real-world marine operations."
        variant="plain"
      >
        <div className="hero-actions" style={{ marginTop: 8 }}>
          <StatusPill stage="Field Tested" />
          <span className="pill" style={{ marginLeft: 8 }}>15% target fuel savings</span>
        </div>
      </PageHero>

      {/* What AFCOS does */}
      <section className="section">
        <div className="container">
          <FadeUp>
            <p className="section-label">01 — What AFCOS does</p>
            <h2>Fuel, voyage, and engine intelligence in one platform</h2>
          </FadeUp>
          <div className="feature-grid" style={{ marginTop: 28 }}>
            {capabilities.map((f, i) => (
              <motion.article
                key={f.num}
                className="feature"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.5, delay: i * 0.06, ease: 'easeOut' }}
              >
                <div className="feature-icon">{f.num}</div>
                <h3>{f.title}</h3>
                <p>{f.desc}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Real world deployment */}
      <section className="section section-dark">
        <div className="container">
          <FadeUp>
            <p className="section-label">02 — Live system — MT TRF Kirkenes</p>
            <h2>AFCOS Running at Sea, Not in a Lab</h2>
            <p className="dashboard-sub" style={{ marginBottom: 28 }}>
              Real screens from an active AFCOS deployment aboard MT TRF Kirkenes — voyage
              planning, IMO CII compliance, seakeeping safety, and bunker planning in one
              connected platform.
            </p>
          </FadeUp>
          <div className="dashboard-grid">
            <motion.figure
              className="dashboard-shot"
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.6, delay: 0.05, ease: 'easeOut' }}
            >
              <img src="/assets/afcos-voyage-planning.jpg" alt="AFCOS Planning Station showing an ECDIS voyage plan, wave height along route, and leg-by-leg RPM schedule" width={1600} height={831} loading="lazy" decoding="async" />
              <figcaption className="dashboard-caption">
                <strong>Voyage planning</strong>
                <span>The Planning Station lays a full ECDIS-based passage plan over live weather, comparing candidate routes by fuel burn, duration, worst-leg wave height, and CII rating before a voyage is approved.</span>
              </figcaption>
            </motion.figure>
            <motion.figure
              className="dashboard-shot"
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
            >
              <img src="/assets/afcos-cii-compliance.jpg" alt="AFCOS CII Compliance dashboard showing fleet attained vs required Carbon Intensity Indicator ratings and a what-if simulator" width={1600} height={831} loading="lazy" decoding="async" />
              <figcaption className="dashboard-caption">
                <strong>CII compliance</strong>
                <span>A fleet-wide dashboard tracks attained vs. required IMO Carbon Intensity Indicator, A–E ratings, and multi-year deterioration trends, with a what-if simulator for speed, biofuel blend, and off-hire scenarios.</span>
              </figcaption>
            </motion.figure>
            <motion.figure
              className="dashboard-shot"
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.6, delay: 0.15, ease: 'easeOut' }}
            >
              <img src="/assets/afcos-seakeeping.jpg" alt="AFCOS Seakeeping screen showing an MSC.1/Circ.1228 operational polar and righting-arm (GZ) stability curve" width={1600} height={831} loading="lazy" decoding="async" />
              <figcaption className="dashboard-caption">
                <strong>Seakeeping analysis</strong>
                <span>Built on IMO MSC.1/Circ.1228, the seakeeping screen maps surf-riding, synchronous, and parametric roll risk across every heading and speed, alongside the vessel&apos;s righting-arm (GZ) stability curve.</span>
              </figcaption>
            </motion.figure>
            <motion.figure
              className="dashboard-shot"
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
            >
              <img src="/assets/afcos-bunker-planning.jpg" alt="AFCOS Bunker and Fuel Planning screen showing a remaining-on-board and arrival-reserve calculator" width={1600} height={831} loading="lazy" decoding="async" />
              <figcaption className="dashboard-caption">
                <strong>Bunker planning</strong>
                <span>A remaining-on-board and arrival-reserve calculator projects HFO/LSMGO left at arrival and how much to bunker before departure to hold a target days-of-steaming reserve.</span>
              </figcaption>
            </motion.figure>
          </div>
        </div>
      </section>

      {/* Physics-informed architecture */}
      <section className="section">
        <div className="container">
          <FadeUp>
            <p className="section-label">03 — Physics-informed engine</p>
            <h2>Built on Physics, Not Black-Box Patterns</h2>
            <p className="product-intro">
              AFCOS is built on a hybrid Digital Twin framework driven by Physics-Informed
              Artificial Intelligence (PIAI). Hydrodynamic and thermodynamic principles are
              embedded directly into the models, so predictions stay bounded by real hull,
              propeller, and engine behaviour.
            </p>
          </FadeUp>
          <FadeUp delay={0.06}>
            <ArchitectureFlow
              stages={['Hull Resistance', 'Propeller Model', 'Engine Thermodynamics', 'Weather / Sea State', 'Physics-Informed AI', 'Fuel / Voyage / Engine Optimisation']}
            />
          </FadeUp>
          <div className="physics-figure-grid">
            <figure className="physics-figure">
              <img src="/assets/afcos-digital-twin.png" alt="AFCOS digital twin — CFD hull modeling, engine thermodynamics, propeller simulation, and neural network optimization" width={960} height={540} loading="lazy" decoding="async" />
              <figcaption>Integrated physics-informed AI — hull, engine, and propeller models fused in real time</figcaption>
            </figure>
            <figure className="physics-figure">
              <img src="/assets/afcos-piai-framework.png" alt="PIAI framework — hull CFD analysis, 2-stroke engine and propeller modeling feeding a deep neural network optimization layer" width={960} height={540} loading="lazy" decoding="async" />
              <figcaption>CFD hull analysis, propulsion system modeling, and DNN optimization layer</figcaption>
            </figure>
          </div>
          <FadeUp delay={0.08}>
            <div className="compare-table-wrap">
              <table className="compare-table">
                <thead>
                  <tr>
                    <th scope="col">Feature</th>
                    <th scope="col">Standard AI optimisation tools</th>
                    <th scope="col">Sealink physics-governed AI</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">Data dependency</th>
                    <td>Requires massive historical datasets; vulnerable to data gaps or sensor anomalies.</td>
                    <td>Operates accurately even with sparse data because the system is anchored by physical laws.</td>
                  </tr>
                  <tr>
                    <th scope="row">Operational extrapolation</th>
                    <td>Poor performance when extrapolating to unprecedented weather conditions or new routes.</td>
                    <td>Safely extrapolates across operating envelopes because physics constraints dictate the boundaries.</td>
                  </tr>
                  <tr>
                    <th scope="row">Root-cause diagnostics</th>
                    <td>Tells you <em>that</em> efficiency is dropping, but cannot accurately pinpoint <em>why</em>.</td>
                    <td>Isolates whether the loss stems from hull fouling, propeller decay, or internal engine deterioration.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Why different */}
      <section className="section section-dark">
        <div className="container">
          <FadeUp>
            <p className="section-label">04 — What makes it work</p>
            <h2>Why AFCOS is Different</h2>
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
          <FadeUp delay={0.15}>
            <div className="domain-tags" style={{ marginTop: 24 }}>
              <span>Physics-Governed</span>
              <span>Crew-in-the-Loop</span>
              <span>Real-Time</span>
              <span>Marine-Specific</span>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Target savings clarity */}
      <section className="section">
        <div className="container">
          <FadeUp>
            <div className="incubation-panel">
              <div>
                <p className="section-label" style={{ marginBottom: 8 }}>Target vs. measured</p>
                <p style={{ margin: 0, color: 'var(--muted)', maxWidth: 640 }}>
                  AFCOS is engineered toward a <strong style={{ color: 'var(--white)' }}>15% target fuel savings</strong> —
                  a model-driven design goal, not a guaranteed or universally achieved result.
                  Deployment evidence above reflects the system running live aboard MT TRF Kirkenes;
                  savings figures will be published separately as measured, voyage-verified results
                  become available.
                </p>
              </div>
              <span className="pill">Target — not a measured result</span>
            </div>
          </FadeUp>
        </div>
      </section>

      <section className="section section-cta">
        <FadeUp className="container">
          <div className="cta-panel">
            <div>
              <h2>Discuss an AFCOS pilot</h2>
              <p>Fleet integrations, pilots, and R&amp;D collaboration — talk to our team.</p>
            </div>
            <div className="contact-actions">
              <Link className="btn btn-primary" href="/contact">Contact us</Link>
              <Link className="btn btn-ghost" href="/technology/physics-informed-ai">Physics-Informed AI</Link>
            </div>
          </div>
        </FadeUp>
      </section>
    </main>
  )
}
