"use client";

import { FadeIn } from "../animations";

export function Introduction() {
  return (
    <section className="py-32 lg:py-40 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-4xl">
          <FadeIn>
            <h2 className="text-display font-semibold text-qualia-black mb-8">
              Beyond data.
              <br />
              Toward understanding.
            </h2>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-body-lg text-qualia-gray-600 max-w-2xl">
              Qualia transforms language, images, sound, behavior and real-time data into
              actionable intelligence. We don&apos;t just process information — we comprehend
              context, perceive nuance and understand human intent at a fundamental level.
            </p>
          </FadeIn>
        </div>

        <FadeIn delay={0.3}>
          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-qualia-gray-200 pt-12">
            {["Language", "Vision", "Audio", "Behavior"].map((modality) => (
              <div key={modality} className="text-center md:text-left">
                <div className="w-2 h-2 rounded-full bg-qualia-accent mb-4 mx-auto md:mx-0" />
                <p className="text-lg font-medium text-qualia-black">{modality}</p>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
