"use client";

import { useLang } from "@/context/LanguageContext";
import { translations } from "@/lib/i18n";
import ScrollReveal from "./ScrollReveal";

export default function CTABanner() {
  const { t } = useLang();

  return (
    <section className="py-20 px-4">
      <ScrollReveal>
        <div className="max-w-4xl mx-auto text-center bg-gradient-to-r from-accent/10 via-purple-500/10 to-accent/10 rounded-2xl p-12 border border-accent/20">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
            {t(translations.ctaBanner.headline)}
          </h2>
          <p className="text-muted text-lg mb-8 max-w-xl mx-auto">
            {t(translations.ctaBanner.subheadline)}
          </p>
          <a href="#contact" className="btn-cta text-lg">
            {t(translations.ctaBanner.cta)} &rarr;
          </a>
        </div>
      </ScrollReveal>
    </section>
  );
}
