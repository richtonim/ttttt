import SEO from '../components/SEO';
import './Api.css';

const endpoints = [
  { method: 'GET', path: '/v1/digests', desc: 'List latest Flash Digests with optional source filter' },
  { method: 'GET', path: '/v1/digests/:id', desc: 'Get a single Flash Digest by ID' },
  { method: 'GET', path: '/v1/models', desc: 'List model telemetry with benchmark data' },
  { method: 'GET', path: '/v1/models/:id', desc: 'Get detailed model telemetry' },
  { method: 'POST', path: '/v1/alerts', desc: 'Create a custom alert rule (Pro+)' },
  { method: 'GET', path: '/v1/alerts', desc: 'List your alert rules' },
  { method: 'WS', path: '/v1/stream', desc: 'WebSocket stream for real-time digests' },
];

export default function ApiDocs() {
  return (
    <>
      <SEO
        title="API Documentation"
        description="AIFLASH.NEWS REST and WebSocket API documentation. Real-time AI intelligence endpoints for developers."
        path="/api"
      />

      <div className="page-header">
        <div className="container">
          <h1>API Documentation</h1>
          <p>REST and WebSocket APIs for programmatic access to Flash Digests and model telemetry.</p>
        </div>
      </div>

      <section className="section">
        <div className="container api-content">
          <div className="card api-intro">
            <h2>Getting Started</h2>
            <p>All API requests require an API key passed via the <code className="mono">Authorization: Bearer &lt;key&gt;</code> header. API access is available on Pro and Enterprise plans (whitelist required).</p>
            <div className="api-base-url mono">
              Base URL: https://api.aiflash.news
            </div>
          </div>

          <h2 className="api-section-title">Endpoints</h2>
          <div className="api-endpoints">
            {endpoints.map((ep) => (
              <div key={ep.path} className="card api-endpoint">
                <div className="endpoint-header">
                  <span className={`method-badge method-${ep.method.toLowerCase()}`}>{ep.method}</span>
                  <code className="mono endpoint-path">{ep.path}</code>
                </div>
                <p>{ep.desc}</p>
              </div>
            ))}
          </div>

          <div className="card api-example">
            <h3>Example Request</h3>
            <pre className="mono"><code>{`curl -X GET "https://api.aiflash.news/v1/digests?limit=10&source=ArXiv" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Accept: application/json"`}</code></pre>
          </div>

          <div className="card api-example">
            <h3>Example Response</h3>
            <pre className="mono"><code>{`{
  "data": [
    {
      "id": "fd-003",
      "title": "DeepSeek-R2 paper drops on ArXiv",
      "summary": "Sparse MoE architecture claims SOTA on MATH-500...",
      "source": "ArXiv",
      "latency_ms": 167,
      "tags": ["moe", "research"],
      "timestamp": "2026-02-04T12:11:33Z"
    }
  ],
  "meta": { "total": 142, "page": 1 }
}`}</code></pre>
          </div>

          <div className="api-rate-limits card">
            <h3>Rate Limits</h3>
            <table className="rate-table">
              <thead>
                <tr><th>Plan</th><th>REST</th><th>WebSocket</th></tr>
              </thead>
              <tbody>
                <tr><td>Observer</td><td className="mono">—</td><td className="mono">—</td></tr>
                <tr><td>Pro</td><td className="mono">10,000/day</td><td className="mono">1 connection</td></tr>
                <tr><td>Enterprise</td><td className="mono">Unlimited</td><td className="mono">10 connections</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  );
}
