"use client";

import { useLang } from "@/context/LanguageContext";
import { translations } from "@/lib/i18n";
import ScrollReveal from "./ScrollReveal";

export default function Hero() {
  const { t } = useLang();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background layers */}
      <div className="absolute inset-0 dot-grid opacity-40" />
      <div className="absolute inset-0 hero-gradient" />

      {/* Animated orbs */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-violet-600/10 blur-[120px] orb" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-blue-600/10 blur-[100px] orb-delayed" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full bg-cyan-500/8 blur-[80px] orb" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <ScrollReveal>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-sm text-slate-400 font-medium">AI-Powered Hospitality</span>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[80px] font-black leading-[1.05] tracking-tight mb-8">
            <span className="text-gradient">{t(translations.hero.headline).split("\n")[0]}</span>
            <br />
            <span className="text-white">{t(translations.hero.headline).split("\n")[1]}</span>
          </h1>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-12 leading-relaxed">
            {t(translations.hero.subheadline)}
          </p>
        </ScrollReveal>

        <ScrollReveal delay={300}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#contact" className="btn-cta text-lg px-10 py-5">
              {t(translations.hero.cta)}
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </ScrollReveal>

        {/* Trust signal */}
        <ScrollReveal delay={400}>
          <p className="mt-8 text-sm text-slate-500">
            {t({
              cg: "✦ Besplatan poziv od 15 minuta · Bez obaveza",
              en: "✦ Free 15-min call · No strings attached",
              ru: "✦ Бесплатный звонок 15 мин · Без обязательств",
            })}
          </p>
        </ScrollReveal>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0A0A0F] to-transparent" />
    </section>
  );
}
