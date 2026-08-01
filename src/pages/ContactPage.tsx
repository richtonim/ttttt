import { useState, FormEvent } from 'react'
import SEO from '../components/SEO'
import AnimateOnScroll from '../components/AnimateOnScroll'

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', company: '', message: '' })

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <>
      <SEO
        title="Contact"
        description="Get in touch with the Substratum team. Request a demo, whitelist access, or enterprise consultation."
        path="/contact"
      />

      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0 grid-bg" aria-hidden="true" />
        <div className="container-max mx-auto relative">
          <AnimateOnScroll className="max-w-3xl">
            <p className="text-sm font-medium text-accent mb-3 tracking-wide uppercase">Contact</p>
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6">
              Get in Touch
            </h1>
            <p className="text-lg text-muted">
              Whether you need a demo, whitelist access, or enterprise consultation — we&apos;re here to help.
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      <section className="section-padding bg-surface">
        <div className="container-max mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <AnimateOnScroll>
              {submitted ? (
                <div className="glass-card p-8 text-center">
                  <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-4">
                    <svg className="w-6 h-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h2 className="text-xl font-semibold mb-2">Message Sent</h2>
                  <p className="text-sm text-muted">We&apos;ll get back to you within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-1.5">Name</label>
                    <input
                      id="name"
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full px-4 py-2.5 bg-white/[0.05] border border-white/[0.1] rounded-xl text-sm focus:outline-none focus:border-accent/50"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-1.5">Email</label>
                    <input
                      id="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full px-4 py-2.5 bg-white/[0.05] border border-white/[0.1] rounded-xl text-sm focus:outline-none focus:border-accent/50"
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium mb-1.5">Company</label>
                    <input
                      id="company"
                      type="text"
                      value={form.company}
                      onChange={(e) => setForm({ ...form, company: e.target.value })}
                      className="w-full px-4 py-2.5 bg-white/[0.05] border border-white/[0.1] rounded-xl text-sm focus:outline-none focus:border-accent/50"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-1.5">Message</label>
                    <textarea
                      id="message"
                      required
                      rows={5}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="w-full px-4 py-2.5 bg-white/[0.05] border border-white/[0.1] rounded-xl text-sm focus:outline-none focus:border-accent/50 resize-none"
                    />
                  </div>
                  <button type="submit" className="btn-primary w-full text-sm">
                    Send Message
                  </button>
                </form>
              )}
            </AnimateOnScroll>

            <AnimateOnScroll delay={0.2}>
              <div className="space-y-6">
                <div className="glass-card p-6">
                  <h3 className="font-semibold mb-2">Sales</h3>
                  <p className="text-sm text-muted mb-2">Interested in enterprise plans or custom deployments?</p>
                  <a href="mailto:sales@substratum.pro" className="text-sm text-accent hover:text-accent-light transition-colors">
                    sales@substratum.pro
                  </a>
                </div>
                <div className="glass-card p-6">
                  <h3 className="font-semibold mb-2">Support</h3>
                  <p className="text-sm text-muted mb-2">Need help with integration or troubleshooting?</p>
                  <a href="mailto:support@substratum.pro" className="text-sm text-accent hover:text-accent-light transition-colors">
                    support@substratum.pro
                  </a>
                </div>
                <div className="glass-card p-6">
                  <h3 className="font-semibold mb-2">Whitelist Access</h3>
                  <p className="text-sm text-muted mb-2">Request early access to the platform during our beta period.</p>
                  <a href="mailto:access@substratum.pro" className="text-sm text-accent hover:text-accent-light transition-colors">
                    access@substratum.pro
                  </a>
                </div>
                <div className="glass-card p-6">
                  <h3 className="font-semibold mb-2">Office</h3>
                  <p className="text-sm text-muted">
                    San Francisco, CA<br />
                    United States
                  </p>
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>
    </>
  )
}
