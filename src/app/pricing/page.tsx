import { PageLayout } from "@/components/PageLayout";
import { WhitelistGate } from "@/components/WhitelistGate";
import { Button } from "@/components/Button";
import { createMetadata } from "@/lib/seo";
import { Check } from "lucide-react";

export const metadata = createMetadata({
  title: "Pricing",
  description:
    "Qualia pricing plans — Starter, Professional and Enterprise. Purchase access requires whitelist approval.",
  path: "/pricing/",
});

const plans = [
  {
    name: "Starter",
    price: "$99",
    period: "/month",
    description: "For individual developers and small projects.",
    features: [
      "10K API calls/month",
      "Multimodal perception",
      "Basic agent workflows",
      "Community support",
      "SDK access",
    ],
  },
  {
    name: "Professional",
    price: "$499",
    period: "/month",
    description: "For growing teams building production AI.",
    features: [
      "100K API calls/month",
      "Full perception engine",
      "Advanced agent orchestration",
      "Priority support",
      "Custom model fine-tuning",
      "Webhooks & events",
    ],
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "For organizations with advanced requirements.",
    features: [
      "Unlimited API calls",
      "Dedicated infrastructure",
      "Custom model deployment",
      "SLA & dedicated support",
      "On-premise option",
      "Security audit & compliance",
    ],
  },
];

export default function PricingPage() {
  return (
    <PageLayout>
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm tracking-[0.15em] uppercase text-qualia-gray-500 mb-4">Pricing</p>
            <h1 className="text-display font-semibold text-qualia-black mb-6">
              Simple, transparent pricing
            </h1>
            <p className="text-body-lg text-qualia-gray-600 max-w-xl mx-auto">
              Start building with Qualia. Purchase access requires whitelist approval.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`p-8 border rounded-2xl flex flex-col ${
                  plan.popular
                    ? "border-qualia-black bg-qualia-black text-white"
                    : "border-qualia-gray-200 bg-white"
                }`}
              >
                {plan.popular && (
                  <span className="text-xs font-medium text-qualia-accent mb-4">Most popular</span>
                )}
                <h3
                  className={`text-xl font-semibold mb-2 ${
                    plan.popular ? "text-white" : "text-qualia-black"
                  }`}
                >
                  {plan.name}
                </h3>
                <div className="mb-4">
                  <span className="text-4xl font-semibold">{plan.price}</span>
                  <span
                    className={`text-sm ${plan.popular ? "text-qualia-gray-400" : "text-qualia-gray-500"}`}
                  >
                    {plan.period}
                  </span>
                </div>
                <p
                  className={`text-sm mb-8 ${plan.popular ? "text-qualia-gray-400" : "text-qualia-gray-600"}`}
                >
                  {plan.description}
                </p>
                <ul className="space-y-3 mb-8 flex-1">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-sm">
                      <Check
                        size={16}
                        className={`shrink-0 mt-0.5 ${plan.popular ? "text-qualia-accent-light" : "text-qualia-accent"}`}
                      />
                      <span className={plan.popular ? "text-qualia-gray-300" : "text-qualia-gray-600"}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
                <Button
                  href="/pricing/#purchase"
                  variant={plan.popular ? "secondary" : "primary"}
                  className="w-full"
                >
                  Get Started
                </Button>
              </div>
            ))}
          </div>

          <div id="purchase" className="max-w-md mx-auto">
            <div className="p-8 lg:p-10 border border-qualia-gray-200 rounded-2xl">
              <WhitelistGate mode="purchase" />
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
