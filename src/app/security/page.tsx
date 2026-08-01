import { createMetadata } from "@/lib/seo";
import { PageHeader } from "@/components/ui/PageHeader";
import { Section } from "@/components/ui/Section";
import { FadeIn } from "@/lib/animations";
import { SECURITY_FEATURES, COMPLIANCE_BADGES } from "@/lib/constants";
import { Shield, Lock, Eye, Server } from "lucide-react";

export const metadata = createMetadata({
  title: "Security",
  description:
    "SOMA security: end-to-end encryption, role-based access, isolated AI workloads, and enterprise-grade compliance for automotive intelligence.",
  path: "/security/",
});

const SECURITY_ICONS = [Shield, Lock, Server, Eye, Shield, Lock, Server, Eye];

export default function SecurityPage() {
  return (
    <>
      <PageHeader
        label="Security"
        title="Automotive intelligence you can trust."
        description="Security, reliability and explainability are built into every layer of SOMA."
      />

      <Section>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-soma-gray-100 mb-16">
          {SECURITY_FEATURES.map((feature, i) => {
            const Icon = SECURITY_ICONS[i % SECURITY_ICONS.length];
            return (
              <FadeIn key={feature} delay={i * 0.05}>
                <div className="bg-white p-8 h-full">
                  <Icon className="w-5 h-5 text-soma-black mb-4" strokeWidth={1.5} />
                  <p className="text-sm font-medium text-soma-black">{feature}</p>
                </div>
              </FadeIn>
            );
          })}
        </div>

        <FadeIn>
          <h2 className="text-2xl font-semibold text-soma-black mb-8">Compliance Framework</h2>
          <div className="flex flex-wrap gap-6 mb-12">
            {COMPLIANCE_BADGES.map((badge) => (
              <div key={badge.name} className="flex flex-col items-center px-8 py-6 border border-soma-gray-100">
                <span className="text-lg font-semibold text-soma-black mb-1">{badge.name}</span>
                <span className="font-mono text-[10px] uppercase tracking-wider text-soma-gray-300">{badge.status}</span>
              </div>
            ))}
          </div>
          <p className="text-soma-gray-400 leading-relaxed max-w-3xl">
            SOMA is designed with automotive security standards in mind. Our platform architecture supports compliance with industry frameworks including SOC 2, ISO 27001, GDPR, and automotive-specific security requirements. Certification processes are underway — badges above reflect our design intent, not current certification status.
          </p>
        </FadeIn>
      </Section>
    </>
  );
}
