import type { Metadata } from 'next'
import HomeClient from '@/components/pages/HomeClient'

export const metadata: Metadata = {
  title: 'Sealink — Maritime AI & Digital Systems',
  description:
    'Sealink Electric and Software — maritime AI, fuel optimization, and digital systems for defence and commercial fleets.',
}

export default function HomePage() {
  return <HomeClient />
}
