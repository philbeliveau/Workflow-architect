'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Brain, 
  Code, 
  Search, 
  TestTube, 
  Shield, 
  Zap,
  ArrowRight,
  MessageSquare,
  CheckCircle,
  Clock,
  Cpu,
  Database,
  GitBranch,
  Monitor,
  Target,
  Eye
} from 'lucide-react';
import { useTranslations } from 'next-intl';

const MethodologyShowcase: React.FC = () => {
  const t = useTranslations('methodology');
  const [activeAgent, setActiveAgent] = useState(0);
  const [workflowStep, setWorkflowStep] = useState(0);

  // Agent definitions with their specializations
  const agents = [
    {
      id: 'architect',
      name: t('agents.architect.name'),
      icon: Brain,
      color: 'accent-purple',
      role: t('agents.architect.role'),
      status: t('agents.architect.status'),
      progress: 85
    },
    {
      id: 'researcher',
      name: t('agents.researcher.name'),
      icon: Search,
      color: 'accent-yellow',
      role: t('agents.researcher.role'),
      status: t('agents.researcher.status'),
      progress: 92
    },
    {
      id: 'coder',
      name: t('agents.coder.name'),
      icon: Code,
      color: 'accent-purple',
      role: t('agents.coder.role'),
      status: t('agents.coder.status'),
      progress: 67
    },
    {
      id: 'tester',
      name: t('agents.tester.name'),
      icon: TestTube,
      color: 'accent-yellow',
      role: t('agents.tester.role'),
      status: t('agents.tester.status'),
      progress: 78
    },
    {
      id: 'security',
      name: t('agents.security.name'),
      icon: Shield,
      color: 'accent-purple',
      role: t('agents.security.role'),
      status: t('agents.security.status'),
      progress: 94
    }
  ];

  // Cycle through agents automatically
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveAgent((prev) => (prev + 1) % agents.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [agents.length]);

  // Workflow steps
  useEffect(() => {
    const interval = setInterval(() => {
      setWorkflowStep((prev) => (prev + 1) % 4);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const agentVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section className="py-24 bg-gradient-to-br from-primary-800 via-background-dark to-primary-800 relative overflow-hidden">
      {/* Background network pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg width="100%" height="100%" className="absolute inset-0">
          <defs>
            <pattern id="network" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
              <circle cx="30" cy="30" r="2" fill="currentColor" className="text-accent-purple" />
              <path d="M30,30 L60,30 M30,30 L30,60 M30,30 L60,60" stroke="currentColor" strokeWidth="0.5" className="text-accent-purple" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#network)" />
        </svg>
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
            {t('title')}
          </h2>
          <p className="text-xl text-text-secondary max-w-4xl mx-auto leading-relaxed">
            {t('subtitle')}
          </p>
        </motion.div>

        {/* Single Row: Multi-Agent Collaboration */}
        <motion.div
          className="bg-primary-900/50 backdrop-blur-sm border border-primary-700 rounded-3xl p-8 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Workflow Progress Header */}
          <div className="text-center mb-8">
            <h3 className="text-h2 font-bold text-text-primary mb-4">
              {t('title')}
            </h3>
          </div>

          {/* Agent Grid - Single Row */}
          <div className="grid grid-cols-5 gap-6 mb-8">
            {agents.map((agent, index) => {
              const Icon = agent.icon;
              const isActive = activeAgent === index;
              const colorClass = agent.color === 'accent-purple' ? 'accent-purple' : 'accent-yellow';
              
              return (
                <motion.div
                  key={agent.id}
                  className={`relative group cursor-pointer`}
                  variants={agentVariants}
                  whileHover={{ scale: 1.05 }}
                  onClick={() => setActiveAgent(index)}
                >
                  {/* Agent Card */}
                  <div className={`
                    bg-primary-800/80 backdrop-blur-sm border rounded-2xl p-6 h-full transition-all duration-500
                    ${isActive 
                      ? `border-${colorClass} shadow-lg shadow-${colorClass}/20 scale-105` 
                      : 'border-primary-700 hover:border-primary-600'
                    }
                  `}>
                    {/* Agent Icon & Status */}
                    <div className="text-center mb-4">
                      <div className={`
                        w-16 h-16 mx-auto rounded-2xl flex items-center justify-center mb-3 transition-all duration-300
                        ${isActive 
                          ? `bg-${colorClass}/30 ring-2 ring-${colorClass}/50` 
                          : `bg-${colorClass}/10 group-hover:bg-${colorClass}/20`
                        }
                      `}>
                        <Icon className={`
                          w-8 h-8 transition-all duration-300
                          ${isActive ? `text-${colorClass}` : `text-${colorClass}/70`}
                        `} />
                      </div>
                      
                      {/* Status Indicator */}
                      <div className="flex items-center justify-center gap-2 mb-2">
                        <div className={`
                          w-2 h-2 rounded-full transition-all duration-300
                          ${isActive ? `bg-${colorClass} animate-pulse` : 'bg-gray-500'}
                        `}></div>
                        <span className={`
                          text-xs font-medium transition-all duration-300
                          ${isActive ? 'text-text-primary' : 'text-text-secondary'}
                        `}>
                          {agent.status}
                        </span>
                      </div>
                    </div>

                    {/* Agent Info */}
                    <div className="text-center">
                      <h4 className={`
                        font-bold mb-2 transition-all duration-300
                        ${isActive ? 'text-text-primary' : 'text-text-secondary'}
                      `}>
                        {agent.name}
                      </h4>
                      <p className="text-xs text-text-secondary mb-3 leading-relaxed">
                        {agent.role}
                      </p>
                      
                      {/* Progress Bar */}
                      <div className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-xs text-text-secondary">Progrès</span>
                          <span className={`text-xs font-medium text-${colorClass}`}>
                            {agent.progress}%
                          </span>
                        </div>
                        <div className="w-full bg-primary-700 rounded-full h-2">
                          <motion.div
                            className={`h-2 bg-${colorClass} rounded-full`}
                            initial={{ width: 0 }}
                            animate={{ width: `${agent.progress}%` }}
                            transition={{ duration: 1, delay: index * 0.2 }}
                          />
                        </div>
                      </div>
                    </div>

                    {/* Active Agent Indicator */}
                    {isActive && (
                      <motion.div
                        className="absolute -top-2 -right-2"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className={`w-6 h-6 bg-${colorClass} rounded-full flex items-center justify-center`}>
                          <Eye className="w-3 h-3 text-white" />
                        </div>
                      </motion.div>
                    )}
                  </div>

                  {/* Connection Lines */}
                  {index < agents.length - 1 && (
                    <div className="absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                      <motion.div
                        className="w-6 h-px bg-gradient-to-r from-accent-purple to-accent-yellow"
                        animate={{
                          opacity: [0.3, 1, 0.3],
                          scaleX: [0.8, 1.2, 0.8]
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: index * 0.3
                        }}
                      />
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>

          {/* Active Agent Details */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeAgent}
              className="bg-primary-800/50 rounded-xl p-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <div className="grid md:grid-cols-3 gap-6 items-center">
                {/* Agent Details */}
                <div className="md:col-span-2">
                  <div className="flex items-center gap-4 mb-4">
                    {React.createElement(agents[activeAgent].icon, {
                      className: `w-8 h-8 text-${agents[activeAgent].color}`
                    })}
                    <div>
                      <h4 className="text-h3 font-bold text-text-primary">
                        {agents[activeAgent].name}
                      </h4>
                      <p className="text-text-secondary">{agents[activeAgent].role}</p>
                    </div>
                  </div>
                  
                </div>

              </div>
            </motion.div>
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
};

export default MethodologyShowcase;