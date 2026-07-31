import { useState, type FormEvent } from 'react'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import WhitelistGate from '../components/WhitelistGate'
import { isWhitelisted } from '../lib/constants'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [code, setCode] = useState('')
  const [error, setError] = useState('')
  const [success, setSuccess] = useState(false)

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    setError('')

    if (!isWhitelisted(email, code)) {
      setError('Your email or invitation code is not on the whitelist. Please request access first.')
      return
    }

    setSuccess(true)
  }

  return (
    <>
      <SEO
        title="Log In"
        description="Log in to your Mustly AI account. Whitelist access required."
        path="/login"
        noindex
      />

      <section className="section-padding bg-white min-h-[70vh] flex items-center">
        <div className="max-w-md mx-auto w-full">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-navy">Welcome Back</h1>
            <p className="mt-2 text-navy/60 text-sm">Log in to your Mustly AI workspace</p>
          </div>

          <WhitelistGate />

          {success ? (
            <div className="card text-center py-8">
              <div className="w-12 h-12 rounded-full bg-mint/10 flex items-center justify-center mx-auto">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#10B981" strokeWidth="2">
                  <path d="M9 12l2 2 4-4" strokeLinecap="round" />
                  <circle cx="12" cy="12" r="10" />
                </svg>
              </div>
              <h3 className="mt-4 font-semibold text-navy">Login Successful</h3>
              <p className="text-sm text-navy/60 mt-1">Redirecting to your dashboard...</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="card space-y-5">
              {error && (
                <div className="bg-red-50 border border-red-200 text-red-700 text-sm rounded-lg px-4 py-3">
                  {error}
                </div>
              )}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-navy mb-1.5">Email</label>
                <input
                  id="email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-lg border border-navy/10 bg-surface text-navy text-sm focus:outline-none focus:ring-2 focus:ring-mint/30"
                  placeholder="you@company.com"
                />
              </div>
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-navy mb-1.5">Password</label>
                <input
                  id="password"
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-lg border border-navy/10 bg-surface text-navy text-sm focus:outline-none focus:ring-2 focus:ring-mint/30"
                  placeholder="••••••••"
                />
              </div>
              <div>
                <label htmlFor="code" className="block text-sm font-medium text-navy mb-1.5">
                  Invitation Code <span className="text-navy/40 font-normal">(if applicable)</span>
                </label>
                <input
                  id="code"
                  type="text"
                  value={code}
                  onChange={(e) => setCode(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-lg border border-navy/10 bg-surface text-navy text-sm focus:outline-none focus:ring-2 focus:ring-mint/30"
                  placeholder="MUSTLY2026"
                />
              </div>
              <button type="submit" className="btn-primary w-full">Log In</button>
              <p className="text-center text-sm text-navy/50">
                Don't have an account?{' '}
                <Link to="/register" className="text-mint font-medium hover:text-mint/80">Register</Link>
              </p>
            </form>
          )}
        </div>
      </section>
    </>
  )
}
