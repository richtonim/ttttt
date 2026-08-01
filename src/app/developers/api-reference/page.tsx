import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { PageHero, ContentSection } from "@/components/ui/PageLayout";

export const metadata: Metadata = buildMetadata({
  title: "API Reference",
  description: "Complete API reference for Entropy's vehicle data, fleet management, AI inference and analytics endpoints.",
  path: "/developers/api-reference/",
});

const endpoints = [
  { method: "GET", path: "/v1/vehicles", desc: "List all vehicles in a fleet" },
  { method: "GET", path: "/v1/vehicles/{id}", desc: "Get vehicle details and current status" },
  { method: "POST", path: "/v1/vehicles/{id}/telemetry", desc: "Ingest vehicle telemetry data" },
  { method: "GET", path: "/v1/fleets/{id}/stream", desc: "Stream real-time fleet telemetry" },
  { method: "POST", path: "/v1/ai/evaluate", desc: "Run AI decision evaluation" },
  { method: "GET", path: "/v1/analytics/risk-score", desc: "Get AI risk score for a vehicle" },
  { method: "GET", path: "/v1/maintenance/alerts", desc: "List predictive maintenance alerts" },
  { method: "POST", path: "/v1/webhooks", desc: "Register a webhook endpoint" },
];

export default function APIReferencePage() {
  return (
    <>
      <PageHero label="API Reference" title="RESTful APIs for vehicle intelligence." description="Comprehensive API documentation for integrating Entropy into your applications." />
      <ContentSection>
        <div className="space-y-4">
          {endpoints.map((ep) => (
            <div key={ep.path} className="flex items-start gap-4 p-6 rounded-xl border border-white/5 font-mono text-sm">
              <span className={`shrink-0 px-2 py-1 rounded text-xs font-bold ${ep.method === "GET" ? "bg-accent-blue/10 text-accent-blue" : "bg-accent-green/10 text-accent-green"}`}>
                {ep.method}
              </span>
              <div>
                <code className="text-white">{ep.path}</code>
                <p className="mt-1 text-white/40 font-sans">{ep.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </ContentSection>
    </>
  );
}
