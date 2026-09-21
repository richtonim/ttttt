import { Link } from 'react-router-dom'
import { Logo } from './Logo'

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <Logo />
          <p>
            Spatial Intelligence for Modern Interiors. Prompt to 3D Space in
            Milliseconds.
          </p>
        </div>

        <div>
          <h4>Product</h4>
          <Link to="/product">Overview</Link>
          <Link to="/features">Features</Link>
          <Link to="/pricing">Pricing</Link>
          <Link to="/demo">Live Demo</Link>
          <Link to="/docs">Documentation</Link>
        </div>

        <div>
          <h4>Company</h4>
          <Link to="/about">About</Link>
          <Link to="/blog">Insights</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/waitlist">Waitlist</Link>
        </div>

        <div>
          <h4>Access</h4>
          <Link to="/login">Sign in</Link>
          <Link to="/register">Register</Link>
          <Link to="/privacy">Privacy</Link>
          <Link to="/terms">Terms</Link>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© {new Date().getFullYear()} INTERIORPUP.AI — interiorpup.com</span>
        <span>Whitelist access · Built for architects, designers & PropTech</span>
      </div>
    </footer>
  )
}
