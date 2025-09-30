/**
 * Neural Assembly Engine - Type Definitions
 * Foundation types for the agentic programming visualization system
 * Used throughout the Neural Assembly Engine component architecture
 */

// Core neural network types
export interface NeuralNode {
  id: string;
  x: number;
  y: number;
  type: 'core' | 'specialist' | 'helper';
  role: string;
  size: number;
  connections: string[];
}

export interface CodeParticle {
  id: string;
  text: string;
  x: number;
  y: number;
  size: number;
  opacity: number;
  rotation: number;
  velocity: { x: number; y: number };
}

export interface AnimationPhase {
  name: string;
  duration: number;
  startTime: number;
  endTime: number;
  active: boolean;
}

export type NodeState = 'chaos' | 'recognition' | 'learning' | 'active' | 'mastery';

export interface AnimationConfig {
  autoplay: boolean;
  loop: boolean;
  speed: number;
  quality: 'low' | 'medium' | 'high';
  reducedMotion: boolean;
}

export interface PerformanceMetrics {
  fps: number;
  memoryUsage: number;
  renderTime: number;
  totalNodes: number;
  totalParticles: number;
}

export interface ResponsiveBreakpoint {
  name: string;
  minWidth: number;
  nodeCount: number;
  particleCount: number;
  animationSpeed: number;
  effects: 'minimal' | 'standard' | 'full';
}

// Animation timeline types
export interface TimelineConfig {
  duration: number;
  autoplay: boolean;
  loop: boolean;
  easing: string;
  onComplete?: () => void;
  onUpdate?: (progress: number) => void;
  onPhaseChange?: (phase: AnimationPhase) => void;
}

export interface AnimationTarget {
  selector: string;
  properties: AnimeAnimParams;
  timing: {
    offset: number;
    delay?: number;
    stagger?: any;
  };
}

// Anime.js v3 compatibility types
export interface AnimeAnimParams {
  [key: string]: any;
  duration?: number;
  delay?: number;
  easing?: string;
  direction?: 'normal' | 'reverse' | 'alternate';
  loop?: boolean | number;
  autoplay?: boolean;
  complete?: () => void;
  update?: (anim: any) => void;
}

// Connection system types
export interface ConnectionPath {
  id: string;
  fromNode: string;
  toNode: string;
  pathData: string;
  length: number;
  midpoint: { x: number; y: number };
  isActive: boolean;
}

// Viewport and responsive types
export interface ViewportConfig {
  viewBox: string;
  scale: number;
  nodeSize: number;
  fontSize: number;
  effectsLevel: 'minimal' | 'standard' | 'full';
}

// Component props types
export interface NeuralAssemblyEngineProps {
  width?: number;
  height?: number;
  autoPlay?: boolean;
  showControls?: boolean;
  className?: string;
  quality?: 'low' | 'medium' | 'high';
  onPhaseChange?: (phase: number) => void;
  onComplete?: () => void;
}

// Phase-specific types
export interface PhaseDefinition {
  id: number;
  name: string;
  duration: number;
  delay: number;
  color: {
    primary: string;
    secondary: string;
    accent: string;
    background: string;
  };
  effects: string[];
  particles: {
    count: number;
    fragments: string[];
  };
}

// SVG layer types
export interface SVGLayerProps {
  nodes: NeuralNode[];
  connections: ConnectionPath[];
  particles: CodeParticle[];
  currentPhase: number;
  viewBox?: string;
  className?: string;
}

// Control panel types
export interface ControlPanelProps {
  config: AnimationConfig;
  metrics: PerformanceMetrics;
  currentPhase: number;
  isPlaying: boolean;
  onConfigChange: (config: Partial<AnimationConfig>) => void;
  onSeek: (time: number) => void;
  onPlay: () => void;
  onPause: () => void;
  onReset: () => void;
}

// Event types
export interface NeuralEvent {
  type: 'phase_change' | 'node_activate' | 'connection_establish' | 'animation_complete';
  timestamp: number;
  data: any;
}

// Error types
export interface AnimationError {
  type: 'performance' | 'render' | 'config' | 'data';
  message: string;
  timestamp: number;
  recoverable: boolean;
}