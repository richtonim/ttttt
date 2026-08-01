"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Activity, Brain, GitBranch, BarChart3, Zap } from "lucide-react";
import { FadeIn } from "../animations";

const panels = [
  {
    icon: Brain,
    title: "Model Status",
    content: "qualia-perception-v3.2",
    status: "Active",
    metric: "99.2% accuracy",
  },
  {
    icon: Zap,
    title: "Real-time Inference",
    content: "Processing stream",
    status: "Live",
    metric: "47ms latency",
  },
  {
    icon: GitBranch,
    title: "Agent Workflow",
    content: "research-agent-01",
    status: "Running",
    metric: "3 tasks active",
  },
  {
    icon: Activity,
    title: "Data Pipeline",
    content: "multimodal-ingest",
    status: "Healthy",
    metric: "2.4M events/hr",
  },
  {
    icon: BarChart3,
    title: "Analytics",
    content: "decision-insights",
    status: "Updated",
    metric: "12 dashboards",
  },
];

export function PlatformShowcase() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <section className="py-32 lg:py-40 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <FadeIn>
          <p className="text-sm tracking-[0.15em] uppercase text-qualia-gray-500 mb-4">
            Platform
          </p>
          <h2 className="text-heading font-semibold text-qualia-black mb-6">
            The intelligence console
          </h2>
          <p className="text-body text-qualia-gray-600 max-w-xl mb-16">
            Monitor models, orchestrate agents and visualize data flows — all from a unified
            control plane designed for clarity.
          </p>
        </FadeIn>

        <div ref={containerRef} className="relative">
          <div className="border border-qualia-gray-200 rounded-2xl overflow-hidden bg-qualia-gray-50">
            {/* Console header */}
            <div className="flex items-center gap-2 px-4 py-3 border-b border-qualia-gray-200 bg-white">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-qualia-gray-300" />
                <div className="w-3 h-3 rounded-full bg-qualia-gray-300" />
                <div className="w-3 h-3 rounded-full bg-qualia-gray-300" />
              </div>
              <span className="text-xs text-qualia-gray-400 ml-2">qualia console</span>
            </div>

            {/* Console body */}
            <div className="p-6 lg:p-10 min-h-[400px] relative">
              <motion.div style={{ y }} className="space-y-4">
                {panels.map((panel, i) => {
                  const Icon = panel.icon;
                  return (
                    <motion.div
                      key={panel.title}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-50px" }}
                      transition={{ delay: i * 0.1, duration: 0.5 }}
                      className="flex items-center gap-4 p-4 bg-white border border-qualia-gray-200 rounded-xl hover:border-qualia-accent/30 transition-colors"
                    >
                      <div className="p-2 rounded-lg bg-qualia-gray-50">
                        <Icon size={20} className="text-qualia-accent" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2">
                          <p className="text-sm font-medium text-qualia-black">{panel.title}</p>
                          <span className="text-xs px-2 py-0.5 rounded-full bg-green-50 text-green-700">
                            {panel.status}
                          </span>
                        </div>
                        <p className="text-xs text-qualia-gray-500 font-mono truncate">
                          {panel.content}
                        </p>
                      </div>
                      <p className="text-sm text-qualia-gray-600 hidden sm:block">
                        {panel.metric}
                      </p>
                    </motion.div>
                  );
                })}
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
