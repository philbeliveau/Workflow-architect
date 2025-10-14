/**
 * Phase Navigator - Neural Assembly Engine
 * Direct phase selection with French descriptions and visual indicators
 */

'use client';

import React, { useCallback, useState } from 'react';
import { useTranslations } from 'next-intl';
import { Circle, CheckCircle, PlayCircle } from 'lucide-react';
import { getPhaseDefinition, getPhaseColor } from '../data/colorScheme';

export interface PhaseNavigatorProps {
  /** Current active phase (0-4) */
  currentPhase: number;
  /** Array of phase names */
  phases: string[];
  /** Phase selection callback */
  onPhaseSelect: (phaseIndex: number) => void;
  /** User interaction callback */
  onUserInteraction?: () => void;
  /** Show phase descriptions */
  showDescriptions?: boolean;
  /** Compact layout mode */
  isCompact?: boolean;
  /** Vertical layout (for mobile) */
  isVertical?: boolean;
  /** Show progress indicators */
  showProgress?: boolean;
  /** Custom CSS classes */
  className?: string;
}

export function PhaseNavigator({
  currentPhase,
  phases,
  onPhaseSelect,
  onUserInteraction,
  showDescriptions = true,
  isCompact = false,
  isVertical = false,
  showProgress = true,
  className = ''
}: PhaseNavigatorProps) {
  const t = useTranslations('neuralAnimation.phases');

  // State for hover effects
  const [hoveredPhase, setHoveredPhase] = useState<number | null>(null);

  // French phase descriptions aligned with business context
  const phaseDescriptions = {
    0: {
      title: 'Chaos Traditionnel',
      description: 'Code fragmenté, solutions éparses, développement inefficace'
    },
    1: {
      title: 'Reconnaissance IA',
      description: 'Identification des modèles, découverte des possibilités'
    },
    2: {
      title: 'Formation Neural',
      description: 'Réseau intelligent se structure, apprentissage accéléré'
    },
    3: {
      title: 'Connexion Agentique',
      description: 'Agents collaborent, orchestration parfaite des tâches'
    },
    4: {
      title: 'Maîtrise Newcode',
      description: 'Programmation agentique maîtrisée, productivité 3-5x'
    }
  };

  // Handle phase selection
  const handlePhaseSelect = useCallback((phaseIndex: number) => {
    onPhaseSelect(phaseIndex);
    onUserInteraction?.();
  }, [onPhaseSelect, onUserInteraction]);

  // Handle keyboard navigation
  const handleKeyDown = useCallback((event: React.KeyboardEvent, phaseIndex: number) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      handlePhaseSelect(phaseIndex);
    }
  }, [handlePhaseSelect]);

  // Get phase status
  const getPhaseStatus = useCallback((phaseIndex: number): 'completed' | 'current' | 'upcoming' => {
    if (phaseIndex < currentPhase) return 'completed';
    if (phaseIndex === currentPhase) return 'current';
    return 'upcoming';
  }, [currentPhase]);

  // Render phase icon
  const renderPhaseIcon = useCallback((phaseIndex: number) => {
    const status = getPhaseStatus(phaseIndex);
    const color = getPhaseColor(phaseIndex, 'primary');

    switch (status) {
      case 'completed':
        return <CheckCircle size={isCompact ? 16 : 20} style={{ color }} />;
      case 'current':
        return <PlayCircle size={isCompact ? 16 : 20} style={{ color }} />;
      default:
        return <Circle size={isCompact ? 16 : 20} style={{ color, opacity: 0.5 }} />;
    }
  }, [currentPhase, isCompact]);

  const navigatorClasses = [
    'neural-phase-navigator',
    isVertical ? 'neural-navigator-vertical' : 'neural-navigator-horizontal',
    isCompact ? 'neural-navigator-compact' : '',
    className
  ].filter(Boolean).join(' ');

  return (
    <div
      className={navigatorClasses}
      role="tablist"
      aria-label={t('phaseNavigation')}
    >
      {phases.map((phaseName, index) => {
        const phaseData = getPhaseDefinition(index);
        const status = getPhaseStatus(index);
        const isHovered = hoveredPhase === index;
        const description = phaseDescriptions[index as keyof typeof phaseDescriptions];

        const phaseClasses = [
          'neural-phase-item',
          `neural-phase-${status}`,
          isHovered ? 'neural-phase-hovered' : ''
        ].filter(Boolean).join(' ');

        return (
          <div
            key={index}
            className={phaseClasses}
            role="tab"
            aria-selected={status === 'current'}
            aria-controls={`phase-content-${index}`}
            tabIndex={0}
            onClick={() => handlePhaseSelect(index)}
            onKeyDown={(e) => handleKeyDown(e, index)}
            onMouseEnter={() => setHoveredPhase(index)}
            onMouseLeave={() => setHoveredPhase(null)}
            style={{
              '--phase-color': getPhaseColor(index, 'primary'),
              '--phase-bg': getPhaseColor(index, 'background')
            } as React.CSSProperties}
          >
            {/* Phase Indicator */}
            <div className="neural-phase-indicator">
              {showProgress && renderPhaseIcon(index)}
              <span className="neural-phase-number">{index + 1}</span>
            </div>

            {/* Phase Content */}
            <div className="neural-phase-content">
              <h4 className="neural-phase-title">
                {description.title}
              </h4>

              {showDescriptions && !isCompact && (
                <p className="neural-phase-description">
                  {description.description}
                </p>
              )}

              {/* Phase Duration (optional) */}
              {phaseData && !isCompact && (
                <span className="neural-phase-duration">
                  {(phaseData.duration / 1000).toFixed(1)}s
                </span>
              )}
            </div>

            {/* Progress Bar */}
            {showProgress && status === 'current' && (
              <div className="neural-phase-progress">
                <div
                  className="neural-phase-progress-fill"
                  style={{
                    background: getPhaseColor(index, 'primary')
                  }}
                />
              </div>
            )}

            {/* Hover Tooltip for Compact Mode */}
            {isCompact && isHovered && (
              <div className="neural-phase-tooltip">
                <h5 className="neural-tooltip-title">{description.title}</h5>
                <p className="neural-tooltip-description">{description.description}</p>
              </div>
            )}
          </div>
        );
      })}

      {/* Connection Lines (for horizontal layout) */}
      {!isVertical && !isCompact && (
        <div className="neural-phase-connections">
          {phases.slice(0, -1).map((_, index) => (
            <div
              key={index}
              className={`neural-phase-connection ${
                index < currentPhase ? 'neural-connection-completed' : 'neural-connection-upcoming'
              }`}
              style={{
                background: index < currentPhase
                  ? getPhaseColor(index, 'primary')
                  : 'rgba(0, 0, 0, 0.1)'
              }}
            />
          ))}
        </div>
      )}

      {/* CSS Styles */}
      <style jsx>{`
        .neural-phase-navigator {
          font-family: 'Inter', system-ui, sans-serif;
          font-weight: 300; /* NEWCODE typography */
          position: relative;
        }

        .neural-navigator-horizontal {
          display: flex;
          align-items: flex-start;
          gap: 16px;
          overflow-x: auto;
          padding: 8px 0;
        }

        .neural-navigator-vertical {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .neural-navigator-compact .neural-navigator-horizontal {
          gap: 8px;
        }

        .neural-phase-item {
          position: relative;
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 12px 16px;
          border-radius: 12px;
          background: var(--phase-bg);
          border: 2px solid transparent;
          cursor: pointer;
          transition: all 0.3s ease;
          min-width: 0;
          flex-shrink: 0;
        }

        .neural-navigator-compact .neural-phase-item {
          padding: 8px 12px;
          gap: 8px;
          border-radius: 8px;
        }

        .neural-navigator-vertical .neural-phase-item {
          width: 100%;
        }

        .neural-navigator-horizontal .neural-phase-item {
          min-width: 200px;
          flex-direction: column;
          text-align: center;
          gap: 8px;
        }

        .neural-navigator-compact.neural-navigator-horizontal .neural-phase-item {
          min-width: 120px;
          padding: 8px;
        }

        .neural-phase-current {
          border-color: var(--phase-color);
          background: var(--phase-bg);
          box-shadow: 0 4px 12px rgba(0, 136, 255, 0.2);
        }

        .neural-phase-completed {
          opacity: 0.8;
        }

        .neural-phase-upcoming {
          opacity: 0.6;
        }

        .neural-phase-hovered {
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(0, 0, 0, 0.1);
        }

        .neural-phase-indicator {
          display: flex;
          align-items: center;
          gap: 8px;
          position: relative;
        }

        .neural-navigator-horizontal .neural-phase-indicator {
          justify-content: center;
          margin-bottom: 4px;
        }

        .neural-phase-number {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 24px;
          height: 24px;
          border-radius: 50%;
          background: var(--phase-color);
          color: white;
          font-size: 12px;
          font-weight: 400;
          min-width: 24px;
        }

        .neural-navigator-compact .neural-phase-number {
          width: 20px;
          height: 20px;
          font-size: 10px;
          min-width: 20px;
        }

        .neural-phase-content {
          flex: 1;
          min-width: 0;
        }

        .neural-navigator-horizontal .neural-phase-content {
          text-align: center;
        }

        .neural-phase-title {
          margin: 0;
          font-size: 14px;
          font-weight: 400;
          color: var(--phase-color);
          line-height: 1.3;
        }

        .neural-navigator-compact .neural-phase-title {
          font-size: 12px;
        }

        .neural-phase-description {
          margin: 4px 0 0 0;
          font-size: 12px;
          color: currentColor;
          opacity: 0.8;
          line-height: 1.4;
        }

        .neural-navigator-compact .neural-phase-description {
          display: none;
        }

        .neural-phase-duration {
          display: inline-block;
          margin-top: 4px;
          font-size: 10px;
          color: var(--phase-color);
          opacity: 0.7;
          background: rgba(0, 0, 0, 0.05);
          padding: 2px 6px;
          border-radius: 10px;
        }

        .neural-phase-progress {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 3px;
          background: rgba(0, 0, 0, 0.1);
          border-radius: 0 0 12px 12px;
          overflow: hidden;
        }

        .neural-phase-progress-fill {
          height: 100%;
          width: 100%;
          animation: progressPulse 2s ease-in-out infinite;
        }

        @keyframes progressPulse {
          0%, 100% { opacity: 0.8; }
          50% { opacity: 1; }
        }

        .neural-phase-tooltip {
          position: absolute;
          bottom: 100%;
          left: 50%;
          transform: translateX(-50%);
          background: rgba(0, 0, 0, 0.9);
          color: white;
          padding: 8px 12px;
          border-radius: 8px;
          margin-bottom: 8px;
          min-width: 200px;
          z-index: 1000;
          pointer-events: none;
        }

        .neural-tooltip-title {
          margin: 0 0 4px 0;
          font-size: 12px;
          font-weight: 400;
        }

        .neural-tooltip-description {
          margin: 0;
          font-size: 11px;
          opacity: 0.9;
          line-height: 1.3;
        }

        .neural-phase-connections {
          position: absolute;
          top: 50%;
          left: 0;
          right: 0;
          height: 2px;
          pointer-events: none;
          z-index: -1;
        }

        .neural-phase-connection {
          position: absolute;
          height: 100%;
          width: calc((100% - (5 * 200px) - (4 * 16px)) / 4);
          left: calc(var(--connection-index) * (200px + 16px) + 200px);
          border-radius: 1px;
          transition: background 0.3s ease;
        }

        /* Focus styles for accessibility */
        .neural-phase-item:focus {
          outline: 2px solid #0088ff;
          outline-offset: 2px;
        }

        /* Keyboard navigation indicators */
        .neural-phase-item:focus-visible {
          outline: 3px solid #0088ff;
          outline-offset: 3px;
        }

        /* Reduced motion support */
        @media (prefers-reduced-motion: reduce) {
          .neural-phase-item,
          .neural-phase-progress-fill {
            transition: none;
            animation: none;
          }

          .neural-phase-hovered {
            transform: none;
          }
        }

        /* High contrast mode */
        @media (prefers-contrast: high) {
          .neural-phase-item {
            border: 2px solid currentColor;
          }

          .neural-phase-current {
            border-width: 3px;
          }

          .neural-phase-tooltip {
            background: #000000;
            border: 1px solid white;
          }
        }

        /* Mobile responsive adjustments */
        @media (max-width: 768px) {
          .neural-navigator-horizontal {
            gap: 8px;
            padding: 4px 0;
          }

          .neural-navigator-horizontal .neural-phase-item {
            min-width: 140px;
            padding: 8px;
          }

          .neural-phase-title {
            font-size: 12px;
          }

          .neural-phase-description {
            font-size: 10px;
          }

          .neural-phase-tooltip {
            min-width: 150px;
            font-size: 10px;
          }
        }

        /* Ultra-compact mode for very small screens */
        @media (max-width: 480px) {
          .neural-navigator-horizontal .neural-phase-item {
            min-width: 100px;
            padding: 6px 4px;
          }

          .neural-phase-title {
            font-size: 10px;
            line-height: 1.2;
          }

          .neural-phase-description {
            display: none;
          }
        }
      `}</style>
    </div>
  );
}

export default PhaseNavigator;