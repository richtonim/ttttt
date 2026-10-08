"use client";

import { motion } from "framer-motion";
import { USE_CASES } from "@/lib/site";
import { Container, Section, SectionHeader } from "@/components/ui/Section";

export function UseCases() {
  return (
    <Section id="use-cases" dark>
      <Container>
        <SectionHeader
          label="Applications"
          title="Intelligence for every domain."
          description="Cognis adapts to your industry's unique challenges — from operations to research."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
          {USE_CASES.map((useCase, i) => (
            <motion.article
              key={useCase.id}
              id={useCase.id}
              className="bg-surface p-8 md:p-10 group hover:bg-surface-elevated transition-colors duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
            >
              <div className="w-8 h-px bg-accent mb-6 group-hover:w-12 transition-all duration-500" />
              <h3 className="text-xl font-medium tracking-tight">{useCase.title}</h3>
              <p className="mt-4 text-muted leading-relaxed">{useCase.description}</p>
            </motion.article>
          ))}
        </div>
      </Container>
    </Section>
  );
}
