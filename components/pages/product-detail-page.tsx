import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { products } from "@/content/products";
import { Check } from "lucide-react";
import type { Locale } from "@/lib/i18n/locales";
import { getLocalizedPath } from "@/lib/i18n/locales";

interface ProductDetailPageProps {
  slug: string;
  locale?: Locale;
}

export function ProductDetailPage({ slug, locale = "en" }: ProductDetailPageProps) {
  const product = products.find((p) => p.slug === slug);
  if (!product) return null;

  const Icon = product.icon;
  const extra = product as typeof product & {
    providers?: string[];
    sources?: string[];
    scenarios?: string[];
  };

  return (
    <>
      <Section className="pt-32 pb-16">
        <Container>
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-button border border-border bg-surface-soft">
              <Icon className="h-6 w-6 text-brand" />
            </div>
            <div>
              <h1 className="font-display text-4xl font-medium md:text-5xl">{product.title}</h1>
              <p className="mt-2 text-lg text-muted-foreground">{product.tagline}</p>
            </div>
          </div>
          <div className="mt-8 flex gap-3">
            <Button href={getLocalizedPath("/early-access", locale)}>Start building</Button>
            <Button href={getLocalizedPath("/book-demo", locale)} variant="secondary">Book a demo</Button>
          </div>
        </Container>
      </Section>

      <Section variant="soft">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2">
            <div className="rounded-panel border border-border bg-white p-6 shadow-card">
              <div className="space-y-3">
                {Array.from({ length: 6 }).map((_, i) => (
                  <div key={i} className="h-4 rounded bg-border/50" style={{ width: `${50 + i * 8}%` }} />
                ))}
              </div>
              <p className="mt-4 text-xs text-muted">Illustrative product UI</p>
            </div>
            <div>
              <h2 className="font-display text-2xl font-medium">Capabilities</h2>
              <ul className="mt-4 space-y-2">
                {product.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand" />{f}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </Section>

      {extra.providers && (
        <Section>
          <Container>
            <h2 className="font-display text-2xl font-medium">Model providers</h2>
            <p className="mt-2 text-muted-foreground">Connect leading AI models through one flexible gateway.</p>
            <div className="mt-6 flex flex-wrap gap-2">
              {extra.providers.map((p) => (
                <Badge key={p} variant="muted">{p}</Badge>
              ))}
            </div>
            <p className="mt-4 text-xs text-muted">Integration availability varies. Most providers are planned.</p>
          </Container>
        </Section>
      )}

      {extra.sources && (
        <Section>
          <Container>
            <h2 className="font-display text-2xl font-medium">Data sources</h2>
            <div className="mt-6 flex flex-wrap gap-2">
              {extra.sources.map((s) => (
                <Badge key={s} variant="muted">{s}</Badge>
              ))}
            </div>
          </Container>
        </Section>
      )}

      {extra.scenarios && (
        <Section>
          <Container>
            <h2 className="font-display text-2xl font-medium">Typical scenarios</h2>
            <ul className="mt-4 grid gap-3 sm:grid-cols-2">
              {extra.scenarios.map((s) => (
                <li key={s} className="rounded-card border border-border p-4 text-sm">{s}</li>
              ))}
            </ul>
          </Container>
        </Section>
      )}

      <Section variant="soft">
        <Container>
          <h2 className="font-display text-2xl font-medium">Use case</h2>
          <Card className="mt-4">
            <p className="text-muted-foreground">{product.useCase}</p>
          </Card>
        </Container>
      </Section>

      <Section>
        <Container className="text-center">
          <Button href={getLocalizedPath("/early-access", locale)}>Start building</Button>
        </Container>
      </Section>
    </>
  );
}
