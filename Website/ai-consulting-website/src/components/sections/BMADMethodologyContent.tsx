'use client';

import React from 'react';
import { motion } from 'framer-motion';
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
      name: 'Analyst Agent',
      icon: <Brain className="w-8 h-8" />,
      color: 'from-green-400 to-green-500',
      role: 'Market Research & Strategy',
      responsibilities: [
        'Conducts comprehensive market research',
        'Performs competitive analysis',
        'Creates strategic project briefs',
        'Validates business opportunities',
        'Provides data-driven insights'
      ],
      interaction: 'Discusses market conditions, target audience, and business strategy with you to ensure the project aligns with market needs.'
    },
    {
      name: 'Product Manager',
      icon: <FileText className="w-8 h-8" />,
      color: 'from-orange-400 to-orange-500',
      role: 'Requirements & Planning',
      responsibilities: [
        'Creates detailed PRDs (Product Requirements Documents)',
        'Defines functional and non-functional requirements',
        'Structures epics and user stories',
        'Manages project scope and priorities',
        'Ensures stakeholder alignment'
      ],
      interaction: 'Works with you to understand exactly what you want to build, asking detailed questions about features, constraints, and success criteria.'
    },
    {
      name: 'UX Expert',
      icon: <Eye className="w-8 h-8" />,
      color: 'from-cyan-400 to-cyan-500',
      role: 'User Experience & Design',
      responsibilities: [
        'Creates front-end specifications',
        'Designs user interface systems',
        'Generates AI-optimized UI prompts',
        'Ensures accessibility compliance',
        'Optimizes user experience flows'
      ],
      interaction: 'Collaborates on user experience decisions, design preferences, and interface requirements to create intuitive applications.'
    },
    {
      name: 'System Architect',
      icon: <Settings className="w-8 h-8" />,
      color: 'from-purple-400 to-purple-500',
      role: 'Technical Architecture',
      responsibilities: [
        'Designs system architecture',
        'Selects technology stacks',
        'Plans database structures',
        'Defines API specifications',
        'Ensures scalability and performance'
      ],
      interaction: 'Discusses technical preferences, scalability requirements, and integration needs to build robust system architecture.'
    },
    {
      name: 'QA Specialist',
      icon: <CheckCircle className="w-8 h-8" />,
      color: 'from-yellow-400 to-yellow-500',
      role: 'Quality Assurance',
      responsibilities: [
        'Performs early risk assessment',
        'Designs test strategies',
        'Reviews architecture for testability',
        'Identifies potential issues',
        'Ensures quality standards'
      ],
      interaction: 'Reviews your project for potential risks and quality concerns, suggesting testing strategies and quality improvements.'
    },
    {
      name: 'Product Owner',
      icon: <Users className="w-8 h-8" />,
      color: 'from-amber-400 to-amber-500',
      role: 'Coordination & Validation',
      responsibilities: [
        'Runs master validation checklists',
        'Ensures document alignment',
        'Coordinates between agents',
        'Manages document sharding',
        'Facilitates smooth handoffs'
      ],
      interaction: 'Ensures all planning documents are consistent and complete, coordinating feedback between you and other agents.'
    }
  ];

  const keyFeatures = [
    {
      icon: <MessageSquare className="w-6 h-6" />,
      title: 'Human-in-the-Loop Processing',
      description: 'Every agent actively solicits your input and feedback throughout the process, ensuring the output matches your vision.'
    },
    {
      icon: <GitBranch className="w-6 h-6" />,
      title: 'Structured Decision Points',
      description: 'Clear decision points where you choose the path forward, from research depth to UX requirements.'
    },
    {
      icon: <Layers className="w-6 h-6" />,
      title: 'Document-Driven Development',
      description: 'Comprehensive documentation created before coding begins, ensuring clear requirements and architecture.'
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: 'Validation & Alignment',
      description: 'Multiple validation checkpoints ensure all documents and requirements are consistent and complete.'
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: 'Seamless IDE Transition',
      description: 'Smooth handoff from web-based planning to IDE-based development with properly prepared documents.'
    },
    {
      icon: <Code className="w-6 h-6" />,
      title: 'AI-Optimized Output',
      description: 'All documents are structured for optimal consumption by AI development agents and tools.'
    }
  ];

  const phases = [
    {
      title: 'Discovery & Research',
      description: 'Optional but powerful market research and competitive analysis phase',
      color: 'from-green-400 to-green-500',
      steps: ['Market Research', 'Competitive Analysis', 'Strategic Brief Creation']
    },
    {
      title: 'Requirements Definition',
      description: 'Comprehensive requirement gathering with human collaboration',
      color: 'from-orange-400 to-orange-500',
      steps: ['PRD Creation', 'Functional Requirements', 'Non-Functional Requirements', 'User Stories']
    },
    {
      title: 'Design & Architecture',
      description: 'UX specifications and technical architecture design',
      color: 'from-purple-400 to-purple-500',
      steps: ['UX Specifications', 'System Architecture', 'Technology Selection', 'API Design']
    },
    {
      title: 'Validation & Handoff',
      description: 'Quality assurance and preparation for development',
      color: 'from-amber-400 to-amber-500',
      steps: ['Document Alignment', 'Quality Review', 'IDE Preparation', 'Development Handoff']
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
          What is the BMAD Method?
        </h2>
        <p className="text-xl text-text-secondary max-w-4xl mx-auto leading-relaxed mb-8">
          BMAD (Brownfield Method for Agile Development) is a structured framework that transforms 
          project ideas into production-ready applications through intelligent agent collaboration 
          and human-in-the-loop processing.
        </p>
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-primary-blue/20 to-accent-red/20 rounded-xl p-6">
            <h3 className="font-bold text-text-primary mb-2">Natural Language First</h3>
            <p className="text-sm text-text-secondary">Uses natural language for AI-assisted workflow with clear, readable documentation.</p>
          </div>
          <div className="bg-gradient-to-br from-accent-yellow/20 to-primary-blue/20 rounded-xl p-6">
            <h3 className="font-bold text-text-primary mb-2">Agent Collaboration</h3>
            <p className="text-sm text-text-secondary">Specialized agents work together while keeping you in control of decisions.</p>
          </div>
          <div className="bg-gradient-to-br from-accent-red/20 to-accent-yellow/20 rounded-xl p-6">
            <h3 className="font-bold text-text-primary mb-2">Full Lifecycle</h3>
            <p className="text-sm text-text-secondary">Covers ideation through deployment with structured, repeatable processes.</p>
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
          Key Features of BMAD Method
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
          BMAD Development Phases
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
          Meet Your AI Agent Team
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
                <h5 className="text-sm font-bold text-text-primary mb-3">Responsibilities:</h5>
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
                  How You Interact
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
            Why Choose BMAD Method?
          </h3>
          <div className="grid md:grid-cols-3 gap-6 mb-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-accent-yellow mb-2">85%</div>
              <div className="text-sm text-text-secondary">Faster Planning</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent-yellow mb-2">100%</div>
              <div className="text-sm text-text-secondary">Structured Output</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent-yellow mb-2">6+</div>
              <div className="text-sm text-text-secondary">Specialized Agents</div>
            </div>
          </div>
          <p className="text-text-primary max-w-3xl mx-auto mb-6">
            BMAD transforms chaotic project starts into structured, agent-driven workflows. 
            From scattered ideas to production-ready specifications, with you in control every step of the way.
          </p>
          <motion.a
            href="/formation"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-accent-red to-accent-red/90 text-white font-bold rounded-xl hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Learn Our BMAD Implementation
            <ArrowRight className="w-5 h-5" />
          </motion.a>
        </div>
      </motion.div>
    </div>
  );
};

export default BMADMethodologyContent;