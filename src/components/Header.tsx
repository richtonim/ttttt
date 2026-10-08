import { Link, useLocation } from 'react-router-dom';
import { getStoredUser } from '../utils/whitelist';
import './Header.css';

const navLinks = [
  { to: '/digest', label: 'Flash Digest' },
  { to: '/telemetry', label: 'Telemetry' },
  { to: '/pricing', label: 'Pricing' },
  { to: '/api', label: 'API' },
  { to: '/about', label: 'About' },
];

export default function Header() {
  const location = useLocation();
  const user = getStoredUser();

  return (
    <header className="header">
      <div className="container header-inner">
        <Link to="/" className="header-logo">
          <img src="/logo.png" alt="AIFLASH.NEWS" width={180} height={40} />
        </Link>

        <nav className="header-nav" aria-label="Main navigation">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`header-nav-link ${location.pathname === link.to ? 'active' : ''}`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="header-actions">
          <span className="header-status">
            <span className="live-dot" />
            <span className="mono header-status-text">LIVE</span>
          </span>
          {user ? (
            <Link to="/dashboard" className="btn btn-secondary btn-sm">
              {user.name.split(' ')[0]}
            </Link>
          ) : (
            <>
              <Link to="/login" className="btn btn-ghost btn-sm">Log In</Link>
              <Link to="/register" className="btn btn-primary btn-sm">Register</Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
}
