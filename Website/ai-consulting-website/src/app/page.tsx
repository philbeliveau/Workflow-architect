import Navigation from '@/components/sections/Navigation';
import HeroBanner from '@/components/sections/HeroBanner';
import ProblemStatement from '@/components/sections/ProblemStatement';
import SolutionOverview from '@/components/sections/SolutionOverview';
import ServicesPreview from '@/components/sections/ServicesPreview';
import ResultsShowcase from '@/components/sections/ResultsShowcase';
import CTASection from '@/components/sections/CTASection';
import Footer from '@/components/sections/Footer';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main>
        <HeroBanner
          title="Déployez des flux IA. Livrez 3x plus vite."
          subtitle="Transformez votre petite équipe de développement en machine de productivité alimentée par l'IA avec du consulting fait-avec-vous qui livre des résultats mesurables en semaines, pas en mois."
          primaryCTA={{
            text: "Réserver un audit de flux",
            href: "/book-demo"
          }}
          secondaryCTA={{
            text: "Voir les cas d'étude",
            href: "/case-studies"
          }}
        />
        
        <ProblemStatement />
        
        <SolutionOverview />
        
        <ServicesPreview />
        
        <ResultsShowcase />
        
        <CTASection />
      </main>
      
      <Footer />
    </div>
  );
}
