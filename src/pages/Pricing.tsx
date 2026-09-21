import { Link } from 'react-router-dom'
import { SEO } from '../components/SEO'

const PLANS = [
  {
    name: 'Pilot',
    price: '$2,500',
    blurb: 'Sandbox + limited production for a single LOB.',
    features: ['50k docs / month', 'Fraud Guard standard', 'Python & Node SDK', 'Email support'],
  },
  {
    name: 'Growth',
    price: '$9,800',
    blurb: 'Multi-line claims with higher STP concurrency.',
    features: [
      '500k docs / month',
      'Custom strictness policies',
      'GNN ring alerts',
      'Priority onboarding',
    ],
    featured: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    blurb: 'Dedicated graph tenancy and private connectivity.',
    features: [
      'Unlimited* fair-use volume',
      '.NET + VPC peering',
      '24/7 risk desk',
      'On-prem / private cloud options',
    ],
  },
]

export function Pricing() {
  return (
    <>
      <SEO
        title="Pricing"
        description="ClaimEase early-access pricing for Pilot, Growth, and Enterprise plans. Purchase requires whitelist approval."
        path="/pricing"
      />
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">PRICING</p>
          <h1>Transparent early-access plans</h1>
          <p>
            All purchases are whitelist-gated. Request onboarding if your domain is
            not yet approved.
          </p>
        </div>
      </section>
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container pricing-grid">
          {PLANS.map((plan) => (
            <article
              key={plan.name}
              className={`price-card ${plan.featured ? 'featured' : ''}`}
            >
              <h3>{plan.name}</h3>
              <div className="price">
                {plan.price}
                {plan.price.startsWith('$') ? <span> / month</span> : null}
              </div>
              <p style={{ margin: 0, color: 'var(--text-muted)' }}>{plan.blurb}</p>
              <ul>
                {plan.features.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
              <Link to="/purchase" className="btn btn-primary">
                Purchase (whitelist)
              </Link>
            </article>
          ))}
        </div>
      </section>
    </>
  )
}
