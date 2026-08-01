"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select } from "@/components/ui/select";
import { contactFormSchema, type ContactFormData } from "@/lib/validation";
import { cn } from "@/lib/utils";

export function ContactForm({ className }: { className?: string }) {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  async function onSubmit(data: ContactFormData) {
    if (data.website) return;
    setStatus("loading");
    try {
      // TODO: Connect to backend API when available
      await new Promise((r) => setTimeout(r, 1000));
      console.info("[Contact form submission — placeholder]", data);
      setStatus("success");
      reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className={cn("rounded-card border border-success/20 bg-success/5 p-8 text-center", className)}>
        <h3 className="text-lg font-medium text-foreground">Thanks for reaching out.</h3>
        <p className="mt-2 text-muted-foreground">Our team will get back to you soon.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={cn("space-y-5", className)} noValidate>
      <input type="text" className="hidden" tabIndex={-1} autoComplete="off" {...register("website")} />
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <Label htmlFor="firstName">First name *</Label>
          <Input id="firstName" className="mt-1.5" {...register("firstName")} aria-invalid={!!errors.firstName} />
          {errors.firstName && <p className="mt-1 text-xs text-error">{errors.firstName.message}</p>}
        </div>
        <div>
          <Label htmlFor="lastName">Last name *</Label>
          <Input id="lastName" className="mt-1.5" {...register("lastName")} aria-invalid={!!errors.lastName} />
          {errors.lastName && <p className="mt-1 text-xs text-error">{errors.lastName.message}</p>}
        </div>
      </div>
      <div>
        <Label htmlFor="email">Work email *</Label>
        <Input id="email" type="email" className="mt-1.5" {...register("email")} aria-invalid={!!errors.email} />
        {errors.email && <p className="mt-1 text-xs text-error">{errors.email.message}</p>}
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <Label htmlFor="company">Company *</Label>
          <Input id="company" className="mt-1.5" {...register("company")} aria-invalid={!!errors.company} />
          {errors.company && <p className="mt-1 text-xs text-error">{errors.company.message}</p>}
        </div>
        <div>
          <Label htmlFor="companySize">Company size *</Label>
          <Select id="companySize" className="mt-1.5" {...register("companySize")} defaultValue="">
            <option value="" disabled>Select size</option>
            <option value="1-10">1–10</option>
            <option value="11-50">11–50</option>
            <option value="51-200">51–200</option>
            <option value="201-1000">201–1,000</option>
            <option value="1000+">1,000+</option>
          </Select>
          {errors.companySize && <p className="mt-1 text-xs text-error">{errors.companySize.message}</p>}
        </div>
      </div>
      <div>
        <Label htmlFor="role">Role *</Label>
        <Input id="role" className="mt-1.5" {...register("role")} aria-invalid={!!errors.role} />
        {errors.role && <p className="mt-1 text-xs text-error">{errors.role.message}</p>}
      </div>
      <div>
        <Label htmlFor="building">What are you building?</Label>
        <Input id="building" className="mt-1.5" {...register("building")} />
      </div>
      <div>
        <Label htmlFor="usage">Expected monthly AI usage</Label>
        <Input id="usage" className="mt-1.5" placeholder="e.g. 50,000 requests" {...register("usage")} />
      </div>
      <div>
        <Label htmlFor="interest">What are you interested in? *</Label>
        <Select id="interest" className="mt-1.5" {...register("interest")} defaultValue="">
          <option value="" disabled>Select an option</option>
          <option value="agent-studio">Agent Studio</option>
          <option value="model-gateway">Model Gateway</option>
          <option value="knowledge-layer">Knowledge Layer</option>
          <option value="workflows">AI Workflows</option>
          <option value="enterprise">Enterprise deployment</option>
          <option value="partnership">Partnership</option>
          <option value="other">Other</option>
        </Select>
        {errors.interest && <p className="mt-1 text-xs text-error">{errors.interest.message}</p>}
      </div>
      <div>
        <Label htmlFor="message">Message</Label>
        <Textarea id="message" className="mt-1.5" rows={4} {...register("message")} />
      </div>
      <div className="flex items-start gap-2">
        <input type="checkbox" id="privacy" className="mt-1" {...register("privacy")} />
        <Label htmlFor="privacy" className="text-sm font-normal text-muted-foreground">
          I agree to the{" "}
          <Link href="/privacy" className="text-brand hover:underline">Privacy Policy</Link>
        </Label>
      </div>
      {errors.privacy && <p className="text-xs text-error">{errors.privacy.message}</p>}
      {status === "error" && (
        <p className="text-sm text-error">Something went wrong. Please try again.</p>
      )}
      <Button type="submit" disabled={status === "loading"} className="w-full sm:w-auto">
        {status === "loading" ? "Sending..." : "Contact our team"}
      </Button>
    </form>
  );
}
