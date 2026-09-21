import { Link } from 'react-router-dom'
import { Logo } from './Logo'

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <Logo />
            <p style={{ color: 'var(--text-muted)', marginTop: '1rem', maxWidth: '36ch' }}>
              Autonomous AI Claims & Fraud Guard Engine for insurers, banks, and
              enterprise finance teams.
            </p>
          </div>
          <div>
            <h4>Product</h4>
            <Link to="/claim-engine">Claim Engine</Link>
            <Link to="/fraud-guard">Fraud Guard</Link>
            <Link to="/benchmarks">Benchmarks</Link>
            <Link to="/sdk">SDK & CLI</Link>
          </div>
          <div>
            <h4>Access</h4>
            <Link to="/register">Pre-register API</Link>
            <Link to="/login">Sign in</Link>
            <Link to="/pricing">Pricing</Link>
            <Link to="/purchase">Purchase</Link>
          </div>
          <div>
            <h4>Company</h4>
            <Link to="/contact">Contact</Link>
            <Link to="/privacy">Privacy</Link>
            <Link to="/terms">Terms</Link>
            <a href="mailto:early-access@claimease.in">early-access@claimease.in</a>
          </div>
        </div>
        <div className="footer-copy">
          <span>© {new Date().getFullYear()} ClaimEase.AI · claimease.in</span>
          <span className="mono">Instant Claims. Zero Friction. Uncompromising Fraud Protection.</span>
        </div>
      </div>
    </footer>
  )
}
