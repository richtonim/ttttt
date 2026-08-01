import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import type { Locale } from "@/lib/i18n/locales";
import { getLocalizedPath } from "@/lib/i18n/locales";

const docSections = [
  { title: "Getting Started", items: ["Quick Start", "Authentication", "API Keys", "Rate Limits"] },
  { title: "Agent Studio", items: ["Create an Agent", "System Prompts", "Tool Calling", "Testing Agents"] },
  { title: "Knowledge Layer", items: ["Upload Documents", "Vector Search", "RAG Queries", "Permissions"] },
  { title: "Workflows", items: ["Visual Editor", "Triggers", "Nodes", "Monitoring"] },
  { title: "Model Gateway", items: ["Unified API", "Routing", "Failover", "Cost Tracking"] },
];

export function DocsPage({ locale = "en" as Locale }) {
  return (
    <>
      <Section className="pt-32 pb-16">
        <Container className="text-center">
          <h1 className="font-display text-4xl font-medium md:text-5xl">Documentation</h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Guides and references for building with NextLayer.
          </p>
          <Button href={getLocalizedPath("/early-access", locale)} className="mt-6">Get API access</Button>
        </Container>
      </Section>
      <Section variant="soft">
        <Container>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {docSections.map((section) => (
              <Card key={section.title}>
                <h2 className="font-medium">{section.title}</h2>
                <ul className="mt-3 space-y-2">
                  {section.items.map((item) => (
                    <li key={item}>
                      <span className="text-sm text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
          <p className="mt-8 text-center text-xs text-muted">
            Documentation is placeholder content. Full docs will be published before platform launch.
          </p>
        </Container>
      </Section>
    </>
  );
}
