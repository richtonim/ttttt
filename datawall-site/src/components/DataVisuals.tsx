"use client";

export function DataWallVisual({ className = "" }: { className?: string }) {
  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`} aria-hidden="true">
      <div className="grid-bg absolute inset-0 opacity-60" />
      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 1200 800" preserveAspectRatio="xMidYMid slice">
        <defs>
          <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00d4ff" stopOpacity="0" />
            <stop offset="50%" stopColor="#00d4ff" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#00e676" stopOpacity="0" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="2" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        {Array.from({ length: 12 }).map((_, i) => (
          <line
            key={`h-${i}`}
            x1="0"
            y1={80 + i * 60}
            x2="1200"
            y2={80 + i * 60}
            stroke="rgba(255,255,255,0.03)"
            strokeWidth="1"
          />
        ))}
        {Array.from({ length: 20 }).map((_, i) => (
          <line
            key={`v-${i}`}
            x1={60 + i * 60}
            y1="0"
            x2={60 + i * 60}
            y2="800"
            stroke="rgba(255,255,255,0.03)"
            strokeWidth="1"
          />
        ))}
        <path
          d="M100,400 Q300,200 500,400 T900,400 T1100,300"
          fill="none"
          stroke="url(#lineGrad)"
          strokeWidth="1.5"
          className="data-flow-line"
          filter="url(#glow)"
        />
        <path
          d="M50,500 Q250,350 450,500 T850,500"
          fill="none"
          stroke="url(#lineGrad)"
          strokeWidth="1"
          className="data-flow-line"
          style={{ animationDelay: "-5s" }}
        />
        {[
          [200, 320], [400, 280], [600, 360], [800, 300], [1000, 380],
          [300, 480], [500, 520], [700, 460], [900, 500],
        ].map(([cx, cy], i) => (
          <g key={i}>
            <circle cx={cx} cy={cy} r="4" fill="#00d4ff" opacity="0.8">
              <animate attributeName="opacity" values="0.3;1;0.3" dur={`${3 + i * 0.5}s`} repeatCount="indefinite" />
            </circle>
            <circle cx={cx} cy={cy} r="12" fill="none" stroke="#00d4ff" strokeWidth="0.5" opacity="0.3">
              <animate attributeName="r" values="8;20;8" dur={`${4 + i * 0.3}s`} repeatCount="indefinite" />
              <animate attributeName="opacity" values="0.5;0;0.5" dur={`${4 + i * 0.3}s`} repeatCount="indefinite" />
            </circle>
          </g>
        ))}
      </svg>
      <div className="scan-line pointer-events-none absolute inset-0 opacity-30" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#050505]/20 via-transparent to-[#050505]" />
    </div>
  );
}

export function ServerArrayVisual({ className = "" }: { className?: string }) {
  return (
    <div className={`relative ${className}`} aria-hidden="true">
      <div className="grid-bg absolute inset-0 rounded-2xl opacity-40" />
      <div className="relative grid grid-cols-4 gap-3 p-8">
        {Array.from({ length: 16 }).map((_, i) => (
          <div
            key={i}
            className="aspect-square rounded-lg border border-white/10 bg-white/[0.02] p-2"
            style={{ animationDelay: `${i * 0.1}s` }}
          >
            <div className="mb-2 h-1 w-full rounded-full bg-white/10" />
            <div className="space-y-1">
              <div className="h-0.5 w-3/4 rounded bg-electric/40" style={{ opacity: 0.3 + (i % 3) * 0.2 }} />
              <div className="h-0.5 w-1/2 rounded bg-secure/40" style={{ opacity: 0.2 + (i % 4) * 0.15 }} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
