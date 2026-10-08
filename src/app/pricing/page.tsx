import type { Metadata } from "next";
import { PageLayout } from "@/components/layout/PageLayout";
import { Container, Section, SectionHeader } from "@/components/ui/Section";
import { WhitelistGate } from "@/components/ui/WhitelistGate";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  title: "Pricing",
  description: "Cognis enterprise pricing plans. Contact us for custom pricing or purchase with a whitelisted account.",
  path: "/pricing/",
});

const plans = [
  {
    name: "Starter",
    price: "Contact",
    description: "For teams exploring cognitive AI",
    features: ["Up to 5 agents", "100K API calls/mo", "Community support", "Standard models"],
  },
  {
    name: "Professional",
    price: "Contact",
    description: "For growing organizations",
    features: ["Unlimited agents", "1M API calls/mo", "Priority support", "Custom models", "SSO"],
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For large-scale deployments",
    features: ["Dedicated infrastructure", "Unlimited API", "24/7 support", "On-premise option", "Custom SLA"],
  },
];

export default function PricingPage() {
  return (
    <PageLayout>
      <Section className="pt-24 md:pt-32">
        <Container>
          <SectionHeader
            label="Pricing"
            title="Plans that scale with you."
            description="Flexible pricing designed for teams of every size. Purchase requires whitelist approval."
            align="center"
          />

          <div className="grid md:grid-cols-3 gap-px bg-border mt-16">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`p-8 md:p-10 ${plan.highlighted ? "bg-surface-elevated border border-accent/20" : "bg-background"}`}
              >
                <h3 className="text-lg font-medium">{plan.name}</h3>
                <p className="mt-2 text-3xl font-medium tracking-tight">{plan.price}</p>
                <p className="mt-2 text-sm text-muted">{plan.description}</p>
                <ul className="mt-8 space-y-3">
                  {plan.features.map((f) => (
                    <li key={f} className="text-sm text-muted flex items-center gap-2">
                      <span className="text-accent">→</span> {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section dark>
        <Container className="max-w-md mx-auto">
          <h2 className="text-2xl font-medium tracking-tight text-center">Purchase</h2>
          <p className="mt-4 text-muted text-center text-sm">
            Enter your whitelisted email to proceed with purchase.
          </p>
          <div className="mt-8">
            <WhitelistGate mode="purchase" />
          </div>
        </Container>
      </Section>
    </PageLayout>
  );
}
