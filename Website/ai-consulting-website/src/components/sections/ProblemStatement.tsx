'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { AlertCircle, Clock, Zap } from 'lucide-react';

const ProblemStatement: React.FC = () => {
  const problems = [
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Noyés dans les tâches répétitives",
      description: "Vos développeurs passent 40% de leur temps sur du code standard, de la documentation et des revues de code de routine. Pendant ce temps, les demandes clients augmentent et les délais se resserrent. Vous savez que l'IA pourrait aider, mais quels outils? Comment les implémenter? Quand trouver le temps?"
    },
    {
      icon: <AlertCircle className="w-8 h-8" />,
      title: "Résultats IA incohérents",
      description: "Vous avez essayé ChatGPT pour la génération de code. Peut-être GitHub Copilot. Parfois ça aide, parfois ça crée plus de travail. Votre équipe se frustre avec des résultats incohérents et retourne aux anciennes habitudes. Les gains de productivité dont vous lisez semblent impossibles à atteindre."
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Pas le temps d'apprendre",
      description: "Entre le travail client, la gestion d'équipe et les urgences, quand rechercher les outils IA? La courbe d'apprentissage semble raide, la documentation est dispersée, et vous ne pouvez pas expérimenter sur les projets clients. Vous avez besoin de solutions éprouvées, pas de complexité supplémentaire."
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
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="grid grid-cols-8 gap-4 h-full p-8">
            {Array.from({ length: 64 }, (_, i) => (
              <div 
                key={i} 
                className="bg-text-secondary rounded-full animate-pulse" 
                style={{
                  animationDelay: `${i * 0.1}s`,
                  animationDuration: '4s'
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
            Petites équipes, grand écart de productivité
          </h2>
          <p className="text-xl text-text-secondary max-w-4xl mx-auto leading-relaxed">
            Les outils IA promettent 30%+ de gains d'efficacité. La plupart des équipes n'atteignent que 10-15%. 
            <span className="text-accent-blue font-semibold"> Nous comblons cet écart.</span>
          </p>
        </motion.div>

        {/* Problem Cards */}
        <motion.div
          className="grid md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              className="group relative bg-primary-900/50 backdrop-blur-sm border border-primary-700 rounded-2xl p-8 hover:border-accent-blue/50 transition-all duration-300"
              variants={itemVariants}
              whileHover={{ 
                scale: 1.02,
                y: -5,
                transition: { duration: 0.2 }
              }}
            >
              {/* Icon background glow */}
              <div className="absolute top-8 left-8 w-12 h-12 bg-accent-blue/20 rounded-full blur-xl group-hover:bg-accent-blue/30 transition-all duration-300"></div>
              
              {/* Icon */}
              <div className="relative text-accent-blue mb-6 group-hover:text-accent-blue-light transition-colors duration-300">
                {problem.icon}
              </div>

              {/* Content */}
              <h3 className="text-h3 font-semibold mb-4 text-text-primary group-hover:text-white transition-colors duration-300">
                {problem.title}
              </h3>
              <p className="text-text-secondary leading-relaxed group-hover:text-text-primary/90 transition-colors duration-300">
                {problem.description}
              </p>

              {/* Hover effect border */}
              <div className="absolute inset-0 bg-gradient-to-r from-accent-blue/0 via-accent-blue/5 to-accent-purple/0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-accent-blue/10 to-accent-purple/10 border border-accent-blue/20 rounded-full px-6 py-3">
            <div className="w-2 h-2 bg-accent-blue rounded-full animate-pulse"></div>
            <span className="text-text-secondary text-sm">
              Il est temps de transformer votre équipe avec l'IA
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProblemStatement;