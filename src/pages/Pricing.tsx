import { useState } from 'react'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import WhitelistGate from '../components/WhitelistGate'
import { isWhitelisted } from '../lib/constants'

const plans = [
  {
    name: 'Starter',
    price: '$499',
    period: '/month',
    desc: 'For growing teams automating their first critical workflows.',
    features: [
      'Up to 10 active workflows',
      '5 AI agents concurrent',
      '50 integrations',
      'Email support',
      '99.5% uptime SLA',
    ],
    cta: 'Get Started',
    highlighted: false,
  },
  {
    name: 'Professional',
    price: '$1,499',
    period: '/month',
    desc: 'For high-growth teams with complex multi-agent pipelines.',
    features: [
      'Unlimited workflows',
      '50 AI agents concurrent',
      '200 integrations',
      'Priority support + Slack',
      '99.9% uptime SLA',
      'Custom agent SDK access',
      'Audit logs & compliance',
    ],
    cta: 'Get Started',
    highlighted: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: '',
    desc: 'For organizations requiring dedicated infrastructure and SLAs.',
    features: [
      'Unlimited everything',
      'Dedicated agent runtime',
      '500+ integrations',
      '24/7 dedicated support',
      '99.99% uptime SLA',
      'On-premise deployment option',
      'Custom compliance (SOC 2, HIPAA)',
      'Dedicated solutions engineer',
    ],
    cta: 'Contact Sales',
    highlighted: false,
  },
]

export default function Pricing() {
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null)
  const [email, setEmail] = useState('')
  const [code, setCode] = useState('')
  const [error, setError] = useState('')
  const [success, setSuccess] = useState(false)

  function handlePurchase(planName: string) {
    setError('')
    setSelectedPlan(planName)

    if (planName === 'Enterprise') {
      return
    }

    if (!email || !isWhitelisted(email, code)) {
      setError('Whitelist access required. Please enter a whitelisted email or valid invitation code.')
      return
    }

    setSuccess(true)
  }

  return (
    <>
      <SEO
        title="Pricing"
        description="Mustly AI pricing plans — Starter, Professional, and Enterprise. Whitelist access required to purchase."
        path="/pricing"
        keywords="Mustly AI pricing, enterprise AI automation pricing, workflow engine plans"
      />

      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-sm font-semibold tracking-wider text-mint mb-3">PRICING</p>
          <h1 className="text-4xl md:text-5xl font-bold text-navy leading-tight">
            Invest in Essential Automation
          </h1>
          <p className="mt-6 text-lg text-navy/60 max-w-2xl mx-auto">
            Transparent pricing for teams of every size. All plans include core platform features with whitelist-gated access.
          </p>
        </div>
      </section>

      <section className="section-padding !pt-0">
        <div className="max-w-3xl mx-auto mb-10">
          <WhitelistGate
            title="Whitelist Required to Purchase"
            description="Mustly AI is currently in early access. Enter your whitelisted email and invitation code below to proceed with purchase."
          />

          {error && (
            <div className="bg-red-50 border border-red-200 text-red-700 text-sm rounded-lg px-4 py-3 mb-6">
              {error}
            </div>
          )}

          {success ? (
            <div className="card text-center py-8 mb-10">
              <div className="w-12 h-12 rounded-full bg-mint/10 flex items-center justify-center mx-auto">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#10B981" strokeWidth="2">
                  <path d="M9 12l2 2 4-4" strokeLinecap="round" />
                  <circle cx="12" cy="12" r="10" />
                </svg>
              </div>
              <h3 className="mt-4 font-semibold text-navy">Purchase Initiated</h3>
              <p className="text-sm text-navy/60 mt-1">
                Your {selectedPlan} plan request has been submitted. Our team will contact you shortly.
              </p>
            </div>
          ) : (
            <div className="card grid sm:grid-cols-2 gap-4 mb-10">
              <div>
                <label htmlFor="purchase-email" className="block text-sm font-medium text-navy mb-1.5">Whitelisted Email</label>
                <input
                  id="purchase-email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-lg border border-navy/10 bg-surface text-navy text-sm focus:outline-none focus:ring-2 focus:ring-mint/30"
                  placeholder="you@company.com"
                />
              </div>
              <div>
                <label htmlFor="purchase-code" className="block text-sm font-medium text-navy mb-1.5">Invitation Code</label>
                <input
                  id="purchase-code"
                  type="text"
                  value={code}
                  onChange={(e) => setCode(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-lg border border-navy/10 bg-surface text-navy text-sm focus:outline-none focus:ring-2 focus:ring-mint/30"
                  placeholder="MUSTLY2026"
                />
              </div>
            </div>
          )}
        </div>

        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-6">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`card relative flex flex-col ${
                plan.highlighted ? 'ring-2 ring-mint shadow-lg scale-[1.02]' : ''
              }`}
            >
              {plan.highlighted && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full bg-mint text-white text-xs font-semibold">
                  MOST POPULAR
                </span>
              )}
              <h3 className="text-xl font-bold text-navy">{plan.name}</h3>
              <div className="mt-4 flex items-baseline gap-1">
                <span className="text-4xl font-bold text-navy">{plan.price}</span>
                {plan.period && <span className="text-navy/40 text-sm">{plan.period}</span>}
              </div>
              <p className="mt-3 text-sm text-navy/60">{plan.desc}</p>
              <ul className="mt-6 space-y-3 flex-1">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-navy/70">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="text-mint shrink-0 mt-0.5">
                      <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>
              {plan.name === 'Enterprise' ? (
                <Link to="/contact" className="btn-secondary w-full mt-8 text-center">
                  {plan.cta}
                </Link>
              ) : (
                <button
                  onClick={() => handlePurchase(plan.name)}
                  className={`w-full mt-8 ${plan.highlighted ? 'btn-primary' : 'btn-secondary'}`}
                >
                  {plan.cta}
                </button>
              )}
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
