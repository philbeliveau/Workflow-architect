import Navigation from '@/components/sections/Navigation';
import BusinessHero from '@/components/sections/business/BusinessHero';
import BusinessBenefits from '@/components/sections/business/BusinessBenefits';
import BusinessCTA from '@/components/sections/business/BusinessCTA';
import Footer from '@/components/sections/Footer';
import type { Metadata } from 'next';

export async function generateMetadata({
  params
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params;
  
  if (locale === 'en') {
    return {
      title: "Business - NEWCODE",
      description: "AI-powered no-code business solutions. Automate your processes and gain efficiency without a technical team.",
    };
  }
  
  return {
    title: "Business - NEWCODE",
    description: "Solutions métier sans code basées sur l'IA. Automatisez vos processus et gagnez en efficacité sans équipe technique.",
  };
}

export default function BusinessPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main>
        <BusinessHero />
        <BusinessBenefits />
        <BusinessCTA />
      </main>
      
      <Footer />
    </div>
  );
}