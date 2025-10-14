/**
 * Phase Explainer - Neural Assembly Engine
 * Real-time French descriptions of current transformation phase
 */

'use client';

import React, { useMemo, useEffect, useState } from 'react';
import { useTranslations } from 'next-intl';
import { Info, ArrowRight, Lightbulb, Target, Zap } from 'lucide-react';
import { getPhaseDefinition, getPhaseColor } from '../../data/colorScheme';

export interface PhaseExplainerProps {
  /** Current active phase (0-4) */
  currentPhase: number;
  /** Animation progress (0-1) */
  progress: number;
  /** Is animation playing */
  isPlaying: boolean;
  /** Show business impact information */
  showBusinessImpact?: boolean;
  /** Compact mode */
  isCompact?: boolean;
  /** Auto-hide during playback */
  autoHide?: boolean;
  /** Custom CSS classes */
  className?: string;
}

export function PhaseExplainer({
  currentPhase,
  progress,
  isPlaying,
  showBusinessImpact = true,
  isCompact = false,
  autoHide = false,
  className = ''
}: PhaseExplainerProps) {
  const t = useTranslations('neuralAnimation.explanations');

  // State for visibility and transitions
  const [isVisible, setIsVisible] = useState(true);
  const [showTransition, setShowTransition] = useState(false);

  // Phase explanations with business context
  const phaseExplanations = {
    0: {
      title: 'Chaos Traditionnel',
      subtitle: 'Code fragmenté, solutions éparses',
      description: 'Développement traditionnel avec inefficacités typiques : code dupliqué, solutions dispersées, debugging fastidieux.',
      businessImpact: {
        icon: <Target size={16} />,
        text: '60-80% du temps perdu en coordination et corrections'
      },
      keyPoints: [
        'Code fragmenté et difficile à maintenir',
        'Debugging manuel chronophage',
        'Solutions dispersées sans cohérence',
        'Dépendance aux développeurs expérimentés'
      ],
      nextPhase: 'Reconnaissance des modèles IA'
    },
    1: {
      title: 'Reconnaissance IA',
      subtitle: 'Identification des modèles et possibilités',
      description: 'L\'IA commence à identifier les modèles dans le chaos, révélant les opportunités d\'automatisation et d\'optimisation.',
      businessImpact: {
        icon: <Lightbulb size={16} />,
        text: 'Première vision de la transformation possible'
      },
      keyPoints: [
        'IA analyse les modèles existants',
        'Identification des tâches répétitives',
        'Découverte des goulots d\'étranglement',
        'Émergence des solutions intelligentes'
      ],
      nextPhase: 'Formation du réseau neural'
    },
    2: {
      title: 'Formation Neural',
      subtitle: 'Réseau intelligent se structure',
      description: 'Formation active du réseau neural d\'agents IA. Apprentissage accéléré des meilleures pratiques et optimisation des flux.',
      businessImpact: {
        icon: <Zap size={16} />,
        text: 'Apprentissage 10x plus rapide qu\'un humain'
      },
      keyPoints: [
        'Réseau d\'agents IA se forme',
        'Apprentissage automatique des bonnes pratiques',
        'Optimisation continue des processus',
        'Intelligence collective émergente'
      ],
      nextPhase: 'Connexion et orchestration'
    },
    3: {
      title: 'Connexion Agentique',
      subtitle: 'Orchestration parfaite des agents',
      description: 'Les agents IA collaborent harmonieusement. Synchronisation parfaite, partage de connaissances et émergence de solutions complexes.',
      businessImpact: {
        icon: <ArrowRight size={16} />,
        text: 'Collaboration sans friction humaine'
      },
      keyPoints: [
        'Agents collaborent de manière autonome',
        'Synchronisation parfaite des tâches',
        'Partage instantané des connaissances',
        'Émergence de solutions sophistiquées'
      ],
      nextPhase: 'Maîtrise Newcode'
    },
    4: {
      title: 'Maîtrise Newcode',
      subtitle: 'Programmation agentique maîtrisée',
      description: 'État final : maîtrise complète de la programmation agentique. Productivité 3-5x, développement autonome, excellence continue.',
      businessImpact: {
        icon: <Zap size={16} />,
        text: 'Productivité 3-5x plus élevée'
      },
      keyPoints: [
        'Développement par spécification maîtrisé',
        'Agents autonomes et fiables',
        'Qualité et vitesse exceptionnelles',
        'Innovation continue automatisée'
      ],
      nextPhase: null
    }
  };

  // Get current phase explanation
  const currentExplanation = useMemo(() => {
    return phaseExplanations[currentPhase as keyof typeof phaseExplanations];
  }, [currentPhase]);

  // Handle auto-hide logic
  useEffect(() => {
    if (autoHide && isPlaying) {
      const timer = setTimeout(() => {
        setIsVisible(false);
      }, 3000);

      return () => clearTimeout(timer);
    } else {
      setIsVisible(true);
    }
  }, [autoHide, isPlaying, currentPhase]);

  // Handle phase transitions
  useEffect(() => {
    setShowTransition(true);
    const timer = setTimeout(() => {
      setShowTransition(false);
    }, 500);

    return () => clearTimeout(timer);
  }, [currentPhase]);

  // Progress percentage for current phase
  const phaseProgress = useMemo(() => {
    // Calculate progress within current phase
    const phaseDefinition = getPhaseDefinition(currentPhase);
    if (!phaseDefinition) return 0;

    // This is simplified - in real implementation, you'd calculate based on timeline
    return Math.min(100, (progress * 100) % 25); // Rough approximation
  }, [progress, currentPhase]);

  const explainerClasses = [
    'neural-phase-explainer',
    isCompact ? 'neural-explainer-compact' : '',
    !isVisible ? 'neural-explainer-hidden' : '',
    showTransition ? 'neural-explainer-transition' : '',
    className
  ].filter(Boolean).join(' ');

  if (!currentExplanation) return null;

  return (
    <div
      className={explainerClasses}
      role="status"
      aria-live="polite"
      aria-atomic="true"
      style={{
        '--phase-color': getPhaseColor(currentPhase, 'primary'),
        '--phase-bg': getPhaseColor(currentPhase, 'background')
      } as React.CSSProperties}
    >
      {/* Phase Header */}
      <div className="neural-explainer-header">
        <div className="neural-phase-indicator">
          <span className="neural-phase-number">{currentPhase + 1}</span>
          <div className="neural-phase-progress">
            <div
              className="neural-phase-progress-fill"
              style={{ width: `${phaseProgress}%` }}
            />
          </div>
        </div>

        <div className="neural-phase-title-section">
          <h3 className="neural-phase-title">{currentExplanation.title}</h3>
          <p className="neural-phase-subtitle">{currentExplanation.subtitle}</p>
        </div>

        {!isCompact && (
          <button
            className="neural-info-toggle"
            aria-label={t('toggleDetails')}
            title={t('toggleDetails')}
          >
            <Info size={16} />
          </button>
        )}
      </div>

      {/* Phase Description */}
      {!isCompact && (
        <div className="neural-explainer-content">
          <p className="neural-phase-description">
            {currentExplanation.description}
          </p>

          {/* Business Impact */}
          {showBusinessImpact && currentExplanation.businessImpact && (
            <div className="neural-business-impact">
              {currentExplanation.businessImpact.icon}
              <span>{currentExplanation.businessImpact.text}</span>
            </div>
          )}

          {/* Key Points */}
          <div className="neural-key-points">
            <h4 className="neural-points-title">{t('keyTransformations')}:</h4>
            <ul className="neural-points-list">
              {currentExplanation.keyPoints.map((point, index) => (
                <li key={index} className="neural-point-item">
                  {point}
                </li>
              ))}
            </ul>
          </div>

          {/* Next Phase Indicator */}
          {currentExplanation.nextPhase && (
            <div className="neural-next-phase">
              <ArrowRight size={14} />
              <span>{t('nextPhase')}: {currentExplanation.nextPhase}</span>
            </div>
          )}
        </div>
      )}

      {/* Compact Mode Content */}
      {isCompact && (
        <div className="neural-explainer-compact-content">
          <p className="neural-compact-description">
            {currentExplanation.description}
          </p>
          {showBusinessImpact && currentExplanation.businessImpact && (
            <div className="neural-compact-impact">
              {currentExplanation.businessImpact.icon}
              <span>{currentExplanation.businessImpact.text}</span>
            </div>
          )}
        </div>
      )}

      {/* CSS Styles */}
      <style jsx>{`
        .neural-phase-explainer {
          background: var(--phase-bg);
          border: 1px solid var(--phase-color);
          border-radius: 12px;
          padding: 16px;
          font-family: 'Inter', system-ui, sans-serif;
          font-weight: 300; /* NEWCODE typography */
          transition: all 0.3s ease;
          opacity: 1;
          transform: translateY(0);
        }

        .neural-explainer-compact {
          padding: 12px;
          border-radius: 8px;
        }

        .neural-explainer-hidden {
          opacity: 0;
          transform: translateY(-8px);
          pointer-events: none;
        }

        .neural-explainer-transition {
          animation: phaseTransition 0.5s ease;
        }

        @keyframes phaseTransition {
          0% { opacity: 0.7; transform: scale(0.98); }
          50% { opacity: 1; transform: scale(1.02); }
          100% { opacity: 1; transform: scale(1); }
        }

        .neural-explainer-header {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          margin-bottom: 12px;
        }

        .neural-explainer-compact .neural-explainer-header {
          margin-bottom: 8px;
        }

        .neural-phase-indicator {
          display: flex;
          align-items: center;
          gap: 8px;
          flex-shrink: 0;
        }

        .neural-phase-number {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 28px;
          height: 28px;
          border-radius: 50%;
          background: var(--phase-color);
          color: white;
          font-size: 14px;
          font-weight: 400;
        }

        .neural-explainer-compact .neural-phase-number {
          width: 24px;
          height: 24px;
          font-size: 12px;
        }

        .neural-phase-progress {
          width: 40px;
          height: 4px;
          background: rgba(0, 0, 0, 0.1);
          border-radius: 2px;
          overflow: hidden;
        }

        .neural-phase-progress-fill {
          height: 100%;
          background: var(--phase-color);
          transition: width 0.3s ease;
          border-radius: 2px;
        }

        .neural-phase-title-section {
          flex: 1;
          min-width: 0;
        }

        .neural-phase-title {
          margin: 0 0 4px 0;
          font-size: 16px;
          font-weight: 400;
          color: var(--phase-color);
          line-height: 1.3;
        }

        .neural-explainer-compact .neural-phase-title {
          font-size: 14px;
          margin-bottom: 2px;
        }

        .neural-phase-subtitle {
          margin: 0;
          font-size: 12px;
          color: currentColor;
          opacity: 0.8;
          line-height: 1.3;
        }

        .neural-explainer-compact .neural-phase-subtitle {
          font-size: 11px;
        }

        .neural-info-toggle {
          background: none;
          border: 1px solid var(--phase-color);
          border-radius: 6px;
          padding: 4px;
          cursor: pointer;
          color: var(--phase-color);
          transition: all 0.2s ease;
          flex-shrink: 0;
        }

        .neural-info-toggle:hover {
          background: var(--phase-color);
          color: white;
        }

        .neural-explainer-content {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .neural-phase-description {
          margin: 0;
          font-size: 14px;
          line-height: 1.5;
          color: currentColor;
        }

        .neural-business-impact {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 8px 12px;
          background: rgba(0, 136, 255, 0.1);
          border-radius: 8px;
          font-size: 13px;
          font-weight: 400;
          color: rgba(0, 136, 255, 0.9);
        }

        .neural-key-points {
          margin-top: 4px;
        }

        .neural-points-title {
          margin: 0 0 8px 0;
          font-size: 13px;
          font-weight: 400;
          color: var(--phase-color);
        }

        .neural-points-list {
          margin: 0;
          padding-left: 16px;
          list-style: none;
        }

        .neural-point-item {
          position: relative;
          margin-bottom: 4px;
          font-size: 12px;
          line-height: 1.4;
          padding-left: 8px;
        }

        .neural-point-item::before {
          content: '→';
          position: absolute;
          left: -8px;
          color: var(--phase-color);
          font-weight: 400;
        }

        .neural-next-phase {
          display: flex;
          align-items: center;
          gap: 6px;
          margin-top: 4px;
          font-size: 11px;
          color: var(--phase-color);
          opacity: 0.8;
        }

        .neural-explainer-compact-content {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .neural-compact-description {
          margin: 0;
          font-size: 12px;
          line-height: 1.4;
          color: currentColor;
        }

        .neural-compact-impact {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 11px;
          color: var(--phase-color);
          font-weight: 400;
        }

        /* Focus styles for accessibility */
        .neural-info-toggle:focus {
          outline: 2px solid #0088ff;
          outline-offset: 2px;
        }

        /* Reduced motion support */
        @media (prefers-reduced-motion: reduce) {
          .neural-phase-explainer {
            transition: none;
          }

          .neural-explainer-transition {
            animation: none;
          }

          .neural-phase-progress-fill {
            transition: none;
          }
        }

        /* High contrast mode */
        @media (prefers-contrast: high) {
          .neural-phase-explainer {
            border: 2px solid var(--phase-color);
          }

          .neural-business-impact {
            background: var(--phase-color);
            color: white;
          }

          .neural-info-toggle {
            border: 2px solid var(--phase-color);
          }
        }

        /* Mobile responsive adjustments */
        @media (max-width: 768px) {
          .neural-phase-explainer {
            padding: 12px;
          }

          .neural-explainer-header {
            gap: 8px;
          }

          .neural-phase-title {
            font-size: 14px;
          }

          .neural-phase-description {
            font-size: 13px;
          }

          .neural-key-points {
            margin-top: 8px;
          }

          .neural-point-item {
            font-size: 11px;
          }
        }

        /* Dark theme support */
        @media (prefers-color-scheme: dark) {
          .neural-business-impact {
            background: rgba(102, 170, 255, 0.2);
            color: rgba(102, 170, 255, 0.9);
          }
        }
      `}</style>
    </div>
  );
}

export default PhaseExplainer;