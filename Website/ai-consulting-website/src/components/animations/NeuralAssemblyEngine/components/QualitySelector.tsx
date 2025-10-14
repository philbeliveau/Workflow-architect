/**
 * Quality Selector - Neural Assembly Engine
 * Performance options (Low/Medium/High) with device capability detection
 */

'use client';

import React, { useState, useCallback, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import { Settings, Monitor, Smartphone, Zap, ChevronDown } from 'lucide-react';

export type QualityLevel = 'low' | 'medium' | 'high' | 'auto';

export interface QualityOption {
  level: QualityLevel;
  label: string;
  description: string;
  icon: React.ReactNode;
  particleCount: number;
  animationDuration: number;
  effects: string[];
}

export interface QualitySelectorProps {
  /** Current quality level */
  currentQuality?: QualityLevel;
  /** Quality change callback */
  onQualityChange: (quality: QualityLevel) => void;
  /** Show performance indicators */
  showPerformanceInfo?: boolean;
  /** Compact mode */
  isCompact?: boolean;
  /** Auto-detect device capabilities */
  autoDetect?: boolean;
  /** Custom CSS classes */
  className?: string;
}

export function QualitySelector({
  currentQuality = 'auto',
  onQualityChange,
  showPerformanceInfo = true,
  isCompact = false,
  autoDetect = true,
  className = ''
}: QualitySelectorProps) {
  const t = useTranslations('neuralAnimation.quality');

  // State
  const [isOpen, setIsOpen] = useState(false);
  const [detectedQuality, setDetectedQuality] = useState<QualityLevel>('medium');
  const [deviceInfo, setDeviceInfo] = useState<{
    type: 'desktop' | 'tablet' | 'mobile';
    performance: 'high' | 'medium' | 'low';
    cores: number;
    memory: number;
  } | null>(null);

  // Quality options with French labels
  const qualityOptions: QualityOption[] = [
    {
      level: 'auto',
      label: t('auto'),
      description: t('autoDescription'),
      icon: <Zap size={16} />,
      particleCount: 0, // Will be determined by auto-detection
      animationDuration: 12000,
      effects: ['adaptive']
    },
    {
      level: 'high',
      label: t('high'),
      description: t('highDescription'),
      icon: <Monitor size={16} />,
      particleCount: 40,
      animationDuration: 12000,
      effects: ['nodeGlow', 'connectionPulse', 'particleTrails', 'backgroundEffects']
    },
    {
      level: 'medium',
      label: t('medium'),
      description: t('mediumDescription'),
      icon: <Monitor size={16} />,
      particleCount: 25,
      animationDuration: 12000,
      effects: ['nodeGlow', 'connectionPulse']
    },
    {
      level: 'low',
      label: t('low'),
      description: t('lowDescription'),
      icon: <Smartphone size={16} />,
      particleCount: 15,
      animationDuration: 12000,
      effects: ['basic']
    }
  ];

  // Device capability detection
  const detectDeviceCapabilities = useCallback(async () => {
    try {
      // Basic device detection
      const userAgent = navigator.userAgent.toLowerCase();
      const isMobile = /mobile|android|iphone|ipad|tablet/.test(userAgent);
      const isTablet = /tablet|ipad/.test(userAgent);

      // Hardware detection (where available)
      const cores = navigator.hardwareConcurrency || 4;
      const memory = (navigator as any).deviceMemory || 4;

      // Performance estimation
      let performance: 'high' | 'medium' | 'low' = 'medium';

      if (isMobile && !isTablet) {
        performance = cores >= 6 && memory >= 4 ? 'medium' : 'low';
      } else if (isTablet) {
        performance = cores >= 4 && memory >= 4 ? 'medium' : 'low';
      } else {
        // Desktop
        performance = cores >= 8 && memory >= 8 ? 'high' : cores >= 4 ? 'medium' : 'low';
      }

      // Additional performance tests
      const canvas = document.createElement('canvas');
      const gl = canvas.getContext('webgl2') || canvas.getContext('webgl');
      const hasWebGL = !!gl;

      // Adjust based on WebGL support
      if (!hasWebGL && performance === 'high') {
        performance = 'medium';
      }

      const deviceType = isMobile ? 'mobile' : isTablet ? 'tablet' : 'desktop';

      setDeviceInfo({
        type: deviceType,
        performance,
        cores,
        memory
      });

      // Map performance to quality level
      const qualityMap: Record<string, QualityLevel> = {
        high: 'high',
        medium: 'medium',
        low: 'low'
      };

      const recommendedQuality = qualityMap[performance];
      setDetectedQuality(recommendedQuality);

      // Auto-set quality if in auto mode
      if (currentQuality === 'auto') {
        onQualityChange(recommendedQuality);
      }

      console.log('Device capabilities detected:', {
        type: deviceType,
        performance,
        cores,
        memory,
        webgl: hasWebGL,
        recommendedQuality
      });

    } catch (error) {
      console.warn('Could not detect device capabilities:', error);
      setDetectedQuality('medium');
    }
  }, [currentQuality, onQualityChange]);

  // Handle quality selection
  const handleQualitySelect = useCallback((quality: QualityLevel) => {
    onQualityChange(quality);
    setIsOpen(false);
  }, [onQualityChange]);

  // Handle keyboard navigation
  const handleKeyDown = useCallback((event: React.KeyboardEvent) => {
    if (event.key === 'Escape') {
      setIsOpen(false);
    }
  }, []);

  // Auto-detect on mount
  useEffect(() => {
    if (autoDetect) {
      detectDeviceCapabilities();
    }
  }, [autoDetect, detectDeviceCapabilities]);

  // Get current quality option
  const getCurrentOption = useCallback(() => {
    return qualityOptions.find(option => option.level === currentQuality) || qualityOptions[0];
  }, [currentQuality]);

  // Get effective quality (for auto mode)
  const getEffectiveQuality = useCallback(() => {
    return currentQuality === 'auto' ? detectedQuality : currentQuality;
  }, [currentQuality, detectedQuality]);

  const currentOption = getCurrentOption();
  const effectiveQuality = getEffectiveQuality();

  const selectorClasses = [
    'neural-quality-selector',
    isCompact ? 'neural-selector-compact' : '',
    isOpen ? 'neural-selector-open' : '',
    className
  ].filter(Boolean).join(' ');

  return (
    <div
      className={selectorClasses}
      onKeyDown={handleKeyDown}
    >
      {/* Quality Toggle Button */}
      <button
        className="neural-quality-toggle"
        onClick={() => setIsOpen(!isOpen)}
        aria-label={t('qualitySettings')}
        aria-expanded={isOpen}
        aria-haspopup="menu"
      >
        <div className="neural-toggle-content">
          {currentOption.icon}
          {!isCompact && (
            <span className="neural-toggle-label">{currentOption.label}</span>
          )}
          <ChevronDown
            size={14}
            className={`neural-toggle-arrow ${isOpen ? 'neural-arrow-up' : ''}`}
          />
        </div>
      </button>

      {/* Quality Dropdown */}
      {isOpen && (
        <div className="neural-quality-dropdown" role="menu">
          {/* Device Info Header */}
          {showPerformanceInfo && deviceInfo && (
            <div className="neural-device-info">
              <h4 className="neural-device-title">{t('deviceInfo')}</h4>
              <div className="neural-device-details">
                <span className="neural-device-type">
                  {t('deviceType')}: {t(deviceInfo.type)}
                </span>
                <span className="neural-device-performance">
                  {t('performance')}: {t(deviceInfo.performance)}
                </span>
                {deviceInfo.cores && (
                  <span className="neural-device-specs">
                    {deviceInfo.cores} cores, {deviceInfo.memory}GB RAM
                  </span>
                )}
              </div>
            </div>
          )}

          {/* Quality Options */}
          <div className="neural-quality-options">
            {qualityOptions.map((option) => {
              const isSelected = option.level === currentQuality;
              const isRecommended = option.level === detectedQuality;

              return (
                <button
                  key={option.level}
                  className={`neural-quality-option ${
                    isSelected ? 'neural-option-selected' : ''
                  } ${isRecommended ? 'neural-option-recommended' : ''}`}
                  onClick={() => handleQualitySelect(option.level)}
                  role="menuitem"
                  aria-selected={isSelected}
                >
                  <div className="neural-option-header">
                    <div className="neural-option-icon">{option.icon}</div>
                    <div className="neural-option-info">
                      <span className="neural-option-label">
                        {option.label}
                        {isRecommended && (
                          <span className="neural-recommended-badge">
                            {t('recommended')}
                          </span>
                        )}
                      </span>
                      <span className="neural-option-description">
                        {option.description}
                      </span>
                    </div>
                  </div>

                  {/* Performance Indicators */}
                  {showPerformanceInfo && option.level !== 'auto' && (
                    <div className="neural-option-performance">
                      <div className="neural-performance-item">
                        <span className="neural-performance-label">{t('particles')}:</span>
                        <span className="neural-performance-value">{option.particleCount}</span>
                      </div>
                      <div className="neural-performance-item">
                        <span className="neural-performance-label">{t('effects')}:</span>
                        <span className="neural-performance-value">{option.effects.length}</span>
                      </div>
                    </div>
                  )}
                </button>
              );
            })}
          </div>

          {/* Performance Warning */}
          {effectiveQuality === 'low' && (
            <div className="neural-performance-warning">
              <p>{t('lowPerformanceWarning')}</p>
            </div>
          )}
        </div>
      )}

      {/* Backdrop */}
      {isOpen && (
        <div
          className="neural-quality-backdrop"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* CSS Styles */}
      <style jsx>{`
        .neural-quality-selector {
          position: relative;
          font-family: 'Inter', system-ui, sans-serif;
          font-weight: 300; /* NEWCODE typography */
        }

        .neural-quality-toggle {
          display: flex;
          align-items: center;
          background: none;
          border: 1px solid rgba(0, 0, 0, 0.2);
          border-radius: 8px;
          padding: 8px 12px;
          cursor: pointer;
          transition: all 0.2s ease;
          color: inherit;
          font-size: 14px;
        }

        .neural-selector-compact .neural-quality-toggle {
          padding: 6px 8px;
          font-size: 12px;
        }

        .neural-quality-toggle:hover {
          border-color: rgba(0, 136, 255, 0.5);
          background: rgba(0, 136, 255, 0.05);
        }

        .neural-selector-open .neural-quality-toggle {
          border-color: rgba(0, 136, 255, 0.7);
          background: rgba(0, 136, 255, 0.1);
        }

        .neural-toggle-content {
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .neural-toggle-label {
          font-weight: 400;
        }

        .neural-toggle-arrow {
          transition: transform 0.2s ease;
        }

        .neural-arrow-up {
          transform: rotate(180deg);
        }

        .neural-quality-dropdown {
          position: absolute;
          top: 100%;
          right: 0;
          margin-top: 4px;
          background: rgba(248, 250, 252, 0.98);
          border: 1px solid rgba(0, 0, 0, 0.1);
          border-radius: 12px;
          padding: 8px;
          min-width: 280px;
          max-width: 320px;
          backdrop-filter: blur(12px);
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.12);
          z-index: 1000;
          animation: fadeIn 0.2s ease;
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-8px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .neural-device-info {
          padding: 8px 12px;
          border-bottom: 1px solid rgba(0, 0, 0, 0.1);
          margin-bottom: 8px;
        }

        .neural-device-title {
          margin: 0 0 6px 0;
          font-size: 12px;
          font-weight: 400;
          color: rgba(0, 0, 0, 0.7);
        }

        .neural-device-details {
          display: flex;
          flex-direction: column;
          gap: 2px;
          font-size: 11px;
          color: rgba(0, 0, 0, 0.6);
        }

        .neural-quality-options {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .neural-quality-option {
          display: flex;
          flex-direction: column;
          align-items: stretch;
          background: none;
          border: 1px solid transparent;
          border-radius: 8px;
          padding: 8px 12px;
          cursor: pointer;
          transition: all 0.2s ease;
          text-align: left;
        }

        .neural-quality-option:hover {
          background: rgba(0, 136, 255, 0.05);
          border-color: rgba(0, 136, 255, 0.2);
        }

        .neural-option-selected {
          background: rgba(0, 136, 255, 0.1);
          border-color: rgba(0, 136, 255, 0.3);
        }

        .neural-option-recommended {
          position: relative;
        }

        .neural-option-header {
          display: flex;
          align-items: flex-start;
          gap: 8px;
        }

        .neural-option-icon {
          margin-top: 2px;
          color: rgba(0, 136, 255, 0.8);
        }

        .neural-option-info {
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 2px;
        }

        .neural-option-label {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 13px;
          font-weight: 400;
          color: inherit;
        }

        .neural-recommended-badge {
          font-size: 10px;
          background: rgba(0, 136, 255, 0.2);
          color: rgba(0, 136, 255, 0.9);
          padding: 1px 6px;
          border-radius: 10px;
          font-weight: 500;
        }

        .neural-option-description {
          font-size: 11px;
          color: rgba(0, 0, 0, 0.6);
          line-height: 1.3;
        }

        .neural-option-performance {
          margin-top: 6px;
          display: flex;
          gap: 12px;
          font-size: 10px;
          color: rgba(0, 0, 0, 0.5);
        }

        .neural-performance-item {
          display: flex;
          gap: 4px;
        }

        .neural-performance-label {
          opacity: 0.7;
        }

        .neural-performance-value {
          font-weight: 400;
        }

        .neural-performance-warning {
          margin-top: 8px;
          padding: 8px 12px;
          background: rgba(255, 193, 7, 0.1);
          border: 1px solid rgba(255, 193, 7, 0.3);
          border-radius: 8px;
          font-size: 11px;
          color: rgba(181, 116, 0, 0.9);
        }

        .neural-performance-warning p {
          margin: 0;
          line-height: 1.3;
        }

        .neural-quality-backdrop {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          z-index: 999;
        }

        /* Focus styles for accessibility */
        .neural-quality-toggle:focus,
        .neural-quality-option:focus {
          outline: 2px solid #0088ff;
          outline-offset: 2px;
        }

        /* Dark theme support */
        @media (prefers-color-scheme: dark) {
          .neural-quality-dropdown {
            background: rgba(26, 26, 26, 0.98);
            border-color: rgba(255, 255, 255, 0.1);
          }

          .neural-device-info {
            border-color: rgba(255, 255, 255, 0.1);
          }

          .neural-device-title,
          .neural-device-details,
          .neural-option-description {
            color: rgba(255, 255, 255, 0.6);
          }

          .neural-quality-toggle {
            border-color: rgba(255, 255, 255, 0.2);
          }

          .neural-quality-toggle:hover {
            border-color: rgba(102, 170, 255, 0.5);
            background: rgba(102, 170, 255, 0.05);
          }
        }

        /* High contrast mode */
        @media (prefers-contrast: high) {
          .neural-quality-toggle {
            border: 2px solid currentColor;
          }

          .neural-quality-dropdown {
            border: 2px solid currentColor;
            background: white;
          }

          .neural-option-selected {
            background: #0088ff;
            color: white;
          }
        }

        /* Reduced motion support */
        @media (prefers-reduced-motion: reduce) {
          .neural-quality-toggle,
          .neural-quality-option,
          .neural-toggle-arrow {
            transition: none;
          }

          .neural-quality-dropdown {
            animation: none;
          }
        }
      `}</style>
    </div>
  );
}

export default QualitySelector;