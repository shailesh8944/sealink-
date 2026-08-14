import type { Metadata } from 'next'
import CapabilitiesHubClient from '@/components/pages/CapabilitiesHubClient'

export const metadata: Metadata = {
  title: 'Capabilities',
  description:
    'Sealink engineering capabilities — marine propulsion, engine and propulsion controls, marine electronics, intelligent propulsion, autonomous maritime systems, and digital engineering.',
}

export default function CapabilitiesPage() {
  return <CapabilitiesHubClient />
}
