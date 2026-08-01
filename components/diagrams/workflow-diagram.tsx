import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

interface WorkflowDiagramProps {
  steps: string[];
  className?: string;
}

export function WorkflowDiagram({ steps, className }: WorkflowDiagramProps) {
  return (
    <div className={cn("flex flex-col gap-3 md:flex-row md:items-center md:gap-2", className)}>
      {steps.map((step, i) => (
        <div key={step} className="flex items-center gap-2">
          <div className="rounded-card border border-border bg-white px-4 py-3 text-sm font-medium shadow-card">
            {step}
          </div>
          {i < steps.length - 1 && (
            <ArrowRight className="hidden h-4 w-4 shrink-0 text-muted md:block" />
          )}
        </div>
      ))}
    </div>
  );
}
