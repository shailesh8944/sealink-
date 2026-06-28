'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const isHome = pathname === '/' || pathname === ''
  const isAbout = pathname.startsWith('/about')
  const isCareers = pathname.startsWith('/careers')
  const isContact = pathname.startsWith('/contact')

  function close() {
    setMenuOpen(false)
  }

  return (
    <header className={`site-header${scrolled ? ' scrolled' : ''}`} id="top">
      <div className="container header-inner">
        <Link className="logo" href="/" onClick={close}>
          <span className="logo-badge">
            <img className="logo-mark" src="/assets/logo-mark.png" alt="" width={48} height={48} />
          </span>
          <span className="logo-wordmark">
            <span className="logo-title">Sealink</span>
            <span className="logo-tagline">Electric &amp; Software</span>
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
          <Link href="/about" className={isAbout ? 'active' : ''} onClick={close}>
            About
          </Link>
          <Link href="/#afcos" onClick={close}>
            AFCOS
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
