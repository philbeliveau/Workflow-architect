import Navigation from '@/components/sections/Navigation';
import DevelopersHero from '@/components/sections/developers/DevelopersHero';
import TechnicalStack from '@/components/sections/developers/TechnicalStack';
import AdvancedFeatures from '@/components/sections/developers/AdvancedFeatures';
import AgentOrchestration from '@/components/sections/developers/AgentOrchestration';
import SPARCDelegation from '@/components/sections/developers/SPARCDelegation';
import TechnicalCaseStudies from '@/components/sections/developers/TechnicalCaseStudies';
import DeveloperCTA from '@/components/sections/developers/DeveloperCTA';
import Footer from '@/components/sections/Footer';

export default function DevelopersPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main>
        <DevelopersHero />
        <TechnicalStack />
        <AdvancedFeatures />
        <AgentOrchestration />
        <SPARCDelegation />
        <TechnicalCaseStudies />
        <DeveloperCTA />
      </main>
      
      <Footer />
    </div>
  );
}

export const metadata = {
  title: "Développeurs - contexteDev",
  description: "Solutions avancées d'orchestration d'agents IA pour développeurs. Automatisez vos workflows et multipliez votre productivité.",
};