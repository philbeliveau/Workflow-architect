import { lazy, Suspense } from 'react';
import Navigation from '@/components/sections/Navigation';
import { LoadingSpinner } from '@/components/ui/LoadingSpinner';
import { TrendingUp, Clock, Users, Zap, Code, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { getTranslations } from 'next-intl/server';

const Footer = lazy(() => import('@/components/sections/Footer'));

const SectionFallback = () => (
  <div className="flex items-center justify-center py-16">
    <LoadingSpinner size="lg" aria-label="Loading section..." />
  </div>
);

export default async function GayedTradingSignalsPage({
  params
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations('gayed_trading_signals');

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
              {t('meta.backToBlog')}
            </Link>
          </div>

          {/* Article Header */}
          <article className="max-w-4xl mx-auto px-6">
            <header className="mb-12">
              <div className="flex items-center gap-4 mb-6">
                <span className="px-3 py-1 bg-accent-purple/20 text-accent-purple rounded-full text-sm font-medium">
                  {t('meta.category')}
                </span>
                <div className="flex items-center gap-2 text-text-secondary text-sm">
                  <Clock className="w-4 h-4" />
                  {t('meta.readTime')}
                </div>
                <span className="text-text-secondary text-sm">{t('meta.date')}</span>
              </div>
              
              <h1 className="text-h1 font-bold text-text-primary mb-6 leading-tight">
                {t('title')}
              </h1>
              
              <p className="text-xl text-text-secondary leading-relaxed">
                {t('subtitle')}
              </p>
            </header>

            {/* Article Content */}
            <div className="prose prose-invert max-w-none">
              
              {/* Hero Image Placeholder */}
              <div className="mb-12 rounded-lg overflow-hidden bg-primary-800/50 border border-primary-700">
                <div className="relative h-64 bg-gradient-to-br from-primary-blue/20 to-accent-purple/20 flex items-center justify-center">
                  <div className="text-center">
                    <TrendingUp className="w-16 h-16 text-primary-blue mx-auto mb-4" />
                    <p className="text-text-secondary font-medium">{t('dashboard.placeholder.title')}</p>
                    <p className="text-sm text-text-muted">{t('dashboard.placeholder.subtitle')}</p>
                  </div>
                </div>
              </div>

              <section className="mb-12">
                <h2 className="text-h2 font-bold text-text-primary mb-6">{t('context.title')}</h2>
                <p className="text-text-secondary mb-4">
                  {t('context.description')}
                </p>
                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  <div className="bg-primary-900/30 p-4 rounded-lg">
                    <h4 className="text-primary-blue font-semibold mb-2">{t('context.signals.lrot.title')}</h4>
                    <p className="text-sm text-text-secondary">{t('context.signals.lrot.description')}</p>
                  </div>
                  <div className="bg-primary-900/30 p-4 rounded-lg">
                    <h4 className="text-primary-blue font-semibold mb-2">{t('context.signals.sector.title')}</h4>
                    <p className="text-sm text-text-secondary">{t('context.signals.sector.description')}</p>
                  </div>
                  <div className="bg-primary-900/30 p-4 rounded-lg">
                    <h4 className="text-primary-blue font-semibold mb-2">{t('context.signals.riskOnOff.title')}</h4>
                    <p className="text-sm text-text-secondary">{t('context.signals.riskOnOff.description')}</p>
                  </div>
                  <div className="bg-primary-900/30 p-4 rounded-lg">
                    <h4 className="text-primary-blue font-semibold mb-2">{t('context.signals.volatility.title')}</h4>
                    <p className="text-sm text-text-secondary">{t('context.signals.volatility.description')}</p>
                  </div>
                </div>
                <p className="text-text-secondary">
                  {t('context.challenge')}
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-h2 font-bold text-text-primary mb-6">{t('approach.title')}</h2>
                
                <div className="bg-error-red/10 border-l-4 border-error-red p-6 rounded-r-lg mb-6">
                  <h3 className="text-xl font-semibold text-text-primary mb-3">{t('approach.traditional.title')}</h3>
                  <ol className="space-y-2 text-text-secondary">
                    <li>1. <strong>Semaine 1 :</strong> {t('approach.traditional.steps.week1')}</li>
                    <li>2. <strong>Semaine 2 :</strong> {t('approach.traditional.steps.week2')}</li>
                    <li>3. <strong>Semaine 3 :</strong> {t('approach.traditional.steps.week3')}</li>
                    <li>4. <strong>Semaine 4 :</strong> {t('approach.traditional.steps.week4')}</li>
                  </ol>
                  <p className="mt-3 text-sm text-text-muted">
                    <em>{t('approach.traditional.risks')}</em>
                  </p>
                </div>

                <div className="bg-success-green/10 border-l-4 border-success-green p-6 rounded-r-lg">
                  <h3 className="text-xl font-semibold text-text-primary mb-3">{t('approach.agentic.title')}</h3>
                  <div className="grid md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <h4 className="font-semibold text-primary-blue">{t('approach.agentic.phase1.title')}</h4>
                      <ul className="text-sm text-text-secondary space-y-1">
                        <li>• {t('approach.agentic.phase1.task1')}</li>
                        <li>• {t('approach.agentic.phase1.task2')}</li>
                        <li>• {t('approach.agentic.phase1.task3')}</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary-blue">{t('approach.agentic.phase2.title')}</h4>
                      <ul className="text-sm text-text-secondary space-y-1">
                        <li>• {t('approach.agentic.phase2.task1')}</li>
                        <li>• {t('approach.agentic.phase2.task2')}</li>
                        <li>• {t('approach.agentic.phase2.task3')}</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary-blue">{t('approach.agentic.phase3.title')}</h4>
                      <ul className="text-sm text-text-secondary space-y-1">
                        <li>• {t('approach.agentic.phase3.task1')}</li>
                        <li>• {t('approach.agentic.phase3.task2')}</li>
                        <li>• {t('approach.agentic.phase3.task3')}</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              <section className="mb-12">
                <h2 className="text-h2 font-bold text-text-primary mb-6">Architecture du swarm de trading</h2>
                
                {/* Architecture Diagram Placeholder */}
                <div className="mb-8 rounded-lg overflow-hidden bg-primary-800/50 border border-primary-700">
                  <div className="relative h-80 bg-gradient-to-br from-background-dark to-primary-900 flex items-center justify-center">
                    <div className="text-center">
                      <Code className="w-20 h-20 text-accent-purple mx-auto mb-4" />
                      <p className="text-text-secondary font-medium mb-2">Swarm Architecture Diagram</p>
                      <p className="text-sm text-text-muted">8 specialized agents working in parallel</p>
                      <div className="mt-4 flex justify-center gap-2">
                        <div className="w-2 h-2 bg-primary-blue rounded-full animate-pulse"></div>
                        <div className="w-2 h-2 bg-accent-purple rounded-full animate-pulse delay-200"></div>
                        <div className="w-2 h-2 bg-success-green rounded-full animate-pulse delay-400"></div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                  <div className="bg-primary-900/50 p-4 rounded-lg border border-primary-blue/30">
                    <h4 className="text-primary-blue font-semibold mb-2">{t('architecture.agents.research.title')}</h4>
                    <p className="text-xs text-text-secondary">{t('architecture.agents.research.description')}</p>
                  </div>
                  <div className="bg-primary-900/50 p-4 rounded-lg border border-accent-purple/30">
                    <h4 className="text-accent-purple font-semibold mb-2">{t('architecture.agents.architecture.title')}</h4>
                    <p className="text-xs text-text-secondary">{t('architecture.agents.architecture.description')}</p>
                  </div>
                  <div className="bg-primary-900/50 p-4 rounded-lg border border-success-green/30">
                    <h4 className="text-success-green font-semibold mb-2">{t('architecture.agents.implementation.title')}</h4>
                    <p className="text-xs text-text-secondary">{t('architecture.agents.implementation.description')}</p>
                  </div>
                  <div className="bg-primary-900/50 p-4 rounded-lg border border-accent-yellow/30">
                    <h4 className="text-accent-yellow font-semibold mb-2">{t('architecture.agents.testing.title')}</h4>
                    <p className="text-xs text-text-secondary">{t('architecture.agents.testing.description')}</p>
                  </div>
                  <div className="bg-primary-900/50 p-4 rounded-lg border border-accent-red/30">
                    <h4 className="text-accent-red font-semibold mb-2">{t('architecture.agents.data.title')}</h4>
                    <p className="text-xs text-text-secondary">{t('architecture.agents.data.description')}</p>
                  </div>
                  <div className="bg-primary-900/50 p-4 rounded-lg border border-primary-blue/30">
                    <h4 className="text-primary-blue font-semibold mb-2">{t('architecture.agents.ui.title')}</h4>
                    <p className="text-xs text-text-secondary">{t('architecture.agents.ui.description')}</p>
                  </div>
                  <div className="bg-primary-900/50 p-4 rounded-lg border border-accent-purple/30">
                    <h4 className="text-accent-purple font-semibold mb-2">{t('architecture.agents.monitoring.title')}</h4>
                    <p className="text-xs text-text-secondary">{t('architecture.agents.monitoring.description')}</p>
                  </div>
                  <div className="bg-primary-900/50 p-4 rounded-lg border border-success-green/30">
                    <h4 className="text-success-green font-semibold mb-2">{t('architecture.agents.coordinator.title')}</h4>
                    <p className="text-xs text-text-secondary">{t('architecture.agents.coordinator.description')}</p>
                  </div>
                </div>
              </section>

              <section className="mb-12">
                <h2 className="text-h2 font-bold text-text-primary mb-6">Implémentation technique détaillée</h2>
                
                <div className="bg-primary-900/30 rounded-lg p-6 mb-6">
                  <h3 className="text-xl font-semibold text-text-primary mb-4">🔢 Exemple : Implémentation du LROT Signal</h3>
                  <p className="text-text-secondary mb-4">
                    Le Lead-Lag Relationships Over Time (LROT) analyse les corrélations retardées entre différents actifs 
                    pour identifier les signaux précurseurs.
                  </p>
                  
                  <div className="bg-background-dark rounded p-4 mb-4">
                    <pre className="text-sm text-success-green overflow-x-auto">
{`// Exemple de logique simplifiée du LROT
class LROTSignal {
  calculateLeadLagCorrelation(asset1, asset2, maxLag = 20) {
    let maxCorr = 0;
    let optimalLag = 0;
    
    for (let lag = 1; lag <= maxLag; lag++) {
      const correlation = this.correlation(
        asset1.slice(lag),
        asset2.slice(0, -lag)
      );
      
      if (Math.abs(correlation) > Math.abs(maxCorr)) {
        maxCorr = correlation;
        optimalLag = lag;
      }
    }
    
    return { correlation: maxCorr, lag: optimalLag };
  }
}`}
                    </pre>
                  </div>
                  
                  <p className="text-sm text-text-muted">
                    <em>Note : Ceci est une version simplifiée. L'implémentation réelle inclut des optimisations pour 
                    les calculs temps réel et la gestion de la stationnarité des séries temporelles.</em>
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-primary-900/30 rounded-lg p-6">
                    <h4 className="font-semibold text-primary-blue mb-3">⚡ Optimisations Performance</h4>
                    <ul className="space-y-2 text-sm text-text-secondary">
                      <li>• Calculs vectorisés avec NumPy/Pandas</li>
                      <li>• Cache intelligent des corrélations</li>
                      <li>• Mise à jour incrémentale des signaux</li>
                      <li>• Pool de workers pour calculs parallèles</li>
                    </ul>
                  </div>
                  <div className="bg-primary-900/30 rounded-lg p-6">
                    <h4 className="font-semibold text-accent-purple mb-3">🛡️ Gestion des Erreurs</h4>
                    <ul className="space-y-2 text-sm text-text-secondary">
                      <li>• Validation des données en entrée</li>
                      <li>• Fallback sur données alternatives</li>
                      <li>• Alertes automatiques en cas d'anomalie</li>
                      <li>• Historique des erreurs et diagnostics</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section className="mb-12">
                <h2 className="text-h2 font-bold text-text-primary mb-6">Dashboard et interface utilisateur</h2>
                
                {/* Dashboard Screenshot Placeholder */}
                <div className="mb-8 rounded-lg overflow-hidden bg-primary-800/50 border border-primary-700">
                  <div className="relative h-96 bg-gradient-to-br from-background-dark via-primary-900 to-background-dark-alt">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <div className="grid grid-cols-3 gap-4 mb-6">
                          <div className="w-16 h-12 bg-success-green/30 rounded animate-pulse"></div>
                          <div className="w-16 h-12 bg-primary-blue/30 rounded animate-pulse delay-200"></div>
                          <div className="w-16 h-12 bg-accent-purple/30 rounded animate-pulse delay-400"></div>
                        </div>
                        <div className="w-64 h-32 bg-primary-blue/20 rounded-lg mx-auto mb-4 animate-pulse"></div>
                        <p className="text-text-secondary font-medium mb-2">Interactive Trading Dashboard</p>
                        <p className="text-sm text-text-muted">Live signals, performance metrics, and risk analysis</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  <div className="bg-primary-900/30 rounded-lg p-6">
                    <h4 className="font-semibold text-success-green mb-3">📈 Signaux en Temps Réel</h4>
                    <ul className="space-y-2 text-sm text-text-secondary">
                      <li>• Mise à jour toutes les 5 secondes</li>
                      <li>• Alertes configurables par signal</li>
                      <li>• Historique des signaux sur 2 ans</li>
                      <li>• Export des données CSV/JSON</li>
                    </ul>
                  </div>
                  <div className="bg-primary-900/30 rounded-lg p-6">
                    <h4 className="font-semibold text-primary-blue mb-3">📊 Analytics Avancées</h4>
                    <ul className="space-y-2 text-sm text-text-secondary">
                      <li>• Backtesting automatisé</li>
                      <li>• Métriques de Sharpe et Sortino</li>
                      <li>• Analysis de drawdown</li>
                      <li>• Corrélations inter-signaux</li>
                    </ul>
                  </div>
                  <div className="bg-primary-900/30 rounded-lg p-6">
                    <h4 className="font-semibold text-accent-purple mb-3">⚙️ Configuration</h4>
                    <ul className="space-y-2 text-sm text-text-secondary">
                      <li>• Paramètres ajustables par signal</li>
                      <li>• Profils de risque personnalisés</li>
                      <li>• Intégration API externe</li>
                      <li>• Notifications multi-canaux</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section className="mb-12">
                <h2 className="text-h2 font-bold text-text-primary mb-6">Résultats et métriques de performance</h2>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                  <div className="bg-success-green/10 border border-success-green/30 rounded-lg p-6 text-center">
                    <div className="text-3xl font-bold text-success-green mb-2">4h</div>
                    <div className="text-sm text-text-secondary">Temps de développement</div>
                    <div className="text-xs text-text-muted mt-1">vs 3 semaines traditionnelles</div>
                  </div>
                  <div className="bg-primary-blue/10 border border-primary-blue/30 rounded-lg p-6 text-center">
                    <div className="text-3xl font-bold text-primary-blue mb-2">93.8%</div>
                    <div className="text-sm text-text-secondary">Précision moyenne</div>
                    <div className="text-xs text-text-muted mt-1">Sur 5 signaux validés</div>
                  </div>
                  <div className="bg-accent-purple/10 border border-accent-purple/30 rounded-lg p-6 text-center">
                    <div className="text-3xl font-bold text-accent-purple mb-2">99.97%</div>
                    <div className="text-sm text-text-secondary">Uptime production</div>
                    <div className="text-xs text-text-muted mt-1">6 mois d'opération</div>
                  </div>
                  <div className="bg-accent-yellow/10 border border-accent-yellow/30 rounded-lg p-6 text-center">
                    <div className="text-3xl font-bold text-accent-yellow mb-2">&lt;100ms</div>
                    <div className="text-sm text-text-secondary">Latence moyenne</div>
                    <div className="text-xs text-text-muted mt-1">Calcul des signaux</div>
                  </div>
                </div>

                <div className="bg-primary-900/30 rounded-lg p-6 mb-6">
                  <h3 className="text-xl font-semibold text-text-primary mb-4">📈 Performance par Signal</h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 bg-background-dark/50 rounded">
                      <span className="font-medium text-text-primary">LROT Signal</span>
                      <div className="flex items-center gap-4">
                        <span className="text-success-green">94.2% précision</span>
                        <span className="text-sm text-text-muted">2.1 Sharpe</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between p-4 bg-background-dark/50 rounded">
                      <span className="font-medium text-text-primary">Sector Rotation</span>
                      <div className="flex items-center gap-4">
                        <span className="text-success-green">91.7% précision</span>
                        <span className="text-sm text-text-muted">1.8 Sharpe</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between p-4 bg-background-dark/50 rounded">
                      <span className="font-medium text-text-primary">Risk On/Off</span>
                      <div className="flex items-center gap-4">
                        <span className="text-success-green">96.1% précision</span>
                        <span className="text-sm text-text-muted">2.4 Sharpe</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between p-4 bg-background-dark/50 rounded">
                      <span className="font-medium text-text-primary">Volatility Regime</span>
                      <div className="flex items-center gap-4">
                        <span className="text-success-green">89.3% précision</span>
                        <span className="text-sm text-text-muted">1.6 Sharpe</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between p-4 bg-background-dark/50 rounded">
                      <span className="font-medium text-text-primary">Momentum Cross</span>
                      <div className="flex items-center gap-4">
                        <span className="text-success-green">97.8% précision</span>
                        <span className="text-sm text-text-muted">2.7 Sharpe</span>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <section className="mb-12">
                <h2 className="text-h2 font-bold text-text-primary mb-6">Leçons apprises et bonnes pratiques</h2>
                
                <div className="space-y-6">
                  <div className="bg-success-green/10 border-l-4 border-success-green p-6 rounded-r-lg">
                    <h3 className="text-xl font-semibold text-text-primary mb-3">✅ Ce qui a fonctionné</h3>
                    <ul className="space-y-2 text-text-secondary">
                      <li><strong>Spécialisation des agents :</strong> Chaque agent avait un domaine d'expertise clair</li>
                      <li><strong>Validation croisée :</strong> Les résultats de chaque agent étaient vérifiés par d'autres</li>
                      <li><strong>Itération rapide :</strong> Cycles de feedback de 15 minutes maximum</li>
                      <li><strong>Documentation automatique :</strong> Chaque agent documentait ses décisions</li>
                    </ul>
                  </div>
                  
                  <div className="bg-accent-yellow/10 border-l-4 border-accent-yellow p-6 rounded-r-lg">
                    <h3 className="text-xl font-semibold text-text-primary mb-3">⚠️ Défis rencontrés</h3>
                    <ul className="space-y-2 text-text-secondary">
                      <li><strong>Coordination initiale :</strong> 30 min perdues sur la synchronisation des agents</li>
                      <li><strong>Données manquantes :</strong> Quelques sources de données étaient indisponibles</li>
                      <li><strong>Optimisation prématurée :</strong> Certains agents ont sur-optimisé trop tôt</li>
                      <li><strong>Tests d'intégration :</strong> Complexité des interactions entre signaux</li>
                    </ul>
                  </div>
                  
                  <div className="bg-primary-blue/10 border-l-4 border-primary-blue p-6 rounded-r-lg">
                    <h3 className="text-xl font-semibold text-text-primary mb-3">🚀 Améliorations futures</h3>
                    <ul className="space-y-2 text-text-secondary">
                      <li><strong>ML Adaptive :</strong> Signaux qui s'adaptent automatiquement aux conditions de marché</li>
                      <li><strong>Signaux composites :</strong> Combinaisons intelligentes de plusieurs signaux</li>
                      <li><strong>Backtesting distribué :</strong> Tests parallèles sur plusieurs périodes historiques</li>
                      <li><strong>API publique :</strong> Accès externe pour d'autres traders et institutions</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section className="mb-12">
                <div className="bg-gradient-to-r from-primary-blue/10 to-accent-purple/10 rounded-lg p-8 border border-primary-blue/20">
                  <h2 className="text-h2 font-bold text-text-primary mb-4">
                    Conclusion : l'avenir du développement financier
                  </h2>
                  <p className="text-text-secondary mb-6">
                    Ce projet démontre comment l'approche agentique peut transformer radicalement le développement 
                    de systèmes financiers complexes. En 4 heures, nous avons accompli ce qui aurait pris des semaines 
                    à une équipe traditionnelle, avec une précision et une fiabilité supérieures.
                  </p>
                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <h4 className="font-semibold text-primary-blue mb-3">🎯 Points clés à retenir</h4>
                      <ul className="space-y-1 text-sm text-text-secondary">
                        <li>• La spécialisation des agents maximise l'expertise</li>
                        <li>• La validation croisée garantit la qualité</li>
                        <li>• L'itération rapide permet l'amélioration continue</li>
                        <li>• La documentation automatique facilite la maintenance</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-accent-purple mb-3">🔮 Perspectives</h4>
                      <ul className="space-y-1 text-sm text-text-secondary">
                        <li>• Signaux adaptatifs avec machine learning</li>
                        <li>• Intégration de données alternatives (sentiment, news)</li>
                        <li>• Expansion vers d'autres classes d'actifs</li>
                        <li>• Plateforme collaborative pour d'autres chercheurs</li>
                      </ul>
                    </div>
                  </div>
                  <div className="text-center">
                    <p className="text-text-muted text-sm mb-4">
                      Intéressé par l'implémentation de signaux de trading avec des agents IA ?
                    </p>
                    <button className="bg-primary-blue text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-blue-dark transition-colors">
                      Découvrir notre formation
                    </button>
                  </div>
                </div>
              </section>
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
  title: "Signaux de Trading IA - 5 Papiers en 4h | NEWCODE",
  description: "Comment transformer 5 papiers académiques de Michael Gayed en signaux de trading automatisés en 4 heures avec un swarm d'agents IA spécialisés.",
};