"use client";

import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { FadeIn } from "@/components/FadeIn";
import { WhitelistGate } from "@/components/WhitelistGate";

const plans = [
  {
    name: "Starter",
    price: "Custom",
    description: "For teams beginning their AI security journey.",
    features: ["Up to 10 data sources", "Basic threat detection", "Standard compliance reports", "Email support"],
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For organizations with complex AI infrastructure.",
    features: ["Unlimited data sources", "Advanced AI risk scoring", "Full compliance automation", "Dedicated support", "Custom integrations"],
    featured: true,
  },
  {
    name: "Global",
    price: "Custom",
    description: "For multinational enterprises with strict requirements.",
    features: ["Multi-region deployment", "Air-gap support", "Custom SLAs", "On-site training", "Executive dashboards"],
  },
];

export function PricingContent() {
  return (
    <>
      <PageHero
        eyebrow="Pricing"
        title="Enterprise plans"
        subtitle="Flexible pricing designed for organizations of every scale."
      />
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <WhitelistGate
            title="Verify your access"
            description="Pricing and purchase are available to whitelisted organizations. Enter your work email to view plans."
          >
            <div className="grid gap-8 lg:grid-cols-3">
              {plans.map((plan, i) => (
                <FadeIn key={plan.name} delay={i * 0.1}>
                  <div className={`flex h-full flex-col border p-8 ${plan.featured ? "border-electric bg-electric/5" : "border-white/10"}`}>
                    {plan.featured && (
                      <span className="mb-4 inline-block w-fit rounded-full bg-electric/20 px-3 py-1 text-xs font-medium text-electric">
                        Most Popular
                      </span>
                    )}
                    <h3 className="text-2xl font-medium text-white">{plan.name}</h3>
                    <p className="mt-2 text-3xl font-light text-white">{plan.price}</p>
                    <p className="mt-4 text-muted">{plan.description}</p>
                    <ul className="mt-8 flex-1 space-y-3">
                      {plan.features.map((f) => (
                        <li key={f} className="flex items-start gap-2 text-sm text-muted">
                          <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-electric" />
                          {f}
                        </li>
                      ))}
                    </ul>
                    <Link href="/contact/" className={`mt-8 text-center ${plan.featured ? "btn-primary" : "btn-secondary"}`}>
                      Contact Sales
                    </Link>
                  </div>
                </FadeIn>
              ))}
            </div>
          </WhitelistGate>
        </div>
      </section>
    </>
  );
}
