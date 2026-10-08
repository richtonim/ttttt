import { createMetadata } from "@/lib/seo";
import { PageHeader } from "@/components/ui/PageHeader";
import { Section } from "@/components/ui/Section";
import { FadeIn } from "@/lib/animations";
import { TECHNOLOGY_STACK, WORKFLOW_STEPS } from "@/lib/constants";

export const metadata = createMetadata({
  title: "Technology",
  description:
    "SOMA's automotive-scale AI technology stack: perception, prediction, decision, and continuous learning for intelligent mobility.",
  path: "/technology/",
});

export default function TechnologyPage() {
  return (
    <>
      <PageHeader
        label="Technology"
        title="Built for automotive-scale AI."
        description="A complete AI stack designed for the unique demands of vehicle intelligence — from perception to real-time decisioning."
      />

      <Section>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-soma-gray-100 mb-20">
          {TECHNOLOGY_STACK.map((tech, i) => (
            <FadeIn key={tech.title} delay={i * 0.1}>
              <div className="bg-white p-8 md:p-12 h-full">
                <span className="font-mono text-xs text-soma-accent mb-4 block">0{i + 1}</span>
                <h2 className="text-2xl font-semibold text-soma-black mb-4">{tech.title}</h2>
                <p className="text-soma-gray-400 leading-relaxed">{tech.description}</p>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn>
          <h2 className="text-display-2 font-semibold text-soma-black mb-12">
            From raw signals to intelligent action.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {WORKFLOW_STEPS.map((step) => (
              <div key={step.step}>
                <span className="font-mono text-xs text-soma-accent mb-3 block">{step.step}</span>
                <h3 className="text-lg font-semibold text-soma-black mb-2">{step.title}</h3>
                <p className="text-sm text-soma-gray-400">{step.description}</p>
              </div>
            ))}
          </div>
        </FadeIn>
      </Section>
    </>
  );
}
