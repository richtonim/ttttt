"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { API_CODE } from "@/lib/constants";

const devFeatures = ["SDKs", "Webhooks", "Edge AI", "Model Deployment", "Real-time Streams"];

export function Developers() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-32 lg:py-48" aria-labelledby="developers-heading">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <p className="text-accent-blue text-sm font-mono tracking-widest uppercase mb-6">Developers</p>
            <h2 id="developers-heading" className="section-title font-bold text-white mb-6">
              Build on Entropy.
            </h2>
            <p className="text-lg text-white/50 leading-relaxed mb-8">
              Integrate vehicle intelligence into your applications with our comprehensive
              developer platform. SDKs, webhooks, edge AI deployment and real-time data streams.
            </p>

            <div className="flex flex-wrap gap-3 mb-10">
              {devFeatures.map((feat) => (
                <span
                  key={feat}
                  className="px-4 py-2 text-xs font-mono text-white/50 border border-white/10 rounded-full"
                >
                  {feat}
                </span>
              ))}
            </div>

            <div className="flex gap-4">
              <Button href="/developers/" variant="primary">View Docs</Button>
              <Button href="/developers/api-reference/" variant="secondary">API Reference</Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative rounded-2xl border border-white/10 overflow-hidden bg-[#0d0d0d]"
          >
            <div className="flex items-center gap-2 px-4 py-3 border-b border-white/5">
              <div className="w-3 h-3 rounded-full bg-white/10" />
              <div className="w-3 h-3 rounded-full bg-white/10" />
              <div className="w-3 h-3 rounded-full bg-white/10" />
              <span className="ml-2 text-xs text-white/30 font-mono">fleet-monitor.ts</span>
            </div>
            <pre className="p-6 overflow-x-auto text-sm leading-relaxed" aria-label="API code example">
              <code className="font-mono text-white/70">
                {API_CODE.split("\n").map((line, i) => (
                  <div key={i} className="flex">
                    <span className="text-white/20 w-8 shrink-0 select-none text-right mr-4">{i + 1}</span>
                    <span>
                      {line.includes("import") && <span className="text-accent-blue">import</span>}
                      {line.includes("import") ? line.replace("import", "") : null}
                      {!line.includes("import") && (
                        <>
                          {line.includes("//") ? (
                            <>
                              <span>{line.split("//")[0]}</span>
                              <span className="text-white/25">//{line.split("//")[1]}</span>
                            </>
                          ) : line.includes("'") ? (
                            line.split(/('.*?')/).map((part, j) =>
                              part.startsWith("'") ? (
                                <span key={j} className="text-accent-green">{part}</span>
                              ) : (
                                <span key={j}>{part}</span>
                              )
                            )
                          ) : (
                            line
                          )}
                        </>
                      )}
                    </span>
                  </div>
                ))}
              </code>
            </pre>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
