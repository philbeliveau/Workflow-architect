'use client';

import React, { useEffect, useState, useRef } from 'react';
import { useTranslations } from 'next-intl';
import NeuralAssemblyEngine from '@/components/animations/NeuralAssemblyEngine';

const NeuralAnimationOverlay: React.FC = () => {
  const t = useTranslations('neuralEngine');
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [animationPhase, setAnimationPhase] = useState<'hidden' | 'appearing' | 'visible' | 'sliding-out' | 'hidden-final'>('hidden');
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollY(currentScrollY);

      // Get viewport height for calculations
      const viewportHeight = window.innerHeight;

      // Trigger points based on scroll position
      const heroHeight = viewportHeight; // Assuming hero is full viewport height
      const triggerStart = heroHeight * 0.3; // Start appearing at 30% through hero
      const fullyVisiblePoint = heroHeight * 0.8; // Fully visible at 80% through hero
      const slideOutStart = heroHeight * 1.2; // Start sliding out after hero
      const slideOutComplete = heroHeight * 1.8; // Complete slide out

      if (currentScrollY < triggerStart) {
        setAnimationPhase('hidden');
        setIsVisible(false);
      } else if (currentScrollY >= triggerStart && currentScrollY < fullyVisiblePoint) {
        setAnimationPhase('appearing');
        setIsVisible(true);
      } else if (currentScrollY >= fullyVisiblePoint && currentScrollY < slideOutStart) {
        setAnimationPhase('visible');
        setIsVisible(true);
      } else if (currentScrollY >= slideOutStart && currentScrollY < slideOutComplete) {
        setAnimationPhase('sliding-out');
        setIsVisible(true);
      } else {
        setAnimationPhase('hidden-final');
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  if (!isVisible && animationPhase !== 'sliding-out') return null;

  // Calculate animation properties based on scroll position and phase
  const getTransformStyle = () => {
    const viewportHeight = window.innerHeight;
    const heroHeight = viewportHeight;
    const triggerStart = heroHeight * 0.3;
    const fullyVisiblePoint = heroHeight * 0.8;
    const slideOutStart = heroHeight * 1.2;
    const slideOutComplete = heroHeight * 1.8;

    switch (animationPhase) {
      case 'appearing': {
        const progress = (scrollY - triggerStart) / (fullyVisiblePoint - triggerStart);
        const opacity = Math.min(progress, 1);
        const scale = 0.8 + (0.2 * progress);
        return {
          opacity,
          transform: `translate(-50%, -50%) scale(${scale})`,
          transition: 'none'
        };
      }
      case 'visible': {
        return {
          opacity: 1,
          transform: 'translate(-50%, -50%) scale(1)',
          transition: 'none'
        };
      }
      case 'sliding-out': {
        const progress = (scrollY - slideOutStart) / (slideOutComplete - slideOutStart);
        const slideProgress = Math.min(progress, 1);
        const translateX = slideProgress * 120; // Slide 120% to the right
        const opacity = 1 - (slideProgress * 0.8); // Fade out slightly
        return {
          opacity,
          transform: `translate(calc(-50% + ${translateX}vw), -50%) scale(1)`,
          transition: 'none'
        };
      }
      default:
        return {
          opacity: 0,
          transform: 'translate(-50%, -50%) scale(0.8)',
          transition: 'none'
        };
    }
  };

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-50 pointer-events-none"
      style={{
        display: isVisible || animationPhase === 'sliding-out' ? 'block' : 'none'
      }}
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-white/95 backdrop-blur-sm"
        style={{
          opacity: animationPhase === 'sliding-out' ?
            Math.max(0, 1 - ((scrollY - window.innerHeight * 1.2) / (window.innerHeight * 0.6))) :
            animationPhase === 'appearing' ?
            Math.min(1, (scrollY - window.innerHeight * 0.3) / (window.innerHeight * 0.5)) :
            1
        }}
      />

      {/* Animation Container */}
      <div
        className="absolute top-1/2 left-1/2 w-full max-w-6xl px-4"
        style={getTransformStyle()}
      >
        <div className="flex flex-col items-center space-y-8">
          {/* Title */}
          <div className="text-center">
            <h2 className="text-4xl md:text-6xl font-light text-gray-900 mb-4">
              {t('title')}
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 font-light max-w-4xl">
              {t('description')}
            </p>
          </div>

          {/* Animation */}
          <div className="bg-white/90 backdrop-blur-sm rounded-3xl border border-gray-200/50 shadow-2xl p-8 md:p-12">
            <NeuralAssemblyEngine
              width={800}
              height={500}
              autoPlay={animationPhase === 'visible'}
              showControls={false}
              className="neural-overlay-animation"
            />
          </div>

          {/* Phase indicators */}
          {animationPhase === 'visible' && (
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4 max-w-5xl w-full">
              {[
                { phase: 'chaos', color: 'from-red-500 to-red-600' },
                { phase: 'recognition', color: 'from-orange-500 to-orange-600' },
                { phase: 'formation', color: 'from-yellow-500 to-yellow-600' },
                { phase: 'connection', color: 'from-green-500 to-green-600' },
                { phase: 'mastery', color: 'from-blue-500 to-blue-600' }
              ].map(({ phase, color }) => (
                <div key={phase} className="text-center bg-white/80 backdrop-blur-sm rounded-lg p-4 border border-gray-200/50">
                  <div className={`w-4 h-4 rounded-full bg-gradient-to-r ${color} mx-auto mb-2`}></div>
                  <h4 className="font-medium text-gray-900 text-sm mb-1">
                    {t(`phases.${phase}.name`)}
                  </h4>
                  <p className="text-xs text-gray-600 font-light leading-tight">
                    {t(`phases.${phase}.description`)}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Scroll indicator */}
      {animationPhase === 'appearing' && (
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center">
          <div className="animate-bounce">
            <div className="w-1 h-8 bg-gradient-to-b from-gray-400 to-transparent rounded-full mx-auto"></div>
          </div>
          <p className="text-sm text-gray-500 mt-2 font-light">
            Continuez à défiler pour voir la transformation
          </p>
        </div>
      )}
    </div>
  );
};

export default NeuralAnimationOverlay;