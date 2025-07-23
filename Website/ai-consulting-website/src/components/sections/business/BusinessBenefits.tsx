'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Search, Users, Code, CheckCircle, Rocket, ArrowRight, Brain, Database, Globe } from 'lucide-react';

const BusinessBenefits: React.FC = () => {
  const valueChainSteps = [
    {
      step: "Recherche",
      icon: <Search className="w-8 h-8" />,
      color: "accent-blue",
      description: "Intelligence web avec MCP",
      details: [
        "Recherche automatisée type Perplexity",
        "Analyse de marché en temps réel",
        "Veille concurrentielle intelligente",
        "Sources fiables et contextualisées"
      ]
    },
    {
      step: "Product Owner",
      icon: <Users className="w-8 h-8" />,
      color: "accent-purple", 
      description: "Organisation et alignement",
      details: [
        "Agents organisent le travail automatiquement",
        "Alignement objectifs business <→ technique",
        "Priorisation intelligente des features",
        "Roadmap dynamique et adaptative"
      ]
    },
    {
      step: "Développeur",
      icon: <Code className="w-8 h-8" />,
      color: "accent-teal",
      description: "Plan et estimation",
      details: [
        "Architecture technique optimale",
        "Estimations précises basées sur l'historique",
        "Stack technologique recommandée",
        "Risques identifiés et mitigation"
      ]
    },
    {
      step: "Aligneur",
      icon: <CheckCircle className="w-8 h-8" />,
      color: "success-green",
      description: "Code et debug autonome",
      details: [
        "Développement avec validation continue",
        "Debug automatique et résolution d'erreurs",
        "Tests unitaires et d'intégration",
        "Code review par agents spécialisés"
      ]
    },
    {
      step: "Livreur",
      icon: <Rocket className="w-8 h-8" />,
      color: "warning-orange",
      description: "Preuve de concept convaincante",
      details: [
        "Déploiement automatisé sécurisé",
        "Documentation technique complète",
        "Formation utilisateur intégrée",
        "Monitoring et maintenance proactive"
      ]
    }
  ];

  const superPower = {
    title: "Le Super Pouvoir du Business Analyst",
    description: "Toute la chaîne de valeur accessible depuis votre terminal",
    benefits: [
      {
        icon: <Brain className="w-6 h-6" />,
        title: "Intelligence Augmentée",
        description: "De l'idée à l'implémentation sans friction technique"
      },
      {
        icon: <Globe className="w-6 h-6" />,
        title: "Autonomie Complète", 
        description: "Plus besoin d'attendre les équipes techniques"
      },
      {
        icon: <Database className="w-6 h-6" />,
        title: "Écosystème Intégré",
        description: "Recherche → Conception → Développement → Livraison"
      }
    ]
  };

  return (
    <section className="py-24 bg-primary-800">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-h1 font-bold mb-6 text-text-primary">
            Bénéfices Business
          </h2>
          <p className="text-xl text-text-secondary max-w-4xl mx-auto leading-relaxed">
            Toute la chaîne de valeur, du chercheur au livreur, se situe maintenant dans votre terminal.
            <span className="text-accent-purple font-semibold block mt-2">
              Le business analyst possède maintenant un super pouvoir.
            </span>
          </p>
        </motion.div>

        {/* Super Power Section */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-r from-accent-purple/10 to-accent-blue/10 border border-accent-purple/20 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold text-accent-purple mb-4">
              ⚡ {superPower.title}
            </h3>
            <p className="text-text-secondary text-lg mb-8">
              {superPower.description}
            </p>
            
            <div className="grid md:grid-cols-3 gap-6">
              {superPower.benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  className="bg-primary-900/50 rounded-xl p-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="text-accent-purple mb-3 flex justify-center">
                    {benefit.icon}
                  </div>
                  <h4 className="text-accent-purple font-bold mb-2">
                    {benefit.title}
                  </h4>
                  <p className="text-text-secondary text-sm leading-relaxed">
                    {benefit.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Value Chain Flow Diagram */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-text-primary text-center mb-12">
            🔄 Flow Diagram de la Chaîne de Valeur Complète
          </h3>

          {/* Desktop Flow - Horizontal */}
          <div className="hidden lg:block relative">
            {/* Connection Lines */}
            <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-accent-blue via-accent-purple via-accent-teal via-success-green to-warning-orange opacity-30 transform -translate-y-1/2"></div>
            
            <div className="flex items-center justify-between gap-4">
              {valueChainSteps.map((step, index) => (
                <React.Fragment key={step.step}>
                  <motion.div
                    className="group relative flex-1 max-w-xs"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.2 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className={`bg-gradient-to-br from-${step.color}/10 to-${step.color}/5 border-2 border-${step.color}/30 rounded-2xl p-6 h-80 flex flex-col justify-between hover:border-${step.color}/60 transition-all duration-300 relative z-10`}>
                      {/* Step Header */}
                      <div className="text-center mb-4">
                        <div className={`w-16 h-16 bg-gradient-to-r from-${step.color}/20 to-${step.color}/40 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:from-${step.color}/30 group-hover:to-${step.color}/50 transition-all duration-300`}>
                          <div className={`text-${step.color}`}>
                            {step.icon}
                          </div>
                        </div>
                        <h4 className={`text-lg font-bold text-${step.color} mb-2`}>
                          {step.step}
                        </h4>
                        <p className="text-text-secondary text-sm">
                          {step.description}
                        </p>
                      </div>

                      {/* Details */}
                      <div className="space-y-2">
                        {step.details.map((detail, dIndex) => (
                          <div key={dIndex} className="flex items-start gap-2">
                            <div className={`w-1.5 h-1.5 bg-${step.color} rounded-full mt-2 flex-shrink-0`}></div>
                            <span className="text-text-secondary text-xs leading-relaxed">
                              {detail}
                            </span>
                          </div>
                        ))}
                      </div>

                      {/* Step Number */}
                      <div className="absolute -top-3 -left-3 w-8 h-8 bg-primary-900 border-2 border-accent-blue rounded-full flex items-center justify-center">
                        <span className="text-accent-blue font-bold text-sm">{index + 1}</span>
                      </div>
                    </div>
                  </motion.div>

                  {/* Arrow between steps */}
                  {index < valueChainSteps.length - 1 && (
                    <motion.div
                      className="flex items-center justify-center w-8 z-20 relative"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: (index * 0.2) + 0.1 }}
                      viewport={{ once: true }}
                    >
                      <ArrowRight className="w-6 h-6 text-accent-blue animate-pulse" />
                    </motion.div>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>

          {/* Mobile Flow - Vertical */}
          <div className="lg:hidden space-y-8">
            {valueChainSteps.map((step, index) => (
              <motion.div
                key={step.step}
                className="group relative"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className={`bg-gradient-to-br from-${step.color}/10 to-${step.color}/5 border-2 border-${step.color}/30 rounded-2xl p-6`}>
                  <div className="flex items-start gap-4 mb-4">
                    <div className={`w-12 h-12 bg-gradient-to-r from-${step.color}/20 to-${step.color}/40 rounded-full flex items-center justify-center flex-shrink-0`}>
                      <div className={`text-${step.color}`}>
                        {step.icon}
                      </div>
                    </div>
                    <div>
                      <h4 className={`text-lg font-bold text-${step.color} mb-1`}>
                        {index + 1}. {step.step}
                      </h4>
                      <p className="text-text-secondary text-sm">
                        {step.description}
                      </p>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    {step.details.map((detail, dIndex) => (
                      <div key={dIndex} className="flex items-start gap-2">
                        <div className={`w-1.5 h-1.5 bg-${step.color} rounded-full mt-2 flex-shrink-0`}></div>
                        <span className="text-text-secondary text-xs leading-relaxed">
                          {detail}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Vertical Arrow */}
                {index < valueChainSteps.length - 1 && (
                  <div className="flex justify-center py-4">
                    <ArrowRight className="w-6 h-6 text-accent-blue rotate-90" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Key Benefits Summary */}
        <motion.div
          className="grid md:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          {[
            {
              title: "🚀 Rapidité Exécution",
              description: "De l'idée au prototype en 3 jours au lieu de trimestres d'attente",
              color: "success-green"
            },
            {
              title: "🎯 Autonomie Totale",
              description: "Plus de dépendance aux équipes techniques pour vos besoins métier",
              color: "accent-purple"
            },
            {
              title: "💡 Innovation Continue",
              description: "Testez et itérez rapidement vos idées avec feedback immédiat",
              color: "accent-blue"
            }
          ].map((benefit, index) => (
            <div key={index} className={`bg-primary-900/50 border border-${benefit.color}/30 rounded-2xl p-6 text-center hover:border-${benefit.color}/60 transition-all duration-300`}>
              <h4 className={`text-${benefit.color} font-bold mb-3`}>
                {benefit.title}
              </h4>
              <p className="text-text-secondary text-sm leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default BusinessBenefits;