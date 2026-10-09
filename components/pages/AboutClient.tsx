'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import FadeUp from '@/components/ui/FadeUp'
import PageHero from '@/components/ui/PageHero'

const coreTeam = [
  {
    name: 'Shailesh Yadav',
    role: 'Founder & CEO',
    photo: '/assets/team/shailesh-yadav.png',
    bio: 'Marine Engineer (IMU Kolkata). MS Ocean Engineering, IIT Madras. 1+ year sailing, Class 4 CoC. Research on cooperative pursuit-evasion differential games for autonomous surface vessels.',
  },
  {
    name: 'Sagar Yadav',
    role: 'Founder & Chief Business Officer',
    photo: '/assets/team/sagar-yadav.png',
    bio: 'B.Tech Mechanical Engineering. MS Management Science, IIT Madras. 3+ years in Supply Chain Management. Leads business development, marketing, and customer outreach.',
  },
  {
    name: 'Vinay Tripathi',
    role: 'Founder & COO',
    photo: '/assets/team/vinay-tripathi.png',
    bio: 'Marine Engineer with 15+ years as an Operation Engineer aboard Dual Fuel Vessels. Deep domain expertise in marine operations and dual-fuel vessel systems.',
  },
  {
    name: 'Fazal',
    role: 'Technical Head',
    photo: '/assets/team/fazal.png',
    bio: 'B.Tech Marine Engineering (IMU Navi Mumbai). MS Ocean Engineering, IIT Madras. Leads technical development, system design, and implementation for maritime technology products.',
  },
]

const advisors = [
  {
    name: 'Prof. Anand Krishnasamy',
    role: 'Advisor — Internal Combustion Engine',
    photo: '/assets/team/anand-krishnasamy.png',
    bio: 'Department of Mechanical Engineering, IIT Madras. ICE Lab. Expert in engine performance, emissions, combustion diagnostics, and fuel injection systems.',
  },
  {
    name: 'Dr M. Ravichandran',
    role: 'Advisor — Weather Routing & Voyage Optimisation',
    photo: '/assets/team/dr-ravichandran.png',
    bio: 'Professor, Dept. of Ocean Engineering, IIT Madras. Former Secretary, Ministry of Earth Sciences, Govt. of India. Expert in ocean weather modelling and voyage optimisation.',
  },
  {
    name: 'Venketachalan Iyer',
    role: 'Business Advisor',
    photo: '/assets/team/venketachalan-iyer.png',
    bio: 'B.Tech IIT Kanpur, MBA IIM Ahmedabad. 35+ years industry experience in senior leadership at Tata Steel and other major industries. Strategic guidance on commercial growth and scaling.',
  },
]

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
                  and fuel optimisation platform, is the clearest evidence of this — deployed and
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
                  <p className="card-meta">Sea Link Electrical and Software Private Limited</p>
                  <p className="card-meta" style={{ marginTop: 8 }}>Founded by IIT Madras marine engineers and researchers, incubated at the Gopalakrishnan-Deshpande Centre, IIT Madras.</p>
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
                  Shailesh Yadav sailed as a marine engineer for over a year aboard commercial
                  vessels. On every voyage, the same problem was visible: fuel was burned
                  inefficiently because decisions on speed, routing, and engine load were made
                  without good real-time data — and because the tools that existed used historical
                  patterns rather than the ship&apos;s actual physics.
                </p>
                <p>
                  At IIT Madras, researching autonomous surface vessels and ocean engineering, he
                  saw how physics-informed models and modern machine learning could close that gap.
                  With co-founders Sagar Yadav, Vinay Tripathi, and Fazal — all with deep maritime
                  or engineering backgrounds — Sealink was founded to build AFCOS: a system that
                  gives bridge officers and fleet managers the same quality of decision support that
                  aviation has had for decades, built on real hull, propeller, and engine physics.
                </p>
                <p>
                  The company is incubated at the Gopalakrishnan-Deshpande Centre, IIT Madras,
                  under the Department of Science and Technology (DST) I-NCUBATE programme.
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
            <p style={{ color: 'var(--dark-muted)', marginBottom: 32, maxWidth: 640 }}>
              Sealink&apos;s technology is grounded in peer-reviewed research. The following papers
              underpin the physics-informed models in AFCOS.
            </p>
          </FadeUp>
          <FadeUp delay={0.06}>
            <ul className="publications-list">
              <li className="publication-item">
                <span className="publication-venue">38th National Marine Convention · Institute of Engineers (India) · Chennai · 11–12 September</span>
                <p className="publication-title">AFCOS: An Adaptive Fuel and Course Optimisation System for Marine Vessels using Physics-Informed Machine Learning</p>
                <p style={{ fontSize: 13, color: 'var(--dark-muted)', margin: '0 0 10px' }}>
                  Shailesh Yadav, Vinay Kr. Tripathi, Sagar Yadav
                </p>
                <p style={{ fontSize: 13, color: 'var(--dark-muted)', margin: '0 0 10px' }}>
                  Presented at Holiday Inn, Chennai
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

          <FadeUp style={{ marginTop: '3.5rem' }}>
            <p className="section-label">Advisors</p>
          </FadeUp>
          <div className="team-grid">
            {advisors.map((member, i) => (
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
                <img src="/assets/dst-nidhi-logo.png" alt="DST NIDHI — Start-to-Scale Startup Support" width={203} height={72} loading="lazy" decoding="async" />
              </div>
              <p className="incubation-text">
                Sea Link Electrical and Software Private Limited is incubated under the{' '}
                <strong>DST I-NCUBATE</strong> programme of the Department of Science &amp;
                Technology (DST), Government of India, at the{' '}
                <strong>Gopalakrishnan-Deshpande Centre for Innovation and Entrepreneurship,
                IIT Madras</strong>.
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
