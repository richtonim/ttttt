import Link from "next/link";
import { FOOTER_LINKS } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="bg-white border-t border-soma-gray-100">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          <div className="lg:col-span-1">
            <Link href="/" className="text-xl font-bold tracking-tight text-soma-black">
              SOMA
            </Link>
            <p className="mt-3 text-sm text-soma-gray-400">
              Intelligence in Motion.
            </p>
          </div>

          <div>
            <h3 className="font-mono text-xs uppercase tracking-[0.15em] text-soma-gray-400 mb-4">
              Navigation
            </h3>
            <ul className="space-y-3">
              {FOOTER_LINKS.main.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-soma-gray-500 hover:text-soma-black transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-mono text-xs uppercase tracking-[0.15em] text-soma-gray-400 mb-4">
              Legal
            </h3>
            <ul className="space-y-3">
              {FOOTER_LINKS.legal.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-soma-gray-500 hover:text-soma-black transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-mono text-xs uppercase tracking-[0.15em] text-soma-gray-400 mb-4">
              Connect
            </h3>
            <ul className="space-y-3">
              {FOOTER_LINKS.social.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-soma-gray-500 hover:text-soma-black transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-soma-gray-100 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-soma-gray-400">
            © 2026 SOMA Autos. All rights reserved.
          </p>
          <p className="text-xs text-soma-gray-300 font-mono">
            soma.autos
          </p>
        </div>
      </div>
    </footer>
  );
}
