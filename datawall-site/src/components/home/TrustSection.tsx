import Link from "next/link";
import { FadeIn } from "@/components/FadeIn";

const trustItems = [
  { title: "Zero Trust Architecture", href: "/security/zero-trust/" },
  { title: "End-to-end Encryption", href: "/security/encryption/" },
  { title: "Role-based Access", href: "/security/rbac/" },
  { title: "Complete Audit Trails", href: "/security/audit-trails/" },
  { title: "Privacy by Design", href: "/security/privacy-by-design/" },
  { title: "Compliance Automation", href: "/security/compliance-automation/" },
];

export function TrustSection() {
  return (
    <section className="border-b border-white/5 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <FadeIn>
          <p className="text-sm font-medium uppercase tracking-widest text-electric">Trust & Compliance</p>
          <h2 className="section-title mt-4 font-medium text-white">Enterprise-grade security, by design.</h2>
        </FadeIn>
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {trustItems.map((item, i) => (
            <FadeIn key={item.title} delay={i * 0.05}>
              <Link
                href={item.href}
                className="block border border-white/10 p-8 transition-colors hover:border-secure/30 hover:bg-white/[0.02]"
              >
                <h3 className="text-lg font-medium text-white">{item.title}</h3>
              </Link>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
