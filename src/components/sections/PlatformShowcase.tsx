"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { PLATFORM_FEATURES } from "@/lib/constants";

export function PlatformShowcase() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-32 lg:py-48 bg-white/[0.02]" aria-labelledby="platform-heading">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <p className="text-accent-blue text-sm font-mono tracking-widest uppercase mb-6">Platform</p>
          <h2 id="platform-heading" className="section-title font-bold text-white max-w-3xl">
            Command center for every vehicle.
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PLATFORM_FEATURES.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative p-8 rounded-2xl border border-white/5 bg-black hover:border-accent-blue/20 transition-all duration-500"
            >
              <div className="flex items-baseline justify-between mb-6">
                <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
                <span className="text-2xl font-bold text-accent-blue font-mono">{feature.metric}</span>
              </div>
              <p className="text-sm text-white/40 leading-relaxed mb-4">{feature.description}</p>
              <p className="text-xs text-white/25 font-mono uppercase tracking-wider">{feature.unit}</p>

              <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent-blue/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-16 relative rounded-2xl border border-white/5 overflow-hidden aspect-[21/9] bg-black"
          aria-label="Platform dashboard preview"
        >
          <div className="absolute inset-0 grid-overlay opacity-20" />
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 800 340" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
            {[...Array(8)].map((_, i) => (
              <circle
                key={i}
                cx={100 + i * 90}
                cy={120 + Math.sin(i) * 40}
                r="3"
                fill="#00D4FF"
                opacity="0.6"
              >
                <animate attributeName="opacity" values="0.3;0.8;0.3" dur={`${2 + i * 0.3}s`} repeatCount="indefinite" />
              </circle>
            ))}
            <path d="M50,200 Q200,150 400,200 T750,180" fill="none" stroke="rgba(0,212,255,0.2)" strokeWidth="1" className="data-trail" />
            <rect x="600" y="40" width="160" height="100" rx="8" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
            <text x="620" y="70" fill="rgba(255,255,255,0.3)" fontSize="10" fontFamily="monospace">RISK SCORE</text>
            <text x="620" y="100" fill="#00D4FF" fontSize="24" fontFamily="monospace" fontWeight="bold">94.2</text>
            <rect x="600" y="160" width="160" height="100" rx="8" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
            <text x="620" y="190" fill="rgba(255,255,255,0.3)" fontSize="10" fontFamily="monospace">BATTERY SOH</text>
            <text x="620" y="220" fill="#39FF14" fontSize="24" fontFamily="monospace" fontWeight="bold">87%</text>
          </svg>
          <div className="absolute bottom-6 left-6">
            <p className="text-xs font-mono text-white/30 uppercase tracking-widest">Live Fleet Dashboard</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
