import type { Locale } from "@/lib/i18n/locales";
import { getDictionary } from "@/lib/i18n";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { SkipLink } from "@/components/layout/skip-link";

interface SiteLayoutProps {
  children: React.ReactNode;
  locale?: Locale;
}

export function SiteLayout({ children, locale = "en" }: SiteLayoutProps) {
  const dict = getDictionary(locale);

  return (
    <>
      <SkipLink />
      <Header locale={locale} dict={dict} />
      <main id="main-content">{children}</main>
      <Footer locale={locale} dict={dict} />
    </>
  );
}
