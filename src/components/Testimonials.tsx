"use client";

import { useLang } from "@/context/LanguageContext";
import { translations } from "@/lib/i18n";
import ScrollReveal from "./ScrollReveal";

const avatarColors = [
  "from-violet-500 to-blue-500",
  "from-cyan-500 to-blue-500",
  "from-violet-500 to-pink-500",
];

const initials = ["MD", "AP", "NS"];

export default function Testimonials() {
  const { t } = useLang();
  const items = translations.testimonials.items;

  return (
    <section className="section-padding relative">
      <div className="max-w-6xl mx-auto px-6">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="text-sm font-semibold uppercase tracking-widest text-violet-400 mb-4 block">
              {t({ cg: "Svjedočanstva", en: "Testimonials", ru: "Отзывы" })}
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black">
              {t(translations.testimonials.headline)}
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-6">
          {items.map((item, i) => (
            <ScrollReveal key={i} delay={i * 150}>
              <div className="glass-card p-8 h-full flex flex-col">
                {/* Stars */}
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, j) => (
                    <svg key={j} className="w-5 h-5 text-amber-400" viewBox="0 0 24 24" fill="currentColor">
                      <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" />
                    </svg>
                  ))}
                </div>

                {/* Quote */}
                <p className="text-slate-300 leading-relaxed flex-1 mb-8 italic">
                  &ldquo;{t(item.quote)}&rdquo;
                </p>

                {/* Author */}
                <div className="flex items-center gap-3">
                  <div className={`w-11 h-11 rounded-full bg-gradient-to-br ${avatarColors[i]} flex items-center justify-center text-white text-sm font-bold`}>
                    {initials[i]}
                  </div>
                  <div>
                    <p className="text-white font-semibold text-sm">{t(item.author)}</p>
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
