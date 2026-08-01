"use client";

import { useEffect, useRef } from "react";
import { FadeIn } from "@/lib/animations";
import { Section, SectionTitle } from "@/components/ui/Section";

const DASHBOARD_METRICS = [
  { label: "Active Vehicles", value: "12,847", change: "+2.4%" },
  { label: "AI Risk Score", value: "0.12", change: "Low" },
  { label: "Battery Health", value: "94.2%", change: "Optimal" },
  { label: "Fleet Efficiency", value: "87.6%", change: "+5.1%" },
  { label: "Maintenance Alerts", value: "23", change: "3 critical" },
  { label: "Carbon Offset", value: "1,247t", change: "-12%" },
];

const VEHICLE_STATUS = [
  { id: "VH-2048", status: "Active", risk: "Low", battery: "96%" },
  { id: "VH-2049", status: "Charging", risk: "Low", battery: "42%" },
  { id: "VH-2050", status: "Maintenance", risk: "Medium", battery: "78%" },
  { id: "VH-2051", status: "Active", risk: "Low", battery: "91%" },
  { id: "VH-2052", status: "Active", risk: "High", battery: "67%" },
];

export function ProductShowcase() {
  const showcaseRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) return;

    const handleScroll = () => {
      if (!showcaseRef.current) return;
      const rect = showcaseRef.current.getBoundingClientRect();
      const progress = Math.max(
        0,
        Math.min(1, 1 - rect.top / (window.innerHeight * 0.5))
      );
      showcaseRef.current.style.transform = `scale(${0.9 + progress * 0.1})`;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Section className="bg-soma-gray-50">
      <SectionTitle
        title={
          <>
            See every vehicle.
            <br />
            Understand every signal.
          </>
        }
        className="mb-16"
      />

      <FadeIn>
        <div
          ref={showcaseRef}
          className="relative bg-white border border-soma-gray-100 rounded-sm overflow-hidden transition-transform duration-300"
          style={{ transform: "scale(0.9)" }}
        >
          {/* Dashboard header */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-soma-gray-100">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-soma-gray-200" />
              <div className="w-3 h-3 rounded-full bg-soma-gray-200" />
              <div className="w-3 h-3 rounded-full bg-soma-gray-200" />
            </div>
            <span className="font-mono text-xs text-soma-gray-400">
              SOMA Console — Fleet Overview
            </span>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-soma-accentGreen animate-pulse" />
              <span className="font-mono text-xs text-soma-gray-400">Live</span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
            {/* Map area */}
            <div className="lg:col-span-2 p-6 border-b lg:border-b-0 lg:border-r border-soma-gray-100 min-h-[300px]">
              <div className="relative w-full h-full min-h-[250px] bg-soma-gray-50 rounded-sm overflow-hidden">
                {/* Abstract map grid */}
                <svg
                  className="absolute inset-0 w-full h-full"
                  viewBox="0 0 400 250"
                  fill="none"
                >
                  {Array.from({ length: 20 }).map((_, i) => (
                    <line
                      key={`h-${i}`}
                      x1="0"
                      y1={i * 12.5}
                      x2="400"
                      y2={i * 12.5}
                      stroke="#EBEBEB"
                      strokeWidth="0.5"
                    />
                  ))}
                  {Array.from({ length: 32 }).map((_, i) => (
                    <line
                      key={`v-${i}`}
                      x1={i * 12.5}
                      y1="0"
                      x2={i * 12.5}
                      y2="250"
                      stroke="#EBEBEB"
                      strokeWidth="0.5"
                    />
                  ))}
                  {/* Vehicle dots */}
                  {[
                    { x: 120, y: 80 },
                    { x: 200, y: 120 },
                    { x: 280, y: 60 },
                    { x: 160, y: 180 },
                    { x: 320, y: 150 },
                    { x: 80, y: 140 },
                  ].map((pos, i) => (
                    <g key={i}>
                      <circle cx={pos.x} cy={pos.y} r="8" fill="#00D4FF" opacity="0.2" />
                      <circle cx={pos.x} cy={pos.y} r="3" fill="#0A0A0A" />
                    </g>
                  ))}
                  {/* Route paths */}
                  <path
                    d="M 120 80 Q 160 100 200 120 T 280 60"
                    stroke="#0A0A0A"
                    strokeWidth="1"
                    strokeDasharray="4 4"
                    opacity="0.2"
                    fill="none"
                  />
                </svg>
                <div className="absolute bottom-4 left-4 font-mono text-xs text-soma-gray-400">
                  Real-time vehicle map
                </div>
              </div>
            </div>

            {/* Metrics sidebar */}
            <div className="p-6">
              <h4 className="font-mono text-xs uppercase tracking-wider text-soma-gray-400 mb-4">
                Key Metrics
              </h4>
              <div className="grid grid-cols-2 gap-4">
                {DASHBOARD_METRICS.map((metric) => (
                  <div key={metric.label} className="p-3 border border-soma-gray-100">
                    <p className="font-mono text-[10px] text-soma-gray-300 uppercase mb-1">
                      {metric.label}
                    </p>
                    <p className="text-lg font-semibold text-soma-black">
                      {metric.value}
                    </p>
                    <p className="font-mono text-[10px] text-soma-accent mt-1">
                      {metric.change}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Vehicle table */}
          <div className="border-t border-soma-gray-100 overflow-x-auto">
            <table className="w-full min-w-[600px]">
              <thead>
                <tr className="border-b border-soma-gray-100">
                  {["Vehicle ID", "Status", "AI Risk", "Battery", "Sensors"].map(
                    (h) => (
                      <th
                        key={h}
                        className="px-6 py-3 text-left font-mono text-[10px] uppercase tracking-wider text-soma-gray-400"
                      >
                        {h}
                      </th>
                    )
                  )}
                </tr>
              </thead>
              <tbody>
                {VEHICLE_STATUS.map((v) => (
                  <tr
                    key={v.id}
                    className="border-b border-soma-gray-50 hover:bg-soma-gray-50 transition-colors"
                  >
                    <td className="px-6 py-3 font-mono text-sm text-soma-black">
                      {v.id}
                    </td>
                    <td className="px-6 py-3 text-sm text-soma-gray-400">
                      {v.status}
                    </td>
                    <td className="px-6 py-3">
                      <span
                        className={`font-mono text-xs px-2 py-0.5 ${
                          v.risk === "High"
                            ? "text-red-600 bg-red-50"
                            : v.risk === "Medium"
                            ? "text-yellow-600 bg-yellow-50"
                            : "text-green-600 bg-green-50"
                        }`}
                      >
                        {v.risk}
                      </span>
                    </td>
                    <td className="px-6 py-3 font-mono text-sm text-soma-gray-400">
                      {v.battery}
                    </td>
                    <td className="px-6 py-3">
                      <div className="flex gap-1">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <div
                            key={i}
                            className="w-1 h-4 bg-soma-black opacity-20"
                            style={{ opacity: 0.2 + i * 0.15 }}
                          />
                        ))}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </FadeIn>
    </Section>
  );
}
