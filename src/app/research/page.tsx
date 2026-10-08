import { PageLayout } from "@/components/PageLayout";
import { FadeIn } from "@/components/animations";
import { Button } from "@/components/Button";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Research",
  description:
    "Qualia research — advancing the frontier of AI perception, cognitive intelligence and multimodal understanding.",
  path: "/research/",
});

const researchAreas = [
  {
    title: "Perceptual AI",
    description:
      "How machines can develop human-like perceptual understanding across vision, language and audio modalities.",
  },
  {
    title: "Contextual Reasoning",
    description:
      "Building AI systems that maintain and reason over rich contextual state across extended interactions.",
  },
  {
    title: "Agent Intelligence",
    description:
      "Autonomous agents that plan, collaborate and adapt in open-ended environments.",
  },
  {
    title: "Explainable AI",
    description:
      "Making AI decision-making transparent, auditable and aligned with human values.",
  },
];

const publications = [
  {
    title: "Toward Unified Multimodal Perception in AI Systems",
    authors: "Chen, M. et al.",
    venue: "NeurIPS 2026",
    year: "2026",
  },
  {
    title: "Context Graphs: A Framework for Temporal AI Reasoning",
    authors: "Park, S. et al.",
    venue: "ICML 2026",
    year: "2026",
  },
  {
    title: "Adaptive Agents for Enterprise Decision-Making",
    authors: "Williams, J. et al.",
    venue: "Qualia Technical Report",
    year: "2026",
  },
];

export default function ResearchPage() {
  return (
    <PageLayout>
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <FadeIn>
            <p className="text-sm tracking-[0.15em] uppercase text-qualia-gray-500 mb-4">Research</p>
            <h1 className="text-display font-semibold text-qualia-black mb-6">
              Advancing the science
              <br />
              of understanding
            </h1>
            <p className="text-body-lg text-qualia-gray-600 max-w-2xl">
              Our research team pushes the boundaries of AI perception, cognitive intelligence
              and multimodal understanding to build systems that truly comprehend the world.
            </p>
          </FadeIn>
        </div>
      </section>

      <section id="areas" className="py-20 bg-qualia-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-heading font-semibold text-qualia-black mb-16">Research areas</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {researchAreas.map((area, i) => (
              <div key={area.title} className="p-8 bg-white border border-qualia-gray-200 rounded-2xl">
                <span className="text-xs text-qualia-accent font-mono">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="text-xl font-semibold text-qualia-black mt-4 mb-3">{area.title}</h3>
                <p className="text-body text-qualia-gray-600">{area.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-heading font-semibold text-qualia-black mb-16">Publications</h2>
          <div className="space-y-6">
            {publications.map((pub) => (
              <article
                key={pub.title}
                className="p-6 border border-qualia-gray-200 rounded-xl hover:border-qualia-black/20 transition-colors"
              >
                <h3 className="text-lg font-semibold text-qualia-black mb-2">{pub.title}</h3>
                <p className="text-sm text-qualia-gray-500">
                  {pub.authors} · {pub.venue} · {pub.year}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="labs" className="py-20 bg-qualia-black text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-heading font-semibold mb-6">Join our research team</h2>
          <p className="text-body-lg text-qualia-gray-400 max-w-xl mx-auto mb-8">
            We&apos;re looking for researchers passionate about perception, cognition and
            building AI that truly understands.
          </p>
          <Button href="/careers/" className="bg-white text-qualia-black hover:bg-qualia-gray-100">
            View Open Positions
          </Button>
        </div>
      </section>
    </PageLayout>
  );
}
