import { Link } from 'react-router-dom'

interface WhitelistGateProps {
  title?: string
  description?: string
}

export default function WhitelistGate({
  title = 'Whitelist Access Required',
  description = 'Registration, login, and purchasing are currently available to whitelisted organizations only. Request access to join our early access program.',
}: WhitelistGateProps) {
  return (
    <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 mb-6">
      <div className="flex items-start gap-3">
        <div className="shrink-0 w-10 h-10 rounded-lg bg-amber-100 flex items-center justify-center">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#D97706" strokeWidth="2">
            <rect x="3" y="11" width="18" height="11" rx="2" />
            <path d="M7 11V7a5 5 0 0110 0v4" />
          </svg>
        </div>
        <div>
          <h3 className="font-semibold text-navy">{title}</h3>
          <p className="text-sm text-navy/60 mt-1 leading-relaxed">{description}</p>
          <Link to="/contact" className="inline-flex items-center gap-1 text-sm font-medium text-mint hover:text-mint/80 mt-3 transition-colors">
            Request Whitelist Access
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  )
}
