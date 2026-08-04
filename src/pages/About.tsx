import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import './About.css';

export default function About() {
  return (
    <>
      <SEO
        title="About AIFLASH.NEWS"
        description="AIFLASH.NEWS is a 2026 startup building real-time AI intelligence and model release telemetry for developers, architects, and investors."
        path="/about"
      />

      <div className="page-header">
        <div className="container">
          <h1>About AIFLASH.NEWS</h1>
          <p>Building the telemetry layer for the AI ecosystem — founded 2026, San Francisco.</p>
        </div>
      </div>

      <section className="section">
        <div className="container about-content">
          <div className="about-mission card">
            <h2>Our Mission</h2>
            <p>
              The AI landscape moves faster than any human can track. GitHub repos drop at midnight.
              ArXiv papers publish on weekends. Model cards update without announcement. Traditional tech
              media adds days of delay and layers of marketing noise.
            </p>
            <p>
              AIFLASH.NEWS exists to fix this. We deploy autonomous AI agents across 50+ sources —
              GitHub, ArXiv, HuggingFace, official lab blogs, and social signals — to detect, distill,
              and deliver pure intelligence in sub-second latency.
            </p>
          </div>

          <div className="about-values">
            <div className="value-card card">
              <h3>⚡ Speed First</h3>
              <p>Every millisecond matters when you're making architecture decisions or investment calls. Our p50 ingest latency is under 200ms.</p>
            </div>
            <div className="value-card card">
              <h3>🎯 Signal Only</h3>
              <p>We strip reposts, hype cycles, and PR fluff. If it doesn't change what you build or invest in, it doesn't make the feed.</p>
            </div>
            <div className="value-card card">
              <h3>📊 Data-Driven</h3>
              <p>Benchmarks, context windows, parameter counts, and release status — structured telemetry, not opinion pieces.</p>
            </div>
          </div>

          <div className="about-team card">
            <h2>The Team</h2>
            <p>
              Founded in early 2026 by engineers and researchers from leading AI labs and infrastructure
              companies. We're a team of 12 based in San Francisco, with remote contributors across
              UTC, PST, and CET timezones ensuring 24/7 agent coverage.
            </p>
            <Link to="/careers" className="btn btn-secondary">View Open Roles →</Link>
          </div>

          <div className="about-cta card">
            <h2>Join the Early Access Program</h2>
            <p>We're currently in whitelist-only early access. Apply to get real-time intelligence before the public launch.</p>
            <Link to="/whitelist" className="btn btn-primary">Apply for Whitelist</Link>
          </div>
        </div>
      </section>
    </>
  );
}
