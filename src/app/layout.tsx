import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "SmartBay — AI Automation for Hospitality in Montenegro",
  description:
    "AI-powered digital assistants for restaurants, hotels, and rentals in Montenegro. Automated bookings, guest communication, and reviews. Ready in 3–5 days.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} antialiased`}>
      <body className="min-h-screen flex flex-col font-[var(--font-inter)]">
        {children}
      </body>
    </html>
  );
}
