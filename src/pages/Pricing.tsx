import { useState, type FormEvent } from 'react'
import { Link } from 'react-router-dom'
import { SEO } from '../components/SEO'
import { useWhitelist } from '../context/WhitelistContext'

const plans = [
  {
    id: 'studio',
    name: 'Studio',
    price: '$149',
    period: '/mo',
    blurb: 'For independent designers exploring spatial AI.',
    features: [
      '5,000 generation credits',
      'Prompt + floor plan intake',
      'Standard material library',
      'Email support',
    ],
  },
  {
    id: 'atelier',
    name: 'Atelier',
    price: '$499',
    period: '/mo',
    blurb: 'For studios shipping client work weekly.',
    features: [
      '25,000 generation credits',
      'BIM-grade material packs',
      'Team seats (5)',
      'Priority generation queue',
      'Lighting scenario presets',
    ],
    featured: true,
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    price: 'Custom',
    period: '',
    blurb: 'For PropTech platforms and global practices.',
    features: [
      'API access & SLAs',
      'Private material libraries',
      'SSO & audit logs',
      'Dedicated success engineer',
      'On-prem / VPC options',
    ],
  },
]

export function Pricing() {
  const { isWhitelisted, sessionEmail } = useWhitelist()
  const [email, setEmail] = useState(sessionEmail ?? '')
  const [selected, setSelected] = useState('atelier')
  const [message, setMessage] = useState<{ type: 'ok' | 'err'; text: string } | null>(
    null,
  )

  function handlePurchase(e: FormEvent) {
    e.preventDefault()
    if (!isWhitelisted(email)) {
      setMessage({
        type: 'err',
        text: 'Purchase is whitelist-only. Request access before buying a plan.',
      })
      return
    }
    const plan = plans.find((p) => p.id === selected)
    setMessage({
      type: 'ok',
      text: `Whitelist verified. ${plan?.name} checkout is unlocked for ${email.trim().toLowerCase()}. (Frontend demo — connect billing API next.)`,
    })
  }

  return (
    <div className="page">
      <SEO
        title="Pricing"
        description="INTERIORPUP.AI pricing for Studio, Atelier, and Enterprise. Purchase requires whitelist approval."
        path="/pricing"
      />
      <div className="container">
        <div className="section-head">
          <p className="badge">Pricing</p>
          <h2 style={{ marginTop: '0.75rem' }}>Plans for spatial teams</h2>
          <p>
            Early access is whitelist-gated. Approved emails can register, sign in, and
            purchase.
          </p>
        </div>

        <div className="pricing-grid">
          {plans.map((plan) => (
            <article
              key={plan.id}
              className={`price-plan ${plan.featured ? 'featured' : ''}`}
            >
              <div>
                <h3>{plan.name}</h3>
                <p className="form-note" style={{ marginTop: '0.4rem' }}>
                  {plan.blurb}
                </p>
              </div>
              <div className="price">
                {plan.price}
                <span>{plan.period}</span>
              </div>
              <ul>
                {plan.features.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
              <button
                type="button"
                className={`btn ${plan.featured ? 'btn-primary' : 'btn-ghost'}`}
                onClick={() => {
                  setSelected(plan.id)
                  document.getElementById('purchase')?.scrollIntoView({ behavior: 'smooth' })
                }}
              >
                {plan.id === 'enterprise' ? 'Talk to Sales' : 'Select Plan'}
              </button>
            </article>
          ))}
        </div>

        <form
          id="purchase"
          className="form-stack"
          style={{ marginTop: '3rem', maxWidth: 520 }}
          onSubmit={handlePurchase}
        >
          <h2 style={{ fontSize: '1.6rem' }}>Whitelist purchase unlock</h2>
          <p className="form-note">
            Selected plan: <strong style={{ color: 'var(--sand)' }}>{selected}</strong>.
            Enter a whitelisted email to proceed.
          </p>
          <div className="field">
            <label htmlFor="purchase-email">Work email</label>
            <input
              id="purchase-email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@studio.com"
              autoComplete="email"
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Verify & Unlock Checkout
          </button>
          {message && (
            <p className={message.type === 'ok' ? 'form-success' : 'form-error'}>
              {message.text}{' '}
              {message.type === 'err' && <Link to="/waitlist">Join waitlist →</Link>}
            </p>
          )}
          <div className="whitelist-banner">
            Demo whitelist emails: partner@interiorpup.com · architect@demo.com ·
            design@proptech.io
          </div>
        </form>
      </div>
    </div>
  )
}
