"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export function CognitiveNetwork() {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (!svgRef.current) return;

    const nodes = svgRef.current.querySelectorAll(".node");
    const lines = svgRef.current.querySelectorAll(".connection");

    const tl = gsap.timeline({ repeat: -1, yoyo: true });
    nodes.forEach((node, i) => {
      tl.to(
        node,
        {
          attr: { r: i === 4 ? 5 : 3.5 },
          opacity: 1,
          duration: 2 + i * 0.3,
          ease: "sine.inOut",
        },
        i * 0.2
      );
    });

    lines.forEach((line, i) => {
      gsap.fromTo(
        line,
        { strokeDashoffset: 200 },
        {
          strokeDashoffset: 0,
          duration: 3,
          repeat: -1,
          ease: "none",
          delay: i * 0.4,
        }
      );
    });

    return () => {
      tl.kill();
      gsap.killTweensOf([...nodes, ...lines]);
    };
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden opacity-40 md:opacity-60" aria-hidden="true">
      <svg
        ref={svgRef}
        className="absolute right-0 top-1/2 -translate-y-1/2 w-full max-w-2xl h-auto"
        viewBox="0 0 600 500"
        fill="none"
      >
        <defs>
          <radialGradient id="glow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#4A9EFF" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#4A9EFF" stopOpacity="0" />
          </radialGradient>
        </defs>
        <circle cx="300" cy="250" r="180" fill="url(#glow)" />

        {[
          [300, 250, 150, 120],
          [300, 250, 450, 130],
          [300, 250, 140, 350],
          [300, 250, 460, 340],
          [150, 120, 450, 130],
          [140, 350, 460, 340],
          [150, 120, 140, 350],
          [450, 130, 460, 340],
        ].map(([x1, y1, x2, y2], i) => (
          <line
            key={i}
            className="connection"
            x1={x1}
            y1={y1}
            x2={x2}
            y2={y2}
            stroke="#4A9EFF"
            strokeWidth="0.5"
            strokeOpacity="0.3"
            strokeDasharray="200"
          />
        ))}

        {[
          [300, 250, 4],
          [150, 120, 3],
          [450, 130, 3],
          [140, 350, 3],
          [460, 340, 3],
          [300, 100, 2],
          [300, 400, 2],
          [80, 250, 2],
          [520, 250, 2],
        ].map(([cx, cy, r], i) => (
          <circle
            key={i}
            className="node"
            cx={cx}
            cy={cy}
            r={r}
            fill={i === 0 ? "#4A9EFF" : "#fafafa"}
            opacity={i === 0 ? 0.9 : 0.5}
          />
        ))}
      </svg>
    </div>
  );
}
