"use client";

import { useState, FormEvent } from "react";
import { PageLayout } from "@/components/PageLayout";
import { FadeIn } from "@/components/animations";
import { Button } from "@/components/Button";
import { Mail, MapPin, MessageSquare } from "lucide-react";

export default function ContactPage() {
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
    <PageLayout>
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
            <FadeIn>
              <p className="text-sm tracking-[0.15em] uppercase text-qualia-gray-500 mb-4">
                Contact
              </p>
              <h1 className="text-display font-semibold text-qualia-black mb-6">
                Let&apos;s talk
              </h1>
              <p className="text-body-lg text-qualia-gray-600 mb-12">
                Whether you&apos;re exploring a partnership, requesting a demo or interested in
                joining our team — we&apos;d love to hear from you.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Mail size={20} className="text-qualia-accent mt-1" />
                  <div>
                    <p className="font-medium text-qualia-black">Email</p>
                    <a
                      href="mailto:hello@qualia.lat"
                      className="text-qualia-gray-600 hover:text-qualia-black transition-colors"
                    >
                      hello@qualia.lat
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <MapPin size={20} className="text-qualia-accent mt-1" />
                  <div>
                    <p className="font-medium text-qualia-black">Location</p>
                    <p className="text-qualia-gray-600">San Francisco, CA · Remote-first</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <MessageSquare size={20} className="text-qualia-accent mt-1" />
                  <div>
                    <p className="font-medium text-qualia-black">Partnerships</p>
                    <a
                      href="mailto:partner@qualia.lat"
                      className="text-qualia-gray-600 hover:text-qualia-black transition-colors"
                    >
                      partner@qualia.lat
                    </a>
                  </div>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.15}>
              <div className="p-8 lg:p-10 border border-qualia-gray-200 rounded-2xl">
                {submitted ? (
                  <div className="text-center py-8">
                    <h3 className="text-xl font-semibold text-qualia-black mb-2">
                      Message sent
                    </h3>
                    <p className="text-qualia-gray-600">
                      Thank you for reaching out. We&apos;ll get back to you within 24 hours.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-qualia-black mb-2">
                        Name
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        className="w-full px-4 py-3 border border-qualia-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-qualia-accent focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-qualia-black mb-2">
                        Email
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        className="w-full px-4 py-3 border border-qualia-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-qualia-accent focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-qualia-black mb-2">
                        Subject
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        required
                        className="w-full px-4 py-3 border border-qualia-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-qualia-accent focus:border-transparent bg-white"
                      >
                        <option value="">Select a topic</option>
                        <option value="demo">Request a demo</option>
                        <option value="partnership">Partnership inquiry</option>
                        <option value="enterprise">Enterprise sales</option>
                        <option value="careers">Careers</option>
                        <option value="press">Press & media</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-qualia-black mb-2">
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={5}
                        required
                        className="w-full px-4 py-3 border border-qualia-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-qualia-accent focus:border-transparent resize-none"
                      />
                    </div>
                    <Button type="submit" className="w-full" disabled={loading}>
                      {loading ? "Sending..." : "Send Message"}
                    </Button>
                  </form>
                )}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
