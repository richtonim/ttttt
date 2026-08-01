import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Contact",
  description: "Get in touch with Entropy to discuss vehicle intelligence, fleet optimization and autonomous mobility solutions.",
  path: "/contact/",
});

export { default } from "./ContactForm";
