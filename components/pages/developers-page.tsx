import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CodeBlock } from "@/components/code/code-block";
import { Check } from "lucide-react";
import type { Locale } from "@/lib/i18n/locales";
import { getLocalizedPath } from "@/lib/i18n/locales";

const quickStart = [
  { step: 1, title: "Create an account", desc: "Sign up and join the early access waitlist." },
  { step: 2, title: "Generate an API key", desc: "Create your first API key in the dashboard." },
  { step: 3, title: "Install the SDK", desc: "Add the SDK to your project." },
  { step: 4, title: "Run your first agent", desc: "Execute an agent with a single API call." },
];

const apiSections = [
  { title: "Agent API", desc: "Create, configure, and run AI agents programmatically." },
  { title: "Knowledge API", desc: "Upload documents, manage knowledge bases, and run RAG queries." },
  { title: "Workflow API", desc: "Trigger and monitor automated AI workflows." },
  { title: "Model Gateway API", desc: "Route requests across multiple model providers." },
];

export function DevelopersPage({ locale = "en" as Locale }) {
  return (
    <>
      <Section className="pt-32 pb-16">
        <Container className="text-center">
          <h1 className="font-display text-4xl font-medium md:text-5xl lg:text-6xl">
            Build AI products without rebuilding AI infrastructure.
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Use flexible APIs, SDKs, and tools to add agents, RAG, workflows, and model routing to your applications.
          </p>
          <Button href={getLocalizedPath("/early-access", locale)} className="mt-8">Start building</Button>
        </Container>
      </Section>

      <Section variant="soft" id="quickstart">
        <Container>
          <h2 className="font-display text-2xl font-medium md:text-3xl">Quick Start</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {quickStart.map((s) => (
              <Card key={s.step}>
                <div className="mb-2 flex h-8 w-8 items-center justify-center rounded-full bg-brand-light text-sm font-medium text-brand-dark">
                  {s.step}
                </div>
                <h3 className="font-medium">{s.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{s.desc}</p>
              </Card>
            ))}
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            <div className="rounded-card border border-border bg-surface-dark p-4 font-mono text-sm text-white">
              <span className="text-white/50">$</span> npm install @nextlayer/sdk
            </div>
            <div className="rounded-card border border-border bg-surface-dark p-4 font-mono text-sm text-white">
              <span className="text-white/50">$</span> pip install nextlayer
            </div>
          </div>
          <p className="mt-3 text-xs text-muted">Package names are placeholder content pending production release.</p>
        </Container>
      </Section>

      <Section id="api">
        <Container>
          <h2 className="font-display text-2xl font-medium">API Overview</h2>
          <div className="mt-8">
            <CodeBlock />
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {apiSections.map((api) => (
              <Card key={api.title}>
                <h3 className="font-medium">{api.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{api.desc}</p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <Section variant="soft" id="sdks">
        <Container>
          <h2 className="font-display text-2xl font-medium">SDKs</h2>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            <Card>
              <h3 className="font-medium">JavaScript SDK</h3>
              <p className="mt-2 text-sm text-muted-foreground">Full TypeScript support for Node.js and browser environments.</p>
            </Card>
            <Card>
              <h3 className="font-medium">Python SDK</h3>
              <p className="mt-2 text-sm text-muted-foreground">Pythonic interface for agents, knowledge, and workflows.</p>
            </Card>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <h2 className="font-display text-2xl font-medium">Webhooks & Streaming</h2>
              <p className="mt-3 text-muted-foreground">Receive real-time events and stream agent responses for interactive applications.</p>
            </div>
            <div>
              <h2 className="font-display text-2xl font-medium">Authentication & Rate Limits</h2>
              <p className="mt-3 text-muted-foreground">Secure API key authentication with configurable rate limits per workspace.</p>
            </div>
          </div>
        </Container>
      </Section>

      <Section variant="soft" id="playground">
        <Container>
          <h2 className="font-display text-2xl font-medium">Playground Preview</h2>
          <Card className="mt-6">
            <p className="text-sm text-muted-foreground">Interactive API playground coming soon. Join early access to test APIs.</p>
            <Button href={getLocalizedPath("/early-access", locale)} className="mt-4">Join early access</Button>
          </Card>
        </Container>
      </Section>

      <Section id="changelog">
        <Container>
          <h2 className="font-display text-2xl font-medium">Changelog</h2>
          <div className="mt-6 space-y-4">
            {[
              { version: "0.1.0", date: "2026-01-01", note: "Initial platform preview — placeholder release." },
              { version: "0.0.1", date: "2025-12-01", note: "Early access program announced." },
            ].map((entry) => (
              <div key={entry.version} className="rounded-card border border-border p-4">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-sm font-medium">{entry.version}</span>
                  <span className="text-xs text-muted">{entry.date}</span>
                </div>
                <p className="mt-1 text-sm text-muted-foreground">{entry.note}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section variant="soft" id="status">
        <Container>
          <h2 className="font-display text-2xl font-medium">System Status</h2>
          <Card className="mt-4">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-success" />
              <span className="text-sm">All systems operational — placeholder status page.</span>
            </div>
          </Card>
        </Container>
      </Section>
    </>
  );
}
