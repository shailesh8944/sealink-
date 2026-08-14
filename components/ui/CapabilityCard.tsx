'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function CapabilityCard({
  num,
  title,
  desc,
  href,
  delay = 0,
}: {
  num: string
  title: string
  desc: string
  href?: string
  delay?: number
}) {
  const inner = (
    <>
      <div className="feature-icon">{num}</div>
      <h3>{title}</h3>
      <p>{desc}</p>
      {href && <span className="capability-link">Explore →</span>}
    </>
  )

  return (
    <motion.article
      className="feature"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.5, delay, ease: 'easeOut' }}
    >
      {href ? (
        <Link href={href} className="capability-card-link">
          {inner}
        </Link>
      ) : (
        inner
      )}
    </motion.article>
  )
}
