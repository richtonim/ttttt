import Link from "next/link";
import { PageLayout } from "@/components/layout/PageLayout";
import { Button } from "@/components/layout/Header";
import { Container, Section } from "@/components/ui/Section";

export default function NotFound() {
  return (
    <PageLayout>
      <Section className="min-h-[60vh] flex items-center">
        <Container className="text-center">
          <p className="text-sm font-mono text-accent mb-4">404</p>
          <h1 className="text-4xl md:text-5xl font-medium tracking-tight">Page not found</h1>
          <p className="mt-4 text-muted max-w-md mx-auto">
            The page you&apos;re looking for doesn&apos;t exist or has been moved.
          </p>
          <div className="mt-8">
            <Button href="/">Return home</Button>
          </div>
        </Container>
      </Section>
    </PageLayout>
  );
}
