'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Wrench, Eye, Code2, Bot, Zap, Target, Rocket } from 'lucide-react';

const TrainingContent: React.FC = () => {
  const modules = [
    {
      number: "1",
      icon: <Brain className="w-6 h-6" />,
      title: "Comprendre les enjeux actuels du développement logiciel",
      description: "Identifier les vrais goulots d'étranglement et comprendre comment les agents IA peuvent alléger la charge."
    },
    {
      number: "2", 
      icon: <Target className="w-6 h-6" />,
      title: "Fondamentaux de la programmation agentique",
      description: "Différence entre vibe coding et programmation agentique. Principes pour structurer un workflow avec des agents."
    },
    {
      number: "3",
      icon: <Eye className="w-6 h-6" />,
      title: "Panorama des outils et pratiques",
      description: "État des lieux des derniers éditeurs de code et outils IA. Veille technologique des environnements de développement."
    },
    {
      number: "4",
      icon: <Code2 className="w-6 h-6" />,
      title: "Mise en pratique avec Claude Code et outils incontournables",
      description: "Configuration d'un environnement de travail. Exemples d'utilisation concrète pour génération et automatisation."
    },
    {
      number: "5",
      icon: <Bot className="w-6 h-6" />,
      title: "Agents spécialisés et MCP",
      description: "Comprendre le rôle des agents dédiés. Comment garder les agents alignés et gérer la complexité."
    },
    {
      number: "6",
      icon: <Wrench className="w-6 h-6" />,
      title: "Démonstrations pratiques",
      description: "Créer un site web à partir d'une description. Construire un tableau de bord en quelques étapes."
    },
    {
      number: "7",
      icon: <Zap className="w-6 h-6" />,
      title: "Productivité et efficacité",
      description: "Astuces, raccourcis et bonnes pratiques pour coder plus vite et plus proprement."
    },
    {
      number: "8",
      icon: <Rocket className="w-6 h-6" />,
      title: "Du code au déploiement",
      description: "Bases du déploiement pour mettre en production ses projets rapidement et efficacement."
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const moduleVariants = {
    hidden: { 
      opacity: 0, 
      y: 20
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section className="py-24 bg-gradient-to-br from-background-dark via-background-dark-alt to-background-dark relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="grid grid-cols-10 gap-3 h-full p-6">
          {Array.from({ length: 100 }, (_, i) => (
            <div 
              key={i} 
              className="bg-accent-red rounded-lg animate-pulse" 
              style={{
                animationDelay: `${i * 0.08}s`,
                animationDuration: '4s'
              }}
            />
          ))}
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
            Contenu de la formation
          </h2>
          <p className="text-xl text-text-secondary max-w-4xl mx-auto leading-relaxed">
            <span className="text-accent-red font-semibold">8 modules structurés</span> pour maîtriser la programmation agentique de A à Z.
          </p>
        </motion.div>

        {/* Modules Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {modules.map((module, index) => (
            <motion.div
              key={index}
              className="group relative bg-gradient-to-br from-primary-900/50 to-primary-800/30 backdrop-blur-sm border border-primary-700 rounded-2xl p-6 hover:border-accent-red/50 transition-all duration-300 hover:scale-105"
              variants={moduleVariants}
              whileHover={{ 
                y: -5,
                transition: { duration: 0.2 }
              }}
            >
              {/* Module number */}
              <div className="absolute -top-3 -right-3 w-8 h-8 bg-gradient-to-r from-accent-red to-accent-red/80 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">{module.number}</span>
              </div>

              {/* Icon */}
              <div className="mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-accent-red/20 to-accent-red/10 rounded-xl flex items-center justify-center group-hover:from-accent-red/30 group-hover:to-accent-red/20 transition-all duration-300">
                  <div className="text-accent-red group-hover:text-accent-red-light transition-colors duration-300">
                    {module.icon}
                  </div>
                </div>
              </div>

              {/* Content */}
              <h3 className="text-lg font-semibold mb-3 text-text-primary group-hover:text-text-primary transition-colors duration-300 leading-tight">
                {module.title}
              </h3>
              <p className="text-text-secondary text-sm leading-relaxed group-hover:text-text-primary/90 transition-colors duration-300">
                {module.description}
              </p>

              {/* Hover effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-accent-red/0 via-accent-red/5 to-accent-red/0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TrainingContent;