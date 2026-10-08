"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/layout/Header";
import { Container } from "@/components/ui/Section";

export function FinalCTA() {
  return (
    <section className="relative py-32 md:py-48 bg-background overflow-hidden grid-pattern" aria-label="Call to action">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-surface to-background" />
      <Container className="relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium tracking-tight leading-[1.05] max-w-4xl mx-auto">
            Turn knowledge into action.
          </h2>
          <p className="mt-6 text-lg md:text-xl text-muted max-w-2xl mx-auto">
            Join forward-thinking organizations building the future of cognitive intelligence with Cognis.
          </p>
          <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/register/" size="lg">
              Start Building
            </Button>
            <Button href="/contact/" variant="secondary" size="lg">
              Contact Cognis
            </Button>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
