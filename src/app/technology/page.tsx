import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { PageHero, ContentSection, FeatureGrid } from "@/components/ui/PageLayout";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = buildMetadata({
  title: "Technology",
  description: "Entropy's AI engine, edge computing infrastructure and enterprise security for vehicle intelligence.",
  path: "/technology/",
});

const features = [
  { title: "AI Decision Engine", description: "Proprietary ML models trained on billions of miles of driving data for perception, prediction and planning." },
  { title: "Edge Computing", description: "Deploy AI models to vehicle ECUs and edge gateways for sub-50ms inference latency." },
  { title: "Enterprise Security", description: "SOC 2 Type II, ISO 27001, GDPR compliance with end-to-end encryption and audit trails." },
  { title: "Scalable Infrastructure", description: "Cloud-native architecture processing 18PB of data daily with 99.99% uptime SLA." },
];

export default function TechnologyPage() {
  return (
    <>
      <PageHero label="Technology" title="Engineered for the road." description="From edge AI to cloud-scale data processing, Entropy's technology stack powers intelligent mobility at every layer." />
      <ContentSection>
        <FeatureGrid items={features} />
        <div className="mt-16 flex gap-4">
          <Button href="/technology/ai-engine/" variant="primary">AI Engine</Button>
          <Button href="/technology/security/" variant="secondary">Security</Button>
        </div>
      </ContentSection>
    </>
  );
}
