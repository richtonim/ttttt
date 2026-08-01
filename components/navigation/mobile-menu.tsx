"use client";

import { useEffect } from "react";
import Link from "next/link";
import { X } from "lucide-react";
import { Logo } from "@/components/logo/logo";
import { Button } from "@/components/ui/button";
import { mainNavItems } from "@/content/navigation";
import type { Locale } from "@/lib/i18n/locales";
import { getLocalizedPath } from "@/lib/i18n/locales";
import type { Dictionary } from "@/lib/i18n";

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
  locale?: Locale;
  dict?: Dictionary;
}

export function MobileMenu({ open, onClose, locale = "en", dict }: MobileMenuProps) {
  const t = dict?.common;

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[60] lg:hidden">
      <div className="absolute inset-0 bg-black/20 backdrop-blur-sm" onClick={onClose} aria-hidden="true" />
      <div className="absolute inset-y-0 right-0 w-full max-w-sm bg-white shadow-card">
        <div className="flex h-16 items-center justify-between border-b border-border px-4">
          <Logo locale={locale} />
          <button type="button" onClick={onClose} className="rounded-button p-2" aria-label="Close menu">
            <X className="h-5 w-5" />
          </button>
        </div>
        <nav className="overflow-y-auto p-4" aria-label="Mobile navigation">
          {mainNavItems.map((item) => (
            <div key={item.label} className="mb-6">
              {item.href ? (
                <Link
                  href={getLocalizedPath(item.href, locale)}
                  className="block py-2 text-base font-medium"
                  onClick={onClose}
                >
                  {item.label}
                </Link>
              ) : (
                <>
                  <div className="mb-2 text-xs font-medium uppercase tracking-wider text-muted">
                    {item.label}
                  </div>
                  {item.items?.map((sub) => (
                    <Link
                      key={sub.href}
                      href={getLocalizedPath(sub.href, locale)}
                      className="block py-2 pl-2 text-sm text-muted-foreground"
                      onClick={onClose}
                    >
                      {sub.title}
                    </Link>
                  ))}
                </>
              )}
            </div>
          ))}
        </nav>
        <div className="absolute bottom-0 left-0 right-0 border-t border-border p-4 space-y-2">
          <Button href={getLocalizedPath("/sign-in", locale)} variant="secondary" className="w-full">
            {t?.signIn ?? "Sign in"}
          </Button>
          <Button href={getLocalizedPath("/early-access", locale)} className="w-full">
            {t?.startBuilding ?? "Start building"}
          </Button>
        </div>
      </div>
    </div>
  );
}
