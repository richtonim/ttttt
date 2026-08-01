import { PageLayout } from "@/components/PageLayout";
import { FadeIn } from "@/components/animations";
import { Button } from "@/components/Button";
import { CAPABILITIES } from "@/lib/constants";
import { createMetadata } from "@/lib/seo";
import { Activity, Cpu, Layers, Workflow } from "lucide-react";

export const metadata = createMetadata({
  title: "Platform",
  description:
    "The Qualia intelligence platform — multimodal understanding, contextual AI agents, and predictive decision systems.",
  path: "/platform/",
});

const features = [
  {
    icon: Layers,
    title: "Multimodal Perception Engine",
    description:
      "Process text, images, audio and sensor data through a unified perception layer that extracts deep semantic meaning.",
  },
  {
    icon: Cpu,
    title: "Context Graph",
    description:
      "Build rich contextual understanding over time with our proprietary context graph that connects entities, events and intent.",
  },
  {
    icon: Workflow,
    title: "Agent Orchestration",
    description:
      "Deploy, monitor and scale AI agents across complex workflows with built-in collaboration and handoff protocols.",
  },
  {
    icon: Activity,
    title: "Real-time Analytics",
    description:
      "Track model performance, inference latency and decision quality with comprehensive observability dashboards.",
  },
];

export default function PlatformPage() {
  return (
    <PageLayout>
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <FadeIn>
            <p className="text-sm tracking-[0.15em] uppercase text-qualia-gray-500 mb-4">Platform</p>
            <h1 className="text-display font-semibold text-qualia-black mb-6">
              The intelligence
              <br />
              platform
            </h1>
            <p className="text-body-lg text-qualia-gray-600 max-w-2xl mb-12">
              A unified platform for building, deploying and scaling AI systems that truly
              understand context, perception and human intent.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button href="/register/">Start Building</Button>
              <Button href="/contact/" variant="secondary">
                Request Demo
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="py-20 bg-qualia-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-heading font-semibold text-qualia-black mb-16">Platform features</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <div
                  key={feature.title}
                  className="p-8 bg-white border border-qualia-gray-200 rounded-2xl"
                >
                  <Icon size={24} className="text-qualia-accent mb-6" strokeWidth={1.5} />
                  <h3 className="text-xl font-semibold text-qualia-black mb-3">{feature.title}</h3>
                  <p className="text-body text-qualia-gray-600">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="capabilities" className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-heading font-semibold text-qualia-black mb-16">Core capabilities</h2>
          <div className="space-y-0">
            {CAPABILITIES.map((cap) => (
              <div
                key={cap.number}
                className="flex flex-col md:flex-row md:items-center gap-6 py-10 border-t border-qualia-gray-200"
              >
                <span className="text-5xl font-light text-qualia-gray-200 tabular-nums">
                  {cap.number}
                </span>
                <div>
                  <h3 className="text-2xl font-semibold text-qualia-black mb-2">{cap.title}</h3>
                  <p className="text-body text-qualia-gray-600 max-w-xl">{cap.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
