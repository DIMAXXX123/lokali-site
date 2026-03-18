"use client";

import { createContext, useContext, useState, useCallback, type ReactNode } from "react";
import type { Lang } from "@/lib/i18n";

type Translatable = { readonly [K in Lang]: unknown };

type LanguageContextType = {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: <T extends Translatable>(obj: T) => T[Lang];
};

const LanguageContext = createContext<LanguageContextType | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("en");

  const t = useCallback(
    <T extends Translatable>(obj: T): T[Lang] => obj[lang],
    [lang]
  );

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLang() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLang must be used within LanguageProvider");
  return ctx;
}
