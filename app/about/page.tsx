import type { Metadata } from 'next'
import AboutClient from '@/components/pages/AboutClient'

export const metadata: Metadata = {
  title: 'About Us',
  description: 'About Sealink Electric and Software — maritime AI and digital systems for ships and fleets.',
}

export default function AboutPage() {
  return <AboutClient />
}
