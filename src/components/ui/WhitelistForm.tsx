"use client";

import { useState } from "react";
import { validateWhitelistAccess } from "@/lib/whitelist";
import { ButtonSolid } from "@/components/ui/Button";

interface WhitelistFormProps {
  type: "login" | "register" | "purchase";
  onSuccess?: () => void;
}

const FORM_CONFIG = {
  login: {
    title: "Sign in to SOMA",
    description: "Access your SOMA platform dashboard. Login is currently available to whitelisted partners only.",
    submitLabel: "Sign In",
    successAction: "Redirecting to dashboard...",
  },
  register: {
    title: "Request Access",
    description: "SOMA is in private beta. Registration is available to whitelisted partners and early access participants.",
    submitLabel: "Request Access",
    successAction: "Access granted. Welcome to SOMA.",
  },
  purchase: {
    title: "Get SOMA Platform",
    description: "Platform access and licensing are available to whitelisted organizations. Contact us to discuss your requirements.",
    submitLabel: "Request License",
    successAction: "Your request has been submitted.",
  },
};

export function WhitelistForm({ type, onSuccess }: WhitelistFormProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const config = FORM_CONFIG[type];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage("");
    setIsError(false);

    await new Promise((resolve) => setTimeout(resolve, 800));

    const result = validateWhitelistAccess(email);

    if (result.allowed) {
      setIsSuccess(true);
      setMessage(config.successAction);
      onSuccess?.();
    } else {
      setIsError(true);
      setMessage(result.message);
    }

    setIsLoading(false);
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <h1 className="text-3xl md:text-4xl font-semibold text-soma-black mb-4">
        {config.title}
      </h1>
      <p className="text-soma-gray-400 mb-8 leading-relaxed">
        {config.description}
      </p>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label
            htmlFor="email"
            className="block font-mono text-xs uppercase tracking-wider text-soma-gray-400 mb-2"
          >
            Work Email
          </label>
          <input
            id="email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@company.com"
            className="w-full px-4 py-3 border border-soma-gray-200 bg-white text-soma-black placeholder:text-soma-gray-300 focus:outline-none focus:border-soma-black transition-colors"
          />
        </div>

        {(type === "login" || type === "register") && (
          <div>
            <label
              htmlFor="password"
              className="block font-mono text-xs uppercase tracking-wider text-soma-gray-400 mb-2"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="w-full px-4 py-3 border border-soma-gray-200 bg-white text-soma-black placeholder:text-soma-gray-300 focus:outline-none focus:border-soma-black transition-colors"
            />
          </div>
        )}

        {message && (
          <div
            className={`p-4 text-sm ${
              isError
                ? "bg-red-50 text-red-700 border border-red-100"
                : "bg-green-50 text-green-700 border border-green-100"
            }`}
            role="alert"
          >
            {message}
          </div>
        )}

        <button
          type="submit"
          disabled={isLoading || isSuccess}
          className="w-full px-6 py-3 bg-soma-black text-white font-medium tracking-wide hover:bg-soma-gray-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isLoading ? "Verifying..." : config.submitLabel}
        </button>
      </form>

      <div className="mt-8 p-4 bg-soma-gray-50 border border-soma-gray-100">
        <p className="font-mono text-xs text-soma-gray-400 mb-2">
          Whitelist Access
        </p>
        <p className="text-sm text-soma-gray-400">
          SOMA is currently in private beta. To request whitelist access,{" "}
          <a href="/contact/" className="text-soma-black underline">
            contact our team
          </a>
          .
        </p>
      </div>
    </div>
  );
}
