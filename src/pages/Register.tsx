import { useState, type FormEvent } from 'react'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import WhitelistGate from '../components/WhitelistGate'
import { isWhitelisted } from '../lib/constants'

export default function Register() {
  const [form, setForm] = useState({ name: '', email: '', company: '', password: '', code: '' })
  const [error, setError] = useState('')
  const [success, setSuccess] = useState(false)

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    setError('')

    if (!isWhitelisted(form.email, form.code)) {
      setError('Your email or invitation code is not on the whitelist. Please request access via our contact page.')
      return
    }

    setSuccess(true)
  }

  return (
    <>
      <SEO
        title="Register"
        description="Create your Mustly AI account. Whitelist access required for registration."
        path="/register"
        noindex
      />

      <section className="section-padding bg-white min-h-[70vh] flex items-center">
        <div className="max-w-md mx-auto w-full">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-navy">Create Account</h1>
            <p className="mt-2 text-navy/60 text-sm">Join the Mustly AI early access program</p>
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
              <h3 className="mt-4 font-semibold text-navy">Account Created</h3>
              <p className="text-sm text-navy/60 mt-1">Welcome to Mustly AI! Check your email to verify your account.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="card space-y-5">
              {error && (
                <div className="bg-red-50 border border-red-200 text-red-700 text-sm rounded-lg px-4 py-3">
                  {error}
                </div>
              )}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-navy mb-1.5">Full Name</label>
                <input
                  id="name"
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-lg border border-navy/10 bg-surface text-navy text-sm focus:outline-none focus:ring-2 focus:ring-mint/30"
                  placeholder="Jane Doe"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-navy mb-1.5">Work Email</label>
                <input
                  id="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-lg border border-navy/10 bg-surface text-navy text-sm focus:outline-none focus:ring-2 focus:ring-mint/30"
                  placeholder="jane@company.com"
                />
              </div>
              <div>
                <label htmlFor="company" className="block text-sm font-medium text-navy mb-1.5">Company</label>
                <input
                  id="company"
                  type="text"
                  required
                  value={form.company}
                  onChange={(e) => setForm({ ...form, company: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-lg border border-navy/10 bg-surface text-navy text-sm focus:outline-none focus:ring-2 focus:ring-mint/30"
                  placeholder="Acme Corp"
                />
              </div>
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-navy mb-1.5">Password</label>
                <input
                  id="password"
                  type="password"
                  required
                  minLength={8}
                  value={form.password}
                  onChange={(e) => setForm({ ...form, password: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-lg border border-navy/10 bg-surface text-navy text-sm focus:outline-none focus:ring-2 focus:ring-mint/30"
                  placeholder="Min. 8 characters"
                />
              </div>
              <div>
                <label htmlFor="code" className="block text-sm font-medium text-navy mb-1.5">
                  Invitation Code <span className="text-red-500">*</span>
                </label>
                <input
                  id="code"
                  type="text"
                  required
                  value={form.code}
                  onChange={(e) => setForm({ ...form, code: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-lg border border-navy/10 bg-surface text-navy text-sm focus:outline-none focus:ring-2 focus:ring-mint/30"
                  placeholder="MUSTLY2026"
                />
              </div>
              <button type="submit" className="btn-primary w-full">Create Account</button>
              <p className="text-center text-sm text-navy/50">
                Already have an account?{' '}
                <Link to="/login" className="text-mint font-medium hover:text-mint/80">Log In</Link>
              </p>
            </form>
          )}
        </div>
      </section>
    </>
  )
}
