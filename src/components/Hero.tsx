"use client";

import { useLang } from "@/context/LanguageContext";
import { translations } from "@/lib/i18n";
import ScrollReveal from "./ScrollReveal";

export default function Hero() {
  const { t } = useLang();

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center hero-gradient dot-grid pt-16"
    >
      {/* Decorative blurs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        <ScrollReveal>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight whitespace-pre-line">
            {t(translations.hero.headline)}
          </h1>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <p className="mt-6 text-lg sm:text-xl text-muted max-w-2xl mx-auto leading-relaxed">
            {t(translations.hero.subheadline)}
          </p>
        </ScrollReveal>

        <ScrollReveal delay={400}>
          <div className="mt-10">
            <a href="#contact" className="btn-cta text-lg">
              {t(translations.hero.cta)} &rarr;
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
