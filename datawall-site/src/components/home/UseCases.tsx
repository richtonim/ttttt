import Link from "next/link";
import { FadeIn } from "@/components/FadeIn";

const useCases = [
  { title: "Enterprise AI", href: "/solutions/enterprise-ai/" },
  { title: "Financial Services", href: "/solutions/financial-services/" },
  { title: "Healthcare Data", href: "/solutions/healthcare/" },
  { title: "SaaS Platforms", href: "/solutions/saas/" },
  { title: "Cloud Infrastructure", href: "/solutions/cloud-infrastructure/" },
  { title: "Regulated Industries", href: "/solutions/regulated-industries/" },
];

export function UseCases() {
  return (
    <section className="border-b border-white/5 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <FadeIn>
          <p className="text-sm font-medium uppercase tracking-widest text-electric">Use Cases</p>
          <h2 className="section-title mt-4 font-medium text-white">Built for every industry.</h2>
        </FadeIn>
        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {useCases.map((item, i) => (
            <FadeIn key={item.title} delay={i * 0.05}>
              <Link
                href={item.href}
                className="group flex items-center justify-between border border-white/10 p-6 transition-all hover:border-electric/30 hover:bg-white/[0.02]"
              >
                <span className="text-lg font-medium text-white group-hover:text-electric">{item.title}</span>
                <span className="text-muted transition-transform group-hover:translate-x-1 group-hover:text-electric">&rarr;</span>
              </Link>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
