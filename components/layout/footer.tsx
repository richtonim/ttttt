import Link from "next/link";
import { Linkedin, Github } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Logo } from "@/components/logo/logo";

const footerLinks = {
  Product: [
    { label: "Agent Studio", href: "/platform/agent-studio" },
    { label: "Model Gateway", href: "/platform/model-gateway" },
    { label: "Knowledge Layer", href: "/platform/knowledge-layer" },
    { label: "Workflows", href: "/platform/workflows" },
    { label: "Observability", href: "/platform/observability" },
    { label: "Pricing", href: "/pricing" },
  ],
  Developers: [
    { label: "Documentation", href: "/docs" },
    { label: "API Reference", href: "/developers#api" },
    { label: "SDKs", href: "/developers#sdks" },
    { label: "Integrations", href: "/integrations" },
    { label: "Changelog", href: "/developers#changelog" },
    { label: "Status", href: "/developers#status" },
  ],
  Resources: [
    { label: "Blog", href: "/blog" },
    { label: "Guides", href: "/docs" },
    { label: "Templates", href: "/templates" },
    { label: "Customer Stories", href: "/blog" },
    { label: "Help Center", href: "/contact" },
  ],
  Company: [
    { label: "About", href: "/about" },
    { label: "Careers", href: "/careers" },
    { label: "Partners", href: "/contact" },
    { label: "Contact", href: "/contact" },
    { label: "Security", href: "/security" },
  ],
  Legal: [
    { label: "Privacy", href: "/privacy" },
    { label: "Terms", href: "/terms" },
    { label: "Cookie Policy", href: "/cookies" },
    { label: "Acceptable Use", href: "/terms" },
    { label: "Data Processing Agreement", href: "/privacy" },
  ],
};

function XIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-surface-soft">
      <Container className="py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-7">
          <div className="lg:col-span-2">
            <Logo />
            <p className="mt-4 max-w-xs text-sm text-muted-foreground">
              NextLayer — The intelligent layer for modern business.
            </p>
          </div>
          {Object.entries(footerLinks).map(([group, links]) => (
            <div key={group}>
              <h3 className="text-sm font-medium text-foreground">{group}</h3>
              <ul className="mt-4 space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 sm:flex-row">
          <p className="text-sm text-muted-foreground">© {year} NextLayer</p>
          <div className="flex items-center gap-4">
            <a href="#" className="text-muted-foreground transition-colors hover:text-foreground" aria-label="LinkedIn">
              <Linkedin className="h-5 w-5" />
            </a>
            <a href="#" className="text-muted-foreground transition-colors hover:text-foreground" aria-label="X (Twitter)">
              <XIcon className="h-5 w-5" />
            </a>
            <a href="#" className="text-muted-foreground transition-colors hover:text-foreground" aria-label="GitHub">
              <Github className="h-5 w-5" />
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
