"use client";

import { useLang } from "@/context/LanguageContext";
import { translations } from "@/lib/i18n";
import ScrollReveal from "./ScrollReveal";

const whyUsIcons = [
  <svg key="home" className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
    <polyline points="9,22 9,12 15,12 15,22" />
  </svg>,
  <svg key="zap" className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="13,2 3,14 12,14 11,22 21,10 12,10" />
  </svg>,
  <svg key="coins" className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <path d="M9.09 9a3 3 0 015.83 1c0 2-3 3-3 3M12 17h.01" />
  </svg>,
  <svg key="handshake" className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
  </svg>,
];

export default function About() {
  const { t } = useLang();
  const about = translations.about;

  return (
    <section id="about" className="section-padding relative">
      <div className="absolute inset-0 dot-grid opacity-15" />
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="text-sm font-semibold uppercase tracking-widest text-cyan-400 mb-4 block">
              {t({ cg: "O nama", en: "About us", ru: "О нас" })}
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black max-w-3xl mx-auto leading-tight">
              {t(about.headline)}
            </h2>
          </div>
        </ScrollReveal>

        {/* Two column layout */}
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 mb-20">
          {/* Left: Avatar / Visual */}
          <ScrollReveal delay={100}>
            <div className="glass-card p-10 flex flex-col items-center justify-center text-center">
              <div className="flex gap-6 mb-8">
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-violet-500 to-blue-500 flex items-center justify-center text-white text-2xl font-black">
                  D
                </div>
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center text-white text-2xl font-black">
                  T
                </div>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Dima & Tima</h3>
              <p className="text-slate-400">
                {t({
                  cg: "Bar, Crna Gora 🇲🇪",
                  en: "Bar, Montenegro 🇲🇪",
                  ru: "Бар, Черногория 🇲🇪",
                })}
              </p>
              <div className="mt-6 flex items-center gap-2 text-sm text-violet-400">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                {t({
                  cg: "Dostupni za nove projekte",
                  en: "Available for new projects",
                  ru: "Доступны для новых проектов",
                })}
              </div>
            </div>
          </ScrollReveal>

          {/* Right: Text */}
          <ScrollReveal delay={200}>
            <div className="flex flex-col justify-center">
              {t(about.text).split("\n\n").map((paragraph, i) => (
                <p key={i} className="text-slate-300 leading-relaxed mb-4 last:mb-0">
                  {paragraph}
                </p>
              ))}
            </div>
          </ScrollReveal>
        </div>

        {/* Why Us */}
        <ScrollReveal>
          <h3 className="text-3xl md:text-4xl font-black text-center mb-12">
            {t(about.whyUs.headline)}
          </h3>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {about.whyUs.reasons.map((reason, i) => (
            <ScrollReveal key={i} delay={i * 100}>
              <div className="glass-card p-6 text-center h-full">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-violet-600/20 to-blue-600/20 border border-violet-500/20 flex items-center justify-center text-violet-400 mx-auto mb-4">
                  {whyUsIcons[i]}
                </div>
                <h4 className="text-lg font-bold text-white mb-2">{t(reason.title)}</h4>
                <p className="text-sm text-slate-400 leading-relaxed">{t(reason.description)}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
