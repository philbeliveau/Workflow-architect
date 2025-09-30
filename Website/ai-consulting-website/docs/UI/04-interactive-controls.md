# 🎮 Subtask 4: Interactive Controls

## 📋 Overview
Implement user controls, viewport integration, and interaction features for the Neural Assembly Engine, including accessibility support and analytics tracking.

## 🎯 Objectives
- Implement Intersection Observer for viewport-triggered animations
- Create optional user controls for animation playback
- Add accessibility features and keyboard navigation
- Integrate analytics tracking for user engagement
- Support reduced motion preferences
- Implement touch and gesture controls for mobile

## 👁️ Viewport Integration

### Intersection Observer Hook
```typescript
// src/components/animations/NeuralAssemblyEngine/hooks/useIntersectionObserver.ts
import { useEffect, useRef, useState } from 'react';

interface UseIntersectionObserverOptions {
  threshold?: number | number[];
  rootMargin?: string;
  triggerOnce?: boolean;
  onIntersect?: (isIntersecting: boolean) => void;
}

export const useIntersectionObserver = (
  options: UseIntersectionObserverOptions = {}
) => {
  const {
    threshold = 0.3,
    rootMargin = '0px',
    triggerOnce = true,
    onIntersect
  } = options;

  const elementRef = useRef<HTMLDivElement>(null);
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [hasIntersected, setHasIntersected] = useState(false);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        const isVisible = entry.isIntersecting;
        setIsIntersecting(isVisible);

        if (isVisible && !hasIntersected) {
          setHasIntersected(true);
          onIntersect?.(true);
        } else if (!triggerOnce) {
          onIntersect?.(isVisible);
        }
      },
      {
        threshold,
        rootMargin
      }
    );

    observer.observe(element);

    return () => {
      observer.unobserve(element);
      observer.disconnect();
    };
  }, [threshold, rootMargin, triggerOnce, onIntersect, hasIntersected]);

  return {
    elementRef,
    isIntersecting,
    hasIntersected
  };
};
```

### Viewport Animation Trigger
```typescript
// src/components/animations/NeuralAssemblyEngine/hooks/useViewportAnimation.ts
import { useCallback, useEffect, useState } from 'react';
import { useIntersectionObserver } from './useIntersectionObserver';
import { NeuralTimelineManager } from '../animations/timelineManager';

interface UseViewportAnimationOptions {
  autoplay?: boolean;
  playOnVisible?: boolean;
  pauseOnHidden?: boolean;
  resetOnHidden?: boolean;
  threshold?: number;
}

export const useViewportAnimation = (
  timeline: NeuralTimelineManager | null,
  options: UseViewportAnimationOptions = {}
) => {
  const {
    autoplay = true,
    playOnVisible = true,
    pauseOnHidden = false,
    resetOnHidden = false,
    threshold = 0.3
  } = options;

  const [hasPlayedOnce, setHasPlayedOnce] = useState(false);

  const handleIntersection = useCallback((isIntersecting: boolean) => {
    if (!timeline) return;

    if (isIntersecting && playOnVisible && autoplay && !hasPlayedOnce) {
      timeline.play();
      setHasPlayedOnce(true);

      // Track engagement
      window.dispatchEvent(new CustomEvent('neuralAnimationStarted', {
        detail: { timestamp: Date.now(), trigger: 'viewport' }
      }));
    } else if (!isIntersecting) {
      if (pauseOnHidden) {
        timeline.pause();
      }
      if (resetOnHidden) {
        timeline.seek(0);
        setHasPlayedOnce(false);
      }
    }
  }, [timeline, playOnVisible, pauseOnHidden, resetOnHidden, autoplay, hasPlayedOnce]);

  const { elementRef, isIntersecting, hasIntersected } = useIntersectionObserver({
    threshold,
    triggerOnce: false,
    onIntersect: handleIntersection
  });

  return {
    elementRef,
    isIntersecting,
    hasIntersected,
    hasPlayedOnce
  };
};
```

## 🎛️ Animation Controls

### Control Panel Component
```tsx
// src/components/animations/NeuralAssemblyEngine/components/AnimationControls.tsx
import React, { useState } from 'react';
import { Play, Pause, RotateCcw, Settings, Volume2, VolumeX } from 'lucide-react';

interface AnimationControlsProps {
  isPlaying: boolean;
  currentPhase: number;
  progress: number;
  showControls?: boolean;
  onPlay: () => void;
  onPause: () => void;
  onRestart: () => void;
  onSeek: (time: number) => void;
  onSpeedChange: (speed: number) => void;
  onToggleSound?: () => void;
  className?: string;
}

export const AnimationControls: React.FC<AnimationControlsProps> = ({
  isPlaying,
  currentPhase,
  progress,
  showControls = false,
  onPlay,
  onPause,
  onRestart,
  onSeek,
  onSpeedChange,
  onToggleSound,
  className = ""
}) => {
  const [showSettings, setShowSettings] = useState(false);
  const [speed, setSpeed] = useState(1);
  const [soundEnabled, setSoundEnabled] = useState(false);

  const handleSpeedChange = (newSpeed: number) => {
    setSpeed(newSpeed);
    onSpeedChange(newSpeed);
  };

  const handleToggleSound = () => {
    setSoundEnabled(!soundEnabled);
    onToggleSound?.();
  };

  const phases = [
    'Chaos', 'Recognition', 'Formation', 'Connection', 'Mastery'
  ];

  if (!showControls) {
    return (
      <div className={`absolute bottom-4 right-4 ${className}`}>
        <button
          onClick={isPlaying ? onPause : onPlay}
          className="bg-black bg-opacity-50 hover:bg-opacity-70 text-white p-3 rounded-full transition-all duration-200"
          aria-label={isPlaying ? 'Pause animation' : 'Play animation'}
        >
          {isPlaying ? <Pause size={20} /> : <Play size={20} />}
        </button>
      </div>
    );
  }

  return (
    <div className={`animation-controls bg-white bg-opacity-90 backdrop-blur-sm rounded-lg shadow-lg p-4 ${className}`}>
      {/* Phase Indicator */}
      <div className="mb-4">
        <div className="text-sm font-medium text-gray-700 mb-2">
          Phase {currentPhase + 1}: {phases[currentPhase]}
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div
            className="bg-blue-600 h-2 rounded-full transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Main Controls */}
      <div className="flex items-center gap-3 mb-4">
        <button
          onClick={isPlaying ? onPause : onPlay}
          className="bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-lg transition-colors"
          aria-label={isPlaying ? 'Pause animation' : 'Play animation'}
        >
          {isPlaying ? <Pause size={18} /> : <Play size={18} />}
        </button>

        <button
          onClick={onRestart}
          className="bg-gray-600 hover:bg-gray-700 text-white p-2 rounded-lg transition-colors"
          aria-label="Restart animation"
        >
          <RotateCcw size={18} />
        </button>

        <button
          onClick={() => setShowSettings(!showSettings)}
          className="bg-gray-400 hover:bg-gray-500 text-white p-2 rounded-lg transition-colors"
          aria-label="Animation settings"
        >
          <Settings size={18} />
        </button>

        {onToggleSound && (
          <button
            onClick={handleToggleSound}
            className="bg-gray-400 hover:bg-gray-500 text-white p-2 rounded-lg transition-colors"
            aria-label={soundEnabled ? 'Mute sounds' : 'Enable sounds'}
          >
            {soundEnabled ? <Volume2 size={18} /> : <VolumeX size={18} />}
          </button>
        )}
      </div>

      {/* Advanced Settings */}
      {showSettings && (
        <div className="border-t pt-4 space-y-3">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Speed: {speed}x
            </label>
            <input
              type="range"
              min="0.25"
              max="2"
              step="0.25"
              value={speed}
              onChange={(e) => handleSpeedChange(parseFloat(e.target.value))}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Seek to time
            </label>
            <input
              type="range"
              min="0"
              max="12000"
              step="100"
              value={(progress / 100) * 12000}
              onChange={(e) => onSeek(parseInt(e.target.value))}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
            />
          </div>
        </div>
      )}
    </div>
  );
};
```

### Keyboard Controls Hook
```typescript
// src/components/animations/NeuralAssemblyEngine/hooks/useKeyboardControls.ts
import { useEffect } from 'react';

interface UseKeyboardControlsOptions {
  onPlay: () => void;
  onPause: () => void;
  onRestart: () => void;
  onSeekForward: () => void;
  onSeekBackward: () => void;
  onToggleControls?: () => void;
  enabled?: boolean;
}

export const useKeyboardControls = (options: UseKeyboardControlsOptions) => {
  const {
    onPlay,
    onPause,
    onRestart,
    onSeekForward,
    onSeekBackward,
    onToggleControls,
    enabled = true
  } = options;

  useEffect(() => {
    if (!enabled) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      // Ignore if user is typing in an input
      if (event.target instanceof HTMLInputElement ||
          event.target instanceof HTMLTextAreaElement) {
        return;
      }

      switch (event.key) {
        case ' ': // Spacebar - play/pause
          event.preventDefault();
          onPlay(); // The component should handle play/pause toggle
          break;
        case 'r': // R - restart
          event.preventDefault();
          onRestart();
          break;
        case 'ArrowRight': // Right arrow - seek forward
          event.preventDefault();
          onSeekForward();
          break;
        case 'ArrowLeft': // Left arrow - seek backward
          event.preventDefault();
          onSeekBackward();
          break;
        case 'c': // C - toggle controls
          if (onToggleControls) {
            event.preventDefault();
            onToggleControls();
          }
          break;
        case 'Escape': // Escape - close controls
          if (onToggleControls) {
            event.preventDefault();
            onToggleControls();
          }
          break;
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [enabled, onPlay, onPause, onRestart, onSeekForward, onSeekBackward, onToggleControls]);
};
```

## 📱 Touch and Gesture Controls

### Touch Controls Hook
```typescript
// src/components/animations/NeuralAssemblyEngine/hooks/useTouchControls.ts
import { useEffect, useRef } from 'react';

interface UseTouchControlsOptions {
  onTap: () => void;
  onDoubleTap: () => void;
  onSwipeLeft: () => void;
  onSwipeRight: () => void;
  onPinch: (scale: number) => void;
  enabled?: boolean;
}

export const useTouchControls = (
  elementRef: React.RefObject<HTMLElement>,
  options: UseTouchControlsOptions
) => {
  const {
    onTap,
    onDoubleTap,
    onSwipeLeft,
    onSwipeRight,
    onPinch,
    enabled = true
  } = options;

  const touchStart = useRef<{ x: number; y: number; time: number } | null>(null);
  const lastTap = useRef<number>(0);
  const initialDistance = useRef<number>(0);

  useEffect(() => {
    const element = elementRef.current;
    if (!element || !enabled) return;

    const handleTouchStart = (event: TouchEvent) => {
      if (event.touches.length === 1) {
        // Single touch
        const touch = event.touches[0];
        touchStart.current = {
          x: touch.clientX,
          y: touch.clientY,
          time: Date.now()
        };
      } else if (event.touches.length === 2) {
        // Two finger touch (pinch)
        const [touch1, touch2] = event.touches;
        initialDistance.current = Math.sqrt(
          Math.pow(touch2.clientX - touch1.clientX, 2) +
          Math.pow(touch2.clientY - touch1.clientY, 2)
        );
      }
    };

    const handleTouchMove = (event: TouchEvent) => {
      if (event.touches.length === 2 && initialDistance.current > 0) {
        // Handle pinch gesture
        const [touch1, touch2] = event.touches;
        const currentDistance = Math.sqrt(
          Math.pow(touch2.clientX - touch1.clientX, 2) +
          Math.pow(touch2.clientY - touch1.clientY, 2)
        );
        const scale = currentDistance / initialDistance.current;
        onPinch(scale);
      }
    };

    const handleTouchEnd = (event: TouchEvent) => {
      if (!touchStart.current) return;

      const touch = event.changedTouches[0];
      const deltaX = touch.clientX - touchStart.current.x;
      const deltaY = touch.clientY - touchStart.current.y;
      const deltaTime = Date.now() - touchStart.current.time;
      const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);

      // Reset pinch state
      if (event.touches.length === 0) {
        initialDistance.current = 0;
      }

      // Determine gesture type
      if (distance < 10 && deltaTime < 300) {
        // Tap gesture
        const now = Date.now();
        if (now - lastTap.current < 300) {
          // Double tap
          onDoubleTap();
          lastTap.current = 0;
        } else {
          // Single tap
          setTimeout(() => {
            if (Date.now() - lastTap.current > 300) {
              onTap();
            }
          }, 300);
          lastTap.current = now;
        }
      } else if (distance > 50 && deltaTime < 500) {
        // Swipe gesture
        if (Math.abs(deltaX) > Math.abs(deltaY)) {
          if (deltaX > 0) {
            onSwipeRight();
          } else {
            onSwipeLeft();
          }
        }
      }

      touchStart.current = null;
    };

    element.addEventListener('touchstart', handleTouchStart, { passive: true });
    element.addEventListener('touchmove', handleTouchMove, { passive: true });
    element.addEventListener('touchend', handleTouchEnd, { passive: true });

    return () => {
      element.removeEventListener('touchstart', handleTouchStart);
      element.removeEventListener('touchmove', handleTouchMove);
      element.removeEventListener('touchend', handleTouchEnd);
    };
  }, [elementRef, enabled, onTap, onDoubleTap, onSwipeLeft, onSwipeRight, onPinch]);
};
```

## ♿ Accessibility Features

### Accessibility Hook
```typescript
// src/components/animations/NeuralAssemblyEngine/hooks/useAccessibility.ts
import { useEffect, useState } from 'react';

export const useAccessibility = () => {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [highContrast, setHighContrast] = useState(false);
  const [focusVisible, setFocusVisible] = useState(false);

  useEffect(() => {
    // Check for reduced motion preference
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const handleMotionChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };

    mediaQuery.addListener(handleMotionChange);

    // Check for high contrast mode
    const contrastQuery = window.matchMedia('(prefers-contrast: high)');
    setHighContrast(contrastQuery.matches);

    const handleContrastChange = (e: MediaQueryListEvent) => {
      setHighContrast(e.matches);
    };

    contrastQuery.addListener(handleContrastChange);

    // Focus visibility detection
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Tab') {
        setFocusVisible(true);
      }
    };

    const handleMouseDown = () => {
      setFocusVisible(false);
    };

    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('mousedown', handleMouseDown);

    return () => {
      mediaQuery.removeListener(handleMotionChange);
      contrastQuery.removeListener(handleContrastChange);
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('mousedown', handleMouseDown);
    };
  }, []);

  return {
    prefersReducedMotion,
    highContrast,
    focusVisible
  };
};
```

### Screen Reader Support
```tsx
// src/components/animations/NeuralAssemblyEngine/components/AccessibilityLayer.tsx
import React from 'react';

interface AccessibilityLayerProps {
  currentPhase: number;
  isPlaying: boolean;
  progress: number;
}

export const AccessibilityLayer: React.FC<AccessibilityLayerProps> = ({
  currentPhase,
  isPlaying,
  progress
}) => {
  const phases = [
    {
      name: 'Chaos',
      description: 'Code fragments scattered chaotically, representing traditional development struggles'
    },
    {
      name: 'Recognition',
      description: 'Elements beginning to organize, discovering agentic programming potential'
    },
    {
      name: 'Formation',
      description: 'AI agent nodes materializing, forming the neural network structure'
    },
    {
      name: 'Connection',
      description: 'Neural pathways connecting, agents learning to communicate and coordinate'
    },
    {
      name: 'Mastery',
      description: 'Complete transformation achieved, demonstrating agentic programming mastery'
    }
  ];

  const currentPhaseInfo = phases[currentPhase] || phases[0];

  return (
    <div className="sr-only" aria-live="polite" aria-atomic="true">
      <h2>Neural Assembly Engine Animation</h2>
      <p>
        An interactive visualization demonstrating the transformation from traditional
        development chaos to structured agentic programming mastery.
      </p>

      <div>
        <h3>Current Status</h3>
        <p>
          Animation is {isPlaying ? 'playing' : 'paused'}.
          Progress: {Math.round(progress)}%
        </p>
        <p>
          Current phase: {currentPhaseInfo.name} - {currentPhaseInfo.description}
        </p>
      </div>

      <div>
        <h3>Controls</h3>
        <p>
          Use spacebar to play or pause the animation.
          Press R to restart.
          Use left and right arrow keys to navigate phases.
          Press C to toggle control panel.
        </p>
      </div>

      <div>
        <h3>Phases</h3>
        <ol>
          {phases.map((phase, index) => (
            <li key={index}>
              <strong>{phase.name}:</strong> {phase.description}
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};
```

## 📊 Analytics Integration

### Analytics Hook
```typescript
// src/components/animations/NeuralAssemblyEngine/hooks/useAnalytics.ts
import { useEffect, useRef } from 'react';

interface AnalyticsEvent {
  event: string;
  data: Record<string, any>;
  timestamp: number;
}

export const useAnalytics = (
  currentPhase: number,
  isPlaying: boolean,
  progress: number
) => {
  const startTime = useRef<number | null>(null);
  const phaseStartTimes = useRef<Record<number, number>>({});
  const engagementEvents = useRef<AnalyticsEvent[]>([]);

  // Track animation start
  useEffect(() => {
    if (isPlaying && startTime.current === null) {
      startTime.current = Date.now();
      trackEvent('neural_animation_started', {
        timestamp: startTime.current
      });
    }
  }, [isPlaying]);

  // Track phase changes
  useEffect(() => {
    const now = Date.now();
    phaseStartTimes.current[currentPhase] = now;

    trackEvent('neural_phase_entered', {
      phase: currentPhase,
      phaseName: getPhaseNames()[currentPhase],
      timestamp: now,
      progress
    });
  }, [currentPhase, progress]);

  // Track completion
  useEffect(() => {
    if (progress >= 100 && startTime.current) {
      const totalTime = Date.now() - startTime.current;
      trackEvent('neural_animation_completed', {
        totalTime,
        averagePhaseTime: totalTime / 5,
        engagementScore: calculateEngagementScore(),
        timestamp: Date.now()
      });
    }
  }, [progress]);

  const trackEvent = (event: string, data: Record<string, any>) => {
    const analyticsEvent: AnalyticsEvent = {
      event,
      data,
      timestamp: Date.now()
    };

    engagementEvents.current.push(analyticsEvent);

    // Send to analytics service (customize based on your analytics provider)
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', event, {
        custom_parameter_1: data.phase,
        custom_parameter_2: data.timestamp,
        ...data
      });
    }

    // Custom event for internal tracking
    window.dispatchEvent(new CustomEvent('neuralAnalytics', {
      detail: analyticsEvent
    }));
  };

  const calculateEngagementScore = (): number => {
    const events = engagementEvents.current;
    if (events.length === 0) return 0;

    const totalTime = Date.now() - (startTime.current || 0);
    const phaseCompletions = events.filter(e => e.event === 'neural_phase_entered').length;
    const interactions = events.filter(e => e.event.includes('interaction')).length;

    // Simple engagement scoring (0-100)
    const timeScore = Math.min(totalTime / 12000, 1) * 40; // 40 points for full duration
    const phaseScore = (phaseCompletions / 5) * 40; // 40 points for all phases
    const interactionScore = Math.min(interactions / 3, 1) * 20; // 20 points for interactions

    return Math.round(timeScore + phaseScore + interactionScore);
  };

  const getPhaseNames = () => [
    'Chaos', 'Recognition', 'Formation', 'Connection', 'Mastery'
  ];

  return {
    trackEvent,
    getEngagementScore: calculateEngagementScore,
    getAnalyticsData: () => ({
      events: engagementEvents.current,
      startTime: startTime.current,
      phaseStartTimes: phaseStartTimes.current
    })
  };
};
```

## 🎵 Sound Integration (Optional)

### Sound Effects Hook
```typescript
// src/components/animations/NeuralAssemblyEngine/hooks/useSoundEffects.ts
import { useEffect, useRef, useState } from 'react';

interface SoundEffect {
  name: string;
  url: string;
  volume: number;
}

const soundEffects: SoundEffect[] = [
  { name: 'phase_transition', url: '/sounds/neural/transition.mp3', volume: 0.3 },
  { name: 'node_activation', url: '/sounds/neural/activation.mp3', volume: 0.2 },
  { name: 'connection_form', url: '/sounds/neural/connection.mp3', volume: 0.25 },
  { name: 'mastery_complete', url: '/sounds/neural/completion.mp3', volume: 0.4 }
];

export const useSoundEffects = (enabled: boolean = false) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const audioCache = useRef<Map<string, HTMLAudioElement>>(new Map());

  useEffect(() => {
    if (!enabled) return;

    // Preload sound effects
    const loadSounds = async () => {
      const loadPromises = soundEffects.map(async (sound) => {
        const audio = new Audio(sound.url);
        audio.volume = sound.volume;
        audio.preload = 'auto';

        return new Promise<void>((resolve) => {
          audio.addEventListener('canplaythrough', () => resolve());
          audio.addEventListener('error', () => resolve()); // Don't fail if sound doesn't load
        });
      });

      await Promise.all(loadPromises);
      setIsLoaded(true);
    };

    loadSounds();
  }, [enabled]);

  const playSound = (soundName: string) => {
    if (!enabled || !isLoaded) return;

    const audio = audioCache.current.get(soundName);
    if (audio) {
      audio.currentTime = 0;
      audio.play().catch(error => {
        console.warn('Could not play sound:', error);
      });
    }
  };

  const stopAllSounds = () => {
    audioCache.current.forEach(audio => {
      audio.pause();
      audio.currentTime = 0;
    });
  };

  return {
    playSound,
    stopAllSounds,
    isLoaded
  };
};
```

## 🔧 Integration Component

### Complete Interactive Layer
```tsx
// src/components/animations/NeuralAssemblyEngine/components/InteractiveLayer.tsx
import React, { useState } from 'react';
import { useKeyboardControls } from '../hooks/useKeyboardControls';
import { useTouchControls } from '../hooks/useTouchControls';
import { useAccessibility } from '../hooks/useAccessibility';
import { useAnalytics } from '../hooks/useAnalytics';
import { useSoundEffects } from '../hooks/useSoundEffects';
import { AnimationControls } from './AnimationControls';
import { AccessibilityLayer } from './AccessibilityLayer';

interface InteractiveLayerProps {
  elementRef: React.RefObject<HTMLDivElement>;
  isPlaying: boolean;
  currentPhase: number;
  progress: number;
  onPlay: () => void;
  onPause: () => void;
  onRestart: () => void;
  onSeek: (time: number) => void;
  onSpeedChange: (speed: number) => void;
}

export const InteractiveLayer: React.FC<InteractiveLayerProps> = ({
  elementRef,
  isPlaying,
  currentPhase,
  progress,
  onPlay,
  onPause,
  onRestart,
  onSeek,
  onSpeedChange
}) => {
  const [showControls, setShowControls] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(false);

  const { prefersReducedMotion, highContrast, focusVisible } = useAccessibility();
  const { playSound } = useSoundEffects(soundEnabled);
  const { trackEvent } = useAnalytics(currentPhase, isPlaying, progress);

  // Keyboard controls
  useKeyboardControls({
    onPlay: isPlaying ? onPause : onPlay,
    onPause,
    onRestart,
    onSeekForward: () => onSeek((progress / 100) * 12000 + 1000),
    onSeekBackward: () => onSeek((progress / 100) * 12000 - 1000),
    onToggleControls: () => setShowControls(!showControls),
    enabled: true
  });

  // Touch controls
  useTouchControls(elementRef, {
    onTap: () => {
      if (isPlaying) onPause(); else onPlay();
      trackEvent('neural_interaction', { type: 'tap' });
    },
    onDoubleTap: () => {
      onRestart();
      trackEvent('neural_interaction', { type: 'double_tap' });
    },
    onSwipeLeft: () => {
      const nextTime = Math.min((progress / 100) * 12000 + 2000, 12000);
      onSeek(nextTime);
      trackEvent('neural_interaction', { type: 'swipe_left' });
    },
    onSwipeRight: () => {
      const prevTime = Math.max((progress / 100) * 12000 - 2000, 0);
      onSeek(prevTime);
      trackEvent('neural_interaction', { type: 'swipe_right' });
    },
    onPinch: (scale) => {
      // Could be used for zoom functionality in the future
      trackEvent('neural_interaction', { type: 'pinch', scale });
    },
    enabled: true
  });

  // Play sounds on phase changes
  React.useEffect(() => {
    if (soundEnabled && currentPhase > 0) {
      playSound('phase_transition');
    }
  }, [currentPhase, soundEnabled, playSound]);

  const handleToggleSound = () => {
    setSoundEnabled(!soundEnabled);
    trackEvent('neural_interaction', { type: 'toggle_sound', enabled: !soundEnabled });
  };

  return (
    <>
      {/* Accessibility layer for screen readers */}
      <AccessibilityLayer
        currentPhase={currentPhase}
        isPlaying={isPlaying}
        progress={progress}
      />

      {/* Animation controls */}
      <AnimationControls
        isPlaying={isPlaying}
        currentPhase={currentPhase}
        progress={progress}
        showControls={showControls}
        onPlay={onPlay}
        onPause={onPause}
        onRestart={onRestart}
        onSeek={onSeek}
        onSpeedChange={onSpeedChange}
        onToggleSound={handleToggleSound}
        className={`
          fixed bottom-4 right-4 z-50
          ${focusVisible ? 'focus-visible' : ''}
          ${highContrast ? 'high-contrast' : ''}
          ${prefersReducedMotion ? 'reduced-motion' : ''}
        `}
      />

      {/* Control toggle button */}
      <button
        onClick={() => setShowControls(!showControls)}
        className="fixed bottom-4 left-4 bg-black bg-opacity-50 hover:bg-opacity-70 text-white p-2 rounded-full z-50"
        aria-label="Toggle animation controls"
      >
        ⚙️
      </button>
    </>
  );
};
```

## ✅ Deliverables Checklist

- [ ] Intersection Observer integration implemented
- [ ] Animation controls component created
- [ ] Keyboard navigation support added
- [ ] Touch and gesture controls implemented
- [ ] Accessibility features completed
- [ ] Analytics tracking integrated
- [ ] Sound effects support added (optional)
- [ ] Reduced motion preference handling
- [ ] Screen reader compatibility verified

## 🔗 Next Steps
After completing this subtask, proceed to **Subtask 5: Integration & Testing** to implement website integration and comprehensive quality assurance for the Neural Assembly Engine.