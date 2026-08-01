import { PageLayout } from "@/components/PageLayout";
import { FadeIn } from "@/components/animations";
import { Button } from "@/components/Button";
import { DEVELOPER_FEATURES } from "@/lib/constants";
import { createMetadata } from "@/lib/seo";
import { Book, Code, Terminal, Webhook } from "lucide-react";

export const metadata = createMetadata({
  title: "Developers",
  description:
    "Qualia developer documentation — API reference, SDKs, agents framework, webhooks and deployment guides.",
  path: "/developers/",
});

const codeExample = `curl -X POST https://api.qualia.lat/v1/perceive \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "modalities": ["text", "image"],
    "input": {
      "text": "What is happening in this image?",
      "image_url": "https://example.com/image.jpg"
    },
    "context": {
      "user_id": "user_123"
    }
  }'`;

const endpoints = [
  { method: "POST", path: "/v1/perceive", description: "Multimodal perception and understanding" },
  { method: "POST", path: "/v1/reason", description: "Contextual reasoning over perceived data" },
  { method: "POST", path: "/v1/agents/run", description: "Execute an AI agent workflow" },
  { method: "GET", path: "/v1/models", description: "List available models and versions" },
  { method: "POST", path: "/v1/webhooks", description: "Configure event webhooks" },
  { method: "GET", path: "/v1/metrics", description: "Real-time system metrics" },
];

export default function DevelopersPage() {
  return (
    <PageLayout>
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <FadeIn>
            <p className="text-sm tracking-[0.15em] uppercase text-qualia-gray-500 mb-4">
              Developers
            </p>
            <h1 className="text-display font-semibold text-qualia-black mb-6">
              Build with
              <br />
              Qualia
            </h1>
            <p className="text-body-lg text-qualia-gray-600 max-w-2xl mb-8">
              Everything you need to integrate Qualia&apos;s intelligence into your applications.
              Clean APIs, powerful SDKs and comprehensive documentation.
            </p>
            <div className="flex flex-wrap gap-2 mb-8">
              {DEVELOPER_FEATURES.map((feature) => (
                <span
                  key={feature}
                  className="text-xs px-3 py-1.5 border border-qualia-gray-300 rounded-full text-qualia-gray-600"
                >
                  {feature}
                </span>
              ))}
            </div>
            <Button href="/register/">Get API Key</Button>
          </FadeIn>
        </div>
      </section>

      <section id="api" className="py-20 bg-qualia-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-8">
            <Terminal size={24} className="text-qualia-accent" />
            <h2 className="text-heading font-semibold text-qualia-black">Quick start</h2>
          </div>
          <div className="rounded-2xl overflow-hidden border border-qualia-gray-200 bg-qualia-black">
            <div className="px-4 py-3 border-b border-qualia-gray-800">
              <span className="text-xs text-qualia-gray-500 font-mono">curl</span>
            </div>
            <pre className="p-6 overflow-x-auto text-sm">
              <code className="text-qualia-gray-300 font-mono">{codeExample}</code>
            </pre>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-12">
            <Book size={24} className="text-qualia-accent" />
            <h2 className="text-heading font-semibold text-qualia-black">API Reference</h2>
          </div>
          <div className="space-y-3">
            {endpoints.map((ep) => (
              <div
                key={ep.path}
                className="flex items-center gap-4 p-4 border border-qualia-gray-200 rounded-xl hover:border-qualia-black/20 transition-colors"
              >
                <span
                  className={`text-xs font-mono px-2 py-1 rounded ${
                    ep.method === "GET"
                      ? "bg-blue-50 text-blue-700"
                      : "bg-green-50 text-green-700"
                  }`}
                >
                  {ep.method}
                </span>
                <code className="text-sm font-mono text-qualia-black">{ep.path}</code>
                <span className="text-sm text-qualia-gray-500 ml-auto hidden sm:block">
                  {ep.description}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="sdk" className="py-20 bg-qualia-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Code, title: "TypeScript SDK", cmd: "npm install @qualia/sdk" },
              { icon: Terminal, title: "Python SDK", cmd: "pip install qualia" },
              { icon: Webhook, title: "Go SDK", cmd: "go get github.com/qualia-ai/sdk-go" },
            ].map((sdk) => {
              const Icon = sdk.icon;
              return (
                <div
                  key={sdk.title}
                  className="p-8 bg-white border border-qualia-gray-200 rounded-2xl"
                >
                  <Icon size={24} className="text-qualia-accent mb-4" strokeWidth={1.5} />
                  <h3 className="text-lg font-semibold text-qualia-black mb-3">{sdk.title}</h3>
                  <code className="text-sm font-mono text-qualia-gray-600 bg-qualia-gray-50 px-3 py-2 rounded-lg block">
                    {sdk.cmd}
                  </code>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
