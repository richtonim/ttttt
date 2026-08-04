import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

export default function NotFound() {
  return (
    <>
      <SEO title="Page Not Found" description="The page you're looking for doesn't exist." noindex />
      <div style={{ textAlign: 'center', padding: '120px 24px' }}>
        <div className="mono" style={{ fontSize: '4rem', fontWeight: 800, color: 'var(--color-flash)', marginBottom: 16 }}>404</div>
        <h1 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: 8 }}>Page Not Found</h1>
        <p style={{ color: 'var(--color-text-muted)', marginBottom: 32 }}>The signal you're looking for doesn't exist in our feed.</p>
        <Link to="/" className="btn btn-primary">Back to Home</Link>
      </div>
    </>
  );
}
