// Demo whitelist — in production this would be server-side validated
export const WHITELISTED_EMAILS = [
  'demo@aiflash.news',
  'founder@aiflash.news',
  'architect@aiflash.news',
  'investor@aiflash.news',
  'dev@aiflash.news',
];

export function isWhitelisted(email: string): boolean {
  const normalized = email.trim().toLowerCase();
  return WHITELISTED_EMAILS.includes(normalized);
}

export function getStoredUser(): { email: string; name: string } | null {
  try {
    const raw = localStorage.getItem('aiflash_user');
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

export function setStoredUser(user: { email: string; name: string } | null) {
  if (user) {
    localStorage.setItem('aiflash_user', JSON.stringify(user));
  } else {
    localStorage.removeItem('aiflash_user');
  }
}
