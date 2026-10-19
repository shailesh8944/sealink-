'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import FadeUp from '@/components/ui/FadeUp'
import PageHero from '@/components/ui/PageHero'

const coreTeam = [
  {
    name: 'Shailesh Yadav',
    role: 'Co-Founder & CEO',
    photo: '/assets/team/shailesh-yadav.png',
    bio: 'Marine Engineer (Indian Maritime University, Kolkata). Class 4 Certificate of Competency; sea service with Fleet Management Limited. MS Ocean Engineering, IIT Madras. Research on autonomous surface vessels; two conference papers.',
  },
  {
    name: 'Vinay Tripathi',
    role: 'Co-Founder & COO',
    photo: '/assets/team/vinay-tripathi.png',
    bio: 'Marine engineer with 15+ years at sea on dual-fuel vessels. Brings hands-on operating experience to every product decision.',
  },
  {
    name: 'Sagar Yadav',
    role: 'Co-Founder & Chief Business Officer',
    photo: '/assets/team/sagar-yadav.png',
    bio: 'B.Tech Mechanical Engineering. MS Management Science, IIT Madras. Three years in supply chain management. Leads customers, partnerships and business development.',
  },
  {
    name: 'Fazal',
    role: 'Technical Head',
    photo: '/assets/team/fazal.png',
    bio: 'B.Tech Marine Engineering (Indian Maritime University, Navi Mumbai). MS Ocean Engineering, IIT Madras. Leads system design and implementation.',
  },
]


const beliefs = [
  { num: '01', title: 'Engineering before hype', desc: 'We build technology first — the story follows the engineering, not the other way round.' },
  { num: '02', title: 'Physics before black-box assumptions', desc: 'We combine first-principles naval architecture and thermodynamics with data-driven learning — not black-box guesses.' },
  { num: '03', title: 'Crew and operator safety first', desc: 'Recommendations must be explainable, override-safe, and built for real bridge and operational workflows.' },
]

export default function AboutClient() {
  return (
    <main>
      <PageHero
        eyebrow="About us"
        title="Who we"
        titleAccent="are"
        lead="Sea Link Electrical and Software Private Limited is an Indian maritime technology company developing fuel-optimisation software, marine propulsion, controls, electronics, and intelligent maritime systems."
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
                  AFCOS (Adaptive Fuel and Course Optimisation System), our physics-informed voyage
                  and fuel optimisation platform, has been validated on real vessel data from two
                  tankers, achieving 3.3–3.6% mean absolute percentage error in fuel prediction.
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
                  <p className="card-meta">Sea Link Electrical and Software Private Limited</p>
                  <p className="card-meta" style={{ marginTop: 8 }}>Founded at IIT Madras, incubated at the Gopalakrishnan-Deshpande Centre, IIT Madras.</p>
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

      {/* Founder story */}
      <section className="section">
        <div className="container">
          <FadeUp>
            <p className="section-label">Our story</p>
            <h2>Built from the bridge</h2>
            <div className="about-grid">
              <div>
                <p>
                  Sealink was founded by marine engineers and researchers who sailed on commercial
                  vessels and saw first-hand how much fuel and engine life depended on information
                  the crew did not have — speed and engine-load decisions made on noon reports and
                  experience alone, without real-time data or physics-backed tools.
                </p>
                <p>
                  The founding team brought that problem to IIT Madras, combining naval-architecture
                  physics with machine learning. Using real noon-report data from working tankers,
                  the first version of AFCOS was built and validated against data from two vessels
                  with MAN B&amp;W two-stroke engines — achieving 3.3–3.6% mean absolute percentage
                  error in fuel prediction.
                </p>
                <p>
                  Sea Link Electrical and Software was founded in 2026 to turn that research into
                  products: fuel and voyage optimisation today, and propulsion, controls and
                  autonomy systems designed in India next. The company is incubated at the
                  Gopalakrishnan-Deshpande Centre, IIT Madras, under the Department of Science and
                  Technology (DST) I-NCUBATE programme, and recognised by Startup India
                  (Department for Promotion of Industry and Internal Trade).
                </p>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Research and publications */}
      <section className="section section-dark">
        <div className="container">
          <FadeUp>
            <p className="section-label">Research &amp; publications</p>
            <h2>Published work</h2>
            <p style={{ color: '#a8c0d8', marginBottom: 32, maxWidth: 640 }}>
              The following paper underpins the physics-informed models in AFCOS.
            </p>
          </FadeUp>
          <FadeUp delay={0.06}>
            <ul className="publications-list">
              <li className="publication-item">
                <span className="publication-venue">38th National Marine Convention · The Institution of Engineers (India) · Chennai · 11–12 September 2026</span>
                <p className="publication-title">AFCOS: An Adaptive Fuel and Course Optimisation System for Marine Vessels using Physics-Informed Machine Learning</p>
                <p style={{ fontSize: 13, color: '#a8c0d8', margin: 0 }}>
                  Shailesh Yadav, Vinay Kr. Tripathi, Sagar Yadav
                </p>
              </li>
            </ul>
          </FadeUp>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <FadeUp>
            <p className="section-label">Our team</p>
            <h2 style={{ marginBottom: '2.5rem' }}>The people behind Sealink</h2>
          </FadeUp>
          <div className="team-grid">
            {coreTeam.map((member, i) => (
              <motion.article
                key={member.name}
                className="team-card"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.5, delay: i * 0.08, ease: 'easeOut' }}
              >
                <div className="team-photo-wrap">
                  <img src={member.photo} alt={member.name} className="team-photo" loading="lazy" decoding="async" />
                </div>
                <div className="team-info">
                  <h3>{member.name}</h3>
                  <p className="team-role">{member.role}</p>
                  <p className="team-bio">{member.bio}</p>
                </div>
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
                <img src="/assets/gdc-logo.png" alt="Gopalakrishnan-Deshpande Centre, IIT Madras — STEM to Startup" width={203} height={72} loading="lazy" decoding="async" />
              </div>
              <p className="incubation-text">
                Sea Link Electrical and Software Private Limited is incubated under the{' '}
                <strong>DST I-NCUBATE</strong> programme of the Department of Science &amp;
                Technology (DST), Government of India, at the{' '}
                <strong>Gopalakrishnan-Deshpande Centre for Innovation and Entrepreneurship,
                IIT Madras</strong>. Recognised by <strong>Startup India</strong> (Department for
                Promotion of Industry and Internal Trade).
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
