import { useState, FormEvent } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { WHITELISTED_EMAILS } from '../utils/whitelist';
import './Whitelist.css';

export default function Whitelist() {
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [useCase, setUseCase] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [approved, setApproved] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const isApproved = WHITELISTED_EMAILS.includes(email.trim().toLowerCase());
    setApproved(isApproved);
    setSubmitted(true);
  };

  return (
    <>
      <SEO
        title="Whitelist Application"
        description="Apply for AIFLASH.NEWS whitelist access. Required for registration, login, and paid plans."
        path="/whitelist"
      />

      <div className="page-header">
        <div className="container">
          <h1>Whitelist Application</h1>
          <p>Early access is invite-only. Apply below to join the AIFLASH.NEWS beta program.</p>
        </div>
      </div>

      <section className="section">
        <div className="container whitelist-layout">
          <div className="whitelist-info">
            <div className="card">
              <h3>Why Whitelist?</h3>
              <p>As a 2026 early-stage startup, we're carefully onboarding users to ensure platform stability and gather product feedback. Whitelist approval grants access to:</p>
              <ul>
                <li>Account registration and login</li>
                <li>Real-time Flash Digest feed</li>
                <li>Model telemetry dashboard</li>
                <li>Pro and Enterprise plan purchases</li>
                <li>API key generation</li>
              </ul>
            </div>
            <div className="card">
              <h3>Review Process</h3>
              <p>Applications are reviewed within 48 hours. We prioritize developers, AI architects, researchers, and tech investors with genuine use cases.</p>
            </div>
          </div>

          <div className="card whitelist-form-card">
            <h2>Apply for Access</h2>

            {submitted ? (
              <div className={`alert ${approved ? 'alert-success' : 'alert-info'}`}>
                {approved ? (
                  <>
                    Your email is pre-approved! You can now <Link to="/register">register</Link> and <Link to="/login">log in</Link>.
                  </>
                ) : (
                  <>
                    Application received for <strong>{email}</strong>. We'll review and notify you within 48 hours. In the meantime, you can browse the <Link to="/digest">public digest feed</Link>.
                  </>
                )}
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="wl-email">Work Email</label>
                  <input
                    id="wl-email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@company.com"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="wl-company">Company / Organization</label>
                  <input
                    id="wl-company"
                    type="text"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    placeholder="Acme AI Labs"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="wl-usecase">How will you use AIFLASH.NEWS?</label>
                  <textarea
                    id="wl-usecase"
                    value={useCase}
                    onChange={(e) => setUseCase(e.target.value)}
                    rows={4}
                    placeholder="Describe your use case..."
                    required
                  />
                </div>
                <button type="submit" className="btn btn-primary">Submit Application</button>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
