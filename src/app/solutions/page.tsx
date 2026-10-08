import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { PageHero, ContentSection, FeatureGrid } from "@/components/ui/PageLayout";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = buildMetadata({
  title: "Solutions",
  description: "Entropy solutions for automotive manufacturers, autonomous vehicles, electric fleets, logistics and smart mobility.",
  path: "/solutions/",
});

const solutions = [
  { title: "Automotive Manufacturers", description: "Embed intelligence into production vehicles with OEM-grade data pipelines and over-the-air updates." },
  { title: "Autonomous Vehicles", description: "Safety-critical perception, planning, validation and disengagement analysis for AV programs." },
  { title: "Electric Fleets", description: "Range optimization, charging orchestration, battery lifecycle management and grid integration." },
  { title: "Logistics & Delivery", description: "Last-mile routing, driver coaching, delivery SLA optimization and proof-of-delivery." },
  { title: "Smart Mobility", description: "MaaS platforms, ride-sharing intelligence, urban mobility analytics and multimodal integration." },
  { title: "Insurance & Risk", description: "Usage-based insurance, risk scoring and claims automation powered by driving behavior data." },
];

export default function SolutionsPage() {
  return (
    <>
      <PageHero label="Solutions" title="Intelligence for every industry." description="From automotive OEMs to delivery fleets, Entropy powers the next generation of intelligent mobility." />
      <ContentSection>
        <FeatureGrid items={solutions} />
        <div className="mt-16 text-center">
          <Button href="/contact/" variant="primary" size="large">Discuss your use case</Button>
        </div>
      </ContentSection>
    </>
  );
}
