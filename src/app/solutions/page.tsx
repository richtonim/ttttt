import { PageLayout } from "@/components/layout/PageLayout";
import { Button } from "@/components/layout/Header";
import { Container, Section, SectionHeader } from "@/components/ui/Section";
import { USE_CASES } from "@/lib/site";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Solutions",
  description:
    "Cognis solutions for business operations, customer intelligence, research, workflow automation, and decision support.",
  path: "/solutions/",
});

export default function SolutionsPage() {
  return (
    <PageLayout>
      <Section className="pt-24 md:pt-32">
        <Container>
          <SectionHeader
            label="Solutions"
            title="Intelligence for every challenge."
            description="Purpose-built cognitive AI solutions that adapt to your industry's unique requirements and scale with your ambitions."
          />
        </Container>
      </Section>

      {USE_CASES.map((useCase, i) => (
        <Section key={useCase.id} id={useCase.id} dark={i % 2 === 0}>
          <Container>
            <div className="max-w-3xl">
              <span className="text-sm font-mono text-accent">{useCase.id}</span>
              <h2 className="mt-4 text-3xl md:text-4xl font-medium tracking-tight">{useCase.title}</h2>
              <p className="mt-6 text-lg text-muted leading-relaxed">{useCase.description}</p>
              <p className="mt-4 text-muted leading-relaxed">
                Organizations using Cognis for {useCase.title.toLowerCase()} report faster decision
                cycles, reduced manual overhead, and improved outcomes through explainable,
                auditable AI-driven processes.
              </p>
            </div>
          </Container>
        </Section>
      ))}

      <Section>
        <Container className="text-center">
          <h2 className="text-3xl font-medium tracking-tight">Find your solution</h2>
          <p className="mt-4 text-muted">Talk to our team about your specific use case.</p>
          <div className="mt-8">
            <Button href="/contact/">Contact Sales</Button>
          </div>
        </Container>
      </Section>
    </PageLayout>
  );
}
