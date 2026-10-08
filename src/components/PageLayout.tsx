import type { ReactNode } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

type PageLayoutProps = {
  children: ReactNode;
  className?: string;
};

export function PageLayout({ children, className = "" }: PageLayoutProps) {
  return (
    <>
      <Header />
      <main className={`pt-20 lg:pt-24 min-h-screen ${className}`}>{children}</main>
      <Footer />
    </>
  );
}
