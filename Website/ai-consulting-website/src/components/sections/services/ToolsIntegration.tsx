'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Code, Github, Zap, Users, Settings, Brain } from 'lucide-react';

const ToolsIntegration: React.FC = () => {
  const tools = [
    {
      name: "Claude/ChatGPT",
      icon: <Brain className="w-8 h-8" />,
      description: "Ingénierie de prompts avancée pour la génération de code, le débogage et les décisions architecturales. Nous créons des prompts personnalisés pour vos cas d'usage spécifiques et les intégrons dans votre flux de travail quotidien.",
      features: [
        "Prompts personnalisés pour votre domaine",
        "Intégration IDE native",
        "Génération de code contextuelle",
        "Architecture et design patterns"
      ],
      color: "accent-blue"
    },
    {
      name: "GitHub Copilot",
      icon: <Github className="w-8 h-8" />,
      description: "Au-delà de l'autocomplétion basique – nous configurons Copilot pour une productivité maximale avec vos modèles de codage, l'intégrons avec vos flux de travail de test et formons votre équipe aux modèles d'usage avancés.",
      features: [
        "Configuration optimisée pour votre stack",
        "Intégration avec les tests",
        "Patterns de codage personnalisés",
        "Formation équipe avancée"
      ],
      color: "accent-purple"
    },
    {
      name: "Cursor",
      icon: <Code className="w-8 h-8" />,
      description: "L'éditeur de code alimenté par l'IA qui prédit votre prochaine modification. Nous gérons la configuration, la configuration et la formation équipe pour vous assurer d'obtenir le bénéfice de productivité complet dès le premier jour.",
      features: [
        "Configuration environnement complet",
        "Prédiction contextuelle avancée",
        "Intégration avec votre workflow",
        "Formation et bonnes pratiques"
      ],
      color: "accent-teal"
    },
    {
      name: "CrewAI & Autogen",
      icon: <Users className="w-8 h-8" />,
      description: "Systèmes multi-agents qui gèrent des tâches de développement complexes. Des revues de code automatisées aux stratégies de test intelligentes, nous implémentons des essaims d'agents qui travaillent 24/7 pour votre équipe.",
      features: [
        "Agents de revue de code automatisés",
        "Systèmes de test intelligents",
        "Coordination multi-agents",
        "Surveillance et optimisation"
      ],
      color: "success-green"
    },
    {
      name: "Scripts d'automatisation",
      icon: <Settings className="w-8 h-8" />,
      description: "Automatisation sur mesure pour vos besoins de flux de travail spécifiques. Que ce soit le déploiement automatisé, l'analyse de code intelligente ou les intégrations personnalisées, nous construisons ce dont vous avez besoin pour maximiser la productivité.",
      features: [
        "Automatisation déploiement CI/CD",
        "Analyse de code intelligente",
        "Intégrations API personnalisées",
        "Monitoring et alertes"
      ],
      color: "warning-orange"
    },
    {
      name: "Outils spécialisés",
      icon: <Zap className="w-8 h-8" />,
      description: "Selon vos besoins spécifiques, nous intégrons des outils IA spécialisés pour votre domaine : Tabnine pour l'autocomplétion, CodeT5 pour la refactorisation, ou des modèles personnalisés pour votre stack technologique unique.",
      features: [
        "Sélection d'outils personnalisée",
        "Intégration stack-spécifique",
        "Modèles IA sur mesure",
        "Évaluation et benchmarking"
      ],
      color: "accent-blue-light"
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

  const toolVariants = {
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
    <section className="py-24 bg-gradient-to-br from-primary-800 to-primary-900 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="grid grid-cols-8 gap-4 h-full p-8">
          {Array.from({ length: 64 }, (_, i) => (
            <div 
              key={i} 
              className="bg-accent-blue rounded-lg animate-pulse" 
              style={{
                animationDelay: `${i * 0.1}s`,
                animationDuration: '3s'
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
            Les outils IA qui alimentent une livraison 3x plus rapide
          </h2>
          <p className="text-xl text-text-secondary max-w-4xl mx-auto leading-relaxed">
            Nous intégrons les meilleurs outils IA dans des flux de travail fluides 
            <span className="text-accent-blue font-semibold"> adaptés à votre équipe</span>
          </p>
        </motion.div>

        {/* Tools Grid */}
        <motion.div
          className="grid lg:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {tools.map((tool, index) => (
            <motion.div
              key={index}
              className="group bg-primary-900/50 backdrop-blur-sm border border-primary-700 rounded-2xl p-8 hover:border-accent-blue/50 transition-all duration-300"
              variants={toolVariants}
              whileHover={{ 
                scale: 1.02,
                y: -5,
                transition: { duration: 0.2 }
              }}
            >
              {/* Header */}
              <div className="flex items-start gap-4 mb-6">
                <div className={`w-16 h-16 bg-gradient-to-r from-${tool.color}/20 to-${tool.color}/30 rounded-2xl flex items-center justify-center group-hover:from-${tool.color}/30 group-hover:to-${tool.color}/40 transition-all duration-300`}>
                  <div className={`text-${tool.color} group-hover:text-${tool.color}-light transition-colors duration-300`}>
                    {tool.icon}
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-h3 font-bold text-text-primary group-hover:text-white transition-colors duration-300 mb-2">
                    {tool.name}
                  </h3>
                </div>
              </div>

              {/* Description */}
              <p className="text-text-secondary leading-relaxed mb-6 group-hover:text-text-primary/90 transition-colors duration-300">
                {tool.description}
              </p>

              {/* Features */}
              <div className="space-y-3">
                <h4 className="text-lg font-semibold text-text-primary group-hover:text-white transition-colors duration-300">
                  Fonctionnalités clés :
                </h4>
                <div className="grid grid-cols-1 gap-2">
                  {tool.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <div className={`w-2 h-2 bg-${tool.color} rounded-full`}></div>
                      <span className="text-text-secondary text-sm group-hover:text-text-primary/90 transition-colors duration-300">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Hover effect */}
              <div className={`absolute inset-0 bg-gradient-to-r from-${tool.color}/0 via-${tool.color}/5 to-${tool.color}/0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom section */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-r from-accent-blue/10 to-accent-purple/10 border border-accent-blue/20 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-h3 font-bold text-text-primary mb-4">
              Approche personnalisée pour chaque équipe
            </h3>
            <p className="text-text-secondary leading-relaxed mb-6">
              Nous ne imposons pas une solution unique. Chaque équipe reçoit une combinaison d'outils 
              soigneusement sélectionnée et configurée selon sa pile technologique, ses processus existants 
              et ses objectifs spécifiques.
            </p>
            <div className="flex flex-wrap justify-center items-center gap-8 text-sm text-text-muted">
              <span className="flex items-center gap-2">
                <div className="w-2 h-2 bg-success-green rounded-full animate-pulse"></div>
                Configuration sur mesure
              </span>
              <span className="flex items-center gap-2">
                <div className="w-2 h-2 bg-accent-blue rounded-full animate-pulse"></div>
                Formation complète équipe
              </span>
              <span className="flex items-center gap-2">
                <div className="w-2 h-2 bg-accent-purple rounded-full animate-pulse"></div>
                Support continu
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ToolsIntegration;