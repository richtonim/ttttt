import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { flashDigests, modelTelemetry } from '../data/mockData';
import './Home.css';

export default function Home() {
  const latestDigests = flashDigests.slice(0, 3);
  const latestModels = modelTelemetry.slice(0, 3);

  return (
    <>
      <SEO
        title="AIFLASH.NEWS — Real-Time AI Intelligence & Model Release Telemetry"
        description="Sub-second AI intelligence for developers, AI architects, and tech investors. Zero noise Flash Digests from GitHub, ArXiv, HuggingFace, and AI labs worldwide."
        path="/"
      />

      <section className="hero">
        <div className="container hero-inner">
          <div className="hero-badge badge badge-live">
            <span className="live-dot" />
            Live · 142ms avg ingest
          </div>
          <h1 className="hero-title">
            Real-Time AI Intelligence.<br />
            <span className="gradient-text">Sub-Second Speed.</span><br />
            Zero Noise.
          </h1>
          <p className="hero-subtitle">
            AIFLASH.NEWS is the telemetry engine for developers, AI architects, and tech investors.
            Our autonomous agents scan GitHub, ArXiv, HuggingFace, and AI labs worldwide — delivering
            pure Flash Digests in milliseconds, not marketing fluff.
          </p>
          <div className="hero-actions">
            <Link to="/digest" className="btn btn-primary">View Live Feed</Link>
            <Link to="/register" className="btn btn-secondary">Request Whitelist Access</Link>
          </div>
          <div className="hero-stats">
            <div className="hero-stat">
              <span className="hero-stat-value mono">&lt;200ms</span>
              <span className="hero-stat-label">Digest Latency</span>
            </div>
            <div className="hero-stat">
              <span className="hero-stat-value mono">50+</span>
              <span className="hero-stat-label">Sources Monitored</span>
            </div>
            <div className="hero-stat">
              <span className="hero-stat-value mono">24/7</span>
              <span className="hero-stat-label">Agent Coverage</span>
            </div>
            <div className="hero-stat">
              <span className="hero-stat-value mono">0</span>
              <span className="hero-stat-label">Marketing Noise</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Latest Flash Digests</h2>
            <p className="section-subtitle">Pure signal. No filler. Updated in real time.</p>
          </div>
          <div className="digest-grid">
            {latestDigests.map((d) => (
              <article key={d.id} className="card digest-card">
                <div className="digest-card-meta">
                  <span className="badge badge-flash">{d.source}</span>
                  <span className="mono digest-latency">{d.latencyMs}ms</span>
                </div>
                <h3>{d.title}</h3>
                <p>{d.summary}</p>
                <div className="digest-tags">
                  {d.tags.map((t) => (
                    <span key={t} className="tag mono">{t}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
          <div className="section-cta">
            <Link to="/digest" className="btn btn-secondary">View All Digests →</Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Model Release Telemetry</h2>
            <p className="section-subtitle">Benchmarks, context windows, and release status — side by side.</p>
          </div>
          <div className="telemetry-preview">
            {latestModels.map((m) => (
              <div key={m.id} className="card telemetry-card">
                <div className="telemetry-card-header">
                  <div>
                    <h3>{m.name}</h3>
                    <span className="telemetry-provider">{m.provider}</span>
                  </div>
                  <span className={`status-badge status-${m.status}`}>{m.status}</span>
                </div>
                <div className="telemetry-metrics mono">
                  <div><span>Context</span><strong>{(m.contextWindow / 1000).toFixed(0)}K</strong></div>
                  <div><span>Params</span><strong>{m.parameters}</strong></div>
                  <div><span>Latency</span><strong>{m.latencyMs}ms</strong></div>
                </div>
              </div>
            ))}
          </div>
          <div className="section-cta">
            <Link to="/telemetry" className="btn btn-secondary">Open Telemetry Dashboard →</Link>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">⚡</div>
              <h3>Sub-Second Ingest</h3>
              <p>Autonomous agents detect releases and papers within hundreds of milliseconds of publication.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🎯</div>
              <h3>Zero Noise Filter</h3>
              <p>AI-powered deduplication strips hype, reposts, and marketing copy. Only actionable signal.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">📊</div>
              <h3>Benchmark Telemetry</h3>
              <p>Side-by-side model comparisons with SWE-bench, MMLU, HumanEval, and custom metrics.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🔗</div>
              <h3>Deep Source Links</h3>
              <p>Direct links to GitHub repos, ArXiv papers, HuggingFace models, and official announcements.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container cta-inner">
          <h2>Ready for zero-noise AI intelligence?</h2>
          <p>Join the whitelist for real-time access. Observer tier is free with delayed feed.</p>
          <div className="cta-actions">
            <Link to="/register" className="btn btn-primary">Apply for Whitelist</Link>
            <Link to="/pricing" className="btn btn-secondary">View Pricing</Link>
          </div>
        </div>
      </section>
    </>
  );
}
