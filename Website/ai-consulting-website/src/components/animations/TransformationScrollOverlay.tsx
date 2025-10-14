'use client';

import React, { useEffect, useState, useRef } from 'react';
import { useTranslations } from 'next-intl';
import TransformationProcessInteractive from '@/components/sections/TransformationProcessInteractive';

const TransformationScrollOverlay: React.FC = () => {
  const t = useTranslations('transformation');
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [animationPhase, setAnimationPhase] = useState<'hidden' | 'appearing' | 'visible' | 'sliding-out' | 'hidden-final'>('hidden');
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollY(currentScrollY);

      const viewportHeight = window.innerHeight;
      const heroHeight = viewportHeight;

      // Trigger points for transformation overlay - adjusted to avoid blocking Formation section
      const triggerStart = heroHeight * 0.6; // Start appearing at 60% through hero
      const fullyVisiblePoint = heroHeight * 0.9; // Fully visible at 90% through hero
      const slideOutStart = heroHeight * 1.1; // Start sliding out sooner
      const slideOutComplete = heroHeight * 1.4; // Complete slide out before Formation section

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
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  if (!isVisible && animationPhase !== 'sliding-out') return null;

  const getTransformStyle = () => {
    const viewportHeight = window.innerHeight;
    const heroHeight = viewportHeight;
    const triggerStart = heroHeight * 0.6;
    const fullyVisiblePoint = heroHeight * 0.9;
    const slideOutStart = heroHeight * 1.1;
    const slideOutComplete = heroHeight * 1.4;

    switch (animationPhase) {
      case 'appearing': {
        const progress = (scrollY - triggerStart) / (fullyVisiblePoint - triggerStart);
        const opacity = Math.min(progress, 1);
        const scale = 0.85 + (0.15 * progress);
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
        const translateX = slideProgress * 110; // Slide 110% to the right
        const opacity = Math.max(0, 1 - (slideProgress * 0.9)); // Fade out
        const scale = 1 - (slideProgress * 0.1); // Slight scale down
        return {
          opacity,
          transform: `translate(calc(-50% + ${translateX}vw), -50%) scale(${scale})`,
          transition: 'none'
        };
      }
      default:
        return {
          opacity: 0,
          transform: 'translate(-50%, -50%) scale(0.85)',
          transition: 'none'
        };
    }
  };

  const getBackdropOpacity = () => {
    const viewportHeight = window.innerHeight;
    const heroHeight = viewportHeight;
    const triggerStart = heroHeight * 0.6;
    const fullyVisiblePoint = heroHeight * 0.9;
    const slideOutStart = heroHeight * 1.1;
    const slideOutComplete = heroHeight * 1.4;

    switch (animationPhase) {
      case 'appearing':
        return Math.min(0.7, (scrollY - triggerStart) / (fullyVisiblePoint - triggerStart));
      case 'visible':
        return 0.7;
      case 'sliding-out':
        return Math.max(0, 0.7 - ((scrollY - slideOutStart) / (slideOutComplete - slideOutStart)));
      default:
        return 0;
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
      {/* Dynamic backdrop - much lighter */}
      <div
        className="absolute inset-0 backdrop-blur-sm"
        style={{
          background: 'linear-gradient(135deg, rgba(20, 20, 20, 0.6) 0%, rgba(30, 30, 30, 0.5) 50%, rgba(20, 20, 20, 0.6) 100%)',
          opacity: getBackdropOpacity()
        }}
      />

      {/* Transformation content container */}
      <div
        className="absolute top-1/2 left-1/2 w-[90vw] max-w-6xl h-[80vh] max-h-[700px]"
        style={getTransformStyle()}
      >
        <div className="relative w-full h-full">
          {/* Header */}
          <div className="absolute top-4 left-1/2 transform -translate-x-1/2 text-center z-10">
            <h1 className="text-3xl md:text-5xl font-light text-white mb-2">
              Transformation Progressive
            </h1>
            <p className="text-lg md:text-xl text-gray-300 font-light max-w-3xl">
              De la confusion initiale aux applications fonctionnelles
            </p>
          </div>

          {/* Main transformation visualization */}
          <div className="absolute inset-0 pt-24 pb-4">
            <div className="w-full h-full">
              <TransformationProcessInteractive
                autoPlay={animationPhase === 'visible'}
                duration={6000}
              />
            </div>
          </div>

          {/* Scroll indicator */}
          {animationPhase === 'appearing' && (
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center">
              <div className="animate-bounce">
                <div className="w-1 h-8 bg-gradient-to-b from-yellow-400 to-transparent rounded-full mx-auto"></div>
              </div>
              <p className="text-sm text-gray-400 mt-2 font-light">
                Continuez à défiler pour voir la transformation complète
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TransformationScrollOverlay;