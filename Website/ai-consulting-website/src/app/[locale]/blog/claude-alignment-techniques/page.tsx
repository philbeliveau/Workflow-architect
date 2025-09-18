import { lazy, Suspense } from 'react';
import Navigation from '@/components/sections/Navigation';
import { LoadingSpinner } from '@/components/ui/LoadingSpinner';
import { Shield, Clock, Brain, Zap, Code, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

const Footer = lazy(() => import('@/components/sections/Footer'));

const SectionFallback = () => (
  <div className="flex items-center justify-center py-16">
    <LoadingSpinner size="lg" aria-label="Loading section..." />
  </div>
);

export default async function ClaudeAlignmentPage({
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
        </div>
      </div>

      <div className="relative z-10">
        <Navigation />
      
        <main className="pt-24">
          {/* Back to Blog */}
          <div className="max-w-4xl mx-auto px-6 mb-8">
            <Link 
              href="/blog"
              className="inline-flex items-center gap-2 text-primary-blue hover:text-primary-blue-light transition-colors font-medium"
            >
              <ArrowLeft className="w-4 h-4" />
              Retour au blog
            </Link>
          </div>

          {/* Article Header */}
          <article className="max-w-4xl mx-auto px-6">
            <header className="mb-12">
              <div className="flex items-center gap-4 mb-6">
                <span className="px-3 py-1 bg-accent-red/20 text-accent-red rounded-full text-sm font-medium">
                  IA & Développement
                </span>
                <div className="flex items-center gap-2 text-text-secondary text-sm">
                  <Clock className="w-4 h-4" />
                  12 min de lecture
                </div>
                <span className="text-text-secondary text-sm">2025-01-15</span>
              </div>
              
              <h1 className="text-h1 font-bold text-text-primary mb-6 leading-tight">
                Comment J'ai Contraint Claude : Techniques d'Alignement et Persistance des Contraintes
              </h1>
              
              <p className="text-xl text-text-secondary leading-relaxed">
                Quand j'ai commencé à travailler avec Claude sur l'extraction de données personnelles (PII), 
                j'ai rapidement découvert un problème majeur : Claude avait tendance à prendre des raccourcis. 
                Voici comment j'ai résolu ce problème avec une architecture de contraintes robuste.
              </p>
            </header>

            {/* Article Content */}
            <div className="prose prose-invert max-w-none">
              <div className="bg-primary-900/50 rounded-lg p-6 mb-8">
                <h3 className="text-accent-red mb-4 flex items-center gap-2">
                  <Shield className="w-5 h-5" />
                  Le Problème
                </h3>
                <p className="text-text-secondary">
                  Claude prenait des raccourcis dans l'extraction de données personnelles, 
                  compromettant la précision et la conformité des résultats.
                </p>
              </div>

              <div className="bg-primary-900/50 rounded-lg p-6 mb-8">
                <h3 className="text-primary-blue mb-4 flex items-center gap-2">
                  <Brain className="w-5 h-5" />
                  La Solution
                </h3>
                <p className="text-text-secondary">
                  Architecture de contraintes avec CLAUDE.md et mémoire persistante pour 
                  maintenir l'alignement sur les exigences fonctionnelles.
                </p>
              </div>

              <div className="bg-primary-900/50 rounded-lg p-6 mb-8">
                <h3 className="text-success-green mb-4 flex items-center gap-2">
                  <Zap className="w-5 h-5" />
                  Les Résultats
                </h3>
                <ul className="text-text-secondary space-y-2">
                  <li>• +66.6% performance vs version non-alignée</li>
                  <li>• 100% conformité fonctionnelle maintenue</li>
                  <li>• 0% erreur en production depuis 6 mois</li>
                </ul>
              </div>

              <div className="bg-background-dark-alt/50 rounded-lg p-6 mb-8">
                <h3 className="text-h3 font-bold text-text-primary mb-4">
                  Techniques d'Alignement Clés
                </h3>
                
                <div className="space-y-4">
                  <div className="border-l-4 border-primary-blue pl-4">
                    <h4 className="font-semibold text-text-primary mb-2">CLAUDE.md comme Source de Vérité</h4>
                    <p className="text-text-secondary text-sm">
                      Utilisation d'un fichier de configuration central pour définir les contraintes 
                      et les exigences que Claude doit respecter en permanence.
                    </p>
                  </div>
                  
                  <div className="border-l-4 border-accent-purple pl-4">
                    <h4 className="font-semibold text-text-primary mb-2">Mémoire Persistante</h4>
                    <p className="text-text-secondary text-sm">
                      Système de mémoire qui maintient le contexte des contraintes 
                      entre les sessions pour éviter la dégradation des performances.
                    </p>
                  </div>
                  
                  <div className="border-l-4 border-accent-yellow pl-4">
                    <h4 className="font-semibold text-text-primary mb-2">Validation Continue</h4>
                    <p className="text-text-secondary text-sm">
                      Mécanismes de validation automatique pour s'assurer que 
                      Claude respecte les contraintes à chaque étape du processus.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-12 p-8 bg-gradient-to-r from-accent-red/10 to-primary-blue/10 rounded-lg border border-accent-red/20">
                <h3 className="text-h2 font-bold text-text-primary mb-4">
                  Article complet bientôt disponible
                </h3>
                <p className="text-text-secondary">
                  L'article détaillé incluera :
                </p>
                <ul className="mt-4 space-y-2 text-text-secondary">
                  <li>• L'architecture complète du système de contraintes</li>
                  <li>• Les exemples de CLAUDE.md avec annotations</li>
                  <li>• Les métriques de performance détaillées</li>
                  <li>• Le code source des validateurs automatiques</li>
                  <li>• Les patterns d'alignement pour différents cas d'usage</li>
                </ul>
              </div>
            </div>
          </article>
        </main>
      
        <Suspense fallback={<SectionFallback />}>
          <Footer />
        </Suspense>
      </div>
    </div>
  );
}

export const metadata = {
  title: "Alignement Claude : Contraintes et PII | NEWCODE",
  description: "Techniques avancées d'alignement Claude pour l'extraction de données personnelles avec architecture de contraintes et mémoire persistante.",
};