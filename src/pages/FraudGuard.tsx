import { Link } from 'react-router-dom'
import { SEO } from '../components/SEO'

export function FraudGuard() {
  return (
    <>
      <SEO
        title="Fraud Guard"
        description="ClaimEase Fraud Guard uses graph neural networks to detect claim rings, duplicates, and synthetic patterns before payout."
        path="/fraud-guard"
      />
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">02_FRAUD_GUARD</p>
          <h1>Graph neural fraud defense that moves with every claim</h1>
          <p>
            Fraud Guard links claimants, providers, devices, bank accounts, and
            historical filings into a live risk graph — then blocks coordinated
            abuse before STP payout executes.
          </p>
        </div>
      </section>
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container grid-2">
          <div className="stack">
            <article className="pillar">
              <div className="index">SIGNAL</div>
              <h3>Entity resolution</h3>
              <p>
                Fuzzy identity stitching across phone numbers, addresses, clinics,
                and repair shops reveals recycled personas.
              </p>
            </article>
            <article className="pillar">
              <div className="index">MODEL</div>
              <h3>GNN risk scoring</h3>
              <p>
                Graph convolutions score neighborhood risk, ring density, and
                temporal burst patterns with explainable edge highlights.
              </p>
            </article>
            <article className="pillar">
              <div className="index">ACTION</div>
              <h3>Block or throttle</h3>
              <p>
                High-risk claims are intercepted with amber alerts; confirmed
                rings hard-block while preserving an immutable audit log.
              </p>
            </article>
          </div>
          <div className="panel" style={{ padding: '1.4rem' }}>
            <h2 style={{ marginTop: 0 }}>Fraud Guard controls</h2>
            <div className="code-block">
{`fraud_guard:
  strictness: 0.62
  modes:
    - duplicate_claim
    - provider_ring
    - velocity_burst
  actions:
    pass: stp_payout
    review: human_queue
    block: freeze_and_alert
  sla:
    decision_ms: 240`}
            </div>
            <p style={{ color: 'var(--text-muted)' }}>
              Tune strictness in the live simulator, then lock production thresholds
              through the Enterprise SDK.
            </p>
            <div className="cta-row">
              <Link to="/#simulator" className="btn btn-primary">
                Open Simulator
              </Link>
              <Link to="/sdk" className="btn btn-ghost">
                SDK Integration
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
