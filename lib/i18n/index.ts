import type { Locale } from "./locales";
import en from "@/content/i18n/en.json";
import zh from "@/content/i18n/zh.json";
import es from "@/content/i18n/es.json";
import pt from "@/content/i18n/pt.json";

const dictionaries = { en, zh, es, pt };

export type Dictionary = typeof en;

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale] ?? dictionaries.en;
}
