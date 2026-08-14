'use client'
import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

export default function PageHero({
  eyebrow,
  title,
  titleAccent,
  lead,
  bgImage,
  variant = 'ship',
  children,
}: {
  eyebrow: string
  title: string
  titleAccent?: string
  lead: ReactNode
  bgImage?: string
  variant?: 'ship' | 'contact' | 'plain'
  children?: ReactNode
}) {
  const sectionClass =
    variant === 'contact'
      ? 'page-hero page-hero--contact'
      : variant === 'ship'
      ? 'page-hero page-hero--ship'
      : 'page-hero'

  return (
    <section className={sectionClass}>
      {variant === 'ship' && bgImage && (
        <div className="page-hero-bg" aria-hidden="true">
          <img src={bgImage} alt="" width={1920} height={800} loading="lazy" decoding="async" />
          <div className="page-hero-overlay" />
        </div>
      )}
      {variant === 'contact' && <div className="contact-hero-decor" aria-hidden="true" />}
      <div className="container">
        <motion.p
          className="eyebrow"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
        >
          {eyebrow}
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
        >
          {title} {titleAccent && <span>{titleAccent}</span>}
        </motion.h1>
        <motion.p
          className="page-lead"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.32 }}
        >
          {lead}
        </motion.p>
        {children}
      </div>
    </section>
  )
}
