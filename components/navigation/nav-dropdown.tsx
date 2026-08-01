"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { ChevronDown, type LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface NavItem {
  title: string;
  href: string;
  description: string;
  icon: LucideIcon;
}

interface NavDropdownProps {
  label: string;
  items: NavItem[];
}

export function NavDropdown({ label, items }: NavDropdownProps) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <div ref={ref} className="relative" onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
      <button
        type="button"
        className="inline-flex items-center gap-1 rounded-button px-3 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
        aria-expanded={open}
        onClick={() => setOpen(!open)}
      >
        {label}
        <ChevronDown className={cn("h-4 w-4 transition-transform", open && "rotate-180")} />
      </button>
      <div
        className={cn(
          "absolute left-0 top-full z-50 pt-2 transition-all duration-200",
          open ? "pointer-events-auto translate-y-0 opacity-100" : "pointer-events-none -translate-y-1 opacity-0"
        )}
      >
        <div className="w-[360px] rounded-card border border-border bg-white p-2 shadow-card">
          {items.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.href}
                href={item.href}
                className="flex items-start gap-3 rounded-button p-3 transition-colors hover:bg-surface-soft"
                onClick={() => setOpen(false)}
              >
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-button border border-border bg-surface-soft">
                  <Icon className="h-4 w-4 text-brand" />
                </div>
                <div>
                  <div className="text-sm font-medium text-foreground">{item.title}</div>
                  <div className="text-xs text-muted-foreground">{item.description}</div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
