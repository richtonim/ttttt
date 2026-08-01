import Link from "next/link";
import Image from "next/image";
import { SITE } from "@/lib/site";
import { footerNav } from "@/lib/navigation";

export function Footer() {
  return (
    <footer className="border-t border-white/5 bg-[#050505]">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="mb-16 flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div>
            <Link href="/" aria-label="Datawall home">
              <Image src="/logo.png" alt="Datawall" width={140} height={36} className="h-8 w-auto" />
            </Link>
            <p className="mt-4 max-w-sm text-sm text-muted">{SITE.tagline}</p>
          </div>
          <div className="flex gap-6">
            <a href={SITE.social.linkedin} className="text-sm text-muted hover:text-electric" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              LinkedIn
            </a>
            <a href={SITE.social.x} className="text-sm text-muted hover:text-electric" target="_blank" rel="noopener noreferrer" aria-label="X">
              X
            </a>
            <a href={SITE.social.github} className="text-sm text-muted hover:text-electric" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              GitHub
            </a>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-10 sm:grid-cols-3 lg:grid-cols-5">
          {Object.entries(footerNav).map(([category, links]) => (
            <div key={category}>
              <h3 className="mb-4 text-xs font-medium uppercase tracking-widest text-white">{category}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-sm text-muted transition-colors hover:text-white">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-white/5 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-muted">&copy; {SITE.founded} {SITE.name}. All rights reserved.</p>
          <div className="flex gap-6 text-sm text-muted">
            <Link href="/contact/" className="hover:text-white">Contact</Link>
            <Link href="/pricing/" className="hover:text-white">Pricing</Link>
            <Link href="/register/" className="hover:text-white">Register</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
