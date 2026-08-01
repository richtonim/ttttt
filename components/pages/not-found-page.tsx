import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import type { Locale } from "@/lib/i18n/locales";
import { getLocalizedPath } from "@/lib/i18n/locales";

export function NotFoundPage({ locale = "en" as Locale }) {
  return (
    <Section className="flex min-h-[70vh] items-center pt-32">
      <Container className="text-center">
        <div className="mx-auto mb-8 flex flex-col items-center gap-2">
          {[1, 0.7, 0.4].map((opacity, i) => (
            <div
              key={i}
              className="h-3 w-32 rounded border border-dashed border-brand/30"
              style={{ opacity }}
            />
          ))}
        </div>
        <h1 className="font-display text-4xl font-medium md:text-5xl">This layer does not exist yet.</h1>
        <p className="mx-auto mt-4 max-w-md text-muted-foreground">
          The page you are looking for may have moved, changed, or never existed.
        </p>
        <div className="mt-8 flex justify-center gap-3">
          <Button href={getLocalizedPath("/", locale)}>Return home</Button>
          <Button href={getLocalizedPath("/platform", locale)} variant="secondary">View platform</Button>
        </div>
      </Container>
    </Section>
  );
}
