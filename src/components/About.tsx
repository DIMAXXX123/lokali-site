"use client";

import { useLang } from "@/context/LanguageContext";
import { translations } from "@/lib/i18n";
import ScrollReveal from "./ScrollReveal";

const reasonIcons = [
  // Home
  <svg key="home" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
  </svg>,
  // Zap
  <svg key="zap" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
  </svg>,
  // Coins
  <svg key="coins" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
  </svg>,
  // Handshake
  <svg key="handshake" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
  </svg>,
];

export default function About() {
  const { t } = useLang();

  return (
    <section id="about" className="py-24 px-4 bg-surface/50">
      <div className="max-w-5xl mx-auto">
        {/* Main about */}
        <ScrollReveal>
          <div className="text-center mb-16">
            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-accent to-purple-500 mx-auto mb-8 flex items-center justify-center text-3xl font-bold">
              T&D
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 max-w-2xl mx-auto">
              {t(translations.about.headline)}
            </h2>
            <div className="text-muted text-base sm:text-lg leading-relaxed max-w-2xl mx-auto whitespace-pre-line">
              {t(translations.about.text)}
            </div>
          </div>
        </ScrollReveal>

        {/* Why us */}
        <ScrollReveal>
          <h3 className="text-2xl sm:text-3xl font-bold text-center mb-10">
            {t(translations.about.whyUs.headline)}
          </h3>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {translations.about.whyUs.reasons.map((reason, i) => (
            <ScrollReveal key={i} delay={i * 100}>
              <div className="glass-card p-6 flex gap-4 transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-accent/10 text-accent flex items-center justify-center shrink-0">
                  {reasonIcons[i]}
                </div>
                <div>
                  <h4 className="font-semibold mb-1">{t(reason.title)}</h4>
                  <p className="text-sm text-muted">{t(reason.description)}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
