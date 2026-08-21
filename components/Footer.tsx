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
