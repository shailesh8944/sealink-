import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy policy for Sealink Electric and Software Pvt Ltd.',
}

export default function PrivacyPage() {
  return (
    <main className="thank-you-main">
      <div className="container thank-you-panel card">
        <h1 style={{ fontSize: 32 }}>Privacy Policy</h1>
        <p>
          Sealink Electric and Software Pvt Ltd collects only the information you submit through
          our contact form — name, organisation, designation, email, phone, enquiry type, and
          message — to respond to your enquiry. We do not sell or share this information with
          third parties.
        </p>
        <p>
          Please do not submit classified, sensitive, or confidential information through our
          website. For questions about this policy, contact{' '}
          <a className="inline-link" href="mailto:info@sealinkelectric.com">
            info@sealinkelectric.com
          </a>
          .
        </p>
      </div>
    </main>
  )
}
