'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Users, Code, TestTube, CheckCircle, AlertTriangle, Zap } from 'lucide-react';

const TechnicalCaseStudies: React.FC = () => {
  const caseStudy = {
    title: "Cas d'Usage : Préoccupations de Sécurité",
    subtitle: "Comment les agents IA répondent aux défis de sécurité avec un cycle constant",
    scenario: "Thomas a souligné les préoccupations de sécurité (par exemple, les débordements de tampon) que les outils d'IA pourraient manquer sans une invitation appropriée concernant les exigences d'architecture et de sécurité",
    solution: "Plusieurs agents d'IA spécialisés travaillant en collaboration (pour le codage, les tests de sécurité, etc.) pourraient améliorer considérablement les flux de travail de développement",
    environment: "Les environnements basés sur des conteneurs aident à rationaliser le développement en standardisant les exigences d'architecture"
  };

  const agentCycle = [
    {
      phase: "Développement",
      agent: "Coding Agent",
      color: "text-black",
      bgColor: "gray-100",
      borderColor: "gray-300",
      description: "Génère le code initial",
      actions: [
        "Écrit le code selon les spécifications",
        "Applique les patterns de sécurité connus",
        "Utilise les meilleures pratiques du langage"
      ],
      concerns: ["Débordements de tampon potentiels", "Validation d'entrée insuffisante"]
    },
    {
      phase: "Test Sécurité",
      agent: "Security Agent",
      color: "text-purple-600",
      bgColor: "purple-50",
      borderColor: "purple-300",
      description: "Analyse les vulnérabilités",
      actions: [
        "Scanne les vulnérabilités OWASP",
        "Détecte les débordements de tampon",
        "Valide la gestion des entrées utilisateur"
      ],
      concerns: ["CVE détectées", "Patterns dangereux identifiés"]
    },
    {
      phase: "Alignement",
      agent: "Alignment Agent",
      color: "text-purple-700",
      bgColor: "purple-100",
      borderColor: "purple-400",
      description: "Vérifie les exigences",
      actions: [
        "Compare avec les exigences de sécurité",
        "Valide l'alignement architectural", 
        "Confirme les standards entreprise"
      ],
      concerns: ["Non-conformité aux standards", "Exigences manquantes"]
    },
    {
      phase: "Enforcement",
      agent: "Quality Agent", 
      color: "text-purple-800",
      bgColor: "purple-200",
      borderColor: "purple-500",
      description: "Applique les corrections",
      actions: [
        "Corrige les vulnérabilités détectées",
        "Met à jour la documentation",
        "Optimise le code sécurisé"
      ],
      concerns: ["Corrections appliquées", "Standards respectés"]
    },
    {
      phase: "Vérification",
      agent: "Sub-Agent Verifier",
      color: "text-purple-900",
      bgColor: "purple-300",
      borderColor: "purple-600",
      description: "Vérifie le code généré",
      actions: [
        "Tests de sécurité automatisés",
        "Métriques de qualité",
        "Validation continue"
      ],
      concerns: ["Code vérifié et sécurisé", "Prêt pour la production"]
    }
  ];

  return (
    <section className="py-24 bg-primary-900">
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
            Cas d'Usage Techniques
          </h2>
          <p className="text-xl text-text-secondary max-w-4xl mx-auto leading-relaxed">
            Exemple concret : comment nos agents IA collaboratifs gèrent les préoccupations de sécurité
            <span className="text-accent-blue font-semibold block mt-2">
              avec un cycle constant de développement, test, alignement et vérification.
            </span>
          </p>
        </motion.div>

        {/* Case Study Context */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="bg-warning-orange/10 border border-warning-orange/20 rounded-2xl p-8">
            <div className="flex items-start gap-4 mb-6">
              <AlertTriangle className="w-8 h-8 text-warning-orange flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-2xl font-bold text-warning-orange mb-2">
                  {caseStudy.title}
                </h3>
                <p className="text-text-primary text-lg">
                  {caseStudy.subtitle}
                </p>
              </div>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6 text-sm">
              <div className="bg-primary-800/50 rounded-lg p-4">
                <h4 className="text-warning-orange font-semibold mb-2">🔍 Problème Identifié</h4>
                <p className="text-text-secondary leading-relaxed">
                  {caseStudy.scenario}
                </p>
              </div>
              
              <div className="bg-primary-800/50 rounded-lg p-4">
                <h4 className="text-success-green font-semibold mb-2">💡 Solution Proposée</h4>
                <p className="text-text-secondary leading-relaxed">
                  {caseStudy.solution}
                </p>
              </div>
              
              <div className="bg-primary-800/50 rounded-lg p-4">
                <h4 className="text-accent-blue font-semibold mb-2">🏗️ Environnement</h4>
                <p className="text-text-secondary leading-relaxed">
                  {caseStudy.environment}
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Agent Cycle Flow */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-text-primary text-center mb-12">
            🔄 Cycle Constant d'Agents Collaboratifs
          </h3>
          
          {/* Circular Flow Visualization */}
          <div className="relative">
            {/* Central Hub */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
              <div className="w-32 h-32 bg-gradient-to-r from-accent-blue/20 to-accent-purple/20 rounded-full border-2 border-accent-blue/30 flex items-center justify-center">
                <div className="text-center">
                  <Zap className="w-8 h-8 text-accent-blue mx-auto mb-2" />
                  <span className="text-accent-blue font-bold text-sm">Cycle<br/>Continu</span>
                </div>
              </div>
            </div>

            {/* Agent Cards in Circle */}
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-4">
              {agentCycle.map((agent, index) => (
                <motion.div
                  key={agent.phase}
                  className="group relative"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.2 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className={`bg-${agent.bgColor} border-2 border-${agent.borderColor} rounded-2xl p-6 h-[480px] flex flex-col justify-between hover:border-${agent.borderColor.replace('300', '500').replace('400', '600').replace('500', '700').replace('600', '800')} transition-all duration-300`}>
                    {/* Agent Header */}
                    <div className="text-center mb-4">
                      <h4 className={`text-lg font-bold ${agent.color} mb-1`}>
                        {agent.agent}
                      </h4>
                      <p className="text-gray-600 text-sm mb-2">
                        {agent.description}
                      </p>
                      <div className={`inline-block bg-${agent.bgColor} border border-${agent.borderColor} rounded-full px-3 py-1`}>
                        <span className={`${agent.color} text-xs font-medium`}>
                          {agent.phase}
                        </span>
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="space-y-3 mb-4 flex-grow">
                      <h5 className="text-gray-800 font-semibold text-sm mb-2">Actions :</h5>
                      {agent.actions.map((action, aIndex) => (
                        <div key={aIndex} className="flex items-start gap-2">
                          <div className={`w-2 h-2 ${agent.color.replace('text-', 'bg-')} rounded-full mt-2 flex-shrink-0`}></div>
                          <span className="text-gray-700 text-xs leading-relaxed">
                            {action}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Concerns */}
                    <div className="space-y-2">
                      <h5 className="text-gray-800 font-semibold text-sm mb-2">Détecte :</h5>
                      {agent.concerns.map((concern, cIndex) => (
                        <div key={cIndex} className="flex items-start gap-2">
                          <div className={`w-2 h-2 ${agent.color.replace('text-', 'bg-')} rounded-full mt-2 flex-shrink-0`}></div>
                          <span className={`${agent.color} text-xs leading-relaxed`}>
                            {concern}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TechnicalCaseStudies;