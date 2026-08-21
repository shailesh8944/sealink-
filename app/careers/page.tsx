import type { Metadata } from 'next'
import CareersClient from '@/components/pages/CareersClient'

export const metadata: Metadata = {
  title: 'Careers',
  description:
    'Join Sea Link Electrical and Software — build maritime engineering technology across propulsion, controls, AI, and autonomous systems. View open roles in ML, engineering, naval architecture, and business development.',
}

export default function CareersPage() {
  return <CareersClient />
}
