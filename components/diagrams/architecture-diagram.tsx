import { cn } from "@/lib/utils";

const stackLayers = [
  {
    title: "Your Applications",
    items: ["Web", "Mobile", "Slack", "API", "Internal Tools"],
  },
  {
    title: "NextLayer Platform",
    items: ["Agents", "Workflows", "Knowledge", "Routing", "Monitoring"],
    highlight: true,
  },
  {
    title: "Your Data",
    items: ["Documents", "Databases", "CRM", "Cloud Storage", "APIs"],
  },
  {
    title: "AI Models",
    items: ["OpenAI", "Anthropic", "Gemini", "Mistral", "Private Models"],
  },
];

export function ArchitectureDiagram({ className }: { className?: string }) {
  return (
    <div className={cn("space-y-4", className)}>
      {stackLayers.map((layer) => (
        <div
          key={layer.title}
          className={cn(
            "rounded-card border p-5",
            layer.highlight
              ? "border-brand/30 bg-brand-light/30"
              : "border-border bg-white"
          )}
        >
          <h4 className="mb-3 text-sm font-medium text-foreground">{layer.title}</h4>
          <div className="flex flex-wrap gap-2">
            {layer.items.map((item) => (
              <span
                key={item}
                className="rounded-full border border-border bg-surface-soft px-3 py-1 text-xs text-muted-foreground"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
