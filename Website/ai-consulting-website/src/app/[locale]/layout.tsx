import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  if (locale === 'en') {
    return {
      title: "AI Development Accelerator - Ship 3x Faster",
      description: "We install complete AI development systems. Your 4-person team delivers like a 12-person team. Results from week 1.",
    };
  }
  
  return {
    title: "AI Development Accelerator - Livrez 3x Plus Vite",
    description: "Nous installons des systèmes de développement IA complets. Votre équipe de 4 livre comme une équipe de 12. Résultats dès la semaine 1.",
  };
}

export default async function LocaleLayout({
  children,
  params
}: Props) {
  const { locale } = await params;
  return (
    <div className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
      {children}
    </div>
  );
}