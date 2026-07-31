import { Link } from 'react-router-dom'
import Logo from './Logo'
import { NAV_LINKS } from '../lib/constants'

export default function Footer() {
  return (
    <footer className="bg-navy text-white/70">
      <div className="max-w-7xl mx-auto section-padding">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="md:col-span-1">
            <Logo showText className="[&_span]:text-white" />
            <p className="mt-4 text-sm leading-relaxed">
              Essential AI Workflows. Automate What Must Be Done.
            </p>
            <p className="mt-2 text-xs text-white/40">&copy; 2026 Mustly AI. All rights reserved.</p>
          </div>

          <div>
            <h4 className="text-white font-semibold text-sm tracking-wider mb-4">PRODUCT</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/platform" className="hover:text-mint transition-colors">Platform</Link></li>
              <li><Link to="/solutions" className="hover:text-mint transition-colors">Solutions</Link></li>
              <li><Link to="/infrastructure" className="hover:text-mint transition-colors">Infrastructure</Link></li>
              <li><Link to="/pricing" className="hover:text-mint transition-colors">Pricing</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold text-sm tracking-wider mb-4">COMPANY</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/contact" className="hover:text-mint transition-colors">Contact</Link></li>
              <li><Link to="/login" className="hover:text-mint transition-colors">Log In</Link></li>
              <li><Link to="/register" className="hover:text-mint transition-colors">Register</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold text-sm tracking-wider mb-4">NAVIGATE</h4>
            <ul className="space-y-2 text-sm">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link to={link.href} className="hover:text-mint transition-colors">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}
