"use client";

import { LanguageProvider } from "@/context/LanguageContext";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Portfolio from "@/components/Portfolio";
import Services from "@/components/Services";
import HowItWorks from "@/components/HowItWorks";
import About from "@/components/About";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <LanguageProvider>
      <Navbar />
      <main className="flex-1 overflow-hidden">
        <Hero />
        <Stats />
        <Portfolio />
        <Services />
        <HowItWorks />
        <About />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </LanguageProvider>
  );
}
