"use client";

import { motion } from "framer-motion";
import { Container, Section, SectionHeader } from "@/components/ui/Section";

const pillars = [
  {
    title: "Understand",
    text: "Cognis parses complex documents, conversations, and data streams — extracting meaning beyond keywords.",
  },
  {
    title: "Contextualize",
    text: "Every piece of information is placed within your organizational knowledge graph, building rich situational awareness.",
  },
  {
    title: "Decide",
    text: "Autonomous reasoning engines evaluate options, weigh trade-offs, and recommend or execute optimal actions.",
  },
];

export function BrandIntro() {
  return (
    <Section id="about">
      <Container>
        <SectionHeader
          label="About Cognis"
          title="From information to intelligence."
          description="Cognis bridges the gap between raw data and autonomous action — understanding complex information, establishing context, and executing decisions with precision."
        />

        <div className="grid gap-px bg-border md:grid-cols-3">
          {pillars.map((pillar, i) => (
            <motion.div
              key={pillar.title}
              className="bg-background p-8 md:p-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
            >
              <span className="text-sm font-mono text-accent">0{i + 1}</span>
              <h3 className="mt-4 text-2xl font-medium tracking-tight">{pillar.title}</h3>
              <p className="mt-4 text-muted leading-relaxed">{pillar.text}</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
