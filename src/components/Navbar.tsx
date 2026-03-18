"use client";

import { useState } from "react";
import { useLang } from "@/context/LanguageContext";
import { translations } from "@/lib/i18n";
import type { Lang } from "@/lib/i18n";

const langs: { code: Lang; label: string }[] = [
  { code: "cg", label: "CG" },
  { code: "en", label: "EN" },
  { code: "ru", label: "RU" },
];

const navLinks = [
  { key: "services" as const, href: "#services" },
  { key: "howItWorks" as const, href: "#how-it-works" },
  { key: "about" as const, href: "#about" },
  { key: "contact" as const, href: "#contact" },
];

export default function Navbar() {
  const { lang, setLang, t } = useLang();
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 nav-glass">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="text-2xl font-black tracking-tight">
          <span className="text-gradient">Lokali</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.key}
              href={link.href}
              className="text-sm font-medium text-slate-400 hover:text-white transition-colors duration-300"
            >
              {t(translations.nav[link.key])}
            </a>
          ))}
        </div>

        {/* Language + CTA */}
        <div className="hidden md:flex items-center gap-4">
          <div className="flex items-center gap-1 bg-white/5 rounded-full p-1">
            {langs.map((l) => (
              <button
                key={l.code}
                onClick={() => setLang(l.code)}
                className={`px-3 py-1.5 text-xs font-semibold rounded-full transition-all duration-300 ${
                  lang === l.code
                    ? "bg-gradient-to-r from-violet-600 to-blue-600 text-white shadow-lg shadow-violet-500/20"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                {l.label}
              </button>
            ))}
          </div>
          <a href="#contact" className="btn-cta text-sm !px-6 !py-2.5">
            {t(translations.hero.cta)}
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden flex flex-col gap-1.5 p-2"
          aria-label="Menu"
        >
          <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${open ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${open ? "opacity-0" : ""}`} />
          <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${open ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ${
          open ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-6 pb-6 space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.key}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block text-base font-medium text-slate-300 hover:text-white transition-colors"
            >
              {t(translations.nav[link.key])}
            </a>
          ))}
          <div className="flex items-center gap-2 pt-2">
            {langs.map((l) => (
              <button
                key={l.code}
                onClick={() => { setLang(l.code); setOpen(false); }}
                className={`px-4 py-2 text-sm font-semibold rounded-full transition-all ${
                  lang === l.code
                    ? "bg-gradient-to-r from-violet-600 to-blue-600 text-white"
                    : "text-slate-400 bg-white/5"
                }`}
              >
                {l.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
