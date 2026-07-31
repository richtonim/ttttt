import { useState, type FormEvent } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { SEO } from '../components/SEO'
import { useWhitelist } from '../context/WhitelistContext'

export function Login() {
  const { login, isWhitelisted } = useWhitelist()
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')

  function onSubmit(e: FormEvent) {
    e.preventDefault()
    setError('')
    setSuccess('')
    if (!isWhitelisted(email)) {
      setError(
        'Sign-in is restricted to whitelisted emails. Request access to join the partner list.',
      )
      return
    }
    if (password.length < 6) {
      setError('Enter your password (demo: any 6+ characters for whitelisted emails).')
      return
    }
    const result = login(email)
    if (!result.ok) {
      setError(result.message)
      return
    }
    setSuccess(result.message)
    window.setTimeout(() => navigate('/demo'), 600)
  }

  return (
    <div className="auth-shell">
      <SEO
        title="Sign In"
        description="Sign in to INTERIORPUP.AI. Access is whitelist-only for approved partners."
        path="/login"
      />
      <p className="badge">Whitelist Access</p>
      <h1>Sign in</h1>
      <p>Only approved emails can enter the studio.</p>
      <form className="form-stack" onSubmit={onSubmit}>
        <div className="field">
          <label htmlFor="login-email">Email</label>
          <input
            id="login-email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoComplete="email"
          />
        </div>
        <div className="field">
          <label htmlFor="login-password">Password</label>
          <input
            id="login-password"
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="current-password"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Sign In
        </button>
        {error && (
          <p className="form-error">
            {error} <Link to="/waitlist">Request access →</Link>
          </p>
        )}
        {success && <p className="form-success">{success}</p>}
      </form>
      <p className="form-note" style={{ marginTop: '1.25rem' }}>
        No account yet? <Link to="/register">Register</Link> with a whitelisted email.
      </p>
      <div className="whitelist-banner">
        Demo whitelist: partner@interiorpup.com · architect@demo.com · design@proptech.io
      </div>
    </div>
  )
}
