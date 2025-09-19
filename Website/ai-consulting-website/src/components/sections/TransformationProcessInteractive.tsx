'use client';

import React, { useState, useEffect, memo, useCallback, useMemo, useRef } from 'react';

// Global instance control to prevent multiple timers
const globalTimerInstance: {
  intervalId: number | null;
  componentId: string | null;
  isRunning: boolean;
} = {
  intervalId: null,
  componentId: null,
  isRunning: false
};
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Play, 
  Pause, 
  RotateCcw, 
  AlertTriangle, 
  FileText, 
  Sparkles, 
  Users,
  CheckSquare,
  Zap,
  Brain,
  Network,
  Eye,
  Cpu,
  Database,
  Globe,
  MonitorSpeaker,
  Activity,
  ArrowRight
} from 'lucide-react';
import { useTranslations } from 'next-intl';

interface TransformationStage {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  bgColor: string;
  concepts: string[];
}

interface TransformationProcessInteractiveProps {
  autoPlay?: boolean;
  duration?: number;
}

interface Project {
  name: string;
  progress: string;
  status: string;
  team?: string;
  deadline?: string;
}

interface TeamMember {
  name: string;
  role?: string;
  status: string;
  avatar?: string;
  lastActive?: string;
}

const stages: TransformationStage[] = [
  {
    id: 'chaos',
    title: 'Dépendance',
    description: 'Coincé avec vos idées',
    icon: null,
    color: 'text-accent-red',
    bgColor: 'from-accent-red/20 via-background-dark to-background-dark-alt',
    concepts: [
      'prioritisation', 'user stories', 'customer persona', 'target audience', 'market fit',
      'coordination bottleneck', 'daily standups', 'sprint planning', 'retrospectives',
      'Product Manager', 'Scrum Master', 'Product Owner', 'UX/UI Designer',
      'technical debt', 'scalabilité', 'architecture', 'performance', 'sécurité',
      'KPIs', 'ROI', 'time to market', 'user engagement', 'conversion rate',
      'brainstorming', 'ideation', 'creative chaos', 'vision floue', 'objectifs multiples',
      'stakeholders', 'requirements', 'backlog', 'features', 'roadmap', 'timeline',
      'budget constraints', 'resource allocation', 'team capacity', 'skill gaps',
      'communication', 'meetings', 'documentation', 'decisions', 'priorities',
      'market research', 'competitor analysis', 'user feedback', 'testing', 'validation',
      'prototype', 'wireframes', 'mockups', 'designs', 'iterations', 'revisions',
      'scope creep', 'changing requirements', 'deadlines', 'pressure', 'stress'
    ]
  },
  {
    id: 'specification',
    title: 'Méthode',
    description: 'Apprendre le langage de l\'IA',
    icon: null,
    color: 'text-primary-blue',
    bgColor: 'from-primary-blue/20 via-background-dark to-background-dark-alt',
    concepts: [
      'spécifications atomiques', 'critères d\'acceptation', 'définitions de fini',
      'instructions exécutables', 'API design', 'database schema', 'architecture techniques',
      'diagrammes de flux', 'arbres de décision', 'documentation cristalline',
      'contraintes métier', 'logique applicative', 'liens sémantiques'
    ]
  },
  {
    id: 'completion',
    title: 'Autonomie',
    description: 'Créer sans limites',
    icon: null,
    color: 'text-accent-yellow',
    bgColor: 'from-accent-yellow/20 via-background-dark to-background-dark-alt',
    concepts: [
      'interface utilisateur réelle', 'données en temps réel', 'interactions utilisateur',
      'métriques de performance', 'URL réelle accessible', 'monitoring temps réel',
      'systèmes de sauvegarde', 'scaling automatique', 'security layers actifs',
      'feedback client', 'analytics avancées', 'écosystème digital complet'
    ]
  }
];

// Composant pour l'état de chaos - L'Univers des Intentions Non-Structurées
const ChaosVisualization = ({ concepts, t }: { concepts: string[]; t: any }) => {
  const [chaosElements] = useState(() => {
    // Create dense, tilted word cloud covering entire space
    const totalWords = concepts.length;
    const layers = Math.ceil(Math.sqrt(totalWords)); // Multiple layers for density
    
    return concepts.map((concept, i) => {
      // Dense grid with random offset for organic feel
      const gridSize = Math.ceil(Math.sqrt(totalWords));
      const baseX = (i % gridSize) * (90 / gridSize) + 5; // Spread across full width
      const baseY = Math.floor(i / gridSize) * (85 / Math.ceil(totalWords / gridSize)) + 5; // Full height
      
      // Add random offset for organic positioning
      const offsetX = (Math.sin(i * 2.3) * 15); // Deterministic but random-looking
      const offsetY = (Math.cos(i * 1.7) * 12);
      
      const x = Math.max(2, Math.min(95, baseX + offsetX));
      const y = Math.max(2, Math.min(95, baseY + offsetY));
      
      return {
        id: i,
        text: concept,
        x: x,
        y: y,
        opacity: 0.4 + (i * 0.03) % 0.5, // Varied opacity for depth
        size: 0.5 + (concept.length < 8 ? 0.25 : concept.length < 15 ? 0.15 : 0.05), // Size variation
        speed: 0.2 + (i * 0.12) % 1.0, // Varied animation speeds
        rotation: -45 + (i * 17) % 90, // Tilted text: -45° to +45°
        color: i % 5 === 0 ? 'text-accent-yellow/85' : 
               i % 5 === 1 ? 'text-text-light/75' : 
               i % 5 === 2 ? 'text-primary-blue/65' : 
               i % 5 === 3 ? 'text-text-secondary/55' :
               'text-accent-yellow/70' // More yellow variants for chaos theme
      };
    });
  });

  // Rôles éparpillés dans le chaos - plus de rôles pour plus de densité
  const roles = [
    { name: 'Product Manager', color: 'text-accent-red' },
    { name: 'Scrum Master', color: 'text-accent-yellow' },
    { name: 'Product Owner', color: 'text-primary-blue' },
    { name: 'UX/UI Designer', color: 'text-accent-purple' },
    { name: 'Développeurs', color: 'text-success-green' },
    { name: 'Architecte', color: 'text-text-light' },
    { name: 'Business Analyst', color: 'text-accent-yellow' },
    { name: 'DevOps Engineer', color: 'text-primary-blue' },
    { name: 'QA Tester', color: 'text-success-green' },
    { name: 'Data Scientist', color: 'text-accent-purple' },
    { name: 'Marketing Lead', color: 'text-accent-red' },
    { name: 'CEO', color: 'text-text-light' },
    { name: 'CTO', color: 'text-primary-blue' },
    { name: 'Sales Rep', color: 'text-accent-yellow' },
    { name: 'Customer Support', color: 'text-success-green' }
  ];

  return (
    <div className="relative h-full w-full overflow-hidden rounded-2xl"
         style={{
           background: `
             linear-gradient(135deg, 
               rgba(251, 191, 36, 0.15) 0%, 
               rgba(42, 42, 42, 0.92) 50%,
               rgba(251, 191, 36, 0.08) 100%
             )
           `
         }}>
      {/* Environmental atmosphere for chaos */}
      <div className="absolute inset-0 opacity-[0.05]"
           style={{
             background: `
               radial-gradient(circle at 30% 30%, rgba(251, 191, 36, 0.4) 0%, transparent 50%),
               radial-gradient(circle at 70% 70%, rgba(245, 158, 11, 0.3) 0%, transparent 50%)
             `
           }}></div>
      
      {/* Dense, tilted word cloud - chaotic concepts everywhere */}
      <div className="absolute inset-0">
        {chaosElements.map((element) => (
          <motion.div
            key={element.id}
            className={`absolute ${element.color} font-medium pointer-events-none select-none`}
            style={{
              left: `${element.x}%`,
              top: `${element.y}%`,
              fontSize: `${element.size}rem`,
              opacity: element.opacity,
              textShadow: '0 2px 8px rgba(0, 0, 0, 0.4)',
              transform: `translate(-50%, -50%) rotate(${element.rotation}deg)`, // Apply initial rotation
              whiteSpace: 'nowrap' // Prevent text wrapping
            }}
            animate={{
              x: [0, (element.id % 3 === 0 ? 1 : -1) * 6, 0], // Subtle floating movement
              y: [0, (element.id % 2 === 0 ? 1 : -1) * 4, 0], // Reduced vertical movement for density
              opacity: [element.opacity * 0.7, element.opacity, element.opacity * 0.9],
              rotate: [element.rotation - 5, element.rotation + 5, element.rotation - 5], // Gentle rotation around base angle
              scale: [0.9, 1.1, 0.9] // Breathing effect
            }}
            transition={{
              duration: 8 + element.speed * 3, // Slower movement for readability
              repeat: Infinity,
              ease: "easeInOut",
              delay: element.id * 0.2 // Reduced delay for more chaos
            }}
          >
            {element.text}
          </motion.div>
        ))}
      </div>

      {/* Centre neural du chaos */}
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <motion.div
          className="relative mb-8"
          animate={{ 
            scale: [1, 1.1, 1],
            rotate: [0, 5, -5, 0]
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="w-32 h-32 rounded-full flex items-center justify-center"
               style={{
                 background: `
                   linear-gradient(135deg, 
                     rgba(251, 191, 36, 0.25) 0%, 
                     rgba(251, 191, 36, 0.15) 50%,
                     rgba(245, 158, 11, 0.08) 100%
                   )
                 `,
                 boxShadow: `
                   0 8px 25px rgba(251, 191, 36, 0.3),
                   0 0 40px rgba(251, 191, 36, 0.15),
                   inset 0 1px 0 rgba(255, 255, 255, 0.2)
                 `,
                 border: 'none'
               }}>
            <Brain className="w-16 h-16 text-accent-yellow" />
          </div>
          
          {/* Électricité chaotique autour du cerveau */}
          {Array.from({ length: 8 }, (_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-8 bg-gradient-to-t from-accent-yellow/80 to-transparent"
              style={{
                top: '50%',
                left: '50%',
                originX: 0.5,
                originY: 1,
                transform: `rotate(${i * 45}deg)`,
                marginTop: '-32px',
                marginLeft: '-2px'
              }}
              animate={{
                scaleY: [0.5, 1.5, 0.3],
                opacity: [0.3, 0.8, 0.2]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                delay: i * 0.2,
                ease: "easeInOut"
              }}
            />
          ))}
        </motion.div>

        {/* Rôles éparpillés dans le chaos */}
        <div className="absolute inset-0">
          {roles.map((role, index) => {
            // Scattered positioning throughout the entire space
            const scatterX = 15 + (Math.sin(index * 3.7) * 35) + (index * 12) % 60; // Spread across width
            const scatterY = 20 + (Math.cos(index * 2.1) * 25) + (index * 15) % 50; // Spread across height
            const rotation = -25 + (index * 23) % 50; // Random tilted angles
            
            return (
              <motion.div
                key={role.name}
                className={`absolute ${role.color} px-3 py-1 rounded-lg font-medium text-xs whitespace-nowrap`}
                style={{
                  left: `${Math.max(8, Math.min(85, scatterX))}%`,
                  top: `${Math.max(15, Math.min(80, scatterY))}%`,
                  transform: `translate(-50%, -50%) rotate(${rotation}deg)`,
                  background: `
                    linear-gradient(135deg, 
                      rgba(251, 191, 36, 0.15) 0%, 
                      rgba(42, 42, 42, 0.85) 100%
                    )
                  `,
                  boxShadow: `
                    0 4px 12px rgba(0, 0, 0, 0.25),
                    inset 0 1px 0 rgba(255, 255, 255, 0.15)
                  `,
                  border: 'none',
                  zIndex: 10 // Above word cloud
                }}
                animate={{
                  y: [0, (index % 3 === 0 ? -6 : 6), 0],
                  x: [0, (index % 2 === 0 ? -5 : 5), 0],
                  rotate: [rotation - 8, rotation + 8, rotation - 8], // Gentle rotation around base angle
                  scale: [0.85, 1.15, 0.85], // More dramatic scale changes
                  opacity: [0.7, 1.0, 0.8]
                }}
                transition={{
                  duration: 5 + index * 0.6,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: index * 0.5
                }}
              >
                {role.name}
              </motion.div>
            );
          })}
        </div>

        {/* Message central */}
        <motion.div
          className="text-center mt-8 max-w-md"
          animate={{ opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          <p className="text-accent-yellow/90 text-lg font-semibold mb-2">
            {t('chaos_visualization.title')}
          </p>
          <p className="text-text-light/70 text-sm">
            {t('chaos_visualization.description')}
          </p>
        </motion.div>
      </div>
    </div>
  );
};

// Composant pour les spécifications - Living Documents qui s'organisent naturellement
const SpecificationStructure = ({ concepts }: { concepts: string[] }) => {
  const [writingProgress, setWritingProgress] = useState(0);
  const [activeDocument, setActiveDocument] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setWritingProgress(prev => (prev + 1) % 100);
      if (writingProgress % 25 === 0) {
        setActiveDocument(prev => (prev + 1) % 3);
      }
    }, 80);
    return () => clearInterval(interval);
  }, [writingProgress]);

  // Documents types qui s'écrivent naturellement
  const documents = [
    {
      title: "User Stories",
      color: "text-success-green",
      bgColor: "bg-success-green/10",
      borderColor: "border-success-green/30",
      icon: "📋",
      content: [
        "En tant qu'utilisateur, je veux...",
        "Critères d'acceptation ✓",
        "Définition of Done ✓",
        "Points d'estimation: 3"
      ]
    },
    {
      title: "API Documentation", 
      color: "text-primary-blue",
      bgColor: "bg-primary-blue/10",
      borderColor: "border-primary-blue/30", 
      icon: "🔗",
      content: [
        "GET /api/users",
        "POST /api/auth/login", 
        "PUT /api/profile",
        "Response: 200 OK"
      ]
    },
    {
      title: "Technical Requirements",
      color: "text-accent-purple", 
      bgColor: "bg-accent-purple/10",
      borderColor: "border-accent-purple/30",
      icon: "⚙️",
      content: [
        "Database: PostgreSQL",
        "Cache: Redis",
        "Auth: JWT tokens",
        "Deploy: Docker"
      ]
    }
  ];

  return (
    <div className="relative h-full w-full overflow-hidden bg-gradient-to-br from-slate-50/5 via-white/5 to-slate-100/5 rounded-2xl">
      {/* Fond papier subtil */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-200/10 via-transparent to-slate-300/5"></div>
      
      {/* Texture de papier subtile */}
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, rgba(99,102,241,0.3) 1px, transparent 0)`,
        backgroundSize: '20px 20px'
      }}></div>

      <div className="absolute inset-0 flex flex-col items-center justify-center p-4">
        {/* Header avec message central - Plus compact */}
        <motion.div
          className="text-center mb-4"
          animate={{ opacity: [0.8, 1, 0.8] }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          <div className="flex items-center justify-center space-x-2 mb-2">
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            >
              <FileText className="w-6 h-6 text-primary-blue" />
            </motion.div>
            <h3 className="text-lg font-semibold text-primary-blue">Living Documents</h3>
          </div>
          <p className="text-primary-blue/70 text-xs max-w-sm">
            L'information se structure naturellement, sans effort
          </p>
        </motion.div>

        {/* Documents qui s'écrivent automatiquement - Plus compact */}
        <div className="grid grid-cols-1 gap-3 w-full max-w-md mx-auto">
          {documents.map((doc, docIndex) => (
            <motion.div
              key={doc.title}
              className={`relative rounded-lg p-4`}
              style={{
                background: `
                  linear-gradient(135deg, 
                    rgba(116, 166, 190, 0.12) 0%, 
                    rgba(42, 42, 42, 0.9) 100%
                  )
                `,
                boxShadow: `
                  0 4px 12px rgba(0, 0, 0, 0.1),
                  inset 0 1px 0 rgba(255, 255, 255, 0.1)
                `,
                border: 'none'
              }}
              animate={{ 
                scale: activeDocument === docIndex ? 1.05 : 1,
                opacity: activeDocument === docIndex ? 1 : 0.8
              }}
              transition={{ duration: 0.5 }}
            >
              {/* En-tête du document - Plus compact */}
              <div className="flex items-center space-x-2 mb-3">
                <span className="text-lg">{doc.icon}</span>
                <div>
                  <h4 className={`text-sm font-semibold ${doc.color}`}>{doc.title}</h4>
                  <div className="flex items-center space-x-1">
                    <div className="w-1.5 h-1.5 bg-success-green rounded-full animate-pulse"></div>
                    <span className="text-xs text-text-secondary">Auto-generated</span>
                  </div>
                </div>
              </div>

              {/* Contenu qui s'écrit - Plus compact */}
              <div className="space-y-2">
                {doc.content.map((line, lineIndex) => (
                  <motion.div
                    key={lineIndex}
                    className="flex items-center space-x-2"
                    initial={{ opacity: 0, width: 0 }}
                    animate={{ 
                      opacity: 1, 
                      width: "100%"
                    }}
                    transition={{ 
                      delay: docIndex * 0.5 + lineIndex * 0.3,
                      duration: 0.8
                    }}
                  >
                    <motion.div
                      className={`w-1 h-1 ${doc.color.replace('text-', 'bg-')} rounded-full`}
                      animate={{ scale: [1, 1.5, 1] }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: lineIndex * 0.2
                      }}
                    />
                    <motion.span 
                      className={`text-xs ${doc.color} font-mono`}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: docIndex * 0.5 + lineIndex * 0.3 + 0.5 }}
                    >
                      {line}
                    </motion.span>
                  </motion.div>
                ))}
              </div>

              {/* Indicateur de progression */}
              <div className="mt-4 w-full h-1 bg-background-accent-grey/30 rounded-full overflow-hidden">
                <motion.div
                  className={`h-full ${doc.color.replace('text-', 'bg-')} rounded-full`}
                  initial={{ width: '0%' }}
                  animate={{ width: '100%' }}
                  transition={{
                    delay: docIndex * 0.5,
                    duration: 2,
                    ease: "easeOut"
                  }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Flux de connexions entre documents */}
        <div className="absolute inset-0 pointer-events-none">
          <svg className="w-full h-full">
            <defs>
              <linearGradient id="flowGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="rgb(116, 166, 190)" stopOpacity="0.6" />
                <stop offset="50%" stopColor="rgb(16, 185, 129)" stopOpacity="0.4" />
                <stop offset="100%" stopColor="rgb(139, 92, 246)" stopOpacity="0.6" />
              </linearGradient>
            </defs>
            
            {/* Lignes de connexion fluides */}
            <motion.path
              d="M 100 200 Q 200 120 300 200"
              stroke="url(#flowGradient)"
              strokeWidth="2"
              fill="none"
              strokeDasharray="5,5"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ 
                pathLength: [0, 1, 0],
                opacity: [0, 0.6, 0]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <motion.path
              d="M 300 200 Q 200 280 100 200"
              stroke="url(#flowGradient)"
              strokeWidth="2"
              fill="none"
              strokeDasharray="5,5"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ 
                pathLength: [0, 1, 0],
                opacity: [0, 0.6, 0]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                delay: 2,
                ease: "easeInOut"
              }}
            />
          </svg>
        </div>

        {/* Message de simplicité - Plus compact */}
        <motion.div
          className="mt-4 text-center"
          animate={{ opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 4, repeat: Infinity }}
        >
          <p className="text-primary-blue/80 text-sm font-medium mb-1">
            Structure Sans Effort
          </p>
          <p className="text-primary-blue/60 text-xs max-w-sm">
            L'information trouve naturellement sa place
          </p>
        </motion.div>
      </div>
    </div>
  );
};

// Composant pour l'application incarnée - Progressive Evolution from Chaos to Sophisticated App
const LivingApplication = ({ concepts, phase = 0 }: { concepts: string[]; phase?: number }) => {
  const currentPhase = phase; // Use phase prop instead of internal state
  const [metrics, setMetrics] = useState({
    activeProjects: 12,
    completedToday: 8,
    teamVelocity: 87,
    deploymentSuccess: 99.2
  });
  
  // Update metrics periodically (but not phase - that's controlled by parent)
  useEffect(() => {
    const interval = setInterval(() => {
      setMetrics(prev => ({
        activeProjects: prev.activeProjects + Math.floor(Math.random() * 3) - 1,
        completedToday: prev.completedToday + Math.floor(Math.random() * 2),
        teamVelocity: Math.max(80, Math.min(100, prev.teamVelocity + Math.random() * 4 - 2)),
        deploymentSuccess: Math.max(95.0, Math.min(100, prev.deploymentSuccess + Math.random() * 0.2 - 0.1))
      }));
    }, 3000); // Update metrics more frequently for realistic feel
    return () => clearInterval(interval);
  }, []);

  // Define the three evolution phases
  const phases = {
    0: { // Sketchy Prototype Phase
      name: "Rough Prototype",
      description: "From vague ideas...",
      style: "sketchy"
    },
    1: { // Structured Design Phase  
      name: "Structured Design",
      description: "Through organization...",
      style: "structured"
    },
    2: { // Polished Application Phase
      name: "Production App", 
      description: "To sophisticated reality",
      style: "polished"
    }
  };

  // Progressive content evolution - changes based on phase
  const projectEvolution = {
    0: { // Sketchy phase - rough wireframe-like
      projects: [
        { name: "[Some App Title]", progress: "??%", status: "[Working on it]" },
        { name: "[Another Thing]", progress: "~40%", status: "[Not sure]" },
        { name: "[New Feature]", progress: "0%", status: "[Just started]" }
      ],
      metrics: { active: "~12", completed: "Some", velocity: "OK", success: "Good?" }
    },
    1: { // Structured phase - organized but basic
      projects: [
        { name: "User Dashboard", progress: "68%", status: "In Development" },
        { name: "Payment System", progress: "45%", status: "Design Complete" },
        { name: "Mobile App", progress: "12%", status: "Planning" }
      ],
      metrics: { active: "12", completed: "8", velocity: "87%", success: "99.2%" }
    },
    2: { // Polished phase - production-ready details
      projects: [
        { name: "Enterprise Dashboard v2.3", progress: "94%", status: "Code Review", team: "Frontend Team", deadline: "Tomorrow" },
        { name: "Payment Gateway Integration", progress: "78%", status: "Testing Phase", team: "Backend Team", deadline: "Next Week" },
        { name: "Mobile App (iOS/Android)", progress: "45%", status: "Development", team: "Mobile Team", deadline: "Next Sprint" }
      ],
      metrics: { 
        active: metrics.activeProjects, 
        completed: metrics.completedToday, 
        velocity: `${Math.round(metrics.teamVelocity)}%`, 
        success: `${metrics.deploymentSuccess.toFixed(1)}%` 
      }
    }
  };

  const teamEvolution = {
    0: [
      { name: "[Dev Person]", role: "[Coding]", status: "busy" },
      { name: "[Designer]", role: "[Making stuff]", status: "working" }
    ],
    1: [
      { name: "Alex Chen", role: "Lead Developer", status: "active" },
      { name: "Maria Garcia", role: "UI Designer", status: "active" },
      { name: "John Smith", role: "Backend Engineer", status: "break" }
    ],
    2: [
      { name: "Alexandra Chen", role: "Senior Full-Stack Engineer", status: "active", avatar: "AC", lastActive: "2 min ago" },
      { name: "Maria Isabella Garcia", role: "Principal UI/UX Designer", status: "active", avatar: "MG", lastActive: "5 min ago" },
      { name: "Jonathan Smith", role: "DevOps & Backend Specialist", status: "break", avatar: "JS", lastActive: "15 min ago" },
      { name: "Priya Patel", role: "QA Engineering Lead", status: "active", avatar: "PP", lastActive: "1 min ago" }
    ]
  };

  // Styling functions for each phase
  const getPhaseStyle = (phase: number) => {
    switch(phase) {
      case 0: // Sketchy
        return {
          container: "bg-background-primary/10 border-2 border-dashed border-text-secondary/30",
          text: "font-mono text-text-secondary/70",
          accent: "text-accent-yellow/60",
          button: "border border-dashed border-text-secondary/40 bg-transparent"
        };
      case 1: // Structured  
        return {
          container: "bg-background-accent-grey/20 border border-text-secondary/40 rounded-lg",
          text: "font-sans text-text-primary/80",
          accent: "text-accent-blue/80",
          button: "border border-text-secondary/60 bg-background-primary/30 rounded"
        };
      case 2: // Polished
        return {
          container: "bg-gradient-to-br from-background-accent-grey/40 to-background-primary/30 border border-text-secondary/60 rounded-xl shadow-2xl backdrop-blur-sm",
          text: "font-sans text-text-light",
          accent: "text-accent-yellow",
          button: "bg-accent-blue/20 border border-accent-blue/40 rounded-lg hover:bg-accent-blue/30 transition-all"
        };
      default:
        return getPhaseStyle(2);
    }
  };

  const currentStyle = getPhaseStyle(currentPhase);
  const currentProjects = projectEvolution[currentPhase as keyof typeof projectEvolution];
  const currentTeam = teamEvolution[currentPhase as keyof typeof teamEvolution];

  return (
    <div 
      className="relative h-full w-full overflow-hidden rounded-2xl"
      style={{
        background: currentPhase === 0 ? 'linear-gradient(135deg, rgba(200, 200, 200, 0.1) 0%, rgba(42, 42, 42, 0.95) 100%)' : 
                   currentPhase === 1 ? 'linear-gradient(135deg, rgba(116, 166, 190, 0.08) 0%, rgba(42, 42, 42, 0.95) 100%)' :
                   'linear-gradient(135deg, rgba(251, 191, 36, 0.08) 0%, rgba(42, 42, 42, 0.95) 100%)'
      }}
    >
      {/* Phase indicator */}
      <motion.div
        className="absolute top-4 left-4 z-20 px-3 py-1 rounded-lg text-xs font-medium"
        style={{
          background: 'rgba(42, 42, 42, 0.8)',
          color: '#fbbf24'
        }}
        key={currentPhase}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        {phases[currentPhase as keyof typeof phases].name}
      </motion.div>
      
      {/* Evolving Application Frame */}
      <div className="absolute inset-4 flex flex-col">
        <motion.div
          className="w-full h-full overflow-hidden"
          style={{
            background: currentPhase === 0 ? 'rgba(200, 200, 200, 0.05)' : 
                       currentPhase === 1 ? 'rgba(116, 166, 190, 0.08)' :
                       'linear-gradient(135deg, rgba(116, 166, 190, 0.12) 0%, rgba(116, 166, 190, 0.08) 100%)',
            border: currentPhase === 0 ? '2px dashed rgba(200, 200, 200, 0.3)' : 
                   currentPhase === 1 ? '1px solid rgba(116, 166, 190, 0.20)' : 'none',
            borderRadius: currentPhase === 0 ? '4px' : currentPhase === 1 ? '8px' : '12px',
            boxShadow: currentPhase === 2 ? '0 4px 12px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.1)' : 'none'
          }}
          key={currentPhase}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          {/* Evolving Header */}
          <motion.div 
            className={`px-4 py-3 flex items-center justify-between`}
            style={{
              background: currentPhase === 0 ? 'rgba(200, 200, 200, 0.03)' : 
                         currentPhase === 1 ? 'rgba(116, 166, 190, 0.08)' :
                         'linear-gradient(135deg, rgba(116, 166, 190, 0.12) 0%, rgba(42, 42, 42, 0.95) 100%)',
              borderBottom: currentPhase === 0 ? '2px dashed rgba(200, 200, 200, 0.2)' : 
                           currentPhase === 1 ? '1px solid rgba(116, 166, 190, 0.2)' : 'none'
            }}
            key={`header-${currentPhase}`}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.h1 
              className={`text-lg font-bold ${currentStyle.text}`}
              key={`title-${currentPhase}`}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              {currentPhase === 0 ? '[Some App Title]' : 
               currentPhase === 1 ? 'Project Dashboard' : 
               'Newcode Production Dashboard'}
            </motion.h1>
            
            {currentPhase === 2 && (
              <motion.div 
                className="flex items-center space-x-2"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-xs text-green-400">Live</span>
              </motion.div>
            )}
          </motion.div>

          {/* Evolving App Content */}
          <motion.div 
            className="flex-1 p-4"
            style={{ background: 'rgba(42, 42, 42, 0.95)' }}
            key={`content-${currentPhase}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            {/* Evolving Metrics Grid */}
            <div className="grid grid-cols-2 gap-3 mb-4">
              {/* Active Projects Metric */}
              <motion.div
                className={`p-3 ${currentStyle.text}`}
                style={{
                  background: currentPhase === 0 ? 'rgba(200, 200, 200, 0.05)' : 
                             currentPhase === 1 ? 'rgba(116, 166, 190, 0.10)' :
                             'linear-gradient(135deg, rgba(116, 166, 190, 0.12) 0%, rgba(116, 166, 190, 0.08) 100%)',
                  border: currentPhase === 0 ? '2px dashed rgba(200, 200, 200, 0.3)' : 
                         currentPhase === 1 ? '1px solid rgba(116, 166, 190, 0.20)' : 'none',
                  borderRadius: currentPhase === 0 ? '4px' : currentPhase === 1 ? '8px' : '12px',
                  boxShadow: currentPhase === 2 ? '0 4px 12px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.1)' : 'none'
                }}
                animate={currentPhase === 2 ? { scale: [1, 1.02, 1] } : {}}
                transition={{ duration: 2, repeat: Infinity, delay: 0 }}
              >
                <div className={`text-xl font-bold ${currentStyle.accent}`}>
                  {currentProjects.metrics.active}
                </div>
                <div className="text-xs opacity-70">
                  {currentPhase === 0 ? '[Projects?]' : 'Active Projects'}
                </div>
              </motion.div>
              
              {/* Completed Metric */}
              <motion.div
                className={`p-3 ${currentStyle.text}`}
                style={{
                  background: currentPhase === 0 ? 'rgba(200, 200, 200, 0.05)' : 
                             currentPhase === 1 ? 'rgba(16, 185, 129, 0.10)' :
                             'linear-gradient(135deg, rgba(16, 185, 129, 0.12) 0%, rgba(16, 185, 129, 0.08) 100%)',
                  border: currentPhase === 0 ? '2px dashed rgba(200, 200, 200, 0.3)' : 
                         currentPhase === 1 ? '1px solid rgba(16, 185, 129, 0.20)' : 'none',
                  borderRadius: currentPhase === 0 ? '4px' : currentPhase === 1 ? '8px' : '12px',
                  boxShadow: currentPhase === 2 ? '0 4px 12px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.1)' : 'none'
                }}
                animate={currentPhase === 2 ? { scale: [1, 1.02, 1] } : {}}
                transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
              >
                <div className={`text-xl font-bold ${currentPhase === 2 ? 'text-green-400' : currentStyle.accent}`}>
                  {currentProjects.metrics.completed}
                </div>
                <div className="text-xs opacity-70">
                  {currentPhase === 0 ? '[Done stuff]' : 'Completed Today'}
                </div>
              </motion.div>
              
              {/* Velocity Metric */}
              <motion.div
                className={`p-3 ${currentStyle.text}`}
                style={{
                  background: currentPhase === 0 ? 'rgba(200, 200, 200, 0.05)' : 
                             currentPhase === 1 ? 'rgba(251, 191, 36, 0.10)' :
                             'linear-gradient(135deg, rgba(251, 191, 36, 0.12) 0%, rgba(251, 191, 36, 0.08) 100%)',
                  border: currentPhase === 0 ? '2px dashed rgba(200, 200, 200, 0.3)' : 
                         currentPhase === 1 ? '1px solid rgba(251, 191, 36, 0.20)' : 'none',
                  borderRadius: currentPhase === 0 ? '4px' : currentPhase === 1 ? '8px' : '12px',
                  boxShadow: currentPhase === 2 ? '0 4px 12px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.1)' : 'none'
                }}
                animate={currentPhase === 2 ? { scale: [1, 1.02, 1] } : {}}
                transition={{ duration: 2, repeat: Infinity, delay: 1 }}
              >
                <div className={`text-xl font-bold ${currentPhase === 2 ? 'text-yellow-400' : currentStyle.accent}`}>
                  {currentProjects.metrics.velocity}
                </div>
                <div className="text-xs opacity-70">
                  {currentPhase === 0 ? '[Speed]' : 'Team Velocity'}
                </div>
              </motion.div>
              
              {/* Success Rate Metric */}
              <motion.div
                className={`p-3 ${currentStyle.text}`}
                style={{
                  background: currentPhase === 0 ? 'rgba(200, 200, 200, 0.05)' : 
                             currentPhase === 1 ? 'rgba(139, 92, 246, 0.10)' :
                             'linear-gradient(135deg, rgba(139, 92, 246, 0.12) 0%, rgba(139, 92, 246, 0.08) 100%)',
                  border: currentPhase === 0 ? '2px dashed rgba(200, 200, 200, 0.3)' : 
                         currentPhase === 1 ? '1px solid rgba(139, 92, 246, 0.20)' : 'none',
                  borderRadius: currentPhase === 0 ? '4px' : currentPhase === 1 ? '8px' : '12px',
                  boxShadow: currentPhase === 2 ? '0 4px 12px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.1)' : 'none'
                }}
                animate={currentPhase === 2 ? { scale: [1, 1.02, 1] } : {}}
                transition={{ duration: 2, repeat: Infinity, delay: 1.5 }}
              >
                <div className={`text-xl font-bold ${currentPhase === 2 ? 'text-purple-400' : currentStyle.accent}`}>
                  {currentProjects.metrics.success}
                </div>
                <div className="text-xs opacity-70">
                  {currentPhase === 0 ? '[Works?]' : 'Deploy Success'}
                </div>
              </motion.div>
            </div>

            {/* Evolving Projects List */}
            <motion.div
              className={`p-3 mb-4 ${currentStyle.text}`}
              style={{
                background: currentPhase === 0 ? 'rgba(200, 200, 200, 0.05)' : 
                           currentPhase === 1 ? 'rgba(116, 166, 190, 0.08)' :
                           'linear-gradient(135deg, rgba(116, 166, 190, 0.08) 0%, rgba(42, 42, 42, 0.9) 100%)',
                border: currentPhase === 0 ? '2px dashed rgba(200, 200, 200, 0.3)' : 
                       currentPhase === 1 ? '1px solid rgba(116, 166, 190, 0.20)' : 'none',
                borderRadius: currentPhase === 0 ? '4px' : currentPhase === 1 ? '8px' : '12px',
                boxShadow: currentPhase === 2 ? '0 4px 12px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.1)' : 'none'
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <h3 className={`text-sm font-semibold mb-3 ${currentStyle.text}`}>
                {currentPhase === 0 ? '[Active Stuff]' : currentPhase === 1 ? 'Active Projects' : 'Project Portfolio'}
              </h3>
              <div className="space-y-2">
                {currentProjects.projects.map((project: Project, index: number) => (
                  <motion.div
                    key={`${currentPhase}-${index}`}
                    className="flex items-center justify-between p-2"
                    style={{
                      background: currentPhase === 0 ? 'rgba(200, 200, 200, 0.02)' : 
                                 currentPhase === 1 ? 'rgba(116, 166, 190, 0.05)' :
                                 'rgba(116, 166, 190, 0.08)',
                      border: currentPhase === 0 ? '1px dashed rgba(200, 200, 200, 0.2)' : 'none',
                      borderRadius: currentPhase === 0 ? '2px' : '6px'
                    }}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.7 + (index * 0.1) }}
                  >
                    <div className="flex-1">
                      <div className={`text-xs font-medium ${currentStyle.text}`}>
                        {project.name}
                      </div>
                      <div className="text-xs opacity-60">
                        {project.status}
                        {currentPhase === 2 && project.team && ` • ${project.team}`}
                        {currentPhase === 2 && project.deadline && ` • Due: ${project.deadline}`}
                      </div>
                    </div>
                    <div className={`text-xs ${currentStyle.accent}`}>
                      {typeof project.progress === 'string' ? project.progress : `${project.progress}%`}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Evolving Team Section */}
            <motion.div
              className={`p-3 ${currentStyle.text}`}
              style={{
                background: currentPhase === 0 ? 'rgba(200, 200, 200, 0.05)' : 
                           currentPhase === 1 ? 'rgba(251, 191, 36, 0.08)' :
                           'linear-gradient(135deg, rgba(251, 191, 36, 0.1) 0%, rgba(116, 166, 190, 0.08) 100%)',
                border: currentPhase === 0 ? '2px dashed rgba(200, 200, 200, 0.3)' : 
                       currentPhase === 1 ? '1px solid rgba(251, 191, 36, 0.20)' : 'none',
                borderRadius: currentPhase === 0 ? '4px' : currentPhase === 1 ? '8px' : '12px',
                boxShadow: currentPhase === 2 ? '0 4px 12px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.1)' : 'none'
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <h4 className={`text-xs font-medium mb-2 ${currentStyle.text}`}>
                {currentPhase === 0 ? '[Team People]' : currentPhase === 1 ? 'Team Status' : 'Team Dashboard'}
              </h4>
              <div className="space-y-1">
                {currentTeam.map((member: TeamMember, index: number) => (
                  <motion.div
                    key={`${currentPhase}-team-${index}`}
                    className="flex items-center space-x-2"
                    animate={{ opacity: [0.7, 1, 0.7] }}
                    transition={{ duration: 3, repeat: Infinity, delay: index * 0.5 }}
                  >
                    {currentPhase === 2 && member.avatar ? (
                      <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-xs text-white">
                        {member.avatar}
                      </div>
                    ) : (
                      <span className="text-sm">{currentPhase === 0 ? '?' : '👤'}</span>
                    )}
                    <div className="flex-1">
                      <div className="text-xs">{member.name}</div>
                      <div className="text-xs opacity-60">
                        {member.role || member.status}
                        {currentPhase === 2 && member.lastActive && ` • ${member.lastActive}`}
                      </div>
                    </div>
                    <div className={`w-1.5 h-1.5 rounded-full ${
                      member.status === 'active' ? 'bg-green-400 animate-pulse' : 'bg-gray-500'
                    }`}></div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

const TransformationProcessInteractive: React.FC<TransformationProcessInteractiveProps> = memo(({
  autoPlay = false,
  duration = 4000
}) => {
  const t = useTranslations('transformation.stages');
  const tChaos = useTranslations('transformation');
  const [currentStage, setCurrentStage] = useState(0);
  const [currentPhase, setCurrentPhase] = useState(0); // For Réalisation phases
  const [isPlaying, setIsPlaying] = useState(autoPlay);
  const [progress, setProgress] = useState(0);

  // Create dynamic stages using translations
  const translatedStages = useMemo(() => [
    {
      id: 'chaos',
      title: t('chaos.title'),
      description: t('chaos.description'),
      icon: null,
      color: 'text-accent-red',
      bgColor: 'from-accent-red/20 via-background-dark to-background-dark-alt',
      concepts: stages[0].concepts
    },
    {
      id: 'specification',
      title: t('specification.title'),
      description: t('specification.description'),
      icon: null,
      color: 'text-primary-blue',
      bgColor: 'from-primary-blue/20 via-background-dark to-background-dark-alt',
      concepts: stages[1].concepts
    },
    {
      id: 'completion',
      title: t('completion.title'),
      description: t('completion.description'),
      icon: null,
      color: 'text-accent-yellow',
      bgColor: 'from-accent-yellow/20 via-background-dark to-background-dark-alt',
      concepts: stages[2].concepts
    }
  ], [t]);

  // StrictMode-safe timer management
  const intervalRef = useRef<number | null>(null);
  const isRunningRef = useRef(false);
  const instanceIdRef = useRef(`TransformationFlow-${Math.random().toString(36).substr(2, 9)}`);
  const isTransitioningRef = useRef(false);
  
  // Component instance tracking
  useEffect(() => {
    console.log(`🆔 Component instance created: ${instanceIdRef.current}`);
    return () => {
      console.log(`🗑️ Component instance destroyed: ${instanceIdRef.current}`);
    };
  }, []);

  // Define the 5-state flow (memoized to prevent useEffect re-runs)
  const flowStates = useMemo(() => [
    { stage: 0, phase: 0, name: translatedStages[0]?.title || 'Dependence' },           // State 0: Dependence
    { stage: 1, phase: 0, name: translatedStages[1]?.title || 'Method' },              // State 1: Method  
    { stage: 2, phase: 0, name: `${translatedStages[2]?.title || 'Autonomy'} (Sketchy)` },  // State 2: Sketchy prototype
    { stage: 2, phase: 1, name: `${translatedStages[2]?.title || 'Autonomy'} (Structured)` }, // State 3: Structured design
    { stage: 2, phase: 2, name: `${translatedStages[2]?.title || 'Autonomy'} (Polished)` }    // State 4: Polished app
  ], [translatedStages]);

  const [currentFlowState, setCurrentFlowState] = useState(0);

  useEffect(() => {
    const currentInstanceId = instanceIdRef.current;
    
    // Clear any existing timer first (both local and global)
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
      console.log(`🧹 [${currentInstanceId}] Cleared local timer`);
    }
    
    // Clear any global timer from other instances
    if (globalTimerInstance.intervalId && globalTimerInstance.componentId !== currentInstanceId) {
      clearInterval(globalTimerInstance.intervalId);
      console.log(`🧹 [${currentInstanceId}] Cleared global timer from ${globalTimerInstance.componentId}`);
      globalTimerInstance.intervalId = null;
      globalTimerInstance.componentId = null;
      globalTimerInstance.isRunning = false;
    }
    
    if (isPlaying && !isRunningRef.current && !globalTimerInstance.isRunning) {
      isRunningRef.current = true;
      globalTimerInstance.isRunning = true;
      globalTimerInstance.componentId = currentInstanceId;
      
      console.log(`🚀 [${currentInstanceId}] Starting unified flow with 5 states:`, flowStates.map((s, i) => `${i}: ${s.name}`));
      
      const timerId = window.setInterval(() => {
        setProgress(prev => {
          // Variable timing: specification gets 1.5x more time
          const currentState = flowStates[currentFlowState];
          const stateMultiplier = currentState?.name === 'specification' ? 1.5 : 1.0;
          const adjustedDuration = duration * stateMultiplier;
          
          const increment = 100 / (adjustedDuration / 200); // 200ms intervals
          const newProgress = prev + increment;
          
          if (newProgress >= 100 && !isTransitioningRef.current) {
            // Flow state is complete, move to next state
            isTransitioningRef.current = true;
            console.log(`⏭️ [${instanceIdRef.current}] Flow state complete, transitioning...`);
            
            setCurrentFlowState(current => {
              const nextFlowState = (current + 1) % flowStates.length;
              const currentState = flowStates[current];
              const nextState = flowStates[nextFlowState];
              
              console.log(`🔄 [${instanceIdRef.current}] FLOW TRANSITION: ${current} (${currentState?.name}) → ${nextFlowState} (${nextState?.name})`);
              
              // Update stage and phase based on flow state
              setCurrentStage(nextState.stage);
              setCurrentPhase(nextState.phase);
              
              // Reset transition lock after React completes the state update
              setTimeout(() => {
                isTransitioningRef.current = false;
                console.log(`🔓 [${instanceIdRef.current}] Transition lock released`);
              }, 0);
              
              return nextFlowState;
            });
            return 0; // Reset progress for next state
          } else if (newProgress >= 100 && isTransitioningRef.current) {
            // Transition already in progress, skip duplicate
            console.log(`🚫 [${instanceIdRef.current}] Duplicate transition blocked`);
            return 0; // Still reset progress but don't transition
          }
          
          return newProgress;
        });
      }, 200);
      
      intervalRef.current = timerId;
      globalTimerInstance.intervalId = timerId;
      
    } else if (!isPlaying && isRunningRef.current) {
      // Stop timer when paused
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
        console.log(`⏸️ [${currentInstanceId}] Timer paused`);
      }
      if (globalTimerInstance.componentId === currentInstanceId) {
        globalTimerInstance.intervalId = null;
        globalTimerInstance.componentId = null;
        globalTimerInstance.isRunning = false;
      }
      isRunningRef.current = false;
      isTransitioningRef.current = false; // Reset transition lock
    }
    
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
        console.log(`🛑 [${currentInstanceId}] Unified flow stopped`);
      }
      if (globalTimerInstance.componentId === currentInstanceId) {
        if (globalTimerInstance.intervalId) {
          clearInterval(globalTimerInstance.intervalId);
        }
        globalTimerInstance.intervalId = null;
        globalTimerInstance.componentId = null;
        globalTimerInstance.isRunning = false;
      }
      isRunningRef.current = false;
      isTransitioningRef.current = false; // Reset transition lock
    };
  }, [isPlaying, duration, flowStates]);

  const handlePlay = () => setIsPlaying(!isPlaying);
  
  const handleReset = () => {
    const currentInstanceId = instanceIdRef.current;
    setIsPlaying(false);
    setCurrentStage(0);
    setCurrentPhase(0);
    setCurrentFlowState(0);
    setProgress(0);
    
    // Clear timer and reset refs
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    if (globalTimerInstance.componentId === currentInstanceId) {
      if (globalTimerInstance.intervalId) {
        clearInterval(globalTimerInstance.intervalId);
      }
      globalTimerInstance.intervalId = null;
      globalTimerInstance.componentId = null;
      globalTimerInstance.isRunning = false;
    }
    isRunningRef.current = false;
    isTransitioningRef.current = false; // Reset transition lock
    console.log(`🔄 [${currentInstanceId}] Flow reset complete`);
  };

  const renderStageVisualization = useCallback((stageIndex: number) => {
    const stage = translatedStages[stageIndex];
    
    if (!stage) {
      console.warn(`⚠️ No stage found for index ${stageIndex}`);
      return null;
    }
    
    switch (stage.id) {
      case 'chaos':
        return <ChaosVisualization concepts={stage.concepts} t={tChaos} />;
      case 'specification':
        return <SpecificationStructure concepts={stage.concepts} />;
      case 'completion':
        return <LivingApplication concepts={stage.concepts} phase={currentPhase} />;
      default:
        console.warn(`⚠️ Unknown stage id: ${stage.id}`);
        return null;
    }
  }, [currentPhase, translatedStages, tChaos]);

  return (
    <section className="relative py-20 bg-gradient-to-br from-background-dark via-background-dark-alt to-background-dark overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-72 h-72 bg-primary-blue/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent-yellow/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">


        {/* Visualisation principale - Format responsive et bien centré */}
        <div className="relative h-[500px] md:h-[600px] w-full max-w-4xl mx-auto mb-8 rounded-3xl overflow-hidden"
             style={{
               background: `
                 linear-gradient(135deg, 
                   rgba(42, 42, 42, 0.95) 0%, 
                   rgba(53, 53, 53, 0.9) 50%,
                   rgba(42, 42, 42, 0.95) 100%
                 )
               `,
               boxShadow: `
                 0 25px 80px rgba(0, 0, 0, 0.3),
                 0 8px 25px rgba(116, 166, 190, 0.1),
                 inset 0 1px 0 rgba(255, 255, 255, 0.05)
               `,
               border: 'none'
             }}>
          
          {/* Transition Arrow */}
          <AnimatePresence>
            <motion.div
              key={`arrow-${currentStage}`}
              className="absolute top-1/2 right-8 z-20 pointer-events-none"
              initial={{ opacity: 0, x: -20, scale: 0.5 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 20, scale: 1.2 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <div className="bg-gradient-to-r from-primary-blue to-accent-yellow p-3 rounded-full shadow-lg border-2 border-white/20">
                <ArrowRight className="w-8 h-8 text-white" />
              </div>
            </motion.div>
          </AnimatePresence>

          <AnimatePresence mode="wait">
            <motion.div
              key={currentStage}
              className="absolute inset-0"
              initial={{ x: "100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: "-100%", opacity: 0 }}
              transition={{ 
                duration: 1.2, 
                ease: [0.25, 0.46, 0.45, 0.94],
                x: { type: "spring", stiffness: 100, damping: 20 }
              }}
            >
              {renderStageVisualization(currentStage)}
            </motion.div>
          </AnimatePresence>
          
          {/* Info de l'étape moderne */}
          <div className="absolute bottom-0 left-0 right-0 p-8"
               style={{
                 background: `
                   linear-gradient(to top, 
                     rgba(42, 42, 42, 0.95) 0%, 
                     rgba(42, 42, 42, 0.8) 50%,
                     transparent 100%
                   )
                 `
               }}>
            <motion.h3 
              className={`text-2xl font-bold ${translatedStages[currentStage].color} mb-3`}
              key={`title-${currentStage}`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {translatedStages[currentStage].title}
            </motion.h3>
            <motion.p 
              className="text-text-secondary text-base leading-relaxed"
              key={`desc-${currentStage}`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              {translatedStages[currentStage].description}
            </motion.p>
          </div>
        </div>


      </div>
    </section>
  );
});

TransformationProcessInteractive.displayName = 'TransformationProcessInteractive';

export default TransformationProcessInteractive;