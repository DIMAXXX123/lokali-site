"use client";

import { useLang } from "@/context/LanguageContext";
import { translations } from "@/lib/i18n";
import ScrollReveal from "./ScrollReveal";

export default function Contact() {
  const { lang, t } = useLang();
  const form = translations.contact.form;

  return (
    <section id="contact" className="section-padding relative">
      <div className="absolute inset-0 dot-grid opacity-15" />
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="text-sm font-semibold uppercase tracking-widest text-cyan-400 mb-4 block">
              {t({ cg: "Kontakt", en: "Contact", ru: "Контакт" })}
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black">
              {t(translations.contact.headline)}
            </h2>
            <p className="mt-4 text-lg text-slate-400 max-w-xl mx-auto">
              {t(translations.contact.subheadline)}
            </p>
          </div>
        </ScrollReveal>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Form */}
          <ScrollReveal delay={100}>
            <div className="lg:col-span-2 glass-card p-8 md:p-10">
              <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">{t(form.name)}</label>
                    <input type="text" className="input-field" placeholder={t(form.name)} />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">{t(form.email)}</label>
                    <input type="email" className="input-field" placeholder="email@example.com" />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">{t(form.phone)}</label>
                    <input type="tel" className="input-field" placeholder="+382 6X XXX XXX" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">{t(form.businessType)}</label>
                    <select className="input-field appearance-none cursor-pointer">
                      <option value="" className="bg-[#0A0A0F]">—</option>
                      {(form.businessOptions[lang] as readonly string[]).map((opt: string, i: number) => (
                        <option key={i} value={opt} className="bg-[#0A0A0F]">{opt}</option>
                      ))}
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">{t(form.message)}</label>
                  <textarea className="input-field min-h-[140px] resize-none" placeholder={t(form.message)} />
                </div>
                <button type="submit" className="btn-cta w-full justify-center text-base py-4">
                  {t(form.submit)}
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />
                  </svg>
                </button>
              </form>
            </div>
          </ScrollReveal>

          {/* Sidebar */}
          <ScrollReveal delay={200}>
            <div className="space-y-6">
              {/* Email */}
              <div className="glass-card p-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-violet-600/20 to-blue-600/20 border border-violet-500/20 flex items-center justify-center text-violet-400">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                      <polyline points="22,6 12,13 2,6" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 uppercase tracking-wider font-semibold">Email</p>
                    <a href="mailto:ivaschdima@gmail.com" className="text-white font-medium hover:text-violet-400 transition-colors">ivaschdima@gmail.com</a>
                  </div>
                </div>
              </div>

              {/* Phone */}
              <div className="glass-card p-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-600/20 to-blue-600/20 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 uppercase tracking-wider font-semibold">
                      {t({ cg: "Telefon", en: "Phone", ru: "Телефон" })}
                    </p>
                    <a href="tel:+38268499621" className="text-white font-medium hover:text-cyan-400 transition-colors">+382 68 499 621</a>
                  </div>
                </div>
              </div>

              {/* Location */}
              <div className="glass-card p-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-600/20 to-cyan-600/20 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 uppercase tracking-wider font-semibold">
                      {t({ cg: "Lokacija", en: "Location", ru: "Локация" })}
                    </p>
                    <p className="text-white font-medium">Bar, Crna Gora 🇲🇪</p>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
