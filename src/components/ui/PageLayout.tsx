import { type ReactNode } from "react";

interface PageHeroProps {
  label: string;
  title: string;
  description: string;
  children?: ReactNode;
}

export function PageHero({ label, title, description, children }: PageHeroProps) {
  return (
    <section className="pt-40 pb-20 lg:pt-48 lg:pb-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <p className="text-accent-blue text-sm font-mono tracking-widest uppercase mb-6">{label}</p>
        <h1 className="section-title font-bold text-white max-w-4xl">{title}</h1>
        <p className="mt-8 text-lg text-white/50 max-w-2xl leading-relaxed">{description}</p>
        {children}
      </div>
    </section>
  );
}

interface ContentSectionProps {
  title?: string;
  children: ReactNode;
  className?: string;
}

export function ContentSection({ title, children, className = "" }: ContentSectionProps) {
  return (
    <section className={`py-16 lg:py-24 border-t border-white/5 ${className}`}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {title && (
          <h2 className="subsection-title font-bold text-white mb-12">{title}</h2>
        )}
        {children}
      </div>
    </section>
  );
}

interface FeatureGridProps {
  items: { title: string; description: string }[];
}

export function FeatureGrid({ items }: FeatureGridProps) {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {items.map((item) => (
        <div key={item.title} className="p-8 rounded-2xl border border-white/5">
          <h3 className="text-lg font-semibold text-white mb-3">{item.title}</h3>
          <p className="text-sm text-white/40 leading-relaxed">{item.description}</p>
        </div>
      ))}
    </div>
  );
}
