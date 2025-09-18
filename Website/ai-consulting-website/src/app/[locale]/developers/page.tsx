import Navigation from '@/components/sections/Navigation';
import DevelopersHero from '@/components/sections/developers/DevelopersHero';
import TechnicalStack from '@/components/sections/developers/TechnicalStack';
import MethodologyShowcase from '@/components/sections/MethodologyShowcase';
import AdvancedFeatures from '@/components/sections/developers/AdvancedFeatures';
import AgentOrchestration from '@/components/sections/developers/AgentOrchestration';
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
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-background-dark via-background-dark-alt to-background-dark">
      {/* Background with gradient and pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-72 h-72 bg-primary-blue/30 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent-yellow/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary-blue/10 rounded-full blur-3xl opacity-15 animate-pulse delay-2000"></div>
        </div>
        
        {/* Background grid pattern with squares */}
        <div className="absolute inset-0 opacity-5">
          <div className="grid grid-cols-12 gap-2 h-full p-4">
            {Array.from({ length: 144 }, (_, i) => (
              <div 
                key={i} 
                className="bg-text-secondary rounded-sm animate-pulse" 
                style={{
                  animationDelay: `${i * 0.05}s`,
                  animationDuration: '3s'
                }}
              ></div>
            ))}
          </div>
        </div>
      </div>

      <div className="relative z-10">
        <Navigation />
      
      <main>
        <DevelopersHero />
        <TechnicalStack />
        <AdvancedFeatures />
        <AgentOrchestration />
        <MethodologyShowcase />
        <DeveloperCTA />
      </main>
      
      <Footer />
      </div>
    </div>
  );
}