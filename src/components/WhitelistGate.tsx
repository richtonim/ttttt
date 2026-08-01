"use client";

import { useState, FormEvent } from "react";
import { isEmailWhitelisted, getWhitelistMessage } from "@/lib/whitelist";
import { Button } from "./Button";
import { AlertCircle, CheckCircle2 } from "lucide-react";

type WhitelistGateProps = {
  mode: "login" | "register" | "purchase";
  onSuccess?: (email: string) => void;
};

const titles = {
  login: "Log in to Qualia",
  register: "Create your account",
  purchase: "Get started with Qualia",
};

const descriptions = {
  login: "Enter your whitelisted email to access the Qualia platform.",
  register: "Registration is currently limited to invited partners.",
  purchase: "Purchase access is available for whitelisted organizations.",
};

export function WhitelistGate({ mode, onSuccess }: WhitelistGateProps) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulate API check
    await new Promise((r) => setTimeout(r, 800));

    if (isEmailWhitelisted(email)) {
      setStatus("success");
      onSuccess?.(email);
    } else {
      setStatus("error");
    }
    setLoading(false);
  };

  if (status === "success") {
    return (
      <div className="text-center py-8">
        <CheckCircle2 size={48} className="text-green-600 mx-auto mb-4" />
        <h3 className="text-xl font-semibold text-qualia-black mb-2">Access granted</h3>
        <p className="text-qualia-gray-600">
          Welcome, <span className="font-medium">{email}</span>. Your account has been verified.
        </p>
        {mode === "login" && (
          <p className="text-sm text-qualia-gray-500 mt-4">
            Redirecting to dashboard...
          </p>
        )}
        {mode === "register" && (
          <p className="text-sm text-qualia-gray-500 mt-4">
            Check your email to complete registration.
          </p>
        )}
        {mode === "purchase" && (
          <p className="text-sm text-qualia-gray-500 mt-4">
            Proceeding to checkout...
          </p>
        )}
      </div>
    );
  }

  return (
    <div>
      <h2 className="text-2xl font-semibold text-qualia-black mb-2">{titles[mode]}</h2>
      <p className="text-qualia-gray-600 mb-8">{descriptions[mode]}</p>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-qualia-black mb-2">
            Email address
          </label>
          <input
            id="email"
            type="email"
            required
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              setStatus("idle");
            }}
            placeholder="you@company.com"
            className="w-full px-4 py-3 border border-qualia-gray-300 rounded-xl text-qualia-black placeholder:text-qualia-gray-400 focus:outline-none focus:ring-2 focus:ring-qualia-accent focus:border-transparent transition-shadow"
            autoComplete="email"
          />
        </div>

        {status === "error" && (
          <div className="flex items-start gap-3 p-4 bg-red-50 border border-red-200 rounded-xl" role="alert">
            <AlertCircle size={20} className="text-red-600 shrink-0 mt-0.5" />
            <div>
              <p className="text-sm font-medium text-red-800">Access restricted</p>
              <p className="text-sm text-red-700 mt-1">{getWhitelistMessage()}</p>
            </div>
          </div>
        )}

        <Button type="submit" className="w-full" disabled={loading}>
          {loading ? "Verifying..." : mode === "login" ? "Continue" : mode === "register" ? "Request Access" : "Continue to Purchase"}
        </Button>
      </form>

      <p className="text-xs text-qualia-gray-400 mt-6 text-center">
        Demo whitelist: admin@qualia.lat, demo@qualia.lat
      </p>
    </div>
  );
}
