import type { Metadata } from "next";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { locales } from '@/i18n';

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const baseTitle = locale === 'fr' 
    ? "NEWCODE - Développement IA Accéléré"
    : "NEWCODE - Accelerated AI Development";
  
  const baseDescription = locale === 'fr'
    ? "NEWCODE vous aide à construire et déployer vos solutions IA. Développeurs et dirigeants, tout le monde mérite l'accès aux capacités logicielles modernes."
    : "NEWCODE helps you build and deploy your AI solutions. Developers and leaders, everyone deserves access to modern software capabilities.";

  return {
    title: baseTitle,
    description: baseDescription,
  };
}

export default async function LocaleLayout({
  children,
  params
}: Props) {
  const { locale } = await params;
  if (!locales.includes(locale as 'fr' | 'en')) notFound();

  const messages = await getMessages();

  return (
    <NextIntlClientProvider messages={messages}>
      {children}
    </NextIntlClientProvider>
  );
}