import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { PageHero, ContentSection } from "@/components/ui/PageLayout";
import { WhitelistForm } from "@/components/ui/WhitelistForm";

export const metadata: Metadata = buildMetadata({
  title: "Pricing",
  description: "Entropy pricing plans for vehicle intelligence. Contact us for enterprise pricing and whitelist access.",
  path: "/pricing/",
});

const plans = [
  { name: "Starter", price: "Custom", desc: "For pilot programs and proof-of-concept deployments.", features: ["Up to 100 vehicles", "Core analytics", "REST API access", "Email support"] },
  { name: "Professional", price: "Custom", desc: "For growing fleets and production deployments.", features: ["Up to 10,000 vehicles", "AI risk scoring", "Predictive maintenance", "Real-time streaming", "Priority support"], featured: true },
  { name: "Enterprise", price: "Custom", desc: "For OEMs and large-scale autonomous programs.", features: ["Unlimited vehicles", "Edge AI deployment", "Custom model training", "Dedicated SLA", "24/7 support", "On-premise option"] },
];

export default function PricingPage() {
  return (
    <>
      <PageHero label="Pricing" title="Plans that scale with you." description="Flexible pricing designed for fleets of every size. All plans require whitelist access." />
      <ContentSection>
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {plans.map((plan) => (
            <div key={plan.name} className={`p-8 rounded-2xl border ${plan.featured ? "border-accent-blue/30 bg-accent-blue/5" : "border-white/5"}`}>
              <h3 className="text-xl font-semibold text-white">{plan.name}</h3>
              <p className="text-3xl font-bold text-white mt-4">{plan.price}</p>
              <p className="text-sm text-white/40 mt-2 mb-8">{plan.desc}</p>
              <ul className="space-y-3">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-white/60">
                    <span className="text-accent-green">✓</span> {f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="max-w-md mx-auto p-8 rounded-2xl border border-white/10 bg-white/[0.02]">
          <h3 className="text-xl font-bold text-white mb-2 text-center">Request purchase access</h3>
          <p className="text-sm text-white/40 text-center mb-8">Verify your whitelist status to proceed with purchase.</p>
          <WhitelistForm mode="purchase" />
        </div>
      </ContentSection>
    </>
  );
}
