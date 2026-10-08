import { useState } from 'react'
import SEO from '../components/SEO'
import AnimateOnScroll from '../components/AnimateOnScroll'
import WhitelistGate from '../components/WhitelistGate'
import { pricingPlans } from '../data/content'

export default function PricingPage() {
  const [gateOpen, setGateOpen] = useState(false)
  const [selectedPlan, setSelectedPlan] = useState('')

  const handlePurchase = (planName: string) => {
    setSelectedPlan(planName)
    setGateOpen(true)
  }

  return (
    <>
      <SEO
        title="Pricing"
        description="Substratum pricing plans for developers, teams, and enterprises. Start free, scale as you grow."
        path="/pricing"
      />

      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0 grid-bg" aria-hidden="true" />
        <div className="container-max mx-auto relative text-center">
          <AnimateOnScroll>
            <p className="text-sm font-medium text-accent mb-3 tracking-wide uppercase">Pricing</p>
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6">
              Simple, Transparent Pricing
            </h1>
            <p className="text-lg text-muted max-w-2xl mx-auto">
              Start building for free. Scale with plans designed for teams and enterprises.
              All plans require whitelist approval during early access.
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      <section className="section-padding bg-surface">
        <div className="container-max mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {pricingPlans.map((plan, i) => (
              <AnimateOnScroll key={plan.name} delay={i * 0.15}>
                <div className={`glass-card p-8 h-full flex flex-col ${
                  plan.highlighted ? 'border-accent/30 ring-1 ring-accent/20' : ''
                }`}>
                  {plan.highlighted && (
                    <span className="text-xs font-medium text-accent bg-accent/10 px-3 py-1 rounded-full self-start mb-4">
                      Most Popular
                    </span>
                  )}
                  <h2 className="text-xl font-bold mb-1">{plan.name}</h2>
                  <p className="text-sm text-muted mb-6">{plan.description}</p>
                  <div className="mb-6">
                    {plan.price !== null ? (
                      <div className="flex items-baseline gap-1">
                        <span className="text-4xl font-bold">
                          {plan.price === 0 ? 'Free' : `$${plan.price}`}
                        </span>
                        {plan.price > 0 && (
                          <span className="text-muted text-sm">/{plan.period}</span>
                        )}
                      </div>
                    ) : (
                      <span className="text-4xl font-bold">Custom</span>
                    )}
                  </div>
                  <ul className="space-y-3 mb-8 flex-1">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-sm text-muted">
                        <svg className="w-4 h-4 text-accent flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M5 13l4 4L19 7" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button
                    onClick={() => handlePurchase(plan.name)}
                    className={plan.highlighted ? 'btn-primary w-full text-sm' : 'btn-secondary w-full text-sm'}
                  >
                    {plan.cta}
                  </button>
                </div>
              </AnimateOnScroll>
            ))}
          </div>

          <AnimateOnScroll className="mt-12 text-center" delay={0.5}>
            <p className="text-sm text-muted">
              All plans are currently in early access. Registration and purchasing require whitelist approval.{' '}
              <a href="/contact" className="text-accent hover:text-accent-light transition-colors">
                Contact us
              </a>{' '}
              to request access.
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      <WhitelistGate
        isOpen={gateOpen}
        onClose={() => setGateOpen(false)}
        mode="purchase"
        onSuccess={() => {
          alert(`Purchase flow initiated for ${selectedPlan} plan.`)
        }}
      />
    </>
  )
}
