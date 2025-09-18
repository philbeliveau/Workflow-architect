'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { 
  Brain, 
  FileText, 
  Settings, 
  Eye, 
  CheckCircle,
  Users,
  Zap,
  Target,
  GitBranch,
  Code,
  Layers,
  MessageSquare,
  ArrowRight
} from 'lucide-react';

const BMADMethodologyContent: React.FC = () => {
  const t = useTranslations('bmad.content');
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 30
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  const agents = [
    {
      id: 'analyst',
      name: t('agents.items.analyst.name'),
      icon: <Brain className="w-8 h-8" />,
      color: 'from-green-400 to-green-500',
      role: t('agents.items.analyst.role'),
      responsibilities: [
        t('agents.items.analyst.responsibilities.0'),
        t('agents.items.analyst.responsibilities.1'),
        t('agents.items.analyst.responsibilities.2'),
        t('agents.items.analyst.responsibilities.3'),
        t('agents.items.analyst.responsibilities.4')
      ],
      interaction: t('agents.items.analyst.interaction')
    },
    {
      id: 'pm',
      name: t('agents.items.pm.name'),
      icon: <FileText className="w-8 h-8" />,
      color: 'from-orange-400 to-orange-500',
      role: t('agents.items.pm.role'),
      responsibilities: [
        t('agents.items.pm.responsibilities.0'),
        t('agents.items.pm.responsibilities.1'),
        t('agents.items.pm.responsibilities.2'),
        t('agents.items.pm.responsibilities.3'),
        t('agents.items.pm.responsibilities.4')
      ],
      interaction: t('agents.items.pm.interaction')
    },
    {
      id: 'ux',
      name: t('agents.items.ux.name'),
      icon: <Eye className="w-8 h-8" />,
      color: 'from-cyan-400 to-cyan-500',
      role: t('agents.items.ux.role'),
      responsibilities: [
        t('agents.items.ux.responsibilities.0'),
        t('agents.items.ux.responsibilities.1'),
        t('agents.items.ux.responsibilities.2'),
        t('agents.items.ux.responsibilities.3'),
        t('agents.items.ux.responsibilities.4')
      ],
      interaction: t('agents.items.ux.interaction')
    },
    {
      id: 'architect',
      name: t('agents.items.architect.name'),
      icon: <Settings className="w-8 h-8" />,
      color: 'from-purple-400 to-purple-500',
      role: t('agents.items.architect.role'),
      responsibilities: [
        t('agents.items.architect.responsibilities.0'),
        t('agents.items.architect.responsibilities.1'),
        t('agents.items.architect.responsibilities.2'),
        t('agents.items.architect.responsibilities.3'),
        t('agents.items.architect.responsibilities.4')
      ],
      interaction: t('agents.items.architect.interaction')
    },
    {
      id: 'qa',
      name: t('agents.items.qa.name'),
      icon: <CheckCircle className="w-8 h-8" />,
      color: 'from-yellow-400 to-yellow-500',
      role: t('agents.items.qa.role'),
      responsibilities: [
        t('agents.items.qa.responsibilities.0'),
        t('agents.items.qa.responsibilities.1'),
        t('agents.items.qa.responsibilities.2'),
        t('agents.items.qa.responsibilities.3'),
        t('agents.items.qa.responsibilities.4')
      ],
      interaction: t('agents.items.qa.interaction')
    },
    {
      id: 'po',
      name: t('agents.items.po.name'),
      icon: <Users className="w-8 h-8" />,
      color: 'from-amber-400 to-amber-500',
      role: t('agents.items.po.role'),
      responsibilities: [
        t('agents.items.po.responsibilities.0'),
        t('agents.items.po.responsibilities.1'),
        t('agents.items.po.responsibilities.2'),
        t('agents.items.po.responsibilities.3'),
        t('agents.items.po.responsibilities.4')
      ],
      interaction: t('agents.items.po.interaction')
    }
  ];

  const keyFeatures = [
    {
      icon: <MessageSquare className="w-6 h-6" />,
      title: t('features.items.human_loop.title'),
      description: t('features.items.human_loop.description')
    },
    {
      icon: <GitBranch className="w-6 h-6" />,
      title: t('features.items.decision_points.title'),
      description: t('features.items.decision_points.description')
    },
    {
      icon: <Layers className="w-6 h-6" />,
      title: t('features.items.document_driven.title'),
      description: t('features.items.document_driven.description')
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: t('features.items.validation.title'),
      description: t('features.items.validation.description')
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: t('features.items.ide_transition.title'),
      description: t('features.items.ide_transition.description')
    },
    {
      icon: <Code className="w-6 h-6" />,
      title: t('features.items.ai_optimized.title'),
      description: t('features.items.ai_optimized.description')
    }
  ];

  const phases = [
    {
      title: t('phases.items.discovery.title'),
      description: t('phases.items.discovery.description'),
      color: 'from-green-400 to-green-500',
      steps: [
        t('phases.items.discovery.steps.0'),
        t('phases.items.discovery.steps.1'),
        t('phases.items.discovery.steps.2')
      ]
    },
    {
      title: t('phases.items.requirements.title'),
      description: t('phases.items.requirements.description'),
      color: 'from-orange-400 to-orange-500',
      steps: [
        t('phases.items.requirements.steps.0'),
        t('phases.items.requirements.steps.1'),
        t('phases.items.requirements.steps.2'),
        t('phases.items.requirements.steps.3')
      ]
    },
    {
      title: t('phases.items.design.title'),
      description: t('phases.items.design.description'),
      color: 'from-purple-400 to-purple-500',
      steps: [
        t('phases.items.design.steps.0'),
        t('phases.items.design.steps.1'),
        t('phases.items.design.steps.2'),
        t('phases.items.design.steps.3')
      ]
    },
    {
      title: t('phases.items.validation.title'),
      description: t('phases.items.validation.description'),
      color: 'from-amber-400 to-amber-500',
      steps: [
        t('phases.items.validation.steps.0'),
        t('phases.items.validation.steps.1'),
        t('phases.items.validation.steps.2'),
        t('phases.items.validation.steps.3')
      ]
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-6">
      {/* Introduction */}
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-h1 font-bold mb-6 text-text-primary">
          {t('introduction.title')}
        </h2>
        <p className="text-xl text-text-secondary max-w-4xl mx-auto leading-relaxed mb-8">
          {t('introduction.description')}
        </p>
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-primary-blue/20 to-accent-red/20 rounded-xl p-6">
            <h3 className="font-bold text-text-primary mb-2">{t('introduction.principles.natural_language.title')}</h3>
            <p className="text-sm text-text-secondary">{t('introduction.principles.natural_language.description')}</p>
          </div>
          <div className="bg-gradient-to-br from-accent-yellow/20 to-primary-blue/20 rounded-xl p-6">
            <h3 className="font-bold text-text-primary mb-2">{t('introduction.principles.agent_collaboration.title')}</h3>
            <p className="text-sm text-text-secondary">{t('introduction.principles.agent_collaboration.description')}</p>
          </div>
          <div className="bg-gradient-to-br from-accent-red/20 to-accent-yellow/20 rounded-xl p-6">
            <h3 className="font-bold text-text-primary mb-2">{t('introduction.principles.full_lifecycle.title')}</h3>
            <p className="text-sm text-text-secondary">{t('introduction.principles.full_lifecycle.description')}</p>
          </div>
        </div>
      </motion.div>

      {/* Key Features */}
      <motion.div
        className="mb-16"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.h3 
          className="text-h2 font-bold text-text-primary text-center mb-12"
          variants={itemVariants}
        >
          {t('features.title')}
        </motion.h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {keyFeatures.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-gradient-to-br from-primary-900/60 to-primary-800/40 backdrop-blur-sm rounded-2xl p-6 border border-primary-700/50 hover:border-accent-blue/50 transition-all duration-300"
              variants={itemVariants}
              whileHover={{ scale: 1.02, y: -5 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-accent-blue/20 rounded-lg text-accent-blue">
                  {feature.icon}
                </div>
                <h4 className="font-bold text-text-primary">{feature.title}</h4>
              </div>
              <p className="text-text-secondary text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Phases */}
      <motion.div
        className="mb-16"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.h3 
          className="text-h2 font-bold text-text-primary text-center mb-12"
          variants={itemVariants}
        >
          {t('phases.title')}
        </motion.h3>
        <div className="grid lg:grid-cols-2 gap-8">
          {phases.map((phase, index) => (
            <motion.div
              key={index}
              className="bg-gradient-to-br from-primary-900/60 to-primary-800/40 backdrop-blur-sm rounded-2xl p-8 border border-primary-700/50"
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex items-start gap-4 mb-6">
                <div className={`w-12 h-12 bg-gradient-to-r ${phase.color} rounded-xl flex items-center justify-center text-white font-bold text-lg`}>
                  {index + 1}
                </div>
                <div>
                  <h4 className="text-xl font-bold text-text-primary mb-2">{phase.title}</h4>
                  <p className="text-text-secondary text-sm">{phase.description}</p>
                </div>
              </div>
              <div className="space-y-2">
                {phase.steps.map((step, stepIndex) => (
                  <div key={stepIndex} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-accent-yellow rounded-full"></div>
                    <span className="text-text-secondary text-sm">{step}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Agents Section */}
      <motion.div
        className="mb-16"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.h3 
          className="text-h2 font-bold text-text-primary text-center mb-12"
          variants={itemVariants}
        >
          {t('agents.title')}
        </motion.h3>
        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {agents.map((agent, index) => (
            <motion.div
              key={index}
              className="bg-gradient-to-br from-primary-900/60 to-primary-800/40 backdrop-blur-sm rounded-2xl p-8 border border-primary-700/50 hover:border-accent-blue/50 transition-all duration-300"
              variants={itemVariants}
              whileHover={{ scale: 1.02, y: -5 }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className={`p-3 bg-gradient-to-r ${agent.color} rounded-xl text-white`}>
                  {agent.icon}
                </div>
                <div>
                  <h4 className="text-lg font-bold text-text-primary">{agent.name}</h4>
                  <p className="text-accent-yellow text-sm font-medium">{agent.role}</p>
                </div>
              </div>
              
              <div className="mb-6">
                <h5 className="text-sm font-bold text-text-primary mb-3">{t('agents.responsibilities')}:</h5>
                <ul className="space-y-1">
                  {agent.responsibilities.map((responsibility, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-text-secondary text-xs">
                      <div className="w-1 h-1 bg-accent-yellow rounded-full mt-2 flex-shrink-0"></div>
                      <span>{responsibility}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="p-4 bg-gradient-to-r from-blue-900/30 to-blue-800/20 rounded-xl border border-blue-700/50">
                <h5 className="text-sm font-bold text-blue-300 mb-2 flex items-center gap-2">
                  <MessageSquare className="w-4 h-4" />
                  {t('agents.interaction_title')}
                </h5>
                <p className="text-blue-200 text-xs leading-relaxed">{agent.interaction}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Benefits Section */}
      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="bg-gradient-to-r from-accent-red/30 to-primary-blue/30 backdrop-blur-sm rounded-3xl p-8 border border-accent-red/40">
          <h3 className="text-2xl font-bold text-text-primary mb-4">
            {t('conclusion.title')}
          </h3>
          <div className="grid md:grid-cols-3 gap-6 mb-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-accent-yellow mb-2">85%</div>
              <div className="text-sm text-text-secondary">{t('conclusion.metrics.faster_planning')}</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent-yellow mb-2">100%</div>
              <div className="text-sm text-text-secondary">{t('conclusion.metrics.structured_output')}</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent-yellow mb-2">6+</div>
              <div className="text-sm text-text-secondary">{t('conclusion.metrics.specialized_agents')}</div>
            </div>
          </div>
          <p className="text-text-primary max-w-3xl mx-auto mb-6">
            {t('conclusion.description')}
          </p>
          <motion.a
            href="/formation"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-accent-red to-accent-red/90 text-white font-bold rounded-xl hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {t('conclusion.cta')}
            <ArrowRight className="w-5 h-5" />
          </motion.a>
        </div>
      </motion.div>
    </div>
  );
};

export default BMADMethodologyContent;