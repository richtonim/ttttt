import { WHITELISTED_EMAILS } from "./site";

export function isWhitelisted(email: string): boolean {
  const normalized = email.trim().toLowerCase();
  return WHITELISTED_EMAILS.some((e) => e.toLowerCase() === normalized);
}

export function getWhitelistHint(): string {
  return "Access is currently limited to invited organizations. Contact us to request whitelist access.";
}
