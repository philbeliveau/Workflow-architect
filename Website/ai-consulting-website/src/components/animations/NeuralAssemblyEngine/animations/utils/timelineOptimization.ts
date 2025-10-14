/**
 * Timeline Optimization - Neural Assembly Engine
 * Performance adaptation for different device capabilities
 */

import { ResponsiveBreakpoint, AnimationConfig } from '../../types';

export interface DeviceCapabilities {
  fps: number;
  memoryMB: number;
  cores: number;
  gpuTier: 'low' | 'medium' | 'high';
  isMobile: boolean;
  screenWidth: number;
  screenHeight: number;
}

export interface OptimizedAnimationConfig {
  nodeCount: number;
  particleCount: number;
  connectionCount: number;
  effects: 'minimal' | 'standard' | 'full';
  frameRate: number;
  animationQuality: 'low' | 'medium' | 'high';
  reducedMotion: boolean;
}

/**
 * Detect device capabilities for animation optimization
 */
export function detectDeviceCapabilities(): DeviceCapabilities {
  const canvas = document.createElement('canvas');
  const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');

  let gpuTier: 'low' | 'medium' | 'high' = 'medium';
  if (gl) {
    const debugInfo = gl.getExtension('WEBGL_debug_renderer_info');
    if (debugInfo) {
      const renderer = gl.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL);
      if (renderer.toLowerCase().includes('intel')) {
        gpuTier = 'low';
      } else if (renderer.toLowerCase().includes('nvidia') || renderer.toLowerCase().includes('amd')) {
        gpuTier = 'high';
      }
    }
  }

  return {
    fps: 60, // Will be dynamically measured
    memoryMB: (navigator as any).deviceMemory || 4096,
    cores: navigator.hardwareConcurrency || 4,
    gpuTier,
    isMobile: /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
    screenWidth: window.screen.width,
    screenHeight: window.screen.height
  };
}

/**
 * Calculate optimal animation configuration based on device capabilities
 */
export function calculateOptimalConfig(capabilities: DeviceCapabilities): OptimizedAnimationConfig {
  const { fps, memoryMB, cores, gpuTier, isMobile, screenWidth } = capabilities;

  // Base configuration for different device tiers
  let config: OptimizedAnimationConfig;

  if (isMobile || gpuTier === 'low' || memoryMB < 2048) {
    // Low-end devices
    config = {
      nodeCount: Math.min(8, Math.floor(screenWidth / 120)),
      particleCount: Math.min(15, Math.floor(screenWidth / 80)),
      connectionCount: Math.min(12, Math.floor(screenWidth / 100)),
      effects: 'minimal',
      frameRate: 30,
      animationQuality: 'low',
      reducedMotion: false
    };
  } else if (gpuTier === 'medium' || memoryMB < 8192) {
    // Medium-end devices
    config = {
      nodeCount: Math.min(12, Math.floor(screenWidth / 80)),
      particleCount: Math.min(25, Math.floor(screenWidth / 60)),
      connectionCount: Math.min(20, Math.floor(screenWidth / 70)),
      effects: 'standard',
      frameRate: 45,
      animationQuality: 'medium',
      reducedMotion: false
    };
  } else {
    // High-end devices
    config = {
      nodeCount: Math.min(15, Math.floor(screenWidth / 60)),
      particleCount: Math.min(40, Math.floor(screenWidth / 40)),
      connectionCount: Math.min(30, Math.floor(screenWidth / 50)),
      effects: 'full',
      frameRate: 60,
      animationQuality: 'high',
      reducedMotion: false
    };
  }

  // Additional optimizations based on screen size
  if (screenWidth < 768) {
    config.nodeCount = Math.floor(config.nodeCount * 0.7);
    config.particleCount = Math.floor(config.particleCount * 0.6);
    config.connectionCount = Math.floor(config.connectionCount * 0.7);
  }

  // Check for reduced motion preference
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReducedMotion) {
    config.reducedMotion = true;
    config.effects = 'minimal';
    config.particleCount = Math.floor(config.particleCount * 0.5);
    config.frameRate = Math.min(config.frameRate, 30);
  }

  return config;
}

/**
 * Dynamic performance monitoring and adjustment
 */
export class PerformanceOptimizer {
  private frameCount = 0;
  private lastTime = performance.now();
  private fpsHistory: number[] = [];
  private currentConfig: OptimizedAnimationConfig;
  private onConfigChange?: (config: OptimizedAnimationConfig) => void;

  constructor(initialConfig: OptimizedAnimationConfig, onConfigChange?: (config: OptimizedAnimationConfig) => void) {
    this.currentConfig = initialConfig;
    this.onConfigChange = onConfigChange;
  }

  /**
   * Update performance metrics and adjust configuration if needed
   */
  updatePerformance(): void {
    const now = performance.now();
    const delta = now - this.lastTime;

    if (delta >= 1000) {
      const fps = (this.frameCount * 1000) / delta;
      this.fpsHistory.push(fps);

      // Keep only last 10 measurements
      if (this.fpsHistory.length > 10) {
        this.fpsHistory.shift();
      }

      // Calculate average FPS
      const avgFPS = this.fpsHistory.reduce((a, b) => a + b, 0) / this.fpsHistory.length;

      // Adjust configuration based on performance
      this.adjustConfiguration(avgFPS);

      this.frameCount = 0;
      this.lastTime = now;
    }

    this.frameCount++;
  }

  /**
   * Adjust animation configuration based on current FPS
   */
  private adjustConfiguration(currentFPS: number): void {
    let configChanged = false;
    const newConfig = { ...this.currentConfig };

    // If FPS is too low, reduce complexity
    if (currentFPS < this.currentConfig.frameRate * 0.7) {
      if (newConfig.animationQuality === 'high') {
        newConfig.animationQuality = 'medium';
        newConfig.particleCount = Math.floor(newConfig.particleCount * 0.8);
        newConfig.effects = 'standard';
        configChanged = true;
      } else if (newConfig.animationQuality === 'medium') {
        newConfig.animationQuality = 'low';
        newConfig.particleCount = Math.floor(newConfig.particleCount * 0.7);
        newConfig.connectionCount = Math.floor(newConfig.connectionCount * 0.8);
        newConfig.effects = 'minimal';
        configChanged = true;
      }
    }
    // If FPS is consistently high, we can increase quality
    else if (currentFPS > this.currentConfig.frameRate * 1.2 && this.fpsHistory.length >= 5) {
      const allHighFPS = this.fpsHistory.every(fps => fps > this.currentConfig.frameRate * 1.1);

      if (allHighFPS && newConfig.animationQuality === 'low') {
        newConfig.animationQuality = 'medium';
        newConfig.particleCount = Math.floor(newConfig.particleCount * 1.3);
        newConfig.effects = 'standard';
        configChanged = true;
      } else if (allHighFPS && newConfig.animationQuality === 'medium') {
        newConfig.animationQuality = 'high';
        newConfig.particleCount = Math.floor(newConfig.particleCount * 1.2);
        newConfig.connectionCount = Math.floor(newConfig.connectionCount * 1.2);
        newConfig.effects = 'full';
        configChanged = true;
      }
    }

    if (configChanged) {
      this.currentConfig = newConfig;
      this.onConfigChange?.(newConfig);
      console.log('Performance optimizer: Configuration adjusted', { currentFPS, newConfig });
    }
  }

  /**
   * Get current configuration
   */
  getCurrentConfig(): OptimizedAnimationConfig {
    return this.currentConfig;
  }

  /**
   * Get current FPS
   */
  getCurrentFPS(): number {
    return this.fpsHistory.length > 0 ? this.fpsHistory[this.fpsHistory.length - 1] : 0;
  }

  /**
   * Reset performance history
   */
  reset(): void {
    this.fpsHistory = [];
    this.frameCount = 0;
    this.lastTime = performance.now();
  }
}

/**
 * Responsive breakpoints for timeline optimization
 */
export const timelineBreakpoints: ResponsiveBreakpoint[] = [
  {
    name: 'mobile-small',
    minWidth: 0,
    nodeCount: 6,
    particleCount: 10,
    animationSpeed: 0.8,
    effects: 'minimal'
  },
  {
    name: 'mobile-large',
    minWidth: 480,
    nodeCount: 8,
    particleCount: 15,
    animationSpeed: 0.9,
    effects: 'minimal'
  },
  {
    name: 'tablet',
    minWidth: 768,
    nodeCount: 10,
    particleCount: 20,
    animationSpeed: 1.0,
    effects: 'standard'
  },
  {
    name: 'desktop',
    minWidth: 1024,
    nodeCount: 12,
    particleCount: 30,
    animationSpeed: 1.0,
    effects: 'standard'
  },
  {
    name: 'desktop-large',
    minWidth: 1440,
    nodeCount: 15,
    particleCount: 40,
    animationSpeed: 1.0,
    effects: 'full'
  }
];

/**
 * Get responsive configuration for current viewport
 */
export function getResponsiveTimelineConfig(width: number): ResponsiveBreakpoint {
  // Find the largest breakpoint that fits
  let config = timelineBreakpoints[0];

  for (const breakpoint of timelineBreakpoints) {
    if (width >= breakpoint.minWidth) {
      config = breakpoint;
    } else {
      break;
    }
  }

  return config;
}

/**
 * Apply performance optimizations to timeline manager
 */
export function applyTimelineOptimizations(
  config: OptimizedAnimationConfig,
  timelineManager: any
): void {
  // Apply quality settings
  if (config.animationQuality === 'low') {
    // Reduce animation complexity
    document.documentElement.style.setProperty('--animation-duration-multiplier', '0.8');
    document.documentElement.style.setProperty('--particle-blur', '0px');
    document.documentElement.style.setProperty('--shadow-quality', 'none');
  } else if (config.animationQuality === 'medium') {
    document.documentElement.style.setProperty('--animation-duration-multiplier', '1.0');
    document.documentElement.style.setProperty('--particle-blur', '1px');
    document.documentElement.style.setProperty('--shadow-quality', 'low');
  } else {
    document.documentElement.style.setProperty('--animation-duration-multiplier', '1.0');
    document.documentElement.style.setProperty('--particle-blur', '2px');
    document.documentElement.style.setProperty('--shadow-quality', 'high');
  }

  // Apply frame rate target
  document.documentElement.style.setProperty('--target-fps', config.frameRate.toString());

  console.log('Timeline optimizations applied', config);
}