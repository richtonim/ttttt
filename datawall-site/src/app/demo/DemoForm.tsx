"use client";

import { useState } from "react";
import { PageHero } from "@/components/PageHero";
import { FadeIn } from "@/components/FadeIn";

export function DemoForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <PageHero
        eyebrow="Demo"
        title="Book a Demo"
        subtitle="See how Datawall secures enterprise data, AI models, and automated workflows."
      />
      <section className="py-20">
        <div className="mx-auto max-w-lg px-6 lg:px-8">
          <FadeIn>
            {submitted ? (
              <div className="rounded-2xl border border-secure/30 bg-secure/5 p-8 text-center">
                <p className="text-lg font-medium text-white">Demo request received.</p>
                <p className="mt-2 text-muted">We will contact you shortly to schedule your session.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="demo-name" className="mb-2 block text-sm text-muted">Full name</label>
                  <input id="demo-name" required className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white focus:border-electric focus:outline-none" />
                </div>
                <div>
                  <label htmlFor="demo-email" className="mb-2 block text-sm text-muted">Work email</label>
                  <input id="demo-email" type="email" required className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white focus:border-electric focus:outline-none" />
                </div>
                <div>
                  <label htmlFor="demo-company" className="mb-2 block text-sm text-muted">Company</label>
                  <input id="demo-company" required className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white focus:border-electric focus:outline-none" />
                </div>
                <div>
                  <label htmlFor="demo-size" className="mb-2 block text-sm text-muted">Company size</label>
                  <select id="demo-size" required className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white focus:border-electric focus:outline-none">
                    <option value="">Select size</option>
                    <option value="1-50">1–50 employees</option>
                    <option value="51-200">51–200 employees</option>
                    <option value="201-1000">201–1,000 employees</option>
                    <option value="1000+">1,000+ employees</option>
                  </select>
                </div>
                <button type="submit" className="btn-primary w-full">Request Demo</button>
              </form>
            )}
          </FadeIn>
        </div>
      </section>
    </>
  );
}
