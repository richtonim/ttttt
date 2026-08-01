import { FadeIn } from "@/components/FadeIn";

const features = [
  { title: "Data Asset Map", description: "Visualize every data source, flow, and dependency across your organization." },
  { title: "Sensitive Data Identification", description: "Automatically detect PII, PHI, financial data, and proprietary information." },
  { title: "AI Risk Scoring", description: "Quantify risk across models, datasets, and automated workflows in real time." },
  { title: "User Access Monitoring", description: "Track who accesses what, when, and why — with full context and attribution." },
  { title: "Anomaly Behavior Detection", description: "Identify unusual patterns before they become security incidents." },
  { title: "Compliance & Incident Analysis", description: "Unified dashboards for regulatory status and security event investigation." },
];

export function PlatformShowcase() {
  return (
    <section className="border-b border-white/5 bg-surface py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <FadeIn>
          <p className="text-sm font-medium uppercase tracking-widest text-electric">Platform</p>
          <h2 className="section-title mt-4 font-medium text-white">Complete visibility. Intelligent action.</h2>
        </FadeIn>
        <div className="mt-20 grid gap-px bg-white/10 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, i) => (
            <FadeIn key={feature.title} delay={i * 0.05}>
              <div className="group h-full bg-[#050505] p-8 transition-colors hover:bg-surface-elevated md:p-10">
                <div className="mb-6 h-px w-12 bg-electric/50 transition-all group-hover:w-20 group-hover:bg-electric" />
                <h3 className="text-xl font-medium text-white">{feature.title}</h3>
                <p className="mt-3 text-muted">{feature.description}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
