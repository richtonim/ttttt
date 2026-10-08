"use client";

import { useState } from "react";
import { PageLayout } from "@/components/layout/PageLayout";
import { Container, Section, SectionHeader } from "@/components/ui/Section";
import { Button } from "@/components/layout/Header";

export default function DemoPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <PageLayout>
      <Section className="pt-24 md:pt-32">
        <Container>
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <SectionHeader
              label="Demo"
              title="See Cognis in action."
              description="Schedule a personalized demo with our team. We'll walk you through the platform and discuss how Cognis can address your specific use cases."
            />

            <div>
              {submitted ? (
                <div className="border border-accent/30 bg-accent/5 p-8">
                  <h3 className="text-xl font-medium">Demo requested</h3>
                  <p className="mt-3 text-muted">
                    Thank you for your interest. Our team will reach out within 1 business day to schedule your demo.
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setSubmitted(true);
                  }}
                  className="space-y-6"
                >
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium mb-2">First name</label>
                      <input id="firstName" required type="text" className="w-full bg-transparent border border-border px-4 py-3 focus:outline-none focus:border-accent" />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium mb-2">Last name</label>
                      <input id="lastName" required type="text" className="w-full bg-transparent border border-border px-4 py-3 focus:outline-none focus:border-accent" />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">Work email</label>
                    <input id="email" required type="email" className="w-full bg-transparent border border-border px-4 py-3 focus:outline-none focus:border-accent" />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium mb-2">Company</label>
                    <input id="company" required type="text" className="w-full bg-transparent border border-border px-4 py-3 focus:outline-none focus:border-accent" />
                  </div>
                  <div>
                    <label htmlFor="role" className="block text-sm font-medium mb-2">Role</label>
                    <input id="role" type="text" className="w-full bg-transparent border border-border px-4 py-3 focus:outline-none focus:border-accent" />
                  </div>
                  <div>
                    <label htmlFor="useCase" className="block text-sm font-medium mb-2">Primary use case</label>
                    <select id="useCase" className="w-full bg-background border border-border px-4 py-3 focus:outline-none focus:border-accent">
                      <option>Business Operations</option>
                      <option>Customer Intelligence</option>
                      <option>Research & Analysis</option>
                      <option>Workflow Automation</option>
                      <option>Decision Support</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <Button type="submit" className="w-full">Request Demo</Button>
                </form>
              )}
            </div>
          </div>
        </Container>
      </Section>
    </PageLayout>
  );
}
