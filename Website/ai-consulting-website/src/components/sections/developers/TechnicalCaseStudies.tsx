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
      color: "text-primary-blue",
      bgColor: "primary-blue/10",
      borderColor: "primary-blue/30",
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
      color: "text-accent-red",
      bgColor: "accent-red/10",
      borderColor: "accent-red/30",
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
      color: "text-success-green",
      bgColor: "success-green/10",
      borderColor: "success-green/30",
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
      color: "text-hover-interactive",
      bgColor: "hover-interactive/10",
      borderColor: "hover-interactive/30",
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
            Cas d'Usage Techniques
          </h2>
          <p className="text-xl text-text-secondary max-w-4xl mx-auto leading-relaxed">
            Comment nos agents IA collaboratifs gèrent les préoccupations de sécurité
            <span className="text-primary-blue font-semibold block mt-2">
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
          <div className="bg-gradient-to-r from-warning-orange/10 to-accent-red/10 border border-warning-orange/20 rounded-2xl p-6">
            <div className="text-center mb-6">
              <div className="inline-flex items-center gap-3 mb-3">
                <Shield className="w-6 h-6 text-warning-orange" />
                <h3 className="text-xl font-bold text-warning-orange">
                  Cas d'Usage Sécurité
                </h3>
              </div>
              <p className="text-text-primary text-base max-w-2xl mx-auto">
                Comment nos agents IA collaboratifs détectent et corrigent les vulnérabilités automatiquement
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-4">
              <div className="text-center p-4">
                <div className="w-12 h-12 bg-accent-red/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <AlertTriangle className="w-6 h-6 text-accent-red" />
                </div>
                <h4 className="text-accent-red font-semibold mb-2">Problème</h4>
                <p className="text-text-secondary text-sm leading-relaxed">
                  Débordements de tampon et failles de sécurité non détectées
                </p>
              </div>
              
              <div className="text-center p-4">
                <div className="w-12 h-12 bg-success-green/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Users className="w-6 h-6 text-success-green" />
                </div>
                <h4 className="text-success-green font-semibold mb-2">Solution</h4>
                <p className="text-text-secondary text-sm leading-relaxed">
                  Agents spécialisés en sécurité travaillant en collaboration
                </p>
              </div>
              
              <div className="text-center p-4">
                <div className="w-12 h-12 bg-primary-blue/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <CheckCircle className="w-6 h-6 text-primary-blue" />
                </div>
                <h4 className="text-primary-blue font-semibold mb-2">Résultat</h4>
                <p className="text-text-secondary text-sm leading-relaxed">
                  Code sécurisé validé et prêt pour la production
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
            {/* Top Flow Line - First to Last Card */}
            <div className="absolute -top-8 left-0 right-0 z-10 hidden lg:block">
              <div className="relative h-2">
                <div className="absolute top-1/2 transform -translate-y-1/2 left-[10%] right-[10%] h-1 bg-gradient-to-r from-primary-blue to-accent-red rounded-full"></div>
              </div>
            </div>

            {/* Bottom Flow Line - Last to First Card */}
            <div className="absolute -bottom-8 left-0 right-0 z-10 hidden lg:block">
              <div className="relative h-2">
                <div className="absolute top-1/2 transform -translate-y-1/2 left-[10%] right-[10%] h-1 bg-gradient-to-l from-primary-blue to-accent-red rounded-full"></div>
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
                  <div className={`bg-${agent.bgColor} border-2 border-${agent.borderColor} rounded-2xl p-6 h-[480px] flex flex-col justify-between hover:border-${agent.borderColor.replace('/30', '/50')} transition-all duration-300`}>
                    {/* Agent Header */}
                    <div className="text-center mb-4">
                      <h4 className={`text-lg font-bold ${agent.color} mb-1`}>
                        {agent.agent}
                      </h4>
                      <p className={`${agent.phase === 'Développement' ? 'text-gray-700' : 'text-text-light'} text-sm mb-2`}>
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
                      <h5 className={`${agent.phase === 'Développement' ? 'text-gray-900' : 'text-text-light'} font-semibold text-sm mb-2`}>Actions :</h5>
                      {agent.actions.map((action, aIndex) => (
                        <div key={aIndex} className="flex items-start gap-2">
                          <div className={`w-2 h-2 ${agent.color.replace('text-', 'bg-')} rounded-full mt-2 flex-shrink-0`}></div>
                          <span className={`${agent.phase === 'Développement' ? 'text-gray-800' : 'text-text-light'} text-xs leading-relaxed`}>
                            {action}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Concerns */}
                    <div className="space-y-2">
                      <h5 className={`${agent.phase === 'Développement' ? 'text-gray-900' : 'text-text-light'} font-semibold text-sm mb-2`}>Détecte :</h5>
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