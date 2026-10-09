import type { Metadata } from 'next'
import AfcosClient from '@/components/pages/AfcosClient'

export const metadata: Metadata = {
  title: 'AFCOS — Adaptive Fuel and Course Optimisation System',
  description: 'AFCOS by Sealink — physics-informed voyage and fuel optimisation deployed at sea. Fuel savings up to 15% (under validation), Carbon Intensity Indicator (CII) compliance, seakeeping, and bunker planning.',
  openGraph: {
    title: 'AFCOS — Adaptive Fuel and Course Optimisation System',
    description: 'Physics-informed voyage optimisation deployed aboard MT TRF Kirkenes. Cut fuel costs and protect your CII rating.',
    images: ['/assets/afcos-voyage-planning.jpg'],
  },
}

export default function AfcosPage() {
  return <AfcosClient />
}
