import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import Logo from './Logo'
import { NAV_LINKS } from '../lib/constants'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const location = useLocation()

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-navy/5">
      <nav className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 h-16 flex items-center justify-between" aria-label="Main navigation">
        <Logo size="md" />

        <ul className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link
                to={link.href}
                className={`text-sm font-semibold tracking-wider transition-colors ${
                  location.pathname === link.href
                    ? 'text-mint'
                    : 'text-navy/70 hover:text-navy'
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center gap-3">
          <Link to="/login" className="text-sm font-medium text-navy/70 hover:text-navy transition-colors">
            Log In
          </Link>
          <Link to="/pricing" className="btn-primary text-sm !px-5 !py-2">
            Get Started
          </Link>
        </div>

        <button
          className="md:hidden p-2 text-navy"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? (
              <path d="M6 6l12 12M6 18L18 6" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </nav>

      {open && (
        <div className="md:hidden bg-white border-b border-navy/5 px-6 pb-4">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              onClick={() => setOpen(false)}
              className="block py-3 text-sm font-semibold tracking-wider text-navy/70 hover:text-navy"
            >
              {link.label}
            </Link>
          ))}
          <div className="flex gap-3 pt-3 border-t border-navy/5 mt-2">
            <Link to="/login" onClick={() => setOpen(false)} className="btn-secondary text-sm flex-1">
              Log In
            </Link>
            <Link to="/pricing" onClick={() => setOpen(false)} className="btn-primary text-sm flex-1">
              Get Started
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
