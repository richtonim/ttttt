import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { pricingPlans } from '../data/mockData';
import './Pricing.css';

export default function Pricing() {
  return (
    <>
      <SEO
        title="Pricing — AI Intelligence Plans"
        description="AIFLASH.NEWS pricing: Observer (free), Pro ($49/mo), and Enterprise ($299/mo). Whitelist required for paid plans."
        path="/pricing"
      />

      <div className="page-header">
        <div className="container">
          <h1>Pricing</h1>
          <p>Start free with delayed digests. Upgrade to real-time telemetry with whitelist access.</p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="pricing-grid">
            {pricingPlans.map((plan) => (
              <div key={plan.id} className={`card pricing-card ${plan.highlighted ? 'highlighted' : ''}`}>
                {plan.highlighted && <span className="pricing-popular">Most Popular</span>}
                <h3>{plan.name}</h3>
                <div className="pricing-price">
                  {plan.price === 0 ? (
                    <span className="price-amount">Free</span>
                  ) : (
                    <>
                      <span className="price-amount">${plan.price}</span>
                      <span className="price-period">{plan.period}</span>
                    </>
                  )}
                </div>
                <p className="pricing-desc">{plan.description}</p>
                <ul className="pricing-features">
                  {plan.features.map((f) => (
                    <li key={f}>✓ {f}</li>
                  ))}
                </ul>
                {plan.requiresWhitelist ? (
                  <Link to={`/purchase?plan=${plan.id}`} className={`btn ${plan.highlighted ? 'btn-primary' : 'btn-secondary'} pricing-cta`}>
                    {plan.cta}
                  </Link>
                ) : (
                  <Link to="/register" className="btn btn-secondary pricing-cta">
                    {plan.cta}
                  </Link>
                )}
                {plan.requiresWhitelist && (
                  <p className="pricing-whitelist-note">Whitelist required</p>
                )}
              </div>
            ))}
          </div>

          <div className="pricing-faq card">
            <h3>Frequently Asked Questions</h3>
            <div className="faq-grid">
              <div>
                <h4>Why is whitelist required?</h4>
                <p>AIFLASH.NEWS is in early access. We manually review applications to ensure quality and prevent abuse of our real-time API.</p>
              </div>
              <div>
                <h4>How do I get whitelisted?</h4>
                <p>Register with your work email and apply via the <Link to="/whitelist">whitelist page</Link>. Most applications are reviewed within 48 hours.</p>
              </div>
              <div>
                <h4>Can I try Pro before paying?</h4>
                <p>Yes. Approved whitelist members receive a 14-day Pro trial with full API access.</p>
              </div>
              <div>
                <h4>What payment methods do you accept?</h4>
                <p>Credit card, ACH, and wire transfer for Enterprise. All payments processed securely via Stripe.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
