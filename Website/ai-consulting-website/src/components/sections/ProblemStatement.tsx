'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { AlertCircle, Clock, Zap, Brain, Target, Workflow, TrendingUp, Users, Rocket, CheckCircle } from 'lucide-react';

const ProblemStatement: React.FC = () => {
  const challenges = [
    "Les grands groupes nous le montrent, le code devient généré majoritairement par IA et agents",
    "Les outils disponibles amènent souvent à des résultats non pertinents",
    "Personne ne montre comment les utiliser professionnellement",
    "Contrôler ces agents et les aligner sur nos besoins est la clé"
  ];

  const promises = [
    "Comprendre le nouveau paradigme et en tirer parti",
    "Faire le travail de 5 personnes avec une seule",
    "Sortir du *vibe coding* pour adopter une programmation structurée, fiable et reproductible",
    "Scaler vos projets sans augmenter vos effectifs",
    "Déléguez aux agents spécialisés, et mettez leur puissance à votre service",
    "Couvrir tout le cycle de développement logiciel avec les agents"
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
            Pourquoi se former au développement agentique ?
          </h2>
        </motion.div>

        {/* Two Column Layout - Cohérent avec le design existant */}
        <motion.div
          className="grid lg:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Column 1: Challenges */}
          <motion.div
            className="group relative bg-primary-900/50 backdrop-blur-sm border border-primary-700 rounded-2xl p-8 hover:border-accent-purple/50 transition-all duration-300"
            variants={itemVariants}
            whileHover={{ 
              scale: 1.02,
              y: -5,
              transition: { duration: 0.2 }
            }}
          >
            {/* Header avec icône */}
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-accent-purple/20 rounded-xl flex items-center justify-center group-hover:bg-accent-purple/30 transition-all duration-300">
                <TrendingUp className="w-6 h-6 text-accent-purple" />
              </div>
              <h3 className="text-h2 font-bold text-text-primary">
                Le changement est rapide & brutal
              </h3>
            </div>
            
            {/* Liste des défis */}
            <div className="space-y-4">
              {challenges.map((challenge, index) => (
                <div key={index} className="flex items-start gap-4 group/item">
                  <CheckCircle className="w-3 h-3 text-accent-purple mt-1.5 flex-shrink-0 group-hover/item:scale-125 transition-transform duration-200 drop-shadow-lg" />
                  <span className="text-text-secondary leading-relaxed group-hover:text-text-primary/90 transition-colors duration-300">
                    {challenge}
                  </span>
                </div>
              ))}
            </div>

            {/* Hover effect border */}
            <div className="absolute inset-0 bg-gradient-to-r from-accent-purple/0 via-accent-purple/5 to-accent-purple/0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </motion.div>

          {/* Column 2: Promises */}
          <motion.div
            className="group relative bg-primary-900/50 backdrop-blur-sm border border-primary-700 rounded-2xl p-8 hover:border-primary-blue/50 transition-all duration-300"
            variants={itemVariants}
            whileHover={{ 
              scale: 1.02,
              y: -5,
              transition: { duration: 0.2 }
            }}
          >
            {/* Header avec icône */}
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-primary-blue/20 rounded-xl flex items-center justify-center group-hover:bg-primary-blue/30 transition-all duration-300">
                <Rocket className="w-6 h-6 text-primary-blue" />
              </div>
              <h3 className="text-h2 font-bold text-text-primary">
                Ce qu'on vous permet de faire
              </h3>
            </div>
            
            {/* Liste des promesses */}
            <div className="space-y-4">
              {promises.map((promise, index) => (
                <div key={index} className="flex items-start gap-4 group/item">
                  <CheckCircle className="w-3 h-3 text-primary-blue mt-1.5 flex-shrink-0 group-hover/item:scale-125 transition-transform duration-200 drop-shadow-lg" />
                  <span className="text-text-secondary leading-relaxed group-hover:text-text-primary/90 transition-colors duration-300">
                    {promise}
                  </span>
                </div>
              ))}
            </div>

            {/* Hover effect border */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary-blue/0 via-primary-blue/5 to-primary-blue/0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </motion.div>
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