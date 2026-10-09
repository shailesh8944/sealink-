'use client'
import { useRef, useEffect, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Link from 'next/link'
import FadeUp from '@/components/ui/FadeUp'

const heroContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0 } },
}
const heroItem = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
}

const howItWorks = [
  {
    num: '01',
    title: 'Vessel data in',
    desc: 'Noon reports, engine sensor readings, Global Positioning System (GPS) position, and live weather feeds enter the system.',
  },
  {
    num: '02',
    title: 'Physics-based + machine learning model',
    desc: 'Hull resistance, propeller curves, and engine thermodynamics combine with machine learning to predict fuel consumption along every candidate route.',
  },
  {
    num: '03',
    title: 'Recommendations to the bridge',
    desc: 'Optimal speed, heading, and engine power settings are shown on the bridge display alongside route comparisons, Carbon Intensity Indicator (CII) impact, and weather risk.',
  },
  {
    num: '04',
    title: 'Crew stays in control',
    desc: 'Every recommendation is advisory. The officer on watch can accept, modify, or dismiss it. AFCOS recomputes around the crew\'s decision instantly.',
  },
]

const valueCards = [
  {
    icon: '⛽',
    title: 'Fuel cost savings',
    desc: 'Physics-informed speed and routing recommendations reduce fuel burn on every voyage — with up to 15% target savings (under validation).',
  },
  {
    icon: '📊',
    title: 'Carbon Intensity Indicator (CII) compliance',
    desc: 'Track your fleet\'s attained vs. required International Maritime Organization (IMO) CII rating in real time. Avoid D and E ratings before year-end.',
  },
  {
    icon: '🌊',
    title: 'Safer voyages',
    desc: 'Seakeeping analysis and weather routing protect ship, cargo, and crew from synchronous roll, parametric roll, and slamming risk.',
  },
]

const roadmapItems = [
  { num: '01', title: 'Marine Propulsion', href: '/capabilities/marine-propulsion' },
  { num: '02', title: 'Engine & Propulsion Controls', href: '/capabilities/engine-controls' },
  { num: '03', title: 'Marine Electronics', href: '/capabilities/marine-electronics' },
  { num: '04', title: 'Intelligent Propulsion', href: '/capabilities/intelligent-propulsion' },
  { num: '05', title: 'Autonomous Maritime Systems', href: '/capabilities/autonomous-systems' },
  { num: '06', title: 'Digital Engineering', href: '/capabilities/digital-engineering' },
]

const coreTeam = [
  {
    name: 'Shailesh Yadav',
    role: 'Co-Founder & CEO',
    photo: '/assets/team/shailesh-yadav.png',
    cred: 'Marine Engineer, Class 4 CoC · MS Ocean Engineering, IIT Madras · 1+ year commercial sea experience',
  },
  {
    name: 'Vinay Tripathi',
    role: 'Co-Founder & COO',
    photo: '/assets/team/vinay-tripathi.png',
    cred: 'Marine Engineer · 15+ years as Operation Engineer aboard Dual Fuel Vessels',
  },
  {
    name: 'Sagar Yadav',
    role: 'Co-Founder & Chief Business Officer',
    photo: '/assets/team/sagar-yadav.png',
    cred: 'B.Tech Mechanical Engineering · MS Management Science, IIT Madras · 3+ years Supply Chain Management',
  },
  {
    name: 'Fazal',
    role: 'Technical Head',
    photo: '/assets/team/fazal.png',
    cred: 'B.Tech Marine Engineering, IMU · MS Ocean Engineering, IIT Madras',
  },
]

const WEB3FORMS_KEY = '21a8fced-a698-4fbe-9e5a-fe103f0bc4f3'

function SavingsCalculator() {
  const [fuel, setFuel] = useState(25)
  const [price, setPrice] = useState(550)
  const [days, setDays] = useState(280)
  const [pct, setPct] = useState(8)

  const saving = Math.round(fuel * price * days * pct / 100)

  return (
    <div className="calc-card">
      <p className="section-label" style={{ marginBottom: 16 }}>Fuel savings estimator</p>
      <div className="calc-grid">
        <label className="calc-field">
          <span>Daily fuel consumption (t/day)</span>
          <input type="number" min={1} max={500} value={fuel} onChange={e => setFuel(Number(e.target.value))} />
        </label>
        <label className="calc-field">
          <span>Fuel price (USD/tonne)</span>
          <input type="number" min={100} max={2000} value={price} onChange={e => setPrice(Number(e.target.value))} />
        </label>
        <label className="calc-field">
          <span>Sea days per year</span>
          <input type="number" min={1} max={365} value={days} onChange={e => setDays(Number(e.target.value))} />
        </label>
        <label className="calc-field">
          <span>Expected saving (%)</span>
          <input type="number" min={1} max={20} value={pct} onChange={e => setPct(Number(e.target.value))} />
        </label>
      </div>
      <div className="calc-result">
        <span className="calc-result-label">Estimated annual saving per ship</span>
        <span className="calc-result-value">USD {saving.toLocaleString()}</span>
      </div>
      <p className="calc-disclaimer">Estimate only. Actual savings depend on vessel type, route, and operating profile.</p>
    </div>
  )
}

function FuelReviewForm() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'done' | 'error'>('idle')
  const [form, setForm] = useState({ name: '', company: '', role: '', fleet: '', email: '' })

  function set(field: string, val: string) {
    setForm(f => ({ ...f, [field]: val }))
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          subject: 'Free fuel review request — Sealink website',
          from_name: 'Sealink Website',
          ...form,
        }),
      })
      const data = await res.json()
      setStatus(data.success ? 'done' : 'error')
    } catch {
      setStatus('error')
    }
  }

  if (status === 'done') {
    return (
      <div className="fuel-review-thanks">
        <p>Request received. We will reach out within one business day with a free fuel review for one of your vessels.</p>
      </div>
    )
  }

  return (
    <form className="fuel-review-form" onSubmit={handleSubmit}>
      <input type="hidden" name="access_key" value={WEB3FORMS_KEY} />
      <div className="fuel-review-grid">
        <label className="fuel-review-field">
          <span>Full name</span>
          <input required type="text" value={form.name} onChange={e => set('name', e.target.value)} placeholder="Captain / Manager name" />
        </label>
        <label className="fuel-review-field">
          <span>Company</span>
          <input required type="text" value={form.company} onChange={e => set('company', e.target.value)} placeholder="Ship management company" />
        </label>
        <label className="fuel-review-field">
          <span>Role</span>
          <input type="text" value={form.role} onChange={e => set('role', e.target.value)} placeholder="Technical Superintendent / DPA" />
        </label>
        <label className="fuel-review-field">
          <span>Fleet size (vessels)</span>
          <input type="number" min={1} value={form.fleet} onChange={e => set('fleet', e.target.value)} placeholder="Number of vessels" />
        </label>
        <label className="fuel-review-field fuel-review-field--full">
          <span>Work email</span>
          <input required type="email" value={form.email} onChange={e => set('email', e.target.value)} placeholder="you@company.com" />
        </label>
      </div>
      {status === 'error' && <p className="form-error">Something went wrong — please email <a href="mailto:info@sealinkelectric.com">info@sealinkelectric.com</a> directly.</p>}
      <button type="submit" className="btn btn-primary" disabled={status === 'sending'}>
        {status === 'sending' ? 'Sending…' : 'Request free fuel review'}
      </button>
    </form>
  )
}

export default function HomeClient() {
  const heroRef = useRef<HTMLElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)
  const { scrollYProgress: heroProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  })
  const videoY = useTransform(heroProgress, [0, 1], ['0%', '18%'])

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const saveData = (navigator as Navigator & { connection?: { saveData?: boolean } }).connection?.saveData
    if (reduced || saveData) {
      video.removeAttribute('autoplay')
      video.load()
      return
    }

    const isMobile = window.innerWidth < 768
    const mp4 = video.querySelector<HTMLSourceElement>('source[data-mobile]')
    const webm = video.querySelector<HTMLSourceElement>('source[data-desktop-webm]')
    const mp4desk = video.querySelector<HTMLSourceElement>('source[data-desktop-mp4]')
    if (isMobile && mp4 && webm && mp4desk) {
      webm.src = ''
      mp4desk.src = ''
      mp4.src = '/assets/hero-ocean-720.mp4'
    } else if (mp4 && webm && mp4desk) {
      mp4.src = ''
      webm.src = '/assets/hero-ocean-1080.webm'
      mp4desk.src = '/assets/hero-ocean-1080.mp4'
    }
    video.load()

    const observer = new IntersectionObserver(
      ([entry]) => { entry.isIntersecting ? video.play().catch(() => {}) : video.pause() },
      { threshold: 0.1 }
    )
    observer.observe(video)
    return () => observer.disconnect()
  }, [])

  return (
    <main>
      {/* ── Hero ── */}
      <section className="hero" ref={heroRef}>
        <div className="hero-bg" aria-hidden="true">
          <motion.div className="hero-video-wrap" style={{ y: videoY }}>
            <video
              ref={videoRef}
              className="hero-video"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              poster="/assets/hero-poster.jpg"
              aria-hidden="true"
            >
              <source data-desktop-webm type="video/webm" />
              <source data-desktop-mp4 type="video/mp4" />
              <source data-mobile type="video/mp4" />
              <img src="/assets/hero-ship.png" alt="" width={1920} height={800} />
            </video>
          </motion.div>
          <div className="hero-overlay" />
        </div>
        <motion.div
          className="container hero-content"
          variants={heroContainer}
          initial="hidden"
          animate="visible"
        >
          <motion.p className="eyebrow" variants={heroItem}>
            Sea Link Electrical and Software Private Limited
          </motion.p>
          <motion.h1 variants={heroItem}>
            Cut fuel costs and protect your{' '}
            <br />
            <span>Carbon Intensity Indicator (CII) rating</span>
          </motion.h1>
          <motion.p className="hero-lead" variants={heroItem}>
            AFCOS — Adaptive Fuel and Course Optimisation System — uses physics-informed voyage
            optimisation to reduce fuel burn and keep your fleet CII-compliant. Deployed at sea
            aboard MT TRF Kirkenes.
          </motion.p>
          <motion.div className="hero-actions" variants={heroItem}>
            <Link className="btn btn-primary" href="/contact">
              Book a 20-minute demo
            </Link>
            <a className="btn btn-ghost" href="#how-it-works">
              See how it works
            </a>
          </motion.div>
          <motion.div className="capability-bar" variants={heroItem}>
            <span>Fuel Optimisation</span>
            <span>CII Compliance</span>
            <span>Voyage Planning</span>
            <span>Seakeeping</span>
            <span>Bunker Planning</span>
            <span>Physics-Informed AI</span>
          </motion.div>
        </motion.div>
      </section>

      {/* ── How it works ── */}
      <section className="section" id="how-it-works">
        <div className="container">
          <FadeUp>
            <p className="section-label">01 — How AFCOS works</p>
            <h2>From vessel data to bridge recommendation in real time</h2>
          </FadeUp>
          <div className="how-grid">
            {howItWorks.map((step, i) => (
              <motion.div
                key={step.num}
                className="how-step"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.5, delay: i * 0.1, ease: 'easeOut' }}
              >
                <div className="how-step-num">{step.num}</div>
                {i < howItWorks.length - 1 && <div className="how-step-arrow" aria-hidden="true" />}
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </motion.div>
            ))}
          </div>
          <FadeUp delay={0.1} className="hero-actions">
            <Link className="btn btn-primary" href="/afcos">Explore AFCOS in full</Link>
          </FadeUp>
        </div>
      </section>

      {/* ── Value cards ── */}
      <section className="section section-dark" id="value">
        <div className="container">
          <FadeUp>
            <p className="section-label">02 — Why ship operators choose AFCOS</p>
            <h2>Three problems. One platform.</h2>
          </FadeUp>
          <div className="feature-grid" style={{ marginTop: 28 }}>
            {valueCards.map((card, i) => (
              <motion.article
                key={card.title}
                className="feature"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.5, delay: i * 0.1, ease: 'easeOut' }}
              >
                <div className="feature-icon" style={{ fontSize: 28 }}>{card.icon}</div>
                <h3>{card.title}</h3>
                <p>{card.desc}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* ── Team strip ── */}
      <section className="section section-dark" id="team">
        <div className="container">
          <FadeUp>
            <p className="section-label">03 — Team</p>
            <h2>Built by marine engineers who have been at sea</h2>
          </FadeUp>
          <div className="team-strip">
            {coreTeam.map((m, i) => (
              <motion.div
                key={m.name}
                className="team-strip-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.45, delay: i * 0.08, ease: 'easeOut' }}
              >
                <img src={m.photo} alt={m.name} className="team-strip-photo" loading="lazy" decoding="async" />
                <h3 className="team-strip-name">{m.name}</h3>
                <p className="team-strip-role">{m.role}</p>
                <p className="team-strip-cred">{m.cred}</p>
              </motion.div>
            ))}
          </div>
          <FadeUp delay={0.1} className="hero-actions">
            <Link className="btn btn-ghost" href="/about">Full team &amp; advisors</Link>
          </FadeUp>
        </div>
      </section>

      {/* ── Credentials ── */}
      <section className="section" id="credentials">
        <div className="container">
          <FadeUp>
            <div className="incubation-panel">
              <div className="incubation-logos">
                <img src="/assets/dst-logo.png" alt="Department of Science and Technology (DST), Government of India" width={198} height={71} loading="lazy" decoding="async" />
                <span className="incubation-divider" aria-hidden="true" />
                <img src="/assets/dst-nidhi-logo.png" alt="DST NIDHI — Start-to-Scale Startup Support" width={203} height={72} loading="lazy" decoding="async" />
              </div>
              <p className="incubation-text">
                Incubated under the <strong>DST I-NCUBATE</strong> programme at the{' '}
                <strong>Gopalakrishnan-Deshpande Centre, IIT Madras</strong> ·{' '}
                Recognised under <strong>Startup India</strong> (Department for Promotion of Industry
                and Internal Trade, Government of India)
              </p>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ── Roadmap ── */}
      <section className="section section-dark" id="roadmap">
        <div className="container">
          <FadeUp>
            <p className="section-label">04 — Roadmap</p>
            <h2>From fuel intelligence to indigenous marine propulsion</h2>
            <p style={{ color: 'var(--dark-muted)', maxWidth: 600, marginBottom: 32 }}>
              AFCOS is the first product. Our longer-term roadmap covers the full maritime
              technology stack — propulsion, controls, electronics, and autonomous systems —
              all engineered in India.
            </p>
          </FadeUp>
          <FadeUp delay={0.06}>
            <div className="roadmap-grid">
              {roadmapItems.map((item, i) => (
                <Link key={item.num} href={item.href} className="roadmap-item">
                  <span className="roadmap-num">{item.num}</span>
                  <span className="roadmap-title">{item.title}</span>
                  <span className="roadmap-arrow">→</span>
                </Link>
              ))}
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ── Partners ── */}
      <section className="section" id="partners">
        <div className="container">
          <FadeUp>
            <p className="section-label">Partners</p>
            <h2>Implementation &amp; industry partners</h2>
          </FadeUp>
          <FadeUp delay={0.08}>
            <div className="partners-grid">
              <div className="partner-card">
                <img
                  src="/assets/partners/abacus-marine.png"
                  alt="Abacus Marine Services Pvt Ltd"
                  width={140}
                  height={140}
                  loading="lazy"
                  decoding="async"
                />
                <p className="partner-name">Abacus Marine Services Pvt Ltd</p>
                <p className="partner-role">Implementation &amp; installation partner</p>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ── Free fuel review CTA ── */}
      <section className="section section-dark" id="fuel-review">
        <div className="container">
          <FadeUp>
            <p className="section-label">05 — Get started</p>
            <h2>Request a free fuel review of one vessel</h2>
            <p style={{ color: 'var(--dark-muted)', maxWidth: 560, marginBottom: 32 }}>
              Send us one vessel&apos;s voyage data — noon reports or a passage log — and we will
              run an AFCOS analysis and show you the estimated savings, free of charge and with
              no commitment.
            </p>
          </FadeUp>
          <FadeUp delay={0.06}>
            <FuelReviewForm />
          </FadeUp>
        </div>
      </section>
    </main>
  )
}
