"use client";

import { METRICS } from "@/lib/constants";
import { FadeIn, StaggerContainer, StaggerItem, CountUp } from "../animations";

export function Metrics() {
  return (
    <section className="py-32 lg:py-40 bg-qualia-black text-white" aria-label="Key metrics">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <FadeIn>
          <p className="text-sm tracking-[0.15em] uppercase text-qualia-gray-500 mb-20 text-center">
            Performance at scale
          </p>
        </FadeIn>

        <StaggerContainer className="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {METRICS.map((metric) => (
            <StaggerItem key={metric.label}>
              <div className="text-center">
                <CountUp
                  value={metric.value}
                  className="block text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight mb-3"
                />
                <p className="text-sm text-qualia-gray-400">{metric.label}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
