import { SEO } from '../components/SEO'

export function Terms() {
  return (
    <>
      <SEO
        title="Terms of Service"
        description="Terms of service for ClaimEase.AI early-access software and whitelist partner usage."
        path="/terms"
      />
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">LEGAL</p>
          <h1>Terms of Service</h1>
          <p>Last updated: January 2026</p>
        </div>
      </section>
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container panel" style={{ padding: '1.5rem', color: 'var(--text-muted)' }}>
          <h2 style={{ color: 'var(--text)' }}>Early access</h2>
          <p>
            ClaimEase.AI is offered as an early-access InsurTech platform. Features,
            benchmarks, and pricing may change as the product evolves.
          </p>
          <h2 style={{ color: 'var(--text)' }}>Acceptable use</h2>
          <p>
            Partners may only process lawfully obtained claims materials and must not
            attempt to bypass whitelist, fraud, or audit controls.
          </p>
          <h2 style={{ color: 'var(--text)' }}>Purchases</h2>
          <p>
            Checkout is available exclusively to whitelist-authenticated accounts.
            Submitted purchase requests are subject to confirmation by ClaimEase.
          </p>
          <h2 style={{ color: 'var(--text)' }}>Contact</h2>
          <p>legal@claimease.in · claimease.in</p>
        </div>
      </section>
    </>
  )
}
