import Navigation from '@/components/sections/Navigation';
import HeroBanner from '@/components/sections/HeroBanner';
import TrackSelection from '@/components/sections/TrackSelection';
import ProblemStatement from '@/components/sections/ProblemStatement';
import SolutionOverview from '@/components/sections/SolutionOverview';
import AboutSection from '@/components/sections/AboutSection';
import ToolsTrustSection from '@/components/sections/ToolsTrustSection';
import ServicesPreview from '@/components/sections/ServicesPreview';
import ResultsShowcase from '@/components/sections/ResultsShowcase';
import CTASection from '@/components/sections/CTASection';
import Footer from '@/components/sections/Footer';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main>
        <HeroBanner />
        
        <TrackSelection />
        
        <ProblemStatement />
        
        <SolutionOverview />
        
        <AboutSection />
        
        <ToolsTrustSection />
        
        <ServicesPreview />
        
        <ResultsShowcase />
        
        <CTASection />
      </main>
      
      <Footer />
    </div>
  );
}