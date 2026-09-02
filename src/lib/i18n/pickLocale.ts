export function pickLocale(locale: string, en: string, pt: string): string {
  return locale === "pt" ? pt : en;
}
