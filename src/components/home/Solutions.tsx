"use client";

import { useState } from "react";
import { FadeIn } from "@/lib/animations";
import { Section, SectionTitle } from "@/components/ui/Section";
import { SOLUTIONS } from "@/lib/constants";

const SOLUTION_IMAGES: Record<string, string> = {
  "automotive-manufacturers": "M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5",
  "autonomous-vehicle-teams": "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z",
  "commercial-fleets": "M1 3h15v13H1zM16 8h4l3 5v5h-7V8z",
  "electric-mobility": "M13 2L3 14h9l-1 8 10-12h-9l1-8z",
  "insurance-risk": "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z",
  "smart-cities": "M3 21h18M5 21V7l7-4 7 4v14",
};

export function Solutions() {
  const [activeSolution, setActiveSolution] = useState(SOLUTIONS[0].id);

  const active = SOLUTIONS.find((s) => s.id === activeSolution) || SOLUTIONS[0];

  return (
    <Section className="border-t border-soma-gray-100">
      <SectionTitle
        title="Designed for every mobility operation."
        className="mb-16"
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
        <div>
          {SOLUTIONS.map((solution) => (
            <button
              key={solution.id}
              type="button"
              onMouseEnter={() => setActiveSolution(solution.id)}
              onFocus={() => setActiveSolution(solution.id)}
              className={`block w-full text-left py-6 border-b border-soma-gray-100 transition-all duration-300 ${
                activeSolution === solution.id
                  ? "text-soma-black"
                  : "text-soma-gray-300 hover:text-soma-gray-500"
              }`}
            >
              <h3
                className={`text-2xl md:text-3xl font-semibold transition-all duration-300 ${
                  activeSolution === solution.id ? "translate-x-2" : ""
                }`}
              >
                {solution.title}
              </h3>
            </button>
          ))}
        </div>

        <FadeIn key={active.id}>
          <div className="relative bg-soma-gray-50 aspect-[4/3] flex items-center justify-center p-12">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              className="w-32 h-32 text-soma-black opacity-10"
            >
              <path d={SOLUTION_IMAGES[active.id]} />
            </svg>
            <div className="absolute bottom-8 left-8 right-8">
              <p className="text-soma-gray-400 leading-relaxed">
                {active.description}
              </p>
            </div>
            {/* Grid overlay */}
            <div
              className="absolute inset-0 opacity-[0.03]"
              style={{
                backgroundImage:
                  "linear-gradient(#0A0A0A 1px, transparent 1px), linear-gradient(90deg, #0A0A0A 1px, transparent 1px)",
                backgroundSize: "40px 40px",
              }}
            />
          </div>
        </FadeIn>
      </div>
    </Section>
  );
}
