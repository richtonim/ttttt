import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { PageHero, ContentSection, FeatureGrid } from "@/components/ui/PageLayout";

export const metadata: Metadata = buildMetadata({
  title: "Edge Computing",
  description: "Deploy AI models to vehicle ECUs and edge gateways for sub-50ms inference latency in safety-critical applications.",
  path: "/technology/edge-computing/",
});

const features = [
  { title: "Model Optimization", description: "Automatic quantization, pruning and distillation for deployment on resource-constrained hardware." },
  { title: "Edge Runtime", description: "Lightweight inference runtime supporting NVIDIA Drive, Qualcomm Snapdragon and custom ASICs." },
  { title: "OTA Model Updates", description: "Secure over-the-air model deployment with rollback, A/B testing and gradual rollout." },
  { title: "Hybrid Cloud-Edge", description: "Intelligent workload distribution between edge and cloud based on latency and connectivity." },
];

export default function EdgeComputingPage() {
  return (
    <>
      <PageHero label="Edge Computing" title="Decisions at the edge." description="Deploy AI models directly to vehicles for real-time, safety-critical decision-making with sub-50ms latency." />
      <ContentSection><FeatureGrid items={features} /></ContentSection>
    </>
  );
}
