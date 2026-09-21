export function WireframeScene() {
  return (
    <div className="wire-scene float-soft" aria-hidden="true">
      <svg viewBox="0 0 560 420" className="wire-svg">
        <defs>
          <linearGradient id="depthFade" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#E5E2DC" stopOpacity="0.55" />
            <stop offset="100%" stopColor="#E5E2DC" stopOpacity="0.12" />
          </linearGradient>
        </defs>

        {/* Spatial grid slice */}
        <g stroke="url(#depthFade)" strokeWidth="1" fill="none">
          {Array.from({ length: 8 }).map((_, i) => {
            const y = 80 + i * 28
            return (
              <path
                key={`h-${i}`}
                className="wire-line"
                style={{ animationDelay: `${i * 0.08}s` }}
                d={`M80 ${y} L280 ${y + 70} L480 ${y}`}
              />
            )
          })}
          {Array.from({ length: 7 }).map((_, i) => {
            const x = 110 + i * 55
            return (
              <path
                key={`v-${i}`}
                className="wire-line"
                style={{ animationDelay: `${0.2 + i * 0.07}s` }}
                d={`M${x} 80 L${x + 40} 300`}
                opacity={0.35}
              />
            )
          })}
        </g>

        {/* Primary wireframe room */}
        <g stroke="#E5E2DC" strokeWidth="1.6" fill="none" strokeLinejoin="round">
          <path className="wire-line" d="M120 280 L280 200 L440 280 L280 360 Z" />
          <path className="wire-line" style={{ animationDelay: '0.15s' }} d="M120 280 L120 150 L280 70 L440 150 L440 280" />
          <path className="wire-line" style={{ animationDelay: '0.3s' }} d="M280 70 L280 200" />
          <path className="wire-line" style={{ animationDelay: '0.45s' }} d="M120 150 L280 230 L440 150" opacity="0.4" />
          {/* Furniture topology hints */}
          <path className="wire-line" style={{ animationDelay: '0.6s' }} d="M210 290 L250 270 L290 290 L250 310 Z" opacity="0.55" />
          <path className="wire-line" style={{ animationDelay: '0.75s' }} d="M320 250 L380 220 L400 240 L340 270 Z" opacity="0.45" />
        </g>

        <circle className="wire-dot" cx="280" cy="230" r="4" fill="#E66A35" />
        <path d="M280 230 L340 180" stroke="#E66A35" strokeWidth="1.4" strokeLinecap="round" />
        <text x="348" y="174" fill="#E66A35" fontSize="11" fontFamily="Outfit, sans-serif">
          BIM NODE
        </text>
      </svg>
    </div>
  )
}
