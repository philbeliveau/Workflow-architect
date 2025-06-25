'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Search, Settings, Zap, TrendingUp, CheckCircle } from 'lucide-react';

const ProcessTimeline: React.FC = () => {
  const phases = [
    {
      week: "Semaine 1-2",
      title: "Découverte et planification",
      icon: <Search className="w-8 h-8" />,
      description: "Nous plongeons en profondeur dans votre flux de travail actuel, identifions les goulots d'étranglement et créons un plan d'implémentation personnalisé. Vous verrez exactement quels outils IA auront le plus grand impact et comment nous mesurerons le succès.",
      activities: [
        "Audit complet du flux de travail actuel",
        "Identification des goulots d'étranglement principaux", 
        "Cartographie des opportunités IA prioritaires",
        "Création du plan d'implémentation personnalisé",
        "Définition des métriques de succès"
      ]
    },
    {
      week: "Semaine 3-4",
      title: "Implémentation principale",
      icon: <Settings className="w-8 h-8" />,
      description: "Nous implémentons les outils et flux de travail IA fondamentaux. Votre équipe commence à voir des gains de productivité immédiats pendant que nous gérons la complexité technique. Aucune perturbation du travail client – nous travaillons selon votre emploi du temps.",
      activities: [
        "Installation et configuration des outils IA principaux",
        "Intégration dans votre environnement de développement",
        "Formation initiale de l'équipe",
        "Tests et ajustements des premiers flux",
        "Documentation des nouvelles procédures"
      ]
    },
    {
      week: "Semaine 5-6",
      title: "Intégration avancée",
      icon: <Zap className="w-8 h-8" />,
      description: "Nous ajoutons les automatisations et intégrations avancées qui multiplient vos gains de productivité. Les revues de code deviennent plus rapides, la documentation s'écrit d'elle-même, et les nouvelles fonctionnalités se livrent avec une rapidité sans précédent.",
      activities: [
        "Implémentation des automatisations avancées",
        "Intégration inter-outils pour flux complets",
        "Optimisation des performances",
        "Formation avancée de l'équipe",
        "Mise en place des métriques de suivi"
      ]
    },
    {
      week: "Semaine 7-8",
      title: "Optimisation et formation",
      icon: <TrendingUp className="w-8 h-8" />,
      description: "Nous peaufinons tout selon les données d'utilisation réelles et nous assurons que votre équipe est confiante avec tous les nouveaux flux de travail. Vous aurez une preuve mesurable des améliorations de productivité et un chemin clair pour l'optimisation continue.",
      activities: [
        "Analyse des données d'utilisation",
        "Optimisation basée sur les métriques réelles",
        "Formation finale et certification équipe",
        "Documentation complète des processus",
        "Plan d'optimisation continue"
      ]
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

  const phaseVariants = {
    hidden: { 
      opacity: 0, 
      x: -50,
      scale: 0.95
    },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 0.8,
      }
    }
  };

  return (
    <section className="py-24 bg-primary-900 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 right-20 w-64 h-64 bg-accent-purple rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-accent-blue rounded-full blur-3xl animate-pulse delay-1000"></div>
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
            Votre parcours vers la productivité alimentée par l'IA
          </h2>
          <p className="text-xl text-text-secondary max-w-4xl mx-auto leading-relaxed">
            Un processus éprouvé en 4 phases qui transforme votre équipe de développement 
            en machine de productivité IA en moins de 8 semaines.
          </p>
        </motion.div>

        {/* Timeline */}
        <motion.div
          className="relative"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Timeline line */}
          <div className="absolute left-8 top-16 bottom-16 w-0.5 bg-gradient-to-b from-accent-blue via-accent-purple to-accent-teal hidden lg:block"></div>

          <div className="space-y-16">
            {phases.map((phase, index) => (
              <motion.div
                key={index}
                className="group relative"
                variants={phaseVariants}
              >
                <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
                  {/* Timeline marker */}
                  <div className="lg:col-span-1 flex justify-center lg:justify-start">
                    <div className="relative">
                      {/* Timeline dot */}
                      <div className="hidden lg:block absolute left-8 top-8 w-4 h-4 bg-gradient-to-r from-accent-blue to-accent-purple rounded-full transform -translate-x-1/2 z-10">
                        <div className="absolute inset-0 bg-gradient-to-r from-accent-blue to-accent-purple rounded-full animate-pulse opacity-50 scale-150"></div>
                      </div>
                      
                      {/* Icon container */}
                      <motion.div
                        className="w-16 h-16 bg-gradient-to-r from-accent-blue/20 to-accent-purple/20 rounded-2xl flex items-center justify-center group-hover:from-accent-blue/30 group-hover:to-accent-purple/30 transition-all duration-300"
                        whileHover={{ 
                          scale: 1.1,
                          rotate: 5,
                          transition: { duration: 0.3 }
                        }}
                      >
                        <div className="text-accent-blue group-hover:text-accent-blue-light transition-colors duration-300">
                          {phase.icon}
                        </div>
                      </motion.div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="lg:col-span-11 space-y-6">
                    {/* Header */}
                    <div>
                      <div className="flex items-center gap-4 mb-4">
                        <span className="text-accent-blue font-semibold bg-accent-blue/10 px-3 py-1 rounded-full text-sm">
                          {phase.week}
                        </span>
                      </div>
                      <h3 className="text-h2 font-bold text-text-primary group-hover:text-white transition-colors duration-300 mb-4">
                        {phase.title}
                      </h3>
                      <p className="text-lg text-text-secondary leading-relaxed group-hover:text-text-primary/90 transition-colors duration-300">
                        {phase.description}
                      </p>
                    </div>

                    {/* Activities */}
                    <div className="bg-primary-800/50 backdrop-blur-sm border border-primary-700 rounded-2xl p-6 group-hover:border-accent-blue/30 transition-all duration-300">
                      <h4 className="text-lg font-semibold text-text-primary mb-4 group-hover:text-white transition-colors duration-300">
                        Activités clés :
                      </h4>
                      <div className="grid sm:grid-cols-2 gap-3">
                        {phase.activities.map((activity, idx) => (
                          <div key={idx} className="flex items-start gap-3">
                            <CheckCircle className="w-4 h-4 text-success-green flex-shrink-0 mt-1" />
                            <span className="text-text-secondary text-sm leading-relaxed group-hover:text-text-primary/90 transition-colors duration-300">
                              {activity}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-success-green/10 to-accent-blue/10 border border-success-green/20 rounded-full px-8 py-4">
            <TrendingUp className="w-6 h-6 text-success-green" />
            <span className="text-text-primary font-medium">
              Résultats mesurables dès la première semaine d'implémentation
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProcessTimeline;