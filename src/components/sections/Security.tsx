"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { SECURITY_FEATURES } from "@/lib/constants";

export function Security() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-32 lg:py-48 bg-white/[0.02]" aria-labelledby="security-heading">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <p className="text-accent-green text-sm font-mono tracking-widest uppercase mb-6">Trust & Safety</p>
          <h2 id="security-heading" className="section-title font-bold text-white max-w-3xl">
            Enterprise-grade security. Always.
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SECURITY_FEATURES.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="p-8 rounded-2xl border border-white/5 hover:border-white/10 transition-colors"
            >
              <div className="w-10 h-10 rounded-full border border-accent-green/30 flex items-center justify-center mb-6">
                <div className="w-2 h-2 rounded-full bg-accent-green" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-3">{feature.title}</h3>
              <p className="text-sm text-white/40 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
