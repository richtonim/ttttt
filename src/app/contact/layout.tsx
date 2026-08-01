import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Contact",
  description: "Get in touch with SOMA Autos. Request a demo, API access, or partnership discussion.",
  path: "/contact/",
});

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
