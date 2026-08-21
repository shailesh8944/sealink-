import type { Metadata } from 'next'
import AboutClient from '@/components/pages/AboutClient'

export const metadata: Metadata = {
  title: 'About Us',
  description: 'About Sea Link Electrical and Software — an Indian marine engineering company developing propulsion, controls, electronics, software and intelligent maritime systems.',
}

export default function AboutPage() {
  return <AboutClient />
}
