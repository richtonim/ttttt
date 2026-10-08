"use client";

import { useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import gsap from "gsap";
import { METRICS } from "@/lib/constants";

export function DataMetrics() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const numbersRef = useRef<HTMLSpanElement[]>([]);

  useEffect(() => {
    if (!inView) return;
    numbersRef.current.forEach((el, i) => {
      if (!el) return;
      gsap.fromTo(
        el,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, delay: i * 0.15, ease: "power3.out" }
      );
    });
  }, [inView]);

  return (
    <section
      ref={ref}
      className="relative py-32 lg:py-48 bg-black overflow-hidden"
      aria-labelledby="metrics-heading"
    >
      <div className="absolute inset-0 grid-overlay opacity-10" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          className="text-center text-white/30 text-sm font-mono tracking-widest uppercase mb-20"
        >
          By the numbers
        </motion.p>

        <h2 id="metrics-heading" className="sr-only">Platform metrics</h2>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {METRICS.map((metric, i) => (
            <div key={metric.label} className="text-center">
              <span
                ref={(el) => { if (el) numbersRef.current[i] = el; }}
                className="block text-[clamp(2.5rem,6vw,5rem)] font-bold text-white leading-none tracking-tight"
              >
                {metric.value}
              </span>
              <p className="mt-4 text-sm text-white/40 font-mono uppercase tracking-wider">
                {metric.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
