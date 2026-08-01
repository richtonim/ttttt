"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ARCHITECTURE_STEPS } from "@/lib/constants";
import { FadeIn } from "../animations";

export function Architecture() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-32 lg:py-40 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <FadeIn>
          <p className="text-sm tracking-[0.15em] uppercase text-qualia-gray-500 mb-4">
            Architecture
          </p>
          <h2 className="text-heading font-semibold text-qualia-black mb-6">
            From data to decision
          </h2>
          <p className="text-body text-qualia-gray-600 max-w-xl mb-20">
            A unified pipeline that transforms raw signals into intelligent action through
            perception, context and reasoning.
          </p>
        </FadeIn>

        <div ref={ref} className="relative">
          {/* Connection line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-px bg-qualia-gray-200 -translate-y-1/2" />
          <motion.div
            className="hidden lg:block absolute top-1/2 left-0 h-px bg-qualia-accent -translate-y-1/2 origin-left"
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
            transition={{ duration: 1.5, ease: [0.25, 0.1, 0.25, 1] }}
            style={{ width: "100%" }}
          />

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-4">
            {ARCHITECTURE_STEPS.map((step, i) => (
              <motion.div
                key={step.label}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.15, duration: 0.6 }}
                className="relative text-center lg:text-left"
              >
                <div className="relative z-10 w-12 h-12 mx-auto lg:mx-0 rounded-full border-2 border-qualia-black bg-white flex items-center justify-center mb-4">
                  <span className="text-sm font-mono text-qualia-black">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-qualia-black mb-2">{step.label}</h3>
                <p className="text-sm text-qualia-gray-600">{step.description}</p>

                {i < ARCHITECTURE_STEPS.length - 1 && (
                  <div className="lg:hidden flex justify-center my-4">
                    <div className="w-px h-8 bg-qualia-gray-300" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
