// Whitelist configuration for registration, login, and purchase access
// In production, this would be managed server-side

export const WHITELISTED_EMAILS = [
  "demo@soma.autos",
  "admin@soma.autos",
  "partner@soma.autos",
  "fleet@soma.autos",
  "dev@soma.autos",
];

export const WHITELISTED_DOMAINS = [
  "soma.autos",
  "partner.soma.autos",
];

export function isWhitelisted(email: string): boolean {
  const normalized = email.toLowerCase().trim();
  
  if (WHITELISTED_EMAILS.includes(normalized)) {
    return true;
  }
  
  const domain = normalized.split("@")[1];
  if (domain && WHITELISTED_DOMAINS.includes(domain)) {
    return true;
  }
  
  return false;
}

export function validateWhitelistAccess(email: string): {
  allowed: boolean;
  message: string;
} {
  if (!email || !email.includes("@")) {
    return {
      allowed: false,
      message: "Please enter a valid email address.",
    };
  }
  
  if (isWhitelisted(email)) {
    return {
      allowed: true,
      message: "Access granted. You are on the SOMA whitelist.",
    };
  }
  
  return {
    allowed: false,
    message: "SOMA is currently in private beta. Registration, login, and purchases are available to whitelisted partners only. Contact us to request access.",
  };
}
