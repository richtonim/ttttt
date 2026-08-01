"use client";

import { FadeIn } from "@/lib/animations";
import { Section, SectionTitle } from "@/components/ui/Section";
import { TECHNOLOGY_STACK } from "@/lib/constants";

export function Technology() {
  return (
    <Section className="relative overflow-hidden">
      {/* Neural network background */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <svg className="w-full h-full opacity-[0.03]" viewBox="0 0 800 600">
          {Array.from({ length: 15 }).map((_, i) => {
            const x1 = 100 + Math.random() * 600;
            const y1 = 50 + Math.random() * 500;
            const x2 = 100 + Math.random() * 600;
            const y2 = 50 + Math.random() * 500;
            return (
              <line
                key={`line-${i}`}
                x1={x1}
                y1={y1}
                x2={x2}
                y2={y2}
                stroke="#0A0A0A"
                strokeWidth="1"
              />
            );
          })}
          {Array.from({ length: 20 }).map((_, i) => (
            <circle
              key={`node-${i}`}
              cx={100 + Math.random() * 600}
              cy={50 + Math.random() * 500}
              r="3"
              fill="#00D4FF"
            />
          ))}
        </svg>
      </div>

      <SectionTitle
        title="Built for automotive-scale AI."
        className="mb-20 relative z-10"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-soma-gray-100 relative z-10">
        {TECHNOLOGY_STACK.map((tech, i) => (
          <FadeIn key={tech.title} delay={i * 0.1}>
            <div className="bg-white p-8 md:p-10 h-full">
              <span className="font-mono text-xs text-soma-accent mb-4 block">
                0{i + 1}
              </span>
              <h3 className="text-xl md:text-2xl font-semibold text-soma-black mb-4">
                {tech.title}
              </h3>
              <p className="text-sm text-soma-gray-400 leading-relaxed">
                {tech.description}
              </p>
            </div>
          </FadeIn>
        ))}
      </div>
    </Section>
  );
}
