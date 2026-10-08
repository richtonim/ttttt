import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { PageHero, ContentSection, FeatureGrid } from "@/components/ui/PageLayout";

export const metadata: Metadata = buildMetadata({
  title: "Fleet Intelligence",
  description: "AI-powered fleet intelligence for route optimization, driver coaching, energy management and utilization analytics.",
  path: "/platform/fleet-intelligence/",
});

const features = [
  { title: "Route Optimization", description: "Dynamic routing that accounts for traffic, weather, charging infrastructure and delivery windows." },
  { title: "Driver Coaching", description: "Real-time feedback and post-trip analysis to improve safety and efficiency." },
  { title: "Utilization Analytics", description: "Fleet utilization dashboards with idle time, deadhead miles and capacity planning." },
  { title: "Carbon Reporting", description: "Automated emissions tracking and sustainability reporting for ESG compliance." },
];

export default function FleetIntelligencePage() {
  return (
    <>
      <PageHero label="Fleet Intelligence" title="Smarter fleets. Better outcomes." description="Optimize every aspect of fleet operations with AI-driven intelligence and real-time analytics." />
      <ContentSection><FeatureGrid items={features} /></ContentSection>
    </>
  );
}
