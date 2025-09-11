import { lazy, Suspense } from 'react';
import Navigation from '@/components/sections/Navigation';
import HeroBanner from '@/components/sections/HeroBanner';
import { LoadingSpinner } from '@/components/ui/LoadingSpinner';

// Lazy load components that are below the fold
const TrackSelection = lazy(() => import('@/components/sections/TrackSelection'));
const ProblemStatement = lazy(() => import('@/components/sections/ProblemStatement'));
const TrainingContent = lazy(() => import('@/components/sections/TrainingContent'));
const SolutionOverview = lazy(() => import('@/components/sections/SolutionOverview'));
const CTASection = lazy(() => import('@/components/sections/CTASection'));
const Footer = lazy(() => import('@/components/sections/Footer'));

const SectionFallback = () => (
  <div className="flex items-center justify-center py-16">
    <LoadingSpinner size="lg" aria-label="Chargement de la section..." />
  </div>
);

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main id="main-content">
        <section id="accueil">
          <HeroBanner />
        </section>
        
        <section id="probleme">
          <Suspense fallback={<SectionFallback />}>
            <ProblemStatement />
          </Suspense>
        </section>
        
        <section id="parcours">
          <Suspense fallback={<SectionFallback />}>
            <TrackSelection />
          </Suspense>
        </section>
        
        <section id="formation">
          <Suspense fallback={<SectionFallback />}>
            <TrainingContent />
          </Suspense>
        </section>
        
        <section id="solution">
          <Suspense fallback={<SectionFallback />}>
            <SolutionOverview />
          </Suspense>
        </section>
        
        <section id="contact">
          <Suspense fallback={<SectionFallback />}>
            <CTASection />
          </Suspense>
        </section>
      </main>
      
      <Suspense fallback={<SectionFallback />}>
        <Footer />
      </Suspense>
    </div>
  );
}