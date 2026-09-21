import { Link } from 'react-router-dom'
import { SEO } from '../components/SEO'

const STEPS = [
  {
    title: 'Ingest',
    body: 'Accept PDFs, photos, EDI payloads, and insurer case packets through a single claims intake API.',
  },
  {
    title: 'Understand',
    body: 'Multimodal models extract line items, ICD-10 codes, seals, signatures, and policy identifiers with calibrated confidence.',
  },
  {
    title: 'Assess',
    body: 'Loss estimation and policy matching run in parallel with Fraud Guard scoring before a payout decision is issued.',
  },
  {
    title: 'Pay or escalate',
    body: 'STP routes clear low-risk claims instantly; ambiguous or high-risk cases escalate with a full audit trail.',
  },
]

export function ClaimEngine() {
  return (
    <>
      <SEO
        title="Claim Engine"
        description="ClaimEase Claim Engine delivers multimodal OCR, loss assessment, and straight-through payout orchestration for insurers and enterprise finance."
        path="/claim-engine"
      />
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">01_CLAIM_ENGINE</p>
          <h1>Multimodal claims adjudication at machine speed</h1>
          <p>
            Turn unstructured medical invoices, collision evidence, and corporate
            expenses into structured, auditable payout decisions — in milliseconds,
            not weeks.
          </p>
        </div>
      </section>
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container stack">
          <div className="pillars">
            {STEPS.map((step, i) => (
              <article className="pillar" key={step.title}>
                <div className="index">STEP 0{i + 1}</div>
                <h3>{step.title}</h3>
                <p>{step.body}</p>
              </article>
            ))}
          </div>
          <div className="grid-2">
            <div className="panel" style={{ padding: '1.4rem' }}>
              <h2 style={{ marginTop: 0 }}>What the engine extracts</h2>
              <ul style={{ color: 'var(--text-muted)', lineHeight: 1.8 }}>
                <li>Invoice totals, tax lines, and currency normalization</li>
                <li>Provider / garage identity and seal authenticity cues</li>
                <li>ICD-10 and procedure codes from medical paperwork</li>
                <li>Damage severity signals from collision imagery</li>
                <li>Policy, claimant, and bank destination identifiers</li>
              </ul>
            </div>
            <div className="panel" style={{ padding: '1.4rem' }}>
              <h2 style={{ marginTop: 0 }}>Built for STP</h2>
              <p style={{ color: 'var(--text-muted)' }}>
                Confidence thresholds and Fraud Guard strictness let risk teams
                decide how aggressive straight-through processing should be —
                without rewriting downstream payout rails.
              </p>
              <div className="cta-row">
                <Link to="/fraud-guard" className="btn btn-primary">
                  Pair with Fraud Guard
                </Link>
                <Link to="/register" className="btn btn-ghost">
                  Pre-register API
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
