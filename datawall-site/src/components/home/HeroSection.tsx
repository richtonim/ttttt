"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { DataWallVisual } from "@/components/DataVisuals";
import { SITE } from "@/lib/site";

export function HeroSection() {
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    let ctx: ReturnType<typeof import("gsap").gsap.context> | undefined;
    const init = async () => {
      const { gsap } = await import("gsap");
      if (titleRef.current) {
        ctx = gsap.context(() => {
          gsap.from(titleRef.current, {
            y: 60,
            opacity: 0,
            duration: 1.2,
            ease: "power3.out",
            delay: 0.2,
          });
        });
      }
    };
    init();
    return () => ctx?.revert();
  }, []);

  return (
    <section className="relative flex min-h-screen items-center overflow-hidden">
      <DataWallVisual />
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-32 lg:px-8">
        <p className="mb-6 text-sm font-medium uppercase tracking-[0.2em] text-electric">
          {SITE.tagline}
        </p>
        <h1 ref={titleRef} className="hero-title max-w-5xl font-medium text-white">
          Your data.
          <br />
          <span className="text-gradient-electric">Under control.</span>
        </h1>
        <p className="mt-8 max-w-xl text-lg text-muted md:text-xl">
          {SITE.description}
        </p>
        <div className="mt-12 flex flex-wrap gap-4">
          <Link href="/platform/" className="btn-primary">
            Explore Datawall
          </Link>
          <Link href="/demo/" className="btn-secondary">
            Book a Demo
          </Link>
        </div>
        <div className="mt-20 flex flex-wrap gap-8 border-t border-white/10 pt-8">
          {[
            { label: "Systems Scanned", value: "Live", status: "secure" },
            { label: "Threat Level", value: "Low", status: "secure" },
            { label: "Active Nodes", value: "2,847", status: "active" },
          ].map((item) => (
            <div key={item.label} className="flex items-center gap-3">
              <span
                className={`h-2 w-2 rounded-full ${item.status === "secure" ? "bg-secure" : "bg-electric"}`}
                style={{ animation: "pulse-glow 2s ease-in-out infinite" }}
              />
              <div>
                <p className="text-xs uppercase tracking-wider text-muted">{item.label}</p>
                <p className="text-sm font-medium text-white">{item.value}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
