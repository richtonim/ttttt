import { useState, type FormEvent } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { SEO } from '../components/SEO'
import { WhitelistGate, WhitelistNotice } from '../components/WhitelistGate'
import { useAuth } from '../context/AuthContext'

export function Login() {
  const { login, user } = useAuth()
  const navigate = useNavigate()
  const [email, setEmail] = useState('partner@insurer.com')
  const [password, setPassword] = useState('')
  const [message, setMessage] = useState<string | null>(null)
  const [ok, setOk] = useState(false)

  const onSubmit = (e: FormEvent) => {
    e.preventDefault()
    const result = login(email, password)
    setOk(result.ok)
    setMessage(result.message)
    if (result.ok) navigate('/purchase')
  }

  return (
    <>
      <SEO
        title="Sign in"
        description="Whitelist-gated sign in for ClaimEase.AI early-access partners."
        path="/login"
      />
      <WhitelistGate title="Partner sign in">
        {user ? (
          <div className="alert alert-ok">
            Signed in as <strong>{user.email}</strong>.{' '}
            <Link to="/purchase">Continue to purchase</Link>
          </div>
        ) : (
          <form className="form-stack" onSubmit={onSubmit}>
            <WhitelistNotice />
            <div className="field">
              <label htmlFor="login-email">Work email</label>
              <input
                id="login-email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                autoComplete="username"
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
            {message ? (
              <div className={`alert ${ok ? 'alert-ok' : 'alert-warn'}`}>{message}</div>
            ) : null}
            <button type="submit" className="btn btn-primary">
              Sign in
            </button>
            <p style={{ margin: 0, color: 'var(--text-dim)', fontSize: '0.88rem' }}>
              No account yet? <Link to="/register">Pre-register with a whitelist email</Link>
            </p>
          </form>
        )}
      </WhitelistGate>
    </>
  )
}
