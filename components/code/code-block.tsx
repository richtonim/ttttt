"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";
import { cn } from "@/lib/utils";

const snippets = {
  javascript: `import { NextLayer } from "@nextlayer/sdk";

const client = new NextLayer({
  apiKey: process.env.NEXTLAYER_API_KEY
});

const response = await client.agents.run({
  agent: "support-agent",
  input: "Summarize this customer request",
  user: "customer_1024"
});

console.log(response.output);`,
  python: `from nextlayer import NextLayer

client = NextLayer(
    api_key=os.environ["NEXTLAYER_API_KEY"]
)

response = client.agents.run(
    agent="support-agent",
    input="Summarize this customer request",
    user="customer_1024"
)

print(response.output)`,
};

export function CodeBlock({ className }: { className?: string }) {
  const [lang, setLang] = useState<"javascript" | "python">("javascript");
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    await navigator.clipboard.writeText(snippets[lang]);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <div className={cn("overflow-hidden rounded-panel border border-border-dark bg-[#12151A]", className)}>
      <div className="flex items-center justify-between border-b border-border-dark px-4 py-2">
        <div className="flex gap-1">
          {(["javascript", "python"] as const).map((l) => (
            <button
              key={l}
              type="button"
              onClick={() => setLang(l)}
              className={cn(
                "rounded-button px-3 py-1 text-xs capitalize transition-colors",
                lang === l ? "bg-white/10 text-white" : "text-white/50 hover:text-white/80"
              )}
            >
              {l === "javascript" ? "JavaScript" : "Python"}
            </button>
          ))}
        </div>
        <button
          type="button"
          onClick={handleCopy}
          className="flex items-center gap-1.5 rounded-button px-2 py-1 text-xs text-white/60 hover:text-white"
          aria-label="Copy code"
        >
          {copied ? <Check className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
          {copied ? "Copied" : "Copy"}
        </button>
      </div>
      <pre className="overflow-x-auto p-4 font-mono text-sm leading-relaxed text-white/90 motion-safe:animate-in motion-safe:fade-in motion-safe:duration-300">
        <code>{snippets[lang]}</code>
      </pre>
    </div>
  );
}
