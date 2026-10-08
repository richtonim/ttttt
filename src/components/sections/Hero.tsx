"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import gsap from "gsap";
import { Button } from "@/components/ui/Button";
import { SITE_TAGLINE, SITE_DESCRIPTION } from "@/lib/constants";

export function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const titleY = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  useEffect(() => {
    if (!svgRef.current) return;
    const paths = svgRef.current.querySelectorAll(".trail");
    paths.forEach((path, i) => {
      const length = (path as SVGPathElement).getTotalLength?.() || 1000;
      gsap.set(path, { strokeDasharray: length, strokeDashoffset: length });
      gsap.to(path, {
        strokeDashoffset: 0,
        duration: 3 + i * 0.5,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
        delay: i * 0.3,
      });
    });
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-end overflow-hidden"
      aria-label="Hero"
    >
      <motion.div style={{ scale: imageScale }} className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1617814076367-b759c7d7e738?w=1920&q=80"
          alt="Future electric vehicle with autonomous sensors"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent" />
      </motion.div>

      <div className="absolute inset-0 grid-overlay opacity-30 pointer-events-none" />
      <div className="absolute inset-0 scan-line pointer-events-none opacity-40" />

      <svg
        ref={svgRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
        viewBox="0 0 1440 900"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden="true"
      >
        <path className="trail" d="M0,450 Q360,400 720,450 T1440,420" fill="none" stroke="rgba(0,212,255,0.3)" strokeWidth="1" />
        <path className="trail" d="M0,500 Q480,460 960,500 T1440,480" fill="none" stroke="rgba(57,255,20,0.2)" strokeWidth="1" />
        <circle cx="720" cy="450" r="4" fill="#00D4FF" opacity="0.8">
          <animate attributeName="r" values="4;8;4" dur="3s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.8;0.3;0.8" dur="3s" repeatCount="indefinite" />
        </circle>
        <circle cx="960" cy="500" r="3" fill="#39FF14" opacity="0.6">
          <animate attributeName="cx" values="960;1100;960" dur="8s" repeatCount="indefinite" />
        </circle>
      </svg>

      <motion.div
        style={{ y: titleY, opacity }}
        className="relative z-10 w-full max-w-7xl mx-auto px-6 pb-24 pt-40 lg:px-8 lg:pb-32"
      >
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-accent-blue text-sm font-mono tracking-widest uppercase mb-6"
        >
          {SITE_TAGLINE}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="hero-title font-bold text-white glow-text max-w-5xl"
        >
          Intelligence in every move.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-8 text-lg md:text-xl text-white/60 max-w-2xl leading-relaxed"
        >
          {SITE_DESCRIPTION}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="mt-12 flex flex-wrap gap-4"
        >
          <Button href="/platform/" variant="primary" size="large">
            Explore Entropy
          </Button>
          <Button href="/contact/" variant="secondary" size="large">
            Book a Demo
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
}
