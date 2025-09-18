import { lazy, Suspense } from 'react';
import Navigation from '@/components/sections/Navigation';
import { LoadingSpinner } from '@/components/ui/LoadingSpinner';
import { getTranslations } from 'next-intl/server';

// Lazy load components
const BMADWorkflowDiagram = lazy(() => import('@/components/sections/BMADWorkflowDiagram'));
const BMADMethodologyContent = lazy(() => import('@/components/sections/BMADMethodologyContent'));
const Footer = lazy(() => import('@/components/sections/Footer'));

const SectionFallback = () => (
  <div className="flex items-center justify-center py-16">
    <LoadingSpinner size="lg" aria-label="Loading section..." />
  </div>
);

export default async function BMADMethodologyPage({
  params
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  return (
    <div className="min-h-screen bg-gradient-to-br from-background-dark to-background-dark-alt">
      <Navigation />
      
      <main className="pt-24">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-br from-primary-900 via-background-dark to-primary-800">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <h1 className="text-h1 font-bold mb-6 text-text-primary">
              BMAD Method: Structured AI-Driven Development
            </h1>
            <p className="text-xl text-text-secondary max-w-4xl mx-auto leading-relaxed">
              Discover the complete workflow that transforms project ideas into production-ready applications 
              through intelligent agent collaboration and structured planning.
            </p>
          </div>
        </section>

        {/* Interactive Workflow Diagram */}
        <section className="py-16">
          <Suspense fallback={<SectionFallback />}>
            <BMADWorkflowDiagram />
          </Suspense>
        </section>

        {/* Methodology Content */}
        <section className="py-16">
          <Suspense fallback={<SectionFallback />}>
            <BMADMethodologyContent />
          </Suspense>
        </section>
      </main>
      
      <Suspense fallback={<SectionFallback />}>
        <Footer />
      </Suspense>
    </div>
  );
}