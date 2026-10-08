import { createMetadata } from "@/lib/seo";
import { PageHeader } from "@/components/ui/PageHeader";
import { Section } from "@/components/ui/Section";
import { FadeIn } from "@/lib/animations";
import { Button } from "@/components/ui/Button";
import { DEVELOPER_FEATURES } from "@/lib/constants";

export const metadata = createMetadata({
  title: "Developers",
  description:
    "SOMA developer platform: REST APIs, SDKs, webhooks, and real-time streaming for building automotive intelligence applications.",
  path: "/developers/",
});

const CODE_EXAMPLE = `import { Soma } from "@soma/sdk";

const soma = new Soma({ apiKey: process.env.SOMA_API_KEY });

// Get vehicle data
const vehicle = await soma.vehicles.get("vehicle_2048");

// Run AI prediction
const prediction = await soma.ai.predict({
  vehicle,
  model: "maintenance-risk",
  horizon: "30d"
});

console.log(prediction.riskScore);
// => 0.23

// Subscribe to real-time events
soma.events.subscribe("vehicle.alert", (event) => {
  console.log(event.vehicleId, event.alertType);
});`;

const API_ENDPOINTS = [
  { method: "GET", path: "/v1/vehicles", description: "List all connected vehicles" },
  { method: "GET", path: "/v1/vehicles/:id", description: "Get vehicle details and status" },
  { method: "POST", path: "/v1/ai/predict", description: "Run AI prediction on vehicle data" },
  { method: "GET", path: "/v1/fleet/metrics", description: "Get fleet-wide analytics" },
  { method: "POST", path: "/v1/webhooks", description: "Configure event webhooks" },
  { method: "WS", path: "/v1/stream", description: "Real-time vehicle data stream" },
];

export default function DevelopersPage() {
  return (
    <>
      <PageHeader
        label="Developers"
        title="Built for developers. Ready for production."
        description="REST and streaming APIs, SDKs, and tools to build automotive intelligence into your applications."
      />

      <Section>
        <FadeIn>
          <div className="bg-soma-black rounded-sm overflow-hidden mb-16">
            <div className="flex items-center gap-2 px-4 py-3 border-b border-soma-gray-500">
              <div className="w-2.5 h-2.5 rounded-full bg-soma-gray-500" />
              <div className="w-2.5 h-2.5 rounded-full bg-soma-gray-500" />
              <div className="w-2.5 h-2.5 rounded-full bg-soma-gray-500" />
              <span className="ml-2 font-mono text-[10px] text-soma-gray-400">quickstart.js</span>
            </div>
            <pre className="p-6 overflow-x-auto">
              <code className="font-mono text-sm text-soma-gray-100 leading-relaxed">{CODE_EXAMPLE}</code>
            </pre>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16">
          <FadeIn>
            <h2 className="text-2xl font-semibold text-soma-black mb-6">Platform Capabilities</h2>
            <ul className="space-y-3">
              {DEVELOPER_FEATURES.map((feature) => (
                <li key={feature} className="flex items-center gap-3 text-soma-gray-400">
                  <span className="w-1 h-1 rounded-full bg-soma-accent flex-shrink-0" />
                  <span className="text-sm">{feature}</span>
                </li>
              ))}
            </ul>
          </FadeIn>

          <FadeIn delay={0.1}>
            <h2 className="text-2xl font-semibold text-soma-black mb-6">API Reference</h2>
            <div className="space-y-3">
              {API_ENDPOINTS.map((endpoint) => (
                <div key={endpoint.path} className="flex items-start gap-4 p-4 border border-soma-gray-100">
                  <span className="font-mono text-xs text-soma-accent w-12 flex-shrink-0">{endpoint.method}</span>
                  <div>
                    <p className="font-mono text-sm text-soma-black">{endpoint.path}</p>
                    <p className="text-xs text-soma-gray-400 mt-1">{endpoint.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>

        <FadeIn className="flex flex-col sm:flex-row gap-4">
          <Button href="/developers/api-access/">Get API Access</Button>
          <Button href="/contact/" variant="secondary">Contact Developer Support</Button>
        </FadeIn>
      </Section>
    </>
  );
}
