/**
 * Performance Monitoring Utilities
 * Real-time performance tracking and adaptive quality management
 */

import { PerformanceMetrics, AnimationConfig } from '../../types';

export class PerformanceMonitor {
  private frameCount = 0;
  private lastTime = performance.now();
  private memoryBaseline = 0;
  private isMonitoring = false;
  private fpsHistory: number[] = [];
  private memoryHistory: number[] = [];
  private maxHistoryLength = 60; // Keep last 60 measurements
  private currentFPS = 60;
  private rafId: number | null = null;

  // Performance thresholds
  private readonly PERFORMANCE_THRESHOLDS = {
    LOW_FPS: 25,
    MEDIUM_FPS: 45,
    HIGH_FPS: 55,
    MEMORY_WARNING: 50, // MB
    MEMORY_CRITICAL: 100 // MB
  };

  constructor() {
    this.memoryBaseline = this.getMemoryUsage();
  }

  /**
   * Start performance monitoring
   */
  startMonitoring(): void {
    if (this.isMonitoring) return;

    this.isMonitoring = true;
    this.frameCount = 0;
    this.lastTime = performance.now();
    this.memoryBaseline = this.getMemoryUsage();
    this.measureFrameRate();

    console.log('Neural Assembly Engine: Performance monitoring started');
  }

  /**
   * Stop performance monitoring
   */
  stopMonitoring(): void {
    this.isMonitoring = false;
    if (this.rafId) {
      cancelAnimationFrame(this.rafId);
      this.rafId = null;
    }

    console.log('Neural Assembly Engine: Performance monitoring stopped');
  }

  /**
   * Measure frame rate using requestAnimationFrame
   */
  private measureFrameRate(): void {
    if (!this.isMonitoring) return;

    this.frameCount++;
    const currentTime = performance.now();

    // Calculate FPS every second
    if (currentTime >= this.lastTime + 1000) {
      this.currentFPS = Math.round((this.frameCount * 1000) / (currentTime - this.lastTime));

      // Update FPS history
      this.fpsHistory.push(this.currentFPS);
      if (this.fpsHistory.length > this.maxHistoryLength) {
        this.fpsHistory.shift();
      }

      // Update memory history
      const currentMemory = this.getMemoryUsage() - this.memoryBaseline;
      this.memoryHistory.push(currentMemory);
      if (this.memoryHistory.length > this.maxHistoryLength) {
        this.memoryHistory.shift();
      }

      // Emit performance events
      this.emitPerformanceEvent('fps', this.currentFPS);
      this.emitPerformanceEvent('memory', currentMemory);

      // Check for performance warnings
      this.checkPerformanceThresholds();

      this.frameCount = 0;
      this.lastTime = currentTime;
    }

    this.rafId = requestAnimationFrame(() => this.measureFrameRate());
  }

  /**
   * Get current memory usage (Chrome only)
   */
  private getMemoryUsage(): number {
    // @ts-ignore - performance.memory is Chrome-specific
    if (typeof window !== 'undefined' && window.performance && window.performance.memory) {
      // @ts-ignore
      return window.performance.memory.usedJSHeapSize / 1024 / 1024; // Convert to MB
    }
    return 0;
  }

  /**
   * Emit custom performance events
   */
  private emitPerformanceEvent(type: string, value: number): void {
    if (typeof window === 'undefined') return;

    window.dispatchEvent(new CustomEvent('neuralPerformanceUpdate', {
      detail: {
        type,
        value,
        timestamp: performance.now(),
        metrics: this.getCurrentMetrics()
      }
    }));
  }

  /**
   * Check performance thresholds and emit warnings
   */
  private checkPerformanceThresholds(): void {
    const currentMemory = this.getMemoryUsage() - this.memoryBaseline;

    // FPS warnings
    if (this.currentFPS < this.PERFORMANCE_THRESHOLDS.LOW_FPS) {
      this.emitWarning('fps', 'low', `FPS dropped to ${this.currentFPS}`);
    }

    // Memory warnings
    if (currentMemory > this.PERFORMANCE_THRESHOLDS.MEMORY_CRITICAL) {
      this.emitWarning('memory', 'critical', `Memory usage: ${currentMemory.toFixed(1)}MB`);
    } else if (currentMemory > this.PERFORMANCE_THRESHOLDS.MEMORY_WARNING) {
      this.emitWarning('memory', 'warning', `Memory usage: ${currentMemory.toFixed(1)}MB`);
    }
  }

  /**
   * Emit performance warnings
   */
  private emitWarning(type: string, level: 'warning' | 'critical', message: string): void {
    if (typeof window === 'undefined') return;

    console.warn(`Neural Assembly Engine Performance ${level.toUpperCase()}: ${message}`);

    window.dispatchEvent(new CustomEvent('neuralPerformanceWarning', {
      detail: {
        type,
        level,
        message,
        timestamp: performance.now(),
        recommendations: this.getPerformanceRecommendations(type, level)
      }
    }));
  }

  /**
   * Get performance recommendations based on current metrics
   */
  private getPerformanceRecommendations(type: string, level: string): string[] {
    const recommendations: string[] = [];

    if (type === 'fps' && level === 'low') {
      recommendations.push('Reduce animation quality to "medium" or "low"');
      recommendations.push('Decrease particle count');
      recommendations.push('Simplify visual effects');
      recommendations.push('Enable reduced motion mode');
    }

    if (type === 'memory') {
      recommendations.push('Clear animation caches');
      recommendations.push('Reduce node count for current viewport');
      recommendations.push('Limit particle system complexity');
      if (level === 'critical') {
        recommendations.push('Consider restarting the animation system');
      }
    }

    return recommendations;
  }

  /**
   * Get current performance metrics
   */
  getCurrentMetrics(): PerformanceMetrics {
    const currentMemory = this.getMemoryUsage() - this.memoryBaseline;

    return {
      fps: this.currentFPS,
      memoryUsage: currentMemory,
      renderTime: performance.now(),
      totalNodes: this.getElementCount('.neural-node'),
      totalParticles: this.getElementCount('.code-particle, .data-particle')
    };
  }

  /**
   * Get element count for performance tracking
   */
  private getElementCount(selector: string): number {
    if (typeof document === 'undefined') return 0;
    return document.querySelectorAll(selector).length;
  }

  /**
   * Get average FPS over time window
   */
  getAverageFPS(timeWindow: number = 10): number {
    if (this.fpsHistory.length === 0) return this.currentFPS;

    const recentFPS = this.fpsHistory.slice(-timeWindow);
    return recentFPS.reduce((sum, fps) => sum + fps, 0) / recentFPS.length;
  }

  /**
   * Get FPS stability (lower variance = more stable)
   */
  getFPSStability(): number {
    if (this.fpsHistory.length < 5) return 1;

    const recent = this.fpsHistory.slice(-10);
    const mean = recent.reduce((sum, fps) => sum + fps, 0) / recent.length;
    const variance = recent.reduce((sum, fps) => sum + Math.pow(fps - mean, 2), 0) / recent.length;

    // Return stability score (1 = perfect, 0 = very unstable)
    return Math.max(0, 1 - variance / 100);
  }

  /**
   * Automatically determine optimal quality based on performance
   */
  adaptQuality(currentFPS: number = this.currentFPS): 'low' | 'medium' | 'high' {
    const avgFPS = this.getAverageFPS();
    const stability = this.getFPSStability();
    const memoryUsage = this.getMemoryUsage() - this.memoryBaseline;

    // Consider both current and average FPS, plus stability
    const effectiveFPS = Math.min(currentFPS, avgFPS) * stability;

    if (effectiveFPS < this.PERFORMANCE_THRESHOLDS.LOW_FPS ||
        memoryUsage > this.PERFORMANCE_THRESHOLDS.MEMORY_WARNING) {
      return 'low';
    }

    if (effectiveFPS < this.PERFORMANCE_THRESHOLDS.MEDIUM_FPS) {
      return 'medium';
    }

    return 'high';
  }

  /**
   * Get performance recommendations for current state
   */
  getOptimizationSuggestions(): string[] {
    const metrics = this.getCurrentMetrics();
    const suggestions: string[] = [];

    if (metrics.fps < this.PERFORMANCE_THRESHOLDS.MEDIUM_FPS) {
      suggestions.push('Consider reducing animation complexity');
    }

    if (metrics.totalParticles > 50) {
      suggestions.push('High particle count detected - consider reducing for mobile devices');
    }

    if (metrics.memoryUsage > this.PERFORMANCE_THRESHOLDS.MEMORY_WARNING) {
      suggestions.push('Memory usage is elevated - consider clearing caches');
    }

    if (this.getFPSStability() < 0.8) {
      suggestions.push('FPS is unstable - reduce visual effects or enable reduced motion');
    }

    return suggestions;
  }

  /**
   * Get performance summary for debugging
   */
  getPerformanceSummary(): {
    current: PerformanceMetrics;
    averages: {
      fps: number;
      memory: number;
    };
    stability: number;
    quality: 'low' | 'medium' | 'high';
    suggestions: string[];
  } {
    const avgMemory = this.memoryHistory.length > 0
      ? this.memoryHistory.reduce((sum, mem) => sum + mem, 0) / this.memoryHistory.length
      : 0;

    return {
      current: this.getCurrentMetrics(),
      averages: {
        fps: this.getAverageFPS(),
        memory: avgMemory
      },
      stability: this.getFPSStability(),
      quality: this.adaptQuality(),
      suggestions: this.getOptimizationSuggestions()
    };
  }

  /**
   * Reset performance history
   */
  resetHistory(): void {
    this.fpsHistory = [];
    this.memoryHistory = [];
    this.memoryBaseline = this.getMemoryUsage();
    console.log('Performance history reset');
  }
}