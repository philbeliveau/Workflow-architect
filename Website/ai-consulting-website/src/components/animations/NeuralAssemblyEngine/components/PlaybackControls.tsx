/**
 * Playback Controls - Neural Assembly Engine
 * Play/pause/restart controls with touch optimization and French labels
 */

'use client';

import React, { useState, useCallback } from 'react';
import { useTranslations } from 'next-intl';
import { Play, Pause, RotateCcw, SkipBack, SkipForward } from 'lucide-react';

export interface PlaybackControlsProps {
  /** Current playing state */
  isPlaying: boolean;
  /** Play callback */
  onPlay: () => void;
  /** Pause callback */
  onPause: () => void;
  /** Restart callback */
  onRestart: () => void;
  /** Speed control (optional) */
  onSpeedChange?: (speed: number) => void;
  /** Current playback speed */
  currentSpeed?: number;
  /** Skip controls (optional) */
  onSkipBack?: () => void;
  onSkipForward?: () => void;
  /** User interaction callback */
  onUserInteraction?: () => void;
  /** Disable controls */
  disabled?: boolean;
  /** Touch-optimized mode */
  isTouchOptimized?: boolean;
  /** Custom CSS classes */
  className?: string;
}

export function PlaybackControls({
  isPlaying,
  onPlay,
  onPause,
  onRestart,
  onSpeedChange,
  currentSpeed = 1,
  onSkipBack,
  onSkipForward,
  onUserInteraction,
  disabled = false,
  isTouchOptimized = false,
  className = ''
}: PlaybackControlsProps) {
  const t = useTranslations('neuralAnimation.controls');

  // State for speed selector
  const [showSpeedSelector, setShowSpeedSelector] = useState(false);

  // Speed options
  const speedOptions = [0.5, 0.75, 1, 1.25, 1.5, 2];

  // Handle play/pause toggle
  const handlePlayPause = useCallback(() => {
    if (disabled) return;

    if (isPlaying) {
      onPause();
    } else {
      onPlay();
    }
    onUserInteraction?.();
  }, [isPlaying, onPlay, onPause, onUserInteraction, disabled]);

  // Handle restart
  const handleRestart = useCallback(() => {
    if (disabled) return;

    onRestart();
    onUserInteraction?.();
  }, [onRestart, onUserInteraction, disabled]);

  // Handle speed change
  const handleSpeedChange = useCallback((speed: number) => {
    if (disabled || !onSpeedChange) return;

    onSpeedChange(speed);
    setShowSpeedSelector(false);
    onUserInteraction?.();
  }, [onSpeedChange, onUserInteraction, disabled]);

  // Handle skip actions
  const handleSkipBack = useCallback(() => {
    if (disabled || !onSkipBack) return;

    onSkipBack();
    onUserInteraction?.();
  }, [onSkipBack, onUserInteraction, disabled]);

  const handleSkipForward = useCallback(() => {
    if (disabled || !onSkipForward) return;

    onSkipForward();
    onUserInteraction?.();
  }, [onSkipForward, onUserInteraction, disabled]);

  // Touch event handlers for mobile optimization
  const handleTouchStart = useCallback((event: React.TouchEvent) => {
    event.preventDefault(); // Prevent scrolling/zooming
    onUserInteraction?.();
  }, [onUserInteraction]);

  const controlsClasses = [
    'neural-playback-controls',
    isTouchOptimized ? 'neural-controls-touch' : 'neural-controls-desktop',
    disabled ? 'neural-controls-disabled' : '',
    className
  ].filter(Boolean).join(' ');

  return (
    <div
      className={controlsClasses}
      role="group"
      aria-label={t('playbackControls')}
    >
      {/* Skip Back (if available) */}
      {onSkipBack && (
        <button
          className="neural-control-button neural-skip-back"
          onClick={handleSkipBack}
          onTouchStart={handleTouchStart}
          disabled={disabled}
          aria-label={t('skipBack')}
          title={t('skipBack')}
        >
          <SkipBack size={isTouchOptimized ? 24 : 18} />
        </button>
      )}

      {/* Restart Button */}
      <button
        className="neural-control-button neural-restart"
        onClick={handleRestart}
        onTouchStart={handleTouchStart}
        disabled={disabled}
        aria-label={t('restart')}
        title={t('restart')}
      >
        <RotateCcw size={isTouchOptimized ? 24 : 18} />
      </button>

      {/* Main Play/Pause Button */}
      <button
        className="neural-control-button neural-play-pause neural-primary-control"
        onClick={handlePlayPause}
        onTouchStart={handleTouchStart}
        disabled={disabled}
        aria-label={isPlaying ? t('pause') : t('play')}
        title={isPlaying ? t('pause') : t('play')}
        aria-pressed={isPlaying}
      >
        {isPlaying ? (
          <Pause size={isTouchOptimized ? 28 : 20} />
        ) : (
          <Play size={isTouchOptimized ? 28 : 20} />
        )}
      </button>

      {/* Skip Forward (if available) */}
      {onSkipForward && (
        <button
          className="neural-control-button neural-skip-forward"
          onClick={handleSkipForward}
          onTouchStart={handleTouchStart}
          disabled={disabled}
          aria-label={t('skipForward')}
          title={t('skipForward')}
        >
          <SkipForward size={isTouchOptimized ? 24 : 18} />
        </button>
      )}

      {/* Speed Control (if available) */}
      {onSpeedChange && (
        <div className="neural-speed-control">
          <button
            className="neural-control-button neural-speed-toggle"
            onClick={() => setShowSpeedSelector(!showSpeedSelector)}
            onTouchStart={handleTouchStart}
            disabled={disabled}
            aria-label={t('playbackSpeed')}
            title={t('playbackSpeed')}
            aria-expanded={showSpeedSelector}
          >
            {currentSpeed}×
          </button>

          {showSpeedSelector && (
            <div className="neural-speed-dropdown" role="menu">
              {speedOptions.map((speed) => (
                <button
                  key={speed}
                  className={`neural-speed-option ${speed === currentSpeed ? 'neural-speed-active' : ''}`}
                  onClick={() => handleSpeedChange(speed)}
                  onTouchStart={handleTouchStart}
                  role="menuitem"
                  aria-label={t('speedOption', { speed })}
                >
                  {speed}×
                </button>
              ))}
            </div>
          )}
        </div>
      )}

      {/* CSS Styles */}
      <style jsx>{`
        .neural-playback-controls {
          display: flex;
          align-items: center;
          gap: 8px;
          position: relative;
        }

        .neural-controls-touch {
          gap: 12px;
        }

        .neural-control-button {
          display: flex;
          align-items: center;
          justify-content: center;
          background: none;
          border: none;
          color: inherit;
          cursor: pointer;
          border-radius: 8px;
          transition: all 0.2s ease;
          font-weight: 300; /* NEWCODE typography */
          position: relative;
          overflow: hidden;
        }

        .neural-controls-desktop .neural-control-button {
          width: 36px;
          height: 36px;
          padding: 8px;
        }

        .neural-controls-touch .neural-control-button {
          width: 48px;
          height: 48px;
          padding: 12px;
          min-width: 48px; /* Accessibility: minimum touch target */
          min-height: 48px;
        }

        .neural-primary-control {
          background: rgba(0, 136, 255, 0.1);
          border: 2px solid rgba(0, 136, 255, 0.3);
        }

        .neural-control-button:hover:not(:disabled) {
          background: rgba(0, 136, 255, 0.1);
          transform: scale(1.05);
        }

        .neural-primary-control:hover:not(:disabled) {
          background: rgba(0, 136, 255, 0.2);
          border-color: rgba(0, 136, 255, 0.5);
          transform: scale(1.08);
        }

        .neural-control-button:active:not(:disabled) {
          transform: scale(0.95);
        }

        .neural-control-button:disabled {
          opacity: 0.5;
          cursor: not-allowed;
          transform: none;
        }

        /* Touch feedback */
        .neural-controls-touch .neural-control-button::before {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          width: 0;
          height: 0;
          border-radius: 50%;
          background: rgba(0, 136, 255, 0.3);
          transition: width 0.2s ease, height 0.2s ease;
          transform: translate(-50%, -50%);
          z-index: -1;
        }

        .neural-controls-touch .neural-control-button:active::before {
          width: 100%;
          height: 100%;
        }

        /* Speed Control */
        .neural-speed-control {
          position: relative;
        }

        .neural-speed-toggle {
          min-width: 40px;
          font-size: 14px;
          font-weight: 400;
        }

        .neural-controls-touch .neural-speed-toggle {
          min-width: 52px;
          font-size: 16px;
        }

        .neural-speed-dropdown {
          position: absolute;
          bottom: 100%;
          left: 50%;
          transform: translateX(-50%);
          background: rgba(248, 250, 252, 0.95);
          border: 1px solid rgba(0, 0, 0, 0.1);
          border-radius: 8px;
          padding: 4px;
          margin-bottom: 8px;
          backdrop-filter: blur(10px);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
          z-index: 1000;
        }

        .neural-speed-option {
          display: block;
          width: 100%;
          padding: 8px 12px;
          background: none;
          border: none;
          color: inherit;
          cursor: pointer;
          font-size: 14px;
          font-weight: 300;
          border-radius: 4px;
          transition: background-color 0.2s ease;
          text-align: center;
          min-width: 48px;
        }

        .neural-speed-option:hover {
          background: rgba(0, 136, 255, 0.1);
        }

        .neural-speed-active {
          background: rgba(0, 136, 255, 0.2);
          color: #0088ff;
          font-weight: 400;
        }

        /* Focus styles for accessibility */
        .neural-control-button:focus {
          outline: 2px solid #0088ff;
          outline-offset: 2px;
        }

        .neural-speed-option:focus {
          outline: 2px solid #0088ff;
          outline-offset: -2px;
        }

        /* Animation states */
        .neural-control-button[aria-pressed="true"] .neural-primary-control {
          background: rgba(0, 136, 255, 0.3);
        }

        /* Reduced motion support */
        @media (prefers-reduced-motion: reduce) {
          .neural-control-button {
            transition: none;
          }

          .neural-control-button:hover:not(:disabled) {
            transform: none;
          }

          .neural-controls-touch .neural-control-button::before {
            transition: none;
          }
        }

        /* High contrast mode */
        @media (prefers-contrast: high) {
          .neural-control-button {
            border: 2px solid currentColor;
          }

          .neural-primary-control {
            background: rgba(0, 136, 255, 0.3);
            border-color: #0088ff;
          }
        }

        /* Dark theme support */
        @media (prefers-color-scheme: dark) {
          .neural-speed-dropdown {
            background: rgba(26, 26, 26, 0.95);
            border-color: rgba(255, 255, 255, 0.1);
          }
        }
      `}</style>
    </div>
  );
}

export default PlaybackControls;