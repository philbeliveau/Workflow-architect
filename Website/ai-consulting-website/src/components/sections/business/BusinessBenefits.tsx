'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Search, Users, Code, CheckCircle, Rocket, ArrowRight, Brain, Database, Globe } from 'lucide-react';

const BusinessBenefits: React.FC = () => {
  const valueChainSteps = [
    {
      step: "Recherche",
      icon: <Search className="w-10 h-10" />,
      color: "purple-400",
      description: "Intelligence web avec MCP",
      details: [
        "Recherche automatisée",
        "Analyse de marché",
        "Veille concurrentielle"
      ]
    },
    {
      step: "Product Owner",
      icon: <Users className="w-10 h-10" />,
      color: "purple-500", 
      description: "Organisation et alignement",
      details: [
        "Organisation automatique",
        "Alignement business ↔ technique",

      ]
    },
    {
      step: "Développeur",
      icon: <Code className="w-10 h-10" />,
      color: "purple-600",
      description: "Plan et estimation",
      details: [
        "Architecture optimale",
        "Estimations précises",
        "Stack recommandée"
      ]
    },
    {
      step: "Aligneur",
      icon: <CheckCircle className="w-10 h-10" />,
      color: "purple-700",
      description: "Code et debug autonome",
      details: [
        "Validation continue",
        "Debug automatique",
        "Tests complets"
      ]
    },
    {
      step: "Livreur",
      icon: <Rocket className="w-10 h-10" />,
      color: "purple-800",
      description: "Preuve de concept convaincante",
      details: [
        "Déploiement sécurisé",
        "Documentation complète",
        "Monitoring proactif"
      ]
    }
  ];

  const superPower = {
    title: "Le levier du Business Analyst",
    description: "Toute la chaîne de valeur est désormais accessible depuis son terminal. Recherche, conception, livraison — sans goulot d’étranglement.",
    benefits: [
      {
        icon: <Brain className="w-6 h-6" />,
        title: "Intelligence opérationnelle",
        description: "De l'idée à l'implémentation sans friction technique"
      },
      {
        icon: <Globe className="w-6 h-6" />,
        title: "Autonomie stratégique", 
        description: "Plus besoin d'attendre les équipes techniques pour livrer une preuve de concept"
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
            Transformer votre effectif
          </h2>
          <p className="text-xl text-text-secondary max-w-4xl mx-auto leading-relaxed">
            Toute la chaîne de valeur, du chercheur au livreur, se situe maintenant dans votre terminal.
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
          {/* Desktop Flow - Horizontal */}
          <div className="hidden lg:block relative">
            {/* Connection Lines */}
            <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-400 via-purple-500 via-purple-600 via-purple-700 to-purple-800 opacity-40 transform -translate-y-1/2"></div>
            
            <div className="flex items-center justify-between gap-4">
              {valueChainSteps.map((step, index) => (
                <React.Fragment key={step.step}>
                  <motion.div
                    className="group relative w-72"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.2 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className={`bg-gradient-to-br from-${step.color}/10 to-${step.color}/5 border-2 border-${step.color}/30 rounded-2xl p-10 h-[32rem] min-h-[32rem] flex flex-col justify-between hover:border-${step.color}/60 transition-all duration-300 relative z-10 shadow-lg hover:shadow-xl`}>
                      {/* Step Header */}
                      <div className="text-center mb-4">
                        <div className={`w-20 h-20 bg-gradient-to-r from-${step.color}/20 to-${step.color}/40 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:from-${step.color}/30 group-hover:to-${step.color}/50 transition-all duration-300`}>
                          <div className={`text-${step.color}`}>
                            {step.icon}
                          </div>
                        </div>
                        <h4 className={`text-2xl font-bold text-${step.color} mb-4`}>
                          {step.step}
                        </h4>
                        <p className="text-gray-300 text-lg font-medium">
                          {step.description}
                        </p>
                      </div>

                      {/* Details */}
                      <div className="space-y-3">
                        {step.details.map((detail, dIndex) => (
                          <div key={dIndex}>
                            <span className="text-gray-400 text-base leading-relaxed">
                              {detail}
                            </span>
                          </div>
                        ))}
                      </div>

                      {/* Step Number */}
                      <div className={`absolute -top-5 -left-5 w-12 h-12 bg-gray-900 border-3 border-${step.color} rounded-full flex items-center justify-center shadow-lg`}>
                        <span className={`text-${step.color} font-bold text-lg`}>{index + 1}</span>
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
                      <ArrowRight className="w-6 h-6 text-purple-500 animate-pulse" />
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
                <div className={`bg-gradient-to-br from-${step.color}/10 to-${step.color}/5 border-2 border-${step.color}/30 rounded-2xl p-8`}>
                  <div className="flex items-start gap-4 mb-4">
                    <div className={`w-16 h-16 bg-gradient-to-r from-${step.color}/20 to-${step.color}/40 rounded-full flex items-center justify-center flex-shrink-0`}>
                      <div className={`text-${step.color}`}>
                        {step.icon}
                      </div>
                    </div>
                    <div>
                      <h4 className={`text-2xl font-bold text-${step.color} mb-2`}>
                        {index + 1}. {step.step}
                      </h4>
                      <p className="text-gray-300 text-lg font-medium">
                        {step.description}
                      </p>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    {step.details.map((detail, dIndex) => (
                      <div key={dIndex}>
                        <span className="text-gray-400 text-base leading-relaxed">
                          {detail}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Vertical Arrow */}
                {index < valueChainSteps.length - 1 && (
                  <div className="flex justify-center py-4">
                    <ArrowRight className="w-6 h-6 text-purple-500 rotate-90" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default BusinessBenefits;