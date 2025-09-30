'use client';

import React, { useEffect, useRef } from 'react';
import anime from 'animejs';

interface FloatingCirclesProps {
  className?: string;
}

const FloatingCircles: React.FC<FloatingCirclesProps> = ({ className = '' }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const circles = containerRef.current.querySelectorAll('.floating-circle');
    console.log('FloatingCircles: Found', circles.length, 'circles');

    if (circles.length === 0) return;

    // Initial animation setup - make them visible immediately
    anime.set(circles, {
      opacity: 1,
      scale: 1
    });

    // Staggered entrance animation
    anime({
      targets: circles,
      opacity: [0.3, 1],
      scale: [0.8, 1],
      duration: 1500,
      delay: anime.stagger(300),
      easing: 'easeOutElastic(1, .8)',
      complete: () => {
        console.log('FloatingCircles: Entrance animation completed');
      }
    });

    // Continuous floating animation with shorter delay
    const floatingAnimation = anime({
      targets: circles,
      translateY: [
        { value: -15, duration: 2500 },
        { value: 15, duration: 2500 },
        { value: 0, duration: 2500 }
      ],
      translateX: [
        { value: 8, duration: 3500 },
        { value: -8, duration: 3500 },
        { value: 0, duration: 3500 }
      ],
      rotate: [
        { value: '360deg', duration: 12000 }
      ],
      loop: true,
      easing: 'easeInOutSine',
      delay: anime.stagger(200),
      autoplay: true
    });

    return () => {
      floatingAnimation.pause();
    };
  }, []);

  return (
    <div ref={containerRef} className={`relative overflow-hidden ${className}`}>
      {/* Large background circle */}
      <div
        className="floating-circle absolute top-16 left-16 w-32 h-32 rounded-full"
        style={{
          background: 'linear-gradient(135deg, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.15) 100%)',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(0,0,0,0.1)'
        }}
      />

      {/* Medium circle */}
      <div
        className="floating-circle absolute top-32 left-64 w-20 h-20 rounded-full"
        style={{
          background: 'linear-gradient(135deg, rgba(0,0,0,0.25) 0%, rgba(0,0,0,0.12) 100%)',
          backdropFilter: 'blur(8px)',
          border: '1px solid rgba(0,0,0,0.1)'
        }}
      />

      {/* Small circle */}
      <div
        className="floating-circle absolute top-8 left-48 w-12 h-12 rounded-full"
        style={{
          background: 'linear-gradient(135deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.1) 100%)',
          backdropFilter: 'blur(6px)',
          border: '1px solid rgba(0,0,0,0.1)'
        }}
      />

      {/* Extra small circles */}
      <div
        className="floating-circle absolute top-48 left-32 w-8 h-8 rounded-full"
        style={{
          background: 'linear-gradient(135deg, rgba(0,0,0,0.18) 0%, rgba(0,0,0,0.08) 100%)',
          backdropFilter: 'blur(4px)',
          border: '1px solid rgba(0,0,0,0.1)'
        }}
      />

      <div
        className="floating-circle absolute top-12 left-80 w-6 h-6 rounded-full"
        style={{
          background: 'linear-gradient(135deg, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0.06) 100%)',
          backdropFilter: 'blur(3px)',
          border: '1px solid rgba(0,0,0,0.1)'
        }}
      />

      {/* Additional circles for better visual impact */}
      <div
        className="floating-circle absolute top-40 left-12 w-10 h-10 rounded-full"
        style={{
          background: 'linear-gradient(135deg, rgba(0,0,0,0.22) 0%, rgba(0,0,0,0.11) 100%)',
          backdropFilter: 'blur(5px)',
          border: '1px solid rgba(0,0,0,0.1)'
        }}
      />
    </div>
  );
};

export default FloatingCircles;