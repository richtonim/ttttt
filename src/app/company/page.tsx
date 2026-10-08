import { createMetadata } from "@/lib/seo";
import { PageHeader } from "@/components/ui/PageHeader";
import { Section } from "@/components/ui/Section";
import { FadeIn } from "@/lib/animations";
import { Button } from "@/components/ui/Button";

export const metadata = createMetadata({
  title: "Company",
  description:
    "SOMA Autos is building the intelligence infrastructure for the next generation of vehicles. Founded in 2026.",
  path: "/company/",
});

const VALUES = [
  {
    title: "Precision",
    description: "Every signal matters. We build systems that process vehicle data with automotive-grade accuracy and reliability.",
  },
  {
    title: "Trust",
    description: "Safety-critical systems demand transparency. Our AI is designed to be explainable, auditable, and secure.",
  },
  {
    title: "Innovation",
    description: "We push the boundaries of what's possible when AI meets automotive — from perception to autonomous decisioning.",
  },
  {
    title: "Partnership",
    description: "We work alongside OEMs, fleet operators, and mobility platforms to build the future of intelligent transportation.",
  },
];

export default function CompanyPage() {
  return (
    <>
      <PageHeader
        label="Company"
        title="Building the intelligence infrastructure for modern mobility."
        description="SOMA is a 2026-founded AI company focused on transforming how vehicles generate, process, and act on data."
      />

      <Section>
        <FadeIn>
          <h2 className="text-display-2 font-semibold text-soma-black mb-8">
            We believe every vehicle should become more intelligent with every journey.
          </h2>
          <p className="text-lg text-soma-gray-400 max-w-3xl leading-relaxed mb-16">
            SOMA is building the intelligence infrastructure that connects vehicles, AI models and mobility operations into one continuously learning system. Our mission is to make every vehicle on the road smarter, safer, and more efficient.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-soma-gray-100 mb-16">
          {VALUES.map((value, i) => (
            <FadeIn key={value.title} delay={i * 0.1}>
              <div className="bg-white p-8 md:p-12">
                <h3 className="text-xl font-semibold text-soma-black mb-4">{value.title}</h3>
                <p className="text-soma-gray-400 leading-relaxed">{value.description}</p>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn className="flex flex-col sm:flex-row gap-4">
          <Button href="/careers/">Join Our Team</Button>
          <Button href="/contact/" variant="secondary">Contact Us</Button>
        </FadeIn>
      </Section>
    </>
  );
}
