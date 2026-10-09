import type { Metadata } from 'next'
import InvestorsClient from '@/components/pages/InvestorsClient'

export const metadata: Metadata = {
  title: 'Investors',
  description: 'Sealink Electric and Software Private Limited — early-stage maritime technology company. Physics-informed fuel optimisation deployed at sea. Incubated at IIT Madras under DST I-NCUBATE. Request our investor deck.',
  openGraph: {
    title: 'Investors — Sealink Electric and Software Private Limited',
    description: 'Physics-informed maritime fuel optimisation. Deployed at sea. Incubated at IIT Madras. Request our investor deck.',
    images: ['/assets/hero-poster.jpg'],
  },
}

export default function InvestorsPage() {
  return <InvestorsClient />
}
