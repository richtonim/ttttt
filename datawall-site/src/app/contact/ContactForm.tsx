"use client";

import { useState } from "react";
import { PageHero } from "@/components/PageHero";
import { FadeIn } from "@/components/FadeIn";
import { SITE } from "@/lib/site";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Get in touch"
        subtitle="Our team is ready to help you secure your AI infrastructure."
      />
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-2">
            <FadeIn>
              <h2 className="subsection-title font-medium text-white">Contact Information</h2>
              <div className="mt-8 space-y-6 text-muted">
                <p>
                  <span className="block text-sm uppercase tracking-wider text-white/60">Email</span>
                  <a href={`mailto:${SITE.email}`} className="text-lg text-electric hover:underline">
                    {SITE.email}
                  </a>
                </p>
                <p>
                  <span className="block text-sm uppercase tracking-wider text-white/60">Domain</span>
                  <span className="text-lg text-white">{SITE.domain}</span>
                </p>
                <p>
                  <span className="block text-sm uppercase tracking-wider text-white/60">Founded</span>
                  <span className="text-lg text-white">{SITE.founded}</span>
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={0.1}>
              {submitted ? (
                <div className="rounded-2xl border border-secure/30 bg-secure/5 p-8 text-center">
                  <p className="text-lg font-medium text-white">Thank you for reaching out.</p>
                  <p className="mt-2 text-muted">Our team will respond within one business day.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="mb-2 block text-sm text-muted">Full name</label>
                    <input id="name" name="name" required className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white focus:border-electric focus:outline-none" />
                  </div>
                  <div>
                    <label htmlFor="email" className="mb-2 block text-sm text-muted">Work email</label>
                    <input id="email" name="email" type="email" required className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white focus:border-electric focus:outline-none" />
                  </div>
                  <div>
                    <label htmlFor="company" className="mb-2 block text-sm text-muted">Company</label>
                    <input id="company" name="company" required className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white focus:border-electric focus:outline-none" />
                  </div>
                  <div>
                    <label htmlFor="message" className="mb-2 block text-sm text-muted">Message</label>
                    <textarea id="message" name="message" rows={4} required className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white focus:border-electric focus:outline-none" />
                  </div>
                  <button type="submit" className="btn-primary w-full">Send Message</button>
                </form>
              )}
            </FadeIn>
          </div>
        </div>
      </section>
    </>
  );
}
