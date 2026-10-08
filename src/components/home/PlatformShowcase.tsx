"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PLATFORM_FEATURES } from "@/lib/site";
import { Container, Section, SectionHeader } from "@/components/ui/Section";

function PlatformVisual({ activeId }: { activeId: string }) {
  const visuals: Record<string, React.ReactNode> = {
    agents: (
      <div className="space-y-3 font-mono text-xs">
        {["Ingest", "Plan", "Execute", "Verify"].map((step, i) => (
          <div key={step} className="flex items-center gap-3">
            <span className="w-6 h-6 border border-accent/50 flex items-center justify-center text-accent">{i + 1}</span>
            <span className="text-muted">{step}</span>
            {i < 3 && <span className="flex-1 border-t border-dashed border-border" />}
          </div>
        ))}
      </div>
    ),
    knowledge: (
      <div className="relative h-40">
        {[
          [50, 30], [120, 80], [200, 40], [280, 90], [160, 120],
        ].map(([x, y], i) => (
          <div key={i} className="absolute w-2 h-2 rounded-full bg-accent" style={{ left: x, top: y }} />
        ))}
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 320 160">
          <line x1="50" y1="30" x2="120" y2="80" stroke="#4A9EFF" strokeWidth="0.5" opacity="0.4" />
          <line x1="120" y1="80" x2="200" y2="40" stroke="#4A9EFF" strokeWidth="0.5" opacity="0.4" />
          <line x1="200" y1="40" x2="280" y2="90" stroke="#4A9EFF" strokeWidth="0.5" opacity="0.4" />
          <line x1="120" y1="80" x2="160" y2="120" stroke="#4A9EFF" strokeWidth="0.5" opacity="0.4" />
        </svg>
      </div>
    ),
    reasoning: (
      <div className="space-y-2 font-mono text-xs text-muted">
        <p><span className="text-accent">→</span> Analyzing query context...</p>
        <p><span className="text-accent">→</span> Retrieving 12 relevant facts</p>
        <p><span className="text-accent">→</span> Applying reasoning chain (4 steps)</p>
        <p className="text-foreground"><span className="text-accent">✓</span> Confidence: 94.2%</p>
      </div>
    ),
    automation: (
      <div className="space-y-2">
        {[
          { task: "Sync CRM records", status: "complete" },
          { task: "Generate report", status: "running" },
          { task: "Notify stakeholders", status: "pending" },
        ].map((t) => (
          <div key={t.task} className="flex items-center justify-between text-xs font-mono border border-border px-3 py-2">
            <span className="text-muted">{t.task}</span>
            <span className={t.status === "complete" ? "text-accent" : t.status === "running" ? "text-foreground" : "text-border"}>
              {t.status}
            </span>
          </div>
        ))}
      </div>
    ),
    observability: (
      <div className="space-y-3">
        <div className="flex justify-between text-xs font-mono text-muted">
          <span>Latency p99</span>
          <span className="text-foreground">142ms</span>
        </div>
        <div className="h-16 flex items-end gap-1">
          {[40, 65, 45, 80, 55, 70, 50, 90, 60, 75].map((h, i) => (
            <div key={i} className="flex-1 bg-accent/30" style={{ height: `${h}%` }} />
          ))}
        </div>
        <div className="flex justify-between text-xs font-mono text-muted">
          <span>Uptime</span>
          <span className="text-accent">99.97%</span>
        </div>
      </div>
    ),
  };

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={activeId}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.3 }}
        className="h-full"
      >
        {visuals[activeId]}
      </motion.div>
    </AnimatePresence>
  );
}

export function PlatformShowcase() {
  const [active, setActive] = useState<string>(PLATFORM_FEATURES[0].id);

  const activeFeature = PLATFORM_FEATURES.find((f) => f.id === active)!;

  return (
    <Section id="platform">
      <Container>
        <SectionHeader
          label="Platform"
          title="One platform. Infinite intelligence."
          description="From agent orchestration to model monitoring — everything you need to deploy cognitive AI at enterprise scale."
        />

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          <div className="space-y-2">
            {PLATFORM_FEATURES.map((feature) => (
              <button
                key={feature.id}
                type="button"
                onClick={() => setActive(feature.id)}
                className={`w-full text-left p-6 border transition-all duration-300 ${
                  active === feature.id
                    ? "border-accent/50 bg-accent/5"
                    : "border-border hover:border-foreground/20"
                }`}
              >
                <h3 className="text-lg font-medium">{feature.title}</h3>
                {active === feature.id && (
                  <motion.p
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    className="mt-2 text-sm text-muted"
                  >
                    {feature.description}
                  </motion.p>
                )}
              </button>
            ))}
          </div>

          <div className="border border-border bg-surface-elevated p-8 md:p-12 glow-accent scanline relative min-h-[320px] flex flex-col justify-center">
            <p className="text-xs font-mono uppercase tracking-widest text-accent mb-6">
              {activeFeature.title}
            </p>
            <PlatformVisual activeId={active} />
          </div>
        </div>
      </Container>
    </Section>
  );
}
