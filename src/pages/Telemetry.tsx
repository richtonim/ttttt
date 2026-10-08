import { useState } from 'react';
import SEO from '../components/SEO';
import { modelTelemetry } from '../data/mockData';
import './Telemetry.css';

export default function Telemetry() {
  const [sortBy, setSortBy] = useState<'date' | 'latency' | 'context'>('date');

  const sorted = [...modelTelemetry].sort((a, b) => {
    if (sortBy === 'latency') return a.latencyMs - b.latencyMs;
    if (sortBy === 'context') return b.contextWindow - a.contextWindow;
    return new Date(b.releaseDate).getTime() - new Date(a.releaseDate).getTime();
  });

  return (
    <>
      <SEO
        title="Model Release Telemetry Dashboard"
        description="Real-time AI model release telemetry. Compare benchmarks, context windows, parameters, and latency across OpenAI, Anthropic, Meta, Google, and more."
        path="/telemetry"
      />

      <div className="page-header">
        <div className="container">
          <h1>Model Telemetry</h1>
          <p>Live model release tracking with benchmark comparisons and release status.</p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="telemetry-toolbar">
            <span className="badge badge-live">
              <span className="live-dot" />
              {modelTelemetry.length} models tracked
            </span>
            <div className="sort-controls">
              <label className="mono">Sort by:</label>
              <select value={sortBy} onChange={(e) => setSortBy(e.target.value as typeof sortBy)}>
                <option value="date">Release Date</option>
                <option value="latency">Latency</option>
                <option value="context">Context Window</option>
              </select>
            </div>
          </div>

          <div className="telemetry-table-wrap">
            <table className="telemetry-table">
              <thead>
                <tr>
                  <th>Model</th>
                  <th>Provider</th>
                  <th>Status</th>
                  <th>Context</th>
                  <th>Parameters</th>
                  <th>Top Benchmark</th>
                  <th>Latency</th>
                </tr>
              </thead>
              <tbody>
                {sorted.map((m) => {
                  const topBench = m.benchmark.reduce((a, b) => (a.score > b.score ? a : b));
                  return (
                    <tr key={m.id}>
                      <td className="model-name">{m.name}</td>
                      <td>{m.provider}</td>
                      <td><span className={`status-badge status-${m.status}`}>{m.status}</span></td>
                      <td className="mono">{(m.contextWindow / 1000).toFixed(0)}K</td>
                      <td className="mono">{m.parameters}</td>
                      <td className="mono">{topBench.name}: {topBench.score}%</td>
                      <td className="mono latency-cell">{m.latencyMs}ms</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          <div className="benchmark-grid">
            {sorted.map((m) => (
              <div key={m.id} className="card benchmark-card">
                <h3>{m.name}</h3>
                <span className="telemetry-provider">{m.provider}</span>
                <div className="benchmark-bars">
                  {m.benchmark.map((b) => (
                    <div key={b.name} className="benchmark-row">
                      <span className="mono benchmark-label">{b.name}</span>
                      <div className="benchmark-bar-track">
                        <div className="benchmark-bar-fill" style={{ width: `${b.score}%` }} />
                      </div>
                      <span className="mono benchmark-score">{b.score}%</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
