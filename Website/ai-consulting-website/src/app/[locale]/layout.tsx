import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import SessionProvider from "@/components/auth/SessionProvider";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import "../globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const locales = ['fr', 'en'];

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params;
  const messages = await getMessages({ locale });
  
  if (locale === 'en') {
    return {
      title: "NEWCODE - Accelerated AI Development",
      description: "NEWCODE helps you build and deploy your AI solutions. Everyone deserves access to modern software capabilities.",
      icons: {
        icon: '/images/N-favicon.png',
        shortcut: '/images/N-favicon.png',
        apple: '/images/N-favicon.png',
      },
    };
  }
  
  return {
    title: "NEWCODE - Développement IA Accéléré",
    description: "NEWCODE vous aide à construire et déployer vos solutions IA. Tout le monde mérite l'accès aux capacités logicielles modernes.",
    icons: {
      icon: '/images/N-favicon.png',
      shortcut: '/images/N-favicon.png',
      apple: '/images/N-favicon.png',
    },
  };
}

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  
  // Validate that the incoming `locale` parameter is valid
  if (!locales.includes(locale as string)) {
    notFound();
  }
  
  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages({ locale });

  return (
    <html lang={locale}>
      <head>
        <link rel="icon" href="/images/N-favicon.png" type="image/png" />
        <link rel="shortcut icon" href="/images/N-favicon.png" type="image/png" />
        <link rel="apple-touch-icon" href="/images/N-favicon.png" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning={true}
      >
        <a href="#main-content" className="skip-link">
          {locale === 'en' ? 'Skip to main content' : 'Passer au contenu principal'}
        </a>
        <NextIntlClientProvider messages={messages} locale={locale}>
          <SessionProvider session={undefined}>
            {children}
          </SessionProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}