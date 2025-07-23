'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Brain, GitBranch, Code, TestTube, Rocket } from 'lucide-react';

const AdvancedFeatures: React.FC = () => {
  const orchestratorFlow = [
    {
      phase: "Specification",
      icon: <Brain className="w-6 h-6" />,
      color: "text-black",
      bgColor: "gray-100",
      borderColor: "gray-300",
      description: "Définit clairement les objectifs du projet",
      features: [
        "Définit clairement les objectifs du projet",
        "Analyse les besoins fonctionnels et non-fonctionnels", 
      ]
    },
    {
      phase: "Pseudocode",
      icon: <Code className="w-6 h-6" />,
      color: "text-purple-600",
      bgColor: "purple-50",
      borderColor: "purple-300",
      description: "Crée une roadmap logique de l'application",
      features: [
        "Crée une roadmap logique de l'application",
        "Inclut des commentaires détaillés pour la logique complexe",
      ]
    },
    {
      phase: "Architecture",
      icon: <GitBranch className="w-6 h-6" />,
      color: "text-purple-700",
      bgColor: "purple-100",
      borderColor: "purple-400",
      description: "Définit les composants du système",
      features: [
        "Définit les composants du système",
        "Sélectionne la stack technologique optimale",
      ]
    },
    {
      phase: "Refinement", 
      icon: <TestTube className="w-6 h-6" />,
      color: "text-purple-800",
      bgColor: "purple-200",
      borderColor: "purple-500",
      description: "Optimise les performances par calculs",
      features: [
        "Améliore la maintenabilité du code",
        "Intègre les feedbacks des parties prenantes",
      ]
    },
    {
      phase: "Completion",
      icon: <Rocket className="w-6 h-6" />,
      color: "text-purple-900",
      bgColor: "purple-300",
      borderColor: "purple-600",
      description: "Tests et déploiement avec monitoring",
      features: [
        "Tests unitaires, d'intégration et système",
        "Documentation automatique et intelligente",
      ]
    }
  ];

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
            Délégation Intelligente SPARC
          </h2>
        </motion.div>

        {/* Interactive Flow Diagram */}
        <motion.div 
          className="relative mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          {/* Flow Container */}
          <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-4">
            {orchestratorFlow.map((phase, index) => (
              <React.Fragment key={phase.phase}>
                {/* Phase Card */}
                <motion.div
                  className="group relative"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className={`bg-${phase.bgColor} border-2 border-${phase.borderColor} rounded-2xl p-6 w-64 h-96 flex flex-col justify-between hover:border-${phase.borderColor.replace('300', '500').replace('400', '600').replace('500', '700').replace('600', '800')} transition-all duration-300`}>
                    {/* Phase Header */}
                    <div className="text-center mb-4">
                      <div className={`w-16 h-16 bg-white border-2 border-${phase.borderColor} rounded-full flex items-center justify-center mx-auto mb-3 transition-all duration-300`}>
                        <div className={phase.color}>
                          {phase.icon}
                        </div>
                      </div>
                      <h3 className={`text-xl font-bold ${phase.color} mb-2`}>
                        Phase {index + 1}: {phase.phase}
                      </h3>
                      <p className="text-gray-600 text-sm">
                        {phase.description}
                      </p>
                    </div>

                    {/* Features */}
                    <div className="space-y-3 flex-grow">
                      {phase.features.map((feature, fIndex) => (
                        <div key={fIndex} className="flex items-start gap-2">
                          <div className={`w-2 h-2 ${phase.color.replace('text-', 'bg-')} rounded-full mt-2 flex-shrink-0`}></div>
                          <span className="text-gray-700 text-sm leading-relaxed">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Delegation Badge */}
                    <div className="mt-4">
                      <div className={`inline-flex items-center gap-2 bg-${phase.bgColor} border border-${phase.borderColor} rounded-full px-3 py-1 w-full justify-center`}>
                        <span className={`${phase.color} text-xs font-medium`}>
                          Auto-Délégation
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Arrow between phases */}
                {index < orchestratorFlow.length - 1 && (
                  <motion.div
                    className="hidden lg:flex items-center"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: (index * 0.2) + 0.1 }}
                    viewport={{ once: true }}
                  >
                    <ChevronRight className="w-8 h-8 text-accent-blue animate-pulse" />
                  </motion.div>
                )}
              </React.Fragment>
            ))}
          </div>

          {/* Role Definition Box */}
          <motion.div
            className="mt-24 bg-gray-50 border border-gray-300 rounded-2xl p-8 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-black font-bold mb-6 text-center text-lg">
              Définition du Rôle d'Orchestrateur
            </h4>
            <div className="bg-white border border-gray-200 rounded-lg p-6 font-mono text-sm text-gray-700 leading-relaxed">
              <p className="text-purple-600 mb-3 font-semibold">"roleDefinition":</p>
              <p className="italic">
                "You are entrusted with the overall project goal. Your paramount function is to gain a comprehensive understanding of the current project state by meticulously querying the project_memorys and user_preferences databases and reading key project files. You must analyze the project's status at a granular level, understanding which classes and functions have been planned, specified, and implemented. You then intelligently delegate to the next appropriate SPARC phase orchestrator after securing user approval. You must not write to any state databases. Your operational cycle concludes when you use attempt_completion after successfully delegating a task."
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AdvancedFeatures;