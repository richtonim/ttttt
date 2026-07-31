import { useState, type FormEvent } from 'react'
import { Link } from 'react-router-dom'
import { SEO } from '../components/SEO'
import { WhitelistNotice } from '../components/WhitelistGate'
import { useAuth } from '../context/AuthContext'
import { isWhitelisted } from '../data/whitelist'

const PLANS = [
  { id: 'pilot', name: 'Pilot', price: '$2,500 / mo' },
  { id: 'growth', name: 'Growth', price: '$9,800 / mo' },
  { id: 'enterprise', name: 'Enterprise', price: 'Custom' },
]

export function Purchase() {
  const { user, canPurchase } = useAuth()
  const [plan, setPlan] = useState('growth')
  const [message, setMessage] = useState<string | null>(null)

  const onSubmit = (e: FormEvent) => {
    e.preventDefault()
    if (!user) {
      setMessage('Sign in with a whitelist account before purchasing.')
      return
    }
    if (!isWhitelisted(user.email) || !canPurchase) {
      setMessage('Purchase blocked: email is not on the early-access whitelist.')
      return
    }
    setMessage(
      `Purchase request recorded for ${PLANS.find((p) => p.id === plan)?.name}. A ClaimEase specialist will confirm provisioning for ${user.email}.`,
    )
  }

  return (
    <>
      <SEO
        title="Purchase"
        description="Purchase ClaimEase early-access plans. Checkout is available only to whitelist-approved accounts."
        path="/purchase"
      />
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">PURCHASE</p>
          <h1>Whitelist-gated checkout</h1>
          <p>
            Only approved partner accounts can submit a purchase request. Non-whitelist
            emails are rejected before any order is created.
          </p>
        </div>
      </section>
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container" style={{ maxWidth: 640 }}>
          <div className="panel form-card" style={{ maxWidth: 'none' }}>
            <WhitelistNotice />
            {!user ? (
              <div className="alert alert-warn" style={{ marginTop: '1rem' }}>
                You must <Link to="/login">sign in</Link> or{' '}
                <Link to="/register">pre-register</Link> with a whitelist email.
              </div>
            ) : (
              <div className="alert alert-ok" style={{ marginTop: '1rem' }}>
                Authenticated as <strong>{user.email}</strong>
                {canPurchase ? ' · whitelist verified' : ' · not whitelisted'}
              </div>
            )}
            <form className="form-stack" style={{ marginTop: '1.25rem' }} onSubmit={onSubmit}>
              <div className="field">
                <label>Select plan</label>
                <div className="chips">
                  {PLANS.map((item) => (
                    <button
                      key={item.id}
                      type="button"
                      className={`chip ${plan === item.id ? 'active' : ''}`}
                      onClick={() => setPlan(item.id)}
                    >
                      {item.name} · {item.price}
                    </button>
                  ))}
                </div>
              </div>
              {message ? (
                <div
                  className={`alert ${message.startsWith('Purchase request') ? 'alert-ok' : 'alert-warn'}`}
                >
                  {message}
                </div>
              ) : null}
              <button type="submit" className="btn btn-primary" disabled={!canPurchase}>
                Submit purchase request
              </button>
              <Link to="/pricing" className="btn btn-ghost">
                Review pricing details
              </Link>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}
