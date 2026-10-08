"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Logo } from "./Logo";
import { NAV_LINKS } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-white/80 backdrop-blur-xl border-b border-qualia-gray-200"
          : "bg-transparent"
      )}
      role="banner"
    >
      <nav
        className="max-w-7xl mx-auto px-6 lg:px-8 h-16 lg:h-20 flex items-center justify-between"
        aria-label="Main navigation"
      >
        <Logo />

        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-qualia-gray-600 hover:text-qualia-black transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-4">
          <Link
            href="/login/"
            className="text-sm text-qualia-gray-600 hover:text-qualia-black transition-colors"
          >
            Log in
          </Link>
          <Link
            href="/contact/"
            className="text-sm px-4 py-2 bg-qualia-black text-white rounded-full hover:bg-qualia-gray-800 transition-colors"
          >
            Talk to Us
          </Link>
        </div>

        <button
          type="button"
          className="md:hidden p-2 -mr-2 text-qualia-black"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-expanded={mobileOpen}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {mobileOpen && (
        <div className="md:hidden fixed inset-0 top-16 bg-white z-40">
          <div className="flex flex-col p-6 gap-6">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-2xl font-medium text-qualia-black"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <hr className="border-qualia-gray-200" />
            <Link
              href="/login/"
              className="text-lg text-qualia-gray-600"
              onClick={() => setMobileOpen(false)}
            >
              Log in
            </Link>
            <Link
              href="/contact/"
              className="text-lg px-6 py-3 bg-qualia-black text-white rounded-full text-center"
              onClick={() => setMobileOpen(false)}
            >
              Talk to Us
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
