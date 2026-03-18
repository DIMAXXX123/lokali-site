"use client";

import { useLang } from "@/context/LanguageContext";
import { translations } from "@/lib/i18n";

export default function Footer() {
  const { t } = useLang();

  return (
    <footer className="border-t border-white/5 py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <span className="text-xl font-black text-gradient">Lokali</span>
            <span className="text-slate-600">|</span>
            <span className="text-sm text-slate-500">{t(translations.footer.copy)}</span>
          </div>

          {/* Links */}
          <div className="flex items-center gap-6 text-sm text-slate-500">
            <a href="#services" className="hover:text-white transition-colors">{t(translations.nav.services)}</a>
            <a href="#about" className="hover:text-white transition-colors">{t(translations.nav.about)}</a>
            <a href="#contact" className="hover:text-white transition-colors">{t(translations.nav.contact)}</a>
          </div>

          {/* Copyright */}
          <p className="text-sm text-slate-600">
            © {new Date().getFullYear()} Lokali
          </p>
        </div>
      </div>
    </footer>
  );
}
