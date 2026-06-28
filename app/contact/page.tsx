import type { Metadata } from 'next'
import ContactClient from '@/components/pages/ContactClient'

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Contact Sealink Electric and Software — maritime AI, AFCOS pilots, and fleet integrations.',
}

export default function ContactPage() {
  return <ContactClient />
}
