"use client";

import { useEffect, useRef, useState } from "react";
import { useLang } from "@/context/LanguageContext";
import ScrollReveal from "./ScrollReveal";

const stats = [
  {
    value: "30",
    suffix: "s",
    label: { cg: "odgovor", en: "response", ru: "ответ" },
  },
  {
    value: "+40",
    suffix: "%",
    label: { cg: "rezervacija", en: "bookings", ru: "бронирований" },
  },
  {
    value: "3",
    suffix: "",
    label: { cg: "jezika", en: "languages", ru: "языка" },
  },
  {
    value: "3-5",
    suffix: "",
    label: { cg: "dana setup", en: "days setup", ru: "дней настройка" },
  },
];

function CountUp({ target, suffix }: { target: string; suffix: string }) {
  const [display, setDisplay] = useState("0");
  const ref = useRef<HTMLSpanElement>(null);
  const animated = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !animated.current) {
          animated.current = true;
          // If target contains '-', just show it directly
          if (target.includes("-")) {
            setDisplay(target);
            return;
          }
          const num = parseInt(target.replace("+", ""));
          const prefix = target.startsWith("+") ? "+" : "";
          const duration = 1500;
          const steps = 40;
          const stepTime = duration / steps;
          let current = 0;
          const increment = num / steps;

          const interval = setInterval(() => {
            current += increment;
            if (current >= num) {
              current = num;
              clearInterval(interval);
            }
            setDisplay(prefix + Math.round(current).toString());
          }, stepTime);
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [target]);

  return (
    <span ref={ref} className="text-4xl md:text-5xl font-black text-gradient">
      {display}{suffix}
    </span>
  );
}

export default function Stats() {
  const { t } = useLang();

  return (
    <section className="relative py-16 md:py-20">
      <div className="max-w-6xl mx-auto px-6">
        <ScrollReveal>
          <div className="glass-card p-8 md:p-12 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
            {stats.map((stat, i) => (
              <div key={i} className="text-center">
                <CountUp target={stat.value} suffix={stat.suffix} />
                <p className="mt-2 text-sm md:text-base text-slate-400 font-medium uppercase tracking-wider">
                  {t(stat.label)}
                </p>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
