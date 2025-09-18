'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
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
  const [selectedStep, setSelectedStep] = useState<string | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const [currentStep, setCurrentStep] = useState<string>('start');
  const [completedSteps, setCompletedSteps] = useState<Set<string>>(new Set());

  const workflowSteps: WorkflowStep[] = [
    {
      id: 'start',
      title: 'Project Idea',
      type: 'start',
      description: 'Every great application begins with an idea. The BMAD method helps structure and validate your concept.',
      color: 'bg-gradient-to-br from-gray-100 to-gray-200 text-gray-800',
      position: { x: 50, y: 5 },
      connections: ['analyst-research'],
      userInteraction: true
    },
    {
      id: 'analyst-research',
      title: 'Analyst Research?',
      type: 'decision',
      description: 'Optional but recommended: Should we conduct market research and competitive analysis?',
      color: 'bg-gradient-to-br from-blue-100 to-blue-200 text-blue-800',
      position: { x: 50, y: 15 },
      connections: ['analyst-brainstorm', 'project-brief-check'],
      userInteraction: true
    },
    {
      id: 'analyst-brainstorm',
      title: 'Analyst: Brainstorming',
      type: 'agent',
      agent: 'Analyst',
      description: 'The Analyst agent conducts market research, competitor analysis, and creates a comprehensive project brief.',
      color: 'bg-gradient-to-br from-green-100 to-green-200 text-green-800',
      position: { x: 25, y: 25 },
      connections: ['analyst-market'],
      userInteraction: true
    },
    {
      id: 'analyst-market',
      title: 'Market Research',
      type: 'agent',
      agent: 'Analyst',
      description: 'Deep dive into market conditions, user needs, and business opportunities.',
      color: 'bg-gradient-to-br from-green-100 to-green-200 text-green-800',
      position: { x: 25, y: 35 },
      connections: ['analyst-competitor'],
      userInteraction: true
    },
    {
      id: 'analyst-competitor',
      title: 'Competitor Analysis',
      type: 'agent',
      agent: 'Analyst',
      description: 'Analyze existing solutions and identify competitive advantages.',
      color: 'bg-gradient-to-br from-green-100 to-green-200 text-green-800',
      position: { x: 25, y: 45 },
      connections: ['project-brief'],
      userInteraction: true
    },
    {
      id: 'project-brief',
      title: 'Create Project Brief',
      type: 'agent',
      agent: 'Analyst',
      description: 'Comprehensive project brief with research insights and strategic direction.',
      color: 'bg-gradient-to-br from-green-100 to-green-200 text-green-800',
      position: { x: 25, y: 55 },
      connections: ['project-brief-check'],
      userInteraction: true
    },
    {
      id: 'project-brief-check',
      title: 'Project Brief Available?',
      type: 'decision',
      description: 'Do we have a project brief to work from, or should we create a PRD directly?',
      color: 'bg-gradient-to-br from-blue-100 to-blue-200 text-blue-800',
      position: { x: 50, y: 55 },
      connections: ['pm-fast-track', 'pm-interactive'],
      userInteraction: true
    },
    {
      id: 'pm-fast-track',
      title: 'PM: Create PRD (Fast Track)',
      type: 'agent',
      agent: 'PM',
      description: 'Product Manager creates detailed requirements from existing brief.',
      color: 'bg-gradient-to-br from-orange-100 to-orange-200 text-orange-800',
      position: { x: 35, y: 65 },
      connections: ['prd-created'],
      userInteraction: true
    },
    {
      id: 'pm-interactive',
      title: 'PM: Interactive PRD Creation',
      type: 'agent',
      agent: 'PM',
      description: 'Product Manager asks detailed questions to create comprehensive requirements.',
      color: 'bg-gradient-to-br from-orange-100 to-orange-200 text-orange-800',
      position: { x: 65, y: 65 },
      connections: ['prd-created'],
      userInteraction: true
    },
    {
      id: 'prd-created',
      title: 'PRD with FRs, NFRs, Epics & Stories',
      type: 'process',
      description: 'Complete Product Requirements Document with functional/non-functional requirements and user stories.',
      color: 'bg-gradient-to-br from-orange-100 to-orange-200 text-orange-800',
      position: { x: 50, y: 75 },
      connections: ['ux-required'],
      userInteraction: false
    },
    {
      id: 'ux-required',
      title: 'UX Required?',
      type: 'decision',
      description: 'Does this project need UX design and front-end specifications?',
      color: 'bg-gradient-to-br from-blue-100 to-blue-200 text-blue-800',
      position: { x: 50, y: 85 },
      connections: ['ux-spec', 'architect-simple'],
      userInteraction: true
    },
    {
      id: 'ux-spec',
      title: 'UX: Create Front End Spec',
      type: 'agent',
      agent: 'UX Expert',
      description: 'UX Expert creates detailed front-end specifications and design system.',
      color: 'bg-gradient-to-br from-cyan-100 to-cyan-200 text-cyan-800',
      position: { x: 25, y: 95 },
      connections: ['ux-prompt'],
      userInteraction: true
    },
    {
      id: 'ux-prompt',
      title: 'Generate UI Prompt (Optional)',
      type: 'agent',
      agent: 'UX Expert',
      description: 'Generate optimized prompts for AI UI tools like Lovable or v0.',
      color: 'bg-gradient-to-br from-cyan-100 to-cyan-200 text-cyan-800',
      position: { x: 25, y: 105 },
      connections: ['architect-complex'],
      userInteraction: true
    },
    {
      id: 'architect-simple',
      title: 'Architect: Create Architecture',
      type: 'agent',
      agent: 'Architect',
      description: 'System Architect designs technical architecture from PRD requirements.',
      color: 'bg-gradient-to-br from-purple-100 to-purple-200 text-purple-800',
      position: { x: 75, y: 95 },
      connections: ['qa-optional'],
      userInteraction: true
    },
    {
      id: 'architect-complex',
      title: 'Architect: Create Architecture + UX',
      type: 'agent',
      agent: 'Architect',
      description: 'System Architect integrates UX specifications with technical architecture.',
      color: 'bg-gradient-to-br from-purple-100 to-purple-200 text-purple-800',
      position: { x: 25, y: 115 },
      connections: ['qa-optional'],
      userInteraction: true
    },
    {
      id: 'qa-optional',
      title: 'Early Test Strategy?',
      type: 'decision',
      description: 'Should QA provide early input on high-risk areas?',
      color: 'bg-gradient-to-br from-blue-100 to-blue-200 text-blue-800',
      position: { x: 50, y: 115 },
      connections: ['qa-review', 'po-checklist'],
      userInteraction: true
    },
    {
      id: 'qa-review',
      title: 'QA: Early Architecture Input',
      type: 'agent',
      agent: 'QA',
      description: 'Quality Assurance reviews architecture for testing and risk mitigation.',
      color: 'bg-gradient-to-br from-yellow-100 to-yellow-200 text-yellow-800',
      position: { x: 25, y: 125 },
      connections: ['po-checklist'],
      userInteraction: true
    },
    {
      id: 'po-checklist',
      title: 'PO: Run Master Checklist',
      type: 'agent',
      agent: 'Product Owner',
      description: 'Product Owner validates all documents are complete and aligned.',
      color: 'bg-gradient-to-br from-amber-100 to-amber-200 text-amber-800',
      position: { x: 50, y: 135 },
      connections: ['documents-aligned'],
      userInteraction: true
    },
    {
      id: 'documents-aligned',
      title: 'Documents Aligned?',
      type: 'decision',
      description: 'Are all planning documents consistent and complete?',
      color: 'bg-gradient-to-br from-blue-100 to-blue-200 text-blue-800',
      position: { x: 50, y: 145 },
      connections: ['planning-complete', 'po-update'],
      userInteraction: true
    },
    {
      id: 'po-update',
      title: 'PO: Update Epics & Stories',
      type: 'agent',
      agent: 'Product Owner',
      description: 'Product Owner refines epics and user stories based on review feedback.',
      color: 'bg-gradient-to-br from-amber-100 to-amber-200 text-amber-800',
      position: { x: 75, y: 155 },
      connections: ['update-docs'],
      userInteraction: true
    },
    {
      id: 'update-docs',
      title: 'Update PRD/Architecture',
      type: 'process',
      description: 'Update planning documents based on Product Owner feedback.',
      color: 'bg-gradient-to-br from-orange-100 to-orange-200 text-orange-800',
      position: { x: 75, y: 165 },
      connections: ['po-checklist'],
      userInteraction: false
    },
    {
      id: 'planning-complete',
      title: 'Planning Complete',
      type: 'end',
      description: 'All planning documents are validated and aligned. Ready for development!',
      color: 'bg-gradient-to-br from-green-400 to-green-500 text-white',
      position: { x: 25, y: 155 },
      connections: ['switch-ide'],
      userInteraction: false
    },
    {
      id: 'switch-ide',
      title: '📁 Switch to IDE',
      type: 'process',
      description: 'Critical transition: Move from web-based planning to IDE for development.',
      color: 'bg-gradient-to-br from-blue-500 to-blue-600 text-white',
      position: { x: 25, y: 165 },
      connections: ['po-shard'],
      userInteraction: false
    },
    {
      id: 'po-shard',
      title: 'PO: Shard Documents',
      type: 'agent',
      agent: 'Product Owner',
      description: 'Product Owner breaks down documents for development team consumption.',
      color: 'bg-gradient-to-br from-amber-100 to-amber-200 text-amber-800',
      position: { x: 25, y: 175 },
      connections: ['ready-dev'],
      userInteraction: true
    },
    {
      id: 'ready-dev',
      title: 'Ready for SM/Dev Cycle',
      type: 'end',
      description: 'Development-ready! Begin Scrum Master and development agent cycles.',
      color: 'bg-gradient-to-br from-green-400 to-green-500 text-white',
      position: { x: 25, y: 185 },
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
    <div className="max-w-7xl mx-auto px-6">
      <div className="text-center mb-12">
        <h2 className="text-h1 font-bold mb-6 text-text-primary">
          Interactive BMAD Workflow
        </h2>
        <p className="text-lg text-text-secondary max-w-4xl mx-auto mb-8">
          Click on any step to learn more about agent interactions. Each step shows how you can collaborate 
          with specialized AI agents to structure your development process.
        </p>
        
        {/* Animation Controls */}
        <div className="flex justify-center gap-4 mb-8">
          <button
            onClick={handleStartAnimation}
            disabled={isAnimating}
            className="flex items-center gap-2 px-6 py-3 bg-primary-blue text-white rounded-lg hover:bg-primary-blue/90 disabled:opacity-50 transition-all duration-300"
          >
            <Play className="w-4 h-4" />
            {isAnimating ? 'Running...' : 'Simulate Workflow'}
          </button>
          <button
            onClick={handleResetAnimation}
            className="flex items-center gap-2 px-6 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-all duration-300"
          >
            <RotateCcw className="w-4 h-4" />
            Reset
          </button>
        </div>
      </div>

      {/* Workflow Diagram */}
      <div className="relative bg-gradient-to-br from-primary-900/20 to-primary-800/10 rounded-3xl p-8 mb-12 overflow-hidden">
        <div className="relative" style={{ height: '2000px' }}>
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
              className={`absolute cursor-pointer transform -translate-x-1/2 -translate-y-1/2 ${step.color} rounded-xl p-4 shadow-lg border-2 transition-all duration-300 hover:shadow-xl hover:scale-105 ${
                selectedStep === step.id ? 'ring-4 ring-primary-blue ring-opacity-50 shadow-2xl scale-110' : ''
              } ${
                currentStep === step.id ? 'ring-4 ring-accent-yellow animate-pulse' : ''
              } ${
                completedSteps.has(step.id) ? 'ring-2 ring-green-400' : ''
              }`}
              style={{
                left: `${step.position.x}%`,
                top: `${step.position.y}%`,
                minWidth: '200px'
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
              <h4 className="text-sm font-bold text-blue-300 mb-2">💬 User Interaction</h4>
              <p className="text-sm text-blue-200">
                At this step, you can discuss requirements, ask questions, and provide feedback to the {selectedStepData.agent || 'system'}. 
                The agent will solicitate your input to ensure the output meets your specific needs.
              </p>
            </div>
          )}
        </motion.div>
      )}

      {/* Legend */}
      <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="flex items-center gap-3 p-4 bg-primary-900/30 rounded-xl">
          <MessageCircle className="w-5 h-5 text-blue-400" />
          <span className="text-sm text-text-secondary">User Interaction Available</span>
        </div>
        <div className="flex items-center gap-3 p-4 bg-primary-900/30 rounded-xl">
          <div className="w-4 h-4 rounded-full bg-accent-yellow animate-pulse"></div>
          <span className="text-sm text-text-secondary">Current Step</span>
        </div>
        <div className="flex items-center gap-3 p-4 bg-primary-900/30 rounded-xl">
          <div className="w-4 h-4 rounded-full bg-green-400"></div>
          <span className="text-sm text-text-secondary">Completed Step</span>
        </div>
        <div className="flex items-center gap-3 p-4 bg-primary-900/30 rounded-xl">
          <ArrowRight className="w-5 h-5 text-gray-400" />
          <span className="text-sm text-text-secondary">Workflow Connection</span>
        </div>
      </div>
    </div>
  );
};

export default BMADWorkflowDiagram;