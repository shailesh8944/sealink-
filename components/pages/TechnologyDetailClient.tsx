'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import FadeUp from '@/components/ui/FadeUp'
import PageHero from '@/components/ui/PageHero'
import ArchitectureFlow from '@/components/ui/ArchitectureFlow'

export default function TechnologyDetailClient({
  eyebrow,
  title,
  titleAccent,
  lead,
  overview,
  image,
  architecture,
  concepts,
  tags,
  metrics,
}: {
  eyebrow: string
  title: string
  titleAccent?: string
  lead: string
  overview: string[]
  image?: { src: string; alt: string; caption: string; contain?: boolean }
  architecture: string[]
  concepts: { title: string; desc: string }[]
  tags: string[]
  metrics?: { value: string; label: string }[]
}) {
  return (
    <main>
      <PageHero eyebrow={eyebrow} title={title} titleAccent={titleAccent} lead={lead} variant="plain" />

      <section className="section">
        <div className="container">
          <FadeUp>
            {overview.map((p) => (
              <p key={p} className="product-intro">
                {p}
              </p>
            ))}
          </FadeUp>

          {image && (
            <FadeUp delay={0.04}>
              <figure className={`ship-showcase${image.contain ? ' ship-showcase--contain' : ''}`}>
                <img src={image.src} alt={image.alt} />
                <figcaption className="ship-showcase-caption">
                  <span>{image.caption}</span>
                </figcaption>
              </figure>
            </FadeUp>
          )}

          <FadeUp delay={0.06}>
            <p className="section-label" style={{ marginTop: 8 }}>
              Architecture
            </p>
            <ArchitectureFlow stages={architecture} />
          </FadeUp>

          <div className="feature-grid" style={{ marginTop: 8 }}>
            {concepts.map((c, i) => (
              <motion.article
                key={c.title}
                className="feature"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.5, delay: i * 0.06, ease: 'easeOut' }}
              >
                <h3>{c.title}</h3>
                <p>{c.desc}</p>
              </motion.article>
            ))}
          </div>

          {metrics && (
            <FadeUp delay={0.1}>
              <p className="section-label" style={{ marginTop: 40 }}>
                Development evidence
              </p>
              <div className="metrics">
                {metrics.map((m) => (
                  <div className="card metric" key={m.label}>
                    <strong>{m.value}</strong>
                    <span>{m.label}</span>
                  </div>
                ))}
              </div>
            </FadeUp>
          )}

          <FadeUp delay={0.12}>
            <p className="section-label" style={{ marginTop: 40 }}>
              Tools & methods
            </p>
            <div className="tech-tags">
              {tags.map((t) => (
                <span key={t}>{t}</span>
              ))}
            </div>
          </FadeUp>
        </div>
      </section>

      <section className="section section-cta">
        <FadeUp className="container">
          <div className="cta-panel">
            <div>
              <h2>Discuss this technology</h2>
              <p>Talk to our engineering team about modelling, simulation, or intelligent systems work.</p>
            </div>
            <div className="contact-actions">
              <Link className="btn btn-primary" href="/contact">Contact us</Link>
              <Link className="btn btn-ghost" href="/technology">All Technology</Link>
            </div>
          </div>
        </FadeUp>
      </section>
    </main>
  )
}
