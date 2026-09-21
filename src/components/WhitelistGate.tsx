import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { WHITELIST_HINT, WHITELIST_EMAILS } from '../data/whitelist'

type Props = {
  title: string
  children: ReactNode
}

export function WhitelistNotice() {
  return (
    <div className="alert alert-warn" role="status">
      <strong>Whitelist required.</strong> {WHITELIST_HINT}
      <div style={{ marginTop: '0.55rem', fontFamily: 'var(--font-mono)', fontSize: '0.78rem' }}>
        Demo whitelist: {WHITELIST_EMAILS.slice(0, 3).join(' · ')}
      </div>
    </div>
  )
}

export function WhitelistGate({ title, children }: Props) {
  return (
    <section className="section" style={{ paddingTop: '2.5rem' }}>
      <div className="container">
        <div className="panel form-card" style={{ margin: '0 auto' }}>
          <h1>{title}</h1>
          <p className="lead">
            Register, sign-in, and purchase flows are gated to approved early-access
            partners only.
          </p>
          <WhitelistNotice />
          <div style={{ marginTop: '1.25rem' }}>{children}</div>
          <p style={{ marginTop: '1rem', color: 'var(--text-dim)', fontSize: '0.88rem' }}>
            Need access? <Link to="/contact">Request whitelist onboarding</Link>.
          </p>
        </div>
      </div>
    </section>
  )
}
