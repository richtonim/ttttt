import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { PageHero, ContentSection, FeatureGrid } from "@/components/ui/PageLayout";

export const metadata: Metadata = buildMetadata({
  title: "AI Engine",
  description: "Entropy's proprietary AI decision engine for vehicle perception, prediction, planning and autonomous intelligence.",
  path: "/technology/ai-engine/",
});

const features = [
  { title: "Perception Models", description: "Multi-modal sensor fusion with state-of-the-art object detection and scene understanding." },
  { title: "Prediction Engine", description: "Probabilistic forecasting of vehicle behavior, traffic patterns and environmental changes." },
  { title: "Planning Algorithms", description: "Constraint-based trajectory planning with safety guarantees and real-time replanning." },
  { title: "Explainable AI", description: "Full model interpretability with decision logs and confidence scoring for every inference." },
];

export default function AIEnginePage() {
  return (
    <>
      <PageHero label="AI Engine" title="Intelligence at the core." description="Proprietary ML models trained on billions of miles of driving data, optimized for safety-critical vehicle decisions." />
      <ContentSection><FeatureGrid items={features} /></ContentSection>
    </>
  );
}
