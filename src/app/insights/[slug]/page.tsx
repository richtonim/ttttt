import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { createMetadata } from "@/lib/seo";
import { Section } from "@/components/ui/Section";
import { FadeIn } from "@/lib/animations";
import { INSIGHTS } from "@/lib/constants";

const ARTICLE_CONTENT: Record<string, { content: string[] }> = {
  "automotive-ai-infrastructure-stack": {
    content: [
      "The automotive industry is undergoing a fundamental transformation. As vehicles become increasingly connected, electrified, and autonomous, the volume and complexity of data they generate grows exponentially. This creates both an unprecedented opportunity and a significant infrastructure challenge.",
      "At SOMA, we believe the next generation of automotive intelligence requires a purpose-built infrastructure stack — one that can ingest millions of signals per second, apply AI models in real time, and deliver actionable decisions with automotive-grade reliability.",
      "The automotive AI infrastructure stack consists of four foundational layers: data ingestion and normalization, real-time processing and analytics, AI model deployment and inference, and decision orchestration. Each layer must be designed for the unique constraints of vehicle systems — including intermittent connectivity, safety-critical latency requirements, and regulatory compliance.",
      "Unlike general-purpose cloud infrastructure, automotive AI infrastructure must handle heterogeneous data formats across vehicle makes and models, support edge computing for latency-sensitive decisions, and maintain complete audit trails for safety certification.",
      "As we build SOMA's platform, we're focused on creating an infrastructure layer that OEMs, fleet operators, and autonomous vehicle teams can build upon — without needing to reinvent the foundational systems that every intelligent vehicle application requires.",
    ],
  },
  "vehicle-data-to-real-time-decisions": {
    content: [
      "Modern vehicles are data factories on wheels. A single connected vehicle can generate over 25 gigabytes of data per hour from sensors, cameras, telematics units, and onboard computers. The challenge isn't collecting this data — it's transforming it into intelligence fast enough to matter.",
      "Real-time decision-making in automotive contexts operates under fundamentally different constraints than traditional enterprise analytics. Decisions about collision avoidance, route optimization, or predictive maintenance often need to happen in milliseconds, not minutes.",
      "SOMA's approach centers on a streaming architecture that processes vehicle signals as they arrive. Rather than batch-processing data in warehouses, we maintain a continuous pipeline from sensor ingestion through AI inference to decision output.",
      "Key to this architecture is our normalization layer, which unifies data from different vehicle platforms, sensor types, and communication protocols into a consistent schema. This allows AI models trained on one vehicle type to generalize across an entire fleet.",
      "The result is a system where a fleet operator can detect a battery anomaly across thousands of vehicles in real time, an autonomous vehicle can adjust its path based on live traffic intelligence, and an OEM can identify quality issues during the testing phase before vehicles reach customers.",
    ],
  },
  "building-reliable-ai-autonomous-systems": {
    content: [
      "Autonomous systems operate in environments where failure can have life-or-death consequences. Building AI that meets these reliability demands requires a fundamentally different approach than consumer AI applications.",
      "At SOMA, reliability in autonomous systems rests on three pillars: rigorous validation, continuous monitoring, and graceful degradation. Every AI model deployed through our platform goes through extensive simulation testing before reaching production vehicles.",
      "Validation begins in simulation, where models are tested against millions of scenarios including edge cases that rarely occur in real-world driving. Models must demonstrate consistent performance across diverse conditions — weather, lighting, road types, and traffic patterns — before deployment.",
      "Continuous monitoring ensures that model performance doesn't degrade over time. As road conditions, vehicle hardware, and traffic patterns evolve, our systems track prediction accuracy and decision quality, triggering alerts when performance drops below defined thresholds.",
      "Graceful degradation means that when AI systems encounter situations outside their training distribution, they fail safely rather than confidently. This principle guides every architectural decision in SOMA's autonomous decisioning layer.",
      "The path to reliable autonomous AI isn't about achieving perfect models — it's about building systems that know their limitations and operate safely within them.",
    ],
  },
};

export function generateStaticParams() {
  return INSIGHTS.map((article) => ({ slug: article.slug }));
}

export function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  return params.then(({ slug }) => {
    const article = INSIGHTS.find((a) => a.slug === slug);
    if (!article) return {};
    return createMetadata({
      title: article.title,
      description: article.excerpt,
      path: `/insights/${slug}/`,
    });
  });
}

export default async function InsightArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = INSIGHTS.find((a) => a.slug === slug);
  const content = ARTICLE_CONTENT[slug];

  if (!article || !content) notFound();

  return (
    <>
      <div className="pt-32 pb-8 bg-white">
        <div className="max-w-3xl mx-auto px-6 md:px-12">
          <Link
            href="/insights/"
            className="inline-flex items-center gap-2 font-mono text-xs text-soma-gray-400 hover:text-soma-black transition-colors mb-8"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Insights
          </Link>
          <FadeIn>
            <p className="font-mono text-xs uppercase tracking-wider text-soma-gray-300 mb-4">
              {article.category} — {article.date}
            </p>
            <h1 className="text-3xl md:text-5xl font-semibold text-soma-black mb-6 leading-tight">
              {article.title}
            </h1>
            <p className="text-lg text-soma-gray-400 leading-relaxed">{article.excerpt}</p>
          </FadeIn>
        </div>
      </div>

      <Section>
        <div className="max-w-3xl mx-auto">
          {content.content.map((paragraph, i) => (
            <FadeIn key={i} delay={i * 0.05}>
              <p className="text-lg text-soma-gray-400 leading-relaxed mb-6">{paragraph}</p>
            </FadeIn>
          ))}
        </div>
      </Section>
    </>
  );
}
