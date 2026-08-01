"use client";

import { useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import gsap from "gsap";
import { TECH_FLOW } from "@/lib/constants";

export function TechFlow() {
  const ref = useRef(null);
  const flowRef = useRef<SVGSVGElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!flowRef.current || !inView) return;
    const nodes = flowRef.current.querySelectorAll(".flow-node");
    gsap.fromTo(
      nodes,
      { scale: 0, opacity: 0 },
      { scale: 1, opacity: 1, duration: 0.6, stagger: 0.2, ease: "back.out(1.7)" }
    );
  }, [inView]);

  return (
    <section ref={ref} className="py-32 lg:py-48 overflow-hidden" aria-labelledby="tech-flow-heading">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <p className="text-accent-green text-sm font-mono tracking-widest uppercase mb-6">AI Pipeline</p>
          <h2 id="tech-flow-heading" className="section-title font-bold text-white">
            From signal to action.
          </h2>
        </motion.div>

        <div className="hidden lg:block mb-16">
          <svg ref={flowRef} viewBox="0 0 1000 120" className="w-full" aria-hidden="true">
            <line x1="100" y1="60" x2="900" y2="60" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
            <line x1="100" y1="60" x2="900" y2="60" stroke="url(#flowGrad)" strokeWidth="2" className="data-trail" />
            {TECH_FLOW.map((_, i) => (
              <g key={i} className="flow-node" transform={`translate(${100 + i * 200}, 60)`}>
                <circle r="16" fill="#0a0a0a" stroke="#00D4FF" strokeWidth="2" />
                <circle r="4" fill="#00D4FF" />
              </g>
            ))}
            <defs>
              <linearGradient id="flowGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#00D4FF" />
                <stop offset="100%" stopColor="#39FF14" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 lg:gap-4">
          {TECH_FLOW.map((step, i) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="text-center lg:text-left"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full border border-accent-blue/30 mb-4 lg:hidden">
                <span className="text-accent-blue font-mono text-sm">{String(i + 1).padStart(2, "0")}</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">{step.step}</h3>
              <p className="text-sm text-white/40 leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
