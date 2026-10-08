import { useState, FormEvent } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import SEO from '../components/SEO';
import { pricingPlans } from '../data/mockData';
import { getStoredUser, isWhitelisted } from '../utils/whitelist';
import './Purchase.css';

export default function Purchase() {
  const [searchParams] = useSearchParams();
  const planId = searchParams.get('plan') || 'pro';
  const plan = pricingPlans.find((p) => p.id === planId) || pricingPlans[1];
  const user = getStoredUser();

  const [cardNumber, setCardNumber] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    setTimeout(() => {
      const email = user?.email || '';
      if (!email || !isWhitelisted(email)) {
        setError('Purchase requires a whitelisted account. Please log in or apply for whitelist access.');
        setLoading(false);
        return;
      }

      if (cardNumber.replace(/\s/g, '').length < 16) {
        setError('Please enter a valid card number.');
        setLoading(false);
        return;
      }

      setSuccess(true);
      setLoading(false);
    }, 1200);
  };

  if (success) {
    return (
      <>
        <SEO title="Purchase Complete" description="Your AIFLASH.NEWS subscription is active." path="/purchase" noindex />
        <div className="purchase-page">
          <div className="purchase-card card purchase-success">
            <div className="success-icon">✓</div>
            <h1>Subscription Active</h1>
            <p>Your {plan.name} plan is now active. Welcome to real-time AI intelligence.</p>
            <Link to="/dashboard" className="btn btn-primary">Go to Dashboard</Link>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <SEO
        title={`Purchase ${plan.name} Plan`}
        description={`Subscribe to AIFLASH.NEWS ${plan.name} plan. Whitelist required.`}
        path="/purchase"
        noindex
      />

      <div className="purchase-page">
        <div className="purchase-layout">
          <div className="purchase-summary card">
            <h2>Order Summary</h2>
            <div className="summary-plan">
              <span>{plan.name} Plan</span>
              <span className="mono">${plan.price}{plan.period}</span>
            </div>
            <ul className="summary-features">
              {plan.features.slice(0, 4).map((f) => (
                <li key={f}>{f}</li>
              ))}
            </ul>
            <div className="summary-total">
              <span>Total</span>
              <span className="mono">${plan.price}.00/mo</span>
            </div>
          </div>

          <div className="purchase-form card">
            <h2>Payment Details</h2>

            {!user && (
              <div className="alert alert-warning">
                You must be logged in with a whitelisted account. <Link to="/login">Log in</Link> or <Link to="/whitelist">apply for whitelist</Link>.
              </div>
            )}

            {user && !isWhitelisted(user.email) && (
              <div className="alert alert-error">
                Your account ({user.email}) is not whitelisted. <Link to="/whitelist">Apply now</Link>.
              </div>
            )}

            {error && <div className="alert alert-error">{error}</div>}

            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="card">Card Number</label>
                <input
                  id="card"
                  type="text"
                  value={cardNumber}
                  onChange={(e) => setCardNumber(e.target.value)}
                  placeholder="4242 4242 4242 4242"
                  maxLength={19}
                  disabled={!user}
                />
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="expiry">Expiry</label>
                  <input id="expiry" type="text" placeholder="MM/YY" disabled={!user} />
                </div>
                <div className="form-group">
                  <label htmlFor="cvc">CVC</label>
                  <input id="cvc" type="text" placeholder="123" maxLength={4} disabled={!user} />
                </div>
              </div>
              <button
                type="submit"
                className="btn btn-primary purchase-submit"
                disabled={loading || !user}
              >
                {loading ? 'Processing...' : `Subscribe — $${plan.price}/mo`}
              </button>
            </form>

            <p className="purchase-secure mono">🔒 Secured by Stripe · Whitelist verified</p>
          </div>
        </div>
      </div>
    </>
  );
}
