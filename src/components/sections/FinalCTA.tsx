"use client";

import { Button } from "../Button";
import { FadeIn } from "../animations";

export function FinalCTA() {
  return (
    <section className="py-32 lg:py-48 bg-qualia-black text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <FadeIn>
          <h2 className="text-display font-semibold mb-8">
            Build intelligence
            <br />
            that understands.
          </h2>
        </FadeIn>
        <FadeIn delay={0.15}>
          <p className="text-body-lg text-qualia-gray-400 max-w-xl mx-auto mb-12">
            Join the next generation of AI builders creating systems that truly comprehend
            context, perception and human intent.
          </p>
        </FadeIn>
        <FadeIn delay={0.3}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button href="/register/" size="lg" className="bg-white text-qualia-black hover:bg-qualia-gray-100">
              Start Building
            </Button>
            <Button href="/contact/" variant="outline" size="lg">
              Contact Qualia
            </Button>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
