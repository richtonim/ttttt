"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { newsletterSchema, type NewsletterFormData } from "@/lib/validation";

export function NewsletterForm({ className }: { className?: string }) {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const { register, handleSubmit, reset, formState: { errors } } = useForm<NewsletterFormData>({
    resolver: zodResolver(newsletterSchema),
  });

  async function onSubmit(data: NewsletterFormData) {
    if (data.website) return;
    setStatus("loading");
    try {
      // TODO: Connect to backend API when available
      await new Promise((r) => setTimeout(r, 800));
      setStatus("success");
      reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return <p className="text-sm text-success">You&apos;re subscribed. Thank you!</p>;
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={className}>
      <input type="text" className="hidden" tabIndex={-1} autoComplete="off" {...register("website")} />
      <div className="flex gap-2">
        <div className="flex-1">
          <Label htmlFor="newsletter-email" className="sr-only">Email</Label>
          <Input id="newsletter-email" type="email" placeholder="Enter your email" {...register("email")} />
          {errors.email && <p className="mt-1 text-xs text-error">{errors.email.message}</p>}
        </div>
        <Button type="submit" disabled={status === "loading"}>
          {status === "loading" ? "..." : "Subscribe"}
        </Button>
      </div>
    </form>
  );
}
