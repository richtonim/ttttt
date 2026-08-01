"use client";

import { useState, type FormEvent } from "react";
import { checkWhitelistAccess, saveAuth } from "@/lib/whitelist";
import { Button } from "@/components/ui/Button";

interface WhitelistFormProps {
  mode: "login" | "register" | "purchase";
  onSuccess?: () => void;
}

export function WhitelistForm({ mode, onSuccess }: WhitelistFormProps) {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const titles = {
    login: "Log in to Entropy",
    register: "Create your account",
    purchase: "Request access to purchase",
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    const { allowed, message } = checkWhitelistAccess(email);

    if (!allowed) {
      setError(message);
      setLoading(false);
      return;
    }

    if (mode === "register" && !name.trim()) {
      setError("Please enter your full name.");
      setLoading(false);
      return;
    }

    if (!password || password.length < 8) {
      setError("Password must be at least 8 characters.");
      setLoading(false);
      return;
    }

    await new Promise((r) => setTimeout(r, 800));

    saveAuth({ email: email.trim().toLowerCase(), name: name.trim() || email.split("@")[0] });
    setSuccess(true);
    setLoading(false);
    onSuccess?.();
  };

  if (success) {
    return (
      <div className="text-center py-8">
        <div className="w-16 h-16 rounded-full border border-accent-green/30 flex items-center justify-center mx-auto mb-6">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#39FF14" strokeWidth="2">
            <path d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-white mb-3">Access granted</h3>
        <p className="text-white/50 mb-8">
          {mode === "purchase"
            ? "Your whitelist has been verified. Our team will contact you to complete your purchase."
            : "Welcome to Entropy. You are now signed in."}
        </p>
        <Button href="/platform/" variant="primary">
          Go to Platform
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6" noValidate>
      <div>
        <h2 className="text-2xl font-bold text-white mb-2">{titles[mode]}</h2>
        <p className="text-sm text-white/40">
          Access is limited to whitelisted partners. Contact{" "}
          <a href="mailto:partner@entropy.autos" className="text-accent-blue hover:underline">
            partner@entropy.autos
          </a>{" "}
          to request access.
        </p>
      </div>

      {mode === "register" && (
        <div>
          <label htmlFor="name" className="block text-sm text-white/60 mb-2">
            Full name
          </label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-white/30 focus:outline-none focus:border-accent-blue/50 transition-colors"
            placeholder="Jane Smith"
            autoComplete="name"
            required
          />
        </div>
      )}

      <div>
        <label htmlFor="email" className="block text-sm text-white/60 mb-2">
          Work email
        </label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-white/30 focus:outline-none focus:border-accent-blue/50 transition-colors"
          placeholder="you@company.com"
          autoComplete="email"
          required
        />
      </div>

      <div>
        <label htmlFor="password" className="block text-sm text-white/60 mb-2">
          Password
        </label>
        <input
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-white/30 focus:outline-none focus:border-accent-blue/50 transition-colors"
          placeholder="Minimum 8 characters"
          autoComplete={mode === "login" ? "current-password" : "new-password"}
          required
          minLength={8}
        />
      </div>

      {error && (
        <div role="alert" className="p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-sm text-red-400">
          {error}
        </div>
      )}

      <Button type="submit" variant="primary" size="large" disabled={loading} className="w-full">
        {loading ? "Verifying..." : mode === "login" ? "Log in" : mode === "register" ? "Create account" : "Request purchase access"}
      </Button>
    </form>
  );
}
