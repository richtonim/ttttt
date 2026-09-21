import { useState, type FormEvent } from 'react'
import SEO from '../components/SEO'

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
    type: 'demo',
  })

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <>
      <SEO
        title="Contact"
        description="Get in touch with Mustly AI. Request a demo, whitelist access, or enterprise consultation."
        path="/contact"
        keywords="contact Mustly AI, request demo, whitelist access, enterprise consultation"
      />

      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16">
          <div>
            <p className="text-sm font-semibold tracking-wider text-mint mb-3">CONTACT</p>
            <h1 className="text-4xl md:text-5xl font-bold text-navy leading-tight">
              Let's Build Something Essential
            </h1>
            <p className="mt-6 text-lg text-navy/60 leading-relaxed">
              Whether you need a product demo, whitelist access, or a custom enterprise solution — our team is ready to help.
            </p>

            <div className="mt-10 space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-mint/10 flex items-center justify-center shrink-0">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#10B981" strokeWidth="2">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <path d="M22 6l-10 7L2 6" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-navy">Email</h3>
                  <p className="text-sm text-navy/60">hello@mustly.in</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-sky/10 flex items-center justify-center shrink-0">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#3B82F6" strokeWidth="2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-navy">Headquarters</h3>
                  <p className="text-sm text-navy/60">San Francisco, CA — Remote First</p>
                </div>
              </div>
            </div>
          </div>

          <div className="card">
            {submitted ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 rounded-full bg-mint/10 flex items-center justify-center mx-auto">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#10B981" strokeWidth="2">
                    <path d="M9 12l2 2 4-4" strokeLinecap="round" />
                    <circle cx="12" cy="12" r="10" />
                  </svg>
                </div>
                <h3 className="mt-6 text-xl font-bold text-navy">Message Sent!</h3>
                <p className="mt-2 text-navy/60 text-sm">We'll get back to you within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="type" className="block text-sm font-medium text-navy mb-1.5">Inquiry Type</label>
                  <select
                    id="type"
                    value={form.type}
                    onChange={(e) => setForm({ ...form, type: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-lg border border-navy/10 bg-surface text-navy text-sm focus:outline-none focus:ring-2 focus:ring-mint/30"
                  >
                    <option value="demo">Request Demo</option>
                    <option value="whitelist">Request Whitelist Access</option>
                    <option value="enterprise">Enterprise Consultation</option>
                    <option value="support">Technical Support</option>
                  </select>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-navy mb-1.5">Full Name</label>
                    <input
                      id="name"
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-lg border border-navy/10 bg-surface text-navy text-sm focus:outline-none focus:ring-2 focus:ring-mint/30"
                      placeholder="Jane Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-navy mb-1.5">Work Email</label>
                    <input
                      id="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-lg border border-navy/10 bg-surface text-navy text-sm focus:outline-none focus:ring-2 focus:ring-mint/30"
                      placeholder="jane@company.com"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-navy mb-1.5">Company</label>
                  <input
                    id="company"
                    type="text"
                    required
                    value={form.company}
                    onChange={(e) => setForm({ ...form, company: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-lg border border-navy/10 bg-surface text-navy text-sm focus:outline-none focus:ring-2 focus:ring-mint/30"
                    placeholder="Acme Corp"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-navy mb-1.5">Message</label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-lg border border-navy/10 bg-surface text-navy text-sm focus:outline-none focus:ring-2 focus:ring-mint/30 resize-none"
                    placeholder="Tell us about your automation needs..."
                  />
                </div>
                <button type="submit" className="btn-primary w-full">Send Message</button>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  )
}
