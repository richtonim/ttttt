"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/Button";

export function FinalCTA() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end end"],
  });
  const scale = useTransform(scrollYProgress, [0, 1], [1.1, 1]);

  return (
    <section ref={ref} className="relative min-h-[80vh] flex items-center overflow-hidden" aria-labelledby="cta-heading">
      <motion.div style={{ scale }} className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=1920&q=80"
          alt="Electric vehicle on open road"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/70" />
      </motion.div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-32 lg:px-8 text-center">
        <motion.h2
          id="cta-heading"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="hero-title font-bold text-white glow-text"
        >
          Build what moves next.
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-12 flex flex-wrap justify-center gap-4"
        >
          <Button href="/register/" variant="primary" size="large">
            Start Building
          </Button>
          <Button href="/contact/" variant="secondary" size="large">
            Contact Entropy
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
