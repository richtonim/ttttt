import { useState } from 'react'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import AnimateOnScroll from '../components/AnimateOnScroll'
import WhitelistGate from '../components/WhitelistGate'

export default function RegisterPage() {
  const [gateOpen, setGateOpen] = useState(false)

  return (
    <>
      <SEO
        title="Register"
        description="Create a Substratum account. Registration is invite-only and requires whitelist approval."
        path="/register"
      />

      <section className="section-padding min-h-[70vh] flex items-center">
        <div className="container-max mx-auto max-w-md w-full">
          <AnimateOnScroll>
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold tracking-tight mb-2">Create Account</h1>
              <p className="text-muted text-sm">
                Join Substratum during our early access period.
              </p>
            </div>

            <div className="glass-card p-8">
              <div className="bg-accent/10 border border-accent/20 rounded-xl p-4 mb-6">
                <p className="text-sm text-accent-light">
                  Registration is currently invite-only. You need a whitelisted email address to create an account.
                </p>
              </div>

              <button onClick={() => setGateOpen(true)} className="btn-primary w-full text-sm mb-4">
                Register with Email
              </button>
              <p className="text-xs text-muted text-center">
                Don&apos;t have whitelist access?{' '}
                <Link to="/contact" className="text-accent hover:text-accent-light transition-colors">
                  Contact us
                </Link>{' '}
                to request approval.
              </p>
            </div>

            <p className="text-center text-sm text-muted mt-6">
              Already have an account?{' '}
              <Link to="/login" className="text-accent hover:text-accent-light transition-colors">
                Log in
              </Link>
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      <WhitelistGate
        isOpen={gateOpen}
        onClose={() => setGateOpen(false)}
        mode="register"
      />
    </>
  )
}
