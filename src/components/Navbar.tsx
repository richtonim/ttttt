import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { LogoIcon, MenuIcon, CloseIcon } from './Icons'

const navLinks = [
  { label: 'Platform', href: '/platform' },
  { label: 'Solutions', href: '/solutions' },
  { label: 'Developers', href: '/developers' },
  { label: 'Documentation', href: '/documentation' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'About', href: '/about' },
  { label: 'Blog', href: '/blog' },
]

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <nav
        className="border-b border-white/[0.06] bg-void/80 backdrop-blur-xl"
        aria-label="Main navigation"
      >
        <div className="container-max mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link to="/" className="flex items-center gap-2.5 group" aria-label="Substratum home">
              <LogoIcon className="w-7 h-7 transition-transform group-hover:scale-105" />
              <span className="text-lg font-semibold tracking-tight">Substratum</span>
            </Link>

            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className={`px-3 py-2 text-sm rounded-lg transition-colors ${
                    location.pathname === link.href
                      ? 'text-white bg-white/[0.06]'
                      : 'text-muted hover:text-white hover:bg-white/[0.04]'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            <div className="hidden lg:flex items-center gap-3">
              <Link to="/login" className="btn-ghost text-sm">
                Log in
              </Link>
              <Link to="/contact" className="btn-primary text-sm py-2.5 px-5">
                Contact Us
              </Link>
            </div>

            <button
              className="lg:hidden p-2 text-muted hover:text-white"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden border-t border-white/[0.06] bg-void/95 backdrop-blur-xl overflow-hidden"
            >
              <div className="px-4 py-4 space-y-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    to={link.href}
                    onClick={() => setMobileOpen(false)}
                    className={`block px-4 py-3 text-sm rounded-lg transition-colors ${
                      location.pathname === link.href
                        ? 'text-white bg-white/[0.06]'
                        : 'text-muted hover:text-white hover:bg-white/[0.04]'
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
                <div className="pt-4 flex flex-col gap-2">
                  <Link to="/login" onClick={() => setMobileOpen(false)} className="btn-secondary text-sm text-center">
                    Log in
                  </Link>
                  <Link to="/contact" onClick={() => setMobileOpen(false)} className="btn-primary text-sm text-center">
                    Contact Us
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  )
}
