import type { Metadata } from "next";
import { createMetadata } from "@/lib/seo";
import { ContactForm } from "./ContactForm";

export const metadata: Metadata = createMetadata({
  title: "Contact",
  description: "Get in touch with the Datawall team for sales, support, and partnership inquiries.",
  path: "/contact/",
});

export default function ContactPage() {
  return <ContactForm />;
}
