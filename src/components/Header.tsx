import { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { Logo } from './Logo'
import { useTheme } from '../context/ThemeContext'
import { useAuth } from '../context/AuthContext'

const NAV = [
  { to: '/claim-engine', label: '01_CLAIM_ENGINE' },
  { to: '/fraud-guard', label: '02_FRAUD_GUARD' },
  { to: '/benchmarks', label: '03_BENCHMARKS' },
  { to: '/sdk', label: '04_SDK' },
]

export function Header() {
  const { theme, toggleTheme } = useTheme()
  const { user, logout } = useAuth()
  const [open, setOpen] = useState(false)

  return (
    <>
      <header className="site-header">
        <div className="container header-inner">
          <Logo />
          <nav className="nav" aria-label="Primary">
            {NAV.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) => (isActive ? 'active' : undefined)}
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
          <div className="header-actions">
            <button
              type="button"
              className="icon-btn"
              onClick={toggleTheme}
              aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
              title="Toggle theme"
            >
              {theme === 'dark' ? (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.8" />
                  <path d="M12 2v2M12 20v2M2 12h2M20 12h2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                </svg>
              ) : (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M20 14.5A8.5 8.5 0 0 1 9.5 4 7 7 0 1 0 20 14.5z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
                </svg>
              )}
            </button>
            {user ? (
              <>
                <span className="mono" style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                  {user.email}
                </span>
                <button type="button" className="btn btn-ghost" onClick={logout}>
                  Sign out
                </button>
              </>
            ) : (
              <Link to="/login" className="btn btn-ghost">
                Sign in
              </Link>
            )}
            <Link to="/register" className="btn btn-primary">
              Pre-register API
            </Link>
            <button
              type="button"
              className="icon-btn menu-btn"
              aria-label="Open menu"
              onClick={() => setOpen((v) => !v)}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
              </svg>
            </button>
          </div>
        </div>
      </header>
      <nav className={`mobile-nav ${open ? 'open' : ''}`} aria-label="Mobile">
        {NAV.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            onClick={() => setOpen(false)}
            className={({ isActive }) => (isActive ? 'active' : undefined)}
          >
            {item.label}
          </NavLink>
        ))}
        <NavLink to="/pricing" onClick={() => setOpen(false)}>
          Pricing
        </NavLink>
        <NavLink to="/contact" onClick={() => setOpen(false)}>
          Contact
        </NavLink>
      </nav>
    </>
  )
}
