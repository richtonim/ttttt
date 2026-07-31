import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Logo } from './Logo'
import { useWhitelist } from '../context/WhitelistContext'

const links = [
  { to: '/product', label: 'Product' },
  { to: '/features', label: 'Features' },
  { to: '/pricing', label: 'Pricing' },
  { to: '/demo', label: 'Demo' },
  { to: '/docs', label: 'Docs' },
  { to: '/blog', label: 'Insights' },
]

export function Navbar() {
  const [open, setOpen] = useState(false)
  const { sessionEmail, logout } = useWhitelist()

  return (
    <header className="nav">
      <div className="container nav-inner">
        <Link to="/" className="nav-brand" onClick={() => setOpen(false)}>
          <Logo />
        </Link>

        <button
          className="nav-toggle"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
        </button>

        <nav className={`nav-links ${open ? 'is-open' : ''}`}>
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              onClick={() => setOpen(false)}
              className={({ isActive }) => (isActive ? 'is-active' : undefined)}
            >
              {link.label}
            </NavLink>
          ))}
          <div className="nav-actions">
            {sessionEmail ? (
              <>
                <span className="nav-session">{sessionEmail}</span>
                <button type="button" className="btn btn-ghost" onClick={logout}>
                  Sign out
                </button>
              </>
            ) : (
              <Link to="/login" className="btn btn-ghost" onClick={() => setOpen(false)}>
                Sign in
              </Link>
            )}
            <Link to="/waitlist" className="btn btn-primary" onClick={() => setOpen(false)}>
              Request Access
            </Link>
          </div>
        </nav>
      </div>
    </header>
  )
}
