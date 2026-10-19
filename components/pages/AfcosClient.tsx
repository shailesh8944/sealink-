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
        eyebrow="AFCOS — Adaptive Fuel and Course Optimisation System"
        title="AFCOS"
        lead="Physics-informed voyage and fuel optimisation for real-world marine operations. Validated on noon-report data from two tankers: 3.3–3.6% mean absolute percentage error in fuel prediction."
        variant="ship"
        bgImage="/assets/afcos-login-screen.png"
      >
        <div className="hero-actions" style={{ marginTop: 8 }}>
          <StatusPill stage="Validated on vessel data" />
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
            <p className="section-label">02 — Inside AFCOS</p>
            <h2>Inside AFCOS</h2>
            <p className="dashboard-sub" style={{ marginBottom: 28 }}>
              Product screens from the AFCOS Planning Station — voyage planning, IMO Carbon
              Intensity Indicator (CII) compliance, seakeeping safety, and bunker planning in one
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
              <img src="/assets/afcos-voyage-planning.jpg" alt="AFCOS Planning Station showing a chart-based voyage plan, wave height along route, and leg-by-leg RPM schedule" width={1600} height={831} loading="lazy" decoding="async" />
              <figcaption className="dashboard-caption">
                <strong>Voyage planning</strong>
                <span>The Planning Station lays a chart-based passage plan over live weather, comparing candidate routes by fuel burn, duration, worst-leg wave height, and CII rating before a voyage is approved.</span>
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
              AFCOS uses a hybrid physics and machine-learning model: first-principles hull, wave,
              engine and propeller models set the baseline, and a machine-learning layer (XGBoost)
              corrects the remaining error. Hydrodynamic and thermodynamic principles are embedded
              directly into the models, so predictions stay bounded by real physics.
            </p>
          </FadeUp>
          <FadeUp delay={0.06}>
            <ArchitectureFlow
              stages={['Hull Resistance', 'Wave Added Resistance', 'Engine Model', 'Propeller Model', 'Machine-Learning Correction', 'Fuel / Speed Recommendation']}
            />
          </FadeUp>
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
                  Savings figures will be published separately as measured, voyage-verified results
                  become available.
                </p>
              </div>
              <span className="pill">Target — not a measured result</span>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Installation and integration */}
      <section className="section">
        <div className="container">
          <FadeUp>
            <p className="section-label">05 — Installation &amp; integration</p>
            <h2>Getting AFCOS aboard your vessel</h2>
          </FadeUp>
          <FadeUp delay={0.06}>
            <div className="why-grid">
              <div className="why-card">
                <div className="why-card-num">01</div>
                <h3>Minimal hardware</h3>
                <p>Runs on an existing onboard computer or our compact edge unit. No changes to engine or navigation equipment are needed.</p>
              </div>
              <div className="why-card">
                <div className="why-card-num">02</div>
                <h3>Data inputs</h3>
                <p>Noon reports, engine logs, Global Positioning System (GPS) position, fuel meter readings, and third-party weather feeds. Works with manual data entry if automated sensors are not available.</p>
              </div>
              <div className="why-card">
                <div className="why-card-num">03</div>
                <h3>Setup time</h3>
                <p>Typical installation and commissioning: 2–4 weeks, depending on vessel data availability and connectivity. Remote configuration is available for fleets outside Indian ports.</p>
              </div>
              <div className="why-card">
                <div className="why-card-num">04</div>
                <h3>Works with older vessels</h3>
                <p>AFCOS is designed for vessels without modern sensor arrays. Where data is sparse, the physics-informed model compensates — making it viable for bulk carriers, tankers, and coastal vessels of any age.</p>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Data Acquisition Box */}
      <section className="section">
        <div className="container">
          <FadeUp>
            <p className="section-label">06 — Data Acquisition Box</p>
            <h2>One Box. Every Sensor. Zero Manual Reports.</h2>
            <p className="product-intro">
              Sealink&apos;s indigenously developed Data Acquisition Box (DABox) sits at the heart of AFCOS —
              consolidating every onboard sensor into a single, unified data stream. No manual noon reports.
              No transcription errors. No dependence on crew availability to log data.
            </p>
          </FadeUp>
          <FadeUp delay={0.04}>
            <div style={{ margin: '28px auto 0', maxWidth: 800, borderRadius: 12, overflow: 'hidden', border: '1px solid #1e2530', background: '#0d0f14' }}>
              <img
                src="/assets/dabox-device.svg"
                alt="Sealink DABox — Data Acquisition Box hardware unit showing front panel with DABox label, status LEDs, Ethernet, RS-485, NMEA, CAN Bus and GPS ports"
                width={800}
                height={480}
                style={{ display: 'block', width: '100%', height: 'auto' }}
              />
            </div>
          </FadeUp>
          <FadeUp delay={0.06}>
            <div className="why-grid" style={{ marginTop: 28 }}>
              <div className="why-card">
                <div className="why-card-num">01</div>
                <h3>Unified sensor fusion</h3>
                <p>DABox aggregates data from GPS, fuel flow meters, engine sensors, anemometers, and draft gauges into one time-synced feed — eliminating the fragmented, siloed logs that make fleet analysis unreliable.</p>
              </div>
              <div className="why-card">
                <div className="why-card-num">02</div>
                <h3>Automated noon reports</h3>
                <p>Noon reports are generated automatically from live sensor data and transmitted to shore without any crew intervention. The reports conform to standard maritime formats — ready for charterers, managers, and regulators the moment they are due.</p>
              </div>
              <div className="why-card">
                <div className="why-card-num">03</div>
                <h3>Real-time analytics</h3>
                <p>DABox continuously feeds AFCOS&apos;s analytics engine, producing voyage performance summaries, fuel consumption trends, and anomaly alerts as the voyage unfolds — not days later when the data is cold.</p>
              </div>
              <div className="why-card">
                <div className="why-card-num">04</div>
                <h3>Built for every vessel</h3>
                <p>Designed and manufactured in India at a fraction of the cost of imported equivalents. Simple enough to install on a fishing vessel. Robust enough for deep-sea commercial operations. No specialist integrator required.</p>
              </div>
            </div>
          </FadeUp>
          <FadeUp delay={0.1}>
            <div className="incubation-panel" style={{ marginTop: 32 }}>
              <div>
                <p className="section-label" style={{ marginBottom: 8 }}>Indigenously developed</p>
                <p style={{ margin: 0, color: 'var(--muted)', maxWidth: 640 }}>
                  DABox is designed, developed, and manufactured in India by the Sealink team —
                  keeping costs low, lead times short, and support local. From coastal fishing fleets
                  to deep-sea tankers, the same hardware adapts to every operational scale.
                </p>
              </div>
              <span className="pill">Made in India</span>
            </div>
          </FadeUp>
          <FadeUp delay={0.12}>
            <div className="domain-tags" style={{ marginTop: 24 }}>
              <span>Sensor Fusion</span>
              <span>Auto Noon Reports</span>
              <span>Zero Manual Entry</span>
              <span>Fishing Vessel Ready</span>
              <span>Indigenously Developed</span>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Data security and ownership */}
      <section className="section section-dark">
        <div className="container">
          <FadeUp>
            <p className="section-label">07 — Data security &amp; ownership</p>
            <h2>Your data stays yours</h2>
            <div className="why-grid" style={{ marginTop: 28 }}>
              <div className="why-card">
                <div className="why-card-num">01</div>
                <h3>Data ownership</h3>
                <p>All vessel operational data remains the sole property of the ship owner or manager. Sealink does not use customer data for training shared models without explicit written consent.</p>
              </div>
              <div className="why-card">
                <div className="why-card-num">02</div>
                <h3>Storage and access</h3>
                <p>Data is stored on encrypted servers hosted in India. Access is restricted to authorised personnel from the vessel operator and Sealink support team under a signed data-processing agreement.</p>
              </div>
              <div className="why-card">
                <div className="why-card-num">03</div>
                <h3>No third-party sharing</h3>
                <p>Operational data is never sold or shared with third parties, including flag states, port authorities, or commercial data brokers, without the owner&apos;s written instruction.</p>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Pricing */}
      <section className="section">
        <div className="container">
          <FadeUp>
            <div className="incubation-panel">
              <div>
                <p className="section-label" style={{ marginBottom: 8 }}>08 — Pricing</p>
                <h3 style={{ margin: '0 0 8px', color: 'var(--white)' }}>Per-vessel annual subscription</h3>
                <p style={{ margin: 0, color: 'var(--dark-muted)', maxWidth: 560 }}>
                  AFCOS is priced on a per-vessel annual subscription basis. Pricing depends on
                  vessel type, data availability, and integration scope.{' '}
                  <Link href="/contact" className="inline-link">Contact us for a quote →</Link>
                </p>
              </div>
              <span className="pill">Contact for pricing</span>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* FAQ */}
      <section className="section section-dark">
        <div className="container">
          <FadeUp>
            <p className="section-label">09 — Frequently asked questions</p>
            <h2>Common questions</h2>
          </FadeUp>
          <FadeUp delay={0.06}>
            <div className="faq-list">
              {[
                {
                  q: 'How much crew training does AFCOS require?',
                  a: 'AFCOS is designed for bridge officers with no software background. A typical onboarding session takes half a day. The interface uses familiar maritime concepts — speed, heading, fuel rate — and avoids technical jargon. Remote refresher training is available at any time.',
                },
                {
                  q: 'Can the crew override any AFCOS recommendation?',
                  a: 'Yes, always. AFCOS is a decision-support tool, not an autopilot. Every recommendation can be dismissed or ignored by the officer on watch. Safety overrides take immediate effect and the system recomputes around the crew\'s decision.',
                },
                {
                  q: 'How accurate are the fuel saving predictions?',
                  a: 'Predictions are built on vessel-specific hull resistance models, propeller curves, and engine thermodynamics — not generic fleet averages. Accuracy improves over the first few voyages as the model calibrates to actual sensor readings. Target savings are up to 15%; actual savings depend on route, weather, and operating profile.',
                },
                {
                  q: 'What support is available when the vessel is at sea?',
                  a: 'Email and satellite-call support is available during business hours (India Standard Time). Critical alerts and system faults are flagged to our operations team automatically. An offline mode allows full use of previously computed voyage plans if connectivity is lost.',
                },
                {
                  q: 'What is the minimum contract length?',
                  a: 'We offer a trial deployment period followed by an annual subscription. Multi-vessel and multi-year agreements are available at discounted rates. Contact us to discuss terms that suit your fleet.',
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  className="faq-item"
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{ duration: 0.4, delay: i * 0.07, ease: 'easeOut' }}
                >
                  <h3 className="faq-q">{item.q}</h3>
                  <p className="faq-a">{item.a}</p>
                </motion.div>
              ))}
            </div>
          </FadeUp>
        </div>
      </section>

      <section className="section section-cta">
        <FadeUp className="container">
          <div className="cta-panel">
            <div>
              <h2>Book a demo</h2>
              <p>See AFCOS running live. We will walk through voyage planning, Carbon Intensity Indicator (CII) compliance, and fuel savings for a vessel similar to yours.</p>
            </div>
            <div className="contact-actions">
              <Link className="btn btn-primary" href="/contact">Book a demo</Link>
              <Link className="btn btn-ghost" href="/technology/physics-informed-ai">Our technology</Link>
            </div>
          </div>
        </FadeUp>
      </section>
    </main>
  )
}
