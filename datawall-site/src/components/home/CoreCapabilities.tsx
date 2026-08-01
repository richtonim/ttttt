import Link from "next/link";
import { FadeIn } from "@/components/FadeIn";

const capabilities = [
  {
    number: "01",
    title: "AI Data Security",
    description: "Protect training data, model outputs, and inference pipelines with continuous monitoring and policy enforcement.",
    href: "/platform/ai-data-security/",
  },
  {
    number: "02",
    title: "Privacy Governance",
    description: "Automate data classification, consent management, and privacy impact assessments across your AI stack.",
    href: "/platform/privacy-governance/",
  },
  {
    number: "03",
    title: "Intelligent Access Control",
    description: "Dynamic, context-aware permissions that adapt to user behavior, data sensitivity, and risk levels.",
    href: "/platform/access-control/",
  },
  {
    number: "04",
    title: "Real-time Threat Detection",
    description: "Detect anomalies, data exfiltration, and model abuse in milliseconds with ML-powered threat intelligence.",
    href: "/platform/threat-detection/",
  },
];

export function CoreCapabilities() {
  return (
    <section className="border-b border-white/5 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <FadeIn>
          <p className="text-sm font-medium uppercase tracking-widest text-electric">Core Capabilities</p>
          <h2 className="section-title mt-4 font-medium text-white">One platform. Complete control.</h2>
        </FadeIn>
        <div className="mt-20 space-y-0">
          {capabilities.map((cap, i) => (
            <FadeIn key={cap.number} delay={i * 0.1}>
              <Link
                href={cap.href}
                className="group flex flex-col gap-6 border-t border-white/10 py-12 transition-colors hover:bg-white/[0.02] md:flex-row md:items-center md:gap-16"
              >
                <span className="text-6xl font-light text-white/10 transition-colors group-hover:text-electric/30 md:text-8xl">
                  {cap.number}
                </span>
                <div className="flex-1">
                  <h3 className="subsection-title font-medium text-white transition-colors group-hover:text-electric">
                    {cap.title}
                  </h3>
                  <p className="mt-4 max-w-xl text-lg text-muted">{cap.description}</p>
                </div>
                <span className="text-electric opacity-0 transition-opacity group-hover:opacity-100" aria-hidden="true">
                  &rarr;
                </span>
              </Link>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
