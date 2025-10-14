/**
 * User Interaction Hook - Neural Assembly Engine
 * Manages user interaction state, gestures, and behavioral tracking
 */

import { useState, useCallback, useEffect, useRef } from 'react';

export interface UserInteractionState {
  /** User has interacted with controls */
  hasInteracted: boolean;
  /** Last interaction timestamp */
  lastInteraction: number;
  /** Interaction type */
  lastInteractionType: 'click' | 'touch' | 'keyboard' | 'mouse' | 'gesture' | null;
  /** User preference for autoplay */
  prefersAutoplay: boolean;
  /** User is currently interacting */
  isInteracting: boolean;
  /** Idle time in milliseconds */
  idleTime: number;
  /** Total interaction count */
  interactionCount: number;
  /** User engagement level */
  engagementLevel: 'low' | 'medium' | 'high';
}

export interface UserInteractionCallbacks {
  /** Called when user starts interacting */
  onInteractionStart?: (type: UserInteractionState['lastInteractionType']) => void;
  /** Called when user stops interacting (idle) */
  onInteractionEnd?: () => void;
  /** Called when user engagement changes */
  onEngagementChange?: (level: UserInteractionState['engagementLevel']) => void;
  /** Called when user preferences change */
  onPreferenceChange?: (preference: string, value: any) => void;
}

export interface UseUserInteractionOptions {
  /** Idle timeout in milliseconds */
  idleTimeout?: number;
  /** Enable gesture detection */
  enableGestures?: boolean;
  /** Enable preference persistence */
  persistPreferences?: boolean;
  /** Local storage key for preferences */
  storageKey?: string;
  /** Callbacks */
  callbacks?: UserInteractionCallbacks;
}

export function useUserInteraction(options: UseUserInteractionOptions = {}) {
  const {
    idleTimeout = 3000,
    enableGestures = true,
    persistPreferences = true,
    storageKey = 'neural-animation-prefs',
    callbacks = {}
  } = options;

  // Refs
  const idleTimerRef = useRef<NodeJS.Timeout | null>(null);
  const interactionTimestamps = useRef<number[]>([]);
  const gestureStartRef = useRef<{ x: number; y: number; time: number } | null>(null);

  // State
  const [state, setState] = useState<UserInteractionState>(() => {
    // Load preferences from localStorage
    let savedPrefs = {};
    if (persistPreferences && typeof window !== 'undefined') {
      try {
        const saved = localStorage.getItem(storageKey);
        savedPrefs = saved ? JSON.parse(saved) : {};
      } catch (error) {
        console.warn('Failed to load user preferences:', error);
      }
    }

    return {
      hasInteracted: false,
      lastInteraction: 0,
      lastInteractionType: null,
      prefersAutoplay: (savedPrefs as any).prefersAutoplay ?? true,
      isInteracting: false,
      idleTime: 0,
      interactionCount: 0,
      engagementLevel: 'low'
    };
  });

  // Save preferences to localStorage
  const savePreferences = useCallback((newState: Partial<UserInteractionState>) => {
    if (!persistPreferences || typeof window === 'undefined') return;

    try {
      const prefs = {
        prefersAutoplay: newState.prefersAutoplay ?? state.prefersAutoplay
      };
      localStorage.setItem(storageKey, JSON.stringify(prefs));
    } catch (error) {
      console.warn('Failed to save user preferences:', error);
    }
  }, [persistPreferences, storageKey, state.prefersAutoplay]);

  // Calculate engagement level based on interaction patterns
  const calculateEngagementLevel = useCallback((timestamps: number[]): UserInteractionState['engagementLevel'] => {
    if (timestamps.length < 2) return 'low';

    const now = Date.now();
    const recentInteractions = timestamps.filter(ts => now - ts < 30000); // Last 30 seconds

    if (recentInteractions.length >= 5) return 'high';
    if (recentInteractions.length >= 2) return 'medium';
    return 'low';
  }, []);

  // Record interaction
  const recordInteraction = useCallback((type: UserInteractionState['lastInteractionType']) => {
    const now = Date.now();

    setState(prevState => {
      const newTimestamps = [...interactionTimestamps.current, now];
      // Keep only last 20 interactions
      if (newTimestamps.length > 20) {
        newTimestamps.shift();
      }
      interactionTimestamps.current = newTimestamps;

      const newEngagementLevel = calculateEngagementLevel(newTimestamps);
      const wasEngagementChange = newEngagementLevel !== prevState.engagementLevel;

      const newState = {
        ...prevState,
        hasInteracted: true,
        lastInteraction: now,
        lastInteractionType: type,
        isInteracting: true,
        idleTime: 0,
        interactionCount: prevState.interactionCount + 1,
        engagementLevel: newEngagementLevel
      };

      // Trigger callbacks
      if (!prevState.isInteracting) {
        callbacks.onInteractionStart?.(type);
      }
      if (wasEngagementChange) {
        callbacks.onEngagementChange?.(newEngagementLevel);
      }

      return newState;
    });

    // Reset idle timer
    if (idleTimerRef.current) {
      clearTimeout(idleTimerRef.current);
    }

    idleTimerRef.current = setTimeout(() => {
      setState(prevState => {
        if (prevState.isInteracting) {
          callbacks.onInteractionEnd?.();
          return {
            ...prevState,
            isInteracting: false,
            idleTime: Date.now() - prevState.lastInteraction
          };
        }
        return prevState;
      });
    }, idleTimeout);
  }, [calculateEngagementLevel, callbacks, idleTimeout]);

  // Gesture detection
  const handleTouchStart = useCallback((event: TouchEvent) => {
    if (!enableGestures) return;

    const touch = event.touches[0];
    gestureStartRef.current = {
      x: touch.clientX,
      y: touch.clientY,
      time: Date.now()
    };

    recordInteraction('touch');
  }, [enableGestures, recordInteraction]);

  const handleTouchMove = useCallback((event: TouchEvent) => {
    if (!enableGestures || !gestureStartRef.current) return;

    const touch = event.touches[0];
    const deltaX = touch.clientX - gestureStartRef.current.x;
    const deltaY = touch.clientY - gestureStartRef.current.y;
    const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);

    // Detect significant gestures
    if (distance > 50) {
      recordInteraction('gesture');
    }
  }, [enableGestures, recordInteraction]);

  const handleTouchEnd = useCallback(() => {
    gestureStartRef.current = null;
  }, []);

  // Mouse interactions
  const handleMouseMove = useCallback(() => {
    recordInteraction('mouse');
  }, [recordInteraction]);

  const handleClick = useCallback(() => {
    recordInteraction('click');
  }, [recordInteraction]);

  // Keyboard interactions
  const handleKeyDown = useCallback((event: KeyboardEvent) => {
    // Only count meaningful keyboard interactions
    if (['Space', 'Enter', 'ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown'].includes(event.code)) {
      recordInteraction('keyboard');
    }
  }, [recordInteraction]);

  // Set user preferences
  const setPreference = useCallback((key: string, value: any) => {
    setState(prevState => {
      const newState = { ...prevState };

      switch (key) {
        case 'prefersAutoplay':
          newState.prefersAutoplay = value;
          break;
        default:
          console.warn(`Unknown preference key: ${key}`);
          return prevState;
      }

      savePreferences(newState);
      callbacks.onPreferenceChange?.(key, value);

      return newState;
    });
  }, [savePreferences, callbacks]);

  // Manual interaction recording (for component use)
  const recordManualInteraction = useCallback((type: UserInteractionState['lastInteractionType'] = 'click') => {
    recordInteraction(type);
  }, [recordInteraction]);

  // Reset interaction state
  const resetInteractionState = useCallback(() => {
    setState(prevState => ({
      ...prevState,
      hasInteracted: false,
      lastInteraction: 0,
      lastInteractionType: null,
      isInteracting: false,
      idleTime: 0,
      interactionCount: 0,
      engagementLevel: 'low'
    }));

    interactionTimestamps.current = [];

    if (idleTimerRef.current) {
      clearTimeout(idleTimerRef.current);
      idleTimerRef.current = null;
    }
  }, []);

  // Get interaction analytics
  const getAnalytics = useCallback(() => {
    const now = Date.now();
    const timestamps = interactionTimestamps.current;

    return {
      totalInteractions: state.interactionCount,
      avgTimeBetweenInteractions: timestamps.length > 1
        ? (timestamps[timestamps.length - 1] - timestamps[0]) / (timestamps.length - 1)
        : 0,
      sessionDuration: state.hasInteracted ? now - (timestamps[0] || now) : 0,
      engagementLevel: state.engagementLevel,
      lastInteractionAge: state.lastInteraction ? now - state.lastInteraction : null,
      interactionTypes: {
        click: 0,
        touch: 0,
        keyboard: 0,
        mouse: 0,
        gesture: 0
      }
    };
  }, [state]);

  // Setup event listeners
  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Add global event listeners
    document.addEventListener('click', handleClick);
    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('mousemove', handleMouseMove);

    if (enableGestures) {
      document.addEventListener('touchstart', handleTouchStart);
      document.addEventListener('touchmove', handleTouchMove);
      document.addEventListener('touchend', handleTouchEnd);
    }

    return () => {
      document.removeEventListener('click', handleClick);
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('mousemove', handleMouseMove);

      if (enableGestures) {
        document.removeEventListener('touchstart', handleTouchStart);
        document.removeEventListener('touchmove', handleTouchMove);
        document.removeEventListener('touchend', handleTouchEnd);
      }
    };
  }, [enableGestures, handleClick, handleKeyDown, handleMouseMove, handleTouchStart, handleTouchMove, handleTouchEnd]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (idleTimerRef.current) {
        clearTimeout(idleTimerRef.current);
      }
    };
  }, []);

  // Update idle time periodically
  useEffect(() => {
    const interval = setInterval(() => {
      setState(prevState => {
        if (prevState.lastInteraction > 0 && !prevState.isInteracting) {
          return {
            ...prevState,
            idleTime: Date.now() - prevState.lastInteraction
          };
        }
        return prevState;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return {
    // State
    ...state,

    // Actions
    recordInteraction: recordManualInteraction,
    setPreference,
    resetInteractionState,

    // Analytics
    getAnalytics,

    // Computed values
    isIdle: state.idleTime > idleTimeout,
    isEngaged: state.engagementLevel === 'high',
    sessionActive: state.hasInteracted && state.idleTime < 30000,

    // Convenience flags
    shouldAutoHideControls: state.engagementLevel === 'low' && state.idleTime > idleTimeout / 2,
    shouldShowAdvancedControls: state.engagementLevel === 'high',
    shouldPauseAutoplay: state.hasInteracted && !state.prefersAutoplay
  };
}

export default useUserInteraction;