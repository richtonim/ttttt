import en from "@/content/i18n/en.json";

export type Dictionary = typeof en;

export function getDictionary(): Dictionary {
  return en;
}
