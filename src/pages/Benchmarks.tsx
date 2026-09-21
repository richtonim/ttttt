import { SEO } from '../components/SEO'

const ROWS = [
  {
    metric: 'Average review cost / claim',
    manual: '$18 – $42',
    ocr: '$6 – $12',
    ease: '$0.35 – $1.10',
  },
  {
    metric: 'Mean time to payout',
    manual: '3 – 14 days',
    ocr: '8 – 36 hours',
    ease: '0.3 – 3 seconds (STP)',
  },
  {
    metric: 'Fraud miss rate',
    manual: '4.8% – 9.1%',
    ocr: '3.2% – 6.5%',
    ease: '0.4% (99.6% guard)',
  },
  {
    metric: 'Document field coverage',
    manual: 'Analyst dependent',
    ocr: 'Structured text only',
    ease: 'Multimodal + seals + ICD',
  },
  {
    metric: 'Ring / collusion detection',
    manual: 'Case-by-case',
    ocr: 'Not available',
    ease: 'GNN graph correlation',
  },
  {
    metric: 'Audit trail granularity',
    manual: 'Notes & spreadsheets',
    ocr: 'Extraction logs',
    ease: 'OCR + GNN + payout ledger',
  },
]

export function Benchmarks() {
  return (
    <>
      <SEO
        title="Benchmarks"
        description="Compare ClaimEase against manual review and generic OCR on cost, payout speed, and fraud miss rate."
        path="/benchmarks"
      />
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">03_BENCHMARKS</p>
          <h1>Benchmark matrix: cost, speed, and leak-proofing</h1>
          <p>
            Indicative 2026 early-access benchmarks for insurer pilot workloads.
            Exact figures vary by portfolio mix and Fraud Guard strictness.
          </p>
        </div>
      </section>
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="table-wrap">
            <table>
              <thead>
                <tr>
                  <th>Metric</th>
                  <th>Traditional Manual Review</th>
                  <th>Generic OCR Software</th>
                  <th>ClaimEase Engine</th>
                </tr>
              </thead>
              <tbody>
                {ROWS.map((row) => (
                  <tr key={row.metric}>
                    <td>{row.metric}</td>
                    <td>{row.manual}</td>
                    <td>{row.ocr}</td>
                    <td className="highlight">{row.ease}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p style={{ color: 'var(--text-dim)', marginTop: '1rem', fontSize: '0.9rem' }}>
            Methodology note: composite of internal sandbox runs on medical invoice,
            auto collision, and corporate expense corpora with Fraud Guard strictness
            at 60 and concurrency at 24.
          </p>
        </div>
      </section>
    </>
  )
}
