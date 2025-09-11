'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle, ArrowRight, Code, Zap, GitBranch, Database } from 'lucide-react';
import CodeBlock from '@/components/ui/CodeBlock';

const AgentOrchestration: React.FC = () => {
  const claudeCodeLimitations = [
    {
      title: "Exécution Séquentielle",
      icon: <Code className="w-6 h-6" />,
      color: "warning-orange",
      description: "Claude Code traite un message à la fois",
      example: `// Claude Code (séquentiel)
Message 1 : Lire fichier 1
Message 2 : Lire fichier 2  
Message 3 : Analyser
Message 4 : Écrire solution
// Résultat : 4 cycles → lent`,
      details: [
        "Aucune parallélisation intégrée des tâches",
        "Chaque appel d'outil se fait séquentiellement dans un message",
        "Temps d'attente cumulatif sur les grandes opérations"
      ]
    },
    {
      title: "Approche Mono-Agent",
      icon: <GitBranch className="w-6 h-6" />,
      color: "warning-orange", 
      description: "Une seule instance IA gérant tous les aspects",
      details: [
        "Aucune spécialisation de rôles (architecte vs codeur vs testeur)",
        "Approche monolithique de résolution de problèmes",
        "Pas de perspectives multiples sur les défis complexes"
      ]
    },
    {
      title: "Mémoire de Session Limitée",
      icon: <Database className="w-6 h-6" />,
      color: "warning-orange",
      description: "Aucune persistance entre les sessions CLI",
      details: [
        "Le contexte se remet à zéro quand tu fermes/rouvres",
        "Doit rétablir la compréhension du projet à chaque fois", 
        "Perte des décisions et apprentissages précédents"
      ]
    },
    {
      title: "Défis de Scalabilité",
      icon: <Zap className="w-6 h-6" />,
      color: "warning-orange",
      description: "Performance dégradée sur très grandes bases de code",
      details: [
        "Aucune coordination automatique pour workflows complexes multi-étapes",
        "Décomposition manuelle des tâches requise",
        "Gestion limitée des projets d'entreprise à grande échelle"
      ]
    }
  ];

  return (
    <section className="py-24 bg-background-dark">
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
            Orchestration d'Agents
          </h2>
          <p className="text-xl text-text-secondary max-w-4xl mx-auto leading-relaxed">
            Le prochain niveau de Claude Code avec l'orchestration intelligente et les agents spécialisés.
          </p>
        </motion.div>


        {/* Our Solution: Agent Orchestration */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="bg-primary-blue/10 border border-primary-blue/20 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-primary-blue mb-6 text-center">
              La Solution d'Orchestration
            </h3>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left: Text Content */}
              <div>
                <p className="text-text-secondary leading-relaxed mb-6">
                  Notre système d'orchestration est un wrapper qui transforme Claude Code en une plateforme collaborative avancée. Il permet l'exécution parallèle, la spécialisation des agents, et de couvrir tout le cycle de développement.
                </p>

                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-primary-blue/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Zap className="w-4 h-4 text-primary-blue" />
                    </div>
                    <div>
                      <h4 className="text-primary-blue font-semibold mb-1">Principe BatchTool</h4>
                      <p className="text-text-secondary text-sm">
                        Encapsule plusieurs actions MCP dans un seul message pour l'exécution parallèle
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-accent-red/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <GitBranch className="w-4 h-4 text-accent-red" />
                    </div>
                    <div>
                      <h4 className="text-accent-red font-semibold mb-1">Coordination Intelligente</h4>
                      <p className="text-text-secondary text-sm">
                        Réduction de la latence réseau, du nombre de tokens, et du temps de coordination
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right: Diagram */}
              <div className="flex justify-center">
                <img 
                  src="/image/diagram_modes.svg" 
                  alt="Diagram des modes d'orchestration" 
                  className="max-w-full h-auto"
                />
              </div>
            </div>

            {/* Arrow pointing to benefits */}
            <div className="text-center mt-8">
              <ArrowRight className="w-8 h-8 text-primary-blue mx-auto animate-bounce" />
            </div>
          </div>
        </motion.div>


      </div>
    </section>
  );
};

export default AgentOrchestration;