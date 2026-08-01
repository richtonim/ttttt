export type Locale = "en";
export const defaultLocale: Locale = "en";
export const locales = ["en"] as const;

export function getLocalizedPath(path: string, _locale?: string): string {
  return path;
}
