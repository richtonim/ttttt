import { PageLayout } from "@/components/layout/PageLayout";
import { Button } from "@/components/layout/Header";
import { Container, Section, SectionHeader } from "@/components/ui/Section";
import { PLATFORM_FEATURES } from "@/lib/site";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Platform",
  description:
    "Explore the Cognis platform — AI agent workflows, knowledge graphs, real-time reasoning, automation, and model observability.",
  path: "/platform/",
});

export default function PlatformPage() {
  return (
    <PageLayout>
      <Section className="pt-24 md:pt-32">
        <Container>
          <SectionHeader
            label="Platform"
            title="The cognitive intelligence platform."
            description="A unified environment for building, deploying, and monitoring AI agents that reason, decide, and act autonomously."
          />
        </Container>
      </Section>

      {PLATFORM_FEATURES.map((feature, i) => (
        <Section key={feature.id} id={feature.id} dark={i % 2 === 1}>
          <Container>
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="text-sm font-mono text-accent">{String(i + 1).padStart(2, "0")}</span>
                <h2 className="mt-4 text-3xl md:text-4xl font-medium tracking-tight">{feature.title}</h2>
                <p className="mt-6 text-lg text-muted leading-relaxed">{feature.description}</p>
                <p className="mt-4 text-muted leading-relaxed">
                  Deploy production-grade {feature.title.toLowerCase()} with enterprise governance,
                  version control, and full audit trails. Scale from prototype to organization-wide
                  deployment without changing your architecture.
                </p>
              </div>
              <div className="border border-border bg-surface-elevated p-12 min-h-[280px] flex items-center justify-center glow-accent">
                <div className="text-center">
                  <div className="w-16 h-16 border border-accent/30 mx-auto flex items-center justify-center mb-4">
                    <span className="text-2xl font-mono text-accent">{String(i + 1).padStart(2, "0")}</span>
                  </div>
                  <p className="text-sm font-mono text-muted">{feature.title}</p>
                </div>
              </div>
            </div>
          </Container>
        </Section>
      ))}

      <Section>
        <Container className="text-center">
          <h2 className="text-3xl md:text-4xl font-medium tracking-tight">Ready to explore?</h2>
          <p className="mt-4 text-muted max-w-xl mx-auto">
            See the Cognis platform in action with a personalized demo.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/demo/">Book a Demo</Button>
            <Button href="/developers/" variant="secondary">Developer Docs</Button>
          </div>
        </Container>
      </Section>
    </PageLayout>
  );
}
