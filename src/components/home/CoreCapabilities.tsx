"use client";

import { motion } from "framer-motion";
import { CORE_CAPABILITIES } from "@/lib/site";
import { Container, Section, SectionHeader } from "@/components/ui/Section";

export function CoreCapabilities() {
  return (
    <Section id="capabilities" dark>
      <Container>
        <SectionHeader
          label="Capabilities"
          title="Built for cognitive work."
          description="Four foundational capabilities that power every Cognis deployment."
        />

        <div className="space-y-0 border-t border-border">
          {CORE_CAPABILITIES.map((cap, i) => (
            <motion.div
              key={cap.number}
              className="group grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 py-10 md:py-14 border-b border-border items-start"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              <span className="md:col-span-2 text-5xl md:text-7xl font-light text-border group-hover:text-accent transition-colors duration-500 font-mono">
                {cap.number}
              </span>
              <div className="md:col-span-4">
                <h3 className="text-2xl md:text-3xl font-medium tracking-tight">{cap.title}</h3>
              </div>
              <p className="md:col-span-6 text-muted text-lg leading-relaxed max-w-xl">
                {cap.description}
              </p>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
