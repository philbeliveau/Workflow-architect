'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { User, Building, Factory, ArrowRight, TrendingUp, Clock, DollarSign, Star } from 'lucide-react';

const FeaturedCaseStudies: React.FC = () => {
  const caseStudies = [
    {
      id: "solo-developer",
      type: "Développeuse Indépendante Full-Stack",
      challenge: "Gérer 2 projets clients en travaillant 60+ heures par semaine",
      icon: <User className="w-8 h-8" />,
      color: "accent-blue",
      situation: "Sarah était une développeuse freelance talentueuse prise dans le cycle festin-famine. Elle ne pouvait gérer que 2 projets clients à la fois, travaillait les soirs et week-ends pour respecter les délais, et s'inquiétait constamment de la qualité en se dépêchant de livrer. Son taux horaire était bloqué à 75€ car elle ne pouvait pas justifier des tarifs plus élevés avec sa vitesse de livraison actuelle.",
      solution: "Nous avons implémenté un flux de travail IA complet avec Claude-code pour la génération de code contextuelle, CrewAI pour orchestrer des agents spécialisés (documentation, tests, revue), et MCP pour intégrer tous les outils. Configuration spécifique : GitHub Actions pour déploiement automatique, Claude pour architecture, et scripts personnalisés connectant Jira à GitHub pour tracking automatique.",
      results: [
        { icon: TrendingUp, value: "2 → 6", label: "Projets clients simultanés", description: "Triplement de la capacité sans embauche" },
        { icon: Clock, value: "60 → 35h", label: "Heures de travail hebdomadaires", description: "Réduction de 42% du temps de travail" },
        { icon: DollarSign, value: "75€ → 150€", label: "Taux horaire", description: "Doublement des revenus par heure" },
        { icon: Star, value: "40%", label: "Amélioration satisfaction client", description: "Scores de satisfaction plus élevés" }
      ],
      quote: "Je pensais devoir embaucher des employés pour faire évoluer mon entreprise. Au lieu de ça, je me suis mise à l'échelle moi-même. Les flux de travail IA gèrent tout le travail répétitif, donc je peux me concentrer sur la résolution créative de problèmes pour laquelle les clients paient vraiment des tarifs premium.",
      author: "Sarah Chen",
      additionalResults: "Élimination complète du travail le week-end et amélioration significative de l'équilibre vie-travail."
    },
    {
      id: "startup-team",
      type: "Équipe de développement 4 personnes chez une startup SaaS",
      challenge: "Vélocité de sprint incohérente et intégration développeur de 3 semaines",
      icon: <Building className="w-8 h-8" />,
      color: "accent-purple",
      situation: "L'équipe de développement de TechFlow luttait avec des délais de livraison imprévisibles. Les nouveaux développeurs prenaient 3 semaines pour devenir productifs, la vélocité de sprint variait énormément, et le CTO passait plus de temps à gérer les problèmes de flux de travail qu'à la planification stratégique. Avec un financement Série A à l'horizon, ils avaient besoin de processus de développement prévisibles et évolutifs.",
      solution: "Nous avons repensé entièrement leur flux de travail avec un système orchestré Claude-code + CrewAI. Configuration spécifique : agents CrewAI pour revue de code automatique, pipelines de test avec Claude-code, et processus d'onboarding via MCP connectant Confluence + GitHub. Nouveaux développeurs reçoivent maintenant des explications de codebase générées par Claude et des conseils contextuels via des agents spécialisés.",
      results: [
        { icon: Clock, value: "3 semaines → 3 jours", label: "Temps d'intégration développeur", description: "Réduction de 85% du temps d'intégration" },
        { icon: TrendingUp, value: "200%", label: "Augmentation vélocité sprint", description: "Livraison cohérente et prévisible" },
        { icon: Star, value: "45%", label: "Amélioration qualité code", description: "Scores de qualité significativement améliorés" },
        { icon: DollarSign, value: "95%", label: "Précision engagement sprint", description: "Prédictibilité quasi-parfaite" }
      ],
      quote: "Notre équipe de 4 personnes livre maintenant des fonctionnalités plus vite que notre ancienne équipe de 8 personnes. Les flux de travail IA ne nous rendent pas seulement plus rapides – ils nous rendent plus prévisibles, ce qui est crucial pour la confiance des investisseurs et le moral de l'équipe.",
      author: "Marcus Rodriguez, CTO chez TechFlow",
      additionalResults: "Réduction de 60% de la dette technique grâce à la refactorisation automatisée et amélioration significative de la confiance de l'équipe."
    },
    {
      id: "agency-transformation",
      type: "Agence de développement 12 personnes",
      challenge: "Marges qui se réduisent et demandes clients croissantes",
      icon: <Factory className="w-8 h-8" />,
      color: "accent-teal",
      situation: "DevCraft Agency était prise dans une pression tarifaire. Les clients demandaient une livraison plus rapide et plus de fonctionnalités tandis que la concurrence offshore faisait baisser les prix. L'agence devait se différencier par une vitesse et une qualité supérieures, pas seulement des prix compétitifs. Les marges avaient chuté de 45% à 25% sur deux ans.",
      solution: "Nous avons implémenté des flux de travail IA à l'échelle organisationnelle avec CrewAI orchestrant différents agents par type de projet. Configuration spécifique : Claude-code pour génération de templates, MCP connectant GitHub + Jira + Confluence, agents spécialisés pour communication client automatique. Setup distinct pour projets e-commerce vs SaaS vs apps mobiles, avec déploiement automatique multi-environnement.",
      results: [
        { icon: DollarSign, value: "25% → 40%", label: "Marges de projet", description: "Augmentation de 60% des marges" },
        { icon: Clock, value: "50%", label: "Réduction temps livraison", description: "Livraison en moyenne deux fois plus rapide" },
        { icon: Star, value: "95%", label: "Taux de rétention client", description: "Fidélisation client exceptionnelle" },
        { icon: TrendingUp, value: "+8 dev", label: "Capacité équivalente", description: "Équivalent embauche 8 développeurs supplémentaires" }
      ],
      quote: "Nous sommes devenus l'agence de référence pour les clients qui ont besoin que les choses soient faites rapidement sans sacrifier la qualité. Nos flux de travail IA sont notre arme secrète – les clients voient les résultats, les concurrents n'arrivent pas à comprendre comment nous faisons.",
      author: "Jennifer Park, Fondatrice de DevCraft Agency",
      additionalResults: "Positionnement comme 'agence alimentée par l'IA' sur leur marché avec demande réservée sur 6 mois."
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const caseStudyVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.95
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8
      }
    }
  };

  return (
    <section className="py-24 bg-gradient-to-br from-primary-800 to-primary-900 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="grid grid-cols-8 gap-4 h-full p-8">
          {Array.from({ length: 64 }, (_, i) => (
            <div 
              key={i} 
              className="bg-accent-blue rounded-lg animate-pulse" 
              style={{
                animationDelay: `${i * 0.1}s`,
                animationDuration: '4s'
              }}
            />
          ))}
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-h1 font-bold mb-6 text-text-primary">
            Études de cas détaillées
          </h2>
          <p className="text-xl text-text-secondary max-w-4xl mx-auto leading-relaxed">
            Découvrez les transformations complètes de nos clients avec des métriques détaillées, 
            des solutions spécifiques et des résultats mesurables.
          </p>
        </motion.div>

        {/* Case Studies */}
        <motion.div
          className="space-y-24"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {caseStudies.map((caseStudy, index) => (
            <motion.div
              key={caseStudy.id}
              className="group"
              variants={caseStudyVariants}
            >
              <div className="bg-primary-900/50 backdrop-blur-sm border border-primary-700 rounded-3xl p-8 lg:p-12 hover:border-accent-blue/50 transition-all duration-300">
                
                {/* Header */}
                <div className="flex items-start gap-6 mb-8">
                  <div className={`w-16 h-16 bg-gradient-to-r from-${caseStudy.color}/20 to-${caseStudy.color}/30 rounded-2xl flex items-center justify-center group-hover:from-${caseStudy.color}/30 group-hover:to-${caseStudy.color}/40 transition-all duration-300`}>
                    <div className={`text-${caseStudy.color} group-hover:text-${caseStudy.color}-light transition-colors duration-300`}>
                      {caseStudy.icon}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-h2 font-bold text-text-primary group-hover:text-white transition-colors duration-300 mb-2">
                      {caseStudy.type}
                    </h3>
                    <p className="text-lg text-accent-blue font-medium">
                      Défi : {caseStudy.challenge}
                    </p>
                  </div>
                </div>

                <div className="grid lg:grid-cols-2 gap-12">
                  {/* Left side - Story */}
                  <div className="space-y-8">
                    {/* Situation */}
                    <div>
                      <h4 className="text-h3 font-semibold text-text-primary mb-4 group-hover:text-white transition-colors duration-300">
                        Situation initiale
                      </h4>
                      <p className="text-text-secondary leading-relaxed group-hover:text-text-primary/90 transition-colors duration-300">
                        {caseStudy.situation}
                      </p>
                    </div>

                    {/* Solution */}
                    <div>
                      <h4 className="text-h3 font-semibold text-text-primary mb-4 group-hover:text-white transition-colors duration-300">
                        Notre solution
                      </h4>
                      <p className="text-text-secondary leading-relaxed group-hover:text-text-primary/90 transition-colors duration-300">
                        {caseStudy.solution}
                      </p>
                    </div>

                    {/* Quote */}
                    <div className="bg-gradient-to-r from-accent-blue/5 to-accent-purple/5 border border-accent-blue/20 rounded-2xl p-6">
                      <blockquote className="text-text-primary italic leading-relaxed mb-4 group-hover:text-white transition-colors duration-300">
                        "{caseStudy.quote}"
                      </blockquote>
                      <div className="flex items-center gap-3">
                        <div className={`w-10 h-10 bg-gradient-to-r from-${caseStudy.color} to-accent-purple rounded-full flex items-center justify-center`}>
                          <span className="text-white font-semibold text-sm">
                            {caseStudy.author.split(' ').map(n => n[0]).join('')}
                          </span>
                        </div>
                        <span className="text-text-primary font-medium group-hover:text-white transition-colors duration-300">
                          — {caseStudy.author}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Right side - Results */}
                  <div className="space-y-6">
                    <h4 className="text-h3 font-semibold text-text-primary mb-6 group-hover:text-white transition-colors duration-300">
                      Résultats mesurables
                    </h4>
                    
                    <div className="grid gap-6">
                      {caseStudy.results.map((result, idx) => (
                        <div key={idx} className="bg-primary-800/50 border border-primary-700 rounded-xl p-6 group-hover:border-accent-blue/30 transition-all duration-300">
                          <div className="flex items-center gap-4 mb-3">
                            <div className={`w-10 h-10 bg-gradient-to-r from-${caseStudy.color}/20 to-${caseStudy.color}/30 rounded-lg flex items-center justify-center`}>
                              <result.icon className={`w-5 h-5 text-${caseStudy.color}`} />
                            </div>
                            <div className="flex-1">
                              <div className={`text-2xl font-bold text-${caseStudy.color} mb-1`}>
                                {result.value}
                              </div>
                              <div className="text-text-primary font-medium text-sm">
                                {result.label}
                              </div>
                            </div>
                          </div>
                          <p className="text-text-secondary text-sm leading-relaxed">
                            {result.description}
                          </p>
                        </div>
                      ))}
                    </div>

                    {/* Additional result */}
                    <div className="bg-success-green/10 border border-success-green/20 rounded-lg p-4">
                      <div className="flex items-start gap-3">
                        <TrendingUp className="w-5 h-5 text-success-green flex-shrink-0 mt-0.5" />
                        <div>
                          <h5 className="text-success-green font-medium mb-1">Résultat additionnel :</h5>
                          <p className="text-text-secondary text-sm">{caseStudy.additionalResults}</p>
                        </div>
                      </div>
                    </div>

                    {/* CTA */}
                    <Button 
                      variant="outline"
                      size="lg" 
                      href="/book-demo"
                      className="w-full group mt-6"
                    >
                      Obtenir des résultats similaires
                      <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedCaseStudies;