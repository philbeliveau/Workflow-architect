import Navigation from '@/components/sections/Navigation';
import Footer from '@/components/sections/Footer';
import BusinessHero from '@/components/sections/business/BusinessHero';
import BusinessSolutions from '@/components/sections/business/BusinessSolutions';
import NoCodeExamples from '@/components/sections/business/NoCodeExamples';
import BusinessBenefits from '@/components/sections/business/BusinessBenefits';
import BusinessCaseStudies from '@/components/sections/business/BusinessCaseStudies';
import BusinessCTA from '@/components/sections/business/BusinessCTA';

export default function BusinessPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main>
        <BusinessHero />
        
        <BusinessSolutions />
        
        <NoCodeExamples />
        
        <BusinessBenefits />
        
        <BusinessCaseStudies />
        
        <BusinessCTA />
      </main>
      
      <Footer />
    </div>
  );
}