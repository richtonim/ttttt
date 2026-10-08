"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/layout/Header";
import { CognitiveNetwork } from "@/components/ui/CognitiveNetwork";
import { SITE } from "@/lib/site";

export function Hero() {
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width - 0.5) * 20;
      const y = ((e.clientY - rect.top) / rect.height - 0.5) * 20;
      containerRef.current.style.setProperty("--mouse-x", `${x}px`);
      containerRef.current.style.setProperty("--mouse-y", `${y}px`);
    };

    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center pt-16 overflow-hidden grid-pattern"
      aria-label="Hero"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          background:
            "radial-gradient(600px circle at calc(50% + var(--mouse-x, 0px)) calc(50% + var(--mouse-y, 0px)), rgba(74,158,255,0.08), transparent 60%)",
        }}
      />
      <CognitiveNetwork />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 py-24 md:py-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="mb-6 text-sm font-mono uppercase tracking-[0.25em] text-accent">
            Cognitive Intelligence Platform
          </p>
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[7.5rem] font-medium tracking-tight leading-[0.95] text-foreground max-w-5xl">
            {SITE.tagline}
          </h1>
          <p className="mt-8 max-w-2xl text-lg md:text-xl text-muted leading-relaxed">
            {SITE.subtitle}
          </p>
          <div className="mt-12 flex flex-col sm:flex-row gap-4">
            <Button href="/explore/" size="lg">
              Explore Cognis
            </Button>
            <Button href="/demo/" variant="secondary" size="lg">
              Book a Demo
            </Button>
          </div>
        </motion.div>

        <motion.div
          className="mt-24 flex items-center gap-8 text-sm text-muted"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse-slow" />
            <span>Real-time inference</span>
          </div>
          <div className="hidden sm:block h-4 w-px bg-border" />
          <span className="hidden sm:inline">Enterprise-ready</span>
          <div className="hidden sm:block h-4 w-px bg-border" />
          <span className="hidden md:inline">Explainable by design</span>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
    </section>
  );
}
