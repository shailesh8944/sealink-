import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms',
  description: 'Terms of use for the Sealink Electric and Software Pvt Ltd website.',
}

export default function TermsPage() {
  return (
    <main className="thank-you-main">
      <div className="container thank-you-panel card">
        <h1 style={{ fontSize: 32 }}>Terms</h1>
        <p>
          This website is provided by Sealink Electric and Software Pvt Ltd for informational
          purposes. Content describing technology under development is labelled by development
          stage and does not constitute a guarantee of performance, availability, or delivery
          timeline.
        </p>
        <p>
          All content is © Sealink Electric and Software Pvt Ltd. For questions, contact{' '}
          <a className="inline-link" href="mailto:info@sealinkelectric.com">
            info@sealinkelectric.com
          </a>
          .
        </p>
      </div>
    </main>
  )
}
