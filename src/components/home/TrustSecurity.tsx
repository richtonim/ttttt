"use client";

import { motion } from "framer-motion";
import { Shield, Eye, Lock, Users, FileText } from "lucide-react";
import { TRUST_ITEMS } from "@/lib/site";
import { Container, Section, SectionHeader } from "@/components/ui/Section";

const icons = [Shield, Eye, Lock, Users, FileText];

export function TrustSecurity() {
  return (
    <Section id="trust">
      <Container>
        <SectionHeader
          label="Trust & Security"
          title="Built on trust."
          description="Security and transparency are not features — they are foundational to everything Cognis does."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {TRUST_ITEMS.map((item, i) => {
            const Icon = icons[i];
            return (
              <motion.div
                key={item.title}
                className="border border-border p-8 hover:border-accent/30 transition-colors duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
              >
                <Icon size={20} className="text-accent mb-6" strokeWidth={1.5} />
                <h3 className="text-lg font-medium">{item.title}</h3>
                <p className="mt-3 text-sm text-muted leading-relaxed">{item.description}</p>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
