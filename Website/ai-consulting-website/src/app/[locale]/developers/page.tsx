import Navigation from '@/components/sections/Navigation';
import DevelopersHero from '@/components/sections/developers/DevelopersHero';
import TechnicalStack from '@/components/sections/developers/TechnicalStack';
import AdvancedFeatures from '@/components/sections/developers/AdvancedFeatures';
import AgentOrchestration from '@/components/sections/developers/AgentOrchestration';
import TechnicalCaseStudies from '@/components/sections/developers/TechnicalCaseStudies';
import DeveloperCTA from '@/components/sections/developers/DeveloperCTA';
import Footer from '@/components/sections/Footer';
import { getTranslations } from 'next-intl/server';
import type { Metadata } from 'next';

export async function generateMetadata({
  params
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params;
  
  if (locale === 'en') {
    return {
      title: "Developers - NEWCODE",
      description: "Advanced AI agent orchestration solutions for developers. Automate your workflows and multiply your productivity.",
    };
  }
  
  return {
    title: "Développeurs - NEWCODE",
    description: "Solutions avancées d'orchestration d'agents IA pour développeurs. Automatisez vos workflows et multipliez votre productivité.",
  };
}

export default function DevelopersPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main>
        <DevelopersHero />
        <TechnicalStack />
        <AdvancedFeatures />
        <AgentOrchestration />
        <TechnicalCaseStudies />
        <DeveloperCTA />
      </main>
      
      <Footer />
    </div>
  );
}