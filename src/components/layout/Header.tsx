"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { NAV_LINKS } from "@/lib/constants";
import { Button } from "@/components/ui/Button";
import { getAuth } from "@/lib/whitelist";

const navItems = [
  { label: "Platform", href: "/platform/", children: NAV_LINKS.platform },
  { label: "Solutions", href: "/solutions/", children: NAV_LINKS.solutions },
  { label: "Technology", href: "/technology/", children: NAV_LINKS.technology },
  { label: "Developers", href: "/developers/", children: NAV_LINKS.developers },
  { label: "Company", href: "/company/", children: NAV_LINKS.company },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [user, setUser] = useState<{ email: string; name: string } | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    const auth = getAuth();
    if (auth) queueMicrotask(() => setUser(auth));
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-black/80 backdrop-blur-xl border-b border-white/5" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-8" aria-label="Main navigation">
        <Link href="/" className="flex items-center gap-3 group" aria-label="Entropy home">
          <Image src="/logo.svg" alt="" width={36} height={36} className="w-9 h-9" />
          <span className="text-lg font-semibold tracking-tight text-white">Entropy</span>
        </Link>

        <div className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => (
            <div
              key={item.label}
              className="relative"
              onMouseEnter={() => setActiveDropdown(item.label)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <Link
                href={item.href}
                className="px-4 py-2 text-sm text-white/70 hover:text-white transition-colors"
              >
                {item.label}
              </Link>
              <AnimatePresence>
                {activeDropdown === item.label && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-1 w-64 rounded-xl border border-white/10 bg-black/95 backdrop-blur-xl p-2 shadow-2xl"
                  >
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block px-4 py-2.5 text-sm text-white/60 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-3">
          {user ? (
            <span className="text-sm text-white/50">{user.email}</span>
          ) : (
            <>
              <Button href="/login/" variant="ghost" size="default">
                Log in
              </Button>
              <Button href="/register/" variant="secondary" size="default">
                Get Started
              </Button>
            </>
          )}
          <Button href="/contact/" variant="primary" size="default">
            Book a Demo
          </Button>
        </div>

        <button
          className="lg:hidden p-2 text-white"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {mobileOpen ? (
              <path d="M6 6l12 12M6 18L18 6" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden border-t border-white/5 bg-black/95 backdrop-blur-xl"
          >
            <div className="px-6 py-6 space-y-4">
              {navItems.map((item) => (
                <div key={item.label}>
                  <Link
                    href={item.href}
                    className="block text-lg font-medium text-white py-2"
                    onClick={() => setMobileOpen(false)}
                  >
                    {item.label}
                  </Link>
                  <div className="pl-4 space-y-1">
                    {item.children.slice(1).map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block text-sm text-white/50 py-1.5"
                        onClick={() => setMobileOpen(false)}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
              <div className="flex flex-col gap-3 pt-4 border-t border-white/10">
                <Button href="/login/" variant="secondary">Log in</Button>
                <Button href="/register/" variant="secondary">Get Started</Button>
                <Button href="/contact/" variant="primary">Book a Demo</Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
