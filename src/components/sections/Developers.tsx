"use client";

import { useState } from "react";
import { DEVELOPER_FEATURES } from "@/lib/constants";
import { FadeIn } from "../animations";
import { Button } from "../Button";
import { Copy, Check } from "lucide-react";

const codeExample = `import { Qualia } from '@qualia/sdk';

const client = new Qualia({
  apiKey: process.env.QUALIA_API_KEY,
});

const response = await client.perceive({
  modalities: ['text', 'image', 'audio'],
  input: {
    text: 'Analyze this scene',
    image: imageBuffer,
  },
  context: {
    userId: 'user_123',
    sessionId: 'sess_abc',
  },
});

console.log(response.understanding);
// { intent: 'analysis', confidence: 0.97, ... }`;

export function Developers() {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(codeExample);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="developers" className="py-32 lg:py-40 bg-qualia-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-start">
          <div>
            <FadeIn>
              <p className="text-sm tracking-[0.15em] uppercase text-qualia-gray-500 mb-4">
                Developers
              </p>
              <h2 className="text-heading font-semibold text-qualia-black mb-6">
                Build with Qualia
              </h2>
              <p className="text-body text-qualia-gray-600 mb-8">
                A clean, powerful API designed for developers who demand precision. SDKs,
                agents, webhooks and real-time monitoring — everything you need.
              </p>
            </FadeIn>

            <FadeIn delay={0.15}>
              <div className="flex flex-wrap gap-2 mb-8">
                {DEVELOPER_FEATURES.map((feature) => (
                  <span
                    key={feature}
                    className="text-xs px-3 py-1.5 border border-qualia-gray-300 rounded-full text-qualia-gray-600"
                  >
                    {feature}
                  </span>
                ))}
              </div>
              <Button href="/developers/">View Documentation</Button>
            </FadeIn>
          </div>

          <FadeIn delay={0.2}>
            <div className="relative rounded-2xl overflow-hidden border border-qualia-gray-200 bg-qualia-black">
              <div className="flex items-center justify-between px-4 py-3 border-b border-qualia-gray-800">
                <span className="text-xs text-qualia-gray-500 font-mono">example.ts</span>
                <button
                  type="button"
                  onClick={handleCopy}
                  className="p-1.5 text-qualia-gray-500 hover:text-white transition-colors"
                  aria-label="Copy code"
                >
                  {copied ? <Check size={16} /> : <Copy size={16} />}
                </button>
              </div>
              <pre className="p-6 overflow-x-auto text-sm leading-relaxed">
                <code className="text-qualia-gray-300 font-mono">{codeExample}</code>
              </pre>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
