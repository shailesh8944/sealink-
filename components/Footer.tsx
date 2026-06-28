export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <p>&copy; {new Date().getFullYear()} Sealink Electric and Software Pvt Ltd. All rights reserved.</p>
        <p className="footer-meta">
          <a href="mailto:info@sealinkelectric.com">info@sealinkelectric.com</a>
        </p>
      </div>
    </footer>
  )
}
