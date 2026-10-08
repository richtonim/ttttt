import { useState } from 'react';
import SEO from '../components/SEO';
import { flashDigests } from '../data/mockData';
import './Digest.css';

const sources = ['All', 'GitHub', 'ArXiv', 'HuggingFace', 'AI Lab', 'X'] as const;

export default function Digest() {
  const [filter, setFilter] = useState<string>('All');

  const filtered = filter === 'All'
    ? flashDigests
    : flashDigests.filter((d) => d.source === filter);

  return (
    <>
      <SEO
        title="Flash Digest — Live AI Intelligence Feed"
        description="Real-time Flash Digests from GitHub, ArXiv, HuggingFace, and AI labs. Sub-second AI news for developers and investors."
        path="/digest"
      />

      <div className="page-header">
        <div className="container">
          <div className="page-header-row">
            <div>
              <h1>Flash Digest</h1>
              <p>Pure signal from 50+ sources. Updated in real time by autonomous agents.</p>
            </div>
            <span className="badge badge-live">
              <span className="live-dot" />
              Streaming
            </span>
          </div>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="filter-bar">
            {sources.map((s) => (
              <button
                key={s}
                className={`filter-btn ${filter === s ? 'active' : ''}`}
                onClick={() => setFilter(s)}
              >
                {s}
              </button>
            ))}
          </div>

          <div className="digest-feed">
            {filtered.map((d, i) => (
              <article key={d.id} className="feed-item" style={{ animationDelay: `${i * 0.05}s` }}>
                <div className="feed-item-time mono">
                  {new Date(d.timestamp).toLocaleTimeString('en-US', { hour12: false })}
                </div>
                <div className="feed-item-content card">
                  <div className="feed-item-meta">
                    <span className="badge badge-flash">{d.source}</span>
                    <span className="mono feed-latency">{d.latencyMs}ms ingest</span>
                  </div>
                  <h2>{d.title}</h2>
                  <p>{d.summary}</p>
                  <div className="feed-item-footer">
                    <div className="digest-tags">
                      {d.tags.map((t) => (
                        <span key={t} className="tag mono">{t}</span>
                      ))}
                    </div>
                    <a href={d.url} className="feed-link">View Source →</a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
