"use client";

import { useLang } from "@/context/LanguageContext";
import { translations } from "@/lib/i18n";
import ScrollReveal from "./ScrollReveal";

const icons: Record<string, React.ReactNode> = {
  chat: (
    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
    </svg>
  ),
  qr: (
    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="8" height="8" rx="1" />
      <rect x="14" y="2" width="8" height="8" rx="1" />
      <rect x="2" y="14" width="8" height="8" rx="1" />
      <path d="M14 14h3v3h-3zM20 14v3h-3M14 20h3M20 20h0" />
    </svg>
  ),
  message: (
    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  ),
  star: (
    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" />
    </svg>
  ),
};

export default function Services() {
  const { lang, t } = useLang();
  const pkgs = translations.services.packages;
  const combo = translations.services.combo;

  return (
    <section id="services" className="section-padding relative">
      <div className="absolute inset-0 dot-grid opacity-20" />
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="text-sm font-semibold uppercase tracking-widest text-violet-400 mb-4 block">
              {t({ cg: "Usluge", en: "Services", ru: "Услуги" })}
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black">
              {t({
                cg: "Izaberite vaš ",
                en: "Choose your ",
                ru: "Выберите ваш ",
              })}
              <span className="text-gradient">
                {t({ cg: "paket", en: "package", ru: "пакет" })}
              </span>
            </h2>
          </div>
        </ScrollReveal>

        {/* Package Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {pkgs.map((pkg, i) => (
            <ScrollReveal key={i} delay={i * 100}>
              <div className="glass-card p-8 h-full flex flex-col group">
                {/* Icon */}
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-violet-600/20 to-blue-600/20 border border-violet-500/20 flex items-center justify-center text-violet-400 mb-6 group-hover:border-violet-400/40 transition-colors">
                  {icons[pkg.icon]}
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-3">
                  {t(pkg.name)}
                </h3>

                {/* Description */}
                <p className="text-sm text-slate-400 mb-6 leading-relaxed">
                  {t(pkg.description)}
                </p>

                {/* Features */}
                <ul className="space-y-2.5 mb-8 flex-1">
                  {(pkg.features[lang] as readonly string[]).map((feat: string, j: number) => (
                    <li key={j} className="flex items-start gap-2.5 text-sm text-slate-300">
                      <svg className="w-4 h-4 text-cyan-400 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      {feat}
                    </li>
                  ))}
                </ul>

                {/* Price */}
                <div className="mb-6">
                  <span className="text-3xl font-black text-white">€{pkg.price}</span>
                  <span className="text-slate-500 text-sm">/{t({ cg: "mj", en: "mo", ru: "мес" })}</span>
                </div>

                {/* CTA */}
                <a href="#contact" className="btn-cta-outline text-sm justify-center w-full">
                  {t(pkg.cta)}
                </a>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Combo Card */}
        <ScrollReveal delay={500}>
          <div className="combo-glow glass-card p-10 md:p-14 rounded-3xl max-w-3xl mx-auto text-center relative overflow-hidden">
            {/* Gold shimmer background */}
            <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-transparent" />
            <div className="relative z-10">
              <span className="inline-block px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-bold uppercase tracking-widest mb-6">
                {t({ cg: "Najpopularniji", en: "Most Popular", ru: "Самый популярный" })}
              </span>
              <h3 className="text-3xl md:text-4xl font-black mb-4 text-gradient-gold">
                {t(combo.name)}
              </h3>
              <p className="text-slate-400 mb-8 max-w-lg mx-auto leading-relaxed">
                {t(combo.description)}
              </p>
              <div className="flex items-center justify-center gap-4 mb-8">
                <span className="text-slate-500 line-through text-2xl">€{combo.oldPrice}</span>
                <span className="text-5xl font-black text-white">€{combo.price}</span>
                <span className="text-slate-500">/{t({ cg: "mj", en: "mo", ru: "мес" })}</span>
              </div>
              <a href="#contact" className="btn-cta text-lg px-12 py-5 inline-flex">
                {t(combo.cta)}
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
