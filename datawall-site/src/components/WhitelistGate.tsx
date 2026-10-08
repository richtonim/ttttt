"use client";

import { useState } from "react";
import { isWhitelisted } from "@/lib/whitelist";

type WhitelistGateProps = {
  children: React.ReactNode;
  title: string;
  description: string;
};

export function WhitelistGate({ children, title, description }: WhitelistGateProps) {
  const [email, setEmail] = useState("");
  const [verified, setVerified] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleVerify = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    setTimeout(() => {
      if (isWhitelisted(email)) {
        setVerified(true);
      } else {
        setError("Access is currently limited to approved organizations. Contact us to request whitelist access.");
      }
      setLoading(false);
    }, 600);
  };

  if (verified) {
    return <>{children}</>;
  }

  return (
    <div className="mx-auto max-w-md">
      <h2 className="text-2xl font-medium text-white">{title}</h2>
      <p className="mt-3 text-muted">{description}</p>
      <form onSubmit={handleVerify} className="mt-8 space-y-4">
        <div>
          <label htmlFor="whitelist-email" className="mb-2 block text-sm text-muted">
            Work email
          </label>
          <input
            id="whitelist-email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@company.com"
            className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-white/30 focus:border-electric focus:outline-none"
            autoComplete="email"
          />
        </div>
        {error && (
          <p className="text-sm text-red-400" role="alert">{error}</p>
        )}
        <button type="submit" className="btn-primary w-full" disabled={loading}>
          {loading ? "Verifying..." : "Verify Access"}
        </button>
      </form>
      <p className="mt-6 text-center text-sm text-muted">
        Need access?{" "}
        <a href="mailto:hello@datawall.pro" className="text-electric hover:underline">
          Request whitelist approval
        </a>
      </p>
    </div>
  );
}
