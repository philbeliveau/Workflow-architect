/**
 * View Mode Toggle - Neural Assembly Engine
 * Auto-play/Manual/Showcase mode selection with French labels
 */

'use client';

import React, { useCallback } from 'react';
import { useTranslations } from 'next-intl';
import { Play, Hand, Eye, Zap } from 'lucide-react';

export type ViewMode = 'auto' | 'manual' | 'showcase';

export interface ViewModeToggleProps {
  /** Current view mode */
  currentMode: ViewMode;
  /** Mode change callback */
  onModeChange: (mode: ViewMode) => void;
  /** Show mode descriptions */
  showDescriptions?: boolean;
  /** Compact layout */
  isCompact?: boolean;
  /** Disabled state */
  disabled?: boolean;
  /** Custom CSS classes */
  className?: string;
}

export function ViewModeToggle({
  currentMode,
  onModeChange,
  showDescriptions = true,
  isCompact = false,
  disabled = false,
  className = ''
}: ViewModeToggleProps) {
  const t = useTranslations('neuralAnimation.viewModes');

  // View mode definitions with French labels and descriptions
  const viewModes = [
    {
      id: 'auto' as ViewMode,
      label: t('auto'),
      shortLabel: 'Auto',
      description: t('autoDescription'),
      icon: <Zap size={isCompact ? 14 : 16} />,
      color: '#00aa00',
      features: [
        'Lecture automatique continue',
        'Masquage intelligent des contrôles',
        'Expérience immersive optimale'
      ]
    },
    {
      id: 'manual' as ViewMode,
      label: t('manual'),
      shortLabel: 'Manuel',
      description: t('manualDescription'),
      icon: <Hand size={isCompact ? 14 : 16} />,
      color: '#0088ff',
      features: [
        'Contrôle complet de la timeline',
        'Navigation par phases',
        'Exploration à votre rythme'
      ]
    },
    {
      id: 'showcase' as ViewMode,
      label: t('showcase'),
      shortLabel: 'Démo',
      description: t('showcaseDescription'),
      icon: <Eye size={isCompact ? 14 : 16} />,
      color: '#ffaa00',
      features: [
        'Présentation en continu',
        'Interface minimale',
        'Idéal pour les démonstrations'
      ]
    }
  ];

  // Handle mode selection
  const handleModeSelect = useCallback((mode: ViewMode) => {
    if (disabled) return;
    onModeChange(mode);
  }, [onModeChange, disabled]);

  // Handle keyboard navigation
  const handleKeyDown = useCallback((event: React.KeyboardEvent, mode: ViewMode) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      handleModeSelect(mode);
    }
  }, [handleModeSelect]);

  const toggleClasses = [
    'neural-view-mode-toggle',
    isCompact ? 'neural-toggle-compact' : '',
    disabled ? 'neural-toggle-disabled' : '',
    className
  ].filter(Boolean).join(' ');

  return (
    <div
      className={toggleClasses}
      role="radiogroup"
      aria-label={t('viewModeSelection')}
    >
      {/* Mode Buttons */}
      <div className="neural-mode-buttons">
        {viewModes.map((mode) => {
          const isSelected = mode.id === currentMode;

          return (
            <button
              key={mode.id}
              className={`neural-mode-button ${isSelected ? 'neural-mode-selected' : ''}`}
              onClick={() => handleModeSelect(mode.id)}
              onKeyDown={(e) => handleKeyDown(e, mode.id)}
              disabled={disabled}
              role="radio"
              aria-checked={isSelected}
              aria-label={`${mode.label}: ${mode.description}`}
              title={mode.description}
              style={{
                '--mode-color': mode.color
              } as React.CSSProperties}
            >
              <div className="neural-mode-icon">
                {mode.icon}
              </div>

              <div className="neural-mode-content">
                <span className="neural-mode-label">
                  {isCompact ? mode.shortLabel : mode.label}
                </span>

                {!isCompact && showDescriptions && (
                  <span className="neural-mode-description">
                    {mode.description}
                  </span>
                )}
              </div>

              {/* Selection Indicator */}
              {isSelected && (
                <div className="neural-mode-indicator" />
              )}
            </button>
          );
        })}
      </div>

      {/* Extended Information Panel */}
      {!isCompact && showDescriptions && (
        <div className="neural-mode-info">
          {(() => {
            const selectedMode = viewModes.find(mode => mode.id === currentMode);
            if (!selectedMode) return null;

            return (
              <div className="neural-mode-details">
                <h4 className="neural-details-title">
                  {selectedMode.icon}
                  {selectedMode.label}
                </h4>

                <p className="neural-details-description">
                  {selectedMode.description}
                </p>

                <ul className="neural-details-features">
                  {selectedMode.features.map((feature, index) => (
                    <li key={index} className="neural-feature-item">
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })()}
        </div>
      )}

      {/* Mode Indicators (for compact mode) */}
      {isCompact && (
        <div className="neural-mode-indicators">
          {viewModes.map((mode) => (
            <div
              key={mode.id}
              className={`neural-mode-dot ${mode.id === currentMode ? 'neural-dot-active' : ''}`}
              style={{ background: mode.id === currentMode ? mode.color : 'rgba(0, 0, 0, 0.2)' }}
            />
          ))}
        </div>
      )}

      {/* CSS Styles */}
      <style jsx>{`
        .neural-view-mode-toggle {
          font-family: 'Inter', system-ui, sans-serif;
          font-weight: 300; /* NEWCODE typography */
          position: relative;
        }

        .neural-mode-buttons {
          display: flex;
          gap: 8px;
          margin-bottom: 12px;
        }

        .neural-toggle-compact .neural-mode-buttons {
          gap: 4px;
          margin-bottom: 6px;
        }

        .neural-mode-button {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 10px 14px;
          background: rgba(248, 250, 252, 0.8);
          border: 2px solid rgba(0, 0, 0, 0.1);
          border-radius: 10px;
          cursor: pointer;
          transition: all 0.3s ease;
          position: relative;
          flex: 1;
          text-align: left;
          color: inherit;
          min-width: 0;
        }

        .neural-toggle-compact .neural-mode-button {
          padding: 6px 10px;
          gap: 6px;
          border-radius: 8px;
          flex-direction: column;
          text-align: center;
          min-width: 60px;
        }

        .neural-mode-button:hover:not(:disabled) {
          background: rgba(0, 136, 255, 0.05);
          border-color: rgba(0, 136, 255, 0.3);
          transform: translateY(-1px);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        }

        .neural-mode-selected {
          background: rgba(0, 136, 255, 0.1);
          border-color: var(--mode-color);
          color: var(--mode-color);
          font-weight: 400;
        }

        .neural-mode-selected:hover {
          background: rgba(0, 136, 255, 0.15);
          border-color: var(--mode-color);
        }

        .neural-mode-button:disabled {
          opacity: 0.5;
          cursor: not-allowed;
          transform: none;
        }

        .neural-mode-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          color: inherit;
        }

        .neural-toggle-compact .neural-mode-icon {
          margin-bottom: 2px;
        }

        .neural-mode-content {
          flex: 1;
          min-width: 0;
          display: flex;
          flex-direction: column;
          gap: 2px;
        }

        .neural-toggle-compact .neural-mode-content {
          align-items: center;
        }

        .neural-mode-label {
          font-size: 13px;
          font-weight: inherit;
          line-height: 1.2;
        }

        .neural-toggle-compact .neural-mode-label {
          font-size: 11px;
        }

        .neural-mode-description {
          font-size: 11px;
          opacity: 0.8;
          line-height: 1.3;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .neural-mode-indicator {
          position: absolute;
          top: 4px;
          right: 4px;
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: var(--mode-color);
          animation: pulse 2s ease-in-out infinite;
        }

        @keyframes pulse {
          0%, 100% { opacity: 0.8; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.2); }
        }

        .neural-mode-info {
          background: rgba(248, 250, 252, 0.9);
          border: 1px solid rgba(0, 0, 0, 0.1);
          border-radius: 12px;
          padding: 16px;
          margin-top: 8px;
        }

        .neural-mode-details {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .neural-details-title {
          display: flex;
          align-items: center;
          gap: 8px;
          margin: 0;
          font-size: 14px;
          font-weight: 400;
          color: var(--mode-color, #0088ff);
        }

        .neural-details-description {
          margin: 0;
          font-size: 13px;
          line-height: 1.4;
          color: currentColor;
          opacity: 0.9;
        }

        .neural-details-features {
          margin: 0;
          padding-left: 16px;
          list-style: none;
        }

        .neural-feature-item {
          position: relative;
          margin-bottom: 4px;
          font-size: 12px;
          line-height: 1.3;
          padding-left: 8px;
        }

        .neural-feature-item::before {
          content: '✓';
          position: absolute;
          left: -8px;
          color: #00aa00;
          font-weight: 600;
        }

        .neural-mode-indicators {
          display: flex;
          justify-content: center;
          gap: 6px;
          margin-top: 4px;
        }

        .neural-mode-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          transition: all 0.2s ease;
        }

        .neural-dot-active {
          width: 12px;
          border-radius: 6px;
        }

        /* Focus styles for accessibility */
        .neural-mode-button:focus {
          outline: 2px solid #0088ff;
          outline-offset: 2px;
        }

        .neural-mode-button:focus-visible {
          outline: 3px solid #0088ff;
          outline-offset: 3px;
        }

        /* Reduced motion support */
        @media (prefers-reduced-motion: reduce) {
          .neural-mode-button {
            transition: none;
          }

          .neural-mode-button:hover:not(:disabled) {
            transform: none;
          }

          .neural-mode-indicator {
            animation: none;
          }

          .neural-mode-dot {
            transition: none;
          }
        }

        /* High contrast mode */
        @media (prefers-contrast: high) {
          .neural-mode-button {
            border: 2px solid currentColor;
          }

          .neural-mode-selected {
            background: var(--mode-color);
            color: white;
            border-color: var(--mode-color);
          }

          .neural-mode-info {
            border: 2px solid currentColor;
            background: white;
          }
        }

        /* Dark theme support */
        @media (prefers-color-scheme: dark) {
          .neural-mode-button {
            background: rgba(26, 26, 26, 0.8);
            border-color: rgba(255, 255, 255, 0.1);
          }

          .neural-mode-button:hover:not(:disabled) {
            background: rgba(102, 170, 255, 0.1);
            border-color: rgba(102, 170, 255, 0.3);
          }

          .neural-mode-selected {
            background: rgba(102, 170, 255, 0.2);
          }

          .neural-mode-info {
            background: rgba(26, 26, 26, 0.9);
            border-color: rgba(255, 255, 255, 0.1);
          }
        }

        /* Mobile responsive adjustments */
        @media (max-width: 768px) {
          .neural-mode-buttons {
            flex-direction: column;
            gap: 6px;
          }

          .neural-toggle-compact .neural-mode-buttons {
            flex-direction: row;
            gap: 4px;
          }

          .neural-mode-button {
            padding: 8px 12px;
          }

          .neural-mode-label {
            font-size: 12px;
          }

          .neural-mode-description {
            font-size: 10px;
          }

          .neural-mode-info {
            padding: 12px;
          }
        }

        /* Ultra-compact mode for very small screens */
        @media (max-width: 480px) {
          .neural-toggle-compact .neural-mode-button {
            min-width: 50px;
            padding: 4px 6px;
          }

          .neural-toggle-compact .neural-mode-label {
            font-size: 9px;
          }
        }
      `}</style>
    </div>
  );
}

export default ViewModeToggle;