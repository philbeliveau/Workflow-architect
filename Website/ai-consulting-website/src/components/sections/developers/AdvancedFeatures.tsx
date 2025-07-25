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
      color: "text-primary-blue",
      bgColor: "primary-blue/10",
      borderColor: "primary-blue/30",
      description: "Crée une roadmap logique de l'application",
      features: [
        "Crée une roadmap logique de l'application",
        "Inclut des commentaires détaillés pour la logique complexe",
      ]
    },
    {
      phase: "Architecture",
      icon: <GitBranch className="w-6 h-6" />,
      color: "text-accent-red",
      bgColor: "accent-red/10",
      borderColor: "accent-red/30",
      description: "Définit les composants du système",
      features: [
        "Définit les composants du système",
        "Sélectionne la stack technologique optimale",
      ]
    },
    {
      phase: "Refinement", 
      icon: <TestTube className="w-6 h-6" />,
      color: "text-success-green",
      bgColor: "success-green/10",
      borderColor: "success-green/30",
      description: "Optimise les performances par calculs",
      features: [
        "Améliore la maintenabilité du code",
        "Intègre les feedbacks des parties prenantes",
      ]
    },
    {
      phase: "Completion",
      icon: <Rocket className="w-6 h-6" />,
      color: "text-hover-interactive",
      bgColor: "hover-interactive/10",
      borderColor: "hover-interactive/30",
      description: "Tests et déploiement avec monitoring",
      features: [
        "Tests unitaires, d'intégration et système",
        "Documentation automatique et intelligente",
      ]
    }
  ];

  return (
    <section className="py-24 bg-background-dark-alt">
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 max-w-full overflow-hidden">
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
                  <div className={`bg-${phase.bgColor} border-2 border-${phase.borderColor} rounded-2xl p-4 min-h-[384px] flex flex-col justify-between hover:border-${phase.borderColor.replace('/30', '/50')} transition-all duration-300`}>
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
                      <p className={`${phase.phase === 'Specification' ? 'text-gray-700' : 'text-text-light'} text-sm`}>
                        {phase.description}
                      </p>
                    </div>

                    {/* Features */}
                    <div className="space-y-3 flex-grow">
                      {phase.features.map((feature, fIndex) => (
                        <div key={fIndex} className="flex items-start gap-2">
                          <div className={`w-2 h-2 ${phase.color.replace('text-', 'bg-')} rounded-full mt-2 flex-shrink-0`}></div>
                          <span className={`${phase.phase === 'Specification' ? 'text-gray-800' : 'text-text-light'} text-sm leading-relaxed`}>
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

              </React.Fragment>
            ))}
          </div>

        </motion.div>
      </div>
    </section>
  );
};

export default AdvancedFeatures;