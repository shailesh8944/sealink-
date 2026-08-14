'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, useScroll, useSpring } from 'framer-motion'

const capabilitiesLinks = [
  { href: '/capabilities/marine-propulsion', label: 'Marine Propulsion' },
  { href: '/capabilities/engine-controls', label: 'Engine & Propulsion Controls' },
  { href: '/capabilities/marine-electronics', label: 'Marine Electronics' },
  { href: '/capabilities/intelligent-propulsion', label: 'Intelligent Propulsion' },
  { href: '/capabilities/autonomous-systems', label: 'Autonomous Maritime Systems' },
  { href: '/capabilities/digital-engineering', label: 'Digital Engineering & Simulation' },
]

const technologyLinks = [
  { href: '/technology/physics-informed-ai', label: 'Physics-Informed AI' },
  { href: '/technology/hydrodynamics', label: 'Hydrodynamics' },
  { href: '/technology/engine-modelling', label: 'Engine Modelling' },
  { href: '/technology/control-systems', label: 'Control Systems' },
  { href: '/technology/data-telemetry', label: 'Data & Telemetry' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const pathname = usePathname()
  const { scrollYProgress } = useScroll()
  const progress = useSpring(scrollYProgress, { stiffness: 220, damping: 32, restDelta: 0.001 })

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const isHome = pathname === '/' || pathname === ''
  const isCapabilities = pathname.startsWith('/capabilities')
  const isTechnology = pathname.startsWith('/technology')
  const isProducts = pathname.startsWith('/afcos')
  const isAbout = pathname.startsWith('/about')
  const isCareers = pathname.startsWith('/careers')
  const isContact = pathname.startsWith('/contact')

  function close() {
    setMenuOpen(false)
    setOpenDropdown(null)
  }

  function toggleDropdown(name: string) {
    setOpenDropdown((cur) => (cur === name ? null : name))
  }

  return (
    <header className={`site-header${scrolled ? ' scrolled' : ''}`} id="top">
      <motion.div className="scroll-progress" style={{ scaleX: progress }} />
      <div className="container header-inner">
        <Link className="logo" href="/" onClick={close}>
          <span className="logo-badge">
            <img className="logo-mark" src="/assets/logo-mark.png" alt="Sealink" width={64} height={55} />
          </span>
          <span className="logo-wordmark">
            <span className="logo-tagline">Marine Engineering &amp; Intelligent Systems</span>
          </span>
        </Link>

        <button
          className="nav-toggle"
          type="button"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((o) => !o)}
        >
          <span />
          <span />
          <span />
        </button>

        <nav className={`site-nav${menuOpen ? ' open' : ''}`} aria-label="Main">
          <Link href="/" className={isHome ? 'active' : ''} onClick={close}>
            Home
          </Link>

          <div className={`nav-item-dropdown${openDropdown === 'capabilities' ? ' open' : ''}`}>
            <button
              type="button"
              className={isCapabilities ? 'active' : ''}
              onClick={() => toggleDropdown('capabilities')}
              aria-expanded={openDropdown === 'capabilities'}
            >
              Capabilities <span className="nav-caret" aria-hidden="true" />
            </button>
            <div className="nav-dropdown-panel">
              <Link href="/capabilities" className="nav-dropdown-hub" onClick={close}>
                All Capabilities
              </Link>
              {capabilitiesLinks.map((l) => (
                <Link key={l.href} href={l.href} className="nav-dropdown-link" onClick={close}>
                  {l.label}
                </Link>
              ))}
            </div>
          </div>

          <div className={`nav-item-dropdown${openDropdown === 'technology' ? ' open' : ''}`}>
            <button
              type="button"
              className={isTechnology ? 'active' : ''}
              onClick={() => toggleDropdown('technology')}
              aria-expanded={openDropdown === 'technology'}
            >
              Technology <span className="nav-caret" aria-hidden="true" />
            </button>
            <div className="nav-dropdown-panel">
              <Link href="/technology" className="nav-dropdown-hub" onClick={close}>
                All Technology
              </Link>
              {technologyLinks.map((l) => (
                <Link key={l.href} href={l.href} className="nav-dropdown-link" onClick={close}>
                  {l.label}
                </Link>
              ))}
            </div>
          </div>

          <Link href="/afcos" className={isProducts ? 'active' : ''} onClick={close}>
            Products
          </Link>
          <Link href="/about" className={isAbout ? 'active' : ''} onClick={close}>
            About
          </Link>
          <Link href="/careers" className={isCareers ? 'active' : ''} onClick={close}>
            Careers
          </Link>
          <Link href="/contact" className={`nav-cta${isContact ? ' active' : ''}`} onClick={close}>
            Contact
          </Link>
        </nav>
      </div>
    </header>
  )
}
