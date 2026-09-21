import { useState, type FormEvent } from 'react'
import { SEO } from '../components/SEO'

export function Contact() {
  const [sent, setSent] = useState(false)

  const onSubmit = (e: FormEvent) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <>
      <SEO
        title="Contact"
        description="Contact ClaimEase.AI for whitelist onboarding, enterprise pilots, and solutions engineering."
        path="/contact"
      />
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">CONTACT</p>
          <h1>Talk to the ClaimEase team</h1>
          <p>
            Request whitelist access, schedule a pilot, or connect your claims stack
            with our solutions engineers.
          </p>
        </div>
      </section>
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container grid-2">
          <form className="panel form-card" style={{ maxWidth: 'none' }} onSubmit={onSubmit}>
            <div className="form-stack">
              <div className="field">
                <label htmlFor="c-name">Name</label>
                <input id="c-name" type="text" required placeholder="Jordan Lee" />
              </div>
              <div className="field">
                <label htmlFor="c-email">Work email</label>
                <input id="c-email" type="email" required placeholder="you@company.com" />
              </div>
              <div className="field">
                <label htmlFor="c-company">Company</label>
                <input id="c-company" type="text" required placeholder="Northwind Insurance" />
              </div>
              <div className="field">
                <label htmlFor="c-msg">How can we help?</label>
                <textarea
                  id="c-msg"
                  required
                  placeholder="Whitelist request, pilot scope, SDK questions..."
                />
              </div>
              {sent ? (
                <div className="alert alert-ok">
                  Message captured locally for this demo frontend. Email
                  early-access@claimease.in for production onboarding.
                </div>
              ) : null}
              <button type="submit" className="btn btn-primary">
                Send message
              </button>
            </div>
          </form>
          <div className="stack">
            <article className="pillar">
              <div className="index">EMAIL</div>
              <h3>early-access@claimease.in</h3>
              <p>Whitelist approvals and API key issuance.</p>
            </article>
            <article className="pillar">
              <div className="index">DOMAIN</div>
              <h3>claimease.in</h3>
              <p>Primary product domain for ClaimEase.AI in 2026.</p>
            </article>
          </div>
        </div>
      </section>
    </>
  )
}
