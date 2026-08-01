import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { PageHero, ContentSection, FeatureGrid } from "@/components/ui/PageLayout";

export const metadata: Metadata = buildMetadata({
  title: "Smart Mobility",
  description: "MaaS platforms, ride-sharing intelligence, urban mobility analytics and multimodal transportation integration.",
  path: "/solutions/smart-mobility/",
});

const features = [
  { title: "MaaS Platform", description: "Unified mobility-as-a-service platform integrating public transit, ride-share and micro-mobility." },
  { title: "Demand Forecasting", description: "ML-powered demand prediction for dynamic pricing and fleet repositioning." },
  { title: "Urban Analytics", description: "City-scale mobility analytics for congestion management and infrastructure planning." },
  { title: "Multimodal Integration", description: "Seamless integration across transportation modes with unified user experience." },
];

export default function SmartMobilityPage() {
  return (
    <>
      <PageHero label="Smart Mobility" title="The future of urban transport." description="Power next-generation mobility services with AI-driven demand forecasting and multimodal integration." />
      <ContentSection><FeatureGrid items={features} /></ContentSection>
    </>
  );
}
