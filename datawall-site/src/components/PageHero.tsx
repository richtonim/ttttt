import Link from "next/link";
import { FadeIn } from "./FadeIn";

type PageHeroProps = {
  title: string;
  subtitle?: string;
  eyebrow?: string;
  cta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
};

export function PageHero({ title, subtitle, eyebrow, cta, secondaryCta }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden border-b border-white/5 py-24 md:py-32">
      <div className="grid-bg absolute inset-0 opacity-30" aria-hidden="true" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <FadeIn>
          {eyebrow && (
            <p className="mb-6 text-sm font-medium uppercase tracking-widest text-electric">{eyebrow}</p>
          )}
          <h1 className="section-title font-medium text-white">{title}</h1>
          {subtitle && (
            <p className="mt-6 max-w-2xl text-lg text-muted md:text-xl">{subtitle}</p>
          )}
          {(cta || secondaryCta) && (
            <div className="mt-10 flex flex-wrap gap-4">
              {cta && <Link href={cta.href} className="btn-primary">{cta.label}</Link>}
              {secondaryCta && <Link href={secondaryCta.href} className="btn-secondary">{secondaryCta.label}</Link>}
            </div>
          )}
        </FadeIn>
      </div>
    </section>
  );
}

type ContentSectionProps = {
  title: string;
  children: React.ReactNode;
};

export function ContentSection({ title, children }: ContentSectionProps) {
  return (
    <section className="border-b border-white/5 py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <FadeIn>
          <h2 className="subsection-title mb-8 font-medium text-white">{title}</h2>
          <div className="prose prose-invert max-w-none text-muted prose-p:text-lg prose-p:leading-relaxed">
            {children}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

type FeatureGridProps = {
  features: { title: string; description: string }[];
};

export function FeatureGrid({ features }: FeatureGridProps) {
  return (
    <section className="border-b border-white/5 py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, i) => (
            <FadeIn key={feature.title} delay={i * 0.1}>
              <div className="border-l border-electric/30 pl-6">
                <h3 className="text-xl font-medium text-white">{feature.title}</h3>
                <p className="mt-3 text-muted">{feature.description}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
