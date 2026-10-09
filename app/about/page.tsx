import type { Metadata } from 'next'
import AboutClient from '@/components/pages/AboutClient'

export const metadata: Metadata = {
  title: 'About Us',
  description: 'About Sealink Electric and Software Private Limited — founded by IIT Madras marine engineers, incubated at the Gopalakrishnan-Deshpande Centre. Developers of AFCOS, a physics-informed voyage and fuel optimisation system.',
  openGraph: {
    title: 'About Sealink Electric and Software Private Limited',
    description: 'Founded by IIT Madras marine engineers and researchers. Developers of AFCOS fuel optimisation, deployed at sea aboard MT TRF Kirkenes.',
    images: ['/assets/hero-poster.jpg'],
  },
}

export default function AboutPage() {
  return <AboutClient />
}
