export const SITE_NAME = 'Mustly AI'
export const SITE_URL = 'https://mustly.in'
export const SITE_DESCRIPTION =
  'Enterprise-grade AI automation and agentic workflow engine. Automate what must be done with essential AI workflows for high-growth teams.'
export const SITE_SLOGAN = 'Essential AI Workflows. Automate What Must Be Done.'

export const NAV_LINKS = [
  { label: 'PLATFORM', href: '/platform' },
  { label: 'SOLUTIONS', href: '/solutions' },
  { label: 'INFRASTRUCTURE', href: '/infrastructure' },
  { label: 'CONTACT', href: '/contact' },
] as const

// Whitelist: emails and invitation codes allowed to register, login, and purchase
export const WHITELIST_EMAILS = [
  'admin@mustly.in',
  'demo@mustly.in',
  'enterprise@mustly.in',
]

export const WHITELIST_CODES = [
  'MUSTLY2026',
  'EARLYACCESS',
  'ENTERPRISE',
]

export function isWhitelisted(email: string, code?: string): boolean {
  const normalizedEmail = email.trim().toLowerCase()
  const normalizedCode = code?.trim().toUpperCase()
  return (
    WHITELIST_EMAILS.includes(normalizedEmail) ||
    (normalizedCode !== undefined && WHITELIST_CODES.includes(normalizedCode))
  )
}

export function isEmailWhitelisted(email: string): boolean {
  return WHITELIST_EMAILS.includes(email.trim().toLowerCase())
}

export function isCodeWhitelisted(code: string): boolean {
  return WHITELIST_CODES.includes(code.trim().toUpperCase())
}
