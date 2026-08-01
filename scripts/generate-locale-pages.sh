#!/bin/bash
# Generate locale route pages for zh, es, pt

LOCALES=("zh" "es" "pt")

ROUTES=(
  "page.tsx:home-page:HomePage"
  "platform/page.tsx:platform-page:PlatformPage"
  "developers/page.tsx:developers-page:DevelopersPage"
  "pricing/page.tsx:pricing-page:PricingPage"
  "integrations/page.tsx:integrations-page:IntegrationsPage"
  "templates/page.tsx:templates-page:TemplatesPage"
  "blog/page.tsx:blog-page:BlogPage"
  "about/page.tsx:about-page:AboutPage"
  "contact/page.tsx:contact-page:ContactPage"
  "security/page.tsx:security-page:SecurityPage"
  "careers/page.tsx:careers-page:CareersPage"
  "docs/page.tsx:docs-page:DocsPage"
  "early-access/page.tsx:early-access-page:EarlyAccessPage"
  "sign-in/page.tsx:sign-in-page:SignInPage"
  "book-demo/page.tsx:book-demo-page:BookDemoPage"
  "solutions/page.tsx:solutions-page:SolutionsListPage"
  "privacy/page.tsx:legal-page:LegalPage"
)

for locale in "${LOCALES[@]}"; do
  # Home page
  mkdir -p "/workspace/app/$locale"
  cat > "/workspace/app/$locale/page.tsx" << EOF
import { SiteLayout } from "@/components/layout/site-layout";
import { HomePage } from "@/components/pages/home-page";
import { getDictionary } from "@/lib/i18n";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "NextLayer — AI Agents, Knowledge and Workflow Infrastructure",
  description: "Build AI agents, connect company knowledge, automate workflows, and manage multiple AI models through one secure platform.",
  path: "/",
  locale: "${locale}",
});

export default function Page() {
  const dict = getDictionary("${locale}");
  return (
    <SiteLayout locale="${locale}">
      <HomePage locale="${locale}" dict={dict} />
    </SiteLayout>
  );
}
EOF

  # Other pages
  for route_def in "${ROUTES[@]}"; do
    IFS=':' read -r route_file import_file component <<< "$route_def"
    [ "$route_file" = "page.tsx" ] && continue
    
    dir="/workspace/app/$locale/$(dirname "$route_file")"
    mkdir -p "$dir"
    
    slug=$(basename "$(dirname "$route_file")")
    path="/$slug"
    [ "$slug" = "." ] && path="/$locale"
    
    cat > "$dir/page.tsx" << EOF
import { SiteLayout } from "@/components/layout/site-layout";
import { ${component} } from "@/components/pages/${import_file}";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "${component}",
  description: "NextLayer — The intelligent layer for modern business.",
  path: "${path}",
  locale: "${locale}",
});

export default function Page() {
  return (
    <SiteLayout locale="${locale}">
      <${component} locale="${locale}" />
    </SiteLayout>
  );
}
EOF
  done

  # Product pages
  for slug in agent-studio model-gateway knowledge-layer workflows observability; do
    mkdir -p "/workspace/app/$locale/platform/$slug"
    cat > "/workspace/app/$locale/platform/$slug/page.tsx" << EOF
import { SiteLayout } from "@/components/layout/site-layout";
import { ProductDetailPage } from "@/components/pages/product-detail-page";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Platform",
  description: "NextLayer platform module.",
  path: "/platform/${slug}",
  locale: "${locale}",
});

export default function Page() {
  return (
    <SiteLayout locale="${locale}">
      <ProductDetailPage slug="${slug}" locale="${locale}" />
    </SiteLayout>
  );
}
EOF
  done

  # Solution pages
  for slug in customer-support knowledge-assistant document-intelligence sales-automation data-analysis developer-platform; do
    mkdir -p "/workspace/app/$locale/solutions/$slug"
    cat > "/workspace/app/$locale/solutions/$slug/page.tsx" << EOF
import { SiteLayout } from "@/components/layout/site-layout";
import { SolutionDetailPage } from "@/components/pages/solutions-page";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Solutions",
  description: "NextLayer AI solutions.",
  path: "/solutions/${slug}",
  locale: "${locale}",
});

export default function Page() {
  return (
    <SiteLayout locale="${locale}">
      <SolutionDetailPage slug="${slug}" locale="${locale}" />
    </SiteLayout>
  );
}
EOF
  done

  # Platform overview
  mkdir -p "/workspace/app/$locale/platform"
  cat > "/workspace/app/$locale/platform/page.tsx" << EOF
import { SiteLayout } from "@/components/layout/site-layout";
import { PlatformPage } from "@/components/pages/platform-page";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "AI Platform",
  description: "Build, connect, operate, and scale AI applications.",
  path: "/platform",
  locale: "${locale}",
});

export default function Page() {
  return (
    <SiteLayout locale="${locale}">
      <PlatformPage locale="${locale}" />
    </SiteLayout>
  );
}
EOF

done

echo "Locale pages generated"
