"use client";

import { useState } from "react";
import { PageHero } from "@/components/PageHero";
import { WhitelistGate } from "@/components/WhitelistGate";
import { isWhitelisted } from "@/lib/whitelist";

export function RegisterForm() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    if (!isWhitelisted(email)) {
      setError("Registration is limited to approved organizations. Contact us to request access.");
      return;
    }
    setSuccess(true);
  };

  return (
    <>
      <PageHero eyebrow="Account" title="Register" subtitle="Create your Datawall account to start securing your AI infrastructure." />
      <section className="py-20">
        <div className="mx-auto max-w-md px-6 lg:px-8">
          <WhitelistGate
            title="Verify your access"
            description="Registration is available to whitelisted organizations only. Enter your work email to continue."
          >
            {success ? (
              <div className="rounded-2xl border border-secure/30 bg-secure/5 p-8 text-center">
                <p className="text-lg font-medium text-white">Account created successfully.</p>
                <p className="mt-2 text-muted">Check your email to complete setup.</p>
              </div>
            ) : (
              <form onSubmit={handleRegister} className="space-y-6">
                <div>
                  <label htmlFor="reg-name" className="mb-2 block text-sm text-muted">Full name</label>
                  <input id="reg-name" required className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white focus:border-electric focus:outline-none" />
                </div>
                <div>
                  <label htmlFor="reg-email" className="mb-2 block text-sm text-muted">Work email</label>
                  <input
                    id="reg-email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white focus:border-electric focus:outline-none"
                  />
                </div>
                <div>
                  <label htmlFor="reg-company" className="mb-2 block text-sm text-muted">Company</label>
                  <input id="reg-company" required className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white focus:border-electric focus:outline-none" />
                </div>
                <div>
                  <label htmlFor="reg-password" className="mb-2 block text-sm text-muted">Password</label>
                  <input id="reg-password" type="password" required minLength={8} className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white focus:border-electric focus:outline-none" />
                </div>
                {error && <p className="text-sm text-red-400" role="alert">{error}</p>}
                <button type="submit" className="btn-primary w-full">Create Account</button>
              </form>
            )}
          </WhitelistGate>
        </div>
      </section>
    </>
  );
}
