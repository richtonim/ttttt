type LogoProps = {
  compact?: boolean
  className?: string
}

export function Logo({ compact = false, className = '' }: LogoProps) {
  return (
    <span className={`brand-logo ${className}`.trim()} aria-label="INTERIORPUP.AI">
      <svg
        className="brand-mark"
        viewBox="0 0 64 64"
        width={compact ? 28 : 34}
        height={compact ? 28 : 34}
        fill="none"
        aria-hidden="true"
      >
        <rect width="64" height="64" rx="14" fill="#0F0F12" stroke="#E5E2DC" strokeOpacity="0.25" />
        <g stroke="#E5E2DC" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14 42 L32 30 L50 42 L32 54 Z" />
          <path d="M14 42 L14 24 L32 12 L50 24 L50 42" />
          <path d="M32 12 L32 30" />
          <path d="M14 24 L32 36 L50 24" opacity="0.45" />
        </g>
        <circle cx="32" cy="36" r="2.4" fill="#E66A35" />
        <path d="M32 36 L40 28" stroke="#E66A35" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
      {!compact && (
        <span className="brand-wordmark">
          INTERIORPUP<span className="brand-dot">.AI</span>
        </span>
      )}
    </span>
  )
}
