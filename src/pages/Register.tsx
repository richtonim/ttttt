import { useState, FormEvent } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import SEO from '../components/SEO';
import { isWhitelisted, setStoredUser } from '../utils/whitelist';
import './Auth.css';

export default function Register() {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('developer');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    setTimeout(() => {
      if (!isWhitelisted(email)) {
        setError('Registration requires whitelist approval. Please apply on the whitelist page first, then return to register.');
        setLoading(false);
        return;
      }

      if (password.length < 8) {
        setError('Password must be at least 8 characters.');
        setLoading(false);
        return;
      }

      setStoredUser({ email, name });
      setSuccess(true);
      setLoading(false);
      setTimeout(() => navigate('/dashboard'), 1500);
    }, 1000);
  };

  return (
    <>
      <SEO
        title="Register — Apply for Access"
        description="Register for AIFLASH.NEWS. Whitelist approval required for account creation."
        path="/register"
        noindex
      />

      <div className="auth-page">
        <div className="auth-card card">
          <div className="auth-header">
            <img src="/logo.png" alt="AIFLASH.NEWS" width={160} height={36} />
            <h1>Create your account</h1>
            <p>Whitelist-approved members can register for real-time access.</p>
          </div>

          <div className="alert alert-warning">
            Registration is whitelist-only. <Link to="/whitelist">Apply for whitelist</Link> before registering.
          </div>

          {error && <div className="alert alert-error">{error}</div>}
          {success && <div className="alert alert-success">Account created! Redirecting...</div>}

          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Jane Developer"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Work Email</label>
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
              <label htmlFor="role">Role</label>
              <select id="role" value={role} onChange={(e) => setRole(e.target.value)}>
                <option value="developer">Developer / Engineer</option>
                <option value="architect">AI Architect</option>
                <option value="investor">Tech Investor / VC</option>
                <option value="researcher">Researcher</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Min. 8 characters"
                required
                minLength={8}
              />
            </div>
            <button type="submit" className="btn btn-primary auth-submit" disabled={loading || success}>
              {loading ? 'Creating account...' : 'Create Account'}
            </button>
          </form>

          <p className="auth-footer">
            Already have an account? <Link to="/login">Log In</Link>
          </p>
        </div>
      </div>
    </>
  );
}
