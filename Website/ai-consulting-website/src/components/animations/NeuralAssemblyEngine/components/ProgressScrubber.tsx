/**
 * Progress Scrubber - Neural Assembly Engine
 * Timeline scrubbing with phase markers and French phase names
 */

'use client';

import React, { useRef, useCallback, useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import { getPhaseTimings, getPhaseColor, getPhaseDefinition } from '../data/colorScheme';

export interface ProgressScrubberProps {
  /** Current progress (0-1) */
  progress: number;
  /** Total duration in milliseconds */
  duration: number;
  /** Current active phase (0-4) */
  currentPhase: number;
  /** Seek callback */
  onSeek: (time: number) => void;
  /** Phase click callback */
  onPhaseClick: (phaseIndex: number) => void;
  /** User interaction callback */
  onUserInteraction?: () => void;
  /** Show phase labels */
  showPhaseLabels?: boolean;
  /** Show time indicators */
  showTime?: boolean;
  /** Compact mode */
  isCompact?: boolean;
  /** Touch-optimized mode */
  isTouchOptimized?: boolean;
  /** Custom CSS classes */
  className?: string;
}

export function ProgressScrubber({
  progress,
  duration,
  currentPhase,
  onSeek,
  onPhaseClick,
  onUserInteraction,
  showPhaseLabels = true,
  showTime = true,
  isCompact = false,
  isTouchOptimized = false,
  className = ''
}: ProgressScrubberProps) {
  const t = useTranslations('neuralAnimation.phases');

  // Refs
  const scrubberRef = useRef<HTMLDivElement>(null);
  const isDraggingRef = useRef(false);

  // State
  const [isHovering, setIsHovering] = useState(false);
  const [hoverPosition, setHoverPosition] = useState(0);
  const [hoverPhase, setHoverPhase] = useState<number | null>(null);

  // Get phase timing information
  const phaseTimings = getPhaseTimings();

  // Format time display
  const formatTime = useCallback((timeMs: number) => {
    const seconds = Math.floor(timeMs / 1000);
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  }, []);

  // Handle scrubber interaction
  const handleScrubberInteraction = useCallback((event: React.MouseEvent | React.TouchEvent) => {
    if (!scrubberRef.current) return;

    const rect = scrubberRef.current.getBoundingClientRect();
    const clientX = 'touches' in event ? event.touches[0].clientX : event.clientX;
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(1, x / rect.width));
    const time = percentage * duration;

    onSeek(time);
    onUserInteraction?.();
  }, [duration, onSeek, onUserInteraction]);

  // Mouse down handler
  const handleMouseDown = useCallback((event: React.MouseEvent) => {
    event.preventDefault();
    isDraggingRef.current = true;
    handleScrubberInteraction(event);

    const handleMouseMove = (e: MouseEvent) => {
      if (!isDraggingRef.current) return;
      handleScrubberInteraction(e as any);
    };

    const handleMouseUp = () => {
      isDraggingRef.current = false;
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
  }, [handleScrubberInteraction]);

  // Touch handlers
  const handleTouchStart = useCallback((event: React.TouchEvent) => {
    event.preventDefault();
    isDraggingRef.current = true;
    handleScrubberInteraction(event);
  }, [handleScrubberInteraction]);

  const handleTouchMove = useCallback((event: React.TouchEvent) => {
    if (!isDraggingRef.current) return;
    event.preventDefault();
    handleScrubberInteraction(event);
  }, [handleScrubberInteraction]);

  const handleTouchEnd = useCallback(() => {
    isDraggingRef.current = false;
  }, []);

  // Hover handlers
  const handleMouseMove = useCallback((event: React.MouseEvent) => {
    if (!scrubberRef.current || isDraggingRef.current) return;

    const rect = scrubberRef.current.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const percentage = Math.max(0, Math.min(1, x / rect.width));

    setHoverPosition(percentage);

    // Determine which phase the hover is over
    const hoverTime = percentage * duration;
    const phase = phaseTimings.findIndex(timing =>
      hoverTime >= timing.start && hoverTime <= timing.end
    );
    setHoverPhase(phase >= 0 ? phase : null);
  }, [duration, phaseTimings]);

  // Phase click handler
  const handlePhaseClick = useCallback((phaseIndex: number, event: React.MouseEvent) => {
    event.stopPropagation();
    onPhaseClick(phaseIndex);
    onUserInteraction?.();
  }, [onPhaseClick, onUserInteraction]);

  // Calculate phase positions and widths
  const phasePositions = phaseTimings.map(timing => ({
    left: (timing.start / duration) * 100,
    width: ((timing.end - timing.start) / duration) * 100,
    phase: timing.name
  }));

  const scrubberClasses = [
    'neural-progress-scrubber',
    isCompact ? 'neural-scrubber-compact' : '',
    isTouchOptimized ? 'neural-scrubber-touch' : '',
    className
  ].filter(Boolean).join(' ');

  return (
    <div
      className={scrubberClasses}
      role="slider"
      aria-label={t('timelineSlider')}
      aria-valuemin={0}
      aria-valuemax={duration}
      aria-valuenow={progress * duration}
      aria-valuetext={`${formatTime(progress * duration)} / ${formatTime(duration)}`}
      tabIndex={0}
    >
      {/* Time Display */}
      {showTime && !isCompact && (
        <div className="neural-time-display">
          <span className="neural-current-time">
            {formatTime(progress * duration)}
          </span>
          <span className="neural-total-time">
            {formatTime(duration)}
          </span>
        </div>
      )}

      {/* Main Scrubber Track */}
      <div
        ref={scrubberRef}
        className="neural-scrubber-track"
        onMouseDown={handleMouseDown}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => {
          setIsHovering(false);
          setHoverPhase(null);
        }}
      >
        {/* Phase Backgrounds */}
        {phasePositions.map((position, index) => (
          <div
            key={index}
            className={`neural-phase-background ${index === currentPhase ? 'neural-phase-active' : ''}`}
            style={{
              left: `${position.left}%`,
              width: `${position.width}%`,
              background: getPhaseColor(index, 'background')
            }}
            onClick={(e) => handlePhaseClick(index, e)}
            role="button"
            aria-label={t('jumpToPhase', { phase: position.phase })}
            tabIndex={0}
          />
        ))}

        {/* Progress Fill */}
        <div
          className="neural-progress-fill"
          style={{
            width: `${progress * 100}%`,
            background: getPhaseColor(currentPhase, 'primary')
          }}
        />

        {/* Phase Markers */}
        {phaseTimings.map((timing, index) => (
          <div
            key={index}
            className={`neural-phase-marker ${index === currentPhase ? 'neural-marker-active' : ''}`}
            style={{
              left: `${(timing.start / duration) * 100}%`,
              borderColor: getPhaseColor(index, 'primary')
            }}
            onClick={(e) => handlePhaseClick(index, e)}
            role="button"
            aria-label={t('phaseMarker', { phase: timing.name })}
            tabIndex={0}
          />
        ))}

        {/* Progress Thumb */}
        <div
          className="neural-progress-thumb"
          style={{
            left: `${progress * 100}%`,
            background: getPhaseColor(currentPhase, 'primary')
          }}
          role="slider"
          aria-label={t('progressThumb')}
        />

        {/* Hover Indicator */}
        {isHovering && !isDraggingRef.current && (
          <div
            className="neural-hover-indicator"
            style={{ left: `${hoverPosition * 100}%` }}
          />
        )}
      </div>

      {/* Phase Labels */}
      {showPhaseLabels && !isCompact && (
        <div className="neural-phase-labels">
          {phaseTimings.map((timing, index) => (
            <div
              key={index}
              className={`neural-phase-label ${index === currentPhase ? 'neural-label-active' : ''}`}
              style={{
                left: `${(timing.start / duration) * 100}%`,
                width: `${((timing.end - timing.start) / duration) * 100}%`,
                color: getPhaseColor(index, 'primary')
              }}
              onClick={(e) => handlePhaseClick(index, e)}
              role="button"
              tabIndex={0}
            >
              <span className="neural-phase-number">{index + 1}</span>
              <span className="neural-phase-name">{timing.name}</span>
            </div>
          ))}
        </div>
      )}

      {/* Hover Tooltip */}
      {isHovering && hoverPhase !== null && !isDraggingRef.current && (
        <div
          className="neural-hover-tooltip"
          style={{ left: `${hoverPosition * 100}%` }}
        >
          <div className="neural-tooltip-content">
            <span className="neural-tooltip-phase">
              {t('phase')} {hoverPhase + 1}: {phaseTimings[hoverPhase].name}
            </span>
            <span className="neural-tooltip-time">
              {formatTime(hoverPosition * duration)}
            </span>
          </div>
        </div>
      )}

      {/* CSS Styles */}
      <style jsx>{`
        .neural-progress-scrubber {
          width: 100%;
          position: relative;
          font-family: 'Inter', system-ui, sans-serif;
          font-weight: 300; /* NEWCODE typography */
        }

        .neural-time-display {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 8px;
          font-size: 12px;
          color: currentColor;
          opacity: 0.8;
        }

        .neural-scrubber-compact .neural-time-display {
          display: none;
        }

        .neural-scrubber-track {
          position: relative;
          height: ${isTouchOptimized ? '12px' : isCompact ? '4px' : '8px'};
          background: rgba(0, 0, 0, 0.1);
          border-radius: ${isTouchOptimized ? '6px' : isCompact ? '2px' : '4px'};
          cursor: pointer;
          overflow: visible;
          touch-action: none;
        }

        .neural-scrubber-touch .neural-scrubber-track {
          height: 12px;
          padding: 4px 0; /* Expand touch area */
        }

        .neural-phase-background {
          position: absolute;
          top: 0;
          height: 100%;
          border-radius: inherit;
          transition: opacity 0.2s ease;
          cursor: pointer;
        }

        .neural-phase-background:hover {
          opacity: 0.8;
        }

        .neural-phase-active {
          opacity: 0.6;
        }

        .neural-progress-fill {
          position: absolute;
          top: 0;
          left: 0;
          height: 100%;
          border-radius: inherit;
          transition: width 0.1s ease;
          pointer-events: none;
        }

        .neural-phase-marker {
          position: absolute;
          top: -2px;
          width: 2px;
          height: calc(100% + 4px);
          border-left: 2px solid;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .neural-marker-active {
          height: calc(100% + 8px);
          top: -4px;
          width: 3px;
          border-left-width: 3px;
        }

        .neural-scrubber-touch .neural-phase-marker {
          width: 4px;
          border-left-width: 4px;
          top: -4px;
          height: calc(100% + 8px);
        }

        .neural-progress-thumb {
          position: absolute;
          top: 50%;
          width: ${isTouchOptimized ? '20px' : isCompact ? '12px' : '16px'};
          height: ${isTouchOptimized ? '20px' : isCompact ? '12px' : '16px'};
          border-radius: 50%;
          transform: translate(-50%, -50%);
          transition: all 0.2s ease;
          cursor: grab;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
          border: 2px solid white;
        }

        .neural-progress-thumb:active {
          cursor: grabbing;
          transform: translate(-50%, -50%) scale(1.2);
        }

        .neural-hover-indicator {
          position: absolute;
          top: 50%;
          width: 2px;
          height: 150%;
          background: rgba(255, 255, 255, 0.8);
          transform: translate(-50%, -50%);
          pointer-events: none;
          border-radius: 1px;
        }

        .neural-phase-labels {
          display: flex;
          position: relative;
          margin-top: 8px;
          height: 24px;
        }

        .neural-phase-label {
          position: absolute;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          font-size: 10px;
          text-align: center;
          transition: all 0.2s ease;
        }

        .neural-phase-label:hover {
          transform: translateY(-2px);
          font-weight: 400;
        }

        .neural-label-active {
          font-weight: 400;
          transform: translateY(-1px);
        }

        .neural-phase-number {
          display: block;
          width: 16px;
          height: 16px;
          border-radius: 50%;
          background: currentColor;
          color: white;
          line-height: 16px;
          font-size: 8px;
          margin-bottom: 2px;
        }

        .neural-phase-name {
          display: block;
          font-size: 9px;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          max-width: 100%;
        }

        .neural-hover-tooltip {
          position: absolute;
          bottom: 100%;
          transform: translateX(-50%);
          margin-bottom: 8px;
          background: rgba(0, 0, 0, 0.9);
          color: white;
          padding: 6px 10px;
          border-radius: 6px;
          font-size: 12px;
          white-space: nowrap;
          pointer-events: none;
          z-index: 1000;
        }

        .neural-tooltip-content {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 2px;
        }

        .neural-tooltip-phase {
          font-weight: 400;
        }

        .neural-tooltip-time {
          font-size: 10px;
          opacity: 0.8;
        }

        /* Focus styles for accessibility */
        .neural-phase-background:focus,
        .neural-phase-marker:focus,
        .neural-phase-label:focus,
        .neural-progress-scrubber:focus {
          outline: 2px solid #0088ff;
          outline-offset: 2px;
        }

        /* Keyboard navigation */
        .neural-progress-scrubber:focus {
          outline: 2px solid #0088ff;
          outline-offset: 4px;
        }

        /* Reduced motion support */
        @media (prefers-reduced-motion: reduce) {
          .neural-phase-background,
          .neural-progress-fill,
          .neural-phase-marker,
          .neural-progress-thumb,
          .neural-phase-label {
            transition: none;
          }
        }

        /* High contrast mode */
        @media (prefers-contrast: high) {
          .neural-scrubber-track {
            background: #000000;
            border: 1px solid currentColor;
          }

          .neural-progress-thumb {
            border: 3px solid currentColor;
          }

          .neural-hover-tooltip {
            background: #000000;
            border: 1px solid white;
          }
        }

        /* Mobile adjustments */
        @media (max-width: 768px) {
          .neural-phase-labels {
            margin-top: 4px;
            height: 20px;
          }

          .neural-phase-label {
            font-size: 9px;
          }

          .neural-phase-number {
            width: 14px;
            height: 14px;
            line-height: 14px;
            font-size: 7px;
          }

          .neural-phase-name {
            font-size: 8px;
          }
        }
      `}</style>
    </div>
  );
}

export default ProgressScrubber;