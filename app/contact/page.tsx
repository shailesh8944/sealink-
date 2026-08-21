import type { Metadata } from 'next'
import ContactClient from '@/components/pages/ContactClient'

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Contact Sea Link Electrical and Software — marine propulsion, engine and controls, autonomous systems, AFCOS, and technology partnerships.',
}

export default function ContactPage() {
  return <ContactClient />
}
