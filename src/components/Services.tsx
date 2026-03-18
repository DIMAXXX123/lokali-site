"use client";

import { useLang } from "@/context/LanguageContext";
import { translations } from "@/lib/i18n";
import ScrollReveal from "./ScrollReveal";

const packageIcons = [
  // Chat
  <svg key="chat" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
  </svg>,
  // QR
  <svg key="qr" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 013.75 9.375v-4.5zm0 9.75c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5a1.125 1.125 0 01-1.125-1.125v-4.5zm9.75-9.75c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5a1.125 1.125 0 01-1.125-1.125v-4.5z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 13.5h3v3h-3v-3zm3 3h3v3h-3v-3zm-3 3h3v3h-3v-3z" />
  </svg>,
  // Message
  <svg key="msg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
  </svg>,
  // Star
  <svg key="star" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
  </svg>,
];

export default function Services() {
  const { t } = useLang();
  const { packages, combo } = translations.services;

  return (
    <section id="services" className="py-24 px-4 bg-surface/50">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-16">
            {t({ cg: "Naše usluge", en: "Our services", ru: "Наши услуги" })}
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {packages.map((pkg, i) => (
            <ScrollReveal key={i} delay={i * 100}>
              <div className="glass-card p-8 h-full flex flex-col transition-all duration-300">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-14 h-14 rounded-xl bg-accent/10 text-accent flex items-center justify-center shrink-0">
                    {packageIcons[i]}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">{t(pkg.name)}</h3>
                    <p className="text-muted text-sm mt-1">{t(pkg.description)}</p>
                  </div>
                </div>

                <ul className="space-y-2 mt-4 flex-1">
                  {t(pkg.features).map((feature, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm text-muted">
                      <svg className="w-4 h-4 text-accent shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="mt-6 flex items-center justify-between">
                  <div className="text-2xl font-bold">
                    <span className="text-muted text-sm font-normal">{t({ cg: "od", en: "from", ru: "от" })}</span>{" "}
                    &euro;{pkg.price}
                    <span className="text-muted text-sm font-normal">/{t({ cg: "mj", en: "mo", ru: "мес" })}</span>
                  </div>
                  <a href="#contact" className="btn-cta-outline text-sm">
                    {t(pkg.cta)} &rarr;
                  </a>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Combo package */}
        <ScrollReveal>
          <div className="glass-card combo-glow p-8 md:p-12 text-center max-w-3xl mx-auto">
            <div className="inline-block px-4 py-1 rounded-full bg-gold/10 text-gold text-sm font-semibold mb-4">
              {t({ cg: "Uštedite 16%", en: "Save 16%", ru: "Скидка 16%" })}
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold mb-3">{t(combo.name)}</h3>
            <p className="text-muted max-w-lg mx-auto mb-6">{t(combo.description)}</p>
            <div className="flex items-center justify-center gap-3 mb-6">
              <span className="text-3xl font-bold">&euro;{combo.price}<span className="text-muted text-base font-normal">/{t({ cg: "mj", en: "mo", ru: "мес" })}</span></span>
              <span className="text-muted line-through text-lg">&euro;{combo.oldPrice}</span>
            </div>
            <a href="#contact" className="btn-cta text-lg">
              {t(combo.cta)} &rarr;
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
