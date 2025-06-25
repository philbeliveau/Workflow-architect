import Navigation from '@/components/sections/Navigation';
import Footer from '@/components/sections/Footer';
import CaseStudiesHero from '@/components/sections/case-studies/CaseStudiesHero';
import FeaturedCaseStudies from '@/components/sections/case-studies/FeaturedCaseStudies';
import ResultsMetrics from '@/components/sections/case-studies/ResultsMetrics';
import TestimonialsGrid from '@/components/sections/case-studies/TestimonialsGrid';

export default function CaseStudiesPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="pt-20">
        <CaseStudiesHero />
        <FeaturedCaseStudies />
        <ResultsMetrics />
        <TestimonialsGrid />
      </main>
      
      <Footer />
    </div>
  );
}