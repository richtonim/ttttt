"use client";

import { useEffect, useRef, useState } from "react";
import { FadeIn } from "@/components/FadeIn";
import { useInView } from "framer-motion";

const stats = [
  { value: 2.4, suffix: "PB", label: "Data Protected", decimals: 1 },
  { value: 12, suffix: "ms", label: "Detection Speed", decimals: 0 },
  { value: 94, suffix: "%", label: "Risk Reduction", decimals: 0 },
  { value: 99.99, suffix: "%", label: "System Uptime", decimals: 2 },
];

function AnimatedStat({ value, suffix, label, decimals }: typeof stats[0]) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    const duration = 2000;
    const start = performance.now();
    const animate = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(value * eased);
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [isInView, value]);

  return (
    <div ref={ref} className="text-center">
      <p className="text-5xl font-light tracking-tight text-white md:text-7xl lg:text-8xl">
        {display.toFixed(decimals)}{suffix}
      </p>
      <p className="mt-4 text-sm uppercase tracking-widest text-muted">{label}</p>
    </div>
  );
}

export function MetricsSection() {
  return (
    <section className="relative overflow-hidden border-b border-white/5 bg-[#030303] py-32">
      <div className="grid-bg absolute inset-0 opacity-20" aria-hidden="true" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <FadeIn>
          <h2 className="section-title text-center font-medium text-white">Trusted at scale.</h2>
        </FadeIn>
        <div className="mt-20 grid gap-16 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <AnimatedStat key={stat.label} {...stat} />
          ))}
        </div>
      </div>
    </section>
  );
}
