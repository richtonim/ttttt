"use client";

import { FadeIn } from "@/components/FadeIn";

const steps = [
  { label: "Discover", description: "Map all data assets and AI workflows" },
  { label: "Classify", description: "Identify sensitivity and risk levels" },
  { label: "Protect", description: "Enforce policies and encryption" },
  { label: "Monitor", description: "Continuous real-time surveillance" },
  { label: "Respond", description: "Automated threat containment" },
];

export function WorkflowSection() {
  return (
    <section className="border-b border-white/5 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <FadeIn>
          <p className="text-sm font-medium uppercase tracking-widest text-electric">Workflow</p>
          <h2 className="section-title mt-4 font-medium text-white">The complete security loop.</h2>
        </FadeIn>
        <div className="relative mt-20">
          <svg className="absolute left-0 right-0 top-1/2 hidden h-1 w-full -translate-y-1/2 md:block" aria-hidden="true">
            <line x1="0" y1="0" x2="100%" y2="0" stroke="rgba(0,212,255,0.2)" strokeWidth="1" strokeDasharray="8 8" className="data-flow-line" />
          </svg>
          <div className="grid gap-8 md:grid-cols-5">
            {steps.map((step, i) => (
              <FadeIn key={step.label} delay={i * 0.1}>
                <div className="relative text-center md:text-left">
                  <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full border border-electric/30 bg-[#050505] md:mx-0">
                    <span className="text-sm font-medium text-electric">{String(i + 1).padStart(2, "0")}</span>
                  </div>
                  <h3 className="text-lg font-medium text-white">{step.label}</h3>
                  <p className="mt-2 text-sm text-muted">{step.description}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
