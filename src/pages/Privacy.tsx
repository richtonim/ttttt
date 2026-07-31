import { SEO } from '../components/SEO'

export function Privacy() {
  return (
    <>
      <SEO
        title="Privacy Policy"
        description="Privacy policy for ClaimEase.AI covering data handling for claims documents and partner accounts."
        path="/privacy"
      />
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">LEGAL</p>
          <h1>Privacy Policy</h1>
          <p>Last updated: January 2026</p>
        </div>
      </section>
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container panel" style={{ padding: '1.5rem', color: 'var(--text-muted)' }}>
          <h2 style={{ color: 'var(--text)' }}>Overview</h2>
          <p>
            ClaimEase.AI processes claims documents and partner account data to deliver
            adjudication, fraud scoring, and payout orchestration. This frontend demo
            stores session and whitelist registration data locally in your browser only.
          </p>
          <h2 style={{ color: 'var(--text)' }}>Data we process</h2>
          <p>
            Account email, name, authentication credentials (demo local storage),
            document metadata submitted through APIs, and telemetry required for Fraud
            Guard decisions.
          </p>
          <h2 style={{ color: 'var(--text)' }}>Whitelist access</h2>
          <p>
            Registration, login, and purchase are restricted to approved emails. Contact
            early-access@claimease.in to request inclusion.
          </p>
          <h2 style={{ color: 'var(--text)' }}>Contact</h2>
          <p>privacy@claimease.in · claimease.in</p>
        </div>
      </section>
    </>
  )
}
