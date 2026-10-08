"use client";

import { motion } from "framer-motion";
import { TECH_MODULES } from "@/lib/site";
import { Container, Section, SectionHeader } from "@/components/ui/Section";

export function TechModules() {
  return (
    <Section id="technology" dark>
      <Container>
        <SectionHeader
          label="Technology"
          title="Engineered for the enterprise."
          description="A robust foundation of orchestration, memory, integration, control, and observability."
        />

        <div className="grid md:grid-cols-2 gap-px bg-border">
          {TECH_MODULES.map((mod, i) => (
            <motion.div
              key={mod.title}
              className="bg-surface p-8 md:p-10"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              <h3 className="text-lg font-medium tracking-tight">{mod.title}</h3>
              <p className="mt-3 text-muted leading-relaxed">{mod.description}</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
