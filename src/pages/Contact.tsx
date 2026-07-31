import { useState, type FormEvent } from 'react'
import { SEO } from '../components/SEO'

export function Contact() {
  const [sent, setSent] = useState(false)

  function onSubmit(e: FormEvent) {
    e.preventDefault()
    setSent(true)
  }

  return (
    <div className="page">
      <SEO
        title="Contact"
        description="Contact INTERIORPUP.AI for partnerships, enterprise, and whitelist inquiries."
        path="/contact"
      />
      <div className="container contact-grid">
        <div>
          <p className="badge">Contact</p>
          <h1 style={{ fontSize: 'clamp(2.2rem, 4vw, 3rem)', margin: '0.7rem 0 1rem' }}>
            Talk with the team
          </h1>
          <p style={{ color: 'var(--sand-muted)', maxWidth: '40ch' }}>
            Partnerships, enterprise deployments, and press. For product access, use the
            whitelist form.
          </p>
          <p style={{ marginTop: '1.5rem', color: 'var(--sand-muted)' }}>
            <strong style={{ color: 'var(--sand)' }}>Email</strong>
            <br />
            hello@interiorpup.com
          </p>
          <p style={{ marginTop: '1rem', color: 'var(--sand-muted)' }}>
            <strong style={{ color: 'var(--sand)' }}>Domain</strong>
            <br />
            interiorpup.com
          </p>
        </div>
        <form className="form-stack" onSubmit={onSubmit}>
          <div className="field">
            <label htmlFor="c-name">Name</label>
            <input id="c-name" required />
          </div>
          <div className="field">
            <label htmlFor="c-email">Email</label>
            <input id="c-email" type="email" required />
          </div>
          <div className="field">
            <label htmlFor="c-msg">Message</label>
            <textarea id="c-msg" required />
          </div>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
          {sent && (
            <p className="form-success">
              Message captured in this frontend demo. Connect your mail API for production.
            </p>
          )}
        </form>
      </div>
    </div>
  )
}
