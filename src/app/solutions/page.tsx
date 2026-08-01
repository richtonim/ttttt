import { createMetadata } from "@/lib/seo";
import { PageHeader } from "@/components/ui/PageHeader";
import { Section } from "@/components/ui/Section";
import { FadeIn } from "@/lib/animations";
import { Button } from "@/components/ui/Button";
import { SOLUTIONS } from "@/lib/constants";

export const metadata = createMetadata({
  title: "Solutions",
  description:
    "SOMA solutions for automotive manufacturers, autonomous vehicle teams, commercial fleets, electric mobility, insurance, and smart cities.",
  path: "/solutions/",
});

export default function SolutionsPage() {
  return (
    <>
      <PageHeader
        label="Solutions"
        title="Designed for every mobility operation."
        description="From OEMs to fleet operators, SOMA provides the intelligence infrastructure to build safer, smarter, and more efficient mobility systems."
      />

      <Section>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-soma-gray-100">
          {SOLUTIONS.map((solution, i) => (
            <FadeIn key={solution.id} delay={i * 0.1}>
              <div className="bg-white p-8 md:p-12 h-full">
                <h2 className="text-2xl font-semibold text-soma-black mb-4">{solution.title}</h2>
                <p className="text-soma-gray-400 leading-relaxed">{solution.description}</p>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn className="mt-16 text-center">
          <p className="text-soma-gray-400 mb-6">Not sure which solution fits your needs?</p>
          <Button href="/contact/">Talk to Our Team</Button>
        </FadeIn>
      </Section>
    </>
  );
}
