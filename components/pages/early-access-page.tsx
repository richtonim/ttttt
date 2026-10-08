"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { earlyAccessSchema, type EarlyAccessFormData } from "@/lib/validation";
import type { Locale } from "@/lib/i18n/locales";

export function EarlyAccessPage({ locale: _locale = "en" }: { locale?: Locale }) {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const { register, handleSubmit, reset, formState: { errors } } = useForm<EarlyAccessFormData>({
    resolver: zodResolver(earlyAccessSchema),
  });

  async function onSubmit(data: EarlyAccessFormData) {
    if (data.website) return;
    setStatus("loading");
    // TODO: Connect to backend API when available
    await new Promise((r) => setTimeout(r, 1000));
    setStatus("success");
    reset();
  }

  if (status === "success") {
    return (
      <Section className="pt-32">
        <Container className="max-w-lg text-center">
          <h1 className="font-display text-3xl font-medium">You&apos;re on the list!</h1>
          <p className="mt-3 text-muted-foreground">We&apos;ll notify you when your early access is approved.</p>
        </Container>
      </Section>
    );
  }

  return (
    <>
      <Section className="pt-32 pb-16">
        <Container className="text-center">
          <h1 className="font-display text-4xl font-medium md:text-5xl">Join early access</h1>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            Platform access is currently whitelist-only. Request access to start building with NextLayer.
          </p>
        </Container>
      </Section>
      <Section variant="soft">
        <Container className="max-w-md">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4" noValidate>
            <input type="text" className="hidden" tabIndex={-1} autoComplete="off" {...register("website")} />
            <div>
              <Label htmlFor="ea-name">Name *</Label>
              <Input id="ea-name" className="mt-1.5" {...register("name")} />
              {errors.name && <p className="mt-1 text-xs text-error">{errors.name.message}</p>}
            </div>
            <div>
              <Label htmlFor="ea-email">Email *</Label>
              <Input id="ea-email" type="email" className="mt-1.5" {...register("email")} />
              {errors.email && <p className="mt-1 text-xs text-error">{errors.email.message}</p>}
            </div>
            <div>
              <Label htmlFor="ea-company">Company</Label>
              <Input id="ea-company" className="mt-1.5" {...register("company")} />
            </div>
            <div>
              <Label htmlFor="ea-message">What are you building?</Label>
              <Textarea id="ea-message" className="mt-1.5" rows={3} {...register("message")} />
            </div>
            <div className="flex items-start gap-2">
              <input type="checkbox" id="ea-privacy" className="mt-1" {...register("privacy")} />
              <Label htmlFor="ea-privacy" className="text-sm font-normal text-muted-foreground">
                I agree to the <Link href="/privacy" className="text-brand hover:underline">Privacy Policy</Link>
              </Label>
            </div>
            {errors.privacy && <p className="text-xs text-error">{errors.privacy.message}</p>}
            <Button type="submit" disabled={status === "loading"} className="w-full">
              {status === "loading" ? "Submitting..." : "Request access"}
            </Button>
          </form>
        </Container>
      </Section>
    </>
  );
}
