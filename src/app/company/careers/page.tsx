import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { PageHero, ContentSection } from "@/components/ui/PageLayout";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = buildMetadata({
  title: "Careers",
  description: "Join Entropy and help build the intelligence layer for the future of autonomous mobility.",
  path: "/company/careers/",
});

const openings = [
  { title: "Senior ML Engineer — Perception", team: "AI", location: "San Francisco / Remote" },
  { title: "Staff Backend Engineer — Data Platform", team: "Engineering", location: "San Francisco / Remote" },
  { title: "Product Manager — Fleet Intelligence", team: "Product", location: "San Francisco" },
  { title: "Solutions Engineer — Enterprise", team: "Sales", location: "Remote (US/EU)" },
  { title: "DevRel Engineer", team: "Developers", location: "Remote" },
];

export default function CareersPage() {
  return (
    <>
      <PageHero label="Careers" title="Build what moves next." description="Join a team of engineers, researchers and designers building the future of intelligent mobility." />
      <ContentSection title="Open positions">
        <div className="space-y-0 border-t border-white/5">
          {openings.map((job) => (
            <div key={job.title} className="flex items-center justify-between py-8 border-b border-white/5">
              <div>
                <h3 className="text-lg font-semibold text-white">{job.title}</h3>
                <p className="text-sm text-white/40 mt-1">{job.team} · {job.location}</p>
              </div>
              <Button href="/contact/" variant="secondary" size="default">Apply</Button>
            </div>
          ))}
        </div>
      </ContentSection>
    </>
  );
}
