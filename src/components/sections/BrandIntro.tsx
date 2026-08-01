"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export function BrandIntro() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const dataSources = [
    "Vehicle Telemetry",
    "Road Infrastructure",
    "Driver Behavior",
    "Environmental Sensors",
    "Fleet Operations",
    "Traffic Patterns",
  ];

  return (
    <section ref={ref} className="relative py-32 lg:py-48 overflow-hidden" aria-labelledby="brand-intro-heading">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <p className="text-accent-blue text-sm font-mono tracking-widest uppercase mb-6">Unified Intelligence</p>
          <h2 id="brand-intro-heading" className="section-title font-bold text-white max-w-4xl">
            Millions of signals.
            <br />
            <span className="text-white/40">One clear decision.</span>
          </h2>
          <p className="mt-8 text-lg text-white/50 max-w-2xl leading-relaxed">
            Entropy unifies vehicle telemetry, road infrastructure, driver behavior and environmental
            data into a single intelligence layer — transforming raw signals into actionable decisions
            for safer, more efficient mobility.
          </p>
        </motion.div>

        <div className="mt-20 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {dataSources.map((source, i) => (
            <motion.div
              key={source}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
              className="relative p-6 border border-white/5 rounded-2xl bg-white/[0.02] hover:bg-white/[0.04] transition-colors group"
            >
              <div className="w-2 h-2 rounded-full bg-accent-blue mb-4 group-hover:shadow-[0_0_12px_rgba(0,212,255,0.5)] transition-shadow" />
              <p className="text-sm text-white/70 font-medium">{source}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-16 flex items-center justify-center"
          aria-hidden="true"
        >
          <svg width="600" height="60" viewBox="0 0 600 60" className="w-full max-w-xl opacity-30">
            <line x1="0" y1="30" x2="250" y2="30" stroke="#00D4FF" strokeWidth="1" className="data-trail" />
            <circle cx="300" cy="30" r="20" fill="none" stroke="#00D4FF" strokeWidth="1" />
            <circle cx="300" cy="30" r="6" fill="#00D4FF" />
            <line x1="350" y1="30" x2="600" y2="30" stroke="#39FF14" strokeWidth="1" className="data-trail" />
          </svg>
        </motion.div>
      </div>
    </section>
  );
}
