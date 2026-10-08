"use client";

import { useState } from "react";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check } from "lucide-react";
import { pricingPlans, pricingComparison, pricingFaqs } from "@/content/pricing";
import { faqJsonLd } from "@/lib/metadata";
import type { Locale } from "@/lib/i18n/locales";
import { getLocalizedPath } from "@/lib/i18n/locales";

export function PricingPage({ locale = "en" as Locale }) {
  const [annual, setAnnual] = useState(false);
  const [requests, setRequests] = useState(50000);

  const estimatedCost = Math.round(requests * 0.002);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(pricingFaqs)) }}
      />
      <Section className="pt-32 pb-16">
        <Container className="text-center">
          <h1 className="font-display text-4xl font-medium md:text-5xl lg:text-6xl">
            Simple pricing for every stage
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Start free, pay for what you use, and scale with enterprise controls when you need them.
          </p>
          <div className="mt-6 inline-flex rounded-button border border-border p-1">
            <button
              type="button"
              onClick={() => setAnnual(false)}
              className={`rounded-button px-4 py-1.5 text-sm ${!annual ? "bg-brand text-white" : "text-muted-foreground"}`}
            >
              Monthly
            </button>
            <button
              type="button"
              onClick={() => setAnnual(true)}
              className={`rounded-button px-4 py-1.5 text-sm ${annual ? "bg-brand text-white" : "text-muted-foreground"}`}
            >
              Annual
            </button>
          </div>
        </Container>
      </Section>

      <Section variant="soft">
        <Container>
          <div className="grid gap-6 md:grid-cols-3">
            {pricingPlans.map((plan) => (
              <Card key={plan.id} className={plan.highlighted ? "border-brand/30 ring-1 ring-brand/20" : ""}>
                <h2 className="text-lg font-medium">{plan.name}</h2>
                <div className="mt-2">
                  <span className="text-3xl font-medium">{plan.price}</span>
                  <span className="text-muted-foreground">{plan.period}</span>
                </div>
                <p className="mt-2 text-sm text-muted-foreground">{plan.description}</p>
                <ul className="mt-6 space-y-3">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Check className="h-4 w-4 text-brand" /> {f}
                    </li>
                  ))}
                </ul>
                <Button
                  href={plan.id === "enterprise" ? getLocalizedPath("/contact", locale) : getLocalizedPath("/early-access", locale)}
                  variant={plan.ctaVariant === "primary" ? "primary" : "secondary"}
                  className="mt-6 w-full"
                >
                  {plan.cta}
                </Button>
              </Card>
            ))}
          </div>
          <p className="mt-6 text-center text-xs text-muted">
            Pricing and usage limits are placeholders and should be updated before production launch.
          </p>
        </Container>
      </Section>

      <Section>
        <Container>
          <h2 className="font-display text-2xl font-medium">Feature comparison</h2>
          <div className="mt-6 overflow-x-auto">
            <table className="w-full min-w-[600px] text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="py-3 text-left font-medium">Feature</th>
                  <th className="py-3 text-left font-medium">Developer</th>
                  <th className="py-3 text-left font-medium">Pro</th>
                  <th className="py-3 text-left font-medium">Enterprise</th>
                </tr>
              </thead>
              <tbody>
                {pricingComparison.map((row) => (
                  <tr key={row.feature} className="border-b border-border">
                    <td className="py-3 text-muted-foreground">{row.feature}</td>
                    <td className="py-3">{row.developer}</td>
                    <td className="py-3">{row.pro}</td>
                    <td className="py-3">{row.enterprise}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Container>
      </Section>

      <Section variant="soft">
        <Container>
          <h2 className="font-display text-2xl font-medium">Cost calculator</h2>
          <Card className="mt-6 max-w-lg">
            <label htmlFor="requests" className="text-sm font-medium">Monthly AI requests</label>
            <input
              id="requests"
              type="range"
              min={1000}
              max={500000}
              step={1000}
              value={requests}
              onChange={(e) => setRequests(Number(e.target.value))}
              className="mt-2 w-full"
            />
            <p className="mt-2 text-sm text-muted-foreground">{requests.toLocaleString()} requests/month</p>
            <p className="mt-4 text-2xl font-medium text-brand">~${estimatedCost}/mo</p>
            <p className="mt-1 text-xs text-muted">Illustrative estimate — not final pricing.</p>
          </Card>
        </Container>
      </Section>

      <Section>
        <Container>
          <h2 className="font-display text-2xl font-medium">FAQ</h2>
          <div className="mt-6 space-y-4">
            {pricingFaqs.map((faq) => (
              <div key={faq.question} className="rounded-card border border-border p-5">
                <h3 className="font-medium">{faq.question}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{faq.answer}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}
