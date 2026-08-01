"use client";

import { useState, type FormEvent } from "react";
import { PageHero } from "@/components/ui/PageLayout";
import { Button } from "@/components/ui/Button";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1000));
    setSubmitted(true);
    setLoading(false);
  };

  return (
    <>
      <PageHero label="Contact" title="Let's build together." description="Get in touch with our team to discuss how Entropy can power your vehicle intelligence needs." />
      <section className="pb-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-2xl font-bold text-white mb-8">Get in touch</h2>
              <div className="space-y-6">
                <div>
                  <p className="text-sm text-white/40 mb-1">Sales</p>
                  <a href="mailto:partner@entropy.autos" className="text-white hover:text-accent-blue transition-colors">partner@entropy.autos</a>
                </div>
                <div>
                  <p className="text-sm text-white/40 mb-1">Support</p>
                  <a href="mailto:support@entropy.autos" className="text-white hover:text-accent-blue transition-colors">support@entropy.autos</a>
                </div>
                <div>
                  <p className="text-sm text-white/40 mb-1">Press</p>
                  <a href="mailto:press@entropy.autos" className="text-white hover:text-accent-blue transition-colors">press@entropy.autos</a>
                </div>
                <div>
                  <p className="text-sm text-white/40 mb-1">Headquarters</p>
                  <p className="text-white">San Francisco, CA</p>
                </div>
              </div>
            </div>

            <div className="p-8 rounded-2xl border border-white/10 bg-white/[0.02]">
              {submitted ? (
                <div className="text-center py-8">
                  <h3 className="text-2xl font-bold text-white mb-3">Message sent</h3>
                  <p className="text-white/50">Thank you for reaching out. Our team will get back to you within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="firstName" className="block text-sm text-white/60 mb-2">First name</label>
                      <input id="firstName" name="firstName" required className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-accent-blue/50" />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm text-white/60 mb-2">Last name</label>
                      <input id="lastName" name="lastName" required className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-accent-blue/50" />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm text-white/60 mb-2">Work email</label>
                    <input id="email" name="email" type="email" required className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-accent-blue/50" />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm text-white/60 mb-2">Company</label>
                    <input id="company" name="company" required className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-accent-blue/50" />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm text-white/60 mb-2">Message</label>
                    <textarea id="message" name="message" rows={4} required className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-accent-blue/50 resize-none" />
                  </div>
                  <Button type="submit" variant="primary" size="large" disabled={loading} className="w-full">
                    {loading ? "Sending..." : "Send message"}
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
