"use client";

import { useState } from "react";
import { AlertCircle, CheckCircle2 } from "lucide-react";
import { isWhitelisted, getWhitelistHint } from "@/lib/whitelist";
import { Button } from "@/components/layout/Header";

type WhitelistGateProps = {
  mode: "login" | "register" | "purchase";
  children?: React.ReactNode;
};

const modeTitles = {
  login: "Sign in to Cognis",
  register: "Create your account",
  purchase: "Purchase Cognis",
};

const modeDescriptions = {
  login: "Enter your whitelisted email to access the Cognis platform.",
  register: "Registration is currently available to invited organizations only.",
  purchase: "Purchasing is available to whitelisted enterprise accounts.",
};

export function WhitelistGate({ mode, children }: WhitelistGateProps) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "approved" | "denied">("idle");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    if (isWhitelisted(email)) {
      setStatus("approved");
    } else {
      setStatus("denied");
    }
  };

  if (status === "approved") {
    return (
      <div className="text-center py-8">
        <CheckCircle2 className="mx-auto text-accent mb-4" size={40} strokeWidth={1.5} />
        <h3 className="text-xl font-medium">Access granted</h3>
        <p className="mt-3 text-muted">
          Your email <span className="text-foreground">{email}</span> is whitelisted.
          {mode === "login" && " Redirecting to dashboard..."}
          {mode === "register" && " Complete your account setup below."}
          {mode === "purchase" && " Proceed with your purchase."}
        </p>
        {children && <div className="mt-8">{children}</div>}
        {mode === "login" && (
          <p className="mt-6 text-sm text-muted font-mono">
            [Demo] Dashboard access simulated for whitelisted users.
          </p>
        )}
      </div>
    );
  }

  return (
    <div>
      <h1 className="text-3xl md:text-4xl font-medium tracking-tight">{modeTitles[mode]}</h1>
      <p className="mt-4 text-muted">{modeDescriptions[mode]}</p>

      <form onSubmit={handleSubmit} className="mt-10 space-y-6">
        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-2">
            Work email
          </label>
          <input
            id="email"
            type="email"
            required
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              setSubmitted(false);
              setStatus("idle");
            }}
            placeholder="you@company.com"
            className="w-full bg-transparent border border-border px-4 py-3 text-foreground placeholder:text-border focus:outline-none focus:border-accent transition-colors"
            autoComplete="email"
          />
        </div>

        {mode === "login" && (
          <div>
            <label htmlFor="password" className="block text-sm font-medium mb-2">
              Password
            </label>
            <input
              id="password"
              type="password"
              required
              placeholder="••••••••"
              className="w-full bg-transparent border border-border px-4 py-3 text-foreground placeholder:text-border focus:outline-none focus:border-accent transition-colors"
              autoComplete="current-password"
            />
          </div>
        )}

        {mode === "register" && (
          <>
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Full name
              </label>
              <input
                id="name"
                type="text"
                required
                placeholder="Jane Smith"
                className="w-full bg-transparent border border-border px-4 py-3 text-foreground placeholder:text-border focus:outline-none focus:border-accent transition-colors"
              />
            </div>
            <div>
              <label htmlFor="company" className="block text-sm font-medium mb-2">
                Company
              </label>
              <input
                id="company"
                type="text"
                required
                placeholder="Acme Corp"
                className="w-full bg-transparent border border-border px-4 py-3 text-foreground placeholder:text-border focus:outline-none focus:border-accent transition-colors"
              />
            </div>
          </>
        )}

        {submitted && status === "denied" && (
          <div className="flex items-start gap-3 border border-red-500/30 bg-red-500/5 p-4" role="alert">
            <AlertCircle className="text-red-400 shrink-0 mt-0.5" size={18} />
            <div>
              <p className="text-sm text-foreground">Email not on whitelist</p>
              <p className="text-sm text-muted mt-1">{getWhitelistHint()}</p>
            </div>
          </div>
        )}

        <Button type="submit" className="w-full">
          {mode === "login" ? "Sign in" : mode === "register" ? "Create account" : "Continue to purchase"}
        </Button>
      </form>

      <p className="mt-8 text-sm text-muted text-center">
        Need access?{" "}
        <a href="/contact/" className="text-accent hover:underline">
          Contact us
        </a>{" "}
        to request whitelist approval.
      </p>
    </div>
  );
}
