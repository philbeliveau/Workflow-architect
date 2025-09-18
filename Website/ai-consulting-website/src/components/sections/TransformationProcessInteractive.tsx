'use client';

import React, { useState, useEffect, memo } from 'react';
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
  Activity
} from 'lucide-react';

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

const stages: TransformationStage[] = [
  {
    id: 'chaos',
    title: 'Étape 1',
    description: 'Voir étape 1',
    icon: null,
    color: 'text-accent-red',
    bgColor: 'from-accent-red/20 via-background-dark to-background-dark-alt',
    concepts: [
      'prioritisation', 'user stories', 'customer persona', 'target audience', 'market fit',
      'coordination bottleneck', 'daily standups', 'sprint planning', 'retrospectives',
      'Product Manager', 'Scrum Master', 'Product Owner', 'UX/UI Designer',
      'technical debt', 'scalabilité', 'architecture', 'performance', 'sécurité',
      'KPIs', 'ROI', 'time to market', 'user engagement', 'conversion rate'
    ]
  },
  {
    id: 'specification',
    title: 'Étape 2',
    description: 'Voir étape 2',
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
    title: 'Étape 3',
    description: 'Voir étape 3',
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
const ChaosVisualization = ({ concepts }: { concepts: string[] }) => {
  const [chaosElements] = useState(() => 
    concepts.map((concept, i) => ({
      id: i,
      text: concept,
      x: 5 + (i % 6) * 15, // More controlled spacing horizontally
      y: 10 + Math.floor(i / 6) * 15, // Vertical spacing to prevent overlap
      opacity: 0.4 + Math.random() * 0.5,
      size: 0.6 + Math.random() * 0.3, // Smaller size range to prevent overlap
      speed: 0.5 + Math.random() * 1.5
    }))
  );

  // Rôles en suspension avec couleurs cohérentes du design system
  const roles = [
    { name: 'Product Manager', color: 'text-accent-red', bg: 'bg-accent-red/20' },
    { name: 'Scrum Master', color: 'text-accent-yellow', bg: 'bg-accent-yellow/20' },
    { name: 'Product Owner', color: 'text-primary-blue', bg: 'bg-primary-blue/20' },
    { name: 'UX/UI Designer', color: 'text-accent-purple', bg: 'bg-accent-purple/20' },
    { name: 'Développeurs', color: 'text-success-green', bg: 'bg-success-green/20' },
    { name: 'Architecte', color: 'text-hover-interactive', bg: 'bg-hover-interactive/20' }
  ];

  return (
    <div className="relative h-full w-full overflow-hidden bg-gradient-to-br from-gray-900/90 via-slate-800/80 to-gray-900/90 rounded-2xl">
      {/* Océan de chaos - fond sombre et immersif */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-gray-900 to-black opacity-95"></div>
      
      {/* Tempête de concepts flottants */}
      <div className="absolute inset-0">
        {chaosElements.map((element) => (
          <motion.div
            key={element.id}
            className="absolute text-accent-red/60 font-medium pointer-events-none"
            style={{
              left: `${element.x}%`,
              top: `${element.y}%`,
              fontSize: `${element.size}rem`,
              opacity: element.opacity
            }}
            animate={{
              x: [0, Math.sin(element.id) * 10, 0], // Reduced movement
              y: [0, Math.cos(element.id) * 8, 0], // Reduced movement
              opacity: [element.opacity * 0.7, element.opacity, element.opacity * 0.5],
              rotate: [0, Math.sin(element.id) * 5, 0] // Reduced rotation
            }}
            transition={{
              duration: 8 + element.speed,
              repeat: Infinity,
              ease: "easeInOut",
              delay: element.id * 0.5
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
          <div className="w-32 h-32 bg-gradient-to-br from-accent-red/30 via-red-500/20 to-accent-red/10 rounded-full flex items-center justify-center border-2 border-accent-red/40 shadow-2xl">
            <Brain className="w-16 h-16 text-accent-red" />
          </div>
          
          {/* Électricité chaotique autour du cerveau */}
          {Array.from({ length: 8 }, (_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-8 bg-gradient-to-t from-accent-red/80 to-transparent"
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

        {/* Rôles en suspension autour */}
        <div className="relative w-full h-48">
          {roles.map((role, index) => (
            <motion.div
              key={role.name}
              className={`absolute ${role.bg} ${role.color} px-2 py-1 rounded-lg border border-current/30 font-medium text-xs whitespace-nowrap`}
              style={{
                left: `${5 + (index % 2) * 45}%`,
                top: `${10 + Math.floor(index / 2) * 25}%`
              }}
              animate={{
                y: [0, -10, 0],
                x: [0, Math.sin(index) * 5, 0],
                rotate: [0, Math.sin(index * 2) * 3, 0]
              }}
              transition={{
                duration: 3 + index * 0.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: index * 0.3
              }}
            >
              {role.name}
            </motion.div>
          ))}
        </div>

        {/* Message central */}
        <motion.div
          className="text-center mt-8 max-w-md"
          animate={{ opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          <p className="text-accent-red/80 text-lg font-semibold mb-2">
            L'Intelligence Collective Dispersée
          </p>
          <p className="text-accent-red/60 text-sm">
            Toute l'expertise nécessaire existe mais sans structure
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

      <div className="absolute inset-0 flex flex-col items-center justify-center p-6">
        {/* Header avec message central */}
        <motion.div
          className="text-center mb-8"
          animate={{ opacity: [0.8, 1, 0.8] }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          <div className="flex items-center justify-center space-x-2 mb-3">
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            >
              <FileText className="w-8 h-8 text-primary-blue" />
            </motion.div>
            <h3 className="text-xl font-semibold text-primary-blue">Living Documents</h3>
          </div>
          <p className="text-primary-blue/70 text-sm max-w-md">
            L'information se structure naturellement, sans effort, sans overhead
          </p>
        </motion.div>

        {/* Documents qui s'écrivent automatiquement */}
        <div className="grid grid-cols-1 gap-4 w-full max-w-lg mx-auto">
          {documents.map((doc, docIndex) => (
            <motion.div
              key={doc.title}
              className={`relative ${doc.bgColor} ${doc.borderColor} border-2 rounded-xl p-6 backdrop-blur-sm`}
              animate={{ 
                scale: activeDocument === docIndex ? 1.05 : 1,
                opacity: activeDocument === docIndex ? 1 : 0.8
              }}
              transition={{ duration: 0.5 }}
            >
              {/* En-tête du document */}
              <div className="flex items-center space-x-3 mb-4">
                <span className="text-2xl">{doc.icon}</span>
                <div>
                  <h4 className={`font-semibold ${doc.color}`}>{doc.title}</h4>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-success-green rounded-full animate-pulse"></div>
                    <span className="text-xs text-text-secondary">Auto-generated</span>
                  </div>
                </div>
              </div>

              {/* Contenu qui s'écrit */}
              <div className="space-y-3">
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
                      className={`text-sm ${doc.color} font-mono`}
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

        {/* Message de simplicité */}
        <motion.div
          className="mt-8 text-center"
          animate={{ opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 4, repeat: Infinity }}
        >
          <p className="text-primary-blue/80 text-lg font-medium mb-2">
            Structure Sans Effort
          </p>
          <p className="text-primary-blue/60 text-sm max-w-md">
            Pas de surcharge, pas de complexité - juste l'information qui trouve naturellement sa place
          </p>
        </motion.div>
      </div>
    </div>
  );
};

// Composant pour l'application incarnée - De l'Intention à la Réalité Numérique
const LivingApplication = ({ concepts }: { concepts: string[] }) => {
  const [activeProject, setActiveProject] = useState(0);
  const [metrics, setMetrics] = useState({
    activeProjects: 12,
    completedToday: 8,
    teamVelocity: 87,
    deploymentSuccess: 99.2
  });
  
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveProject(prev => (prev + 1) % 4);
      setMetrics(prev => ({
        activeProjects: prev.activeProjects + Math.floor(Math.random() * 3) - 1,
        completedToday: prev.completedToday + Math.floor(Math.random() * 2),
        teamVelocity: Math.max(80, Math.min(100, prev.teamVelocity + Math.random() * 4 - 2)),
        deploymentSuccess: Math.max(95.0, Math.min(100, prev.deploymentSuccess + Math.random() * 0.2 - 0.1))
      }));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const projects = [
    { name: 'User Auth System', status: 'In Progress', progress: 75, color: 'primary-blue' },
    { name: 'Payment Gateway', status: 'Testing', progress: 90, color: 'accent-yellow' },
    { name: 'Analytics Dashboard', status: 'Deployed', progress: 100, color: 'success-green' },
    { name: 'Mobile App', status: 'Planning', progress: 25, color: 'accent-purple' }
  ];

  const teamMembers = [
    { name: 'Alex', avatar: '👨‍💻', status: 'coding', online: true },
    { name: 'Sarah', avatar: '👩‍🎨', status: 'designing', online: true },
    { name: 'Mike', avatar: '👨‍💼', status: 'reviewing', online: false },
    { name: 'Lisa', avatar: '👩‍💻', status: 'testing', online: true }
  ];

  return (
    <div className="relative h-full w-full overflow-hidden bg-gradient-to-br from-accent-yellow/10 via-background-dark to-background-dark-alt rounded-2xl">
      {/* Fond lumineux de réussite */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent-yellow/5 via-transparent to-success-green/5"></div>
      
      {/* Browser Frame - Realistic proportions */}
      <div className="absolute inset-4 flex flex-col">
        <motion.div
          className="w-full h-full bg-background-dark-alt rounded-xl shadow-2xl border border-primary-blue/20 overflow-hidden"
          animate={{ 
            scale: [0.98, 1, 0.98],
            boxShadow: [
              "0 20px 60px rgba(116, 166, 190, 0.1)", 
              "0 25px 80px rgba(116, 166, 190, 0.2)", 
              "0 20px 60px rgba(116, 166, 190, 0.1)"
            ]
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          {/* Browser Chrome */}
          <div className="bg-background-accent-grey/90 px-4 py-3 border-b border-primary-blue/20">
            {/* Window Controls & Tabs */}
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center space-x-3">
                {/* Window Controls */}
                <div className="flex space-x-2">
                  <div className="w-3 h-3 bg-accent-red rounded-full"></div>
                  <div className="w-3 h-3 bg-accent-yellow rounded-full"></div>
                  <div className="w-3 h-3 bg-success-green rounded-full"></div>
                </div>
                
                {/* Browser Tabs */}
                <div className="flex space-x-1 ml-4">
                  <div className="bg-background-dark px-4 py-2 rounded-t-lg border-t border-l border-r border-primary-blue/30">
                    <span className="text-xs text-text-primary font-medium">Newcode Dashboard</span>
                  </div>
                  <div className="bg-background-accent-grey px-3 py-2 rounded-t-lg">
                    <span className="text-xs text-text-secondary">Analytics</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Address Bar */}
            <div className="bg-background-dark rounded-lg px-4 py-2 border border-primary-blue/30">
              <div className="flex items-center space-x-3">
                <span className="text-success-green text-xs">🔒</span>
                <span className="text-primary-blue text-sm font-mono">https://dashboard.newcode.dev</span>
                <div className="flex-1"></div>
                <span className="text-text-secondary text-sm">↻</span>
              </div>
            </div>
          </div>

          {/* App Content */}
          <div className="flex h-full bg-background-dark">
            {/* Sidebar */}
            <div className="w-48 bg-background-dark-alt border-r border-primary-blue/20 p-3">
              <div className="mb-6">
                <h3 className="text-primary-blue font-bold text-lg mb-4">Dashboard</h3>
                <nav className="space-y-2">
                  <div className="bg-primary-blue/20 text-primary-blue px-3 py-2 rounded-lg text-sm font-medium">
                    📊 Overview
                  </div>
                  <div className="text-text-secondary px-3 py-2 text-sm hover:text-text-primary">
                    📋 Projects
                  </div>
                  <div className="text-text-secondary px-3 py-2 text-sm hover:text-text-primary">
                    👥 Team
                  </div>
                  <div className="text-text-secondary px-3 py-2 text-sm hover:text-text-primary">
                    📈 Analytics
                  </div>
                </nav>
              </div>

              {/* Team Status */}
              <div className="bg-background-accent-grey/50 rounded-lg p-3">
                <h4 className="text-text-primary font-medium text-sm mb-3">Team Status</h4>
                <div className="space-y-2">
                  {teamMembers.map((member, index) => (
                    <motion.div
                      key={member.name}
                      className="flex items-center space-x-2"
                      animate={{ opacity: [0.7, 1, 0.7] }}
                      transition={{ duration: 3, repeat: Infinity, delay: index * 0.5 }}
                    >
                      <span className="text-lg">{member.avatar}</span>
                      <div className="flex-1">
                        <div className="text-xs text-text-primary">{member.name}</div>
                        <div className="text-xs text-text-secondary">{member.status}</div>
                      </div>
                      <div className={`w-2 h-2 rounded-full ${member.online ? 'bg-success-green animate-pulse' : 'bg-text-secondary/30'}`}></div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="flex-1 p-4 overflow-y-auto">
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-2xl font-bold text-text-primary">Project Dashboard</h2>
                  <p className="text-text-secondary">Track your team's progress in real-time</p>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-primary-blue rounded-full flex items-center justify-center">
                    <span className="text-white text-sm">👤</span>
                  </div>
                </div>
              </div>

              {/* Metrics Grid */}
              <div className="grid grid-cols-2 gap-3 mb-4">
                <motion.div
                  className="bg-background-accent-grey/80 rounded-xl p-4 border border-primary-blue/20"
                  animate={{ scale: [1, 1.02, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 0 }}
                >
                  <div className="text-2xl font-bold text-primary-blue">{metrics.activeProjects}</div>
                  <div className="text-sm text-text-secondary">Active Projects</div>
                </motion.div>
                
                <motion.div
                  className="bg-background-accent-grey/80 rounded-xl p-4 border border-success-green/20"
                  animate={{ scale: [1, 1.02, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                >
                  <div className="text-2xl font-bold text-success-green">{metrics.completedToday}</div>
                  <div className="text-sm text-text-secondary">Completed Today</div>
                </motion.div>
                
                <motion.div
                  className="bg-background-accent-grey/80 rounded-xl p-4 border border-accent-yellow/20"
                  animate={{ scale: [1, 1.02, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                >
                  <div className="text-2xl font-bold text-accent-yellow">{metrics.teamVelocity}%</div>
                  <div className="text-sm text-text-secondary">Team Velocity</div>
                </motion.div>
                
                <motion.div
                  className="bg-background-accent-grey/80 rounded-xl p-4 border border-accent-purple/20"
                  animate={{ scale: [1, 1.02, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 1.5 }}
                >
                  <div className="text-2xl font-bold text-accent-purple">{metrics.deploymentSuccess.toFixed(1)}%</div>
                  <div className="text-sm text-text-secondary">Deploy Success</div>
                </motion.div>
              </div>

              {/* Active Projects */}
              <div className="bg-background-accent-grey/50 rounded-xl p-4">
                <h3 className="text-lg font-semibold text-text-primary mb-4">Active Projects</h3>
                <div className="space-y-3">
                  {projects.map((project, index) => (
                    <motion.div
                      key={project.name}
                      className={`bg-background-dark rounded-lg p-4 border ${
                        index === activeProject 
                          ? 'border-primary-blue/50 shadow-lg shadow-primary-blue/20' 
                          : 'border-text-secondary/20'
                      }`}
                      animate={{ 
                        opacity: index === activeProject ? 1 : 0.7,
                        scale: index === activeProject ? 1.02 : 1
                      }}
                      transition={{ duration: 0.5 }}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-medium text-text-primary">{project.name}</h4>
                        <span className={`text-xs px-2 py-1 rounded-full bg-${project.color}/20 text-${project.color}`}>
                          {project.status}
                        </span>
                      </div>
                      <div className="w-full bg-background-accent-grey/30 rounded-full h-2">
                        <motion.div
                          className={`h-2 bg-${project.color} rounded-full`}
                          initial={{ width: '0%' }}
                          animate={{ width: `${project.progress}%` }}
                          transition={{ duration: 1, delay: index * 0.2 }}
                        />
                      </div>
                      <div className="text-xs text-text-secondary mt-1">{project.progress}% complete</div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Success indicator */}
      <motion.div
        className="absolute bottom-4 right-4 bg-success-green/20 border border-success-green/40 rounded-lg px-3 py-2 backdrop-blur-sm"
        animate={{ opacity: [0.8, 1, 0.8] }}
        transition={{ duration: 3, repeat: Infinity }}
      >
        <div className="flex items-center space-x-2">
          <div className="w-2 h-2 bg-success-green rounded-full animate-pulse"></div>
          <span className="text-success-green text-xs font-mono">LIVE APPLICATION</span>
        </div>
      </motion.div>
    </div>
  );
};

const TransformationProcessInteractive: React.FC<TransformationProcessInteractiveProps> = memo(({
  autoPlay = false,
  duration = 4000
}) => {
  const [currentStage, setCurrentStage] = useState(0);
  const [isPlaying, setIsPlaying] = useState(autoPlay);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let interval: number;
    
    if (isPlaying) {
      console.log('Starting auto-play with stages:', stages.map(s => s.title));
      interval = window.setInterval(() => {
        setProgress(prev => {
          const newProgress = prev + (100 / (duration / 100));
          
          if (newProgress >= 100) {
            // Stage is complete, move to next stage
            setCurrentStage(current => {
              const nextStage = (current + 1) % stages.length;
              console.log(`🔄 STAGE TRANSITION: ${current} (${stages[current]?.title}) → ${nextStage} (${stages[nextStage]?.title})`);
              return nextStage;
            });
            return 0; // Reset progress for next stage
          }
          
          return newProgress;
        });
      }, 100);
    }
    
    return () => clearInterval(interval);
  }, [isPlaying, duration]);

  const handlePlay = () => setIsPlaying(!isPlaying);
  
  const handleReset = () => {
    setIsPlaying(false);
    setCurrentStage(0);
    setProgress(0);
  };

  const renderStageVisualization = (stageIndex: number) => {
    const stage = stages[stageIndex];
    
    switch (stage.id) {
      case 'chaos':
        return <ChaosVisualization concepts={stage.concepts} />;
      case 'specification':
        return <SpecificationStructure concepts={stage.concepts} />;
      case 'completion':
        return <LivingApplication concepts={stage.concepts} />;
      default:
        return null;
    }
  };

  return (
    <section className="relative py-20 bg-gradient-to-br from-background-dark via-background-dark-alt to-background-dark overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-72 h-72 bg-primary-blue/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent-yellow/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">

        {/* Timeline Horizontale - Étapes en ligne */}
        <div className="flex justify-center mb-12">
          <div className="flex items-center space-x-8">
            {stages.map((stage, index) => (
              <React.Fragment key={stage.id}>
                {/* Étape */}
                <div className="relative flex flex-col items-center">
                  <motion.div
                    className={`relative z-10 w-16 h-16 rounded-full border-4 flex items-center justify-center transition-all duration-500 ${
                      index <= currentStage 
                        ? `${stage.color} border-current bg-current/20 shadow-lg` 
                        : 'text-text-secondary border-text-secondary/30 bg-background-dark'
                    }`}
                    animate={{
                      scale: index === currentStage ? 1.2 : 1,
                      boxShadow: index === currentStage 
                        ? "0 0 30px rgba(59, 130, 246, 0.3)" 
                        : "0 0 0px rgba(59, 130, 246, 0)"
                    }}
                    transition={{ duration: 0.5 }}
                  >
                    {stage.icon}
                  </motion.div>
                  
                  {/* Numéro d'étape */}
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-br from-accent-red to-primary-blue rounded-full flex items-center justify-center text-white font-bold text-xs shadow-lg z-20">
                    {index + 1}
                  </div>
                  
                  {/* Titre sous l'icône */}
                  <div className="mt-4 text-center max-w-xs">
                    <h4 className={`font-bold text-sm mb-2 ${stage.color}`}>
                      {stage.title}
                    </h4>
                    <p className="text-xs text-text-secondary leading-relaxed">
                      {stage.description}
                    </p>
                    {/* Manual navigation button for testing */}
                    <button
                      onClick={() => setCurrentStage(index)}
                      className="mt-2 px-2 py-1 text-xs bg-primary-blue/20 text-primary-blue rounded hover:bg-primary-blue/30 transition-colors"
                    >
                      Voir étape {index + 1}
                    </button>
                  </div>
                </div>

                {/* Flèche entre les étapes */}
                {index < stages.length - 1 && (
                  <motion.div
                    className="flex items-center text-accent-red/60"
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <div className="w-8 h-0.5 bg-gradient-to-r from-current to-transparent"></div>
                    <div className="w-0 h-0 border-l-4 border-l-current border-t-2 border-t-transparent border-b-2 border-b-transparent"></div>
                  </motion.div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Visualisation principale - Format vertical immersif et allongé */}
        <div className="relative h-[800px] w-[600px] mx-auto mb-8 bg-gradient-to-b from-slate-900/90 via-slate-800/80 to-slate-900/90 backdrop-blur-sm rounded-3xl border border-primary-blue/30 shadow-2xl overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentStage}
              className="absolute inset-0"
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -30, scale: 0.95 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              {renderStageVisualization(currentStage)}
            </motion.div>
          </AnimatePresence>
          
          {/* Info de l'étape moderne */}
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-background-dark/95 via-background-dark/90 to-transparent backdrop-blur-md p-8">
            <motion.h3 
              className={`text-2xl font-bold ${stages[currentStage].color} mb-3`}
              key={`title-${currentStage}`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {stages[currentStage].title}
            </motion.h3>
            <motion.p 
              className="text-text-secondary text-base leading-relaxed"
              key={`desc-${currentStage}`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              {stages[currentStage].description}
            </motion.p>
          </div>
        </div>


      </div>
    </section>
  );
});

TransformationProcessInteractive.displayName = 'TransformationProcessInteractive';

export default TransformationProcessInteractive;