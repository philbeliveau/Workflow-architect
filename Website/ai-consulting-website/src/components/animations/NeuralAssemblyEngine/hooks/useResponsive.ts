/**
 * Responsive Hook
 * Handles viewport adaptations and responsive breakpoint management
 */

import { useState, useEffect } from 'react';
import { ResponsiveBreakpoint, ViewportConfig } from '../types';

const breakpoints: ResponsiveBreakpoint[] = [
  {
    name: 'mobile',
    minWidth: 0,
    nodeCount: 8,
    particleCount: 25,
    animationSpeed: 1.2,
    effects: 'minimal'
  },
  {
    name: 'tablet',
    minWidth: 768,
    nodeCount: 12,
    particleCount: 35,
    animationSpeed: 1.0,
    effects: 'standard'
  },
  {
    name: 'desktop',
    minWidth: 1024,
    nodeCount: 16,
    particleCount: 50,
    animationSpeed: 0.8,
    effects: 'full'
  },
  {
    name: 'large',
    minWidth: 1440,
    nodeCount: 20,
    particleCount: 75,
    animationSpeed: 0.6,
    effects: 'full'
  }
];

export const useResponsive = () => {
  const [currentBreakpoint, setCurrentBreakpoint] = useState<ResponsiveBreakpoint>(breakpoints[2]);
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });
  const [isClient, setIsClient] = useState(false);

  // Initialize client-side state
  useEffect(() => {
    setIsClient(true);
    updateBreakpoint();
  }, []);

  const updateBreakpoint = () => {
    if (typeof window === 'undefined') return;

    const width = window.innerWidth;
    const height = window.innerHeight;

    setWindowSize({ width, height });

    // Find matching breakpoint (largest that fits)
    const breakpoint = breakpoints
      .slice()
      .reverse() // Start from largest
      .find(bp => width >= bp.minWidth) || breakpoints[0];

    setCurrentBreakpoint(breakpoint);
  };

  useEffect(() => {
    if (!isClient) return;

    const handleResize = () => {
      updateBreakpoint();
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isClient]);

  /**
   * Get viewport configuration for current breakpoint
   */
  const getViewportConfig = (): ViewportConfig => {
    const { width, height } = windowSize;

    if (width < 768) {
      // Mobile: Focus on center area with reduced complexity
      return {
        viewBox: "200 100 800 400",
        scale: 0.7,
        nodeSize: 0.6,
        fontSize: 0.8,
        effectsLevel: 'minimal'
      };
    } else if (width < 1024) {
      // Tablet: Moderate crop and effects
      return {
        viewBox: "100 50 1000 500",
        scale: 0.85,
        nodeSize: 0.8,
        fontSize: 0.9,
        effectsLevel: 'standard'
      };
    } else if (width < 1440) {
      // Desktop: Full view
      return {
        viewBox: "0 0 1200 600",
        scale: 1.0,
        nodeSize: 1.0,
        fontSize: 1.0,
        effectsLevel: 'full'
      };
    } else {
      // Large screens: Enhanced view
      return {
        viewBox: "-100 -50 1400 700",
        scale: 1.1,
        nodeSize: 1.1,
        fontSize: 1.0,
        effectsLevel: 'full'
      };
    }
  };

  /**
   * Check if device is mobile
   */
  const isMobile = () => {
    return currentBreakpoint.name === 'mobile';
  };

  /**
   * Check if device is tablet
   */
  const isTablet = () => {
    return currentBreakpoint.name === 'tablet';
  };

  /**
   * Check if device is desktop or larger
   */
  const isDesktop = () => {
    return ['desktop', 'large'].includes(currentBreakpoint.name);
  };

  /**
   * Get reduced motion preference
   */
  const prefersReducedMotion = () => {
    if (typeof window === 'undefined') return false;

    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  };

  /**
   * Get performance tier based on device characteristics
   */
  const getPerformanceTier = (): 'low' | 'medium' | 'high' => {
    const { width } = windowSize;

    // Consider device pixel ratio for performance estimation
    const dpr = typeof window !== 'undefined' ? window.devicePixelRatio || 1 : 1;
    const totalPixels = width * windowSize.height * dpr;

    // Check for performance indicators
    const isHighDPI = dpr > 1.5;
    const isLargeScreen = width > 1440;
    const hasHighPixelCount = totalPixels > 2073600; // ~1920x1080 at 1x DPR

    if (isMobile() || (hasHighPixelCount && isHighDPI)) {
      return 'low';
    } else if (isTablet() || isHighDPI) {
      return 'medium';
    } else {
      return 'high';
    }
  };

  /**
   * Get optimal particle count for current device
   */
  const getOptimalParticleCount = (): number => {
    const tier = getPerformanceTier();
    const base = currentBreakpoint.particleCount;

    switch (tier) {
      case 'low':
        return Math.floor(base * 0.5);
      case 'medium':
        return Math.floor(base * 0.75);
      case 'high':
        return base;
      default:
        return base;
    }
  };

  /**
   * Get optimal node count for current device
   */
  const getOptimalNodeCount = (): number => {
    const tier = getPerformanceTier();
    const base = currentBreakpoint.nodeCount;

    switch (tier) {
      case 'low':
        return Math.floor(base * 0.6);
      case 'medium':
        return Math.floor(base * 0.8);
      case 'high':
        return base;
      default:
        return base;
    }
  };

  /**
   * Get animation speed modifier
   */
  const getAnimationSpeed = (): number => {
    const tier = getPerformanceTier();
    const base = currentBreakpoint.animationSpeed;

    if (prefersReducedMotion()) {
      return base * 2; // Slower animations for accessibility
    }

    switch (tier) {
      case 'low':
        return base * 1.5; // Slower for performance
      case 'medium':
        return base * 1.2;
      case 'high':
        return base;
      default:
        return base;
    }
  };

  /**
   * Get effects level
   */
  const getEffectsLevel = (): 'minimal' | 'standard' | 'full' => {
    if (prefersReducedMotion()) return 'minimal';

    const tier = getPerformanceTier();

    switch (tier) {
      case 'low':
        return 'minimal';
      case 'medium':
        return 'standard';
      case 'high':
        return currentBreakpoint.effects;
      default:
        return currentBreakpoint.effects;
    }
  };

  /**
   * Get orientation
   */
  const getOrientation = (): 'portrait' | 'landscape' => {
    return windowSize.width > windowSize.height ? 'landscape' : 'portrait';
  };

  /**
   * Check if device supports hover
   */
  const supportsHover = () => {
    if (typeof window === 'undefined') return true;
    return window.matchMedia('(hover: hover)').matches;
  };

  /**
   * Get touch capability
   */
  const hasTouchSupport = () => {
    if (typeof window === 'undefined') return false;
    return 'ontouchstart' in window || navigator.maxTouchPoints > 0;
  };

  return {
    // Current state
    currentBreakpoint,
    windowSize,
    isClient,

    // Device checks
    isMobile: isMobile(),
    isTablet: isTablet(),
    isDesktop: isDesktop(),
    orientation: getOrientation(),

    // Performance and capabilities
    performanceTier: getPerformanceTier(),
    prefersReducedMotion: prefersReducedMotion(),
    supportsHover: supportsHover(),
    hasTouchSupport: hasTouchSupport(),

    // Optimized values
    optimalParticleCount: getOptimalParticleCount(),
    optimalNodeCount: getOptimalNodeCount(),
    animationSpeed: getAnimationSpeed(),
    effectsLevel: getEffectsLevel(),

    // Utilities
    getViewportConfig,
    updateBreakpoint
  };
};