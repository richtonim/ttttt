"use client";

import { useEffect, useRef } from "react";
import { FadeIn } from "@/lib/animations";
import { Section } from "@/components/ui/Section";

const FLOW_STEPS = [
  { label: "Vehicle", icon: "◆" },
  { label: "Sensors", icon: "◇" },
  { label: "SOMA AI", icon: "●" },
  { label: "Decision", icon: "◈" },
  { label: "Action", icon: "▲" },
];

export function BrandIntro() {
  const flowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const nodes = entry.target.querySelectorAll("[data-flow-node]");
            nodes.forEach((node, i) => {
              setTimeout(() => {
                node.classList.add("flow-active");
              }, i * 300);
            });
          }
        });
      },
      { threshold: 0.3 }
    );

    if (flowRef.current) observer.observe(flowRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <Section>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        <FadeIn>
          <h2 className="text-display-1 font-semibold text-soma-black mb-8">
            Vehicles generate data.
            <br />
            SOMA turns it into decisions.
          </h2>
          <p className="text-lg md:text-xl text-soma-gray-400 leading-relaxed">
            Modern vehicles produce millions of signals. SOMA unifies sensor
            data, operational information and AI models into one intelligent
            automotive platform.
          </p>
        </FadeIn>

        <div ref={flowRef} className="relative">
          <div className="flex flex-col gap-0">
            {FLOW_STEPS.map((step, i) => (
              <div key={step.label} className="flex items-center gap-6">
                <div
                  data-flow-node
                  className="flow-node flex items-center gap-4 py-5 border-b border-soma-gray-100 w-full transition-all duration-500"
                >
                  <span className="font-mono text-xs text-soma-gray-300 w-6">
                    0{i + 1}
                  </span>
                  <span className="text-soma-gray-200 text-lg transition-colors duration-500 flow-icon">
                    {step.icon}
                  </span>
                  <span className="text-lg font-medium text-soma-gray-300 transition-colors duration-500 flow-label">
                    {step.label}
                  </span>
                  {i < FLOW_STEPS.length - 1 && (
                    <span className="ml-auto font-mono text-xs text-soma-gray-200">
                      →
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        :global(.flow-active) {
          border-color: #0a0a0a !important;
        }
        :global(.flow-active .flow-icon) {
          color: #00d4ff !important;
        }
        :global(.flow-active .flow-label) {
          color: #0a0a0a !important;
        }
      `}</style>
    </Section>
  );
}
