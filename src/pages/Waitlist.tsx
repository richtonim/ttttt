import { useState, type FormEvent } from 'react'
import { SEO } from '../components/SEO'
import { useWhitelist } from '../context/WhitelistContext'

export function Waitlist() {
  const { requestAccess, isWhitelisted } = useWhitelist()
  const [email, setEmail] = useState('')
  const [company, setCompany] = useState('')
  const [role, setRole] = useState('Architect')
  const [message, setMessage] = useState('')

  function onSubmit(e: FormEvent) {
    e.preventDefault()
    if (isWhitelisted(email)) {
      setMessage(
        'This email is already on the whitelist. You can register or sign in now.',
      )
      return
    }
    requestAccess(email, company, role)
    setMessage(
      'Request received. Our partner team reviews whitelist applications for register, login, and purchase access.',
    )
    setEmail('')
    setCompany('')
  }

  return (
    <div className="auth-shell" style={{ maxWidth: 560 }}>
      <SEO
        title="Request Access"
        description="Join the INTERIORPUP.AI whitelist for registration, login, and purchase access."
        path="/waitlist"
      />
      <p className="badge">Early Access</p>
      <h1>Request whitelist access</h1>
      <p>
        INTERIORPUP.AI is opening gradually. Approved partners can register, sign in, and
        purchase plans.
      </p>
      <form className="form-stack" onSubmit={onSubmit}>
        <div className="field">
          <label htmlFor="wl-email">Work email</label>
          <input
            id="wl-email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="field">
          <label htmlFor="wl-company">Company / Studio</label>
          <input
            id="wl-company"
            required
            value={company}
            onChange={(e) => setCompany(e.target.value)}
          />
        </div>
        <div className="field">
          <label htmlFor="wl-role">Role</label>
          <select id="wl-role" value={role} onChange={(e) => setRole(e.target.value)}>
            <option>Architect</option>
            <option>Interior Designer</option>
            <option>PropTech</option>
            <option>Developer</option>
            <option>Other</option>
          </select>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit Request
        </button>
        {message && <p className="form-success">{message}</p>}
      </form>
    </div>
  )
}
