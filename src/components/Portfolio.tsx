"use client";

import { useLang } from "@/context/LanguageContext";
import ScrollReveal from "./ScrollReveal";

const demos = [
  {
    name: "Monochrome Café",
    style: { cg: "Minimalistički crno-bijeli", en: "Minimalist B&W", ru: "Минималистичный Ч/Б" },
    url: "https://restaurant-menu-app-swart.vercel.app",
    accent: "#888888",
    accentBg: "rgba(136,136,136,0.12)",
    accentBorder: "rgba(136,136,136,0.3)",
  },
  {
    name: "NOIR LUXE",
    style: { cg: "Tamni luksuz / Glassmorphism", en: "Dark Luxury / Glassmorphism", ru: "Тёмный люкс / Glassmorphism" },
    url: "https://noir-luxe-menu.vercel.app",
    accent: "#C9A84C",
    accentBg: "rgba(201,168,76,0.12)",
    accentBorder: "rgba(201,168,76,0.35)",
  },
  {
    name: "STREET BITE",
    style: { cg: "Neon brutalistički", en: "Neon Brutalist", ru: "Неон-бруталист" },
    url: "https://street-bite-menu.vercel.app",
    accent: "#FF3366",
    accentBg: "rgba(255,51,102,0.12)",
    accentBorder: "rgba(255,51,102,0.35)",
  },
  {
    name: "GARDEN TABLE",
    style: { cg: "Svijetli organski / Priroda", en: "Light Organic / Nature", ru: "Светлый органик / Природа" },
    url: "https://garden-table-menu.vercel.app",
    accent: "#4CAF50",
    accentBg: "rgba(76,175,80,0.12)",
    accentBorder: "rgba(76,175,80,0.35)",
  },
  {
    name: "OISHI",
    style: { cg: "Japanski zen minimal", en: "Japanese Zen Minimal", ru: "Японский дзен-минимал" },
    url: "https://oishi-menu.vercel.app",
    accent: "#E8A87C",
    accentBg: "rgba(232,168,124,0.12)",
    accentBorder: "rgba(232,168,124,0.35)",
  },
];

export default function Portfolio() {
  const { t } = useLang();

  return (
    <section id="portfolio" className="section-padding relative">
      <div className="absolute inset-0 dot-grid opacity-15" />
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="text-sm font-semibold uppercase tracking-widest text-cyan-400 mb-4 block">
              {t({ cg: "Portfolio", en: "Portfolio", ru: "Портфолио" })}
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-4">
              {t({ cg: "Naš ", en: "Our ", ru: "Наши " })}
              <span className="text-gradient-cyan">
                {t({ cg: "rad", en: "work", ru: "работы" })}
              </span>
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              {t({
                cg: "Pogledajte primjere QR menija koje smo kreirali. Svaki je jedinstven — prilagođen brendu restorana.",
                en: "Check out QR menu examples we've created. Each one is unique — tailored to the restaurant's brand.",
                ru: "Посмотрите примеры QR-меню, которые мы создали. Каждое уникально — адаптировано под бренд ресторана.",
              })}
            </p>
          </div>
        </ScrollReveal>

        {/* Demo Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {demos.map((demo, i) => (
            <ScrollReveal key={i} delay={i * 100}>
              <a
                href={demo.url}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card p-8 h-full flex flex-col group cursor-pointer relative overflow-hidden"
              >
                {/* Accent glow on hover */}
                <div
                  className="absolute -top-20 -right-20 w-40 h-40 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-3xl"
                  style={{ background: demo.accent }}
                />

                {/* Accent bar */}
                <div
                  className="w-12 h-1.5 rounded-full mb-6"
                  style={{ background: demo.accent }}
                />

                {/* Restaurant name */}
                <h3 className="text-2xl font-black text-white mb-2 group-hover:text-white/90 transition-colors">
                  {demo.name}
                </h3>

                {/* Style */}
                <p className="text-sm text-slate-400 mb-6 flex-1">
                  {t(demo.style)}
                </p>

                {/* Style tag */}
                <div className="mb-6">
                  <span
                    className="inline-block px-3 py-1.5 rounded-full text-xs font-semibold"
                    style={{
                      background: demo.accentBg,
                      color: demo.accent,
                      border: `1px solid ${demo.accentBorder}`,
                    }}
                  >
                    {demo.name}
                  </span>
                </div>

                {/* CTA */}
                <div
                  className="flex items-center gap-2 text-sm font-semibold transition-all group-hover:gap-3"
                  style={{ color: demo.accent }}
                >
                  {t({ cg: "Pogledaj", en: "View demo", ru: "Смотреть" })} →
                </div>
              </a>
            </ScrollReveal>
          ))}

          {/* "More coming" card */}
          <ScrollReveal delay={500}>
            <div className="glass-card p-8 h-full flex flex-col items-center justify-center text-center border-dashed border-slate-700/50">
              <div className="w-14 h-14 rounded-2xl bg-violet-600/10 border border-violet-500/20 flex items-center justify-center text-violet-400 mb-4">
                <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M12 5v14M5 12h14" strokeLinecap="round" />
                </svg>
              </div>
              <p className="text-slate-400 text-sm">
                {t({
                  cg: "Vaš restoran može biti sljedeći",
                  en: "Your restaurant could be next",
                  ru: "Ваш ресторан может быть следующим",
                })}
              </p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
