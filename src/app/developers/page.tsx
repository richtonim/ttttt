import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { PageHero, ContentSection, FeatureGrid } from "@/components/ui/PageLayout";
import { Button } from "@/components/ui/Button";
import { API_CODE } from "@/lib/constants";

export const metadata: Metadata = buildMetadata({
  title: "Developers",
  description: "Build on Entropy with SDKs, REST APIs, webhooks, edge AI deployment and real-time data streaming.",
  path: "/developers/",
});

const features = [
  { title: "REST & Streaming APIs", description: "Comprehensive APIs for vehicle data, fleet management, AI inference and analytics." },
  { title: "Multi-language SDKs", description: "Official SDKs for Python, TypeScript, Go and Rust with full type safety." },
  { title: "Webhooks", description: "Real-time event notifications for vehicle alerts, maintenance triggers and fleet events." },
  { title: "Edge AI Deployment", description: "Deploy and manage ML models on vehicle ECUs and edge gateways via API." },
  { title: "Real-time Streams", description: "WebSocket and gRPC streaming for sub-10ms vehicle telemetry delivery." },
  { title: "Sandbox Environment", description: "Full-featured sandbox with simulated vehicle data for development and testing." },
];

export default function DevelopersPage() {
  return (
    <>
      <PageHero label="Developers" title="Build on Entropy." description="Integrate vehicle intelligence into your applications with our comprehensive developer platform." />
      <ContentSection title="Developer tools">
        <FeatureGrid items={features} />
        <div className="mt-16 flex gap-4">
          <Button href="/developers/api-reference/" variant="primary">API Reference</Button>
          <Button href="/developers/docs/" variant="secondary">Documentation</Button>
        </div>
      </ContentSection>
      <ContentSection title="Quick start">
        <pre className="p-6 rounded-2xl border border-white/10 bg-[#0d0d0d] overflow-x-auto text-sm font-mono text-white/70">
          <code>{API_CODE}</code>
        </pre>
      </ContentSection>
    </>
  );
}
