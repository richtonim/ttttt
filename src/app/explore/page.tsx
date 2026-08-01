import { PageLayout } from "@/components/layout/PageLayout";
import { Button } from "@/components/layout/Header";
import { Container, Section, SectionHeader } from "@/components/ui/Section";
import { CORE_CAPABILITIES, WORKFLOW_STEPS } from "@/lib/site";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Explore Cognis",
  description:
    "Explore the Cognis cognitive intelligence platform — capabilities, workflow, and how to get started.",
  path: "/explore/",
});

export default function ExplorePage() {
  return (
    <PageLayout>
      <Section className="pt-24 md:pt-32 grid-pattern">
        <Container>
          <SectionHeader
            label="Explore"
            title="Discover Cognis."
            description="A comprehensive overview of what makes Cognis the platform of choice for forward-thinking organizations."
          />
          <div className="flex flex-wrap gap-4">
            <Button href="/platform/">View Platform</Button>
            <Button href="/demo/" variant="secondary">Book a Demo</Button>
          </div>
        </Container>
      </Section>

      <Section dark>
        <Container>
          <h2 className="text-2xl font-medium tracking-tight mb-12">Core capabilities</h2>
          <div className="space-y-8">
            {CORE_CAPABILITIES.map((cap) => (
              <div key={cap.number} className="flex gap-8 items-start border-b border-border pb-8">
                <span className="text-4xl font-mono text-border">{cap.number}</span>
                <div>
                  <h3 className="text-xl font-medium">{cap.title}</h3>
                  <p className="mt-2 text-muted">{cap.description}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <h2 className="text-2xl font-medium tracking-tight mb-12">How it works</h2>
          <div className="flex flex-wrap gap-4">
            {WORKFLOW_STEPS.map((step, i) => (
              <div key={step.step} className="flex items-center gap-4">
                <div className="border border-border px-4 py-2 text-sm font-mono">
                  {step.step}
                </div>
                {i < WORKFLOW_STEPS.length - 1 && (
                  <span className="text-border hidden sm:inline">→</span>
                )}
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section dark>
        <Container className="text-center">
          <h2 className="text-3xl font-medium tracking-tight">Ready to get started?</h2>
          <p className="mt-4 text-muted">Join the organizations building with Cognis.</p>
          <div className="mt-8 flex gap-4 justify-center">
            <Button href="/register/">Start Building</Button>
            <Button href="/pricing/" variant="secondary">View Pricing</Button>
          </div>
        </Container>
      </Section>
    </PageLayout>
  );
}
