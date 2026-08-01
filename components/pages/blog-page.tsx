import Image from "next/image";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { blogPosts } from "@/content/blog";

export function BlogPage() {
  return (
    <>
      <Section className="pt-32 pb-16">
        <Container className="text-center">
          <h1 className="font-display text-4xl font-medium md:text-5xl">Blog</h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Insights on building reliable AI products.
          </p>
        </Container>
      </Section>
      <Section variant="soft">
        <Container>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post) => (
              <Card key={post.slug} className="overflow-hidden p-0">
                <div className="relative aspect-[2/1] w-full overflow-hidden border-b border-border">
                  <Image
                    src={post.image}
                    alt=""
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <div className="p-6">
                  <div className="mb-2 flex flex-wrap gap-2">
                    <Badge variant="brand">{post.category}</Badge>
                    {post.isExample && <Badge variant="muted">Example</Badge>}
                  </div>
                  <h2 className="font-medium">{post.title}</h2>
                  <p className="mt-2 text-sm text-muted-foreground">{post.excerpt}</p>
                  <div className="mt-4 flex items-center gap-3 text-xs text-muted">
                    <span>{post.date}</span>
                    <span>·</span>
                    <span>{post.readTime}</span>
                    <span>·</span>
                    <span>{post.author}</span>
                  </div>
                </div>
              </Card>
            ))}
          </div>
          <p className="mt-8 text-center text-xs text-muted">
            Blog posts are example content. Author details are placeholders.
          </p>
        </Container>
      </Section>
    </>
  );
}
