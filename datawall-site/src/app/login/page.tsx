import type { Metadata } from "next";
import { createMetadata } from "@/lib/seo";
import { LoginForm } from "./LoginForm";

export const metadata: Metadata = createMetadata({
  title: "Log In",
  description: "Sign in to your Datawall account. Access is limited to approved organizations.",
  path: "/login/",
});

export default function LoginPage() {
  return <LoginForm />;
}
