"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { CORE_CAPABILITIES } from "@/lib/constants";

export function CoreCapabilities() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section ref={ref} className="py-32 lg:py-48" aria-labelledby="capabilities-heading">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 mb-20">
        <p className="text-accent-green text-sm font-mono tracking-widest uppercase mb-6">Core Capabilities</p>
        <h2 id="capabilities-heading" className="section-title font-bold text-white">
          Built for the road ahead.
        </h2>
      </div>

      <div className="space-y-0">
        {CORE_CAPABILITIES.map((cap, i) => (
          <motion.div
            key={cap.number}
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: i * 0.15 }}
            className={`relative flex flex-col ${i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} min-h-[60vh] lg:min-h-[70vh]`}
          >
            <div className="relative flex-1 min-h-[40vh] lg:min-h-0 overflow-hidden">
              <Image
                src={cap.image}
                alt={cap.title}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent" />
            </div>

            <div className="flex-1 flex items-center px-6 py-16 lg:px-16 lg:py-0">
              <div>
                <span className="text-[clamp(4rem,10vw,8rem)] font-bold text-white/5 leading-none block">
                  {cap.number}
                </span>
                <h3 className="subsection-title font-bold text-white -mt-8 lg:-mt-12 mb-6">
                  {cap.title}
                </h3>
                <p className="text-lg text-white/50 max-w-md leading-relaxed">
                  {cap.description}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
