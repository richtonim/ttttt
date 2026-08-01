import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { PageHero, ContentSection, FeatureGrid } from "@/components/ui/PageLayout";

const pages = [
  { slug: "manufacturers", title: "Automotive Manufacturers", desc: "Embed AI intelligence into production vehicles with OEM-grade data pipelines, OTA updates and homologation support." },
  { slug: "autonomous-vehicles", title: "Autonomous Vehicles", desc: "Safety-critical perception, planning, validation and disengagement analysis for Level 3-5 autonomous programs." },
  { slug: "electric-fleets", title: "Electric Fleets", desc: "Range optimization, charging orchestration, battery lifecycle management and V2G integration for electric fleets." },
  { slug: "logistics", title: "Logistics & Delivery", desc: "Last-mile routing, driver coaching, delivery SLA optimization and real-time proof-of-delivery." },
  { slug: "smart-mobility", title: "Smart Mobility", desc: "MaaS platforms, ride-sharing intelligence, urban mobility analytics and multimodal transportation integration." },
];

const pageData = pages.find((p) => p.slug === "manufacturers")!;

export const metadata: Metadata = buildMetadata({
  title: pageData.title,
  description: pageData.desc,
  path: "/solutions/manufacturers/",
});

const features = [
  { title: "OEM Integration", description: "Seamless integration with vehicle ECUs, infotainment systems and manufacturing lines." },
  { title: "OTA Intelligence", description: "Over-the-air model updates with A/B testing and gradual rollout capabilities." },
  { title: "Homologation Support", description: "Compliance tooling for regulatory requirements across global markets." },
  { title: "Production Analytics", description: "Quality monitoring and predictive analytics for manufacturing processes." },
];

export default function ManufacturersPage() {
  return (
    <>
      <PageHero label="Solutions" title={pageData.title} description={pageData.desc} />
      <ContentSection><FeatureGrid items={features} /></ContentSection>
    </>
  );
}
