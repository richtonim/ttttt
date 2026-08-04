import { Link, useNavigate } from 'react-router-dom';
import SEO from '../components/SEO';
import { getStoredUser, setStoredUser } from '../utils/whitelist';
import { flashDigests } from '../data/mockData';

export default function Dashboard() {
  const user = getStoredUser();
  const navigate = useNavigate();

  if (!user) {
    return (
      <>
        <SEO title="Dashboard" description="AIFLASH.NEWS dashboard" path="/dashboard" noindex />
        <div className="page-header">
          <div className="container">
            <h1>Dashboard</h1>
            <p>Please <Link to="/login">log in</Link> to access your dashboard.</p>
          </div>
        </div>
      </>
    );
  }

  const handleLogout = () => {
    setStoredUser(null);
    navigate('/');
  };

  return (
    <>
      <SEO title="Dashboard" description="Your AIFLASH.NEWS intelligence dashboard." path="/dashboard" noindex />

      <div className="page-header">
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 16 }}>
          <div>
            <h1>Welcome, {user.name}</h1>
            <p className="mono" style={{ fontSize: '0.875rem', color: 'var(--color-text-muted)' }}>{user.email}</p>
          </div>
          <button onClick={handleLogout} className="btn btn-secondary">Log Out</button>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24, marginBottom: 40 }}>
            <div className="card" style={{ textAlign: 'center' }}>
              <div className="mono" style={{ fontSize: '2rem', fontWeight: 600, color: 'var(--color-live)' }}>142ms</div>
              <div style={{ fontSize: '0.8125rem', color: 'var(--color-text-muted)' }}>Avg Ingest Latency</div>
            </div>
            <div className="card" style={{ textAlign: 'center' }}>
              <div className="mono" style={{ fontSize: '2rem', fontWeight: 600 }}>847</div>
              <div style={{ fontSize: '0.8125rem', color: 'var(--color-text-muted)' }}>Digests Today</div>
            </div>
            <div className="card" style={{ textAlign: 'center' }}>
              <div className="mono" style={{ fontSize: '2rem', fontWeight: 600 }}>12</div>
              <div style={{ fontSize: '0.8125rem', color: 'var(--color-text-muted)' }}>Active Alerts</div>
            </div>
          </div>

          <h2 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: 16 }}>Your Live Feed</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {flashDigests.slice(0, 4).map((d) => (
              <div key={d.id} className="card">
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
                  <span className="badge badge-flash">{d.source}</span>
                  <span className="mono" style={{ fontSize: '0.75rem', color: 'var(--color-live)' }}>{d.latencyMs}ms</span>
                </div>
                <h3 style={{ fontWeight: 700, fontSize: '1rem', marginBottom: 4 }}>{d.title}</h3>
                <p style={{ fontSize: '0.875rem', color: 'var(--color-text-muted)' }}>{d.summary}</p>
              </div>
            ))}
          </div>

          <div style={{ marginTop: 32, display: 'flex', gap: 16 }}>
            <Link to="/digest" className="btn btn-primary">Full Feed</Link>
            <Link to="/telemetry" className="btn btn-secondary">Telemetry</Link>
            <Link to="/purchase?plan=pro" className="btn btn-secondary">Upgrade Plan</Link>
          </div>
        </div>
      </section>
    </>
  );
}
