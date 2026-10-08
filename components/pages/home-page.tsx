"use client";

import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { LayerStack } from "@/components/diagrams/layer-stack";
import { ArchitectureDiagram } from "@/components/diagrams/architecture-diagram";
import { CodeBlock } from "@/components/code/code-block";
import { products } from "@/content/products";
import { solutions } from "@/content/solutions";
import { pricingPlans } from "@/content/pricing";
import type { Dictionary } from "@/lib/i18n";
import type { Locale } from "@/lib/i18n/locales";
import { getLocalizedPath } from "@/lib/i18n/locales";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.5 },
};

const advantages = ["Multi-model", "Secure by design", "API first", "Real-time observability", "Enterprise permissions"];

const securityFeatures = [
  "Data encryption",
  "Role-based access",
  "Audit logs",
  "Private deployments",
  "Data retention controls",
  "Sensitive data filtering",
  "Single sign-on",
  "Regional data storage",
];

const dashboardStats = [
  { label: "Requests", value: "128,430" },
  { label: "Success rate", value: "99.94%" },
  { label: "Average latency", value: "820 ms" },
  { label: "AI cost saved", value: "31.8%" },
  { label: "User satisfaction", value: "4.7 / 5" },
];

interface HomePageProps {
  locale?: Locale;
  dict?: Dictionary;
}

export function HomePage({ locale = "en", dict }: HomePageProps) {
  const t = dict?.common;
  const hero = dict?.hero;

  return (
    <>
      {/* Hero */}
      <Section className="pt-32 pb-20 md:pt-40">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <motion.div {...fadeIn}>
              <Badge variant="brand" className="mb-6">
                {hero?.badge ?? "AI infrastructure for modern teams"}
              </Badge>
              <h1 className="font-display text-4xl font-medium tracking-tight text-foreground md:text-5xl lg:text-[4rem] lg:leading-[1.1]">
                {hero?.title ?? "Build the next layer of your business with AI."}
              </h1>
              <p className="mt-6 text-lg text-muted-foreground md:text-xl">
                {hero?.subtitle ?? "Connect models, company knowledge, and business workflows in one secure AI platform."}
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button href={getLocalizedPath("/early-access", locale)}>
                  {t?.startBuilding ?? "Start building"}
                </Button>
                <Button href={getLocalizedPath("/book-demo", locale)} variant="secondary">
                  {t?.bookDemo ?? "Book a demo"}
                </Button>
              </div>
              <div className="mt-8 flex flex-wrap gap-4 text-sm text-muted-foreground">
                <span>{hero?.modelAgnostic ?? "Model agnostic"}</span>
                <span className="text-border">·</span>
                <span>{hero?.enterpriseReady ?? "Enterprise ready"}</span>
                <span className="text-border">·</span>
                <span>{hero?.builtForDevs ?? "Built for developers"}</span>
              </div>
            </motion.div>
            <motion.div {...fadeIn} transition={{ ...fadeIn.transition, delay: 0.2 }}>
              <LayerStack />
            </motion.div>
          </div>
        </Container>
      </Section>

      {/* Platform advantages */}
      <Section variant="soft">
        <Container>
          <motion.div className="text-center" {...fadeIn}>
            <h2 className="font-display text-3xl font-medium md:text-4xl">The AI layer for modern teams</h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              Build faster without locking your product into one model, one vendor, or one workflow.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              {advantages.map((tag) => (
                <span key={tag} className="rounded-full border border-border bg-white px-4 py-2 text-sm font-medium">
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        </Container>
      </Section>

      {/* Core products */}
      <Section>
        <Container>
          <motion.div className="text-center" {...fadeIn}>
            <h2 className="font-display text-3xl font-medium md:text-4xl">
              Everything you need to build reliable AI products
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              From model access to production monitoring, NextLayer brings your entire AI stack together.
            </p>
          </motion.div>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {products.map((product, i) => {
              const Icon = product.icon;
              return (
                <motion.div key={product.id} {...fadeIn} transition={{ delay: i * 0.1 }}>
                  <Card className="group h-full">
                    <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-button border border-border bg-surface-soft">
                      <Icon className="h-5 w-5 text-brand" />
                    </div>
                    <h3 className="text-lg font-medium">{product.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{product.shortDescription}</p>
                    <div className="mt-4 rounded-button border border-border bg-surface-soft p-3">
                      <div className="h-16 rounded bg-gradient-to-r from-brand-light/50 to-transparent" />
                    </div>
                    <Link
                      href={getLocalizedPath(product.href, locale)}
                      className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-brand hover:text-brand-dark"
                    >
                      Learn more <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                    </Link>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </Container>
      </Section>

      {/* Architecture */}
      <Section variant="soft">
        <Container>
          <div className="grid items-start gap-12 lg:grid-cols-2">
            <motion.div {...fadeIn}>
              <h2 className="font-display text-3xl font-medium md:text-4xl">
                One intelligent layer across your entire stack
              </h2>
              <p className="mt-4 text-muted-foreground">
                Keep your existing tools. NextLayer connects them through a flexible and secure AI layer.
              </p>
            </motion.div>
            <motion.div {...fadeIn} transition={{ delay: 0.15 }}>
              <ArchitectureDiagram />
            </motion.div>
          </div>
        </Container>
      </Section>

      {/* Use cases */}
      <Section>
        <Container>
          <motion.div className="text-center" {...fadeIn}>
            <h2 className="font-display text-3xl font-medium md:text-4xl">Built for real business workflows</h2>
          </motion.div>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {solutions.map((sol, i) => (
              <motion.div key={sol.slug} {...fadeIn} transition={{ delay: i * 0.08 }}>
                <Card className="h-full">
                  <h3 className="font-medium">{sol.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{sol.tagline}</p>
                  <Link
                    href={getLocalizedPath(`/solutions/${sol.slug}`, locale)}
                    className="mt-4 inline-flex items-center gap-1 text-sm text-brand hover:text-brand-dark"
                  >
                    Learn more <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </Card>
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Developer code */}
      <Section variant="dark">
        <Container>
          <motion.div className="text-center" {...fadeIn}>
            <h2 className="font-display text-3xl font-medium md:text-4xl">
              Built for developers. Ready for production.
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-white/60">
              Start with a few lines of code and scale to millions of AI interactions.
            </p>
          </motion.div>
          <motion.div className="mt-10" {...fadeIn} transition={{ delay: 0.15 }}>
            <CodeBlock />
          </motion.div>
          <div className="mt-6 flex flex-wrap justify-center gap-2">
            {["REST API", "JavaScript SDK", "Python SDK", "Webhooks", "Streaming", "Structured outputs"].map((tag) => (
              <span key={tag} className="rounded-full border border-border-dark px-3 py-1 text-xs text-white/60">
                {tag}
              </span>
            ))}
          </div>
          <div className="mt-8 flex justify-center gap-3">
            <Button href={getLocalizedPath("/docs", locale)} variant="secondary">
              {t?.viewDocs ?? "View documentation"}
            </Button>
            <Button href={getLocalizedPath("/developers", locale)} className="bg-brand hover:bg-brand-dark">
              {t?.exploreApi ?? "Explore API"}
            </Button>
          </div>
          <p className="mt-4 text-center text-xs text-white/40">
            SDK package names are placeholder content pending production release.
          </p>
        </Container>
      </Section>

      {/* Security */}
      <Section>
        <Container>
          <motion.div className="text-center" {...fadeIn}>
            <h2 className="font-display text-3xl font-medium md:text-4xl">Enterprise AI without losing control</h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              Build and scale AI systems while keeping your data, permissions, and policies under control.
            </p>
          </motion.div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {securityFeatures.map((feature) => (
              <div key={feature} className="flex items-center gap-2 rounded-card border border-border p-4">
                <Check className="h-4 w-4 shrink-0 text-brand" />
                <span className="text-sm">{feature}</span>
              </div>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Badge variant="brand">Security roadmap</Badge>
            <Badge variant="muted">Compliance-ready architecture</Badge>
            <Badge variant="muted">Designed for enterprise governance</Badge>
          </div>
          <p className="mt-6 text-center text-xs text-muted">
            Security capabilities shown on this page should be updated to reflect the final production implementation and legal policies.
          </p>
        </Container>
      </Section>

      {/* Dashboard */}
      <Section variant="soft">
        <Container>
          <motion.div className="text-center" {...fadeIn}>
            <h2 className="font-display text-3xl font-medium md:text-4xl">Understand every AI interaction</h2>
          </motion.div>
          <motion.div className="mt-10 rounded-panel border border-border bg-white p-6 shadow-card md:p-8" {...fadeIn}>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
              {dashboardStats.map((stat) => (
                <div key={stat.label} className="rounded-card border border-border p-4 text-center">
                  <div className="text-2xl font-medium text-brand">{stat.value}</div>
                  <div className="mt-1 text-xs text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {["Daily requests", "Cost by model", "Agent success rate", "Response latency"].map((chart) => (
                <div key={chart} className="rounded-card border border-border p-4">
                  <div className="text-sm font-medium">{chart}</div>
                  <div className="mt-3 flex h-24 items-end gap-1">
                    {Array.from({ length: 12 }).map((_, i) => (
                      <div
                        key={i}
                        className="flex-1 rounded-t bg-brand/20"
                        style={{ height: `${30 + Math.sin(i) * 20 + 40}%` }}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <p className="mt-4 text-center text-xs text-muted">Illustrative dashboard — not real customer data.</p>
          </motion.div>
        </Container>
      </Section>

      {/* Pricing preview */}
      <Section>
        <Container>
          <motion.div className="text-center" {...fadeIn}>
            <h2 className="font-display text-3xl font-medium md:text-4xl">Start small. Scale without limits.</h2>
          </motion.div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {pricingPlans.map((plan) => (
              <Card
                key={plan.id}
                className={plan.highlighted ? "border-brand/30 ring-1 ring-brand/20" : ""}
              >
                <h3 className="text-lg font-medium">{plan.name}</h3>
                <div className="mt-2">
                  <span className="text-3xl font-medium">{plan.price}</span>
                  <span className="text-muted-foreground">{plan.period}</span>
                </div>
                <ul className="mt-6 space-y-3">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Check className="h-4 w-4 text-brand" /> {f}
                    </li>
                  ))}
                </ul>
                <Button
                  href={plan.id === "enterprise" ? getLocalizedPath("/contact", locale) : getLocalizedPath("/early-access", locale)}
                  variant={plan.ctaVariant === "primary" ? "primary" : "secondary"}
                  className="mt-6 w-full"
                >
                  {plan.cta}
                </Button>
              </Card>
            ))}
          </div>
          <p className="mt-6 text-center text-xs text-muted">
            Pricing and usage limits are placeholders and should be updated before production launch.
          </p>
        </Container>
      </Section>

      {/* Final CTA */}
      <Section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(113,87,255,0.08)_0%,_transparent_70%)]" />
        <Container className="relative text-center">
          <h2 className="font-display text-3xl font-medium md:text-4xl">Your next AI product starts here.</h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            Build agents, connect knowledge, and automate workflows with one intelligent platform.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button href={getLocalizedPath("/early-access", locale)}>
              {t?.startBuilding ?? "Start building"}
            </Button>
            <Button href={getLocalizedPath("/contact", locale)} variant="secondary">
              {t?.talkToTeam ?? "Talk to our team"}
            </Button>
          </div>
        </Container>
      </Section>
    </>
  );
}
