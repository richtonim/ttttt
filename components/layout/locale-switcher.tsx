"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { locales, localeNames, type Locale } from "@/lib/i18n/locales";
import { cn } from "@/lib/utils";

interface LocaleSwitcherProps {
  locale: Locale;
  className?: string;
}

export function LocaleSwitcher({ locale, className }: LocaleSwitcherProps) {
  const pathname = usePathname();

  function getPathForLocale(targetLocale: Locale): string {
    let path = pathname;
    for (const l of locales) {
      if (l !== "en" && path.startsWith(`/${l}`)) {
        path = path.slice(`/${l}`.length) || "/";
        break;
      }
    }
    if (targetLocale === "en") return path;
    return `/${targetLocale}${path === "/" ? "" : path}`;
  }

  return (
    <div className={cn("flex flex-wrap gap-2", className)} role="navigation" aria-label="Language">
      {locales.map((l) => (
        <Link
          key={l}
          href={getPathForLocale(l)}
          className={cn(
            "rounded-full px-2.5 py-1 text-xs transition-colors",
            l === locale
              ? "bg-brand-light text-brand-dark font-medium"
              : "text-muted-foreground hover:text-foreground"
          )}
          hrefLang={l}
        >
          {localeNames[l]}
        </Link>
      ))}
    </div>
  );
}
