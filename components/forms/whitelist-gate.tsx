"use client";

import { Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Link from "next/link";

interface WhitelistGateProps {
  title?: string;
  description?: string;
}

export function WhitelistGate({
  title = "Early access required",
  description = "Registration and platform access are currently available by invitation only. Join the waitlist to request access.",
}: WhitelistGateProps) {
  return (
    <Card className="mx-auto max-w-lg text-center">
      <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-brand-light">
        <Shield className="h-6 w-6 text-brand" />
      </div>
      <h2 className="font-display text-xl font-medium">{title}</h2>
      <p className="mt-2 text-sm text-muted-foreground">{description}</p>
      <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center">
        <Button href="/early-access">Join waitlist</Button>
        <Button href="/contact" variant="secondary">Contact sales</Button>
      </div>
      <p className="mt-4 text-xs text-muted">
        Platform access is whitelist-only during early access.
      </p>
    </Card>
  );
}
