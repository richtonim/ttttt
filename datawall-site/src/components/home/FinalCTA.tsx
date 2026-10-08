import Link from "next/link";
import { DataWallVisual } from "@/components/DataVisuals";
import { FadeIn } from "@/components/FadeIn";

export function FinalCTA() {
  return (
    <section className="relative overflow-hidden py-32 md:py-40">
      <DataWallVisual />
      <div className="relative z-10 mx-auto max-w-7xl px-6 text-center lg:px-8">
        <FadeIn>
          <h2 className="section-title font-medium text-white">
            Build AI without
            <br />
            <span className="text-gradient-electric">losing control.</span>
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg text-muted">
            Join forward-thinking enterprises securing their AI infrastructure with Datawall.
          </p>
          <div className="mt-12 flex flex-wrap justify-center gap-4">
            <Link href="/register/" className="btn-primary">
              Start Securing
            </Link>
            <Link href="/contact/" className="btn-secondary">
              Contact Datawall
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
