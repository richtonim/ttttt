import Link from "next/link";
import { FadeIn } from "@/components/FadeIn";

const code = `import { Datawall } from '@datawall/sdk';

const client = new Datawall({
  apiKey: process.env.DATAWALL_API_KEY,
});

// Monitor data access in real time
const events = await client.events.stream({
  filters: { severity: 'high' },
});

events.on('threat.detected', (event) => {
  client.respond.autoContain(event.id);
});`;

export function DevelopersSection() {
  return (
    <section className="border-b border-white/5 bg-surface py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <FadeIn>
            <p className="text-sm font-medium uppercase tracking-widest text-electric">Developers</p>
            <h2 className="section-title mt-4 font-medium text-white">Integrate in minutes.</h2>
            <p className="mt-6 text-lg text-muted">
              RESTful APIs, native SDKs, webhooks, SIEM integrations, and cloud platform
              connectors — with real-time event streaming built in.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              {["SDK", "Webhooks", "SIEM", "AWS", "Azure", "GCP"].map((tag) => (
                <span key={tag} className="rounded-full border border-white/10 px-4 py-1.5 text-sm text-muted">
                  {tag}
                </span>
              ))}
            </div>
            <Link href="/developers/" className="btn-primary mt-10 inline-flex">
              View Documentation
            </Link>
          </FadeIn>
          <FadeIn delay={0.2}>
            <pre className="overflow-x-auto rounded-2xl border border-white/10 bg-[#0a0a0a] p-6 text-sm leading-relaxed">
              <code className="font-mono text-white/80">{code}</code>
            </pre>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
