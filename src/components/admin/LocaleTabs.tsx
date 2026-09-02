"use client";

import { useState, ReactNode } from "react";

type LocaleTabsProps = {
  label: string;
  en: ReactNode;
  pt: ReactNode;
};

export default function LocaleTabs({ label, en, pt }: LocaleTabsProps) {
  const [tab, setTab] = useState<"en" | "pt">("en");

  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center justify-between">
        <span className="text-sm text-text-muted">{label}</span>
        <div className="flex gap-1 rounded-sm border border-border p-0.5">
          {(["en", "pt"] as const).map((locale) => (
            <button
              key={locale}
              type="button"
              onClick={() => setTab(locale)}
              className={`rounded-sm px-2 py-1 text-xs uppercase transition-colors ${
                tab === locale ? "bg-text text-bg" : "text-text-muted hover:text-text"
              }`}
            >
              {locale}
            </button>
          ))}
        </div>
      </div>
      <div className={tab === "en" ? "block" : "hidden"}>{en}</div>
      <div className={tab === "pt" ? "block" : "hidden"}>{pt}</div>
    </div>
  );
}
