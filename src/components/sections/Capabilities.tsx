"use client";

import { CAPABILITIES } from "@/lib/constants";
import { FadeIn, StaggerContainer, StaggerItem } from "../animations";

export function Capabilities() {
  return (
    <section id="capabilities" className="py-32 lg:py-40 bg-qualia-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <FadeIn>
          <p className="text-sm tracking-[0.15em] uppercase text-qualia-gray-500 mb-4">
            Core Capabilities
          </p>
          <h2 className="text-heading font-semibold text-qualia-black mb-20">
            Intelligence at every layer
          </h2>
        </FadeIn>

        <StaggerContainer className="space-y-0">
          {CAPABILITIES.map((cap) => (
            <StaggerItem key={cap.number}>
              <div className="group flex flex-col md:flex-row md:items-center gap-6 md:gap-12 py-12 border-t border-qualia-gray-200 hover:bg-white/50 transition-colors px-4 -mx-4">
                <span className="text-5xl md:text-7xl font-light text-qualia-gray-200 group-hover:text-qualia-accent/30 transition-colors tabular-nums">
                  {cap.number}
                </span>
                <div className="flex-1">
                  <h3 className="text-2xl md:text-3xl font-semibold text-qualia-black mb-3">
                    {cap.title}
                  </h3>
                  <p className="text-body text-qualia-gray-600 max-w-xl">
                    {cap.description}
                  </p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
