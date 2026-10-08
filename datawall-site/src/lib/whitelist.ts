/** Whitelisted emails for login, registration, and purchase access */
export const WHITELISTED_EMAILS = [
  "admin@datawall.pro",
  "demo@datawall.pro",
  "enterprise@datawall.pro",
  "partner@datawall.pro",
  "security@datawall.pro",
] as const;

export function isWhitelisted(email: string): boolean {
  const normalized = email.trim().toLowerCase();
  return WHITELISTED_EMAILS.some((e) => e === normalized);
}
