#!/bin/bash
# Generate English route pages

create_page() {
  local path="$1"
  local component="$2"
  local title="$3"
  local description="$4"
  local dir="/workspace/app/$path"
  mkdir -p "$dir"
  cat > "$dir/page.tsx" << EOF
import { SiteLayout } from "@/components/layout/site-layout";
import { ${component} } from "@/components/pages/${component// /}";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "${title}",
  description: "${description}",
  path: "/${path}",
});

export default function Page() {
  return (
    <SiteLayout locale="en">
      <${component} locale="en" />
    </SiteLayout>
  );
}
EOF
}

# Fix component import paths
create_simple_page() {
  local path="$1"
  local import_path="$2"
  local component="$3"
  local title="$4"
  local description="$5"
  local extra_props="${6:-}"
  local dir="/workspace/app/$path"
  mkdir -p "$dir"
  cat > "$dir/page.tsx" << EOF
import { SiteLayout } from "@/components/layout/site-layout";
import { ${component} } from "@/components/pages/${import_path}";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "${title}",
  description: "${description}",
  path: "/${path}",
});

export default function Page() {
  return (
    <SiteLayout locale="en">
      <${component} ${extra_props} />
    </SiteLayout>
  );
}
EOF
}

create_simple_page "platform" "platform-page" "PlatformPage" "AI Platform" "Build, connect, operate, and scale AI applications through one flexible platform."
create_simple_page "developers" "developers-page" "DevelopersPage" "Developers" "Build AI products without rebuilding AI infrastructure."
create_simple_page "pricing" "pricing-page" "PricingPage" "Pricing" "Simple pricing for every stage of your AI journey."
create_simple_page "integrations" "integrations-page" "IntegrationsPage" "Integrations" "Connect NextLayer with your AI models, data sources, and business tools."
create_simple_page "templates" "templates-page" "TemplatesPage" "Templates" "Start faster with pre-built agent and workflow templates."
create_simple_page "blog" "blog-page" "BlogPage" "Blog" "Insights on building reliable AI products."
create_simple_page "about" "about-page" "AboutPage" "About" "Building the intelligent layer for modern business."
create_simple_page "contact" "contact-page" "ContactPage" "Contact" "Let's build the next layer together."
create_simple_page "security" "security-page" "SecurityPage" "Security" "Enterprise AI without compromising on security, privacy, or control."
create_simple_page "careers" "careers-page" "CareersPage" "Careers" "Help us build the intelligent layer for modern business."
create_simple_page "docs" "docs-page" "DocsPage" "Documentation" "Guides and references for building with NextLayer."
create_simple_page "early-access" "early-access-page" "EarlyAccessPage" "Early Access" "Join the NextLayer early access waitlist."
create_simple_page "sign-in" "sign-in-page" "SignInPage" "Sign In" "Sign in to your NextLayer account."
create_simple_page "book-demo" "book-demo-page" "BookDemoPage" "Book a Demo" "See how NextLayer can help your team."

# Solutions list
create_simple_page "solutions" "solutions-page" "SolutionsListPage" "Solutions" "AI solutions built around real work."

# Product pages
for slug in agent-studio model-gateway knowledge-layer workflows observability; do
  title=$(echo "$slug" | sed 's/-/ /g' | awk '{for(i=1;i<=NF;i++) $i=toupper(substr($i,1,1)) substr($i,2)}1')
  mkdir -p "/workspace/app/platform/$slug"
  cat > "/workspace/app/platform/$slug/page.tsx" << EOF
import { SiteLayout } from "@/components/layout/site-layout";
import { ProductDetailPage } from "@/components/pages/product-detail-page";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "${title}",
  description: "Learn about NextLayer ${title} — build reliable AI products.",
  path: "/platform/${slug}",
});

export default function Page() {
  return (
    <SiteLayout locale="en">
      <ProductDetailPage slug="${slug}" locale="en" />
    </SiteLayout>
  );
}
EOF
done

# Solution detail pages
for slug in customer-support knowledge-assistant document-intelligence sales-automation data-analysis developer-platform; do
  title=$(echo "$slug" | sed 's/-/ /g' | awk '{for(i=1;i<=NF;i++) $i=toupper(substr($i,1,1)) substr($i,2)}1')
  mkdir -p "/workspace/app/solutions/$slug"
  cat > "/workspace/app/solutions/$slug/page.tsx" << EOF
import { SiteLayout } from "@/components/layout/site-layout";
import { SolutionDetailPage } from "@/components/pages/solutions-page";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "${title}",
  description: "NextLayer solution for ${title}.",
  path: "/solutions/${slug}",
});

export default function Page() {
  return (
    <SiteLayout locale="en">
      <SolutionDetailPage slug="${slug}" locale="en" />
    </SiteLayout>
  );
}
EOF
done

echo "Pages generated"
