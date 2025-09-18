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
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-background-dark via-background-dark-alt to-background-dark">
      {/* Background with gradient and pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-72 h-72 bg-primary-blue/30 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent-yellow/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary-blue/10 rounded-full blur-3xl opacity-15 animate-pulse delay-2000"></div>
        </div>
        
        {/* Background grid pattern with squares */}
        <div className="absolute inset-0 opacity-5">
          <div className="grid grid-cols-12 gap-2 h-full p-4">
            {Array.from({ length: 144 }, (_, i) => (
              <div 
                key={i} 
                className="bg-text-secondary rounded-sm animate-pulse" 
                style={{
                  animationDelay: `${i * 0.05}s`,
                  animationDuration: '3s'
                }}
              ></div>
            ))}
          </div>
        </div>
      </div>

      <div className="relative z-10">
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
    </div>
  );
}