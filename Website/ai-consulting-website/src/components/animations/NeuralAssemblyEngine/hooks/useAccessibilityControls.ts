/**
 * Accessibility Controls Hook - Neural Assembly Engine
 * Keyboard navigation, screen reader support, and accessibility features
 */

import { useEffect, useCallback, useState, useRef } from 'react';
import { useTranslations } from 'next-intl';

export interface AccessibilityPreferences {
  /** Reduced motion preference */
  prefersReducedMotion: boolean;
  /** High contrast preference */
  prefersHighContrast: boolean;
  /** Large text preference */
  prefersLargeText: boolean;
  /** Screen reader detected */
  hasScreenReader: boolean;
  /** Keyboard-only navigation */
  keyboardOnly: boolean;
  /** Voice control enabled */
  voiceControlEnabled: boolean;
}

export interface AccessibilityState {
  /** Current focus element */
  focusedElement: string | null;
  /** Announcement queue */
  announcements: string[];
  /** Current live region content */
  liveRegionContent: string;
  /** Navigation help visible */
  showKeyboardHelp: boolean;
  /** High contrast mode active */
  highContrastActive: boolean;
}

export interface KeyboardShortcuts {
  /** Play/pause animation */
  PLAY_PAUSE: string[];
  /** Restart animation */
  RESTART: string[];
  /** Previous phase */
  PREVIOUS_PHASE: string[];
  /** Next phase */
  NEXT_PHASE: string[];
  /** Seek backward */
  SEEK_BACKWARD: string[];
  /** Seek forward */
  SEEK_FORWARD: string[];
  /** Jump to phase */
  JUMP_TO_PHASE: string[];
  /** Toggle help */
  TOGGLE_HELP: string[];
  /** Focus controls */
  FOCUS_CONTROLS: string[];
}

export interface UseAccessibilityControlsOptions {
  /** Timeline control interface */
  timelineControls?: {
    play: () => void;
    pause: () => void;
    restart: () => void;
    seek: (time: number) => void;
    goToPhase: (phase: number) => void;
  };
  /** Current animation state */
  animationState?: {
    isPlaying: boolean;
    currentPhase: number;
    progress: number;
    duration: number;
  };
  /** Enable voice announcements */
  enableAnnouncements?: boolean;
  /** Custom keyboard shortcuts */
  customShortcuts?: Partial<KeyboardShortcuts>;
  /** Announcement callback */
  onAnnouncement?: (message: string) => void;
}

export function useAccessibilityControls(options: UseAccessibilityControlsOptions = {}) {
  const {
    timelineControls,
    animationState,
    enableAnnouncements = true,
    customShortcuts = {},
    onAnnouncement
  } = options;

  const t = useTranslations('neuralAnimation.accessibility');

  // Refs
  const announcementTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const lastAnnouncementRef = useRef<string>('');

  // State
  const [preferences, setPreferences] = useState<AccessibilityPreferences>({
    prefersReducedMotion: false,
    prefersHighContrast: false,
    prefersLargeText: false,
    hasScreenReader: false,
    keyboardOnly: false,
    voiceControlEnabled: false
  });

  const [state, setState] = useState<AccessibilityState>({
    focusedElement: null,
    announcements: [],
    liveRegionContent: '',
    showKeyboardHelp: false,
    highContrastActive: false
  });

  // Default keyboard shortcuts
  const defaultShortcuts: KeyboardShortcuts = {
    PLAY_PAUSE: ['Space', 'KeyK'],
    RESTART: ['KeyR'],
    PREVIOUS_PHASE: ['ArrowLeft', 'KeyJ'],
    NEXT_PHASE: ['ArrowRight', 'KeyL'],
    SEEK_BACKWARD: ['Comma'],
    SEEK_FORWARD: ['Period'],
    JUMP_TO_PHASE: ['Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5'],
    TOGGLE_HELP: ['KeyH', 'F1'],
    FOCUS_CONTROLS: ['KeyC']
  };

  const shortcuts = { ...defaultShortcuts, ...customShortcuts };

  // Detect accessibility preferences
  const detectAccessibilityPreferences = useCallback(() => {
    if (typeof window === 'undefined') return;

    const newPreferences: AccessibilityPreferences = {
      prefersReducedMotion: window.matchMedia('(prefers-reduced-motion: reduce)').matches,
      prefersHighContrast: window.matchMedia('(prefers-contrast: high)').matches,
      prefersLargeText: window.matchMedia('(min-resolution: 1.5dppx)').matches,
      hasScreenReader: !!(window.speechSynthesis || (window as any).navigator?.userAgent?.includes('NVDA|JAWS|ORCA')),
      keyboardOnly: false, // Will be detected through interaction
      voiceControlEnabled: !!(window as any).webkitSpeechRecognition || !!(window as any).SpeechRecognition
    };

    setPreferences(prev => ({ ...prev, ...newPreferences }));

    // Update high contrast state
    setState(prev => ({
      ...prev,
      highContrastActive: newPreferences.prefersHighContrast
    }));
  }, []);

  // Create screen reader announcement
  const announceToScreenReader = useCallback((message: string, priority: 'polite' | 'assertive' = 'polite') => {
    if (!enableAnnouncements || !message || message === lastAnnouncementRef.current) return;

    lastAnnouncementRef.current = message;

    // Clear previous timeout
    if (announcementTimeoutRef.current) {
      clearTimeout(announcementTimeoutRef.current);
    }

    // Update live region
    setState(prev => ({
      ...prev,
      liveRegionContent: message,
      announcements: [...prev.announcements.slice(-4), message] // Keep last 5 announcements
    }));

    // Call custom announcement callback
    onAnnouncement?.(message);

    // Clear announcement after delay
    announcementTimeoutRef.current = setTimeout(() => {
      setState(prev => ({
        ...prev,
        liveRegionContent: ''
      }));
    }, 3000);

    console.log(`Screen reader announcement (${priority}):`, message);
  }, [enableAnnouncements, onAnnouncement]);

  // Handle phase changes
  const announcePhaseChange = useCallback((phase: number, phaseName: string) => {
    const phaseNames = ['Chaos', 'Reconnaissance', 'Formation', 'Connexion', 'Maîtrise'];
    const businessImpacts = [
      'Code traditionnel fragmenté',
      'IA identifie les modèles',
      'Formation du réseau neural',
      'Collaboration parfaite des agents',
      'Maîtrise de la programmation agentique'
    ];

    const announcement = t('phaseChanged', {
      phase: phase + 1,
      name: phaseNames[phase] || phaseName,
      description: businessImpacts[phase] || ''
    });

    announceToScreenReader(announcement, 'polite');
  }, [t, announceToScreenReader]);

  // Handle playback state changes
  const announcePlaybackChange = useCallback((isPlaying: boolean) => {
    const message = isPlaying ? t('animationStarted') : t('animationPaused');
    announceToScreenReader(message, 'polite');
  }, [t, announceToScreenReader]);

  // Handle progress updates
  const announceProgress = useCallback((progress: number) => {
    const percentage = Math.round(progress * 100);
    if (percentage % 25 === 0 && percentage > 0) { // Announce at quarter intervals
      const message = t('progressUpdate', { percentage });
      announceToScreenReader(message, 'polite');
    }
  }, [t, announceToScreenReader]);

  // Keyboard event handler
  const handleKeyDown = useCallback((event: KeyboardEvent) => {
    // Ignore if typing in input fields
    if ((event.target as HTMLElement)?.tagName?.toLowerCase() === 'input') return;

    const { code, ctrlKey, altKey, shiftKey } = event;

    // Check for keyboard-only navigation
    if (['Tab', 'ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(code)) {
      setPreferences(prev => ({ ...prev, keyboardOnly: true }));
    }

    // Handle shortcuts
    if (shortcuts.PLAY_PAUSE.includes(code)) {
      event.preventDefault();
      if (timelineControls) {
        if (animationState?.isPlaying) {
          timelineControls.pause();
          announcePlaybackChange(false);
        } else {
          timelineControls.play();
          announcePlaybackChange(true);
        }
      }
      return;
    }

    if (shortcuts.RESTART.includes(code)) {
      event.preventDefault();
      timelineControls?.restart();
      announceToScreenReader(t('animationRestarted'), 'polite');
      return;
    }

    if (shortcuts.PREVIOUS_PHASE.includes(code) && timelineControls && animationState) {
      event.preventDefault();
      const newPhase = Math.max(0, animationState.currentPhase - 1);
      timelineControls.goToPhase(newPhase);
      return;
    }

    if (shortcuts.NEXT_PHASE.includes(code) && timelineControls && animationState) {
      event.preventDefault();
      const newPhase = Math.min(4, animationState.currentPhase + 1);
      timelineControls.goToPhase(newPhase);
      return;
    }

    if (shortcuts.SEEK_BACKWARD.includes(code) && timelineControls && animationState) {
      event.preventDefault();
      const newTime = Math.max(0, animationState.progress * animationState.duration - 1000);
      timelineControls.seek(newTime);
      return;
    }

    if (shortcuts.SEEK_FORWARD.includes(code) && timelineControls && animationState) {
      event.preventDefault();
      const newTime = Math.min(animationState.duration, animationState.progress * animationState.duration + 1000);
      timelineControls.seek(newTime);
      return;
    }

    // Jump to specific phases (1-5)
    if (shortcuts.JUMP_TO_PHASE.includes(code) && timelineControls) {
      event.preventDefault();
      const phaseNumber = parseInt(code.replace('Digit', ''));
      if (phaseNumber >= 1 && phaseNumber <= 5) {
        const phaseIndex = phaseNumber - 1;
        timelineControls.goToPhase(phaseIndex);
        announcePhaseChange(phaseIndex, '');
      }
      return;
    }

    if (shortcuts.TOGGLE_HELP.includes(code)) {
      event.preventDefault();
      setState(prev => ({
        ...prev,
        showKeyboardHelp: !prev.showKeyboardHelp
      }));
      announceToScreenReader(
        state.showKeyboardHelp ? t('keyboardHelpHidden') : t('keyboardHelpShown'),
        'polite'
      );
      return;
    }

    if (shortcuts.FOCUS_CONTROLS.includes(code)) {
      event.preventDefault();
      const controlsElement = document.querySelector('[data-neural-controls]') as HTMLElement;
      if (controlsElement) {
        controlsElement.focus();
        announceToScreenReader(t('controlsFocused'), 'polite');
      }
      return;
    }

    // High contrast toggle (Ctrl+Alt+H)
    if (ctrlKey && altKey && code === 'KeyH') {
      event.preventDefault();
      setState(prev => ({
        ...prev,
        highContrastActive: !prev.highContrastActive
      }));
      announceToScreenReader(
        state.highContrastActive ? t('highContrastDisabled') : t('highContrastEnabled'),
        'polite'
      );
      return;
    }
  }, [shortcuts, timelineControls, animationState, announcePlaybackChange, announceToScreenReader, announcePhaseChange, t, state.showKeyboardHelp, state.highContrastActive]);

  // Handle focus changes
  const handleFocusChange = useCallback((elementId: string) => {
    setState(prev => ({
      ...prev,
      focusedElement: elementId
    }));
  }, []);

  // Get keyboard help content
  const getKeyboardHelp = useCallback(() => {
    return [
      { key: t('spaceKey'), action: t('playPauseAction') },
      { key: t('rKey'), action: t('restartAction') },
      { key: t('leftRightArrows'), action: t('navigatePhasesAction') },
      { key: t('commaPeroid'), action: t('seekAction') },
      { key: t('numberKeys'), action: t('jumpToPhaseAction') },
      { key: t('hKey'), action: t('toggleHelpAction') },
      { key: t('cKey'), action: t('focusControlsAction') },
      { key: t('ctrlAltH'), action: t('toggleHighContrastAction') }
    ];
  }, [t]);

  // Monitor animation state changes
  useEffect(() => {
    if (!animationState) return;

    // Announce phase changes
    const currentPhase = animationState.currentPhase;
    announcePhaseChange(currentPhase, '');
  }, [animationState?.currentPhase, announcePhaseChange]);

  // Set up event listeners
  useEffect(() => {
    if (typeof window === 'undefined') return;

    detectAccessibilityPreferences();

    // Keyboard events
    document.addEventListener('keydown', handleKeyDown);

    // Media query listeners
    const reducedMotionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const highContrastQuery = window.matchMedia('(prefers-contrast: high)');

    const handleReducedMotionChange = (e: MediaQueryListEvent) => {
      setPreferences(prev => ({ ...prev, prefersReducedMotion: e.matches }));
    };

    const handleHighContrastChange = (e: MediaQueryListEvent) => {
      setPreferences(prev => ({ ...prev, prefersHighContrast: e.matches }));
      setState(prev => ({ ...prev, highContrastActive: e.matches }));
    };

    reducedMotionQuery.addEventListener('change', handleReducedMotionChange);
    highContrastQuery.addEventListener('change', handleHighContrastChange);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      reducedMotionQuery.removeEventListener('change', handleReducedMotionChange);
      highContrastQuery.removeEventListener('change', handleHighContrastChange);
    };
  }, [handleKeyDown, detectAccessibilityPreferences]);

  // Cleanup
  useEffect(() => {
    return () => {
      if (announcementTimeoutRef.current) {
        clearTimeout(announcementTimeoutRef.current);
      }
    };
  }, []);

  return {
    // State
    preferences,
    state,

    // Actions
    announceToScreenReader,
    announcePhaseChange,
    announcePlaybackChange,
    announceProgress,
    handleFocusChange,

    // Utilities
    getKeyboardHelp,
    shortcuts,

    // Computed values
    shouldReduceMotion: preferences.prefersReducedMotion,
    shouldUseHighContrast: state.highContrastActive,
    isKeyboardUser: preferences.keyboardOnly,
    hasScreenReaderSupport: preferences.hasScreenReader,

    // ARIA attributes helpers
    getAriaLabel: (key: string, values?: Record<string, any>) => t(key, values),
    getLiveRegionProps: () => ({
      'aria-live': 'polite' as const,
      'aria-atomic': true,
      'aria-relevant': 'text' as const
    }),

    // Focus management
    focusElement: (selector: string) => {
      const element = document.querySelector(selector) as HTMLElement;
      if (element) {
        element.focus();
        announceToScreenReader(t('elementFocused', { element: selector }), 'polite');
      }
    }
  };
}

export default useAccessibilityControls;