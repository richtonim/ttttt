import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { PageHero, ContentSection, FeatureGrid } from "@/components/ui/PageLayout";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = buildMetadata({
  title: "Platform",
  description: "Entropy's unified vehicle data and AI decision platform for autonomous intelligence, fleet optimization and predictive maintenance.",
  path: "/platform/",
});

const features = [
  { title: "Real-time Data Ingestion", description: "Stream telematics, CAN bus, lidar and camera data from any vehicle in your fleet." },
  { title: "AI Decision Engine", description: "Edge and cloud AI models that evaluate risk, optimize routes and predict maintenance needs." },
  { title: "Fleet Command Center", description: "Unified dashboard for monitoring, alerting and controlling your entire vehicle network." },
  { title: "Open APIs", description: "RESTful and streaming APIs with SDKs for Python, TypeScript, Go and Rust." },
  { title: "Edge Deployment", description: "Deploy models directly to vehicle ECUs and edge gateways for sub-50ms decisions." },
  { title: "Compliance & Audit", description: "Complete audit trails, ODD logging and regulatory compliance tooling." },
];

export default function PlatformPage() {
  return (
    <>
      <PageHero
        label="Platform"
        title="The intelligence layer for modern mobility."
        description="Entropy unifies vehicle data, environmental context and AI decision-making into a single platform — from sensor to action."
      >
        <div className="mt-10 flex gap-4">
          <Button href="/contact/" variant="primary" size="large">Book a Demo</Button>
          <Button href="/developers/" variant="secondary" size="large">View Documentation</Button>
        </div>
      </PageHero>
      <ContentSection title="Platform capabilities">
        <FeatureGrid items={features} />
      </ContentSection>
    </>
  );
}
