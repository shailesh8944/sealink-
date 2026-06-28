import type { Metadata, Viewport } from 'next'
import { Bebas_Neue, DM_Sans, DM_Mono } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const bebasNeue = Bebas_Neue({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-bebas',
})

const dmSans = DM_Sans({
  weight: ['300', '400', '500', '600'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  variable: '--font-sans',
})

const dmMono = DM_Mono({
  weight: ['400', '500'],
  subsets: ['latin'],
  variable: '--font-mono',
})

export const metadata: Metadata = {
  title: {
    default: 'Sealink — Maritime AI & Digital Systems',
    template: '%s — Sealink',
  },
  description:
    'Sealink Electric and Software — maritime AI, fuel optimization, and digital systems for defence and commercial fleets.',
  icons: {
    icon: '/assets/favicon-32.png',
    apple: '/assets/apple-touch-icon.png',
  },
}

export const viewport: Viewport = {
  themeColor: '#060f1e',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${bebasNeue.variable} ${dmSans.variable} ${dmMono.variable}`}
    >
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
