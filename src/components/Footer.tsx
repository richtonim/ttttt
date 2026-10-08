import { useState, FormEvent } from 'react'
import { Link } from 'react-router-dom'
import { LogoIcon, GitHubIcon, XIcon, LinkedInIcon } from './Icons'

const footerLinks = {
  Product: [
    { label: 'Platform', href: '/platform' },
    { label: 'Substratum Core', href: '/platform#core' },
    { label: 'Agent Runtime', href: '/platform#agent-runtime' },
    { label: 'Model Router', href: '/platform#model-router' },
    { label: 'Pricing', href: '/pricing' },
  ],
  Solutions: [
    { label: 'AI SaaS', href: '/solutions#ai-saas' },
    { label: 'Enterprise Automation', href: '/solutions#enterprise' },
    { label: 'Intelligent Support', href: '/solutions#support' },
    { label: 'Knowledge Management', href: '/solutions#knowledge' },
  ],
  Developers: [
    { label: 'Documentation', href: '/documentation' },
    { label: 'API Reference', href: '/developers#api' },
    { label: 'SDKs', href: '/developers#sdks' },
    { label: 'GitHub', href: 'https://github.com/substratum', external: true },
  ],
  Company: [
    { label: 'About', href: '/about' },
    { label: 'Blog', href: '/blog' },
    { label: 'Contact', href: '/contact' },
    { label: 'Careers', href: '/about#careers' },
  ],
  Legal: [
    { label: 'Privacy Policy', href: '/about#privacy' },
    { label: 'Terms of Service', href: '/about#terms' },
    { label: 'Security', href: '/about#security' },
  ],
}

export default function Footer() {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const handleSubscribe = (e: FormEvent) => {
    e.preventDefault()
    if (email) {
      setSubscribed(true)
      setEmail('')
    }
  }

  return (
    <footer className="border-t border-white/[0.06] bg-surface" role="contentinfo">
      <div className="container-max mx-auto section-padding pb-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-12">
          <div className="col-span-2 md:col-span-3 lg:col-span-1">
            <Link to="/" className="flex items-center gap-2.5 mb-4" aria-label="Substratum home">
              <LogoIcon className="w-7 h-7" />
              <span className="text-lg font-semibold">Substratum</span>
            </Link>
            <p className="text-sm text-muted mb-4 max-w-xs">
              The intelligence beneath everything. AI infrastructure for the next generation.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://github.com/substratum"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <GitHubIcon />
              </a>
              <a
                href="https://x.com/substratum"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted hover:text-white transition-colors"
                aria-label="X (Twitter)"
              >
                <XIcon />
              </a>
              <a
                href="https://linkedin.com/company/substratum"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <LinkedInIcon />
              </a>
            </div>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-sm font-medium text-white mb-3">{category}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.label}>
                    {'external' in link && link.external ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-muted hover:text-white transition-colors"
                      >
                        {link.label}
                      </a>
                    ) : (
                      <Link
                        to={link.href}
                        className="text-sm text-muted hover:text-white transition-colors"
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-white/[0.06] pt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
            <label htmlFor="newsletter-email" className="sr-only">
              Email address for newsletter
            </label>
            <input
              id="newsletter-email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="px-4 py-2.5 bg-white/[0.05] border border-white/[0.1] rounded-xl text-sm text-white placeholder:text-muted focus:outline-none focus:border-accent/50 w-full sm:w-64"
            />
            <button type="submit" className="btn-primary text-sm py-2.5 whitespace-nowrap">
              {subscribed ? 'Subscribed!' : 'Subscribe'}
            </button>
          </form>
          <p className="text-sm text-muted">
            &copy; {new Date().getFullYear()} Substratum, Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
