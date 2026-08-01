import Link from "next/link";
import Image from "next/image";
import { NAV_LINKS } from "@/lib/constants";

const socialLinks = [
  { label: "LinkedIn", href: "https://linkedin.com/company/entropy-autos" },
  { label: "X", href: "https://x.com/entropyautos" },
  { label: "GitHub", href: "https://github.com/entropy-autos" },
];

export function Footer() {
  const sections = [
    { title: "Platform", links: NAV_LINKS.platform },
    { title: "Solutions", links: NAV_LINKS.solutions },
    { title: "Technology", links: NAV_LINKS.technology },
    { title: "Developers", links: NAV_LINKS.developers },
    { title: "Company", links: NAV_LINKS.company },
    { title: "Contact", links: [{ href: "/contact/", label: "Get in Touch" }, { href: "/pricing/", label: "Pricing" }] },
  ];

  return (
    <footer className="border-t border-white/5 bg-black" role="contentinfo">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-10 mb-16">
          {sections.map((section) => (
            <div key={section.title}>
              <h3 className="text-sm font-semibold text-white mb-4 tracking-wide">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/40 hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pt-10 border-t border-white/5">
          <div className="flex items-center gap-3">
            <Image src="/logo.svg" alt="" width={28} height={28} />
            <div>
              <p className="text-sm font-medium text-white">Entropy</p>
              <p className="text-xs text-white/40 mt-0.5">Turn complexity into motion.</p>
            </div>
          </div>

          <div className="flex items-center gap-6">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-white/40 hover:text-white transition-colors"
                aria-label={social.label}
              >
                {social.label}
              </a>
            ))}
          </div>

          <p className="text-xs text-white/30">
            &copy; 2026 Entropy Autos. All rights reserved.
          </p>
        </div>

        <div className="flex gap-6 mt-8">
          <Link href="/privacy/" className="text-xs text-white/30 hover:text-white/60">Privacy Policy</Link>
          <Link href="/terms/" className="text-xs text-white/30 hover:text-white/60">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}
