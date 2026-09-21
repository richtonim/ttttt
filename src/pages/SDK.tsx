import { useState } from 'react'
import { Link } from 'react-router-dom'
import { SEO } from '../components/SEO'

const SNIPPETS = {
  python: `from claimease import ClaimClient

client = ClaimClient(api_key="ce_live_***")
result = client.adjudicate(
    document_path="./invoice.pdf",
    claim_type="medical_invoice",
    fraud_strictness=0.62,
)

print(result.stp_eligible, result.payout_ms, result.fraud.score)`,
  node: `import { ClaimEase } from "@claimease/sdk";

const ce = new ClaimEase({ apiKey: process.env.CLAIMEASE_KEY });
const decision = await ce.claims.create({
  type: "auto_collision",
  fileUrl: "s3://bucket/case-8821.jpg",
  concurrencyHint: 24,
});

console.log(decision.stpRate, decision.fraud.block);`,
  dotnet: `using ClaimEase.Sdk;

var client = new ClaimEaseClient(Environment.GetEnvironmentVariable("CLAIMEASE_KEY"));
var decision = await client.AdjudicateAsync(new ClaimRequest {
    DocumentPath = "expense.pdf",
    ClaimType = ClaimType.CorporateExpense,
    FraudStrictness = 0.55
});

Console.WriteLine($"{decision.Status} {decision.LatencyMs}ms");`,
  cli: `# Install
npm i -g @claimease/cli

# Authenticate (whitelist token)
ce auth login --token $CLAIMEASE_TOKEN

# Run a local adjudication
ce claims run ./docs/invoice.pdf \\
  --type medical_invoice \\
  --strictness 0.62 \\
  --json`,
} as const

type Lang = keyof typeof SNIPPETS

export function SDK() {
  const [lang, setLang] = useState<Lang>('python')

  return (
    <>
      <SEO
        title="CLI & Enterprise SDK"
        description="Integrate ClaimEase with Python, Node.js, .NET SDKs and a fast CLI for autonomous claims adjudication."
        path="/sdk"
      />
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">04_SDK</p>
          <h1>CLI & Enterprise SDK</h1>
          <p>
            Ship ClaimEase into existing claims platforms with first-class SDKs for
            Python, Node.js, and .NET — plus a CLI for ops and sandbox teams.
          </p>
        </div>
      </section>
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container grid-2">
          <div>
            <div className="tabs" role="tablist">
              {(Object.keys(SNIPPETS) as Lang[]).map((key) => (
                <button
                  key={key}
                  type="button"
                  className={`chip ${lang === key ? 'active' : ''}`}
                  onClick={() => setLang(key)}
                >
                  {key === 'dotnet' ? '.NET' : key.toUpperCase()}
                </button>
              ))}
            </div>
            <pre className="code-block">
              <code>{SNIPPETS[lang]}</code>
            </pre>
          </div>
          <div className="stack">
            <article className="pillar">
              <div className="index">SECURITY</div>
              <h3>Whitelist tokens only</h3>
              <p>
                API keys are issued after whitelist approval. Login and purchase
                flows reject non-approved emails.
              </p>
            </article>
            <article className="pillar">
              <div className="index">OPS</div>
              <h3>Observability hooks</h3>
              <p>
                Stream OCR confidence, GNN edge explanations, and STP decisions to
                your SIEM or claims audit vault.
              </p>
            </article>
            <div className="cta-row">
              <Link to="/register" className="btn btn-primary">
                Request SDK access
              </Link>
              <Link to="/contact" className="btn btn-ghost">
                Talk to solutions
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
