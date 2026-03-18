"use client";

import { useState } from "react";
import { useLang } from "@/context/LanguageContext";
import { translations } from "@/lib/i18n";
import ScrollReveal from "./ScrollReveal";

export default function Testimonials() {
  const { t } = useLang();
  const [active, setActive] = useState(0);
  const items = translations.testimonials.items;

  return (
    <section className="py-24 px-4">
      <div className="max-w-4xl mx-auto">
        <ScrollReveal>
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16">
            {t(translations.testimonials.headline)}
          </h2>
        </ScrollReveal>

        <ScrollReveal>
          <div className="glass-card p-8 sm:p-12 text-center min-h-[220px] flex flex-col items-center justify-center">
            <svg className="w-10 h-10 text-accent/30 mb-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151C7.563 6.068 6 8.789 6 11h4v10H0z" />
            </svg>
            <blockquote className="text-lg sm:text-xl leading-relaxed mb-6 max-w-2xl">
              &ldquo;{t(items[active].quote)}&rdquo;
            </blockquote>
            <p className="text-muted text-sm font-medium">{t(items[active].author)}</p>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {items.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`w-2.5 h-2.5 rounded-full transition-all ${
                  i === active ? "bg-accent w-8" : "bg-muted/30 hover:bg-muted/50"
                }`}
                aria-label={`Testimonial ${i + 1}`}
              />
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
