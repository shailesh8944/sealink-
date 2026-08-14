import type { Metadata } from 'next'
import HomeClient from '@/components/pages/HomeClient'

export const metadata: Metadata = {
  title: 'Indigenous Marine Propulsion & Intelligent Maritime Systems',
  description:
    'Sealink Electric and Software — marine engineering, propulsion, controls, electronics, AI and autonomous maritime systems, engineered in India.',
}

export default function HomePage() {
  return <HomeClient />
}
