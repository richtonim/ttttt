import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { DemoForm } from "@/components/forms/demo-form";
import type { Locale } from "@/lib/i18n/locales";

export function BookDemoPage({ locale: _locale = "en" }: { locale?: Locale }) {
  return (
    <>
      <Section className="pt-32 pb-16">
        <Container className="text-center">
          <h1 className="font-display text-4xl font-medium md:text-5xl">Book a demo</h1>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            See how NextLayer can help your team build reliable AI products.
          </p>
        </Container>
      </Section>
      <Section variant="soft">
        <Container className="max-w-md">
          <DemoForm />
        </Container>
      </Section>
    </>
  );
}
