"use client";

import { useLang } from "@/context/LanguageContext";
import { translations } from "@/lib/i18n";
import ScrollReveal from "./ScrollReveal";

const stepIcons = [
  <svg key="phone" className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
  </svg>,
  <svg key="search" className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="8" />
    <path d="M21 21l-4.35-4.35" />
  </svg>,
  <svg key="gear" className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-2 2 2 2 0 01-2-2v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 01-2-2 2 2 0 012-2h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 012.83 0l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 012-2 2 2 0 012 2v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 0 2 2 0 010 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 012 2 2 2 0 01-2 2h-.09a1.65 1.65 0 00-1.51 1z" />
  </svg>,
  <svg key="rocket" className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 00-2.91-.09z" />
    <path d="M12 15l-3-3a22 22 0 012-3.95A12.88 12.88 0 0122 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 01-4 2z" />
    <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
  </svg>,
];

const shortLabels = [
  { cg: "Kontakt", en: "Contact", ru: "Контакт" },
  { cg: "Analiza", en: "Analysis", ru: "Анализ" },
  { cg: "Setup", en: "Setup", ru: "Настройка" },
  { cg: "Podrška", en: "Support", ru: "Поддержка" },
];

export default function HowItWorks() {
  const { t } = useLang();
  const steps = translations.howItWorks.steps;

  return (
    <section id="how-it-works" className="section-padding relative">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <ScrollReveal>
          <div className="text-center mb-20">
            <span className="text-sm font-semibold uppercase tracking-widest text-cyan-400 mb-4 block">
              {t({ cg: "Proces", en: "Process", ru: "Процесс" })}
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black">
              {t(translations.howItWorks.headline)}
            </h2>
            <p className="mt-4 text-lg text-slate-400 max-w-xl mx-auto">
              {t(translations.howItWorks.subheadline)}
            </p>
          </div>
        </ScrollReveal>

        {/* Steps */}
        <div className="relative">
          {/* Vertical connecting line (desktop) */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2">
            <div className="w-full h-full step-line opacity-30" />
          </div>

          <div className="space-y-16 md:space-y-24">
            {steps.map((step, i) => (
              <ScrollReveal key={i} delay={i * 150}>
                <div className={`flex flex-col md:flex-row items-center gap-8 md:gap-16 ${i % 2 === 1 ? "md:flex-row-reverse" : ""}`}>
                  {/* Content side */}
                  <div className="flex-1 text-center md:text-left">
                    <span className="text-sm font-bold text-violet-400 uppercase tracking-widest mb-2 block">
                      {t(shortLabels[i])} 0{i + 1}
                    </span>
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
                      {t(step.title)}
                    </h3>
                    <p className="text-slate-400 leading-relaxed max-w-md">
                      {t(step.description)}
                    </p>
                  </div>

                  {/* Icon circle (center) */}
                  <div className="relative z-10 w-20 h-20 rounded-full bg-gradient-to-br from-violet-600/20 to-blue-600/20 border border-violet-500/30 flex items-center justify-center text-violet-400 shrink-0 group-hover:scale-110 transition-transform">
                    <div className="absolute inset-0 rounded-full bg-[#0A0A0F]" />
                    <div className="absolute inset-[2px] rounded-full bg-gradient-to-br from-violet-600/10 to-blue-600/10 border border-violet-500/20 flex items-center justify-center">
                      {stepIcons[i]}
                    </div>
                  </div>

                  {/* Spacer for alignment */}
                  <div className="flex-1 hidden md:block" />
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
