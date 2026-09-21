import { useState, type FormEvent } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { SEO } from '../components/SEO'
import { WhitelistGate, WhitelistNotice } from '../components/WhitelistGate'
import { useAuth } from '../context/AuthContext'

export function Register() {
  const { register } = useAuth()
  const navigate = useNavigate()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [message, setMessage] = useState<string | null>(null)
  const [ok, setOk] = useState(false)

  const onSubmit = (e: FormEvent) => {
    e.preventDefault()
    const result = register(name, email, password)
    setOk(result.ok)
    setMessage(result.message)
    if (result.ok) navigate('/sdk')
  }

  return (
    <>
      <SEO
        title="Pre-register API"
        description="Request ClaimEase API access. Registration is limited to whitelist-approved partner emails."
        path="/register"
      />
      <WhitelistGate title="Pre-register API access">
        <form className="form-stack" onSubmit={onSubmit}>
          <WhitelistNotice />
          <div className="field">
            <label htmlFor="reg-name">Full name</label>
            <input
              id="reg-name"
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Alex Mercer"
            />
          </div>
          <div className="field">
            <label htmlFor="reg-email">Whitelist email</label>
            <input
              id="reg-email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="partner@insurer.com"
              autoComplete="username"
            />
          </div>
          <div className="field">
            <label htmlFor="reg-password">Password</label>
            <input
              id="reg-password"
              type="password"
              required
              minLength={8}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="new-password"
            />
          </div>
          {message ? (
            <div className={`alert ${ok ? 'alert-ok' : 'alert-warn'}`}>{message}</div>
          ) : null}
          <button type="submit" className="btn btn-primary">
            Create whitelist account
          </button>
          <p style={{ margin: 0, color: 'var(--text-dim)', fontSize: '0.88rem' }}>
            Already approved? <Link to="/login">Sign in</Link>
          </p>
        </form>
      </WhitelistGate>
    </>
  )
}
