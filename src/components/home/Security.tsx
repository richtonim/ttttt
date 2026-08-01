import { FadeIn } from "@/lib/animations";
import { Section, SectionTitle } from "@/components/ui/Section";
import { SECURITY_FEATURES, COMPLIANCE_BADGES } from "@/lib/constants";
import { Shield, Lock, Eye, Server } from "lucide-react";

const SECURITY_ICONS = [Shield, Lock, Server, Eye, Shield, Lock, Server, Eye];

export function Security() {
  return (
    <Section>
      <SectionTitle
        title={
          <>
            Automotive intelligence
            <br />
            you can trust.
          </>
        }
        description="Security, reliability and explainability are built into every layer of SOMA."
        className="mb-16"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-soma-gray-100 mb-16">
        {SECURITY_FEATURES.map((feature, i) => {
          const Icon = SECURITY_ICONS[i % SECURITY_ICONS.length];
          return (
            <FadeIn key={feature} delay={i * 0.05}>
              <div className="bg-white p-6 md:p-8 h-full">
                <Icon className="w-5 h-5 text-soma-black mb-4" strokeWidth={1.5} />
                <p className="text-sm font-medium text-soma-black">{feature}</p>
              </div>
            </FadeIn>
          );
        })}
      </div>

      <FadeIn>
        <div className="flex flex-wrap gap-6 md:gap-8">
          {COMPLIANCE_BADGES.map((badge) => (
            <div
              key={badge.name}
              className="flex flex-col items-center px-8 py-6 border border-soma-gray-100"
            >
              <span className="text-lg font-semibold text-soma-black mb-1">
                {badge.name}
              </span>
              <span className="font-mono text-[10px] uppercase tracking-wider text-soma-gray-300">
                {badge.status}
              </span>
            </div>
          ))}
        </div>
      </FadeIn>
    </Section>
  );
}
