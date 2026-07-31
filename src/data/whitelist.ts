/** Early-access whitelist for register, login, and purchase flows. */
export const WHITELIST_EMAILS = [
  'admin@claimease.in',
  'founder@claimease.in',
  'partner@insurer.com',
  'demo@enterprise.com',
  'pilot@fintech.io',
  'kerr@logicmesh.link',
] as const

export function isWhitelisted(email: string): boolean {
  const normalized = email.trim().toLowerCase()
  return WHITELIST_EMAILS.some((item) => item === normalized)
}

export const WHITELIST_HINT =
  'Access is limited to approved partners. Contact early-access@claimease.in to join the whitelist.'
