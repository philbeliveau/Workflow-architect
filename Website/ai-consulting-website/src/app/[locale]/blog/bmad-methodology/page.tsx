import { lazy, Suspense } from 'react';
import Navigation from '@/components/sections/Navigation';
import { LoadingSpinner } from '@/components/ui/LoadingSpinner';
import { CheckCircle } from 'lucide-react';
import { getTranslations } from 'next-intl/server';

// Lazy load components
const MethodologyWorkflowDiagram = lazy(() => import('@/components/sections/BMADWorkflowDiagram'));
const MethodologyContent = lazy(() => import('@/components/sections/BMADMethodologyContent'));
const Footer = lazy(() => import('@/components/sections/Footer'));

const SectionFallback = () => (
  <div className="flex items-center justify-center py-16">
    <LoadingSpinner size="lg" aria-label="Loading section..." />
  </div>
);

export default async function MethodologyPage({
  params
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations('methodology');

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
        {/* Hero Section with Diagram */}
        <section className="py-16 bg-gradient-to-br from-primary-900 via-background-dark to-primary-800">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              {/* Left Column - Text Content */}
              <div className="space-y-8">
                <div>
                  <h1 className="text-h1 font-bold mb-6 text-text-primary">
                    {t('title')}
                  </h1>
                  <p className="text-xl text-text-secondary leading-relaxed">
                    {t('subtitle')}
                  </p>
                </div>
                
                {/* Interactive Workflow Header */}
                <div className="border-t border-primary-700 pt-8">
                  <h2 className="text-h2 font-bold mb-4 text-text-primary">
                    {t('workflow.title')}
                  </h2>
                  <p className="text-lg text-text-secondary leading-relaxed">
                    {t('workflow.description')}
                  </p>
                </div>

                {/* Key Benefits */}
                <div className="bg-primary-800/50 rounded-xl p-6 border border-primary-700">
                  <h3 className="text-lg font-bold text-text-primary mb-4">{t('benefits.title')}</h3>
                  <ul className="space-y-3 text-text-secondary">
                    {[0, 1, 2, 3].map((index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-success-green mt-0.5 flex-shrink-0" />
                        <span>{t(`benefits.items.${index}`)}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Right Column - Interactive Diagram */}
              <div className="lg:sticky lg:top-24">
                <Suspense fallback={<SectionFallback />}>
                  <MethodologyWorkflowDiagram />
                </Suspense>
              </div>
            </div>
          </div>
        </section>

        {/* Methodology Content */}
        <section className="py-16">
          <Suspense fallback={<SectionFallback />}>
            <MethodologyContent />
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