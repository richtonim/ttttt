export const WHITELISTED_EMAILS = [
  'admin@substratum.pro',
  'demo@substratum.pro',
  'partner@substratum.pro',
  'enterprise@substratum.pro',
  'dev@substratum.pro',
]

export function isWhitelisted(email: string): boolean {
  return WHITELISTED_EMAILS.includes(email.toLowerCase().trim())
}

export const SITE_URL = 'https://substratum.pro'
export const SITE_NAME = 'Substratum'
