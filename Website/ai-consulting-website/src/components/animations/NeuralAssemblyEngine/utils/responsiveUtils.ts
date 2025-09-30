/**
 * Responsive Utilities - Neural Assembly Engine
 * Viewport adaptations for mobile, tablet, and desktop environments
 */

import { NeuralNode, ViewportConfig, ResponsiveBreakpoint } from '../types';

/**
 * Get viewport configuration based on screen dimensions
 */
export const getViewportConfig = (width: number, height: number): ViewportConfig => {
  if (width < 768) {
    // Mobile: Focus on center area, minimal effects
    return {
      viewBox: "300 150 600 300",
      scale: 0.8,
      nodeSize: 0.7,
      fontSize: 0.8,
      effectsLevel: 'minimal'
    };
  } else if (width < 1024) {
    // Tablet: Moderate crop, standard effects
    return {
      viewBox: "150 75 900 450",
      scale: 0.9,
      nodeSize: 0.85,
      fontSize: 0.9,
      effectsLevel: 'standard'
    };
  } else if (width < 1440) {
    // Desktop: Full view, full effects
    return {
      viewBox: "0 0 1200 600",
      scale: 1.0,
      nodeSize: 1.0,
      fontSize: 1.0,
      effectsLevel: 'full'
    };
  } else {
    // Large screens: Expanded view
    return {
      viewBox: "-100 -50 1400 700",
      scale: 1.1,
      nodeSize: 1.05,
      fontSize: 1.1,
      effectsLevel: 'full'
    };
  }
};

/**
 * Adapt node positions and sizes for viewport configuration
 */
export const adaptNodePositions = (
  nodes: NeuralNode[],
  config: ViewportConfig
): NeuralNode[] => {
  return nodes.map(node => ({
    ...node,
    size: node.size * config.nodeSize,
    x: node.x * config.scale,
    y: node.y * config.scale
  }));
};

/**
 * Get responsive breakpoint configuration
 */
export const getResponsiveBreakpoint = (width: number): ResponsiveBreakpoint => {
  if (width < 480) {
    return {
      name: 'mobile',
      minWidth: 0,
      nodeCount: 5, // Core + 4 main specialists
      particleCount: 15,
      animationSpeed: 0.8,
      effects: 'minimal'
    };
  } else if (width < 768) {
    return {
      name: 'mobile-large',
      minWidth: 480,
      nodeCount: 8, // Core + 6 specialists + 1 helper
      particleCount: 20,
      animationSpeed: 0.9,
      effects: 'minimal'
    };
  } else if (width < 1024) {
    return {
      name: 'tablet',
      minWidth: 768,
      nodeCount: 12, // Core + specialists + main helpers
      particleCount: 25,
      animationSpeed: 1.0,
      effects: 'standard'
    };
  } else if (width < 1440) {
    return {
      name: 'desktop',
      minWidth: 1024,
      nodeCount: 18, // Most nodes except smallest helpers
      particleCount: 35,
      animationSpeed: 1.0,
      effects: 'full'
    };
  } else {
    return {
      name: 'large',
      minWidth: 1440,
      nodeCount: 24, // All nodes
      particleCount: 40,
      animationSpeed: 1.1,
      effects: 'full'
    };
  }
};

/**
 * Calculate optimal text size for labels based on viewport
 */
export const getResponsiveTextSize = (
  baseSize: number,
  breakpoint: ResponsiveBreakpoint,
  nodeType: 'core' | 'specialist' | 'helper'
): number => {
  const typeMultiplier = {
    core: 1.2,
    specialist: 1.0,
    helper: 0.8
  };

  const sizeMultiplier = {
    'mobile': 0.7,
    'mobile-large': 0.8,
    'tablet': 0.9,
    'desktop': 1.0,
    'large': 1.1
  };

  return baseSize * typeMultiplier[nodeType] * sizeMultiplier[breakpoint.name as keyof typeof sizeMultiplier];
};

/**
 * Filter nodes based on viewport constraints
 */
export const filterNodesForViewport = (
  nodes: NeuralNode[],
  breakpoint: ResponsiveBreakpoint
): NeuralNode[] => {
  const { name, nodeCount } = breakpoint;

  // Priority order for node inclusion
  const priorities = {
    'orchestrator': 1,
    'coder': 2,
    'researcher': 3,
    'tester': 4,
    'reviewer': 5,
    'architect': 6,
    'optimizer': 7,
    'formatter': 8,
    'analyzer': 9,
    'validator': 10,
    'quality': 11,
    'planner': 12,
    'performance': 13,
    'documenter': 14,
    'security': 15,
    'integration': 16,
    'deployment': 17,
    'monitoring': 18,
    'backup': 19
  };

  const sortedNodes = [...nodes].sort((a, b) => {
    const priorityA = priorities[a.id as keyof typeof priorities] || 999;
    const priorityB = priorities[b.id as keyof typeof priorities] || 999;
    return priorityA - priorityB;
  });

  return sortedNodes.slice(0, nodeCount);
};

/**
 * Adjust connection complexity for viewport
 */
export const filterConnectionsForViewport = (
  connections: string[],
  breakpoint: ResponsiveBreakpoint
): string[] => {
  const { effects } = breakpoint;

  if (effects === 'minimal') {
    // Show only core connections
    return connections.filter(conn => conn.includes('orchestrator'));
  } else if (effects === 'standard') {
    // Show core + specialist connections
    return connections.filter(conn => {
      const parts = conn.split('-');
      const coreNodes = ['orchestrator', 'coder', 'researcher', 'tester', 'reviewer', 'architect', 'optimizer'];
      return parts.some(part => coreNodes.includes(part));
    });
  } else {
    // Show all connections
    return connections;
  }
};

/**
 * Calculate particle density based on performance capabilities
 */
export const getOptimalParticleCount = (
  baseCount: number,
  breakpoint: ResponsiveBreakpoint,
  performanceLevel: 'low' | 'medium' | 'high'
): number => {
  const performanceMultiplier = {
    low: 0.5,
    medium: 0.75,
    high: 1.0
  };

  const breakpointMultiplier = {
    'mobile': 0.6,
    'mobile-large': 0.7,
    'tablet': 0.8,
    'desktop': 1.0,
    'large': 1.2
  };

  return Math.round(
    baseCount *
    performanceMultiplier[performanceLevel] *
    breakpointMultiplier[breakpoint.name as keyof typeof breakpointMultiplier]
  );
};

/**
 * Generate adaptive animation timings
 */
export const getAdaptiveTimings = (
  baseDuration: number,
  breakpoint: ResponsiveBreakpoint,
  reducedMotion: boolean
): {
  duration: number;
  delay: number;
  stagger: number;
} => {
  if (reducedMotion) {
    return {
      duration: baseDuration * 0.3,
      delay: 100,
      stagger: 50
    };
  }

  const speedMultiplier = breakpoint.animationSpeed;

  return {
    duration: baseDuration / speedMultiplier,
    delay: Math.max(50, 200 / speedMultiplier),
    stagger: Math.max(20, 100 / speedMultiplier)
  };
};

/**
 * Calculate safe area adjustments for mobile devices
 */
export const getSafeAreaAdjustments = (
  viewport: { width: number; height: number }
): {
  topInset: number;
  bottomInset: number;
  leftInset: number;
  rightInset: number;
} => {
  const { width, height } = viewport;

  // Basic safe area detection (can be enhanced with env() CSS variables)
  const isPhone = width < 768 && height > width;
  const hasNotch = isPhone && height > 800;

  return {
    topInset: hasNotch ? 44 : 20,
    bottomInset: hasNotch ? 34 : 0,
    leftInset: 0,
    rightInset: 0
  };
};

/**
 * Generate responsive CSS variables
 */
export const getResponsiveCSSVariables = (
  config: ViewportConfig,
  breakpoint: ResponsiveBreakpoint
): Record<string, string> => {
  return {
    '--neural-scale': config.scale.toString(),
    '--neural-node-size': config.nodeSize.toString(),
    '--neural-font-size': config.fontSize.toString(),
    '--neural-effects-level': config.effectsLevel,
    '--neural-animation-speed': breakpoint.animationSpeed.toString(),
    '--neural-particle-count': breakpoint.particleCount.toString(),
    '--neural-viewbox': config.viewBox
  };
};

/**
 * Optimize animation performance for device capabilities
 */
export const getPerformanceOptimizations = (
  breakpoint: ResponsiveBreakpoint,
  deviceCapabilities: {
    gpu: boolean;
    memory: number;
    cores: number;
  }
): {
  useGPUAcceleration: boolean;
  enableSmoothAnimations: boolean;
  particleLimit: number;
  effectsQuality: 'low' | 'medium' | 'high';
} => {
  const isLowEnd = !deviceCapabilities.gpu || deviceCapabilities.memory < 4 || deviceCapabilities.cores < 4;
  const isMobile = breakpoint.name.includes('mobile');

  return {
    useGPUAcceleration: deviceCapabilities.gpu && !isLowEnd,
    enableSmoothAnimations: !isLowEnd && !isMobile,
    particleLimit: isLowEnd ? 15 : isMobile ? 25 : 40,
    effectsQuality: isLowEnd ? 'low' : isMobile ? 'medium' : 'high'
  };
};