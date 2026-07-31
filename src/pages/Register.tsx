import { useState, type FormEvent } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { SEO } from '../components/SEO'
import { useWhitelist } from '../context/WhitelistContext'

export function Register() {
  const { register, isWhitelisted } = useWhitelist()
  const navigate = useNavigate()
  const [name, setName] = useState('')
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
        'Registration requires whitelist approval. Join the waitlist to request access.',
      )
      return
    }
    if (password.length < 8) {
      setError('Choose a password with at least 8 characters.')
      return
    }
    const result = register(email, name)
    if (!result.ok) {
      setError(result.message)
      return
    }
    setSuccess(result.message)
    window.setTimeout(() => navigate('/demo'), 700)
  }

  return (
    <div className="auth-shell">
      <SEO
        title="Register"
        description="Create an INTERIORPUP.AI account. Registration is whitelist-only."
        path="/register"
      />
      <p className="badge">Whitelist Registration</p>
      <h1>Create account</h1>
      <p>Accounts can only be created with an approved email address.</p>
      <form className="form-stack" onSubmit={onSubmit}>
        <div className="field">
          <label htmlFor="reg-name">Full name</label>
          <input
            id="reg-name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            autoComplete="name"
          />
        </div>
        <div className="field">
          <label htmlFor="reg-email">Work email</label>
          <input
            id="reg-email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoComplete="email"
          />
        </div>
        <div className="field">
          <label htmlFor="reg-password">Password</label>
          <input
            id="reg-password"
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="new-password"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Register
        </button>
        {error && (
          <p className="form-error">
            {error} <Link to="/waitlist">Join waitlist →</Link>
          </p>
        )}
        {success && <p className="form-success">{success}</p>}
      </form>
      <p className="form-note" style={{ marginTop: '1.25rem' }}>
        Already approved? <Link to="/login">Sign in</Link>
      </p>
    </div>
  )
}
