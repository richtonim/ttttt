import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { integrations, integrationCategories } from "@/content/integrations";
import type { Locale } from "@/lib/i18n/locales";
import { getLocalizedPath } from "@/lib/i18n/locales";

const statusVariant = {
  available: "success" as const,
  beta: "warning" as const,
  planned: "muted" as const,
  request: "brand" as const,
};

export function IntegrationsPage({ locale = "en" as Locale }) {
  return (
    <>
      <Section className="pt-32 pb-16">
        <Container className="text-center">
          <h1 className="font-display text-4xl font-medium md:text-5xl">Integrations</h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Connect NextLayer with your AI models, data sources, and business tools.
          </p>
        </Container>
      </Section>
      {integrationCategories.map((category) => {
        const items = integrations.filter((i) => i.category === category);
        if (!items.length) return null;
        return (
          <Section key={category} variant={category === "AI Models" ? "default" : "soft"}>
            <Container>
              <h2 className="font-display text-2xl font-medium">{category}</h2>
              <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {items.map((item) => (
                  <Card key={item.name}>
                    <div className="flex items-start justify-between">
                      <h3 className="font-medium">{item.name}</h3>
                      <Badge variant={statusVariant[item.status]} className="capitalize">
                        {item.status}
                      </Badge>
                    </div>
                    <p className="mt-2 text-sm text-muted-foreground">{item.description}</p>
                  </Card>
                ))}
              </div>
            </Container>
          </Section>
        );
      })}
      <Section>
        <Container className="text-center">
          <p className="text-muted-foreground">Need a custom integration?</p>
          <Button href={getLocalizedPath("/contact", locale)} variant="secondary" className="mt-4">
            Request integration
          </Button>
        </Container>
      </Section>
    </>
  );
}
