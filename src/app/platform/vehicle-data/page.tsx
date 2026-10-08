import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { PageHero, ContentSection, FeatureGrid } from "@/components/ui/PageLayout";

export const metadata: Metadata = buildMetadata({
  title: "Vehicle Data Platform",
  description: "Unified ingestion, normalization and streaming of vehicle telematics, sensor and CAN bus data across your entire fleet.",
  path: "/platform/vehicle-data/",
});

const features = [
  { title: "Multi-protocol Ingestion", description: "Support for MQTT, gRPC, WebSocket and REST with automatic schema detection." },
  { title: "Data Normalization", description: "Transform heterogeneous vehicle data into a unified schema for cross-fleet analytics." },
  { title: "Time-series Storage", description: "Petabyte-scale time-series database optimized for vehicle telemetry workloads." },
  { title: "Real-time Streaming", description: "Sub-10ms latency streaming pipelines for safety-critical applications." },
];

export default function VehicleDataPage() {
  return (
    <>
      <PageHero label="Vehicle Data Platform" title="Every signal. Unified." description="Ingest, normalize and stream data from any vehicle, sensor or fleet management system." />
      <ContentSection><FeatureGrid items={features} /></ContentSection>
    </>
  );
}
