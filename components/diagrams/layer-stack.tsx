"use client";

import { cn } from "@/lib/utils";

const layers = [
  { name: "Applications", delay: "0s" },
  { name: "AI Agents", delay: "0.5s" },
  { name: "Workflow Layer", delay: "1s" },
  { name: "Knowledge Layer", delay: "1.5s" },
  { name: "Model Gateway", delay: "2s" },
  { name: "AI Models", delay: "2.5s" },
];

export function LayerStack({ className }: { className?: string }) {
  return (
    <div className={cn("relative flex flex-col items-center gap-3", className)}>
      {layers.map((layer, i) => (
        <div key={layer.name} className="relative w-full max-w-sm">
          {i < layers.length - 1 && (
            <div className="absolute left-1/2 top-full z-0 h-3 w-px -translate-x-1/2 bg-gradient-to-b from-brand/40 to-brand/10" />
          )}
          <div
            className={cn(
              "relative z-10 rounded-card border border-border/80 bg-white/60 px-6 py-3 text-center backdrop-blur-sm",
              "motion-safe:animate-float shadow-card",
            )}
            style={{ animationDelay: layer.delay }}
          >
            <span className="text-sm font-medium text-foreground">{layer.name}</span>
          </div>
        </div>
      ))}
      <p className="mt-2 text-xs text-muted">Illustrative architecture</p>
    </div>
  );
}
