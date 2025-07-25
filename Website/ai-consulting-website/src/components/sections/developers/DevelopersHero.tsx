'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import CodeBlock from '@/components/ui/CodeBlock';
import { ArrowRight, Terminal, GitBranch, Cpu, Database } from 'lucide-react';

const DevelopersHero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-primary-900 pt-20">
      {/* Technical Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-72 h-72 bg-accent-blue rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent-purple rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        {/* Code pattern overlay */}
        <div className="absolute inset-0 opacity-5">
          <div className="grid grid-cols-12 gap-4 h-full p-8">
            {Array.from({ length: 144 }, (_, i) => (
              <div key={i} className="bg-text-secondary h-1 rounded animate-pulse" style={{
                animationDelay: `${i * 0.1}s`,
                animationDuration: '3s'
              }}></div>
            ))}
          </div>
        </div>
      </div>

      {/* Floating technical elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-1/4 text-accent-blue"
          animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          <Terminal size={48} />
        </motion.div>
        <motion.div
          className="absolute top-3/4 right-1/4 text-accent-purple"
          animate={{ y: [0, 20, 0], rotate: [0, -5, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        >
          <GitBranch size={56} />
        </motion.div>
        <motion.div
          className="absolute top-1/2 left-1/6 text-accent-teal"
          animate={{ y: [0, -15, 0], rotate: [0, 10, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        >
          <Cpu size={40} />
        </motion.div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              {/* Attention-Grabbing Paradox Section */}
              <div className="bg-warning-orange/10 border border-warning-orange/20 rounded-2xl p-6 mb-8">
                <div className="inline-flex items-center gap-2 bg-warning-orange/10 border border-warning-orange/20 rounded-full px-4 py-2 mb-4">
                  <Terminal className="w-4 h-4 text-warning-orange" />
                  <span className="text-warning-orange text-sm font-medium">Le Paradoxe du Développement IA</span>
                </div>
                <h2 className="text-2xl lg:text-3xl font-bold mb-3 text-text-primary">
                  Pourquoi Moins de <span className="text-warning-orange">20%</span> des Développeurs
                  <span className="block">Réussissent avec l'IA en Production</span>
                </h2>
                <p className="text-text-secondary mb-4 leading-relaxed">
                  La plupart sont coincés dans le <strong>"vibe coding"</strong> - prompts flous, contexte mal défini, aucune vérification.
                  <span className="block mt-2 text-accent-blue font-semibold">Il existe une meilleure approche : l'"agentic coding"</span>
                </p>
              </div>

              <div className="inline-flex items-center gap-2 bg-accent-blue/10 border border-accent-blue/20 rounded-full px-4 py-2 mb-6">
                <Terminal className="w-4 h-4 text-accent-blue" />
                <span className="text-accent-blue text-sm font-medium">De ChatGPT aux Systèmes Orchestrés</span>
              </div>
              
              <h1 className="text-4xl lg:text-5xl font-bold mb-6 text-text-primary">
                Transformez Votre <span className="text-warning-orange">"Vibe Coding"</span>
                <span className="block text-accent-blue">en "Agentic Coding"</span>
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <p className="text-lg text-text-secondary mb-8 leading-relaxed">
                Nous installons des systèmes d'agents multi-tâches avec <strong>Claude-4</strong>, <strong>CrewAI</strong>, et <strong>MCP</strong>. 
                Orchestration hierarchique, memory persistante, dashboards d'observabilité.
                <span className="text-success-green font-semibold block mt-2">
                  Résultats mesurés : 3x plus rapide, 90% moins de bugs, onboarding 2 semaines → 2 heures.
                </span>
              </p>

              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-primary-800/50 border border-primary-700 rounded-lg p-4">
                  <h3 className="text-accent-blue font-semibold mb-2 flex items-center gap-2">
                    <Cpu className="w-4 h-4" />
                    Stack IA Avancé
                  </h3>
                  <ul className="text-text-secondary text-sm space-y-1">
                    <li>• Claude-4 + fine-tuning custom</li>
                    <li>• CrewAI + LangChain orchestration</li>
                    <li>• MCPs pour intégrations natives</li>
                  </ul>
                </div>
                
                <div className="bg-primary-800/50 border border-primary-700 rounded-lg p-4">
                  <h3 className="text-accent-purple font-semibold mb-2 flex items-center gap-2">
                    <Database className="w-4 h-4" />
                    Observabilité Complète
                  </h3>
                  <ul className="text-text-secondary text-sm space-y-1">
                    <li>• Dashboards temps réel</li>
                    <li>• Tracing des tâches d'agents</li>
                    <li>• Métriques de performance</li>
                  </ul>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button 
                variant="primary" 
                size="lg" 
                href="/book-demo"
                className="group"
              >
                Configuration Technique Gratuite
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
              
              <Button 
                variant="outline" 
                size="lg" 
                href="#technical-stack"
              >
                Voir la Stack Complète
              </Button>
            </motion.div>
          </div>

          {/* Right: Code Example */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <CodeBlock
              title="crew_orchestration.py"
              code={`# Configuration CrewAI avec Claude-4 et observabilité
from crewai import Agent, Task, Crew
from claude_mcp import ClaudeCodeTool
from observability import AgentTracker

# Agent de revue de code avec mémoire persistante
code_reviewer = Agent(
    role="Senior Code Reviewer",
    goal="Analyser et améliorer la qualité du code",
    backstory="Expert en architecture et best practices",
    tools=[ClaudeCodeTool(), GitHubAPI(), JiraIntegration()],
    memory=PersistentMemory("code_review_context"),
    verbose=True
)

# Agent de documentation automatique
doc_generator = Agent(
    role="Technical Writer",
    goal="Générer documentation technique complète",
    tools=[RepoAnalyzer(), DocumentationTemplate()],
    memory=PersistentMemory("documentation_context")
)

# Orchestration avec hiérarchie et délégation
crew = Crew(
    agents=[code_reviewer, doc_generator],
    tasks=[review_task, documentation_task],
    process=Process.hierarchical,
    manager_llm=Claude4(),
    verbose=True,
    memory=True
)

# Exécution avec observabilité complète
result = crew.kickoff(inputs={
    "repository": repo_context,
    "pr_diff": pull_request.changes,
    "coding_standards": team_standards
})

# Métriques automatiques
tracker.log_performance(crew.get_metrics())`}
              language="python"
            />
          </motion.div>
        </div>

        {/* Technical Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {[
            { metric: "<20%", label: "Succès vibe coding", icon: Terminal, color: "text-warning-orange" },
            { metric: "3x", label: "Plus rapide (agentic)", icon: GitBranch, color: "text-success-green" },
            { metric: "90%", label: "Moins de bugs", icon: Cpu, color: "text-success-green" },
            { metric: "2h", label: "Onboarding (vs 2 sem)", icon: Database, color: "text-accent-blue" }
          ].map((item, index) => (
            <div key={index} className="bg-primary-800/30 border border-primary-700 rounded-xl p-4 text-center">
              <item.icon className={`w-6 h-6 ${item.color || 'text-accent-blue'} mx-auto mb-2`} />
              <div className={`text-2xl font-bold ${item.color || 'text-accent-blue'} mb-1`}>{item.metric}</div>
              <div className="text-text-secondary text-xs">{item.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default DevelopersHero;