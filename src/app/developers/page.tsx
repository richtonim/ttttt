import { PageLayout } from "@/components/layout/PageLayout";
import { Button } from "@/components/layout/Header";
import { Container, Section, SectionHeader } from "@/components/ui/Section";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Developers",
  description:
    "Cognis developer resources — API reference, SDKs, webhooks, Agent Builder, and model deployment documentation.",
  path: "/developers/",
});

const sections = [
  {
    id: "api",
    title: "API Reference",
    description:
      "RESTful API with comprehensive OpenAPI 3.1 specification. Authenticate with API keys or OAuth 2.0, rate-limited per organization tier.",
    code: `curl -X POST https://api.cognis.click/v1/agents/run \\
  -H "Authorization: Bearer $COGNIS_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{"agent_id": "ag_abc123", "input": "Analyze Q4 trends"}'`,
  },
  {
    id: "sdk",
    title: "SDK",
    description:
      "Official SDKs for TypeScript, Python, and Go. Type-safe clients with built-in retry logic, streaming support, and error handling.",
    code: `pip install cognis

from cognis import CognisClient

client = CognisClient(api_key="sk_...")
response = client.agents.run("ag_abc123", input="Hello")`,
  },
  {
    id: "webhooks",
    title: "Webhooks",
    description:
      "Real-time event notifications for agent completions, errors, and system events. Signed payloads with replay protection.",
    code: `// Webhook payload example
{
  "event": "agent.run.completed",
  "data": { "run_id": "run_xyz", "status": "success" },
  "timestamp": "2026-01-15T10:30:00Z"
}`,
  },
  {
    id: "agent-builder",
    title: "Agent Builder",
    description:
      "Visual interface for designing agent workflows. Export to code, version control integrations, and collaborative editing.",
    code: `// Exported agent configuration
{
  "name": "support-agent",
  "model": "cognis-reason-v2",
  "tools": ["search", "ticket_create"],
  "guardrails": { "max_steps": 10 }
}`,
  },
];

export default function DevelopersPage() {
  return (
    <PageLayout>
      <Section className="pt-24 md:pt-32">
        <Container>
          <SectionHeader
            label="Developers"
            title="Build with precision."
            description="Everything you need to integrate Cognis into your applications — from quick prototypes to production deployments."
          />
          <div className="flex flex-wrap gap-4">
            <Button href="/register/">Get API Access</Button>
            <Button href="https://github.com/cognis-ai" variant="secondary">GitHub</Button>
          </div>
        </Container>
      </Section>

      {sections.map((section, i) => (
        <Section key={section.id} id={section.id} dark={i % 2 === 1}>
          <Container>
            <h2 className="text-2xl md:text-3xl font-medium tracking-tight">{section.title}</h2>
            <p className="mt-4 text-muted max-w-2xl leading-relaxed">{section.description}</p>
            <pre className="mt-8 border border-border bg-[#0d0d0d] p-6 overflow-x-auto text-sm font-mono text-muted leading-relaxed">
              <code>{section.code}</code>
            </pre>
          </Container>
        </Section>
      ))}

      <Section id="deployment">
        <Container>
          <h2 className="text-2xl md:text-3xl font-medium tracking-tight">Model Deployment</h2>
          <p className="mt-4 text-muted max-w-2xl leading-relaxed">
            Deploy custom fine-tuned models alongside Cognis foundation models. Managed infrastructure
            with auto-scaling, A/B testing, and performance monitoring built in.
          </p>
        </Container>
      </Section>
    </PageLayout>
  );
}
