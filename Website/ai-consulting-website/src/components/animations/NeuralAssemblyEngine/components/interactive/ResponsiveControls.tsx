/**
 * Responsive Controls - Neural Assembly Engine
 * Mobile-optimized control layouts with touch gestures and French interface
 */

'use client';

import React, { useState, useCallback, useEffect, useRef } from 'react';
import { useTranslations } from 'next-intl';
import {
  ChevronUp,
  ChevronDown,
  MoreHorizontal,
  Maximize2,
  Minimize2,
  Smartphone,
  Tablet
} from 'lucide-react';
import { PlaybackControls } from '../PlaybackControls';
import { ProgressScrubber } from '../ProgressScrubber';
import { PhaseNavigator } from '../PhaseNavigator';
import { QualitySelector } from '../QualitySelector';
import { ViewModeToggle } from './ViewModeToggle';
import { PhaseExplainer } from './PhaseExplainer';
import type { TimelineState, TimelineControls } from '../../hooks/useTimelineControl';

export interface ResponsiveControlsProps {
  /** Timeline control interface */
  timeline: {
    state: TimelineState;
    controls: TimelineControls;
    isPlaying: boolean;
    currentPhase: number;
    progress: number;
    duration: number;
  };
  /** Current view mode */
  viewMode: 'auto' | 'manual' | 'showcase';
  /** View mode change callback */
  onViewModeChange: (mode: 'auto' | 'manual' | 'showcase') => void;
  /** User interaction callback */
  onUserInteraction?: () => void;
  /** Controls visibility */
  isVisible: boolean;
  /** Theme variant */
  theme?: 'light' | 'dark' | 'auto';
  /** Custom CSS classes */
  className?: string;
}

export function ResponsiveControls({
  timeline,
  viewMode,
  onViewModeChange,
  onUserInteraction,
  isVisible,
  theme = 'auto',
  className = ''
}: ResponsiveControlsProps) {
  const t = useTranslations('neuralAnimation.mobile');

  // Refs
  const controlsRef = useRef<HTMLDivElement>(null);
  const touchStartRef = useRef<{ x: number; y: number; time: number } | null>(null);

  // State
  const [isExpanded, setIsExpanded] = useState(false);
  const [activePanel, setActivePanel] = useState<'controls' | 'phases' | 'settings' | null>(null);
  const [orientation, setOrientation] = useState<'portrait' | 'landscape'>('portrait');
  const [deviceType, setDeviceType] = useState<'mobile' | 'tablet'>('mobile');
  const [swipeDirection, setSwipeDirection] = useState<'up' | 'down' | null>(null);

  // Detect device orientation and type
  useEffect(() => {
    const detectDevice = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      const isLandscape = width > height;

      setOrientation(isLandscape ? 'landscape' : 'portrait');
      setDeviceType(width >= 768 ? 'tablet' : 'mobile');
    };

    detectDevice();
    window.addEventListener('resize', detectDevice);
    window.addEventListener('orientationchange', detectDevice);

    return () => {
      window.removeEventListener('resize', detectDevice);
      window.removeEventListener('orientationchange', detectDevice);
    };
  }, []);

  // Handle panel toggles
  const handlePanelToggle = useCallback((panel: typeof activePanel) => {
    if (activePanel === panel) {
      setActivePanel(null);
      setIsExpanded(false);
    } else {
      setActivePanel(panel);
      setIsExpanded(true);
    }
    onUserInteraction?.();
  }, [activePanel, onUserInteraction]);

  // Touch gesture handling
  const handleTouchStart = useCallback((event: React.TouchEvent) => {
    const touch = event.touches[0];
    touchStartRef.current = {
      x: touch.clientX,
      y: touch.clientY,
      time: Date.now()
    };
    onUserInteraction?.();
  }, [onUserInteraction]);

  const handleTouchMove = useCallback((event: React.TouchEvent) => {
    if (!touchStartRef.current) return;

    const touch = event.touches[0];
    const deltaY = touch.clientY - touchStartRef.current.y;
    const deltaX = Math.abs(touch.clientX - touchStartRef.current.x);

    // Vertical swipe detection
    if (Math.abs(deltaY) > 30 && deltaX < 50) {
      const direction = deltaY > 0 ? 'down' : 'up';
      setSwipeDirection(direction);

      // Prevent page scrolling during control gestures
      if (Math.abs(deltaY) > 50) {
        event.preventDefault();
      }
    }
  }, []);

  const handleTouchEnd = useCallback(() => {
    if (!touchStartRef.current || !swipeDirection) {
      touchStartRef.current = null;
      setSwipeDirection(null);
      return;
    }

    const timeDiff = Date.now() - touchStartRef.current.time;

    // Quick swipe gestures
    if (timeDiff < 300) {
      if (swipeDirection === 'up' && !isExpanded) {
        setIsExpanded(true);
        setActivePanel('controls');
      } else if (swipeDirection === 'down' && isExpanded) {
        setIsExpanded(false);
        setActivePanel(null);
      }
    }

    touchStartRef.current = null;
    setSwipeDirection(null);
  }, [swipeDirection, isExpanded]);

  // Double tap to toggle playback
  const handleDoubleTap = useCallback(() => {
    if (timeline.isPlaying) {
      timeline.controls.pause();
    } else {
      timeline.controls.play();
    }
    onUserInteraction?.();
  }, [timeline, onUserInteraction]);

  // Handle tap with double-tap detection
  const [lastTap, setLastTap] = useState(0);
  const handleTap = useCallback(() => {
    const now = Date.now();
    const timeDiff = now - lastTap;

    if (timeDiff < 300 && timeDiff > 0) {
      handleDoubleTap();
    } else {
      // Single tap - show/hide controls
      if (viewMode === 'auto') {
        setIsExpanded(!isExpanded);
      }
    }

    setLastTap(now);
  }, [lastTap, handleDoubleTap, isExpanded, viewMode]);

  const controlsClasses = [
    'neural-responsive-controls',
    `neural-controls-${theme}`,
    `neural-${orientation}`,
    `neural-${deviceType}`,
    isVisible ? 'neural-controls-visible' : 'neural-controls-hidden',
    isExpanded ? 'neural-controls-expanded' : 'neural-controls-collapsed',
    className
  ].filter(Boolean).join(' ');

  return (
    <div
      ref={controlsRef}
      className={controlsClasses}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      onClick={handleTap}
      role="region"
      aria-label={t('mobileControls')}
    >
      {/* Swipe Indicator */}
      <div className="neural-swipe-indicator">
        <div className="neural-swipe-handle" />
        <span className="neural-swipe-hint">
          {isExpanded ? t('swipeDownToHide') : t('swipeUpToShow')}
        </span>
      </div>

      {/* Quick Actions Bar */}
      <div className="neural-quick-actions">
        {/* Essential Controls Always Visible */}
        <PlaybackControls
          isPlaying={timeline.isPlaying}
          onPlay={timeline.controls.play}
          onPause={timeline.controls.pause}
          onRestart={timeline.controls.restart}
          onUserInteraction={onUserInteraction}
          isTouchOptimized={true}
          className="neural-mobile-playback"
        />

        {/* Current Phase Indicator */}
        <div className="neural-phase-badge">
          <span className="neural-phase-number">{timeline.currentPhase + 1}</span>
          <span className="neural-phase-name">
            {t(`phase${timeline.currentPhase + 1}`)}
          </span>
        </div>

        {/* Expand Toggle */}
        <button
          className="neural-expand-toggle"
          onClick={(e) => {
            e.stopPropagation();
            handlePanelToggle('controls');
          }}
          aria-label={isExpanded ? t('collapse') : t('expand')}
        >
          {isExpanded ? <ChevronDown size={20} /> : <ChevronUp size={20} />}
        </button>
      </div>

      {/* Expanded Controls Panel */}
      {isExpanded && (
        <div className="neural-expanded-panel">
          {/* Panel Navigation */}
          <div className="neural-panel-nav">
            <button
              className={`neural-nav-button ${activePanel === 'controls' ? 'neural-nav-active' : ''}`}
              onClick={() => handlePanelToggle('controls')}
            >
              {t('controls')}
            </button>
            <button
              className={`neural-nav-button ${activePanel === 'phases' ? 'neural-nav-active' : ''}`}
              onClick={() => handlePanelToggle('phases')}
            >
              {t('phases')}
            </button>
            <button
              className={`neural-nav-button ${activePanel === 'settings' ? 'neural-nav-active' : ''}`}
              onClick={() => handlePanelToggle('settings')}
            >
              {t('settings')}
            </button>
          </div>

          {/* Panel Content */}
          <div className="neural-panel-content">
            {/* Controls Panel */}
            {activePanel === 'controls' && (
              <div className="neural-controls-panel">
                {/* Progress Scrubber */}
                <ProgressScrubber
                  progress={timeline.progress}
                  duration={timeline.duration}
                  currentPhase={timeline.currentPhase}
                  onSeek={timeline.controls.seek}
                  onPhaseClick={timeline.controls.goToPhase}
                  onUserInteraction={onUserInteraction}
                  showPhaseLabels={false}
                  isCompact={true}
                  isTouchOptimized={true}
                  className="neural-mobile-scrubber"
                />

                {/* View Mode Toggle */}
                <ViewModeToggle
                  currentMode={viewMode}
                  onModeChange={onViewModeChange}
                  showDescriptions={false}
                  isCompact={true}
                  className="neural-mobile-view-mode"
                />
              </div>
            )}

            {/* Phases Panel */}
            {activePanel === 'phases' && (
              <div className="neural-phases-panel">
                <PhaseNavigator
                  currentPhase={timeline.currentPhase}
                  phases={['Chaos', 'Reconnaissance', 'Formation', 'Connexion', 'Maîtrise']}
                  onPhaseSelect={timeline.controls.goToPhase}
                  onUserInteraction={onUserInteraction}
                  showDescriptions={true}
                  isCompact={deviceType === 'mobile'}
                  isVertical={true}
                  className="neural-mobile-phases"
                />
              </div>
            )}

            {/* Settings Panel */}
            {activePanel === 'settings' && (
              <div className="neural-settings-panel">
                <QualitySelector
                  onQualityChange={(quality) => {
                    console.log('Quality changed:', quality);
                    // Implement quality change logic
                  }}
                  showPerformanceInfo={true}
                  isCompact={true}
                  className="neural-mobile-quality"
                />

                {/* Device Info */}
                <div className="neural-device-info">
                  <h4 className="neural-device-title">{t('deviceInfo')}</h4>
                  <div className="neural-device-details">
                    <div className="neural-device-item">
                      {deviceType === 'mobile' ? <Smartphone size={16} /> : <Tablet size={16} />}
                      <span>{t(deviceType)}</span>
                    </div>
                    <div className="neural-device-item">
                      {orientation === 'portrait' ? <Maximize2 size={16} /> : <Minimize2 size={16} />}
                      <span>{t(orientation)}</span>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Phase Explainer (Floating) */}
      {viewMode !== 'showcase' && (
        <PhaseExplainer
          currentPhase={timeline.currentPhase}
          progress={timeline.progress}
          isPlaying={timeline.isPlaying}
          showBusinessImpact={true}
          isCompact={!isExpanded}
          autoHide={viewMode === 'auto'}
          className="neural-mobile-explainer"
        />
      )}

      {/* CSS Styles */}
      <style jsx>{`
        .neural-responsive-controls {
          position: fixed;
          bottom: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          font-family: 'Inter', system-ui, sans-serif;
          font-weight: 300; /* NEWCODE typography */
          touch-action: manipulation;
          user-select: none;
          transition: transform 0.3s ease;
        }

        .neural-controls-light {
          background: rgba(248, 250, 252, 0.98);
          color: #000000;
          border-top: 1px solid rgba(0, 0, 0, 0.1);
        }

        .neural-controls-dark {
          background: rgba(26, 26, 26, 0.98);
          color: #ffffff;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
        }

        .neural-controls-visible {
          transform: translateY(0);
        }

        .neural-controls-hidden {
          transform: translateY(100%);
        }

        .neural-swipe-indicator {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 4px 0 8px 0;
          gap: 4px;
        }

        .neural-swipe-handle {
          width: 40px;
          height: 4px;
          background: rgba(0, 0, 0, 0.3);
          border-radius: 2px;
        }

        .neural-controls-dark .neural-swipe-handle {
          background: rgba(255, 255, 255, 0.3);
        }

        .neural-swipe-hint {
          font-size: 10px;
          opacity: 0.6;
          text-align: center;
        }

        .neural-quick-actions {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 8px 16px 12px 16px;
          gap: 12px;
        }

        .neural-phase-badge {
          display: flex;
          align-items: center;
          gap: 6px;
          flex: 1;
          min-width: 0;
        }

        .neural-phase-number {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 24px;
          height: 24px;
          border-radius: 50%;
          background: #0088ff;
          color: white;
          font-size: 12px;
          font-weight: 400;
          flex-shrink: 0;
        }

        .neural-phase-name {
          font-size: 13px;
          font-weight: 400;
          color: #0088ff;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .neural-expand-toggle {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          background: none;
          border: 1px solid rgba(0, 136, 255, 0.3);
          border-radius: 8px;
          cursor: pointer;
          color: #0088ff;
          transition: all 0.2s ease;
          flex-shrink: 0;
        }

        .neural-expand-toggle:active {
          background: rgba(0, 136, 255, 0.1);
          transform: scale(0.95);
        }

        .neural-expanded-panel {
          border-top: 1px solid rgba(0, 0, 0, 0.1);
          max-height: 70vh;
          overflow-y: auto;
        }

        .neural-controls-dark .neural-expanded-panel {
          border-color: rgba(255, 255, 255, 0.1);
        }

        .neural-panel-nav {
          display: flex;
          background: rgba(0, 0, 0, 0.05);
          border-bottom: 1px solid rgba(0, 0, 0, 0.1);
        }

        .neural-controls-dark .neural-panel-nav {
          background: rgba(255, 255, 255, 0.05);
          border-color: rgba(255, 255, 255, 0.1);
        }

        .neural-nav-button {
          flex: 1;
          padding: 12px 8px;
          background: none;
          border: none;
          color: inherit;
          font-size: 12px;
          font-weight: 400;
          cursor: pointer;
          transition: all 0.2s ease;
          border-bottom: 2px solid transparent;
        }

        .neural-nav-active {
          color: #0088ff;
          border-bottom-color: #0088ff;
          background: rgba(0, 136, 255, 0.05);
        }

        .neural-panel-content {
          padding: 16px;
        }

        .neural-controls-panel,
        .neural-phases-panel,
        .neural-settings-panel {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .neural-device-info {
          background: rgba(0, 0, 0, 0.05);
          border-radius: 8px;
          padding: 12px;
        }

        .neural-controls-dark .neural-device-info {
          background: rgba(255, 255, 255, 0.05);
        }

        .neural-device-title {
          margin: 0 0 8px 0;
          font-size: 12px;
          font-weight: 400;
          opacity: 0.8;
        }

        .neural-device-details {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .neural-device-item {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 11px;
        }

        .neural-mobile-explainer {
          position: fixed;
          top: 20px;
          left: 16px;
          right: 16px;
          z-index: 999;
          backdrop-filter: blur(10px);
        }

        /* Landscape adjustments */
        .neural-landscape .neural-quick-actions {
          padding: 6px 16px 8px 16px;
        }

        .neural-landscape .neural-panel-content {
          padding: 12px 16px;
        }

        .neural-landscape .neural-mobile-explainer {
          top: 16px;
          left: 20px;
          right: 20px;
        }

        /* Tablet adjustments */
        .neural-tablet .neural-quick-actions {
          padding: 10px 24px 14px 24px;
        }

        .neural-tablet .neural-panel-content {
          padding: 20px 24px;
        }

        .neural-tablet .neural-mobile-explainer {
          top: 24px;
          left: 24px;
          right: 24px;
        }

        /* Touch feedback */
        .neural-nav-button:active,
        .neural-expand-toggle:active {
          background: rgba(0, 136, 255, 0.2);
        }

        /* High contrast mode */
        @media (prefers-contrast: high) {
          .neural-responsive-controls {
            border-top: 2px solid currentColor;
          }

          .neural-phase-badge,
          .neural-expand-toggle {
            border: 2px solid currentColor;
          }

          .neural-nav-active {
            background: #0088ff;
            color: white;
          }
        }

        /* Reduced motion support */
        @media (prefers-reduced-motion: reduce) {
          .neural-responsive-controls,
          .neural-expand-toggle,
          .neural-nav-button {
            transition: none;
          }

          .neural-expand-toggle:active {
            transform: none;
          }
        }

        /* Safe area adjustments for notched devices */
        @supports (padding-bottom: env(safe-area-inset-bottom)) {
          .neural-responsive-controls {
            padding-bottom: env(safe-area-inset-bottom);
          }
        }
      `}</style>
    </div>
  );
}

export default ResponsiveControls;