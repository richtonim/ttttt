"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { WORKFLOW_STEPS } from "@/lib/site";
import { Container, Section, SectionHeader } from "@/components/ui/Section";

export function Workflow() {
  const lineRef = useRef<SVGPathElement>(null);

  useEffect(() => {
    if (!lineRef.current) return;
    const length = lineRef.current.getTotalLength();
    gsap.fromTo(
      lineRef.current,
      { strokeDasharray: length, strokeDashoffset: length },
      {
        strokeDashoffset: 0,
        duration: 2.5,
        ease: "power2.inOut",
        scrollTrigger: undefined,
      }
    );
  }, []);

  return (
    <Section id="workflow">
      <Container>
        <SectionHeader
          label="How it works"
          title="From data to action."
          description="A continuous loop of connection, understanding, reasoning, decision, and execution."
          align="center"
        />

        <div className="relative mt-8">
          <svg
            className="absolute top-8 left-0 w-full h-2 hidden lg:block"
            viewBox="0 0 1000 8"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <path
              ref={lineRef}
              d="M 0 4 L 1000 4"
              stroke="#4A9EFF"
              strokeWidth="1"
              fill="none"
              opacity="0.4"
            />
          </svg>

          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-4">
            {WORKFLOW_STEPS.map((item, i) => (
              <motion.div
                key={item.step}
                className="relative text-center lg:text-left"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.5 }}
              >
                <div className="mx-auto lg:mx-0 w-16 h-16 border border-border flex items-center justify-center mb-6 bg-background relative z-10">
                  <span className="text-sm font-mono text-accent">{String(i + 1).padStart(2, "0")}</span>
                </div>
                <h3 className="text-xl font-medium tracking-tight">{item.step}</h3>
                <p className="mt-2 text-sm text-muted">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
