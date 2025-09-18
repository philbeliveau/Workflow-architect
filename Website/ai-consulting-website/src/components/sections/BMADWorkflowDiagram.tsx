'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { 
  User, 
  Brain, 
  FileText, 
  Settings, 
  Eye, 
  Code, 
  CheckCircle,
  MessageCircle,
  ArrowRight,
  ArrowDown,
  Play,
  Pause,
  RotateCcw
} from 'lucide-react';

interface WorkflowStep {
  id: string;
  title: string;
  type: 'start' | 'decision' | 'process' | 'agent' | 'end';
  agent?: string;
  description: string;
  color: string;
  position: { x: number; y: number };
  connections: string[];
  userInteraction?: boolean;
}

const BMADWorkflowDiagram: React.FC = () => {
  const t = useTranslations('bmad.workflow');
  const [selectedStep, setSelectedStep] = useState<string | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const [currentStep, setCurrentStep] = useState<string>('start');
  const [completedSteps, setCompletedSteps] = useState<Set<string>>(new Set());

  const workflowSteps: WorkflowStep[] = [
    {
      id: 'start',
      title: t('steps.start.title'),
      type: 'start',
      description: t('steps.start.description'),
      color: 'bg-gradient-to-br from-gray-300 to-gray-400 text-gray-900',
      position: { x: 50, y: 10 },
      connections: ['research-phase'],
      userInteraction: true
    },
    {
      id: 'research-phase',
      title: t('steps.research-phase.title'),
      type: 'agent',
      agent: 'Analyst',
      description: t('steps.research-phase.description'),
      color: 'bg-gradient-to-br from-green-300 to-green-400 text-green-900',
      position: { x: 50, y: 25 },
      connections: ['project-brief'],
      userInteraction: true
    },
    {
      id: 'project-brief',
      title: t('steps.project-brief.title'),
      type: 'process',
      description: t('steps.project-brief.description'),
      color: 'bg-gradient-to-br from-blue-300 to-blue-400 text-blue-900',
      position: { x: 50, y: 40 },
      connections: ['pm-planning'],
      userInteraction: true
    },
    {
      id: 'pm-planning',
      title: t('steps.pm-planning.title'),
      type: 'agent',
      agent: 'PM',
      description: t('steps.pm-planning.description'),
      color: 'bg-gradient-to-br from-orange-300 to-orange-400 text-orange-900',
      position: { x: 50, y: 55 },
      connections: ['ux-decision'],
      userInteraction: true
    },
    {
      id: 'ux-decision',
      title: t('steps.ux-decision.title'),
      type: 'decision',
      description: t('steps.ux-decision.description'),
      color: 'bg-gradient-to-br from-blue-300 to-blue-400 text-blue-900',
      position: { x: 50, y: 70 },
      connections: ['ux-design', 'architecture'],
      userInteraction: true
    },
    {
      id: 'ux-design',
      title: t('steps.ux-design.title'),
      type: 'agent',
      agent: 'UX Expert',
      description: t('steps.ux-design.description'),
      color: 'bg-gradient-to-br from-cyan-300 to-cyan-400 text-cyan-900',
      position: { x: 25, y: 85 },
      connections: ['architecture'],
      userInteraction: true
    },
    {
      id: 'architecture',
      title: t('steps.architecture.title'),
      type: 'agent',
      agent: 'Architect',
      description: t('steps.architecture.description'),
      color: 'bg-gradient-to-br from-purple-300 to-purple-400 text-purple-900',
      position: { x: 50, y: 90 },
      connections: ['qa-validation'],
      userInteraction: true
    },
    {
      id: 'qa-validation',
      title: t('steps.qa-validation.title'),
      type: 'agent',
      agent: 'QA',
      description: t('steps.qa-validation.description'),
      color: 'bg-gradient-to-br from-yellow-300 to-yellow-400 text-yellow-900',
      position: { x: 25, y: 105 },
      connections: ['final-review'],
      userInteraction: true
    },
    {
      id: 'final-review',
      title: t('steps.final-review.title'),
      type: 'agent',
      agent: 'Product Owner',
      description: t('steps.final-review.description'),
      color: 'bg-gradient-to-br from-amber-300 to-amber-400 text-amber-900',
      position: { x: 50, y: 120 },
      connections: ['development-ready'],
      userInteraction: true
    },
    {
      id: 'development-ready',
      title: t('steps.development-ready.title'),
      type: 'end',
      description: t('steps.development-ready.description'),
      color: 'bg-gradient-to-br from-green-500 to-green-600 text-white',
      position: { x: 50, y: 135 },
      connections: [],
      userInteraction: false
    }
  ];

  const getAgentIcon = (agent?: string) => {
    switch (agent) {
      case 'Analyst': return <Brain className="w-4 h-4" />;
      case 'PM': return <FileText className="w-4 h-4" />;
      case 'UX Expert': return <Eye className="w-4 h-4" />;
      case 'Architect': return <Settings className="w-4 h-4" />;
      case 'QA': return <CheckCircle className="w-4 h-4" />;
      case 'Product Owner': return <User className="w-4 h-4" />;
      default: return <Code className="w-4 h-4" />;
    }
  };

  const getStepIcon = (step: WorkflowStep) => {
    if (step.agent) return getAgentIcon(step.agent);
    
    switch (step.type) {
      case 'start':
      case 'end':
        return <Play className="w-4 h-4" />;
      case 'decision':
        return <ArrowRight className="w-4 h-4" />;
      case 'process':
        return <Settings className="w-4 h-4" />;
      default:
        return <Code className="w-4 h-4" />;
    }
  };

  const handleStepClick = (stepId: string) => {
    setSelectedStep(stepId === selectedStep ? null : stepId);
  };

  const handleStartAnimation = () => {
    setIsAnimating(true);
    setCurrentStep('start');
    setCompletedSteps(new Set());
    
    // Simulate workflow progression
    const steps = workflowSteps.map(s => s.id);
    let stepIndex = 0;
    
    const timer = setInterval(() => {
      if (stepIndex < steps.length) {
        setCurrentStep(steps[stepIndex]);
        setCompletedSteps(prev => new Set([...prev, steps[stepIndex]]));
        stepIndex++;
      } else {
        setIsAnimating(false);
        clearInterval(timer);
      }
    }, 1500);
  };

  const handleResetAnimation = () => {
    setIsAnimating(false);
    setCurrentStep('start');
    setCompletedSteps(new Set());
  };

  const selectedStepData = selectedStep ? workflowSteps.find(s => s.id === selectedStep) : null;

  return (
    <div className="w-full">
      {/* Animation Controls */}
      <div className="flex justify-center gap-3 mb-6">
        <button
          onClick={handleStartAnimation}
          disabled={isAnimating}
          className="flex items-center gap-2 px-4 py-2 bg-primary-blue text-white rounded-lg hover:bg-primary-blue/90 disabled:opacity-50 transition-all duration-300 text-sm"
        >
          <Play className="w-4 h-4" />
          {isAnimating ? t('running') : t('simulate')}
        </button>
        <button
          onClick={handleResetAnimation}
          className="flex items-center gap-2 px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-all duration-300 text-sm"
        >
          <RotateCcw className="w-4 h-4" />
          {t('reset')}
        </button>
      </div>

      {/* Workflow Diagram */}
      <div className="relative bg-gradient-to-br from-primary-900/20 to-primary-800/10 rounded-2xl p-6 mb-8 overflow-hidden">
        <div className="relative" style={{ height: '1000px' }}>
          {/* Connections */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none">
            {workflowSteps.map(step => 
              step.connections.map(connectionId => {
                const targetStep = workflowSteps.find(s => s.id === connectionId);
                if (!targetStep) return null;
                
                const startX = `${step.position.x}%`;
                const startY = `${step.position.y + 3}%`;
                const endX = `${targetStep.position.x}%`;
                const endY = `${targetStep.position.y}%`;
                
                return (
                  <line
                    key={`${step.id}-${connectionId}`}
                    x1={startX}
                    y1={startY}
                    x2={endX}
                    y2={endY}
                    stroke={completedSteps.has(step.id) ? '#34a853' : '#374151'}
                    strokeWidth="2"
                    markerEnd="url(#arrowhead)"
                    className="transition-all duration-500"
                  />
                );
              })
            )}
            
            {/* Arrow marker */}
            <defs>
              <marker
                id="arrowhead"
                markerWidth="10"
                markerHeight="7"
                refX="10"
                refY="3.5"
                orient="auto"
              >
                <polygon
                  points="0 0, 10 3.5, 0 7"
                  fill="#374151"
                  className="transition-all duration-500"
                />
              </marker>
            </defs>
          </svg>

          {/* Workflow Steps */}
          {workflowSteps.map((step) => (
            <motion.div
              key={step.id}
              className={`absolute cursor-pointer transform -translate-x-1/2 -translate-y-1/2 ${step.color} rounded-xl p-4 shadow-lg border-2 border-white/20 backdrop-blur-sm transition-all duration-300 hover:shadow-xl hover:scale-105 hover:border-white/40 ${
                selectedStep === step.id ? 'ring-4 ring-primary-blue ring-opacity-50 shadow-2xl scale-110' : ''
              } ${
                currentStep === step.id ? 'ring-4 ring-accent-yellow animate-pulse' : ''
              } ${
                completedSteps.has(step.id) ? 'ring-2 ring-green-400' : ''
              }`}
              style={{
                left: `${step.position.x}%`,
                top: `${step.position.y}%`,
                minWidth: '180px',
                maxWidth: '200px'
              }}
              onClick={() => handleStepClick(step.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="flex items-center gap-3 mb-2">
                {getStepIcon(step)}
                <h3 className="font-bold text-sm">{step.title}</h3>
                {step.userInteraction && (
                  <MessageCircle className="w-4 h-4 text-blue-600" />
                )}
              </div>
              {step.agent && (
                <div className="text-xs opacity-70 font-medium mb-1">
                  Agent: {step.agent}
                </div>
              )}
              {step.type === 'decision' && (
                <div className="text-xs opacity-70">
                  ⚡ Decision Point
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Step Details Panel */}
      {selectedStepData && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gradient-to-br from-primary-900/60 to-primary-800/40 backdrop-blur-sm rounded-2xl p-8 border border-primary-700/50"
        >
          <div className="flex items-start gap-4 mb-4">
            <div className={`p-3 rounded-xl ${selectedStepData.color}`}>
              {getStepIcon(selectedStepData)}
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-bold text-text-primary mb-2">
                {selectedStepData.title}
              </h3>
              {selectedStepData.agent && (
                <div className="text-sm text-accent-yellow font-medium mb-2">
                  👤 Agent: {selectedStepData.agent}
                </div>
              )}
              {selectedStepData.userInteraction && (
                <div className="flex items-center gap-2 text-sm text-blue-400 mb-2">
                  <MessageCircle className="w-4 h-4" />
                  You can interact with this agent at this step
                </div>
              )}
            </div>
          </div>
          <p className="text-text-secondary leading-relaxed">
            {selectedStepData.description}
          </p>
          
          {selectedStepData.userInteraction && (
            <div className="mt-4 p-4 bg-blue-900/30 rounded-xl border border-blue-700/50">
              <h4 className="text-sm font-bold text-blue-300 mb-2">{t('interaction.title')}</h4>
              <p className="text-sm text-blue-200">
                {t('interaction.description', { agent: selectedStepData.agent || 'system' })}
              </p>
            </div>
          )}
        </motion.div>
      )}

      {/* Legend */}
      <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="flex items-center gap-3 p-4 bg-primary-900/30 rounded-xl">
          <MessageCircle className="w-5 h-5 text-blue-400" />
          <span className="text-sm text-text-secondary">{t('legend.user_interaction')}</span>
        </div>
        <div className="flex items-center gap-3 p-4 bg-primary-900/30 rounded-xl">
          <div className="w-4 h-4 rounded-full bg-accent-yellow animate-pulse"></div>
          <span className="text-sm text-text-secondary">{t('legend.current_step')}</span>
        </div>
        <div className="flex items-center gap-3 p-4 bg-primary-900/30 rounded-xl">
          <div className="w-4 h-4 rounded-full bg-green-400"></div>
          <span className="text-sm text-text-secondary">{t('legend.completed_step')}</span>
        </div>
        <div className="flex items-center gap-3 p-4 bg-primary-900/30 rounded-xl">
          <ArrowRight className="w-5 h-5 text-gray-400" />
          <span className="text-sm text-text-secondary">{t('legend.workflow_connection')}</span>
        </div>
      </div>
    </div>
  );
};

export default BMADWorkflowDiagram;