"use client";

import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/lib/animations";

export function FinalCTA() {
  return (
    <section className="relative bg-soma-black text-white py-32 md:py-40 lg:py-48 overflow-hidden">
      {/* Animated data trail */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <svg className="w-full h-full opacity-10" viewBox="0 0 1200 400">
          <path
            d="M 0 200 Q 300 150 600 200 T 1200 200"
            stroke="#00D4FF"
            strokeWidth="1"
            fill="none"
            className="animate-marquee"
          />
          <path
            d="M 0 250 Q 400 200 800 250 T 1200 250"
            stroke="#FFFFFF"
            strokeWidth="0.5"
            fill="none"
            opacity="0.3"
          />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-20 text-center">
        <FadeIn>
          <h2 className="text-display-1 font-bold text-white mb-8">
            Build what moves next.
          </h2>
          <p className="text-lg md:text-xl text-soma-gray-400 max-w-2xl mx-auto mb-12">
            Bring AI-native intelligence to your vehicles, fleets and mobility
            products.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/register/" variant="white">
              Start Building
            </Button>
            <Button href="/contact/" variant="outline" className="!text-white !border-soma-gray-500 hover:!border-white">
              Contact SOMA
            </Button>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
