"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { USE_CASES } from "@/lib/constants";

export function UseCases() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-32 lg:py-48" aria-labelledby="use-cases-heading">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <p className="text-accent-blue text-sm font-mono tracking-widest uppercase mb-6">Applications</p>
          <h2 id="use-cases-heading" className="section-title font-bold text-white">
            Intelligence for every industry.
          </h2>
        </motion.div>

        <div className="space-y-0 border-t border-white/5">
          {USE_CASES.map((useCase, i) => (
            <motion.div
              key={useCase.title}
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Link
                href={useCase.href}
                className="group flex items-center justify-between py-10 border-b border-white/5 hover:bg-white/[0.02] transition-colors px-4 -mx-4 rounded-lg"
              >
                <div className="flex items-center gap-8">
                  <span className="text-sm font-mono text-white/20 w-8">{String(i + 1).padStart(2, "0")}</span>
                  <div>
                    <h3 className="text-2xl md:text-3xl font-semibold text-white group-hover:text-accent-blue transition-colors">
                      {useCase.title}
                    </h3>
                    <p className="mt-2 text-white/40 max-w-xl">{useCase.description}</p>
                  </div>
                </div>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  className="text-white/20 group-hover:text-accent-blue group-hover:translate-x-1 transition-all shrink-0"
                  aria-hidden="true"
                >
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
