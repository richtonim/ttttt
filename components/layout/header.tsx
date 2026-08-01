"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Logo } from "@/components/logo/logo";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { NavDropdown } from "@/components/navigation/nav-dropdown";
import { MobileMenu } from "@/components/navigation/mobile-menu";
import { LocaleSwitcher } from "@/components/layout/locale-switcher";
import { mainNavItems } from "@/content/navigation";
import { cn } from "@/lib/utils";
import type { Locale } from "@/lib/i18n/locales";
import { getLocalizedPath } from "@/lib/i18n/locales";
import type { Dictionary } from "@/lib/i18n";

interface HeaderProps {
  locale?: Locale;
  dict?: Dictionary;
}

export function Header({ locale = "en", dict }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const t = dict?.common;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 z-50 w-full transition-all duration-300",
          scrolled
            ? "border-b border-border/60 bg-white/80 backdrop-blur-md"
            : "bg-transparent"
        )}
      >
        <Container>
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center gap-8">
              <Logo locale={locale} />
              <nav className="hidden items-center gap-1 lg:flex" aria-label="Main navigation">
                {mainNavItems.map((item) =>
                  item.items ? (
                    <NavDropdown
                      key={item.label}
                      label={item.label}
                      items={item.items}
                      locale={locale}
                    />
                  ) : (
                    <Link
                      key={item.label}
                      href={getLocalizedPath(item.href!, locale)}
                      className="rounded-button px-3 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {item.label}
                    </Link>
                  )
                )}
              </nav>
            </div>
            <div className="flex items-center gap-2">
              <LocaleSwitcher locale={locale} className="hidden sm:flex" />
              <Link
                href={getLocalizedPath("/sign-in", locale)}
                className="hidden rounded-button px-3 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground sm:inline-flex"
              >
                {t?.signIn ?? "Sign in"}
              </Link>
              <Button href={getLocalizedPath("/early-access", locale)} size="sm" className="hidden sm:inline-flex">
                {t?.startBuilding ?? "Start building"}
              </Button>
              <button
                type="button"
                className="inline-flex rounded-button p-2 text-foreground lg:hidden"
                onClick={() => setMobileOpen(true)}
                aria-label="Open menu"
              >
                <Menu className="h-5 w-5" />
              </button>
            </div>
          </div>
        </Container>
      </header>
      <MobileMenu
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        locale={locale}
        dict={dict}
      />
    </>
  );
}
