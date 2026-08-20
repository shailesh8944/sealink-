'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import FadeUp from '@/components/ui/FadeUp'
import PageHero from '@/components/ui/PageHero'
import ArchitectureFlow from '@/components/ui/ArchitectureFlow'
import StatusPill, { DevStage } from '@/components/ui/StatusPill'

export type DomainGroup = {
  title: string
  items: { title: string; desc: string }[]
}

export default function CapabilityDetailClient({
  eyebrow,
  title,
  titleAccent,
  lead,
  stage,
  overview,
  image,
  architecture,
  domainGroups,
  lifecycle,
}: {
  eyebrow: string
  title: string
  titleAccent?: string
  lead: string
  stage: DevStage
  overview: string[]
  image?: { src: string; alt: string; caption: string; contain?: boolean }
  architecture: string[]
  domainGroups: DomainGroup[]
  lifecycle: string[]
}) {
  return (
    <main>
      <PageHero eyebrow={eyebrow} title={title} titleAccent={titleAccent} lead={lead} variant="plain" />

      <section className="section">
        <div className="container">
          <FadeUp>
            <div className="product-header">
              <h2>Overview</h2>
              <StatusPill stage={stage} />
            </div>
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
            <p className="section-label" style={{ marginTop: 32 }}>
              Engineering architecture
            </p>
            <ArchitectureFlow stages={architecture} />
          </FadeUp>

          {domainGroups.map((group, gi) => (
            <div key={group.title} style={{ marginTop: 40 }}>
              <FadeUp delay={0.04 * gi}>
                <p className="section-label">{group.title}</p>
              </FadeUp>
              <div className="feature-grid">
                {group.items.map((item, i) => (
                  <motion.article
                    key={item.title}
                    className="feature"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.1 }}
                    transition={{ duration: 0.5, delay: i * 0.06, ease: 'easeOut' }}
                  >
                    <h3>{item.title}</h3>
                    <p>{item.desc}</p>
                  </motion.article>
                ))}
              </div>
            </div>
          ))}

          <FadeUp delay={0.1}>
            <p className="section-label" style={{ marginTop: 40 }}>
              Development lifecycle
            </p>
            <div className="pipeline">
              {lifecycle.map((step, i) => (
                <div className="pipeline-step" key={step}>
                  <span className="pipeline-step-num">{String(i + 1).padStart(2, '0')}</span>
                  <h4>{step}</h4>
                </div>
              ))}
            </div>
          </FadeUp>
        </div>
      </section>

      <section className="section section-cta">
        <FadeUp className="container">
          <div className="cta-panel">
            <div>
              <h2>Discuss this capability</h2>
              <p>Talk to our engineering team about propulsion, controls, electronics, or intelligent systems work.</p>
            </div>
            <div className="contact-actions">
              <Link className="btn btn-primary" href="/contact">Contact us</Link>
              <Link className="btn btn-ghost" href="/capabilities">All Capabilities</Link>
            </div>
          </div>
        </FadeUp>
      </section>
    </main>
  )
}
