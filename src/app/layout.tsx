import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import SmoothScrollProvider from "@/components/SmoothScrollProvider";
import ScrollProgress from "@/components/ScrollProgress";
import MobileBookingButton from "@/components/MobileBookingButton";
import Navbar from "@/components/Navbar";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "cyrillic"],
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Ірина Люб'янська — Преміальна студія краси",
  description:
    "Епіляція, депіляція, шугаринг та ламінування вій у Боярці, Тарасівці та Вишневому. Індивідуальний підхід, стерильні інструменти та преміум матеріали.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uk" className={`${playfair.variable} ${inter.variable}`}>
      <body className="bg-bg-primary text-text antialiased">
        <SmoothScrollProvider>
          <ScrollProgress />
          <Navbar />
          {children}
          <MobileBookingButton />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
