import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const roles = [
  { title: 'Senior ML Engineer — Ingest Pipeline', location: 'San Francisco / Remote', type: 'Full-time' },
  { title: 'Backend Engineer — Real-Time Systems', location: 'San Francisco / Remote', type: 'Full-time' },
  { title: 'Frontend Engineer — Telemetry Dashboard', location: 'Remote (US/EU)', type: 'Full-time' },
  { title: 'DevRel / Technical Writer', location: 'Remote', type: 'Full-time' },
];

export default function Careers() {
  return (
    <>
      <SEO
        title="Careers — Join AIFLASH.NEWS"
        description="Open positions at AIFLASH.NEWS. Help build the real-time AI intelligence platform of the future."
        path="/careers"
      />
      <div className="page-header">
        <div className="container">
          <h1>Careers</h1>
          <p>Join us in building the telemetry layer for the AI ecosystem.</p>
        </div>
      </div>
      <section className="section">
        <div className="container" style={{ maxWidth: 720 }}>
          <p style={{ color: 'var(--color-text-muted)', marginBottom: 32 }}>
            We're a small, fast-moving team based in San Francisco. We value speed, signal clarity,
            and engineers who ship. All roles include competitive equity, health benefits, and
            unlimited PTO.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {roles.map((role) => (
              <div key={role.title} className="card" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 16 }}>
                <div>
                  <h3 style={{ fontWeight: 700, marginBottom: 4 }}>{role.title}</h3>
                  <p style={{ fontSize: '0.875rem', color: 'var(--color-text-muted)' }}>
                    {role.location} · {role.type}
                  </p>
                </div>
                <Link to="/contact" className="btn btn-secondary">Apply</Link>
              </div>
            ))}
          </div>
          <p style={{ marginTop: 32, fontSize: '0.875rem', color: 'var(--color-text-muted)' }}>
            Don't see a fit? Send your resume to <span className="mono">careers@aiflash.news</span>
          </p>
        </div>
      </section>
    </>
  );
}
