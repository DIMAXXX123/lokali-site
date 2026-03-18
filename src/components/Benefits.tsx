"use client";

import { useLang } from "@/context/LanguageContext";
import { translations } from "@/lib/i18n";
import ScrollReveal from "./ScrollReveal";

const icons = {
  clock: (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
  chart: (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
    </svg>
  ),
  globe: (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
    </svg>
  ),
  wrench: (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17l-5.652 3.126a.75.75 0 01-1.064-.814l1.093-6.055a.75.75 0 00-.22-.665L.822 6.252a.75.75 0 01.427-1.282l6.14-.78a.75.75 0 00.575-.414L10.56.37a.75.75 0 011.38 0l2.595 5.406a.75.75 0 00.575.414l6.14.78a.75.75 0 01.427 1.282l-4.756 4.51a.75.75 0 00-.22.665l1.093 6.055a.75.75 0 01-1.064.814l-5.652-3.126a.75.75 0 00-.712 0z" />
    </svg>
  ),
};

const iconKeys: (keyof typeof icons)[] = ["clock", "chart", "globe", "wrench"];

export default function Benefits() {
  const { t } = useLang();

  return (
    <section className="py-24 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {translations.benefits.map((benefit, i) => (
          <ScrollReveal key={i} delay={i * 100}>
            <div className="glass-card p-6 h-full transition-all duration-300">
              <div className="w-14 h-14 rounded-xl bg-accent/10 text-accent flex items-center justify-center mb-4">
                {icons[iconKeys[i]]}
              </div>
              <h3 className="text-lg font-semibold mb-2">{t(benefit.title)}</h3>
              <p className="text-sm text-muted leading-relaxed">{t(benefit.description)}</p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
