import { WHITELISTED_EMAILS } from "./constants";

export function isWhitelisted(email: string): boolean {
  const normalized = email.trim().toLowerCase();
  return WHITELISTED_EMAILS.some((e) => e.toLowerCase() === normalized);
}

export function isWhitelistedDomain(email: string): boolean {
  const domain = email.trim().toLowerCase().split("@")[1];
  return domain === "entropy.autos";
}

export function checkWhitelistAccess(email: string): { allowed: boolean; message: string } {
  const normalized = email.trim().toLowerCase();

  if (!normalized || !normalized.includes("@")) {
    return { allowed: false, message: "Please enter a valid email address." };
  }

  if (isWhitelisted(normalized) || isWhitelistedDomain(normalized)) {
    return { allowed: true, message: "" };
  }

  return {
    allowed: false,
    message:
      "Access is currently limited to whitelisted partners. Contact us at partner@entropy.autos to request access.",
  };
}

export const AUTH_STORAGE_KEY = "entropy_auth";

export interface AuthUser {
  email: string;
  name: string;
}

export function saveAuth(user: AuthUser): void {
  if (typeof window !== "undefined") {
    localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(user));
  }
}

export function getAuth(): AuthUser | null {
  if (typeof window === "undefined") return null;
  const data = localStorage.getItem(AUTH_STORAGE_KEY);
  if (!data) return null;
  try {
    return JSON.parse(data) as AuthUser;
  } catch {
    return null;
  }
}

export function clearAuth(): void {
  if (typeof window !== "undefined") {
    localStorage.removeItem(AUTH_STORAGE_KEY);
  }
}
