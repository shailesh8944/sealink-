import type { Metadata } from 'next'
import TechnologyHubClient from '@/components/pages/TechnologyHubClient'

export const metadata: Metadata = {
  title: 'Technology',
  description: 'Sealink technology — physics-informed AI, digital twin, hydrodynamics, engine modelling, control systems, and data & telemetry.',
}

export default function TechnologyPage() {
  return <TechnologyHubClient />
}
