"use client";

import { motion } from "framer-motion";
import { Container, Section, SectionHeader } from "@/components/ui/Section";
import { Button } from "@/components/layout/Header";

const codeSample = `import { Cognis } from '@cognis/sdk';

const client = new Cognis({ apiKey: process.env.COGNIS_API_KEY });

const agent = await client.agents.create({
  name: 'research-analyst',
  model: 'cognis-reason-v2',
  tools: ['search', 'analyze', 'report'],
  memory: { type: 'persistent', scope: 'organization' },
});

const result = await agent.run({
  task: 'Analyze Q4 market trends and draft executive summary',
  context: { department: 'strategy', format: 'brief' },
});

console.log(result.output);
// → Structured analysis with citations`;

const devFeatures = [
  "SDK for TypeScript, Python, and Go",
  "RESTful API with OpenAPI specification",
  "Webhooks for real-time event streaming",
  "Visual Agent Builder with code export",
  "Model deployment and fine-tuning pipelines",
  "Enterprise system integrations",
];

export function DeveloperModule() {
  return (
    <Section id="developers" dark>
      <Container>
        <SectionHeader
          label="Developers"
          title="Build with Cognis."
          description="A clean, powerful API designed for developers who demand precision and control."
        />

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <div>
            <ul className="space-y-4">
              {devFeatures.map((feature, i) => (
                <motion.li
                  key={feature}
                  className="flex items-start gap-3 text-muted"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                >
                  <span className="text-accent mt-1">→</span>
                  <span>{feature}</span>
                </motion.li>
              ))}
            </ul>
            <div className="mt-10">
              <Button href="/developers/" variant="secondary">
                View Documentation
              </Button>
            </div>
          </div>

          <motion.div
            className="border border-border bg-[#0d0d0d] overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-2 px-4 py-3 border-b border-border">
              <span className="w-2.5 h-2.5 rounded-full bg-border" />
              <span className="w-2.5 h-2.5 rounded-full bg-border" />
              <span className="w-2.5 h-2.5 rounded-full bg-border" />
              <span className="ml-2 text-xs font-mono text-muted">agent.ts</span>
            </div>
            <pre className="p-6 overflow-x-auto text-sm leading-relaxed">
              <code className="font-mono text-muted whitespace-pre">{codeSample}</code>
            </pre>
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}
