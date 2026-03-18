"use client";

import { useLang } from "@/context/LanguageContext";
import { translations } from "@/lib/i18n";
import ScrollReveal from "./ScrollReveal";

export default function Contact() {
  const { t } = useLang();
  const form = translations.contact.form;

  return (
    <section id="contact" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              {t(translations.contact.headline)}
            </h2>
            <p className="text-muted text-lg max-w-xl mx-auto">
              {t(translations.contact.subheadline)}
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Form */}
          <ScrollReveal className="lg:col-span-3">
            <form
              onSubmit={(e) => e.preventDefault()}
              className="glass-card p-8 space-y-5"
            >
              <div>
                <label className="block text-sm font-medium mb-2">{t(form.name)}</label>
                <input
                  type="text"
                  className="w-full bg-background border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-accent transition-colors"
                  placeholder={t(form.name)}
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium mb-2">{t(form.email)}</label>
                  <input
                    type="email"
                    className="w-full bg-background border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-accent transition-colors"
                    placeholder={t(form.email)}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">{t(form.phone)}</label>
                  <input
                    type="tel"
                    className="w-full bg-background border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-accent transition-colors"
                    placeholder={t(form.phone)}
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">{t(form.businessType)}</label>
                <select className="w-full bg-background border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-accent transition-colors appearance-none">
                  <option value="">{t(form.businessType)}</option>
                  {t(form.businessOptions).map((opt) => (
                    <option key={opt} value={opt}>{opt}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">{t(form.message)}</label>
                <textarea
                  rows={4}
                  className="w-full bg-background border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-accent transition-colors resize-none"
                  placeholder={t(form.message)}
                />
              </div>

              <button type="submit" className="btn-cta w-full justify-center text-base">
                {t(form.submit)} &rarr;
              </button>
            </form>
          </ScrollReveal>

          {/* Contact info */}
          <ScrollReveal delay={200} className="lg:col-span-2">
            <div className="glass-card p-8 h-full flex flex-col justify-center space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-accent/10 text-accent flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-muted mb-1">Email</p>
                  <p className="font-medium">info@lokali.me</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-accent/10 text-accent flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-muted mb-1">WhatsApp</p>
                  <p className="font-medium">+382 XX XXX XXX</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-accent/10 text-accent flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-muted mb-1">{t({ cg: "Lokacija", en: "Location", ru: "Локация" })}</p>
                  <p className="font-medium">{t({ cg: "Crna Gora", en: "Montenegro", ru: "Черногория" })}</p>
                </div>
              </div>

              <div className="pt-4 border-t border-border">
                <p className="text-sm text-muted">
                  {t({
                    cg: "Odgovaramo u roku od 2 sata.",
                    en: "We reply within 2 hours.",
                    ru: "Отвечаем в течение 2 часов.",
                  })}
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
