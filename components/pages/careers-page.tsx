import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import type { Locale } from "@/lib/i18n/locales";
import { getLocalizedPath } from "@/lib/i18n/locales";

export function CareersPage({ locale = "en" as Locale }) {
  return (
    <>
      <Section className="pt-32 pb-16">
        <Container className="text-center">
          <h1 className="font-display text-4xl font-medium md:text-5xl">Careers</h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Help us build the intelligent layer for modern business.
          </p>
        </Container>
      </Section>
      <Section variant="soft">
        <Container>
          <Card className="text-center">
            <h2 className="font-display text-xl font-medium">Open positions coming soon</h2>
            <p className="mt-3 text-muted-foreground">
              We&apos;re growing our team. Check back soon or reach out to learn about future opportunities.
            </p>
            <Button href={getLocalizedPath("/contact", locale)} className="mt-6">Contact us</Button>
          </Card>
        </Container>
      </Section>
    </>
  );
}
