import Navigation from '@/components/sections/Navigation';
import CaseStudiesHero from '@/components/sections/case-studies/CaseStudiesHero';
import FeaturedCaseStudies from '@/components/sections/case-studies/FeaturedCaseStudies';
import ResultsMetrics from '@/components/sections/case-studies/ResultsMetrics';
import TestimonialsGrid from '@/components/sections/case-studies/TestimonialsGrid';
import CTASection from '@/components/sections/CTASection';
import Footer from '@/components/sections/Footer';

export default function CaseStudiesPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main>
        <CaseStudiesHero />
        <FeaturedCaseStudies />
        <ResultsMetrics />
        <TestimonialsGrid />
        <CTASection />
      </main>
      
      <Footer />
    </div>
  );
}

export const metadata = {
  title: "Cas d'étude - contexteDev",
  description: "Découvrez comment nos clients ont transformé leurs processus avec l'IA. Résultats mesurables et témoignages concrets.",
};