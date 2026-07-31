import { Link } from 'react-router-dom'

export function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <Link to="/" className="brand" aria-label="ClaimEase.AI home">
      <span className="brand-mark" aria-hidden="true">
        <svg width="22" height="22" viewBox="0 0 64 64" fill="none">
          <rect
            x="14"
            y="14"
            width="36"
            height="36"
            rx="6"
            stroke="#10B981"
            strokeWidth="3"
          />
          <path
            d="M22 26h14M22 32h18M22 38h10"
            stroke="#F8FAFC"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          <circle cx="42" cy="42" r="9" fill="#090D16" stroke="#10B981" strokeWidth="2.5" />
          <path
            d="M38.8 42.2l2.4 2.4 4.6-4.8"
            stroke="#10B981"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
      {!compact ? (
        <span className="brand-text">
          CLAIMEASE<span>.AI</span>
        </span>
      ) : null}
    </Link>
  )
}
