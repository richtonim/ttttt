import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { PageHero, ContentSection, FeatureGrid } from "@/components/ui/PageLayout";

export const metadata: Metadata = buildMetadata({
  title: "Autonomous Vehicles",
  description: "Safety-critical perception, planning, validation and disengagement analysis for Level 3-5 autonomous vehicle programs.",
  path: "/solutions/autonomous-vehicles/",
});

const features = [
  { title: "Perception Pipeline", description: "Multi-sensor fusion with lidar, camera and radar for robust environmental understanding." },
  { title: "Planning & Control", description: "Trajectory planning with safety constraints and real-time replanning capabilities." },
  { title: "Validation Suite", description: "Simulation-based testing, scenario generation and regression analysis for AV systems." },
  { title: "Disengagement Analysis", description: "Automated logging and root-cause analysis of autonomous disengagement events." },
];

export default function AutonomousVehiclesPage() {
  return (
    <>
      <PageHero label="Autonomous Vehicles" title="Safety-critical intelligence." description="Power your autonomous vehicle program with enterprise-grade perception, planning and validation infrastructure." />
      <ContentSection><FeatureGrid items={features} /></ContentSection>
    </>
  );
}
