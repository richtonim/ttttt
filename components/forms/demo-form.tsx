"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { demoFormSchema, type DemoFormData } from "@/lib/validation";

export function DemoForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const { register, handleSubmit, reset, formState: { errors } } = useForm<DemoFormData>({
    resolver: zodResolver(demoFormSchema),
  });

  async function onSubmit(data: DemoFormData) {
    if (data.website) return;
    setStatus("loading");
    try {
      // TODO: Connect to backend API when available
      await new Promise((r) => setTimeout(r, 1000));
      console.info("[Demo form submission — placeholder]", data);
      setStatus("success");
      reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-card border border-success/20 bg-success/5 p-6 text-center">
        <p className="font-medium">Thanks! We&apos;ll be in touch to schedule your demo.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4" noValidate>
      <input type="text" className="hidden" tabIndex={-1} autoComplete="off" {...register("website")} />
      <div>
        <Label htmlFor="demo-name">Name *</Label>
        <Input id="demo-name" className="mt-1.5" {...register("name")} />
        {errors.name && <p className="mt-1 text-xs text-error">{errors.name.message}</p>}
      </div>
      <div>
        <Label htmlFor="demo-email">Email *</Label>
        <Input id="demo-email" type="email" className="mt-1.5" {...register("email")} />
        {errors.email && <p className="mt-1 text-xs text-error">{errors.email.message}</p>}
      </div>
      <div>
        <Label htmlFor="demo-company">Company *</Label>
        <Input id="demo-company" className="mt-1.5" {...register("company")} />
        {errors.company && <p className="mt-1 text-xs text-error">{errors.company.message}</p>}
      </div>
      <div>
        <Label htmlFor="demo-message">Message</Label>
        <Textarea id="demo-message" className="mt-1.5" rows={3} {...register("message")} />
      </div>
      <div className="flex items-start gap-2">
        <input type="checkbox" id="demo-privacy" className="mt-1" {...register("privacy")} />
        <Label htmlFor="demo-privacy" className="text-sm font-normal text-muted-foreground">
          I agree to the <Link href="/privacy" className="text-brand hover:underline">Privacy Policy</Link>
        </Label>
      </div>
      {errors.privacy && <p className="text-xs text-error">{errors.privacy.message}</p>}
      <Button type="submit" disabled={status === "loading"}>
        {status === "loading" ? "Submitting..." : "Book a demo"}
      </Button>
    </form>
  );
}
