import { useState } from 'react'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import AnimateOnScroll from '../components/AnimateOnScroll'
import WhitelistGate from '../components/WhitelistGate'

export default function LoginPage() {
  const [gateOpen, setGateOpen] = useState(false)

  return (
    <>
      <SEO
        title="Log In"
        description="Log in to your Substratum account. Access is limited to whitelisted accounts during early access."
        path="/login"
      />

      <section className="section-padding min-h-[70vh] flex items-center">
        <div className="container-max mx-auto max-w-md w-full">
          <AnimateOnScroll>
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold tracking-tight mb-2">Welcome Back</h1>
              <p className="text-muted text-sm">
                Log in to access your Substratum dashboard.
              </p>
            </div>

            <div className="glass-card p-8">
              <button onClick={() => setGateOpen(true)} className="btn-primary w-full text-sm mb-4">
                Log In with Email
              </button>
              <p className="text-xs text-muted text-center">
                Access is currently limited to whitelisted accounts.{' '}
                <Link to="/contact" className="text-accent hover:text-accent-light transition-colors">
                  Request access
                </Link>
              </p>
            </div>

            <p className="text-center text-sm text-muted mt-6">
              Don&apos;t have an account?{' '}
              <Link to="/register" className="text-accent hover:text-accent-light transition-colors">
                Create one
              </Link>
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      <WhitelistGate
        isOpen={gateOpen}
        onClose={() => setGateOpen(false)}
        mode="login"
      />
    </>
  )
}
