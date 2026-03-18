"use client";

import { useState } from "react";
import { useLang } from "@/context/LanguageContext";
import { translations } from "@/lib/i18n";
import ScrollReveal from "./ScrollReveal";

// Add a 6th FAQ item
const extraFaq = {
  question: {
    cg: "Šta ako nisam zadovoljan rezultatima?",
    en: "What if I'm not happy with the results?",
    ru: "Что если меня не устроит результат?",
  },
  answer: {
    cg: "Pratimo rezultate zajedno i prilagođavamo sistem dok ne budete potpuno zadovoljni. Ako i dalje ne odgovara — možete otkazati bez penala.",
    en: "We monitor results together and adjust the system until you're fully satisfied. If it still doesn't work — you can cancel without penalties.",
    ru: "Мы отслеживаем результаты вместе и настраиваем систему, пока вы не будете полностью довольны. Если всё равно не подходит — можете отменить без штрафов.",
  },
};

export default function FAQ() {
  const { t } = useLang();
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const items = [...translations.faq.items, extraFaq];

  return (
    <section className="section-padding relative">
      <div className="max-w-3xl mx-auto px-6">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="text-sm font-semibold uppercase tracking-widest text-violet-400 mb-4 block">FAQ</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black">
              {t(translations.faq.headline)}
            </h2>
          </div>
        </ScrollReveal>

        <div className="space-y-4">
          {items.map((item, i) => (
            <ScrollReveal key={i} delay={i * 80}>
              <div className="glass-card overflow-hidden">
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full px-8 py-6 flex items-center justify-between text-left group"
                >
                  <span className="text-base md:text-lg font-semibold text-white pr-4 group-hover:text-violet-300 transition-colors">
                    {t(item.question)}
                  </span>
                  <span
                    className={`shrink-0 w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center transition-all duration-300 ${
                      openIndex === i ? "rotate-45 bg-violet-600/20 border-violet-500/30" : ""
                    }`}
                  >
                    <svg className="w-4 h-4 text-violet-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M12 5v14M5 12h14" />
                    </svg>
                  </span>
                </button>
                <div className={`faq-answer ${openIndex === i ? "open" : ""}`}>
                  <div className="px-8 pb-6">
                    <p className="text-slate-400 leading-relaxed">{t(item.answer)}</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
