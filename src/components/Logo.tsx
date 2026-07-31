import { Link } from 'react-router-dom'

interface LogoProps {
  className?: string
  showText?: boolean
  size?: 'sm' | 'md' | 'lg'
}

export default function Logo({ className = '', showText = true, size = 'md' }: LogoProps) {
  const sizes = { sm: 28, md: 36, lg: 48 }
  const s = sizes[size]

  return (
    <Link to="/" className={`inline-flex items-center gap-2.5 ${className}`} aria-label="Mustly AI Home">
      <svg width={s} height={s} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <rect width="48" height="48" rx="12" fill="#0F172A" />
        <path
          d="M14 32V16h4.5l5.5 9.5L29.5 16H34v16h-4V24.5L24.5 34h-1L16 24.5V32h-2z"
          fill="url(#logoGrad)"
        />
        <circle cx="36" cy="12" r="4" fill="#10B981" />
        <defs>
          <linearGradient id="logoGrad" x1="14" y1="16" x2="34" y2="32" gradientUnits="userSpaceOnUse">
            <stop stopColor="#10B981" />
            <stop offset="1" stopColor="#3B82F6" />
          </linearGradient>
        </defs>
      </svg>
      {showText && (
        <span className={`font-bold tracking-tight text-navy ${size === 'lg' ? 'text-2xl' : size === 'md' ? 'text-xl' : 'text-lg'}`}>
          Mustly<span className="text-mint">.</span>
        </span>
      )}
    </Link>
  )
}
