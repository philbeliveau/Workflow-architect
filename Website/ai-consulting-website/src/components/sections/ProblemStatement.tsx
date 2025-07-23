'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { AlertCircle, Clock, Zap, Brain, Target, Workflow } from 'lucide-react';

const ProblemStatement: React.FC = () => {
  const problems = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: "\"Vibe coding\" décevant",
      description: "Taux de succès réel <20% pour du code production. Prompts flous, pas de méthode, aucune vérification. L'IA vous fait perdre du temps au lieu d'en gagner.",
      stat: "<20%"
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Contexte mal défini",
      description: "Pas de méthode claire pour spécifier objectifs, outputs attendus, ou contraintes. Résultat : des agents qui ne comprennent pas ce que vous voulez vraiment.",
      stat: "0% précision"
    },
    {
      icon: <Workflow className="w-8 h-8" />,
      title: "Brouillard technologique et complexité d'implémentation",
      description: "CrewAI, MCP, Claude-code... Trop d'outils, trop vite. Vous testez sans cadre, sans structure, sans méthode. Vous voulez les bénéfices de l'IA, mais pas passer 6 mois à tout apprendre. Comment l'intégrer sans casser l'existant ?",
      stat: "6 mois"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 30,
      scale: 0.95
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
      }
    }
  };

  return (
    <section className="py-24 bg-primary-800 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-3">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="grid grid-cols-12 gap-3 h-full p-8">
            {Array.from({ length: 144 }, (_, i) => (
              <div 
                key={i} 
                className="bg-accent-purple rounded-sm animate-pulse" 
                style={{
                  animationDelay: `${i * 0.05}s`,
                  animationDuration: '5s'
                }}
              ></div>
            ))}
          </div>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-h1 font-bold mb-6 text-text-primary">
            Le paradoxe de l'IA en développement
          </h2>
          <p className="text-xl text-text-secondary max-w-5xl mx-auto leading-relaxed mb-4">
            <span className="text-accent-purple font-semibold"> Mais les outils d'IA promettent des gains majeurs... et leur adoption reste décevante.</span>
          </p>
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-accent-purple/10 to-accent-gray/10 border border-accent-purple/20 rounded-full px-6 py-3">
            <div className="w-2 h-2 bg-accent-purple rounded-full animate-pulse"></div>
            <span className="text-text-secondary text-sm font-medium">
              Sortir du "vibe coding" pour maîtriser le context engineering
            </span>
          </div>
        </motion.div>

        {/* Problem Cards */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              className="group relative bg-primary-900/50 backdrop-blur-sm border border-primary-700 rounded-2xl p-6 hover:border-accent-purple/50 transition-all duration-300"
              variants={itemVariants}
              whileHover={{ 
                scale: 1.02,
                y: -5,
                transition: { duration: 0.2 }
              }}
            >
              {/* Icon background glow */}
              <div className="absolute top-6 left-6 w-10 h-10 bg-accent-purple/20 rounded-full blur-xl group-hover:bg-accent-purple/30 transition-all duration-300"></div>
              
              {/* Icon & Stat */}
              <div className="flex items-start justify-between mb-4">
                <div className="relative text-accent-purple group-hover:text-accent-purple-light transition-colors duration-300">
                  {problem.icon}
                </div>
                <div className="bg-accent-purple/10 border border-accent-purple/20 rounded-lg px-3 py-1">
                  <span className="text-accent-purple font-bold text-sm">{problem.stat}</span>
                </div>
              </div>

              {/* Content */}
              <h3 className="text-lg font-semibold mb-3 text-text-primary group-hover:text-text-primary transition-colors duration-300">
                {problem.title}
              </h3>
              <p className="text-text-secondary text-sm leading-relaxed group-hover:text-text-primary/90 transition-colors duration-300">
                {problem.description}
              </p>

              {/* Hover effect border */}
              <div className="absolute inset-0 bg-gradient-to-r from-accent-purple/0 via-accent-purple/5 to-accent-gray/0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="max-w-3xl mx-auto">
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProblemStatement;