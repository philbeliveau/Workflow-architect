import { CheckCircle, ArrowRight, AlertTriangle, Shield, Target, RefreshCw, Zap } from 'lucide-react';
import Navigation from '@/components/sections/Navigation';
import Footer from '@/components/sections/Footer';
import { getTranslations } from 'next-intl/server';

export default async function ClaudeAlignmentTechniquesPage({
  params
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations('claude_alignment');

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-background-dark via-background-dark-alt to-background-dark">
      {/* Background with gradient and pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-72 h-72 bg-primary-blue/30 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent-yellow/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary-blue/10 rounded-full blur-3xl opacity-15 animate-pulse delay-2000"></div>
        </div>
      </div>

      <div className="relative z-10">
        <Navigation />
      
        <main className="pt-24">
          {/* Hero Section */}
          <section className="py-16 bg-gradient-to-br from-primary-900 via-background-dark to-primary-800">
            <div className="max-w-4xl mx-auto px-6">
              <div className="text-center mb-12">
                <h1 className="text-4xl lg:text-5xl font-bold mb-6 text-text-primary">
                  {t('title')}
                </h1>
                <p className="text-xl text-text-secondary leading-relaxed max-w-3xl mx-auto">
                  {t('subtitle')}
                </p>
              </div>

              {/* Key Results */}
              <div className="bg-primary-800/50 rounded-xl p-8 border border-primary-700">
                <h2 className="text-2xl font-bold text-text-primary mb-6 text-center">{t('results.title')}</h2>
                <div className="grid md:grid-cols-3 gap-6 text-center">
                  <div className="space-y-3">
                    <Target className="w-8 h-8 text-success-green mx-auto" />
                    <h3 className="font-semibold text-text-primary">{t('results.performance.title')}</h3>
                    <p className="text-text-secondary text-sm">{t('results.performance.description')}</p>
                  </div>
                  <div className="space-y-3">
                    <Shield className="w-8 h-8 text-accent-yellow mx-auto" />
                    <h3 className="font-semibold text-text-primary">{t('results.compliance.title')}</h3>
                    <p className="text-text-secondary text-sm">{t('results.compliance.description')}</p>
                  </div>
                  <div className="space-y-3">
                    <Zap className="w-8 h-8 text-primary-blue mx-auto" />
                    <h3 className="font-semibold text-text-primary">{t('results.errors.title')}</h3>
                    <p className="text-text-secondary text-sm">{t('results.errors.description')}</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Main Content */}
          <section className="py-16">
            <div className="max-w-4xl mx-auto px-6 space-y-16">
              
              {/* Philosophy Section */}
              <div className="space-y-8">
                <h2 className="text-3xl font-bold text-text-primary">{t('philosophy.title')}</h2>
                
                <div className="prose prose-lg text-text-secondary space-y-6">
                  <p>
                    {t('philosophy.description')}
                  </p>
                  
                  <div className="bg-warning-orange/10 border-l-4 border-warning-orange p-6 rounded-r-lg">
                    <h3 className="text-xl font-semibold text-text-primary mb-3">{t('philosophy.challenge.title')}</h3>
                    <p>
                      {t('philosophy.challenge.description')}
                    </p>
                    <p className="mt-3">
                      {t('philosophy.challenge.details')}
                    </p>
                  </div>
                </div>
              </div>

              {/* Case Study */}
              <div className="space-y-8">
                <h2 className="text-3xl font-bold text-text-primary">{t('case_study.title')}</h2>
                
                <div className="prose prose-lg text-text-secondary space-y-6">
                  <p>
                    {t('case_study.description')}
                  </p>
                  
                  <div className="bg-error-red/10 border-l-4 border-error-red p-6 rounded-r-lg">
                    <h3 className="text-xl font-semibold text-text-primary mb-3">{t('case_study.problem.title')}</h3>
                    <p className="mb-4">{t('case_study.problem.description')}</p>
                    
                    <div className="space-y-3">
                      {[0, 1, 2, 3].map((index) => (
                        <div key={index} className="flex items-start gap-3 p-3 bg-background-dark/50 rounded-lg">
                          <AlertTriangle className="w-5 h-5 text-error-red mt-0.5 flex-shrink-0" />
                          <span>{t(`case_study.problem.issue${index}`)}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* What Really Works */}
              <div className="space-y-8">
                <h2 className="text-3xl font-bold text-text-primary">{t('solution.title')}</h2>
                
                <div className="prose prose-lg text-text-secondary space-y-6">
                  <p>
                    {t('solution.description')}
                  </p>
                  
                  <div className="bg-success-green/10 border-l-4 border-success-green p-6 rounded-r-lg">
                    <h3 className="text-xl font-semibold text-text-primary mb-3">{t('solution.method.title')}</h3>
                    <p className="mb-4">{t('solution.method.description')}</p>
                    
                    <div className="bg-background-dark/50 p-4 rounded-lg border border-success-green/30 mb-4">
                      <pre className="text-sm text-text-secondary whitespace-pre-wrap">
{t('solution.method.prompt1')}
                      </pre>
                    </div>
                    
                    <p className="mb-4">{t('solution.method.alternative')}</p>
                    
                    <div className="bg-background-dark/50 p-4 rounded-lg border border-success-green/30">
                      <pre className="text-sm text-text-secondary whitespace-pre-wrap">
{t('solution.method.prompt2')}
                      </pre>
                    </div>
                    
                    <p className="mt-4">
                      <strong>{t('solution.method.result_prefix')}</strong> {t('solution.method.result')}
                    </p>
                  </div>
                </div>
              </div>

              {/* Key Lessons */}
              <div className="space-y-8">
                <h2 className="text-3xl font-bold text-text-primary">{t('lessons.title')}</h2>
                
                <div className="space-y-6">
                  <div className="bg-primary-800/50 rounded-xl p-6 border border-primary-700">
                    <h3 className="text-xl font-bold text-text-primary mb-3">{t('lessons.lesson1.title')}</h3>
                    <p className="text-text-secondary">
                      {t('lessons.lesson1.description')}
                    </p>
                  </div>
                  
                  <div className="bg-primary-800/50 rounded-xl p-6 border border-primary-700">
                    <h3 className="text-xl font-bold text-text-primary mb-3">{t('lessons.lesson2.title')}</h3>
                    <p className="text-text-secondary">
                      {t('lessons.lesson2.description')}
                    </p>
                  </div>
                  
                  <div className="bg-primary-800/50 rounded-xl p-6 border border-primary-700">
                    <h3 className="text-xl font-bold text-text-primary mb-3">{t('lessons.lesson3.title')}</h3>
                    <p className="text-text-secondary mb-4">{t('lessons.lesson3.description')}</p>
                    <ul className="space-y-2 text-text-secondary">
                      {[0, 1, 2].map((index) => (
                        <li key={index} className="flex items-start gap-3">
                          <RefreshCw className="w-5 h-5 text-primary-blue mt-0.5 flex-shrink-0" />
                          <span>{t(`lessons.lesson3.point${index}`)}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Conclusion */}
              <div className="space-y-8">
                <h2 className="text-3xl font-bold text-text-primary">{t('conclusion.title')}</h2>
                
                <div className="prose prose-lg text-text-secondary space-y-6">
                  <p>
                    {t('conclusion.intro')}
                  </p>
                  
                  <div className="space-y-4">
                    {[0, 1, 2, 3].map((index) => (
                      <div key={index} className="flex items-start gap-4 p-4 bg-success-green/10 rounded-lg border-l-4 border-success-green">
                        <CheckCircle className="w-5 h-5 text-success-green mt-0.5 flex-shrink-0" />
                        <span className="font-semibold text-text-primary">{t(`conclusion.achievement${index}`)}</span>
                      </div>
                    ))}
                  </div>
                  
                  <p>
                    {t('conclusion.summary')}
                  </p>
                </div>
              </div>

              {/* CTA */}
              <div className="bg-gradient-to-r from-primary-blue to-primary-purple rounded-xl p-8 text-center">
                <h3 className="text-2xl font-bold text-white mb-4">
                  {t('cta.title')}
                </h3>
                <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
                  {t('cta.description')}
                </p>
                <button className="bg-white text-primary-blue px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                  {t('cta.button')}
                </button>
              </div>
            </div>
          </section>
        </main>
        
        <Footer />
      </div>
    </div>
  );
}