import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { WorkflowDiagram } from "@/components/diagrams/workflow-diagram";
import { solutions, getSolution } from "@/content/solutions";
import type { Locale } from "@/lib/i18n/locales";
import { getLocalizedPath } from "@/lib/i18n/locales";

interface SolutionsListPageProps {
  locale?: Locale;
}

export function SolutionsListPage({ locale = "en" }: SolutionsListPageProps) {
  return (
    <>
      <Section className="pt-32 pb-16">
        <Container className="text-center">
          <h1 className="font-display text-4xl font-medium md:text-5xl lg:text-6xl">
            AI solutions built around real work
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Use NextLayer to automate repetitive processes, improve decisions, and give every team access to reliable AI.
          </p>
        </Container>
      </Section>
      <Section variant="soft">
        <Container>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {solutions.map((sol) => (
              <Card key={sol.slug} className="h-full">
                <h2 className="text-lg font-medium">{sol.title}</h2>
                <p className="mt-2 text-sm text-muted-foreground">{sol.tagline}</p>
                <Link
                  href={getLocalizedPath(`/solutions/${sol.slug}`, locale)}
                  className="mt-4 inline-flex items-center gap-1 text-sm text-brand"
                >
                  Learn more <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </Card>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}

interface SolutionDetailPageProps {
  slug: string;
  locale?: Locale;
}

export function SolutionDetailPage({ slug, locale = "en" }: SolutionDetailPageProps) {
  const solution = getSolution(slug);
  if (!solution) return null;

  const workflowSteps = ["Input", "AI Processing", "Knowledge Lookup", "Action", "Output"];

  return (
    <>
      <Section className="pt-32 pb-16">
        <Container className="text-center">
          <h1 className="font-display text-4xl font-medium md:text-5xl">{solution.title}</h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">{solution.tagline}</p>
          <Button href={getLocalizedPath("/early-access", locale)} className="mt-8">Start building</Button>
        </Container>
      </Section>

      <Section variant="soft">
        <Container>
          <h2 className="font-display text-2xl font-medium">The challenge</h2>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {solution.painPoints.map((p) => (
              <li key={p} className="rounded-card border border-border bg-white p-4 text-sm text-muted-foreground">{p}</li>
            ))}
          </ul>
        </Container>
      </Section>

      <Section>
        <Container>
          <h2 className="font-display text-2xl font-medium">How NextLayer helps</h2>
          <ul className="mt-6 space-y-3">
            {solution.howItHelps.map((h) => (
              <li key={h} className="flex items-start gap-2 text-muted-foreground">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand" />{h}
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      <Section variant="soft">
        <Container>
          <h2 className="font-display text-2xl font-medium">Workflow</h2>
          <WorkflowDiagram steps={workflowSteps} className="mt-8" />
          <p className="mt-4 text-xs text-muted">Illustrative workflow diagram</p>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <h2 className="font-display text-2xl font-medium">Key features</h2>
              <ul className="mt-4 space-y-2">
                {solution.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm">
                    <Check className="h-4 w-4 text-brand" />{f}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="font-display text-2xl font-medium">Integrations</h2>
              <div className="mt-4 flex flex-wrap gap-2">
                {solution.integrations.map((i) => (
                  <span key={i} className="rounded-full border border-border px-3 py-1 text-sm text-muted-foreground">{i}</span>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Section variant="soft">
        <Container>
          <h2 className="font-display text-2xl font-medium">Example results</h2>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {solution.results.map((r) => (
              <li key={r} className="rounded-card border border-border bg-white p-4 text-sm">{r}</li>
            ))}
          </ul>
          <p className="mt-4 text-xs text-muted">Illustrative outcomes — not verified customer results.</p>
        </Container>
      </Section>

      <Section>
        <Container>
          <h2 className="font-display text-2xl font-medium">Security & permissions</h2>
          <p className="mt-3 max-w-2xl text-muted-foreground">
            Role-based access, audit logs, and data governance ensure your AI solutions meet enterprise security requirements.
          </p>
          <Button href={getLocalizedPath("/security", locale)} variant="secondary" className="mt-4">Learn about security</Button>
        </Container>
      </Section>

      <Section variant="soft">
        <Container className="text-center">
          <h2 className="font-display text-2xl font-medium">Get started with {solution.shortTitle}</h2>
          <div className="mt-6 flex justify-center gap-3">
            <Button href={getLocalizedPath("/early-access", locale)}>Start building</Button>
            <Button href={getLocalizedPath("/contact", locale)} variant="secondary">Contact sales</Button>
          </div>
        </Container>
      </Section>
    </>
  );
}
