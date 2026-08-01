import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { templates } from "@/content/templates";
import type { Locale } from "@/lib/i18n/locales";
import { getLocalizedPath } from "@/lib/i18n/locales";

export function TemplatesPage({ locale = "en" as Locale }) {
  return (
    <>
      <Section className="pt-32 pb-16">
        <Container className="text-center">
          <h1 className="font-display text-4xl font-medium md:text-5xl">Templates</h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Start faster with pre-built agent and workflow templates.
          </p>
        </Container>
      </Section>
      <Section variant="soft">
        <Container>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {templates.map((t) => (
              <Card key={t.name}>
                <Badge variant="muted" className="mb-3">{t.category}</Badge>
                <h2 className="font-medium">{t.name}</h2>
                <p className="mt-2 text-sm text-muted-foreground">{t.description}</p>
                <div className="mt-3 flex flex-wrap gap-1">
                  {t.modules.map((m) => (
                    <span key={m} className="rounded-full bg-surface-soft px-2 py-0.5 text-xs text-muted-foreground">{m}</span>
                  ))}
                </div>
                <div className="mt-4 flex gap-2">
                  <Button href={getLocalizedPath("/early-access", locale)} size="sm">Use template</Button>
                  <Button href={getLocalizedPath("/contact", locale)} variant="secondary" size="sm">Preview</Button>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}
