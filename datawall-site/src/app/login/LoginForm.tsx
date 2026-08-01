"use client";

import { useState } from "react";
import { PageHero } from "@/components/PageHero";
import { WhitelistGate } from "@/components/WhitelistGate";
import { isWhitelisted } from "@/lib/whitelist";

export function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    if (!isWhitelisted(email)) {
      setError("Your email is not on the approved access list. Contact us to request whitelist access.");
      return;
    }
    if (password.length < 8) {
      setError("Invalid credentials. Please try again.");
      return;
    }
    setSuccess(true);
  };

  return (
    <>
      <PageHero eyebrow="Account" title="Log in" subtitle="Access your Datawall security console." />
      <section className="py-20">
        <div className="mx-auto max-w-md px-6 lg:px-8">
          <WhitelistGate
            title="Verify your access"
            description="Login is available to whitelisted organizations only. Enter your work email to continue."
          >
            {success ? (
              <div className="rounded-2xl border border-secure/30 bg-secure/5 p-8 text-center">
                <p className="text-lg font-medium text-white">Welcome back.</p>
                <p className="mt-2 text-muted">Redirecting to your dashboard...</p>
              </div>
            ) : (
              <form onSubmit={handleLogin} className="space-y-6">
                <div>
                  <label htmlFor="login-email" className="mb-2 block text-sm text-muted">Email</label>
                  <input
                    id="login-email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white focus:border-electric focus:outline-none"
                  />
                </div>
                <div>
                  <label htmlFor="login-password" className="mb-2 block text-sm text-muted">Password</label>
                  <input
                    id="login-password"
                    type="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white focus:border-electric focus:outline-none"
                  />
                </div>
                {error && <p className="text-sm text-red-400" role="alert">{error}</p>}
                <button type="submit" className="btn-primary w-full">Sign In</button>
              </form>
            )}
          </WhitelistGate>
        </div>
      </section>
    </>
  );
}
