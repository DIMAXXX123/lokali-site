"use client";

import { useLang } from "@/context/LanguageContext";
import { translations } from "@/lib/i18n";

export default function Footer() {
  const { t } = useLang();

  return (
    <footer className="border-t border-border py-10 px-4">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <span className="text-lg font-bold text-gradient">Lokali</span>
          <span className="text-sm text-muted">&copy; 2026 {t(translations.footer.copy)}</span>
        </div>
        <div className="flex items-center gap-4 text-sm text-muted">
          <span>info@lokali.me</span>
          <span>&middot;</span>
          <span>+382 XX XXX XXX</span>
        </div>
      </div>
    </footer>
  );
}
