import Navigation from '@/components/sections/Navigation';
import Footer from '@/components/sections/Footer';
import DevelopersHero from '@/components/sections/developers/DevelopersHero';
import TechnicalStack from '@/components/sections/developers/TechnicalStack';
import AgentOrchestration from '@/components/sections/developers/AgentOrchestration';
import AdvancedFeatures from '@/components/sections/developers/AdvancedFeatures';
import TechnicalCaseStudies from '@/components/sections/developers/TechnicalCaseStudies';
import DeveloperCTA from '@/components/sections/developers/DeveloperCTA';

export default function DevelopersPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main>
        <DevelopersHero />
        
        <TechnicalStack />
        
        <AgentOrchestration />
        
        <AdvancedFeatures />
        
        <TechnicalCaseStudies />
        
        <DeveloperCTA />
      </main>
      
      <Footer />
    </div>
  );
}