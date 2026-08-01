"use client";

import { useState } from "react";
import { PageLayout } from "@/components/layout/PageLayout";
import { Container, Section, SectionHeader } from "@/components/ui/Section";
import { Button } from "@/components/layout/Header";
import { SITE } from "@/lib/site";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <PageLayout>
      <Section className="pt-24 md:pt-32">
        <Container>
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <SectionHeader
                label="Contact"
                title="Let's talk."
                description="Whether you're exploring Cognis for your organization, requesting whitelist access, or have a partnership inquiry — we'd love to hear from you."
              />
              <div className="space-y-4 text-muted">
                <p>
                  <span className="text-foreground font-medium">Email</span>
                  <br />
                  <a href={`mailto:${SITE.email}`} className="hover:text-accent transition-colors">
                    {SITE.email}
                  </a>
                </p>
                <p>
                  <span className="text-foreground font-medium">Domain</span>
                  <br />
                  {SITE.domain}
                </p>
              </div>
            </div>

            <div>
              {submitted ? (
                <div className="border border-accent/30 bg-accent/5 p-8 text-center">
                  <h3 className="text-xl font-medium">Message sent</h3>
                  <p className="mt-3 text-muted">We&apos;ll get back to you within 1–2 business days.</p>
                </div>
              ) : (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setSubmitted(true);
                  }}
                  className="space-y-6"
                >
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
                    <input id="name" required type="text" className="w-full bg-transparent border border-border px-4 py-3 focus:outline-none focus:border-accent" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                    <input id="email" required type="email" className="w-full bg-transparent border border-border px-4 py-3 focus:outline-none focus:border-accent" />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium mb-2">Company</label>
                    <input id="company" type="text" className="w-full bg-transparent border border-border px-4 py-3 focus:outline-none focus:border-accent" />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                    <textarea id="message" required rows={5} className="w-full bg-transparent border border-border px-4 py-3 focus:outline-none focus:border-accent resize-none" />
                  </div>
                  <Button type="submit" className="w-full">Send message</Button>
                </form>
              )}
            </div>
          </div>
        </Container>
      </Section>
    </PageLayout>
  );
}
