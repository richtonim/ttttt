"use client";

import { USE_CASES } from "@/lib/constants";
import { FadeIn, StaggerContainer, StaggerItem } from "../animations";

export function UseCases() {
  return (
    <section className="py-32 lg:py-40 bg-qualia-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <FadeIn>
          <p className="text-sm tracking-[0.15em] uppercase text-qualia-gray-500 mb-4">
            Applications
          </p>
          <h2 className="text-heading font-semibold text-qualia-black mb-20">
            Intelligence in action
          </h2>
        </FadeIn>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-qualia-gray-200">
          {USE_CASES.map((useCase, i) => (
            <StaggerItem key={useCase.title}>
              <div
                className={`bg-qualia-gray-50 p-8 lg:p-10 h-full hover:bg-white transition-colors ${
                  i === USE_CASES.length - 1 && USE_CASES.length % 3 !== 0
                    ? "lg:col-span-3 lg:max-w-md"
                    : ""
                }`}
              >
                <span className="text-xs text-qualia-accent font-mono">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="text-xl lg:text-2xl font-semibold text-qualia-black mt-4 mb-3">
                  {useCase.title}
                </h3>
                <p className="text-body text-qualia-gray-600">{useCase.description}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
