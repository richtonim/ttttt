import { Link } from 'react-router-dom';
import './Footer.css';

const footerLinks = {
  Product: [
    { to: '/digest', label: 'Flash Digest' },
    { to: '/telemetry', label: 'Model Telemetry' },
    { to: '/pricing', label: 'Pricing' },
    { to: '/api', label: 'API Docs' },
  ],
  Company: [
    { to: '/about', label: 'About' },
    { to: '/contact', label: 'Contact' },
    { to: '/whitelist', label: 'Whitelist' },
    { to: '/careers', label: 'Careers' },
  ],
  Legal: [
    { to: '/privacy', label: 'Privacy Policy' },
    { to: '/terms', label: 'Terms of Service' },
    { to: '/cookies', label: 'Cookie Policy' },
  ],
};

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <img src="/logo.png" alt="AIFLASH.NEWS" width={160} height={36} />
            <p className="footer-tagline">
              Real-Time AI Intelligence. Sub-Second Speed. Zero Noise.
            </p>
            <p className="footer-copy mono">
              © 2026 AIFLASH.NEWS · San Francisco, CA
            </p>
          </div>
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title} className="footer-col">
              <h4>{title}</h4>
              <ul>
                {links.map((link) => (
                  <li key={link.to}>
                    <Link to={link.to}>{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="footer-bottom">
          <span className="badge badge-live">
            <span className="live-dot" />
            All systems operational
          </span>
          <span className="mono footer-latency">p50 ingest: 142ms · p99: 312ms</span>
        </div>
      </div>
    </footer>
  );
}
