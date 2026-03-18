"use client";

import { useState } from "react";
import { useLang } from "@/context/LanguageContext";
import { translations } from "@/lib/i18n";
import type { Lang } from "@/lib/i18n";

const langLabels: Record<Lang, string> = { cg: "CG", en: "EN", ru: "RU" };

const navLinks = [
  { key: "home" as const, href: "#hero" },
  { key: "services" as const, href: "#services" },
  { key: "about" as const, href: "#about" },
  { key: "howItWorks" as const, href: "#how-it-works" },
  { key: "contact" as const, href: "#contact" },
];

export default function Navbar() {
  const { lang, setLang, t } = useLang();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#hero" className="text-xl font-bold tracking-tight">
            <span className="text-gradient">Lokali</span>
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.key}
                href={link.href}
                className="text-sm text-muted hover:text-foreground transition-colors"
              >
                {t(translations.nav[link.key])}
              </a>
            ))}
          </div>

          {/* Language switcher + CTA */}
          <div className="hidden md:flex items-center gap-4">
            <div className="flex items-center bg-surface rounded-lg p-1 gap-0.5">
              {(Object.keys(langLabels) as Lang[]).map((l) => (
                <button
                  key={l}
                  onClick={() => setLang(l)}
                  className={`px-3 py-1 text-xs font-medium rounded-md transition-all ${
                    lang === l
                      ? "bg-accent text-white"
                      : "text-muted hover:text-foreground"
                  }`}
                >
                  {langLabels[l]}
                </button>
              ))}
            </div>
            <a href="#contact" className="btn-cta text-sm !py-2 !px-5">
              {t(translations.hero.cta)} &rarr;
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden flex flex-col gap-1.5 p-2"
            aria-label="Toggle menu"
          >
            <span className={`w-6 h-0.5 bg-foreground transition-all ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`w-6 h-0.5 bg-foreground transition-all ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`w-6 h-0.5 bg-foreground transition-all ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-xl border-t border-border">
          <div className="px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.key}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="block text-base text-muted hover:text-foreground transition-colors"
              >
                {t(translations.nav[link.key])}
              </a>
            ))}
            <div className="flex items-center gap-2 pt-3 border-t border-border">
              {(Object.keys(langLabels) as Lang[]).map((l) => (
                <button
                  key={l}
                  onClick={() => setLang(l)}
                  className={`px-3 py-1.5 text-sm font-medium rounded-lg transition-all ${
                    lang === l
                      ? "bg-accent text-white"
                      : "text-muted hover:text-foreground bg-surface"
                  }`}
                >
                  {langLabels[l]}
                </button>
              ))}
            </div>
            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="btn-cta text-sm !py-2.5 w-full justify-center mt-2"
            >
              {t(translations.hero.cta)} &rarr;
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
