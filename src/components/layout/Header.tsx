"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { NAV_LINKS, SITE } from "@/lib/site";
import { cn } from "@/lib/utils";

type ButtonProps = {
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit";
  disabled?: boolean;
};

const variants = {
  primary:
    "bg-foreground text-background hover:bg-foreground/90 border border-foreground",
  secondary:
    "bg-transparent text-foreground border border-border hover:border-foreground/40 hover:bg-white/5",
  ghost: "bg-transparent text-muted hover:text-foreground border border-transparent",
};

const sizes = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-base tracking-wide",
};

export function Button({
  children,
  href,
  variant = "primary",
  size = "md",
  className,
  onClick,
  type = "button",
  disabled,
}: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center font-medium transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent disabled:opacity-50 disabled:pointer-events-none",
    variants[variant],
    sizes[size],
    className
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={classes} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
}

export function Logo({ className }: { className?: string }) {
  return (
    <Link href="/" className={cn("flex items-center gap-3 group", className)} aria-label={`${SITE.name} home`}>
      <svg width="28" height="28" viewBox="0 0 32 32" fill="none" aria-hidden="true" className="shrink-0">
        <circle cx="16" cy="16" r="3" fill="#4A9EFF" className="group-hover:fill-accent transition-colors" />
        <circle cx="8" cy="10" r="2" fill="#fafafa" opacity="0.8" />
        <circle cx="24" cy="10" r="2" fill="#fafafa" opacity="0.8" />
        <circle cx="8" cy="22" r="2" fill="#fafafa" opacity="0.8" />
        <circle cx="24" cy="22" r="2" fill="#fafafa" opacity="0.8" />
        <line x1="10" y1="11" x2="13.5" y2="14" stroke="#4A9EFF" strokeWidth="0.75" opacity="0.6" />
        <line x1="22" y1="11" x2="18.5" y2="14" stroke="#4A9EFF" strokeWidth="0.75" opacity="0.6" />
        <line x1="10" y1="21" x2="13.5" y2="18" stroke="#4A9EFF" strokeWidth="0.75" opacity="0.6" />
        <line x1="22" y1="21" x2="18.5" y2="18" stroke="#4A9EFF" strokeWidth="0.75" opacity="0.6" />
      </svg>
      <span className="text-lg font-medium tracking-tight text-foreground">{SITE.name}</span>
    </Link>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-8">
        <Logo />

        <nav className="hidden items-center gap-8 md:flex" aria-label="Main navigation">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-muted transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-4 md:flex">
          <Link href="/login/" className="text-sm text-muted transition-colors hover:text-foreground">
            Log in
          </Link>
          <Button href="/demo/" variant="secondary" size="sm">
            Book a Demo
          </Button>
        </div>

        <button
          type="button"
          className="md:hidden text-foreground p-2"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <nav className="md:hidden border-t border-border bg-background px-6 py-6" aria-label="Mobile navigation">
          <div className="flex flex-col gap-4">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-base text-muted hover:text-foreground"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <hr className="border-border" />
            <Link href="/login/" className="text-base text-muted" onClick={() => setOpen(false)}>
              Log in
            </Link>
            <Button href="/demo/" variant="secondary" size="sm" className="w-full">
              Book a Demo
            </Button>
          </div>
        </nav>
      )}
    </header>
  );
}
