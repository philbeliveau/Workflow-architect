'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import CodeBlock from '@/components/ui/CodeBlock';
import { ArrowRight, Terminal, GitBranch, Cpu, Database } from 'lucide-react';

const DevelopersHero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background-dark pt-16 sm:pt-20">
      {/* Technical Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-background-dark via-background-dark-alt to-background-dark">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 sm:top-20 sm:left-20 w-48 h-48 sm:w-72 sm:h-72 bg-primary-blue/30 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 sm:bottom-20 sm:right-20 w-64 h-64 sm:w-96 sm:h-96 bg-accent-red/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        {/* Code pattern overlay */}
        <div className="absolute inset-0 opacity-5 hidden sm:block">
          <div className="grid grid-cols-8 sm:grid-cols-12 gap-2 sm:gap-4 h-full p-4 sm:p-8">
            {Array.from({ length: 96 }, (_, i) => (
              <div key={i} className="bg-primary-blue/20 h-1 rounded animate-pulse" style={{
                animationDelay: `${i * 0.1}s`,
                animationDuration: '3s'
              }}></div>
            ))}
          </div>
        </div>
      </div>

      {/* Floating technical elements */}
      <div className="absolute inset-0 pointer-events-none hidden md:block">
        <motion.div
          className="absolute top-1/4 left-1/4 text-primary-blue/60"
          animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          <Terminal size={32} className="md:w-12 md:h-12" />
        </motion.div>
        <motion.div
          className="absolute top-3/4 right-1/4 text-accent-red/60"
          animate={{ y: [0, 20, 0], rotate: [0, -5, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        >
          <GitBranch size={40} className="md:w-14 md:h-14" />
        </motion.div>
        <motion.div
          className="absolute top-1/2 left-1/6 text-hover-interactive/60"
          animate={{ y: [0, -15, 0], rotate: [0, 10, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        >
          <Cpu size={28} className="md:w-10 md:h-10" />
        </motion.div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left: Content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >

              <div className="inline-flex items-center gap-2 bg-primary-blue/10 border border-primary-blue/20 rounded-full px-4 py-2 mb-6">
                <Terminal className="w-4 h-4 text-primary-blue" />
                <span className="text-primary-blue text-sm font-medium">De ChatGPT aux Systèmes Orchestrés</span>
              </div>
              
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 text-text-primary">
                Maîtrisez les agents IA. <span className="text-text-primary">Développez plus vite,</span>
                <span className="block text-primary-blue">avec plus de méthode.</span>
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <p className="text-base sm:text-lg text-text-secondary mb-6 md:mb-8 leading-relaxed">
                Nous vous formons à utiliser des systèmes d'orchestrations d'agents, qui clarifie, code, rafine, debug, test, optimize continuellement pour s'assurer que le code générer est aligné avec ce que vous cherchez.
              </p>

              <div className="grid grid-cols-1 gap-3 md:gap-4 mb-6 md:mb-8 max-w-md">
                <div className="bg-background-dark-alt/50 border border-primary-blue/30 rounded-lg p-3 md:p-4">
                  <h3 className="text-primary-blue font-semibold mb-1 md:mb-2 flex items-center gap-2 text-sm md:text-base">
                    <Cpu className="w-3 h-3 md:w-4 md:h-4" />
                    Stack IA Avancé
                  </h3>
                  <ul className="text-text-secondary text-xs md:text-sm space-y-1">
                    <li>• Claude-code + wrapper multi-agents</li>
                    <li>• Roocode + modes custom</li>
                    <li>• MCPs pour intégrations natives</li>
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
                Réserver Évaluation Gratuite
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
              
              <Button 
                variant="outline" 
                size="lg" 
                href="#technical-stack"
              >
                Découvrir la Formation
              </Button>
            </motion.div>
          </div>

          {/* Right: Code Example */}
          <motion.div
            className="mt-8 lg:mt-0"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="hidden sm:block">
              <CodeBlock
                title="custom_modes.json"
              code={`{
  "customModes": [
    {
      "slug": "architect",
      "name": "🏗️ Architect",
      "roleDefinition": "Design scalable system architecture",
      "customInstructions": "Create mermaid diagrams, define APIs, ensure modularity",
      "groups": ["read", "edit"],
      "source": "project"
    },
    {
      "slug": "code",
      "name": "🧠 Auto-Coder", 
      "roleDefinition": "Write clean, modular code",
      "customInstructions": "Clean architecture, no hardcoded values, <500 lines/file",
      "groups": ["read", "edit", "browser", "mcp", "command"],
      "source": "project"
    },
    {
      "slug": "tdd",
      "name": "🧪 Tester (TDD)",
      "roleDefinition": "Test-driven development approach",
      "customInstructions": "Write tests first, minimal implementation, refactor",
      "groups": ["read", "edit", "browser", "mcp", "command"],
      "source": "project"
    },
    {
      "slug": "debug",
      "name": "🪲 Debugger",
      "roleDefinition": "Troubleshoot bugs and errors",
      "customInstructions": "Use logs/traces, isolate issues, modular fixes",
      "groups": ["read", "edit", "browser", "mcp", "command"],
      "source": "project"
    }
  ]
}`}
                language="json"
              />
            </div>
            <div className="sm:hidden bg-background-dark-alt/50 border border-primary-blue/30 rounded-lg p-4">
              <h3 className="text-primary-blue font-semibold mb-2 flex items-center gap-2">
                <Terminal className="w-4 h-4" />
                Configuration Avancée
              </h3>
              <p className="text-text-secondary text-sm">
                Modes personnalisés d'agents IA : Architecte, Auto-Coder, Testeur TDD, et Debugger avec instructions spécialisées.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Technical Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-12 md:mt-16 grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6"
        >
          {[
            { metric: "<20%", label: "Succès vibe coding", icon: Terminal, color: "text-warning-orange" },
            { metric: "3x", label: "Plus rapide (agentic)", icon: GitBranch, color: "text-success-green" },
            { metric: "90%", label: "Moins de bugs", icon: Cpu, color: "text-success-green" },
            { metric: "2h", label: "Onboarding (vs 2 sem)", icon: Database, color: "text-primary-blue" }
          ].map((item, index) => (
            <div key={index} className="bg-background-dark-alt/30 border border-primary-blue/30 rounded-xl p-3 md:p-4 text-center">
              <item.icon className={`w-4 h-4 md:w-6 md:h-6 ${item.color || 'text-primary-blue'} mx-auto mb-1 md:mb-2`} />
              <div className={`text-lg md:text-2xl font-bold ${item.color || 'text-primary-blue'} mb-1`}>{item.metric}</div>
              <div className="text-text-secondary text-xs md:text-sm">{item.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default DevelopersHero;