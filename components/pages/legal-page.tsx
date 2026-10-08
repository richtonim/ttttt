import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";

interface LegalPageProps {
  title: string;
  lastUpdated?: string;
  children: React.ReactNode;
  locale?: string;
}

export function LegalPage({ title, lastUpdated = "January 1, 2026", children, locale: _locale }: LegalPageProps) {
  return (
    <>
      <Section className="pt-32 pb-8">
        <Container>
          <h1 className="font-display text-4xl font-medium md:text-5xl">{title}</h1>
          <p className="mt-2 text-sm text-muted">Last updated: {lastUpdated}</p>
        </Container>
      </Section>
      <Section variant="soft" className="pt-8">
        <Container className="prose prose-sm max-w-3xl text-muted-foreground">
          {children}
        </Container>
      </Section>
    </>
  );
}
