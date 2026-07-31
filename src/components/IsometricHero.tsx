export default function IsometricHero() {
  return (
    <div className="relative w-full max-w-2xl mx-auto" aria-hidden="true">
      <svg viewBox="0 0 600 420" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
        {/* Background grid */}
        <defs>
          <pattern id="grid" width="30" height="30" patternUnits="userSpaceOnUse">
            <path d="M 30 0 L 0 0 0 30" fill="none" stroke="#0F172A" strokeOpacity="0.04" strokeWidth="1" />
          </pattern>
          <linearGradient id="hubGrad" x1="0" y1="0" x2="1" y2="1">
            <stop stopColor="#10B981" />
            <stop offset="1" stopColor="#3B82F6" />
          </linearGradient>
          <linearGradient id="flowGrad" x1="0" y1="0" x2="1" y2="0">
            <stop stopColor="#10B981" stopOpacity="0" />
            <stop offset="0.5" stopColor="#10B981" />
            <stop offset="1" stopColor="#3B82F6" stopOpacity="0" />
          </linearGradient>
        </defs>

        <rect width="600" height="420" fill="url(#grid)" rx="16" />

        {/* Connection lines */}
        <g stroke="#0F172A" strokeOpacity="0.08" strokeWidth="1.5">
          <line x1="300" y1="210" x2="150" y2="100" />
          <line x1="300" y1="210" x2="450" y2="100" />
          <line x1="300" y1="210" x2="120" y2="280" />
          <line x1="300" y1="210" x2="480" y2="280" />
          <line x1="300" y1="210" x2="300" y2="360" />
        </g>

        {/* Animated flow lines */}
        <g>
          <path d="M150 100 L300 210" stroke="url(#flowGrad)" strokeWidth="2" className="animate-flow" />
          <path d="M450 100 L300 210" stroke="url(#flowGrad)" strokeWidth="2" className="animate-flow" style={{ animationDelay: '0.5s' }} />
          <path d="M120 280 L300 210" stroke="url(#flowGrad)" strokeWidth="2" className="animate-flow" style={{ animationDelay: '1s' }} />
          <path d="M480 280 L300 210" stroke="url(#flowGrad)" strokeWidth="2" className="animate-flow" style={{ animationDelay: '1.5s' }} />
          <path d="M300 360 L300 210" stroke="url(#flowGrad)" strokeWidth="2" className="animate-flow" style={{ animationDelay: '2s' }} />
        </g>

        {/* Top-left node: Data Ingestion */}
        <g transform="translate(120, 70)">
          <polygon points="30,0 60,15 60,45 30,60 0,45 0,15" fill="white" stroke="#0F172A" strokeWidth="1.5" strokeOpacity="0.15" />
          <polygon points="30,0 60,15 60,30 30,15 0,30 0,15" fill="#10B981" fillOpacity="0.1" />
          <text x="30" y="38" textAnchor="middle" fill="#0F172A" fontSize="7" fontWeight="600">DATA</text>
        </g>

        {/* Top-right node: Compliance */}
        <g transform="translate(420, 70)">
          <polygon points="30,0 60,15 60,45 30,60 0,45 0,15" fill="white" stroke="#0F172A" strokeWidth="1.5" strokeOpacity="0.15" />
          <polygon points="30,0 60,15 60,30 30,15 0,30 0,15" fill="#3B82F6" fillOpacity="0.1" />
          <text x="30" y="35" textAnchor="middle" fill="#0F172A" fontSize="6.5" fontWeight="600">AUDIT</text>
        </g>

        {/* Bottom-left node: ETL */}
        <g transform="translate(90, 250)">
          <polygon points="30,0 60,15 60,45 30,60 0,45 0,15" fill="white" stroke="#0F172A" strokeWidth="1.5" strokeOpacity="0.15" />
          <polygon points="30,0 60,15 60,30 30,15 0,30 0,15" fill="#10B981" fillOpacity="0.1" />
          <text x="30" y="38" textAnchor="middle" fill="#0F172A" fontSize="7" fontWeight="600">ETL</text>
        </g>

        {/* Bottom-right node: Fulfillment */}
        <g transform="translate(450, 250)">
          <polygon points="30,0 60,15 60,45 30,60 0,45 0,15" fill="white" stroke="#0F172A" strokeWidth="1.5" strokeOpacity="0.15" />
          <polygon points="30,0 60,15 60,30 30,15 0,30 0,15" fill="#3B82F6" fillOpacity="0.1" />
          <text x="30" y="35" textAnchor="middle" fill="#0F172A" fontSize="6" fontWeight="600">FULFILL</text>
        </g>

        {/* Bottom node: Output */}
        <g transform="translate(270, 330)">
          <polygon points="30,0 60,15 60,45 30,60 0,45 0,15" fill="white" stroke="#0F172A" strokeWidth="1.5" strokeOpacity="0.15" />
          <polygon points="30,0 60,15 60,30 30,15 0,30 0,15" fill="#10B981" fillOpacity="0.1" />
          <text x="30" y="38" textAnchor="middle" fill="#0F172A" fontSize="7" fontWeight="600">OUTPUT</text>
        </g>

        {/* Central Hub: Mustly Hub */}
        <g transform="translate(255, 165)" className="animate-node-glow">
          <polygon points="45,0 90,22.5 90,67.5 45,90 0,67.5 0,22.5" fill="white" stroke="url(#hubGrad)" strokeWidth="2" />
          <polygon points="45,0 90,22.5 90,45 45,22.5 0,45 0,22.5" fill="url(#hubGrad)" fillOpacity="0.15" />
          <text x="45" y="48" textAnchor="middle" fill="#0F172A" fontSize="8" fontWeight="700">MUSTLY</text>
          <text x="45" y="58" textAnchor="middle" fill="#10B981" fontSize="6" fontWeight="600">HUB</text>
        </g>

        {/* Floating data particles */}
        <circle cx="220" cy="155" r="3" fill="#10B981" opacity="0.6" className="animate-flow" />
        <circle cx="380" cy="155" r="3" fill="#3B82F6" opacity="0.6" className="animate-flow" style={{ animationDelay: '0.7s' }} />
        <circle cx="200" cy="240" r="2.5" fill="#10B981" opacity="0.5" className="animate-flow" style={{ animationDelay: '1.2s' }} />
        <circle cx="400" cy="240" r="2.5" fill="#3B82F6" opacity="0.5" className="animate-flow" style={{ animationDelay: '1.8s' }} />
      </svg>
    </div>
  )
}
