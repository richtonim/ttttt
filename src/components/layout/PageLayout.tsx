import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export function PageLayout({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <>
      <Header />
      <main className={`flex-1 pt-16 ${className ?? ""}`}>{children}</main>
      <Footer />
    </>
  );
}
