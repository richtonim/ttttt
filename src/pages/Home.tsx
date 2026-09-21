import { Link } from 'react-router-dom'
import { SEO } from '../components/SEO'
import { Simulator } from '../components/Simulator'

export function Home() {
  return (
    <>
      <SEO
        title="ClaimEase.AI — Instant Claims. Zero Friction. Uncompromising Fraud Protection."
        description="Autonomous AI Claims & Fraud Guard Engine. Multimodal document intelligence, GNN fraud detection, and straight-through payouts in seconds for insurers and enterprise finance."
        path="/"
        keywords="AI claims, fraud detection GNN, multimodal OCR, STP payout, ClaimEase, InsurTech"
      />

      <section className="hero">
        <div className="container hero-grid">
          <div>
            <p className="eyebrow">CLAIMEASE.AI · Autonomous Claims Engine</p>
            <h1>
              Instant Claims.
              <br />
              Zero Friction.
              <br />
              <span className="accent">Uncompromising Fraud Protection.</span>
            </h1>
            <p className="lead">
              Compress days of manual adjudication into seconds. ClaimEase fuses
              multimodal document intelligence with graph neural fraud defense to
              power straight-through processing for insurers, banks, and enterprise
              finance.
            </p>
            <div className="cta-row">
              <Link to="/register" className="btn btn-primary">
                Pre-register API Access
              </Link>
              <a href="#simulator" className="btn btn-ghost">
                Launch Simulator
              </a>
            </div>
            <div className="metric-strip">
              <div className="metric">
                <strong>99.6%</strong>
                <span>Intelligent fraud guard</span>
              </div>
              <div className="metric">
                <strong>&lt;3s</strong>
                <span>STP payout window</span>
              </div>
              <div className="metric">
                <strong>ms</strong>
                <span>Multimodal OCR extract</span>
              </div>
            </div>
          </div>
          <div className="hero-visual" aria-hidden="true">
            <div className="ocr-frame" />
            <div className="scan-line" />
            <div
              style={{
                position: 'absolute',
                left: '1.2rem',
                top: '1.2rem',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.72rem',
                color: 'var(--text-muted)',
              }}
            >
              DOC_STREAM · LIVE
              <br />
              GNN_GRAPH · ARMED
            </div>
            <div className="gauge">
              RISK POINTER
              <strong>PASS 0.04</strong>
            </div>
          </div>
        </div>
      </section>

      <Simulator />

      <section className="section">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">Core Pillars</p>
            <h2>Three engines. One autonomous claims stack.</h2>
            <p>
              Built for 2026 multimodal document understanding and fraud-graph
              enforcement — without the friction of legacy review queues.
            </p>
          </div>
          <div className="pillars">
            <article className="pillar">
              <div className="index">01 · VISION</div>
              <h3>Multimodal Vision & OCR</h3>
              <p>
                Millisecond extraction of complex invoices, seals, medical ICD-10
                codes, and authenticity checks across photos and PDFs.
              </p>
            </article>
            <article className="pillar">
              <div className="index">02 · GRAPH</div>
              <h3>Graph Fraud Network</h3>
              <p>
                GNN correlation across historical claims to stop organized rings,
                synthetic identities, and repeat submissions in seconds.
              </p>
            </article>
            <article className="pillar">
              <div className="index">03 · STP</div>
              <h3>Straight-Through Payout</h3>
              <p>
                Low-risk cases clear automatically — funds can reach designated
                accounts within a three-second payout window.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="panel" style={{ padding: '1.75rem', display: 'grid', gap: '1rem' }}>
            <div className="section-head" style={{ marginBottom: 0 }}>
              <h2 style={{ fontSize: '1.6rem' }}>Ready for whitelist onboarding?</h2>
              <p>
                API pre-registration, purchase, and console login require approved
                partner emails.
              </p>
            </div>
            <div className="cta-row" style={{ marginBottom: 0 }}>
              <Link to="/sdk" className="btn btn-primary">
                Explore Enterprise SDK
              </Link>
              <Link to="/benchmarks" className="btn btn-ghost">
                View Benchmark Matrix
              </Link>
              <Link to="/pricing" className="btn btn-ghost">
                See Pricing
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
