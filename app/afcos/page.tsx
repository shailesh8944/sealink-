import type { Metadata } from 'next'
import AfcosClient from '@/components/pages/AfcosClient'

export const metadata: Metadata = {
  title: 'AFCOS — AI-Based Fuel Consumption Optimization System',
  description: 'AFCOS — physics-informed voyage and engine optimisation for real-world marine operations. Fuel optimisation, voyage planning, seakeeping, bunker planning, and CII support.',
}

export default function AfcosPage() {
  return <AfcosClient />
}
