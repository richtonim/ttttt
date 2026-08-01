import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { PageHero, ContentSection } from "@/components/ui/PageLayout";

export const metadata: Metadata = buildMetadata({
  title: "Press",
  description: "Entropy press releases, media kit and company news for journalists and media professionals.",
  path: "/company/press/",
});

const press = [
  { date: "January 2026", title: "Entropy Launches AI Vehicle Intelligence Platform", desc: "Startup unveils unified platform for autonomous decision-making and fleet optimization." },
  { date: "January 2026", title: "Entropy Raises Seed Funding", desc: "Company secures funding to accelerate development of edge AI for autonomous vehicles." },
  { date: "February 2026", title: "Entropy Partners with Leading EV Manufacturer", desc: "Strategic partnership to embed Entropy intelligence into next-generation electric vehicles." },
];

export default function PressPage() {
  return (
    <>
      <PageHero label="Press" title="News & media." description="Latest news, press releases and media resources from Entropy." />
      <ContentSection>
        <div className="space-y-8">
          {press.map((item) => (
            <article key={item.title} className="p-8 rounded-2xl border border-white/5">
              <time className="text-xs font-mono text-accent-blue uppercase tracking-wider">{item.date}</time>
              <h3 className="text-xl font-semibold text-white mt-3 mb-2">{item.title}</h3>
              <p className="text-sm text-white/40">{item.desc}</p>
            </article>
          ))}
        </div>
        <div className="mt-16 p-8 rounded-2xl border border-white/5">
          <h3 className="text-lg font-semibold text-white mb-2">Media inquiries</h3>
          <p className="text-sm text-white/40">Contact <a href="mailto:press@entropy.autos" className="text-accent-blue hover:underline">press@entropy.autos</a> for press inquiries and media kit requests.</p>
        </div>
      </ContentSection>
    </>
  );
}
