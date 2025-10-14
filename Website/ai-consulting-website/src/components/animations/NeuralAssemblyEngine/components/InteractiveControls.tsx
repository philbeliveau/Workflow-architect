/**
 * Interactive Controls - Neural Assembly Engine
 * Main user control interface for the agentic programming transformation animation
 * French-first implementation with mobile optimization
 */

'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { useTranslations } from 'next-intl';
import { Play, Pause, RotateCcw, Volume2, VolumeX, Settings, ChevronUp, ChevronDown } from 'lucide-react';
import { useTimelineControl, type UseTimelineControlOptions } from '../hooks/useTimelineControl';
import { getPhaseDefinition, getPhaseNames } from '../data/colorScheme';
import { PlaybackControls } from './PlaybackControls';
import { ProgressScrubber } from './ProgressScrubber';
import { PhaseNavigator } from './PhaseNavigator';
import { QualitySelector } from './QualitySelector';
import { PhaseExplainer } from './interactive/PhaseExplainer';
import { ViewModeToggle } from './interactive/ViewModeToggle';
import { ResponsiveControls } from './interactive/ResponsiveControls';

export interface InteractiveControlsProps {
  /** Timeline control options */
  timelineOptions?: UseTimelineControlOptions;
  /** Initial view mode */
  initialViewMode?: 'auto' | 'manual' | 'showcase';
  /** Show advanced controls */
  showAdvancedControls?: boolean;
  /** Mobile-first responsive behavior */
  isMobile?: boolean;
  /** Accessibility mode */
  accessibilityMode?: boolean;
  /** Custom CSS classes */
  className?: string;
  /** Control panel position */
  position?: 'bottom' | 'top' | 'floating';
  /** Theme variant */
  theme?: 'light' | 'dark' | 'auto';
}

export function InteractiveControls({
  timelineOptions = {},
  initialViewMode = 'auto',
  showAdvancedControls = true,
  isMobile = false,
  accessibilityMode = false,
  className = '',
  position = 'bottom',
  theme = 'auto'
}: InteractiveControlsProps) {
  const t = useTranslations('neuralAnimation');

  // State management
  const [viewMode, setViewMode] = useState<'auto' | 'manual' | 'showcase'>(initialViewMode);
  const [isControlsVisible, setIsControlsVisible] = useState(true);
  const [isCollapsed, setIsCollapsed] = useState(isMobile);
  const [isMuted, setIsMuted] = useState(false);
  const [autoHideTimer, setAutoHideTimer] = useState<NodeJS.Timeout | null>(null);

  // Timeline control integration
  const timeline = useTimelineControl({
    autoplay: viewMode === 'auto',
    onPhaseChange: (phaseIndex, phaseName) => {
      console.log(`Phase changed: ${phaseName} (${phaseIndex})`);
      // Announce phase change for screen readers
      if (accessibilityMode) {
        announcePhaseChange(phaseIndex, phaseName);
      }
    },
    onComplete: () => {
      if (viewMode === 'auto') {
        // Show call-to-action after completion
        handleAnimationComplete();
      }
    },
    onProgress: (progress) => {
      // Update any progress-dependent UI
    },
    ...timelineOptions
  });

  // Auto-hide controls on autoplay
  const resetAutoHideTimer = useCallback(() => {
    if (autoHideTimer) {
      clearTimeout(autoHideTimer);
    }

    if (viewMode === 'auto' && timeline.isPlaying) {
      const timer = setTimeout(() => {
        setIsControlsVisible(false);
      }, 3000); // Hide after 3 seconds of inactivity
      setAutoHideTimer(timer);
    }
  }, [autoHideTimer, viewMode, timeline.isPlaying]);

  // Handle user interaction
  const handleUserInteraction = useCallback(() => {
    setIsControlsVisible(true);
    resetAutoHideTimer();

    // If auto mode and user interacts, pause and switch to manual
    if (viewMode === 'auto' && timeline.isPlaying) {
      timeline.controls.pause();
      setViewMode('manual');
    }
  }, [viewMode, timeline, resetAutoHideTimer]);

  // Handle view mode change
  const handleViewModeChange = useCallback((mode: 'auto' | 'manual' | 'showcase') => {
    setViewMode(mode);

    switch (mode) {
      case 'auto':
        timeline.controls.restart();
        resetAutoHideTimer();
        break;
      case 'manual':
        timeline.controls.pause();
        setIsControlsVisible(true);
        if (autoHideTimer) clearTimeout(autoHideTimer);
        break;
      case 'showcase':
        timeline.controls.restart();
        setIsControlsVisible(false);
        break;
    }
  }, [timeline.controls, resetAutoHideTimer, autoHideTimer]);

  // Handle animation completion
  const handleAnimationComplete = useCallback(() => {
    // Show completion message and CTA
    console.log('Animation completed - showing CTA');
    setIsControlsVisible(true);
  }, []);

  // Screen reader announcements
  const announcePhaseChange = useCallback((phaseIndex: number, phaseName: string) => {
    const announcement = t('phaseAnnouncement', {
      phase: phaseIndex + 1,
      name: phaseName
    });

    // Create announcement for screen readers
    const announcement_el = document.createElement('div');
    announcement_el.setAttribute('aria-live', 'polite');
    announcement_el.setAttribute('aria-atomic', 'true');
    announcement_el.style.position = 'absolute';
    announcement_el.style.left = '-10000px';
    announcement_el.textContent = announcement;
    document.body.appendChild(announcement_el);

    setTimeout(() => {
      document.body.removeChild(announcement_el);
    }, 1000);
  }, [t]);

  // Keyboard event handling
  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (!accessibilityMode) return;

      switch (event.code) {
        case 'Space':
          event.preventDefault();
          if (timeline.isPlaying) {
            timeline.controls.pause();
          } else {
            timeline.controls.play();
          }
          handleUserInteraction();
          break;
        case 'ArrowLeft':
          event.preventDefault();
          timeline.controls.seek(Math.max(0, timeline.progress * timeline.duration - 1000));
          handleUserInteraction();
          break;
        case 'ArrowRight':
          event.preventDefault();
          timeline.controls.seek(Math.min(timeline.duration, timeline.progress * timeline.duration + 1000));
          handleUserInteraction();
          break;
        case 'KeyR':
          event.preventDefault();
          timeline.controls.restart();
          handleUserInteraction();
          break;
        case 'Digit1':
        case 'Digit2':
        case 'Digit3':
        case 'Digit4':
        case 'Digit5':
          event.preventDefault();
          const phaseIndex = parseInt(event.code.replace('Digit', '')) - 1;
          timeline.controls.goToPhase(phaseIndex);
          handleUserInteraction();
          break;
      }
    };

    if (accessibilityMode) {
      document.addEventListener('keydown', handleKeyPress);
    }

    return () => {
      if (accessibilityMode) {
        document.removeEventListener('keydown', handleKeyPress);
      }
    };
  }, [accessibilityMode, timeline, handleUserInteraction]);

  // Auto-hide timer management
  useEffect(() => {
    return () => {
      if (autoHideTimer) {
        clearTimeout(autoHideTimer);
      }
    };
  }, [autoHideTimer]);

  // Mouse movement detection for auto-hide
  useEffect(() => {
    const handleMouseMove = () => {
      if (viewMode === 'auto') {
        handleUserInteraction();
      }
    };

    if (viewMode === 'auto') {
      document.addEventListener('mousemove', handleMouseMove);
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, [viewMode, handleUserInteraction]);

  // Render responsive controls for mobile
  if (isMobile) {
    return (
      <ResponsiveControls
        timeline={timeline}
        viewMode={viewMode}
        onViewModeChange={handleViewModeChange}
        onUserInteraction={handleUserInteraction}
        isVisible={isControlsVisible}
        className={className}
        theme={theme}
      />
    );
  }

  const controlsClasses = [
    'neural-interactive-controls',
    `neural-controls-${position}`,
    `neural-controls-${theme}`,
    isControlsVisible ? 'neural-controls-visible' : 'neural-controls-hidden',
    isCollapsed ? 'neural-controls-collapsed' : 'neural-controls-expanded',
    className
  ].filter(Boolean).join(' ');

  return (
    <div
      className={controlsClasses}
      role="region"
      aria-label={t('controlsLabel')}
      onMouseEnter={handleUserInteraction}
      onFocus={handleUserInteraction}
    >
      {/* Phase Explainer - Current phase description */}
      {isControlsVisible && (
        <PhaseExplainer
          currentPhase={timeline.currentPhase}
          progress={timeline.progress}
          isPlaying={timeline.isPlaying}
          className="neural-phase-explainer"
        />
      )}

      {/* Main Control Panel */}
      <div className="neural-control-panel">
        {/* Collapse/Expand Toggle */}
        <button
          className="neural-collapse-toggle"
          onClick={() => setIsCollapsed(!isCollapsed)}
          aria-label={isCollapsed ? t('expandControls') : t('collapseControls')}
          title={isCollapsed ? t('expandControls') : t('collapseControls')}
        >
          {isCollapsed ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
        </button>

        {!isCollapsed && (
          <>
            {/* View Mode Toggle */}
            <ViewModeToggle
              currentMode={viewMode}
              onModeChange={handleViewModeChange}
              className="neural-view-mode"
            />

            {/* Progress Scrubber with Phase Markers */}
            <ProgressScrubber
              progress={timeline.progress}
              duration={timeline.duration}
              currentPhase={timeline.currentPhase}
              onSeek={timeline.controls.seek}
              onPhaseClick={timeline.controls.goToPhase}
              onUserInteraction={handleUserInteraction}
              className="neural-progress-scrubber"
            />

            {/* Playback Controls */}
            <PlaybackControls
              isPlaying={timeline.isPlaying}
              onPlay={timeline.controls.play}
              onPause={timeline.controls.pause}
              onRestart={timeline.controls.restart}
              onUserInteraction={handleUserInteraction}
              className="neural-playback-controls"
            />

            {/* Phase Navigator */}
            <PhaseNavigator
              currentPhase={timeline.currentPhase}
              phases={getPhaseNames()}
              onPhaseSelect={timeline.controls.goToPhase}
              onUserInteraction={handleUserInteraction}
              className="neural-phase-navigator"
            />

            {/* Advanced Controls */}
            {showAdvancedControls && (
              <div className="neural-advanced-controls">
                {/* Quality Selector */}
                <QualitySelector
                  onQualityChange={(quality) => {
                    console.log('Quality changed:', quality);
                    // Implement quality change logic
                  }}
                  className="neural-quality-selector"
                />

                {/* Volume Control */}
                <button
                  className="neural-volume-control"
                  onClick={() => setIsMuted(!isMuted)}
                  aria-label={isMuted ? t('unmute') : t('mute')}
                  title={isMuted ? t('unmute') : t('mute')}
                >
                  {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
                </button>
              </div>
            )}
          </>
        )}
      </div>

      {/* Accessibility Instructions */}
      {accessibilityMode && (
        <div className="neural-accessibility-help" role="complementary">
          <h3 className="sr-only">{t('keyboardShortcuts')}</h3>
          <ul className="sr-only">
            <li>{t('spaceKey')}: {t('playPause')}</li>
            <li>{t('arrowKeys')}: {t('seekTimeline')}</li>
            <li>{t('numberKeys')}: {t('jumpToPhase')}</li>
            <li>{t('rKey')}: {t('restart')}</li>
          </ul>
        </div>
      )}

      {/* CSS Styles */}
      <style jsx>{`
        .neural-interactive-controls {
          position: relative;
          width: 100%;
          z-index: 100;
          font-family: 'Inter', system-ui, sans-serif;
          font-weight: 300; /* NEWCODE typography standard */
          user-select: none;
          transition: all 0.3s ease;
        }

        .neural-controls-bottom {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
        }

        .neural-controls-top {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
        }

        .neural-controls-floating {
          position: fixed;
          bottom: 20px;
          left: 50%;
          transform: translateX(-50%);
          max-width: 90vw;
          border-radius: 12px;
          backdrop-filter: blur(10px);
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
        }

        .neural-controls-light {
          background: rgba(248, 250, 252, 0.95);
          color: #000000;
          border-top: 1px solid rgba(0, 0, 0, 0.1);
        }

        .neural-controls-dark {
          background: rgba(26, 26, 26, 0.95);
          color: #ffffff;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
        }

        .neural-controls-visible {
          opacity: 1;
          transform: translateY(0);
        }

        .neural-controls-hidden {
          opacity: 0;
          transform: translateY(100%);
        }

        .neural-control-panel {
          display: flex;
          align-items: center;
          gap: 16px;
          padding: 12px 20px;
          min-height: 60px;
        }

        .neural-controls-collapsed .neural-control-panel {
          padding: 8px 20px;
          min-height: 40px;
        }

        .neural-collapse-toggle {
          background: none;
          border: none;
          color: inherit;
          cursor: pointer;
          padding: 4px;
          border-radius: 4px;
          transition: background-color 0.2s ease;
        }

        .neural-collapse-toggle:hover {
          background: rgba(0, 0, 0, 0.1);
        }

        .neural-controls-dark .neural-collapse-toggle:hover {
          background: rgba(255, 255, 255, 0.1);
        }

        .neural-phase-explainer {
          position: absolute;
          top: -80px;
          left: 20px;
          right: 20px;
          background: inherit;
          border-radius: 8px;
          padding: 12px 16px;
          backdrop-filter: inherit;
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .neural-advanced-controls {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-left: auto;
        }

        .neural-volume-control {
          background: none;
          border: none;
          color: inherit;
          cursor: pointer;
          padding: 8px;
          border-radius: 6px;
          transition: background-color 0.2s ease;
        }

        .neural-volume-control:hover {
          background: rgba(0, 0, 0, 0.1);
        }

        .neural-controls-dark .neural-volume-control:hover {
          background: rgba(255, 255, 255, 0.1);
        }

        .neural-accessibility-help .sr-only {
          position: absolute;
          left: -10000px;
          width: 1px;
          height: 1px;
          overflow: hidden;
        }

        /* Responsive adjustments */
        @media (max-width: 768px) {
          .neural-control-panel {
            flex-wrap: wrap;
            gap: 12px;
            padding: 10px 16px;
          }

          .neural-phase-explainer {
            top: -60px;
            left: 16px;
            right: 16px;
            font-size: 14px;
          }
        }

        /* Focus styles for accessibility */
        .neural-interactive-controls button:focus,
        .neural-interactive-controls [role="button"]:focus {
          outline: 2px solid #0088ff;
          outline-offset: 2px;
        }

        .neural-controls-dark button:focus,
        .neural-controls-dark [role="button"]:focus {
          outline-color: #66aaff;
        }
      `}</style>
    </div>
  );
}

export default InteractiveControls;