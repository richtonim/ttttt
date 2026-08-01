import type { Metadata } from "next";
import { createMetadata } from "@/lib/seo";
import { RegisterForm } from "./RegisterForm";

export const metadata: Metadata = createMetadata({
  title: "Register",
  description: "Create your Datawall account. Registration is limited to approved organizations.",
  path: "/register/",
});

export default function RegisterPage() {
  return <RegisterForm />;
}
