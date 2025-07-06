'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Brain, GitBranch, Database, Network, Settings, Monitor, Shield, Zap } from 'lucide-react';

const TechnicalStack: React.FC = () => {
  const stackCategories = [
    {
      title: "LLM Core & Orchestration",
      icon: <Brain className="w-8 h-8" />,
      color: "accent-blue",
      tools: [
        {
          name: "Claude-4 Sonnet",
          description: "Fine-tuné sur votre codebase avec prompts optimisés",
          features: ["200K context window", "Code analysis avancée", "Reasoning complexe"]
        },
        {
          name: "CrewAI Framework",
          description: "Orchestration multi-agents avec hiérarchie et délégation",
          features: ["Process hierarchical", "Memory persistante", "Task delegation"]
        },
        {
          name: "LangChain + Custom MCPs",
          description: "Intégrations natives et chaînes de traitement personnalisées",
          features: ["Connecteurs natifs", "Custom tools", "Chaining avancé"]
        }
      ]
    },
    {
      title: "Development Integration",
      icon: <GitBranch className="w-8 h-8" />,
      color: "accent-purple",
      tools: [
        {
          name: "Claude.dev Extension",
          description: "Configuration optimisée avec votre environnement de dev",
          features: ["VSCode integration", "Live suggestions", "Context awareness"]
        },
        {
          name: "GitHub Actions + Agents",
          description: "CI/CD orchestré par des agents intelligents",
          features: ["Auto-review", "Test generation", "Deploy automation"]
        },
        {
          name: "Repository Intelligence",
          description: "Analyse sémantique complète de votre codebase",
          features: ["Code mapping", "Dependency analysis", "Pattern detection"]
        }
      ]
    },
    {
      title: "Agent Observability",
      icon: <Monitor className="w-8 h-8" />,
      color: "accent-teal",
      tools: [
        {
          name: "Real-time Dashboards",
          description: "Visualisation complète des workflows d'agents",
          features: ["Task tracking", "Performance metrics", "Error monitoring"]
        },
        {
          name: "Agent Memory Viewer",
          description: "Inspection et debug des contextes d'agents",
          features: ["Memory states", "Decision trees", "Context evolution"]
        },
        {
          name: "Performance Analytics",
          description: "Métriques détaillées et optimisation continue",
          features: ["Latency tracking", "Success rates", "Cost optimization"]
        }
      ]
    },
    {
      title: "Advanced Toolchains",
      icon: <Settings className="w-8 h-8" />,
      color: "success-green",
      tools: [
        {
          name: "Custom Prompt Libraries",
          description: "Bibliothèques internes optimisées pour votre domaine",
          features: ["Domain-specific", "Version controlled", "A/B tested"]
        },
        {
          name: "Agent Blueprints",
          description: "Templates d'agents pour cas d'usage complexes",
          features: ["Pre-configured", "Battle-tested", "Extensible"]
        },
        {
          name: "Legacy Migration Agents",
          description: "Outils spécialisés pour modernisation de code",
          features: ["Pattern analysis", "Safe refactoring", "Incremental migration"]
        }
      ]
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

  const categoryVariants = {
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
        duration: 0.8
      }
    }
  };

  return (
    <section id="technical-stack" className="py-24 bg-gradient-to-br from-primary-800 to-primary-900 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="grid grid-cols-8 gap-4 h-full p-8">
          {Array.from({ length: 64 }, (_, i) => (
            <div 
              key={i} 
              className="bg-accent-blue rounded-lg animate-pulse" 
              style={{
                animationDelay: `${i * 0.1}s`,
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
            Stack IA de Production
          </h2>
          <p className="text-xl text-text-secondary max-w-4xl mx-auto leading-relaxed">
            Nous déployons une infrastructure IA complète, optimisée pour votre environnement de développement. 
            <span className="text-accent-blue font-semibold"> Pas d'outils isolés, mais un écosystème intégré.</span>
          </p>
        </motion.div>

        {/* Stack Categories */}
        <motion.div
          className="space-y-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {stackCategories.map((category, index) => (
            <motion.div
              key={category.title}
              className="group"
              variants={categoryVariants}
            >
              {/* Category Header */}
              <div className="flex items-center gap-4 mb-8">
                <div className={`w-16 h-16 bg-gradient-to-r from-${category.color}/20 to-${category.color}/30 rounded-2xl flex items-center justify-center group-hover:from-${category.color}/30 group-hover:to-${category.color}/40 transition-all duration-300`}>
                  <div className={`text-${category.color} group-hover:text-${category.color}-light transition-colors duration-300`}>
                    {category.icon}
                  </div>
                </div>
                <h3 className="text-h2 font-bold text-text-primary group-hover:text-text-primary transition-colors duration-300">
                  {category.title}
                </h3>
              </div>

              {/* Tools Grid */}
              <div className="grid md:grid-cols-3 gap-8">
                {category.tools.map((tool, toolIndex) => (
                  <motion.div
                    key={tool.name}
                    className="bg-primary-900/50 border border-primary-700 rounded-2xl p-6 hover:border-accent-blue/50 transition-all duration-300"
                    whileHover={{ 
                      scale: 1.02,
                      y: -5,
                      transition: { duration: 0.2 }
                    }}
                  >
                    {/* Tool Header */}
                    <div className="mb-4">
                      <h4 className="text-lg font-bold text-text-primary mb-2 group-hover:text-text-primary transition-colors duration-300">
                        {tool.name}
                      </h4>
                      <p className="text-text-secondary text-sm leading-relaxed">
                        {tool.description}
                      </p>
                    </div>

                    {/* Features */}
                    <div className="space-y-2">
                      {tool.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center gap-2">
                          <div className={`w-1.5 h-1.5 bg-${category.color} rounded-full flex-shrink-0`}></div>
                          <span className="text-text-secondary text-xs">{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* Technical Badge */}
                    <div className="mt-4">
                      <div className={`inline-flex items-center gap-2 bg-${category.color}/10 border border-${category.color}/20 rounded-full px-3 py-1`}>
                        <Zap className={`w-3 h-3 text-${category.color}`} />
                        <span className={`text-${category.color} text-xs font-medium`}>
                          Production Ready
                        </span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Technical Info */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="bg-primary-800/50 border border-primary-700 rounded-2xl p-8 max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-6 text-left">
              <div className="flex items-start gap-3">
                <Shield className="w-6 h-6 text-success-green flex-shrink-0 mt-1" />
                <div>
                  <h4 className="text-success-green font-semibold mb-2">Sécurité Entreprise</h4>
                  <p className="text-text-secondary text-sm">SOC2, audit trails, contrôles d'accès, chiffrement bout-en-bout</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Network className="w-6 h-6 text-accent-blue flex-shrink-0 mt-1" />
                <div>
                  <h4 className="text-accent-blue font-semibold mb-2">API-First</h4>
                  <p className="text-text-secondary text-sm">Architecture modulaire, intégrations natives, webhooks temps réel</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Database className="w-6 h-6 text-accent-purple flex-shrink-0 mt-1" />
                <div>
                  <h4 className="text-accent-purple font-semibold mb-2">Scaling Auto</h4>
                  <p className="text-text-secondary text-sm">Load balancing agents, memory distribuée, optimisation continue</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TechnicalStack;