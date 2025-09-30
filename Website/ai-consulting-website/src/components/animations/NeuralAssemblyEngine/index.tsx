/**
 * Neural Assembly Engine - Main Export
 * Foundation implementation for Subtask 1: Foundation & Setup
 */

// Export main component (to be implemented in next subtasks)
export { default as NeuralAssemblyEngine } from './NeuralAssemblyEngine';

// Export all types
export * from './types';

// Export hooks
export { useAnimation } from './hooks/useAnimation';
export { useResponsive } from './hooks/useResponsive';
export { usePerformance } from './hooks/usePerformance';

// Export utilities
export { AnimeV3Manager } from './animations/utils/animationUtils';
export { PerformanceMonitor } from './animations/utils/performanceUtils';

// Export data
export * from './data/colorScheme';
export * from './data/nodePositions';
export * from './data/codeFragments';

// Export components
export { ControlPanel } from './components/ControlPanel';