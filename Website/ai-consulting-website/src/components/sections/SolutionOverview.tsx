'use client';

import React from 'react';
import { motion } from 'framer-motion';
import CodeBlock from '@/components/ui/CodeBlock';
import { Search, GraduationCap, Target, ArrowRight, Brain, Zap } from 'lucide-react';

const SolutionOverview: React.FC = () => {
  const viberVsAgentic = [
    {
      aspect: "Approche",
      vibe: "Prompt one-shot",
      agentic: "Orchestration planifiée",
      icon: <Brain className="w-5 h-5" />
    },
    {
      aspect: "Taux de succès",
      vibe: "<20% en production",
      agentic: "Prédictible et mesurable",
      icon: <Target className="w-5 h-5" />
    },
    {
      aspect: "Autonomie",
      vibe: "Faible, piloté à la main",
      agentic: "Élevée, agents guidés par des MCP",
      icon: <Zap className="w-5 h-5" />
    }
  ];

  const steps = [
    {
      number: "01",
      icon: <Search className="w-8 h-8" />,
      title: "Analyse ciblée de vos opérations",
      description: "On s'assoit avec vous pour comprendre vos enjeux, vos outils et vos projets. Évaluation du potentiel IA : on identifie les points d'entrée les plus prometteurs pour l'automatisation."
    },
    {
      number: "02",
      icon: <GraduationCap className="w-8 h-8" />,
      title: "Formation actionnable",
      description: "Vous recevez nos frameworks, nos modèles de prompts, nos checklists de design. Mise en situation guidée : exemples concrets appliqués à vos cas réels, sans jamais toucher à votre infra."
    },
    {
      number: "03",
      icon: <Target className="w-8 h-8" />,
      title: "Support asynchrone",
      description: "Possibilité de nous recontacter pour débloquer des points spécifiques ou ajuster les pratiques. Nous ne construisons pas vos agents, nous vous donnons le manuel et la méthode."
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

  const stepVariants = {
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
    <section className="py-24 bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 right-20 w-64 h-64 bg-accent-purple rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-accent-purple rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Background grid pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="grid grid-cols-12 gap-2 h-full p-4">
          {Array.from({ length: 144 }, (_, i) => (
            <div 
              key={i} 
              className="bg-text-secondary rounded-sm animate-pulse" 
              style={{
                animationDelay: `${i * 0.05}s`,
                animationDuration: '3s'
              }}
            ></div>
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
            Du Vibe Coding à une approche de programmation structuré
          </h2>
          <p className="text-xl text-text-secondary max-w-4xl mx-auto leading-relaxed">
            Nous ne développons pas vos agents, nous vous donnons le manuel et la méthode pour qu'ils vous obéissent vraiment. 
            <span className="text-accent-purple font-semibold"> Formation actionnable. Résultats mesurables. Autonomie complète.</span>
          </p>
        </motion.div>

        {/* Steps */}
        <motion.div
          className="space-y-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="group"
              variants={stepVariants}
            >
              <div className={`flex flex-col lg:flex-row items-center gap-12 ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}>
                {/* Content */}
                <div className="flex-1 space-y-6">
                  {/* Step number and title */}
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-6xl font-bold text-accent-purple/20 group-hover:text-accent-purple/40 transition-colors duration-300">
                      {step.number}
                    </span>
                    <div>
                      <h3 className="text-h2 font-bold text-text-primary group-hover:text-text-primary transition-colors duration-300">
                        {step.title}
                      </h3>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-lg text-text-secondary leading-relaxed group-hover:text-text-primary/90 transition-colors duration-300">
                    {step.description}
                  </p>

                  {/* Arrow for desktop */}
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block">
                      <div className="flex items-center gap-2 text-accent-purple group-hover:text-accent-purple-light transition-colors duration-300">
                        <ArrowRight className="w-5 h-5" />
                        <span className="text-sm font-medium">Étape suivante</span>
                      </div>
                    </div>
                  )}
                </div>

                {/* Icon section */}
                <div className="flex-shrink-0">
                  <motion.div
                    className="relative"
                    whileHover={{ 
                      scale: 1.05,
                      rotate: 5,
                      transition: { duration: 0.3 }
                    }}
                  >
                    {/* Glow effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-accent-purple to-accent-gray rounded-3xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
                    
                    {/* Main icon container */}
                    <div className="relative bg-gradient-to-r from-accent-purple/10 to-accent-gray/10 border border-accent-purple/20 rounded-3xl p-12 group-hover:border-accent-purple/40 transition-all duration-300">
                      <div className="text-accent-purple group-hover:text-accent-purple-light transition-colors duration-300">
                        {step.icon}
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* Arrow for mobile */}
                {index < steps.length - 1 && (
                  <div className="lg:hidden flex justify-center">
                    <div className="w-px h-12 bg-gradient-to-b from-accent-purple to-transparent"></div>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>


      </div>
    </section>
  );
};

export default SolutionOverview;