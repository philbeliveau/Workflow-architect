import { lazy, Suspense } from 'react';
import Navigation from '@/components/sections/Navigation';
import HeroBanner from '@/components/sections/HeroBanner';
import { LoadingSpinner } from '@/components/ui/LoadingSpinner';
import { getTranslations } from 'next-intl/server';

// Lazy load components that are below the fold
const TransformationProcessInteractive = lazy(() => import('@/components/sections/TransformationProcessInteractive'));
const TrackSelection = lazy(() => import('@/components/sections/TrackSelection'));
const ProblemStatement = lazy(() => import('@/components/sections/ProblemStatement'));
const TrainingContent = lazy(() => import('@/components/sections/TrainingContent'));
const SolutionOverview = lazy(() => import('@/components/sections/SolutionOverview'));
const TeamSection = lazy(() => import('@/components/sections/TeamSection'));
const CTASection = lazy(() => import('@/components/sections/CTASection'));
const Footer = lazy(() => import('@/components/sections/Footer'));

const SectionFallback = () => (
  <div className="flex items-center justify-center py-16">
    <LoadingSpinner size="lg" aria-label="Loading section..." />
  </div>
);

export default async function Home({
  params
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  
  // Use locale-appropriate section IDs
  const sectionIds = locale === 'fr' 
    ? { home: 'accueil', tracks: 'parcours', problem: 'probleme', solution: 'solution', contact: 'contact' }
    : { home: 'home', tracks: 'tracks', problem: 'problem', solution: 'solution', contact: 'contact' };

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main id="main-content">
        <section id={sectionIds.home}>
          <HeroBanner />
        </section>
        
        <section id="transformation">
          <Suspense fallback={<SectionFallback />}>
            <TransformationProcessInteractive autoPlay={true} duration={5000} />
          </Suspense>
        </section>
        
        <section id={sectionIds.problem}>
          <Suspense fallback={<SectionFallback />}>
            <ProblemStatement />
          </Suspense>
        </section>
        
        <section id={sectionIds.tracks}>
          <Suspense fallback={<SectionFallback />}>
            <TrackSelection />
          </Suspense>
        </section>
        
        <section id="formation">
          <Suspense fallback={<SectionFallback />}>
            <TrainingContent />
          </Suspense>
        </section>
        
        <section id={sectionIds.solution}>
          <Suspense fallback={<SectionFallback />}>
            <SolutionOverview />
          </Suspense>
        </section>
        
        <section id="team">
          <Suspense fallback={<SectionFallback />}>
            <TeamSection />
          </Suspense>
        </section>
        
        <section id={sectionIds.contact}>
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