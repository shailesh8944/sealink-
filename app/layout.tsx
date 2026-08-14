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

const siteUrl = 'https://www.sealinkelectric.com'
const defaultTitle = 'Sealink — Marine Engineering & Intelligent Systems'
const defaultDescription =
  'Sealink Electric and Software — indigenous marine propulsion, controls, electronics, software and intelligent maritime systems, engineered in India.'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: defaultTitle,
    template: '%s — Sealink',
  },
  description: defaultDescription,
  icons: {
    icon: '/assets/favicon-32.png',
    apple: '/assets/apple-touch-icon.png',
  },
  openGraph: {
    type: 'website',
    url: siteUrl,
    siteName: 'Sealink',
    title: defaultTitle,
    description: defaultDescription,
    images: ['/assets/hero-ship.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: defaultTitle,
    description: defaultDescription,
    images: ['/assets/hero-ship.png'],
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
