import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { PageHero, ContentSection, FeatureGrid } from "@/components/ui/PageLayout";

export const metadata: Metadata = buildMetadata({
  title: "Electric Fleets",
  description: "Range optimization, charging orchestration, battery lifecycle management and V2G integration for electric vehicle fleets.",
  path: "/solutions/electric-fleets/",
});

const features = [
  { title: "Range Optimization", description: "AI-powered route planning that maximizes range while meeting delivery schedules." },
  { title: "Charging Orchestration", description: "Smart charging schedules that minimize cost and maximize fleet availability." },
  { title: "Battery Lifecycle", description: "State-of-health monitoring, degradation forecasting and second-life planning." },
  { title: "V2G Integration", description: "Vehicle-to-grid capabilities for energy arbitrage and grid stability services." },
];

export default function ElectricFleetsPage() {
  return (
    <>
      <PageHero label="Electric Fleets" title="Electrify with intelligence." description="Optimize every aspect of your electric fleet from charging to battery health to total cost of ownership." />
      <ContentSection><FeatureGrid items={features} /></ContentSection>
    </>
  );
}
