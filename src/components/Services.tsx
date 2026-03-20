"use client";

import { useLang } from "@/context/LanguageContext";
import ScrollReveal from "./ScrollReveal";

const tiers = [
  {
    key: "starter",
    emoji: "🟢",
    color: "#22C55E",
    colorBg: "rgba(34,197,94,0.08)",
    colorBorder: "rgba(34,197,94,0.25)",
    glowColor: "rgba(34,197,94,0.15)",
    name: { cg: "STARTER", en: "STARTER", ru: "STARTER" },
    tagline: {
      cg: "Tvoj meni online za 24 sata",
      en: "Your menu online in 24 hours",
      ru: "Твоё меню онлайн за 24 часа",
    },
    price: "99",
    priceType: { cg: "jednokratno", en: "one-time", ru: "разово" },
    monthly: null,
    features: {
      cg: [
        "QR-meni sajt (višejezični ME/EN/RU)",
        "Atraktivni opisi jela",
        "QR kod za štampu (stolovi, izlog, vizitke)",
        "Google Maps optimizacija (radno vrijeme, fotografije, opis)",
      ],
      en: [
        "QR-menu website (multilingual ME/EN/RU)",
        "Beautiful food descriptions",
        "QR code for print (tables, window, business cards)",
        "Google Maps optimization (hours, photos, description)",
      ],
      ru: [
        "QR-меню сайт (мультиязычный ME/EN/RU)",
        "Привлекательные описания блюд",
        "QR-код для печати (столы, витрина, визитки)",
        "Оптимизация Google Maps (часы, фото, описание)",
      ],
    },
    cta: {
      cg: "Počni sa STARTER",
      en: "Start with STARTER",
      ru: "Начать со STARTER",
    },
  },
  {
    key: "pro",
    emoji: "🔵",
    color: "#3B82F6",
    colorBg: "rgba(59,130,246,0.08)",
    colorBorder: "rgba(59,130,246,0.3)",
    glowColor: "rgba(59,130,246,0.15)",
    popular: true,
    name: { cg: "PRO", en: "PRO", ru: "PRO" },
    tagline: {
      cg: "Instagram koji radi za tebe",
      en: "Instagram that works for you",
      ru: "Instagram, который работает на тебя",
    },
    price: "249",
    priceType: { cg: "jednokratno", en: "one-time", ru: "разово" },
    monthly: "79",
    features: {
      cg: [
        "Sve iz STARTER paketa",
        "30 Story-a mjesečno",
        "Template-i u stilu restorana",
        "Mjesečni plan sadržaja",
        "Tekstovi na 3 jezika",
        "Osnovni DM auto-odgovor (FAQ, radno vrijeme, meni)",
      ],
      en: [
        "Everything in STARTER",
        "30 Stories/month",
        "Templates in restaurant style",
        "Monthly content plan",
        "Texts in 3 languages",
        "Basic DM auto-responder (FAQ, hours, menu)",
      ],
      ru: [
        "Всё из пакета STARTER",
        "30 Stories/месяц",
        "Шаблоны в стиле ресторана",
        "Ежемесячный контент-план",
        "Тексты на 3 языках",
        "Базовый авто-ответ в DM (FAQ, время работы, меню)",
      ],
    },
    cta: {
      cg: "Izaberi PRO",
      en: "Choose PRO",
      ru: "Выбрать PRO",
    },
  },
  {
    key: "max",
    emoji: "🟡",
    color: "#EAB308",
    colorBg: "rgba(234,179,8,0.08)",
    colorBorder: "rgba(234,179,8,0.3)",
    glowColor: "rgba(234,179,8,0.15)",
    name: { cg: "MAX", en: "MAX", ru: "MAX" },
    tagline: {
      cg: "Potpuna automatizacija marketinga",
      en: "Full marketing automation",
      ru: "Полная автоматизация маркетинга",
    },
    price: "499",
    priceType: { cg: "jednokratno", en: "one-time", ru: "разово" },
    monthly: "149",
    features: {
      cg: [
        "Sve iz PRO paketa",
        "AI chatbot Instagram/WhatsApp (rezervacije, meni, 24/7 odgovori)",
        "Upravljanje recenzijama (Google/Tripadvisor odgovori)",
        "Mjesečni izvještaj: doseg, engagement, rast",
        "Analiza konkurencije (mjesečno)",
        "Prioritetna podrška",
      ],
      en: [
        "Everything in PRO",
        "AI chatbot Instagram/WhatsApp (booking, menu, 24/7 answers)",
        "Review management (Google/Tripadvisor responses)",
        "Monthly report: reach, engagement, growth",
        "Competitor analysis (monthly)",
        "Priority support",
      ],
      ru: [
        "Всё из пакета PRO",
        "AI чат-бот Instagram/WhatsApp (бронь, меню, 24/7 ответы)",
        "Управление отзывами (ответы Google/Tripadvisor)",
        "Ежемесячный отчёт: охват, вовлечённость, рост",
        "Анализ конкурентов (ежемесячно)",
        "Приоритетная поддержка",
      ],
    },
    cta: {
      cg: "Uzmi MAX",
      en: "Go MAX",
      ru: "Взять MAX",
    },
  },
];

// Comparison table features
const comparisonFeatures = [
  { label: { cg: "QR-meni sajt", en: "QR-menu website", ru: "QR-меню сайт" }, starter: true, pro: true, max: true },
  { label: { cg: "Opisi jela", en: "Food descriptions", ru: "Описания блюд" }, starter: true, pro: true, max: true },
  { label: { cg: "QR kod za štampu", en: "QR code for print", ru: "QR-код для печати" }, starter: true, pro: true, max: true },
  { label: { cg: "Google Maps optimizacija", en: "Google Maps optimization", ru: "Оптимизация Google Maps" }, starter: true, pro: true, max: true },
  { label: { cg: "30 Stories/mj", en: "30 Stories/month", ru: "30 Stories/мес" }, starter: false, pro: true, max: true },
  { label: { cg: "Template-i za restoran", en: "Restaurant templates", ru: "Шаблоны для ресторана" }, starter: false, pro: true, max: true },
  { label: { cg: "Mjesečni content plan", en: "Monthly content plan", ru: "Ежемесячный контент-план" }, starter: false, pro: true, max: true },
  { label: { cg: "Tekstovi na 3 jezika", en: "Texts in 3 languages", ru: "Тексты на 3 языках" }, starter: false, pro: true, max: true },
  { label: { cg: "DM auto-odgovor", en: "DM auto-responder", ru: "Авто-ответ в DM" }, starter: false, pro: true, max: true },
  { label: { cg: "AI chatbot (Instagram/WhatsApp)", en: "AI chatbot (Instagram/WhatsApp)", ru: "AI чат-бот (Instagram/WhatsApp)" }, starter: false, pro: false, max: true },
  { label: { cg: "Upravljanje recenzijama", en: "Review management", ru: "Управление отзывами" }, starter: false, pro: false, max: true },
  { label: { cg: "Mjesečni izvještaj", en: "Monthly report", ru: "Ежемесячный отчёт" }, starter: false, pro: false, max: true },
  { label: { cg: "Analiza konkurencije", en: "Competitor analysis", ru: "Анализ конкурентов" }, starter: false, pro: false, max: true },
  { label: { cg: "Prioritetna podrška", en: "Priority support", ru: "Приоритетная поддержка" }, starter: false, pro: false, max: true },
];

export default function Services() {
  const { lang, t } = useLang();

  return (
    <section id="services" className="section-padding relative">
      <div className="absolute inset-0 dot-grid opacity-20" />
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="text-sm font-semibold uppercase tracking-widest text-violet-400 mb-4 block">
              {t({ cg: "Paketi", en: "Pricing", ru: "Пакеты" })}
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-4">
              {t({ cg: "Izaberite vaš ", en: "Choose your ", ru: "Выберите ваш " })}
              <span className="text-gradient">
                {t({ cg: "paket", en: "plan", ru: "пакет" })}
              </span>
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              {t({
                cg: "Od digitalnog menija do potpune automatizacije — izaberite ono što vam treba.",
                en: "From a digital menu to full automation — choose what you need.",
                ru: "От цифрового меню до полной автоматизации — выберите то, что вам нужно.",
              })}
            </p>
          </div>
        </ScrollReveal>

        {/* Tier Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-20">
          {tiers.map((tier, i) => (
            <ScrollReveal key={tier.key} delay={i * 150}>
              <div
                className={`glass-card p-8 h-full flex flex-col group relative overflow-hidden ${
                  tier.popular ? "ring-2" : ""
                }`}
                style={tier.popular ? { borderColor: tier.colorBorder, boxShadow: `0 0 40px ${tier.glowColor}` } : {}}
              >
                {/* Popular badge */}
                {tier.popular && (
                  <div className="absolute top-0 right-0">
                    <div
                      className="px-4 py-1.5 text-xs font-bold uppercase tracking-widest rounded-bl-xl"
                      style={{ background: tier.color, color: "#0A0A0F" }}
                    >
                      {t({ cg: "Najpopularniji", en: "Most Popular", ru: "Популярный" })}
                    </div>
                  </div>
                )}

                {/* Tier header */}
                <div className="mb-6">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-2xl">{tier.emoji}</span>
                    <h3 className="text-2xl font-black text-white">{t(tier.name)}</h3>
                  </div>
                  <p className="text-sm italic" style={{ color: tier.color }}>
                    &ldquo;{t(tier.tagline)}&rdquo;
                  </p>
                </div>

                {/* Price */}
                <div className="mb-6 pb-6 border-b border-white/10">
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-black text-white">€{tier.price}</span>
                    <span className="text-slate-500 text-sm">/ {t(tier.priceType)}</span>
                  </div>
                  {tier.monthly && (
                    <div className="mt-1 flex items-baseline gap-1">
                      <span className="text-xl font-bold" style={{ color: tier.color }}>
                        + €{tier.monthly}
                      </span>
                      <span className="text-slate-500 text-sm">
                        /{t({ cg: "mj", en: "mo", ru: "мес" })}
                      </span>
                    </div>
                  )}
                </div>

                {/* Features */}
                <ul className="space-y-3 mb-8 flex-1">
                  {(tier.features[lang] as readonly string[]).map((feat: string, j: number) => (
                    <li key={j} className="flex items-start gap-2.5 text-sm text-slate-300">
                      <svg
                        className="w-4 h-4 mt-0.5 shrink-0"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke={tier.color}
                        strokeWidth="2.5"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      {feat}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <a
                  href="#contact"
                  className="text-sm font-semibold py-3.5 px-6 rounded-xl text-center transition-all duration-300 hover:translate-y-[-2px]"
                  style={{
                    background: tier.popular
                      ? `linear-gradient(135deg, ${tier.color}, ${tier.color}CC)`
                      : "transparent",
                    color: tier.popular ? "#0A0A0F" : tier.color,
                    border: tier.popular ? "none" : `1px solid ${tier.colorBorder}`,
                    boxShadow: tier.popular ? `0 8px 30px ${tier.glowColor}` : "none",
                  }}
                >
                  {t(tier.cta)}
                </a>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Comparison Table */}
        <ScrollReveal delay={300}>
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-center mb-8">
              {t({
                cg: "Uporedite pakete",
                en: "Compare plans",
                ru: "Сравните пакеты",
              })}
            </h3>
            <div className="glass-card overflow-hidden rounded-2xl">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-white/10">
                      <th className="text-left p-4 text-slate-400 font-medium">
                        {t({ cg: "Funkcionalnost", en: "Feature", ru: "Функция" })}
                      </th>
                      <th className="p-4 text-center font-bold" style={{ color: "#22C55E" }}>
                        🟢 STARTER
                      </th>
                      <th className="p-4 text-center font-bold" style={{ color: "#3B82F6" }}>
                        🔵 PRO
                      </th>
                      <th className="p-4 text-center font-bold" style={{ color: "#EAB308" }}>
                        🟡 MAX
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparisonFeatures.map((feat, i) => (
                      <tr
                        key={i}
                        className={`border-b border-white/5 ${
                          i % 2 === 0 ? "bg-white/[0.02]" : ""
                        }`}
                      >
                        <td className="p-4 text-slate-300">{t(feat.label)}</td>
                        <td className="p-4 text-center">
                          {feat.starter ? (
                            <span className="text-green-400 text-lg">✓</span>
                          ) : (
                            <span className="text-slate-600">—</span>
                          )}
                        </td>
                        <td className="p-4 text-center">
                          {feat.pro ? (
                            <span className="text-blue-400 text-lg">✓</span>
                          ) : (
                            <span className="text-slate-600">—</span>
                          )}
                        </td>
                        <td className="p-4 text-center">
                          {feat.max ? (
                            <span className="text-yellow-400 text-lg">✓</span>
                          ) : (
                            <span className="text-slate-600">—</span>
                          )}
                        </td>
                      </tr>
                    ))}
                    {/* Price row */}
                    <tr className="border-t border-white/10 bg-white/[0.03]">
                      <td className="p-4 font-bold text-white">
                        {t({ cg: "Cijena", en: "Price", ru: "Цена" })}
                      </td>
                      <td className="p-4 text-center">
                        <span className="font-bold text-white">€99</span>
                        <br />
                        <span className="text-xs text-slate-500">{t({ cg: "jednokratno", en: "one-time", ru: "разово" })}</span>
                      </td>
                      <td className="p-4 text-center">
                        <span className="font-bold text-white">€249</span>
                        <span className="text-xs text-slate-500"> + </span>
                        <span className="font-bold text-blue-400">€79</span>
                        <span className="text-xs text-slate-500">/{t({ cg: "mj", en: "mo", ru: "мес" })}</span>
                      </td>
                      <td className="p-4 text-center">
                        <span className="font-bold text-white">€499</span>
                        <span className="text-xs text-slate-500"> + </span>
                        <span className="font-bold text-yellow-400">€149</span>
                        <span className="text-xs text-slate-500">/{t({ cg: "mj", en: "mo", ru: "мес" })}</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
