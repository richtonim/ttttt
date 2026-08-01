// Whitelist for registration, login and purchase access
// In production, this would be managed server-side

const WHITELISTED_EMAILS = [
  "admin@qualia.lat",
  "demo@qualia.lat",
  "partner@qualia.lat",
  "enterprise@qualia.lat",
  "research@qualia.lat",
];

export function isEmailWhitelisted(email: string): boolean {
  const normalized = email.trim().toLowerCase();
  return WHITELISTED_EMAILS.includes(normalized);
}

export function getWhitelistMessage(): string {
  return "Access is currently limited to invited partners. Please contact us to request whitelist access.";
}
