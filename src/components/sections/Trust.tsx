"use client";

import { TRUST_PILLARS } from "@/lib/constants";
import { FadeIn, StaggerContainer, StaggerItem } from "../animations";
import { Shield, Eye, Lock, Users, Scale } from "lucide-react";

const icons = [Shield, Eye, Lock, Users, Scale];

export function Trust() {
  return (
    <section className="py-32 lg:py-40 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <FadeIn>
          <p className="text-sm tracking-[0.15em] uppercase text-qualia-gray-500 mb-4">
            Trust & Safety
          </p>
          <h2 className="text-heading font-semibold text-qualia-black mb-6">
            Secure &amp; trustworthy AI
          </h2>
          <p className="text-body text-qualia-gray-600 max-w-xl mb-20">
            Intelligence must be responsible. Every Qualia system is built with privacy,
            transparency and human oversight at its core.
          </p>
        </FadeIn>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TRUST_PILLARS.map((pillar, i) => {
            const Icon = icons[i];
            return (
              <StaggerItem key={pillar.title}>
                <div className="p-8 border border-qualia-gray-200 rounded-2xl h-full hover:border-qualia-black/20 transition-colors">
                  <Icon size={24} className="text-qualia-accent mb-6" strokeWidth={1.5} />
                  <h3 className="text-xl font-semibold text-qualia-black mb-3">
                    {pillar.title}
                  </h3>
                  <p className="text-body text-qualia-gray-600">{pillar.description}</p>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
