'use client';

import React from 'react';
import { motion } from 'framer-motion';
import CodeBlock from '@/components/ui/CodeBlock';
import { Search, Settings, TrendingUp, ArrowRight } from 'lucide-react';

const SolutionOverview: React.FC = () => {
  const steps = [
    {
      number: "01",
      icon: <Search className="w-8 h-8" />,
      title: "Nous évaluons votre situation actuelle",
      description: "Audit complet de vos processus existants - développement, gestion de projet, outils métier. Nous identifions exactement où l'IA peut avoir le plus grand impact selon votre profil (technique ou métier)."
    },
    {
      number: "02",
      icon: <Settings className="w-8 h-8" />,
      title: "Nous intégrons sans perturber",
      description: "Installation des systèmes IA adaptés à votre parcours. Pour les développeurs : orchestration d'agents avancée. Pour les dirigeants : environnement no-code sécurisé. Tout fonctionne avec vos outils actuels."
    },
    {
      number: "03",
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Nous mesurons et soutenons",
      description: "Suivi continu des métriques de performance. Optimisation régulière des systèmes. Support technique permanent. Mises à jour avec les dernières capacités IA. Votre succès est notre priorité."
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
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-accent-blue rounded-full blur-3xl animate-pulse delay-1000"></div>
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
            Notre Approche : Améliorer, Pas Remplacer
          </h2>
          <p className="text-xl text-text-secondary max-w-4xl mx-auto leading-relaxed">
            Nous installons des systèmes IA qui s'intègrent à vos outils existants. 
            <span className="text-accent-blue font-semibold"> Aucune courbe d'apprentissage. Aucun changement de processus. Juste plus d'efficacité.</span>
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
                    <span className="text-6xl font-bold text-accent-blue/20 group-hover:text-accent-blue/40 transition-colors duration-300">
                      {step.number}
                    </span>
                    <div>
                      <h3 className="text-h2 font-bold text-text-primary group-hover:text-white transition-colors duration-300">
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
                      <div className="flex items-center gap-2 text-accent-blue group-hover:text-accent-blue-light transition-colors duration-300">
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
                    <div className="absolute inset-0 bg-gradient-to-r from-accent-blue to-accent-purple rounded-3xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
                    
                    {/* Main icon container */}
                    <div className="relative bg-gradient-to-r from-accent-blue/10 to-accent-purple/10 border border-accent-blue/20 rounded-3xl p-12 group-hover:border-accent-blue/40 transition-all duration-300">
                      <div className="text-accent-blue group-hover:text-accent-blue-light transition-colors duration-300">
                        {step.icon}
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* Arrow for mobile */}
                {index < steps.length - 1 && (
                  <div className="lg:hidden flex justify-center">
                    <div className="w-px h-12 bg-gradient-to-b from-accent-blue to-transparent"></div>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Code Example */}
        <motion.div
          className="mt-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-12">
            <h3 className="text-h2 font-bold text-text-primary mb-4">
              Exemple : Revue de code automatisée (Parcours Développeur)
            </h3>
            <p className="text-text-secondary max-w-2xl mx-auto">
              Voici comment nous automatisons les revues de code avec CrewAI et Claude-code
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <CodeBlock
              title="ai-workflow.tsx"
              code={`// Configuration CrewAI pour revue automatique
const reviewAgent = new Agent({
  role: "Code Reviewer",
  goal: "Analyser et améliorer la qualité du code",
  tools: [ClaudeCodeTool, GitHubAPI, JiraIntegration]
});

// Pipeline automatisé de revue
async function automatedReview(pullRequest: PR) {
  const analysis = await reviewAgent.analyze({
    code: pullRequest.changes,
    context: await getProjectContext(),
    standards: projectStandards
  });
  
  // Création automatique des commentaires
  await githubAPI.createReviewComments(analysis.suggestions);
  
  // Mise à jour du ticket Jira
  await jiraAPI.updateIssue(pullRequest.issueKey, {
    status: analysis.quality > 0.8 ? "Ready" : "Needs Work"
  });
}`}
              language="typescript"
            />
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-success-green/10 to-accent-blue/10 border border-success-green/20 rounded-full px-8 py-4">
            <div className="w-3 h-3 bg-success-green rounded-full animate-pulse"></div>
            <span className="text-text-primary font-medium">
              Nous améliorons • Nous intégrons • Nous mesurons • Nous soutenons
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SolutionOverview;