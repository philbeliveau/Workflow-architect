/**
 * Timeline Control Hook - Neural Assembly Engine
 * React hook for managing the 5-phase animation timeline
 */

import { useState, useEffect, useRef, useCallback } from 'react';
import { NeuralTimelineManager, createNeuralTimeline } from '../animations/timelineManager';
import { NeuralNode, PhaseCallbacks } from '../types';
import { usePerformance } from './usePerformance';

export interface TimelineState {
  isInitialized: boolean;
  isPlaying: boolean;
  currentPhase: number;
  progress: number;
  duration: number;
  error: string | null;
}

export interface TimelineControls {
  initialize: (nodes: NeuralNode[], viewport: { width: number; height: number }) => Promise<void>;
  play: () => void;
  pause: () => void;
  restart: () => void;
  seek: (time: number) => void;
  goToPhase: (phaseIndex: number) => void;
  setSpeed: (speed: number) => void;
  destroy: () => void;
  enableReducedMotion: () => void;
  getDebugInfo: () => object;
}

export interface UseTimelineControlOptions {
  autoplay?: boolean;
  onPhaseChange?: (phaseIndex: number, phaseName: string) => void;
  onComplete?: () => void;
  onProgress?: (progress: number) => void;
  onError?: (error: string) => void;
}

export function useTimelineControl(options: UseTimelineControlOptions = {}) {
  const {
    autoplay = false,
    onPhaseChange,
    onComplete,
    onProgress,
    onError
  } = options;

  // State management
  const [state, setState] = useState<TimelineState>({
    isInitialized: false,
    isPlaying: false,
    currentPhase: 0,
    progress: 0,
    duration: 12000,
    error: null
  });

  // Refs
  const timelineManagerRef = useRef<NeuralTimelineManager | null>(null);
  const progressIntervalRef = useRef<NodeJS.Timeout | null>(null);

  // Performance monitoring
  const { startMonitoring, stopMonitoring, getMetrics } = usePerformance();

  // Phase change callback
  const handlePhaseChange = useCallback((phaseIndex: number, phaseName: string) => {
    setState(prev => ({ ...prev, currentPhase: phaseIndex }));
    onPhaseChange?.(phaseIndex, phaseName);
    console.log(`Timeline: Phase changed to ${phaseName} (${phaseIndex})`);
  }, [onPhaseChange]);

  // Progress callback
  const handleProgress = useCallback((progress: number) => {
    setState(prev => ({ ...prev, progress }));
    onProgress?.(progress);
  }, [onProgress]);

  // Complete callback
  const handleComplete = useCallback(() => {
    setState(prev => ({ ...prev, isPlaying: false }));
    stopMonitoring();
    onComplete?.();
    console.log('Timeline: Animation sequence completed');
  }, [onComplete, stopMonitoring]);

  // Play callback
  const handlePlay = useCallback(() => {
    setState(prev => ({ ...prev, isPlaying: true, error: null }));
    startMonitoring();
    console.log('Timeline: Animation started');
  }, [startMonitoring]);

  // Pause callback
  const handlePause = useCallback(() => {
    setState(prev => ({ ...prev, isPlaying: false }));
    stopMonitoring();
    console.log('Timeline: Animation paused');
  }, [stopMonitoring]);

  // Restart callback
  const handleRestart = useCallback(() => {
    setState(prev => ({
      ...prev,
      currentPhase: 0,
      progress: 0,
      isPlaying: true,
      error: null
    }));
    startMonitoring();
    console.log('Timeline: Animation restarted');
  }, [startMonitoring]);

  // Error handler
  const handleError = useCallback((error: string) => {
    setState(prev => ({ ...prev, error, isPlaying: false }));
    stopMonitoring();
    onError?.(error);
    console.error('Timeline error:', error);
  }, [onError, stopMonitoring]);

  // Initialize timeline
  const initialize = useCallback(async (nodes: NeuralNode[], viewport: { width: number; height: number }) => {
    try {
      setState(prev => ({ ...prev, error: null }));

      if (timelineManagerRef.current) {
        timelineManagerRef.current.destroy();
      }

      const callbacks: PhaseCallbacks = {
        onPhaseChange: handlePhaseChange,
        onProgress: handleProgress,
        onComplete: handleComplete,
        onPlay: handlePlay,
        onPause: handlePause,
        onRestart: handleRestart
      };

      timelineManagerRef.current = createNeuralTimeline({ callbacks });
      await timelineManagerRef.current.initialize(nodes, viewport);

      setState(prev => ({
        ...prev,
        isInitialized: true,
        duration: timelineManagerRef.current?.getDuration() || 12000
      }));

      if (autoplay) {
        timelineManagerRef.current.play();
      }

      console.log('Timeline: Successfully initialized');
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Unknown initialization error';
      handleError(errorMessage);
    }
  }, [autoplay, handlePhaseChange, handleProgress, handleComplete, handlePlay, handlePause, handleRestart, handleError]);

  // Control functions
  const controls: TimelineControls = {
    initialize,

    play: useCallback(() => {
      if (!timelineManagerRef.current) {
        handleError('Timeline not initialized');
        return;
      }
      timelineManagerRef.current.play();
    }, [handleError]),

    pause: useCallback(() => {
      if (!timelineManagerRef.current) return;
      timelineManagerRef.current.pause();
    }, []),

    restart: useCallback(() => {
      if (!timelineManagerRef.current) {
        handleError('Timeline not initialized');
        return;
      }
      timelineManagerRef.current.restart();
    }, [handleError]),

    seek: useCallback((time: number) => {
      if (!timelineManagerRef.current) {
        handleError('Timeline not initialized');
        return;
      }
      timelineManagerRef.current.seek(time);

      // Update progress state
      const progress = time / state.duration;
      setState(prev => ({ ...prev, progress }));
    }, [state.duration, handleError]),

    goToPhase: useCallback((phaseIndex: number) => {
      if (!timelineManagerRef.current) {
        handleError('Timeline not initialized');
        return;
      }
      timelineManagerRef.current.goToPhase(phaseIndex);
    }, [handleError]),

    setSpeed: useCallback((speed: number) => {
      if (!timelineManagerRef.current) {
        handleError('Timeline not initialized');
        return;
      }
      timelineManagerRef.current.setSpeed(speed);
    }, [handleError]),

    destroy: useCallback(() => {
      if (timelineManagerRef.current) {
        timelineManagerRef.current.destroy();
        timelineManagerRef.current = null;
      }

      if (progressIntervalRef.current) {
        clearInterval(progressIntervalRef.current);
        progressIntervalRef.current = null;
      }

      stopMonitoring();
      setState({
        isInitialized: false,
        isPlaying: false,
        currentPhase: 0,
        progress: 0,
        duration: 12000,
        error: null
      });
      console.log('Timeline: Destroyed and cleaned up');
    }, [stopMonitoring]),

    enableReducedMotion: useCallback(() => {
      if (!timelineManagerRef.current) {
        handleError('Timeline not initialized');
        return;
      }
      timelineManagerRef.current.enableReducedMotion();
    }, [handleError]),

    getDebugInfo: useCallback(() => {
      if (!timelineManagerRef.current) {
        return { error: 'Timeline not initialized' };
      }
      return {
        ...timelineManagerRef.current.getDebugInfo(),
        performanceMetrics: getMetrics(),
        hookState: state
      };
    }, [getMetrics, state])
  };

  // Progress polling (for real-time updates)
  useEffect(() => {
    if (state.isPlaying && timelineManagerRef.current) {
      progressIntervalRef.current = setInterval(() => {
        if (timelineManagerRef.current) {
          const currentProgress = timelineManagerRef.current.getProgress();
          const currentPhaseInfo = timelineManagerRef.current.getCurrentPhase();

          setState(prev => ({
            ...prev,
            progress: currentProgress,
            currentPhase: currentPhaseInfo.index
          }));
        }
      }, 50); // Update every 50ms for smooth progress

      return () => {
        if (progressIntervalRef.current) {
          clearInterval(progressIntervalRef.current);
          progressIntervalRef.current = null;
        }
      };
    }
  }, [state.isPlaying]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      controls.destroy();
    };
  }, []);

  // Reduced motion detection
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion && state.isInitialized) {
      controls.enableReducedMotion();
    }
  }, [state.isInitialized, controls]);

  return {
    state,
    controls,
    // Convenience getters
    isInitialized: state.isInitialized,
    isPlaying: state.isPlaying,
    currentPhase: state.currentPhase,
    progress: state.progress,
    duration: state.duration,
    error: state.error,
    // Performance metrics
    performanceMetrics: getMetrics()
  };
}

export default useTimelineControl;