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
    title: 'Le Chaos Conceptuel',
    description: 'L\'Univers des Intentions Non-Structurées - Intelligence collective dispersée',
    icon: <Brain className="w-12 h-12" />,
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
    title: 'L\'Architecture Documentaire',
    description: 'La Cristallisation de l\'Intelligence - Spécifications atomiques et exécutables',
    icon: <Network className="w-12 h-12" />,
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
    title: 'L\'Application Incarnée',
    description: 'De l\'Intention à la Réalité Numérique - Système autonome et vivant',
    icon: <Sparkles className="w-12 h-12" />,
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
      x: Math.random() * 100,
      y: Math.random() * 100,
      opacity: 0.3 + Math.random() * 0.7,
      size: 0.7 + Math.random() * 0.6,
      speed: 0.5 + Math.random() * 1.5
    }))
  );

  // Rôles en suspension avec couleurs distinctes
  const roles = [
    { name: 'Product Manager', color: 'text-red-400', bg: 'bg-red-400/20' },
    { name: 'Scrum Master', color: 'text-orange-400', bg: 'bg-orange-400/20' },
    { name: 'Product Owner', color: 'text-blue-400', bg: 'bg-blue-400/20' },
    { name: 'UX/UI Designer', color: 'text-pink-400', bg: 'bg-pink-400/20' },
    { name: 'Développeurs', color: 'text-green-400', bg: 'bg-green-400/20' },
    { name: 'Architecte', color: 'text-purple-400', bg: 'bg-purple-400/20' }
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
              x: [0, Math.sin(element.id) * 30, 0],
              y: [0, Math.cos(element.id) * 20, 0],
              opacity: [element.opacity * 0.5, element.opacity, element.opacity * 0.3],
              rotate: [0, Math.sin(element.id) * 10, 0]
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
        <div className="relative w-96 h-32">
          {roles.map((role, index) => (
            <motion.div
              key={role.name}
              className={`absolute ${role.bg} ${role.color} px-3 py-2 rounded-lg border border-current/30 font-medium text-sm whitespace-nowrap`}
              style={{
                left: `${15 + (index % 3) * 35}%`,
                top: `${index < 3 ? '20%' : '70%'}%`
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

// Composant pour les spécifications - La Cristallisation de l'Intelligence
const SpecificationStructure = ({ concepts }: { concepts: string[] }) => {
  const [connectionLines, setConnectionLines] = useState<Array<{id: number, from: {x: number, y: number}, to: {x: number, y: number}}>>([]);
  
  useEffect(() => {
    // Générer des lignes de connexion dynamiques
    const lines = Array.from({ length: 6 }, (_, i) => ({
      id: i,
      from: { x: 50, y: 50 },
      to: { 
        x: 50 + Math.cos(i * Math.PI / 3) * 30, 
        y: 50 + Math.sin(i * Math.PI / 3) * 30 
      }
    }));
    setConnectionLines(lines);
  }, []);

  return (
    <div className="relative h-full w-full overflow-hidden bg-gradient-to-br from-blue-900/40 via-indigo-800/30 to-blue-900/40 rounded-2xl">
      {/* Fond cristallin */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-blue/20 via-blue-800/10 to-indigo-900/20"></div>
      
      {/* Réseau neural de documentation qui se forme */}
      <svg className="absolute inset-0 w-full h-full">
        <defs>
          <linearGradient id="connectionGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgb(59, 130, 246)" stopOpacity="0.6" />
            <stop offset="100%" stopColor="rgb(99, 102, 241)" stopOpacity="0.2" />
          </linearGradient>
        </defs>
        
        {connectionLines.map((line) => (
          <motion.line
            key={line.id}
            x1={`${line.from.x}%`}
            y1={`${line.from.y}%`}
            x2={`${line.to.x}%`}
            y2={`${line.to.y}%`}
            stroke="url(#connectionGradient)"
            strokeWidth="2"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ 
              pathLength: [0, 1, 0.8], 
              opacity: [0, 0.8, 0.4] 
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: line.id * 0.5,
              ease: "easeInOut"
            }}
          />
        ))}
      </svg>

      {/* Centre neural de cristallisation */}
      <div className="absolute inset-0 flex flex-col items-center justify-center p-8">
        <motion.div
          className="relative mb-8"
          animate={{ 
            rotateY: [0, 360],
            scale: [1, 1.05, 1]
          }}
          transition={{ 
            rotateY: { duration: 8, repeat: Infinity, ease: "linear" },
            scale: { duration: 3, repeat: Infinity, ease: "easeInOut" }
          }}
        >
          <div className="w-32 h-32 bg-gradient-to-br from-primary-blue/30 via-blue-500/20 to-indigo-500/10 rounded-2xl flex items-center justify-center border-2 border-primary-blue/40 shadow-2xl backdrop-blur-sm">
            <Network className="w-16 h-16 text-primary-blue" />
          </div>
          
          {/* Cristaux qui se forment autour */}
          {Array.from({ length: 6 }, (_, i) => (
            <motion.div
              key={i}
              className="absolute w-4 h-4 bg-primary-blue/60 transform rotate-45"
              style={{
                top: '50%',
                left: '50%',
                marginTop: '-8px',
                marginLeft: '-8px',
                transform: `rotate(45deg) translate(${40 + i * 10}px, 0) rotate(${i * 60}deg)`
              }}
              animate={{
                scale: [0, 1, 0.8],
                opacity: [0, 1, 0.6],
                rotate: [0, 180, 360]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                delay: i * 0.3,
                ease: "easeInOut"
              }}
            />
          ))}
        </motion.div>

        {/* Clusters sémantiques qui émergent */}
        <div className="grid grid-cols-2 gap-4 w-full max-w-lg">
          {concepts.slice(0, 8).map((concept, index) => (
            <motion.div
              key={concept}
              className="relative group"
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ 
                opacity: 1, 
                scale: 1, 
                y: 0,
                boxShadow: [
                  "0 0 0px rgba(59, 130, 246, 0)",
                  "0 0 20px rgba(59, 130, 246, 0.3)",
                  "0 0 0px rgba(59, 130, 246, 0)"
                ]
              }}
              transition={{
                delay: index * 0.2,
                duration: 0.6,
                boxShadow: {
                  duration: 3,
                  repeat: Infinity,
                  delay: index * 0.5
                }
              }}
            >
              <div className="bg-primary-blue/15 border border-primary-blue/30 rounded-xl p-4 backdrop-blur-sm">
                <motion.div
                  className="w-3 h-3 bg-primary-blue rounded-full mb-2 mx-auto"
                  animate={{ 
                    scale: [1, 1.3, 1],
                    opacity: [0.6, 1, 0.6]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: index * 0.2
                  }}
                />
                <span className="text-xs text-primary-blue font-medium text-center block leading-tight">
                  {concept}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Terminal de clarté */}
        <motion.div
          className="mt-8 bg-slate-900/80 border border-primary-blue/40 rounded-lg p-4 max-w-md backdrop-blur-sm"
          animate={{ opacity: [0.7, 1, 0.7] }}
          transition={{ duration: 4, repeat: Infinity }}
        >
          <div className="flex items-center space-x-2 mb-2">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-primary-blue text-sm font-mono">SPÉCIFICATIONS ATOMIQUES</span>
          </div>
          <p className="text-primary-blue/80 text-xs font-mono leading-relaxed">
            Transformation de l'intelligence collective en instructions exécutables...
          </p>
        </motion.div>
      </div>
    </div>
  );
};

// Composant pour l'application incarnée - De l'Intention à la Réalité Numérique
const LivingApplication = ({ concepts }: { concepts: string[] }) => {
  const [dataFlow, setDataFlow] = useState(true);
  const [metrics, setMetrics] = useState({
    users: Math.floor(Math.random() * 1000) + 500,
    performance: Math.floor(Math.random() * 30) + 85,
    uptime: 99.7 + Math.random() * 0.3
  });
  
  useEffect(() => {
    const interval = setInterval(() => {
      setDataFlow(prev => !prev);
      setMetrics(prev => ({
        users: prev.users + Math.floor(Math.random() * 10) - 5,
        performance: Math.max(80, Math.min(100, prev.performance + Math.random() * 4 - 2)),
        uptime: Math.max(99.0, Math.min(100, prev.uptime + Math.random() * 0.1 - 0.05))
      }));
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  // Infrastructure components
  const infrastructure = [
    { name: 'Serveurs', icon: Database, position: { x: 20, y: 30 } },
    { name: 'CDN', icon: Globe, position: { x: 80, y: 30 } },
    { name: 'Monitoring', icon: Activity, position: { x: 20, y: 70 } },
    { name: 'Analytics', icon: Eye, position: { x: 80, y: 70 } }
  ];

  return (
    <div className="relative h-full w-full overflow-hidden bg-gradient-to-br from-yellow-900/40 via-amber-800/30 to-yellow-900/40 rounded-2xl">
      {/* Fond lumineux de réussite */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent-yellow/20 via-orange-500/10 to-amber-600/20"></div>
      
      {/* Flux de données en temps réel */}
      <svg className="absolute inset-0 w-full h-full">
        <defs>
          <linearGradient id="dataFlow" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgb(251, 191, 36)" stopOpacity="0.8" />
            <stop offset="50%" stopColor="rgb(245, 158, 11)" stopOpacity="0.4" />
            <stop offset="100%" stopColor="rgb(217, 119, 6)" stopOpacity="0.1" />
          </linearGradient>
        </defs>
        
        {/* Lignes de flux de données */}
        {Array.from({ length: 8 }, (_, i) => (
          <motion.circle
            key={i}
            r="3"
            fill="url(#dataFlow)"
            initial={{ 
              cx: "10%", 
              cy: `${20 + i * 10}%`,
              opacity: 0
            }}
            animate={{
              cx: ["10%", "50%", "90%"],
              cy: [`${20 + i * 10}%`, `${50 + Math.sin(i) * 20}%`, `${20 + i * 10}%`],
              opacity: [0, 1, 0]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              delay: i * 0.5,
              ease: "easeInOut"
            }}
          />
        ))}
      </svg>

      {/* Application centrale brillante */}
      <div className="absolute inset-0 flex flex-col items-center justify-center p-8">
        <motion.div
          className="relative mb-8"
          animate={{ 
            scale: dataFlow ? 1.08 : 1,
            rotateY: [0, 5, -5, 0],
            boxShadow: dataFlow 
              ? "0 0 60px rgba(251, 191, 36, 0.4), 0 0 120px rgba(251, 191, 36, 0.2)" 
              : "0 0 30px rgba(251, 191, 36, 0.2)"
          }}
          transition={{ duration: 2, ease: "easeInOut" }}
        >
          <div className="w-40 h-40 bg-gradient-to-br from-accent-yellow/30 via-orange-500/20 to-amber-500/10 rounded-3xl flex items-center justify-center border-2 border-accent-yellow/40 relative overflow-hidden backdrop-blur-sm">
            {/* Interface utilisateur simulée */}
            <div className="absolute inset-4 bg-slate-900/80 rounded-2xl border border-accent-yellow/30">
              <div className="p-3">
                <div className="flex items-center space-x-2 mb-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse delay-100"></div>
                  <div className="w-2 h-2 bg-red-400 rounded-full animate-pulse delay-200"></div>
                </div>
                <div className="space-y-2">
                  <div className="h-1 bg-accent-yellow/40 rounded animate-pulse"></div>
                  <div className="h-1 bg-accent-yellow/30 rounded w-3/4 animate-pulse delay-100"></div>
                  <div className="h-1 bg-accent-yellow/20 rounded w-1/2 animate-pulse delay-200"></div>
                </div>
              </div>
            </div>
            
            <Sparkles className="w-20 h-20 text-accent-yellow absolute z-10" />
            
            {/* Étoiles de succès qui orbitent */}
            {Array.from({ length: 6 }, (_, i) => (
              <motion.div
                key={i}
                className="absolute w-3 h-3 bg-accent-yellow/80 rounded-full"
                style={{
                  top: '50%',
                  left: '50%',
                  marginTop: '-6px',
                  marginLeft: '-6px'
                }}
                animate={{
                  rotate: 360,
                  x: [0, 70 * Math.cos((i * 60) * Math.PI / 180)],
                  y: [0, 70 * Math.sin((i * 60) * Math.PI / 180)],
                  scale: [1, 1.2, 1]
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "linear",
                  delay: i * 0.3
                }}
              />
            ))}
          </div>
        </motion.div>

        {/* Infrastructure visible en périphérie */}
        <div className="relative w-full max-w-md h-32">
          {infrastructure.map((infra, index) => {
            const Icon = infra.icon;
            return (
              <motion.div
                key={infra.name}
                className="absolute bg-accent-yellow/15 border border-accent-yellow/30 rounded-xl p-3 backdrop-blur-sm"
                style={{
                  left: `${infra.position.x}%`,
                  top: `${infra.position.y}%`,
                  transform: 'translate(-50%, -50%)'
                }}
                animate={{
                  scale: [1, 1.05, 1],
                  opacity: [0.8, 1, 0.8]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: index * 0.5
                }}
              >
                <Icon size={16} className="text-accent-yellow mb-1 mx-auto" />
                <span className="text-xs text-accent-yellow font-medium text-center block">
                  {infra.name}
                </span>
              </motion.div>
            );
          })}
        </div>

        {/* Métriques temps réel */}
        <motion.div
          className="mt-6 bg-slate-900/80 border border-accent-yellow/40 rounded-lg p-4 backdrop-blur-sm"
          animate={{ opacity: [0.8, 1, 0.8] }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          <div className="grid grid-cols-3 gap-4 text-center">
            <div>
              <div className="text-accent-yellow font-mono text-lg">{metrics.users}</div>
              <div className="text-accent-yellow/60 text-xs">Users</div>
            </div>
            <div>
              <div className="text-accent-yellow font-mono text-lg">{metrics.performance.toFixed(1)}ms</div>
              <div className="text-accent-yellow/60 text-xs">Response</div>
            </div>
            <div>
              <div className="text-accent-yellow font-mono text-lg">{metrics.uptime.toFixed(2)}%</div>
              <div className="text-accent-yellow/60 text-xs">Uptime</div>
            </div>
          </div>
          <div className="flex items-center justify-center mt-3 space-x-2">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-accent-yellow/80 text-xs font-mono">SYSTÈME AUTONOME ACTIF</span>
          </div>
        </motion.div>
      </div>
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
      interval = window.setInterval(() => {
        setProgress(prev => {
          if (prev >= 100) {
            setCurrentStage(current => (current + 1) % stages.length);
            return 0;
          }
          return prev + (100 / (duration / 100));
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
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-h1 font-bold mb-6 bg-gradient-to-r from-text-light via-primary-blue to-accent-red bg-clip-text text-transparent">
            Transformation Interactive
          </h2>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto leading-relaxed">
            Observez l'évolution du chaos vers l'application fonctionnelle
          </p>
        </motion.div>

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
        <div className="relative h-[800px] mb-8 bg-gradient-to-b from-slate-900/90 via-slate-800/80 to-slate-900/90 backdrop-blur-sm rounded-3xl border border-primary-blue/30 shadow-2xl overflow-hidden">
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

        {/* Progress Bar */}
        <div className="mb-8 space-y-2">
          <div className="flex justify-between text-sm text-text-secondary">
            <span>Étape {currentStage + 1} de {stages.length}</span>
            <span>{Math.round(progress)}%</span>
          </div>
          <div className="w-full h-2 bg-background-accent-grey/30 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-accent-red to-primary-blue"
              style={{ width: `${progress}%` }}
              transition={{ duration: 0.1 }}
            />
          </div>
        </div>

        {/* Controls */}
        <div className="flex justify-center space-x-4 mb-12">
          <button
            onClick={handlePlay}
            className="flex items-center space-x-2 px-6 py-3 bg-primary-blue hover:bg-primary-blue/90 text-white rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
            <span className="font-medium">{isPlaying ? 'Pause' : 'Jouer'}</span>
          </button>
          
          <button
            onClick={handleReset}
            className="flex items-center space-x-2 px-6 py-3 bg-background-accent-grey hover:bg-background-light-grey text-text-light rounded-lg transition-all duration-200 border border-primary-blue/30 shadow-lg hover:shadow-xl"
          >
            <RotateCcw className="w-5 h-5" />
            <span className="font-medium">Recommencer</span>
          </button>
        </div>

        {/* Description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="bg-gradient-to-br from-background-accent-grey/90 to-background-light-grey/90 backdrop-blur-sm rounded-2xl p-8 border border-primary-blue/40 shadow-xl"
        >
          <div className="text-center">
            <div className="flex items-center justify-center mb-6">
              <Users className="w-6 h-6 text-primary-blue mr-3" />
              <span className="text-lg font-semibold text-text-light">
                Notre Méthodologie
              </span>
            </div>
            <p className="text-text-secondary leading-relaxed text-lg">
              Les équipes <strong className="text-primary-blue">apprennent à communiquer avec des 
              agents IA</strong> pour passer directement de leurs idées à des prototypes fonctionnels sans coder. 
              Notre formation enseigne le <strong className="text-accent-yellow">"développement par spécification"</strong> où 
              les participants maîtrisent l'art de donner des instructions précises aux IA pour créer des applications, 
              <strong className="text-accent-red"> rendant le développement logiciel accessible à tous</strong>.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
});

TransformationProcessInteractive.displayName = 'TransformationProcessInteractive';

export default TransformationProcessInteractive;