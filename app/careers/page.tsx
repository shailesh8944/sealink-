import type { Metadata } from 'next'
import CareersClient from '@/components/pages/CareersClient'

export const metadata: Metadata = {
  title: 'Careers',
  description:
    'Join Sealink Electric and Software — build AI-powered maritime technology that ships actually use at sea. View open roles in ML, engineering, naval architecture, and business development.',
}

export default function CareersPage() {
  return <CareersClient />
}
