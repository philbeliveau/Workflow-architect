import { CheckCircle, ArrowRight, Zap, Target, Code, RefreshCw } from 'lucide-react';
import Navigation from '@/components/sections/Navigation';
import Footer from '@/components/sections/Footer';
import { getTranslations } from 'next-intl/server';

export default async function SPARCMethodologyPage({
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
      </div>

      <div className="relative z-10">
        <Navigation />
      
        <main className="pt-24">
          {/* Hero Section */}
          <section className="py-16 bg-gradient-to-br from-primary-900 via-background-dark to-primary-800">
            <div className="max-w-4xl mx-auto px-6">
              <div className="text-center mb-12">
                <h1 className="text-4xl lg:text-5xl font-bold mb-6 text-text-primary">
                  SPARC : La Méthodologie qui Structure le Développement par IA
                </h1>
                <p className="text-xl text-text-secondary leading-relaxed max-w-3xl mx-auto">
                  Découvrez comment diviser intelligemment vos projets en étapes vérifiables pour obtenir des résultats fiables avec les agents IA.
                </p>
              </div>

              {/* Key Benefits */}
              <div className="bg-primary-800/50 rounded-xl p-8 border border-primary-700">
                <h2 className="text-2xl font-bold text-text-primary mb-6 text-center">Pourquoi SPARC transforme le développement</h2>
                <div className="grid md:grid-cols-3 gap-6 text-center">
                  <div className="space-y-3">
                    <Zap className="w-8 h-8 text-accent-yellow mx-auto" />
                    <h3 className="font-semibold text-text-primary">3-5x plus rapide</h3>
                    <p className="text-text-secondary text-sm">Cycles de développement accélérés</p>
                  </div>
                  <div className="space-y-3">
                    <Target className="w-8 h-8 text-success-green mx-auto" />
                    <h3 className="font-semibold text-text-primary">Zéro ambiguïté</h3>
                    <p className="text-text-secondary text-sm">Chaque étape est claire et vérifiable</p>
                  </div>
                  <div className="space-y-3">
                    <RefreshCw className="w-8 h-8 text-primary-blue mx-auto" />
                    <h3 className="font-semibold text-text-primary">Amélioration continue</h3>
                    <p className="text-text-secondary text-sm">Chaque phase affine la précédente</p>
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
                <h2 className="text-3xl font-bold text-text-primary">Notre Philosophie – Tout séquencer et briser en morceaux</h2>
                
                <div className="prose prose-lg text-text-secondary space-y-6">
                  <p>
                    Le développement avec des agents IA puissants comme Claude ne repose pas sur des effets magiques. 
                    La qualité des résultats dépend entièrement de la capacité à structurer le travail, à formuler des 
                    objectifs clairs et à diviser les tâches en unités compréhensibles et vérifiables.
                  </p>
                  
                  <div className="bg-warning-orange/10 border-l-4 border-warning-orange p-6 rounded-r-lg">
                    <h3 className="text-xl font-semibold text-text-primary mb-3">Une erreur fréquente : vouloir trop en faire d'un seul coup</h3>
                    <p>
                      Au fil des évolutions des modèles, il devient tentant d'augmenter la charge de travail que l'on confie aux agents. 
                      On observe souvent le schéma suivant :
                    </p>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-start gap-4 p-4 bg-primary-800/30 rounded-lg">
                      <div className="w-8 h-8 bg-primary-blue rounded-full flex items-center justify-center text-sm font-bold text-white">1</div>
                      <p>D'abord, on développe des fonctionnalités simples avec un seul agent, souvent dans un environnement local ou via un outil comme Cursor.</p>
                    </div>
                    
                    <div className="flex items-start gap-4 p-4 bg-primary-800/30 rounded-lg">
                      <div className="w-8 h-8 bg-primary-blue rounded-full flex items-center justify-center text-sm font-bold text-white">2</div>
                      <p>Ensuite, on découvre Claude-Code et sa capacité à orchestrer plusieurs agents. On commence alors à déléguer des modules plus complexes, en pensant réduire le besoin de supervision.</p>
                    </div>
                    
                    <div className="flex items-start gap-4 p-4 bg-primary-800/30 rounded-lg">
                      <div className="w-8 h-8 bg-primary-blue rounded-full flex items-center justify-center text-sm font-bold text-white">3</div>
                      <p>Enfin, avec les capacités offertes par les swarms (groupes d'agents parallélisés), on tente de leur faire exécuter des blocs entiers de projet.</p>
                    </div>
                  </div>
                  
                  <p>
                    Ce processus conduit presque systématiquement à un résultat inverse : plus les tâches confiées sont grandes, 
                    plus le besoin de débogage manuel augmente. La montée en capacité technique ne doit jamais masquer la 
                    nécessité d'une discipline rigoureuse dans la gestion du travail.
                  </p>
                </div>
              </div>

              {/* SPARC Methodology */}
              <div className="space-y-8">
                <h2 className="text-3xl font-bold text-text-primary">La Méthodologie SPARC : 5 Phases pour Maîtriser la Complexité</h2>
                
                <p className="text-xl text-text-secondary">
                  SPARC divise chaque projet en cinq phases distinctes et vérifiables. Chaque phase produit un livrable 
                  concret qui sert de fondation à la suivante.
                </p>

                {/* SPARC Phases */}
                <div className="space-y-8">
                  
                  {/* Specification */}
                  <div className="bg-primary-800/50 rounded-xl p-8 border border-primary-700">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 bg-primary-blue rounded-lg flex items-center justify-center">
                        <span className="text-xl font-bold text-white">S</span>
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-text-primary">Specification</h3>
                        <p className="text-text-secondary">Définir clairement ce qui doit être construit</p>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <p className="text-text-secondary">
                        La phase de spécification transforme une idée vague en exigences précises et mesurables. 
                        Au lieu de dire "je veux un système d'authentification", on définit :
                      </p>
                      
                      <ul className="space-y-2">
                        <li className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-success-green mt-0.5 flex-shrink-0" />
                          <span className="text-text-secondary">Les types d'utilisateurs et leurs rôles</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-success-green mt-0.5 flex-shrink-0" />
                          <span className="text-text-secondary">Les méthodes d'authentification supportées</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-success-green mt-0.5 flex-shrink-0" />
                          <span className="text-text-secondary">Les critères de sécurité à respecter</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-success-green mt-0.5 flex-shrink-0" />
                          <span className="text-text-secondary">Les cas d'erreur et leur gestion</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  {/* Pseudocode */}
                  <div className="bg-primary-800/50 rounded-xl p-8 border border-primary-700">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 bg-accent-yellow rounded-lg flex items-center justify-center">
                        <span className="text-xl font-bold text-background-dark">P</span>
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-text-primary">Pseudocode</h3>
                        <p className="text-text-secondary">Décrire la logique sans se préoccuper de la syntaxe</p>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <p className="text-text-secondary">
                        Le pseudocode traduit les spécifications en logique algorithmique lisible par un humain. 
                        Cette étape révèle les incohérences et identifie les cas limites avant l'implémentation.
                      </p>
                      
                      <div className="bg-background-dark/50 p-4 rounded-lg border border-primary-600">
                        <pre className="text-sm text-text-secondary">
{`Fonction: authentifierUtilisateur(email, motDePasse)
  1. Valider le format de l'email
  2. Rechercher l'utilisateur dans la base
  3. Vérifier le mot de passe hashé
  4. Si succès: générer JWT token
  5. Si échec: logger tentative et retourner erreur
  6. Retourner résultat`}
                        </pre>
                      </div>
                    </div>
                  </div>

                  {/* Architecture */}
                  <div className="bg-primary-800/50 rounded-xl p-8 border border-primary-700">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 bg-success-green rounded-lg flex items-center justify-center">
                        <span className="text-xl font-bold text-white">A</span>
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-text-primary">Architecture</h3>
                        <p className="text-text-secondary">Définir la structure technique et les interactions</p>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <p className="text-text-secondary">
                        L'architecture concrétise la logique en structure technique. On définit les composants, 
                        leurs responsabilités et leurs interfaces.
                      </p>
                      
                      <ul className="space-y-2">
                        <li className="flex items-start gap-3">
                          <ArrowRight className="w-5 h-5 text-success-green mt-0.5 flex-shrink-0" />
                          <span className="text-text-secondary">Structure des dossiers et fichiers</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <ArrowRight className="w-5 h-5 text-success-green mt-0.5 flex-shrink-0" />
                          <span className="text-text-secondary">APIs et contrats d'interface</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <ArrowRight className="w-5 h-5 text-success-green mt-0.5 flex-shrink-0" />
                          <span className="text-text-secondary">Diagrammes de flux et dépendances</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <ArrowRight className="w-5 h-5 text-success-green mt-0.5 flex-shrink-0" />
                          <span className="text-text-secondary">Choix technologiques justifiés</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  {/* Refinement */}
                  <div className="bg-primary-800/50 rounded-xl p-8 border border-primary-700">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 bg-warning-orange rounded-lg flex items-center justify-center">
                        <span className="text-xl font-bold text-white">R</span>
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-text-primary">Refinement</h3>
                        <p className="text-text-secondary">Affiner et optimiser avant l'implémentation finale</p>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <p className="text-text-secondary">
                        Le raffinement permet de réviser et d'améliorer chaque phase précédente avec les insights 
                        acquis. C'est l'étape qui garantit la cohérence globale.
                      </p>
                      
                      <div className="bg-background-dark/50 p-4 rounded-lg border border-primary-600">
                        <h4 className="font-semibold text-text-primary mb-2">Questions clés du raffinement :</h4>
                        <ul className="space-y-1 text-sm text-text-secondary">
                          <li>• Les spécifications couvrent-elles tous les cas d'usage ?</li>
                          <li>• Le pseudocode gère-t-il les erreurs correctement ?</li>
                          <li>• L'architecture est-elle scalable et maintenable ?</li>
                          <li>• Les interfaces sont-elles cohérentes ?</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Code */}
                  <div className="bg-primary-800/50 rounded-xl p-8 border border-primary-700">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 bg-primary-purple rounded-lg flex items-center justify-center">
                        <Code className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-text-primary">Code</h3>
                        <p className="text-text-secondary">Implémenter avec confiance et précision</p>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <p className="text-text-secondary">
                        L'implémentation devient une traduction directe des phases précédentes. Les agents IA 
                        peuvent maintenant produire du code de qualité car toute l'ambiguïté a été éliminée.
                      </p>
                      
                      <div className="bg-success-green/10 border-l-4 border-success-green p-4 rounded-r-lg">
                        <p className="text-text-secondary">
                          <strong>Résultat :</strong> Code testé, documenté et maintenable, produit 3 à 5 fois plus rapidement 
                          qu'avec une approche traditionnelle.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Position Section */}
              <div className="space-y-8">
                <h2 className="text-3xl font-bold text-text-primary">Notre positionnement : penser comme un lead développeur assisté par des agents</h2>
                
                <div className="prose prose-lg text-text-secondary space-y-6">
                  <p>
                    Chez Newcode, nous défendons une approche pragmatique : 
                    Un bon agent travaille bien uniquement si vous structurez son travail comme vous le feriez pour un développeur expérimenté.
                  </p>
                  
                  <p>Cela signifie :</p>
                  
                  <div className="space-y-4">
                    <div className="flex items-start gap-4 p-4 bg-error-red/10 rounded-lg border-l-4 border-error-red">
                      <span className="font-semibold text-text-primary">Ne pas supposer que l'agent "comprend tout"</span>
                    </div>
                    
                    <div className="flex items-start gap-4 p-4 bg-error-red/10 rounded-lg border-l-4 border-error-red">
                      <span className="font-semibold text-text-primary">Ne pas exécuter un bloc vague et espérer un résultat complet</span>
                    </div>
                    
                    <div className="flex items-start gap-4 p-4 bg-success-green/10 rounded-lg border-l-4 border-success-green">
                      <span className="font-semibold text-text-primary">Travailler en tâches précises, bien formulées, vérifiables, et ordonnées</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Practical Structure */}
              <div className="space-y-8">
                <h2 className="text-3xl font-bold text-text-primary">Structure de travail recommandée</h2>
                
                <div className="prose prose-lg text-text-secondary space-y-6">
                  <p>
                    Pour chaque problème ou fonctionnalité à développer, nous recommandons d'utiliser un format de tâche structuré. 
                    Voici la structure minimale à respecter :
                  </p>
                  
                  <div className="bg-primary-800/50 rounded-xl p-6 border border-primary-700">
                    <div className="space-y-4 text-sm">
                      <div>
                        <span className="font-semibold text-accent-yellow">Tâche :</span>
                        <span className="text-text-secondary"> [Décrire l'action spécifique attendue]</span>
                      </div>
                      <div>
                        <span className="font-semibold text-accent-yellow">Contexte :</span>
                        <span className="text-text-secondary"> [Fichier concerné, spécification fonctionnelle, lien avec une autre tâche]</span>
                      </div>
                      <div>
                        <span className="font-semibold text-accent-yellow">Critères de succès :</span>
                        <span className="text-text-secondary"> [Résultat mesurable ou comportement attendu]</span>
                      </div>
                      <div>
                        <span className="font-semibold text-accent-yellow">Exemple (si utile) :</span>
                        <span className="text-text-secondary"> [Avant / Après, ou format attendu de sortie]</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-background-dark/50 p-6 rounded-lg border border-primary-600">
                    <h4 className="font-semibold text-text-primary mb-4">Exemple concret :</h4>
                    <div className="space-y-3 text-sm">
                      <div>
                        <span className="font-semibold text-accent-yellow">Tâche :</span>
                        <span className="text-text-secondary"> Implémenter la fonction de validation des adresses email</span>
                      </div>
                      <div>
                        <span className="font-semibold text-accent-yellow">Contexte :</span>
                        <span className="text-text-secondary"> Le formulaire accepte actuellement des emails non valides ("@.com", etc.)</span>
                      </div>
                      <div>
                        <span className="font-semibold text-accent-yellow">Critères de succès :</span>
                        <div className="ml-4 mt-2 space-y-1 text-text-secondary">
                          <div>- Refuser les adresses mal formées</div>
                          <div>- Accepter les adresses correctement formatées</div>
                        </div>
                      </div>
                      <div>
                        <span className="font-semibold text-accent-yellow">Exemple :</span>
                        <div className="ml-4 mt-2 space-y-1 text-text-secondary">
                          <div>- "test@.com" → rejeté</div>
                          <div>- "john.doe@gmail.com" → accepté</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Conclusion */}
              <div className="space-y-8">
                <h2 className="text-3xl font-bold text-text-primary">Conclusion</h2>
                
                <div className="prose prose-lg text-text-secondary space-y-6">
                  <p>
                    Une équipe augmentée par des agents IA ne remplace pas une méthodologie rigoureuse. Elle l'exige.
                  </p>
                  
                  <p>C'est pourquoi notre philosophie est simple :</p>
                  
                  <div className="space-y-4">
                    <div className="flex items-start gap-4 p-4 bg-primary-800/50 rounded-lg border-l-4 border-primary-blue">
                      <span className="font-semibold text-text-primary">Tout projet complexe doit être séquencé.</span>
                    </div>
                    
                    <div className="flex items-start gap-4 p-4 bg-primary-800/50 rounded-lg border-l-4 border-primary-blue">
                      <span className="font-semibold text-text-primary">Chaque tâche doit être atomique, autonome, vérifiable.</span>
                    </div>
                    
                    <div className="flex items-start gap-4 p-4 bg-primary-800/50 rounded-lg border-l-4 border-primary-blue">
                      <span className="font-semibold text-text-primary">L'ensemble du travail doit être dirigé comme un projet logiciel traditionnel, mais exécuté à haute vitesse.</span>
                    </div>
                  </div>
                  
                  <p>
                    Cette approche est la seule qui permette de tirer pleinement parti de la puissance des agents, 
                    tout en garantissant des résultats fiables, testables, et réellement exploitables en production.
                  </p>
                </div>
              </div>

              {/* CTA */}
              <div className="bg-gradient-to-r from-primary-blue to-primary-purple rounded-xl p-8 text-center">
                <h3 className="text-2xl font-bold text-white mb-4">
                  Prêt à appliquer SPARC dans vos projets ?
                </h3>
                <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
                  Découvrez comment notre formation en développement agentique peut transformer 
                  votre approche du développement logiciel.
                </p>
                <button className="bg-white text-primary-blue px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                  En savoir plus
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