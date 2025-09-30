/**
 * Performance Hook
 * Integrates performance monitoring with React component lifecycle
 */

import { useRef, useEffect, useState, useCallback } from 'react';
import { PerformanceMonitor } from '../animations/utils/performanceUtils';
import { PerformanceMetrics, AnimationConfig } from '../types';

export const usePerformance = (
  config: AnimationConfig,
  onQualityChange?: (quality: 'low' | 'medium' | 'high') => void
) => {
  const monitor = useRef<PerformanceMonitor | null>(null);
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    fps: 60,
    memoryUsage: 0,
    renderTime: 0,
    totalNodes: 0,
    totalParticles: 0
  });
  const [isMonitoring, setIsMonitoring] = useState(false);
  const [adaptiveQuality, setAdaptiveQuality] = useState<'low' | 'medium' | 'high'>(config.quality);
  const [warnings, setWarnings] = useState<Array<{ type: string; level: string; message: string; timestamp: number }>>([]);

  // Initialize performance monitor
  useEffect(() => {
    monitor.current = new PerformanceMonitor();

    return () => {
      if (monitor.current) {
        monitor.current.stopMonitoring();
      }
    };
  }, []);

  // Set up event listeners for performance updates
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const handlePerformanceUpdate = (event: CustomEvent) => {
      const { detail } = event;
      if (detail.metrics) {
        setMetrics(detail.metrics);
      }
    };

    const handlePerformanceWarning = (event: CustomEvent) => {
      const { detail } = event;
      setWarnings(prev => [...prev.slice(-9), { // Keep last 10 warnings
        type: detail.type,
        level: detail.level,
        message: detail.message,
        timestamp: detail.timestamp
      }]);

      // Auto-adapt quality on critical warnings
      if (detail.level === 'critical' && monitor.current) {
        const newQuality = monitor.current.adaptQuality();
        if (newQuality !== adaptiveQuality) {
          setAdaptiveQuality(newQuality);
          onQualityChange?.(newQuality);
        }
      }
    };

    window.addEventListener('neuralPerformanceUpdate', handlePerformanceUpdate as EventListener);
    window.addEventListener('neuralPerformanceWarning', handlePerformanceWarning as EventListener);

    return () => {
      window.removeEventListener('neuralPerformanceUpdate', handlePerformanceUpdate as EventListener);
      window.removeEventListener('neuralPerformanceWarning', handlePerformanceWarning as EventListener);
    };
  }, [adaptiveQuality, onQualityChange]);

  /**
   * Start performance monitoring
   */
  const startMonitoring = useCallback(() => {
    if (monitor.current && !isMonitoring) {
      monitor.current.startMonitoring();
      setIsMonitoring(true);
    }
  }, [isMonitoring]);

  /**
   * Stop performance monitoring
   */
  const stopMonitoring = useCallback(() => {
    if (monitor.current && isMonitoring) {
      monitor.current.stopMonitoring();
      setIsMonitoring(false);
    }
  }, [isMonitoring]);

  /**
   * Get current performance metrics
   */
  const getCurrentMetrics = useCallback((): PerformanceMetrics => {
    if (monitor.current) {
      return monitor.current.getCurrentMetrics();
    }
    return metrics;
  }, [metrics]);

  /**
   * Get performance summary
   */
  const getPerformanceSummary = useCallback(() => {
    if (monitor.current) {
      return monitor.current.getPerformanceSummary();
    }
    return null;
  }, []);

  /**
   * Get optimization suggestions
   */
  const getOptimizationSuggestions = useCallback((): string[] => {
    if (monitor.current) {
      return monitor.current.getOptimizationSuggestions();
    }
    return [];
  }, []);

  /**
   * Manually trigger quality adaptation
   */
  const adaptQuality = useCallback(() => {
    if (monitor.current) {
      const newQuality = monitor.current.adaptQuality();
      setAdaptiveQuality(newQuality);
      onQualityChange?.(newQuality);
      return newQuality;
    }
    return adaptiveQuality;
  }, [adaptiveQuality, onQualityChange]);

  /**
   * Reset performance history
   */
  const resetMetrics = useCallback(() => {
    if (monitor.current) {
      monitor.current.resetHistory();
      setWarnings([]);
    }
  }, []);

  /**
   * Check if performance is degraded
   */
  const isPerformanceDegraded = useCallback((): boolean => {
    return metrics.fps < 30 || metrics.memoryUsage > 100;
  }, [metrics]);

  /**
   * Get FPS trend (improving, stable, degrading)
   */
  const getFPSTrend = useCallback((): 'improving' | 'stable' | 'degrading' => {
    if (!monitor.current) return 'stable';

    const avgFPS = monitor.current.getAverageFPS(5); // Last 5 seconds
    const recentAvg = monitor.current.getAverageFPS(2); // Last 2 seconds

    const difference = recentAvg - avgFPS;

    if (difference > 2) return 'improving';
    if (difference < -2) return 'degrading';
    return 'stable';
  }, []);

  /**
   * Get performance health score (0-100)
   */
  const getHealthScore = useCallback((): number => {
    const fpsScore = Math.min(100, (metrics.fps / 60) * 100);
    const memoryScore = Math.max(0, 100 - metrics.memoryUsage); // Lower memory usage = better score
    const stabilityScore = monitor.current ? monitor.current.getFPSStability() * 100 : 100;

    return Math.round((fpsScore + memoryScore + stabilityScore) / 3);
  }, [metrics]);

  /**
   * Check if device meets minimum requirements
   */
  const meetsMinimumRequirements = useCallback((): boolean => {
    return metrics.fps >= 15 && metrics.memoryUsage < 200;
  }, [metrics]);

  /**
   * Get recommended quality for current performance
   */
  const getRecommendedQuality = useCallback((): 'low' | 'medium' | 'high' => {
    if (monitor.current) {
      return monitor.current.adaptQuality();
    }
    return 'medium';
  }, []);

  /**
   * Export performance data for debugging
   */
  const exportPerformanceData = useCallback(() => {
    const summary = getPerformanceSummary();
    const data = {
      timestamp: Date.now(),
      metrics,
      summary,
      warnings: warnings.slice(-5), // Last 5 warnings
      config: {
        quality: adaptiveQuality,
        reducedMotion: config.reducedMotion
      }
    };

    return JSON.stringify(data, null, 2);
  }, [metrics, warnings, adaptiveQuality, config.reducedMotion, getPerformanceSummary]);

  return {
    // Current state
    metrics,
    isMonitoring,
    adaptiveQuality,
    warnings: warnings.slice(-5), // Only return last 5 warnings

    // Control methods
    startMonitoring,
    stopMonitoring,
    resetMetrics,

    // Analysis methods
    getCurrentMetrics,
    getPerformanceSummary,
    getOptimizationSuggestions,
    adaptQuality,

    // Performance insights
    isPerformanceDegraded: isPerformanceDegraded(),
    fpsTrend: getFPSTrend(),
    healthScore: getHealthScore(),
    meetsMinimumRequirements: meetsMinimumRequirements(),
    recommendedQuality: getRecommendedQuality(),

    // Utilities
    exportPerformanceData
  };
};