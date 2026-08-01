"use client";

import { useState } from "react";
import { PageHeader } from "@/components/ui/PageHeader";
import { Section } from "@/components/ui/Section";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <PageHeader
        label="Contact"
        title="Let's build what moves next."
        description="Whether you're an OEM, fleet operator, or mobility platform — we'd love to hear about your intelligence infrastructure needs."
      />

      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="firstName" className="block font-mono text-xs uppercase tracking-wider text-soma-gray-400 mb-2">
                  First Name
                </label>
                <input id="firstName" type="text" required className="w-full px-4 py-3 border border-soma-gray-200 focus:outline-none focus:border-soma-black transition-colors" />
              </div>
              <div>
                <label htmlFor="lastName" className="block font-mono text-xs uppercase tracking-wider text-soma-gray-400 mb-2">
                  Last Name
                </label>
                <input id="lastName" type="text" required className="w-full px-4 py-3 border border-soma-gray-200 focus:outline-none focus:border-soma-black transition-colors" />
              </div>
            </div>
            <div>
              <label htmlFor="email" className="block font-mono text-xs uppercase tracking-wider text-soma-gray-400 mb-2">
                Work Email
              </label>
              <input id="email" type="email" required className="w-full px-4 py-3 border border-soma-gray-200 focus:outline-none focus:border-soma-black transition-colors" />
            </div>
            <div>
              <label htmlFor="company" className="block font-mono text-xs uppercase tracking-wider text-soma-gray-400 mb-2">
                Company
              </label>
              <input id="company" type="text" required className="w-full px-4 py-3 border border-soma-gray-200 focus:outline-none focus:border-soma-black transition-colors" />
            </div>
            <div>
              <label htmlFor="interest" className="block font-mono text-xs uppercase tracking-wider text-soma-gray-400 mb-2">
                Area of Interest
              </label>
              <select id="interest" required className="w-full px-4 py-3 border border-soma-gray-200 focus:outline-none focus:border-soma-black transition-colors bg-white">
                <option value="">Select an option</option>
                <option value="platform">Platform Demo</option>
                <option value="api">API Access</option>
                <option value="partnership">Partnership</option>
                <option value="careers">Careers</option>
                <option value="whitelist">Whitelist Request</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div>
              <label htmlFor="message" className="block font-mono text-xs uppercase tracking-wider text-soma-gray-400 mb-2">
                Message
              </label>
              <textarea id="message" rows={5} required className="w-full px-4 py-3 border border-soma-gray-200 focus:outline-none focus:border-soma-black transition-colors resize-none" />
            </div>
            {submitted && (
              <div className="p-4 bg-green-50 text-green-700 border border-green-100 text-sm" role="alert">
                Thank you for reaching out. Our team will get back to you within 2 business days.
              </div>
            )}
            <button type="submit" className="px-8 py-3 bg-soma-black text-white font-medium tracking-wide hover:bg-soma-gray-500 transition-colors">
              Send Message
            </button>
          </form>

          <div className="space-y-12">
            <div>
              <h3 className="font-mono text-xs uppercase tracking-wider text-soma-gray-400 mb-3">Email</h3>
              <a href="mailto:hello@soma.autos" className="text-lg text-soma-black hover:text-soma-gray-400 transition-colors">
                hello@soma.autos
              </a>
            </div>
            <div>
              <h3 className="font-mono text-xs uppercase tracking-wider text-soma-gray-400 mb-3">Sales</h3>
              <a href="mailto:sales@soma.autos" className="text-lg text-soma-black hover:text-soma-gray-400 transition-colors">
                sales@soma.autos
              </a>
            </div>
            <div>
              <h3 className="font-mono text-xs uppercase tracking-wider text-soma-gray-400 mb-3">Developer Support</h3>
              <a href="mailto:developers@soma.autos" className="text-lg text-soma-black hover:text-soma-gray-400 transition-colors">
                developers@soma.autos
              </a>
            </div>
            <div>
              <h3 className="font-mono text-xs uppercase tracking-wider text-soma-gray-400 mb-3">Headquarters</h3>
              <p className="text-soma-gray-400 leading-relaxed">
                SOMA Autos<br />
                San Francisco, CA<br />
                United States
              </p>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
