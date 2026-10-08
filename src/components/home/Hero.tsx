"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { HeroGrid } from "./HeroGrid";
import { HERO_STATS } from "@/lib/constants";

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center bg-white overflow-hidden">
      <HeroGrid />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-20 pt-32 pb-20 w-full">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-mono text-xs uppercase tracking-[0.25em] text-soma-gray-400 mb-8 md:mb-12"
        >
          AI-Native Automotive Intelligence
        </motion.p>

        <div className="mb-12 md:mb-16">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="text-hero-desktop font-bold text-soma-black"
          >
            Intelligence
          </motion.h1>
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="text-hero-desktop font-bold text-soma-black"
          >
            in Motion.
          </motion.h1>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-lg md:text-xl text-soma-gray-400 max-w-2xl leading-relaxed mb-10"
        >
          SOMA transforms vehicle data into real-time intelligence, helping
          automotive teams build safer, smarter and more autonomous mobility
          systems.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <Button href="/platform/">Explore the Platform</Button>
          <Button href="/technology/" variant="secondary">
            Watch Overview
          </Button>
        </motion.div>

        {/* Live stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="absolute bottom-8 right-6 md:right-12 lg:right-20 hidden md:grid grid-cols-2 gap-x-12 gap-y-4"
        >
          {HERO_STATS.map((stat) => (
            <div key={stat.label} className="text-right">
              <p className="font-mono text-xs uppercase tracking-wider text-soma-gray-300 mb-1">
                {stat.label}
              </p>
              <p className="font-mono text-sm font-medium text-soma-black">
                {stat.value}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
