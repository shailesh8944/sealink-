import Link from 'next/link'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-top">
          <div>
            <p className="footer-brand-name">SEALINK</p>
            <p className="footer-brand-tag">Marine Engineering &amp; Intelligent Systems</p>
            <p className="footer-brand-desc">
              Indigenous marine propulsion &amp; intelligent maritime systems.
            </p>
            <p className="footer-address">
              <strong>Registered Office:</strong><br />
              C/O Markande Yadav, Garathauli Chaubeypur,<br />
              Chaubeypur, Varanasi,<br />
              Uttar Pradesh, India — 221104
            </p>
            <a
              href="https://www.linkedin.com/company/sealink-electric-and-software-private-limited/"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-linkedin"
              aria-label="Sealink on LinkedIn"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              LinkedIn
            </a>
          </div>
          <div className="footer-col">
            <h5>Capabilities</h5>
            <ul>
              <li><Link href="/capabilities">All Capabilities</Link></li>
              <li><Link href="/capabilities/marine-propulsion">Marine Propulsion</Link></li>
              <li><Link href="/capabilities/autonomous-systems">Autonomous Systems</Link></li>
              <li><Link href="/capabilities/digital-engineering">Digital Engineering</Link></li>
            </ul>
          </div>
          <div className="footer-col">
            <h5>Technology</h5>
            <ul>
              <li><Link href="/technology">All Technology</Link></li>
              <li><Link href="/technology/physics-informed-ai">Physics-Informed AI</Link></li>
              <li><Link href="/projects">Projects</Link></li>
            </ul>
          </div>
          <div className="footer-col">
            <h5>Products</h5>
            <ul>
              <li><Link href="/afcos">AFCOS</Link></li>
            </ul>
          </div>
          <div className="footer-col">
            <h5>Company</h5>
            <ul>
              <li><Link href="/about">About</Link></li>
              <li><Link href="/careers">Careers</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom footer-inner">
          <p className="footer-meta">
            © {year} Sea Link Electrical and Software Pvt. Ltd. All rights reserved. ·{' '}
            <a href="mailto:info@sealinkelectric.com">info@sealinkelectric.com</a>
          </p>
          <div className="footer-legal">
            <Link href="/privacy">Privacy Policy</Link>
            <Link href="/terms">Terms</Link>
            <img
              src="https://visitor-badge.laobi.icu/badge?page_id=sealink-electric.visits"
              alt="Visitor count"
              height={20}
              style={{ verticalAlign: 'middle' }}
            />
          </div>
        </div>
      </div>
    </footer>
  )
}
