import { FadeIn } from "@/components/FadeIn";
import { ServerArrayVisual } from "@/components/DataVisuals";

export function BrandIntro() {
  return (
    <section className="border-b border-white/5 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <FadeIn>
            <h2 className="section-title font-medium text-white">
              AI moves fast.
              <br />
              <span className="text-muted">Your data protection should move faster.</span>
            </h2>
            <p className="mt-8 text-lg text-muted md:text-xl">
              Datawall unifies data discovery, risk identification, permission management,
              and threat response in a single intelligent control layer — built for the pace
              of modern AI operations.
            </p>
            <ul className="mt-10 space-y-4">
              {[
                "Automated data discovery across cloud, on-prem, and AI pipelines",
                "Real-time risk scoring for models, datasets, and workflows",
                "Unified policy engine for access, privacy, and compliance",
                "Automated threat response with full audit visibility",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-muted">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-electric" />
                  {item}
                </li>
              ))}
            </ul>
          </FadeIn>
          <FadeIn delay={0.2}>
            <ServerArrayVisual className="rounded-2xl border border-white/10" />
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
