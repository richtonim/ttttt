import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArchitectureDiagram } from "@/components/diagrams/architecture-diagram";
import { CodeBlock } from "@/components/code/code-block";
import { products } from "@/content/products";
import type { Locale } from "@/lib/i18n/locales";
import { getLocalizedPath } from "@/lib/i18n/locales";

interface PlatformPageProps {
  locale?: Locale;
}

export function PlatformPage({ locale = "en" }: PlatformPageProps) {
  return (
    <>
      <Section className="pt-32 pb-16">
        <Container className="text-center">
          <h1 className="font-display text-4xl font-medium md:text-5xl lg:text-6xl">
            One platform for your entire AI stack.
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Build, connect, operate, and scale AI applications through one flexible platform.
          </p>
          <div className="mt-8 flex justify-center gap-3">
            <Button href={getLocalizedPath("/early-access", locale)}>Start building</Button>
            <Button href={getLocalizedPath("/book-demo", locale)} variant="secondary">Book a demo</Button>
          </div>
        </Container>
      </Section>

      <Section variant="soft">
        <Container>
          <h2 className="text-center font-display text-2xl font-medium md:text-3xl">Platform architecture</h2>
          <div className="mx-auto mt-10 max-w-2xl">
            <ArchitectureDiagram />
          </div>
        </Container>
      </Section>

      {products.map((product, i) => {
        const Icon = product.icon;
        const isEven = i % 2 === 0;
        return (
          <Section key={product.id} variant={i % 2 === 1 ? "soft" : "default"}>
            <Container>
              <div className={`grid items-center gap-12 lg:grid-cols-2 ${!isEven ? "lg:[direction:rtl]" : ""}`}>
                <div className={!isEven ? "lg:[direction:ltr]" : ""}>
                  <div className="rounded-panel border border-border bg-surface-soft p-6 shadow-card">
                    <div className="flex items-center gap-3 border-b border-border pb-4">
                      <Icon className="h-5 w-5 text-brand" />
                      <span className="font-medium">{product.title}</span>
                    </div>
                    <div className="mt-4 space-y-2">
                      {product.features.slice(0, 4).map((f, idx) => (
                        <div key={f} className="h-3 rounded bg-border/60" style={{ width: `${60 + idx * 8}%` }} />
                      ))}
                    </div>
                    <p className="mt-3 text-xs text-muted">Illustrative UI preview</p>
                  </div>
                </div>
                <div className={!isEven ? "lg:[direction:ltr]" : ""}>
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-button border border-border bg-surface-soft">
                    <Icon className="h-5 w-5 text-brand" />
                  </div>
                  <h2 className="font-display text-2xl font-medium md:text-3xl">{product.title}</h2>
                  <p className="mt-3 text-muted-foreground">{product.tagline}</p>
                  <ul className="mt-6 space-y-2">
                    {product.features.slice(0, 6).map((f) => (
                      <li key={f} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-4 rounded-card border border-border bg-brand-light/30 p-4 text-sm text-muted-foreground">
                    <strong className="text-foreground">Use case: </strong>{product.useCase}
                  </div>
                  <Button href={getLocalizedPath(product.href, locale)} className="mt-6">
                    Learn more <ArrowRight className="ml-1 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </Container>
          </Section>
        );
      })}

      <Section variant="soft">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <h2 className="font-display text-2xl font-medium md:text-3xl">Security & governance</h2>
              <p className="mt-3 text-muted-foreground">
                Enterprise-grade access controls, audit logs, and data governance built into every layer of the platform.
              </p>
              <Button href={getLocalizedPath("/security", locale)} variant="secondary" className="mt-6">
                Learn about security
              </Button>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {["RBAC", "Audit logs", "SSO", "Data retention", "PII filtering", "Content safety"].map((f) => (
                <div key={f} className="rounded-card border border-border bg-white p-4 text-sm font-medium">{f}</div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      <Section variant="dark">
        <Container className="text-center">
          <h2 className="font-display text-2xl font-medium md:text-3xl">Developer API</h2>
          <p className="mx-auto mt-3 max-w-xl text-white/60">
            Integrate agents, knowledge, workflows, and model routing with a unified API.
          </p>
          <div className="mt-8">
            <CodeBlock />
          </div>
          <Button href={getLocalizedPath("/developers", locale)} className="mt-6">Explore API</Button>
        </Container>
      </Section>

      <Section>
        <Container className="text-center">
          <h2 className="font-display text-3xl font-medium">Ready to build?</h2>
          <p className="mx-auto mt-3 max-w-lg text-muted-foreground">
            Start building AI agents, knowledge bases, and workflows on NextLayer.
          </p>
          <Button href={getLocalizedPath("/early-access", locale)} className="mt-6">Start building</Button>
        </Container>
      </Section>
    </>
  );
}
