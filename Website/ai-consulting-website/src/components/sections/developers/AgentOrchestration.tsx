'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { AlertTriangle, ArrowRight, Code, Zap, GitBranch, Database } from 'lucide-react';
import CodeBlock from '@/components/ui/CodeBlock';
import { useTranslations } from 'next-intl';

const AgentOrchestration: React.FC = () => {
  const t = useTranslations('developers.orchestration');
  
  const claudeCodeLimitations = [
    {
      title: t('limitations.sequential.title'),
      icon: <Code className="w-6 h-6" />,
      color: "warning-orange",
      description: t('limitations.sequential.description'),
      example: `// Claude Code (séquentiel)
Message 1 : Lire fichier 1
Message 2 : Lire fichier 2  
Message 3 : Analyser
Message 4 : Écrire solution
// Résultat : 4 cycles → lent`,
      details: [
        t('limitations.sequential.details.0'),
        t('limitations.sequential.details.1'),
        t('limitations.sequential.details.2')
      ]
    },
    {
      title: t('limitations.mono_agent.title'),
      icon: <GitBranch className="w-6 h-6" />,
      color: "warning-orange", 
      description: t('limitations.mono_agent.description'),
      details: [
        t('limitations.mono_agent.details.0'),
        t('limitations.mono_agent.details.1'),
        t('limitations.mono_agent.details.2')
      ]
    },
    {
      title: t('limitations.memory.title'),
      icon: <Database className="w-6 h-6" />,
      color: "warning-orange",
      description: t('limitations.memory.description'),
      details: [
        t('limitations.memory.details.0'),
        t('limitations.memory.details.1'),
        t('limitations.memory.details.2')
      ]
    },
    {
      title: t('limitations.scalability.title'),
      icon: <Zap className="w-6 h-6" />,
      color: "warning-orange",
      description: t('limitations.scalability.description'),
      details: [
        t('limitations.scalability.details.0'),
        t('limitations.scalability.details.1'),
        t('limitations.scalability.details.2')
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
            {t('title')}
          </h2>
          <p className="text-xl text-text-secondary max-w-4xl mx-auto leading-relaxed">
            {t('subtitle')}
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
              {t('solution.title')}
            </h3>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left: Text Content */}
              <div>
                <p className="text-text-secondary leading-relaxed mb-6">
                  {t('solution.description')}
                </p>

                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-primary-blue/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Zap className="w-4 h-4 text-primary-blue" />
                    </div>
                    <div>
                      <h4 className="text-primary-blue font-semibold mb-1">{t('solution.batchtool.title')}</h4>
                      <p className="text-text-secondary text-sm">
                        {t('solution.batchtool.description')}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-accent-red/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <GitBranch className="w-4 h-4 text-accent-red" />
                    </div>
                    <div>
                      <h4 className="text-accent-red font-semibold mb-1">{t('solution.coordination.title')}</h4>
                      <p className="text-text-secondary text-sm">
                        {t('solution.coordination.description')}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right: Diagram */}
              <div className="flex justify-center">
                <Image 
                  src="/image/diagram_modes.svg" 
                  alt={t('solution.diagram_alt')} 
                  className="max-w-full h-auto"
                  width={600}
                  height={400}
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