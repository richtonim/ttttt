"use client";

import { useEffect, useRef } from "react";
import { FadeIn } from "@/lib/animations";
import { Section, SectionTitle } from "@/components/ui/Section";
import { WORKFLOW_STEPS } from "@/lib/constants";

export function Workflow() {
  const pathRef = useRef<SVGPathElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion || !pathRef.current) return;

    const path = pathRef.current;
    const length = path.getTotalLength();
    path.style.strokeDasharray = `${length}`;
    path.style.strokeDashoffset = `${length}`;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            path.style.transition = "stroke-dashoffset 2s ease-out";
            path.style.strokeDashoffset = "0";
          }
        });
      },
      { threshold: 0.3 }
    );

    const container = path.closest("section");
    if (container) observer.observe(container);
    return () => observer.disconnect();
  }, []);

  return (
    <Section className="bg-soma-gray-50">
      <SectionTitle
        title={
          <>
            From raw signals
            <br />
            to intelligent action.
          </>
        }
        className="mb-20"
      />

      <div className="relative">
        {/* Connection path - desktop */}
        <svg
          className="hidden lg:block absolute top-12 left-0 w-full h-4"
          viewBox="0 0 1000 20"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path
            ref={pathRef}
            d="M 50 10 L 250 10 L 450 10 L 650 10 L 850 10 L 950 10"
            stroke="#0A0A0A"
            strokeWidth="1"
            fill="none"
            opacity="0.15"
          />
        </svg>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-6">
          {WORKFLOW_STEPS.map((step, i) => (
            <FadeIn key={step.step} delay={i * 0.15}>
              <div className="relative">
                <span className="font-mono text-xs text-soma-accent mb-4 block">
                  {step.step}
                </span>
                <h3 className="text-xl font-semibold text-soma-black mb-3">
                  {step.title}
                </h3>
                <p className="text-sm text-soma-gray-400 leading-relaxed">
                  {step.description}
                </p>
                <div className="mt-4 w-2 h-2 rounded-full bg-soma-black" />
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </Section>
  );
}
