import { useState, FormEvent } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import SEO from '../components/SEO';
import { isWhitelisted, setStoredUser } from '../utils/whitelist';
import './Auth.css';

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    setTimeout(() => {
      if (!isWhitelisted(email)) {
        setError('Your email is not on the whitelist. Please apply for access first.');
        setLoading(false);
        return;
      }

      if (password.length < 6) {
        setError('Invalid credentials. Please try again.');
        setLoading(false);
        return;
      }

      setStoredUser({ email, name: email.split('@')[0] });
      setLoading(false);
      navigate('/dashboard');
    }, 800);
  };

  return (
    <>
      <SEO
        title="Log In"
        description="Log in to your AIFLASH.NEWS account. Whitelist required."
        path="/login"
        noindex
      />

      <div className="auth-page">
        <div className="auth-card card">
          <div className="auth-header">
            <img src="/logo.png" alt="AIFLASH.NEWS" width={160} height={36} />
            <h1>Welcome back</h1>
            <p>Log in to access your real-time AI intelligence dashboard.</p>
          </div>

          <div className="alert alert-info">
            Login requires whitelist approval. <Link to="/whitelist">Apply here</Link>.
          </div>

          {error && <div className="alert alert-error">{error}</div>}

          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@company.com"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                required
                minLength={6}
              />
            </div>
            <button type="submit" className="btn btn-primary auth-submit" disabled={loading}>
              {loading ? 'Verifying...' : 'Log In'}
            </button>
          </form>

          <p className="auth-footer">
            Don't have an account? <Link to="/register">Register</Link>
          </p>

          <details className="demo-hint">
            <summary>Demo whitelist emails</summary>
            <p className="mono">demo@aiflash.news, founder@aiflash.news, dev@aiflash.news</p>
          </details>
        </div>
      </div>
    </>
  );
}
