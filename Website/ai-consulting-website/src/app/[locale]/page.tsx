import { lazy, Suspense } from 'react';
import Navigation from '@/components/sections/Navigation';
import HeroBanner from '@/components/sections/HeroBanner';
import { LoadingSpinner } from '@/components/ui/LoadingSpinner';
import { getTranslations } from 'next-intl/server';

// Lazy load components that are below the fold
const FormationOverview = lazy(() => import('@/components/sections/FormationOverview'));
const TechStackShowcase = lazy(() => import('@/components/sections/TechStackShowcase'));
const TargetAudienceInteractive = lazy(() => import('@/components/sections/TargetAudienceInteractive'));
const TrackSelection = lazy(() => import('@/components/sections/TrackSelection'));
const FAQSection = lazy(() => import('@/components/sections/FAQSection'));
const TeamSection = lazy(() => import('@/components/sections/TeamSection'));
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
    ? { home: 'accueil', formation: 'formation', tools: 'outils', audience: 'public', pricing: 'tarifs', faq: 'faq', team: 'equipe', contact: 'contact' }
    : { home: 'home', formation: 'formation', tools: 'tools', audience: 'audience', pricing: 'pricing', faq: 'faq', team: 'team', contact: 'contact' };

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main id="main-content">
        <section id={sectionIds.home}>
          <HeroBanner />
        </section>
        
        
        <section id={sectionIds.formation}>
          <Suspense fallback={<SectionFallback />}>
            <FormationOverview />
          </Suspense>
        </section>
        
        <section id={sectionIds.tools}>
          <Suspense fallback={<SectionFallback />}>
            <TechStackShowcase />
          </Suspense>
        </section>
        
        <section id={sectionIds.audience}>
          <Suspense fallback={<SectionFallback />}>
            <TargetAudienceInteractive />
          </Suspense>
        </section>
        
        <section id="track-selection">
          <Suspense fallback={<SectionFallback />}>
            <TrackSelection />
          </Suspense>
        </section>
        
        
        <section id={sectionIds.team}>
          <Suspense fallback={<SectionFallback />}>
            <TeamSection />
          </Suspense>
        </section>
        
        <section id={sectionIds.faq}>
          <Suspense fallback={<SectionFallback />}>
            <FAQSection />
          </Suspense>
        </section>
        
      </main>
      
      <Suspense fallback={<SectionFallback />}>
        <Footer />
      </Suspense>
    </div>
  );
}