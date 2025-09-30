/**
 * Animation Control Hook
 * Manages animation state and provides control interface
 */

import { useRef, useEffect, useCallback, useState } from 'react';
import { AnimeV3Manager } from '../animations/utils/animationUtils';
import { AnimationConfig, AnimationPhase } from '../types';

export const useAnimation = (config: AnimationConfig) => {
  const animeManager = useRef<AnimeV3Manager | null>(null);
  const [currentPhase, setCurrentPhase] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const isInitialized = useRef(false);

  // Initialize animation manager
  useEffect(() => {
    if (!isInitialized.current) {
      animeManager.current = new AnimeV3Manager();
      isInitialized.current = true;

      // Auto-start if configured
      if (config.autoplay) {
        setIsPlaying(true);
      }
    }

    return () => {
      if (animeManager.current && isInitialized.current) {
        animeManager.current.cleanup();
        animeManager.current = null;
        isInitialized.current = false;
      }
    };
  }, [config.autoplay]);

  // Update progress periodically when playing
  useEffect(() => {
    if (!isPlaying || !animeManager.current) return;

    const interval = setInterval(() => {
      if (animeManager.current) {
        const mainTimelineProgress = animeManager.current.getProgress('main-timeline');
        setProgress(mainTimelineProgress);

        // Update phase based on progress
        const newPhase = Math.floor(mainTimelineProgress * 5); // 5 phases
        if (newPhase !== currentPhase && newPhase >= 0 && newPhase < 5) {
          setCurrentPhase(newPhase);
        }
      }
    }, 100); // Update every 100ms

    return () => clearInterval(interval);
  }, [isPlaying, currentPhase]);

  /**
   * Play the main animation timeline
   */
  const play = useCallback(() => {
    if (animeManager.current) {
      animeManager.current.play('main-timeline');
      setIsPlaying(true);
      setIsPaused(false);
    }
  }, []);

  /**
   * Pause the main animation timeline
   */
  const pause = useCallback(() => {
    if (animeManager.current) {
      animeManager.current.pause('main-timeline');
      setIsPlaying(false);
      setIsPaused(true);
    }
  }, []);

  /**
   * Seek to specific time in the animation
   */
  const seek = useCallback((time: number) => {
    if (animeManager.current) {
      animeManager.current.seek('main-timeline', time);
      setProgress(time / duration);

      // Update phase based on seek position
      const newPhase = Math.floor((time / duration) * 5);
      if (newPhase >= 0 && newPhase < 5) {
        setCurrentPhase(newPhase);
      }
    }
  }, [duration]);

  /**
   * Restart animation from beginning
   */
  const restart = useCallback(() => {
    if (animeManager.current) {
      animeManager.current.restart('main-timeline');
      setProgress(0);
      setCurrentPhase(0);
      setIsPlaying(true);
      setIsPaused(false);
    }
  }, []);

  /**
   * Reset animation to initial state
   */
  const reset = useCallback(() => {
    if (animeManager.current) {
      animeManager.current.seek('main-timeline', 0);
      animeManager.current.pause('main-timeline');
      setProgress(0);
      setCurrentPhase(0);
      setIsPlaying(false);
      setIsPaused(false);
    }
  }, []);

  /**
   * Jump to specific phase
   */
  const goToPhase = useCallback((phase: number) => {
    if (phase >= 0 && phase < 5 && animeManager.current) {
      const targetTime = (phase / 5) * duration;
      seek(targetTime);
      setCurrentPhase(phase);
    }
  }, [duration, seek]);

  /**
   * Play specific timeline by ID
   */
  const playTimeline = useCallback((timelineId: string) => {
    if (animeManager.current) {
      return animeManager.current.play(timelineId);
    }
    return false;
  }, []);

  /**
   * Pause specific timeline by ID
   */
  const pauseTimeline = useCallback((timelineId: string) => {
    if (animeManager.current) {
      return animeManager.current.pause(timelineId);
    }
    return false;
  }, []);

  /**
   * Create a new timeline
   */
  const createTimeline = useCallback((
    id: string,
    config: any = {}
  ) => {
    if (animeManager.current) {
      return animeManager.current.createTimeline(id, config);
    }
    return null;
  }, []);

  /**
   * Create a standalone animation
   */
  const createAnimation = useCallback((
    id: string,
    targets: string | Element | Element[],
    properties: any
  ) => {
    if (animeManager.current) {
      return animeManager.current.createAnimation(id, targets, properties);
    }
    return null;
  }, []);

  /**
   * Set total duration for progress calculations
   */
  const setTotalDuration = useCallback((totalDuration: number) => {
    setDuration(totalDuration);
  }, []);

  /**
   * Get current animation status
   */
  const getStatus = useCallback(() => {
    return {
      isPlaying,
      isPaused,
      progress,
      currentPhase,
      duration
    };
  }, [isPlaying, isPaused, progress, currentPhase, duration]);

  /**
   * Check if animation manager is ready
   */
  const isReady = useCallback(() => {
    return animeManager.current !== null && isInitialized.current;
  }, []);

  return {
    // Animation manager reference
    animeManager: animeManager.current,

    // State
    currentPhase,
    isPlaying,
    isPaused,
    progress,
    duration,

    // Basic controls
    controls: {
      play,
      pause,
      seek,
      restart,
      reset,
      goToPhase
    },

    // Advanced controls
    advanced: {
      playTimeline,
      pauseTimeline,
      createTimeline,
      createAnimation,
      setTotalDuration
    },

    // Utilities
    utils: {
      getStatus,
      isReady
    }
  };
};