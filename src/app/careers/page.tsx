import { PageLayout } from "@/components/PageLayout";
import { FadeIn } from "@/components/animations";
import { Button } from "@/components/Button";
import { createMetadata } from "@/lib/seo";
import { MapPin } from "lucide-react";

export const metadata = createMetadata({
  title: "Careers",
  description:
    "Join Qualia — build AI systems that understand context, perception and human intent. View open positions.",
  path: "/careers/",
});

const positions = [
  {
    title: "Senior ML Engineer — Perception",
    team: "Engineering",
    location: "Remote",
    type: "Full-time",
  },
  {
    title: "Research Scientist — Contextual Reasoning",
    team: "Research",
    location: "San Francisco / Remote",
    type: "Full-time",
  },
  {
    title: "Staff Software Engineer — Platform",
    team: "Engineering",
    location: "Remote",
    type: "Full-time",
  },
  {
    title: "Product Designer — AI Experiences",
    team: "Design",
    location: "Remote",
    type: "Full-time",
  },
  {
    title: "Developer Advocate",
    team: "Developer Relations",
    location: "Remote",
    type: "Full-time",
  },
  {
    title: "Head of Trust & Safety",
    team: "Operations",
    location: "San Francisco",
    type: "Full-time",
  },
];

const benefits = [
  "Competitive salary & equity",
  "Remote-first culture",
  "Health, dental & vision",
  "Learning & research budget",
  "Flexible PTO",
  "Top-tier equipment",
];

export default function CareersPage() {
  return (
    <PageLayout>
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <FadeIn>
            <p className="text-sm tracking-[0.15em] uppercase text-qualia-gray-500 mb-4">Careers</p>
            <h1 className="text-display font-semibold text-qualia-black mb-6">
              Build the future
              <br />
              of understanding
            </h1>
            <p className="text-body-lg text-qualia-gray-600 max-w-2xl">
              Join a team of researchers, engineers and designers building AI systems that
              truly comprehend context, perception and human intent.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="py-20 bg-qualia-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-heading font-semibold text-qualia-black mb-12">Open positions</h2>
          <div className="space-y-4">
            {positions.map((position) => (
              <article
                key={position.title}
                className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-6 bg-white border border-qualia-gray-200 rounded-xl hover:border-qualia-black/20 transition-colors"
              >
                <div>
                  <h3 className="text-lg font-semibold text-qualia-black">{position.title}</h3>
                  <div className="flex flex-wrap items-center gap-3 mt-2 text-sm text-qualia-gray-500">
                    <span>{position.team}</span>
                    <span>·</span>
                    <span className="flex items-center gap-1">
                      <MapPin size={14} />
                      {position.location}
                    </span>
                    <span>·</span>
                    <span>{position.type}</span>
                  </div>
                </div>
                <Button href="/contact/" variant="secondary" size="sm">
                  Apply
                </Button>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-heading font-semibold text-qualia-black mb-12">Benefits</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {benefits.map((benefit) => (
              <div
                key={benefit}
                className="p-6 border border-qualia-gray-200 rounded-xl text-center"
              >
                <p className="text-body font-medium text-qualia-black">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
