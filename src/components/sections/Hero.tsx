"use client";

import { Button } from "../Button";
import { GridBackground } from "../GridBackground";
import { FadeIn } from "../animations";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white">
      <GridBackground />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-32 pb-20 text-center">
        <FadeIn delay={0.1}>
          <p className="text-sm md:text-base tracking-[0.2em] uppercase text-qualia-gray-500 mb-8">
            Qualia · qualia.lat
          </p>
        </FadeIn>

        <FadeIn delay={0.2}>
          <h1 className="text-hero font-semibold text-qualia-black mb-8">
            Intelligence,
            <br />
            deeply understood.
          </h1>
        </FadeIn>

        <FadeIn delay={0.35}>
          <p className="text-body-lg md:text-xl text-qualia-gray-600 max-w-2xl mx-auto mb-12">
            Qualia builds AI systems that understand context, perception and human intent.
          </p>
        </FadeIn>

        <FadeIn delay={0.5}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button href="/platform/" size="lg">
              Explore Qualia
            </Button>
            <Button href="/contact/" variant="secondary" size="lg">
              Talk to Us
            </Button>
          </div>
        </FadeIn>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce" aria-hidden="true">
        <div className="w-px h-12 bg-gradient-to-b from-transparent via-qualia-gray-400 to-transparent" />
      </div>
    </section>
  );
}
