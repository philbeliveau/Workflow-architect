/**
 * Recognition Phase - Neural Assembly Engine
 * Phase 2: Discovering agentic programming patterns (2.5-4.5s)
 */

import { AnimeV3Manager } from '../utils/animationUtils';
import { NeuralNode } from '../../types';
import { getPhaseColor } from '../../data/colorScheme';

export async function recognitionPhase(
  animeManager: AnimeV3Manager,
  nodes: NeuralNode[],
  viewport: { width: number; height: number }
): Promise<void> {
  console.log('Initializing Recognition Phase - Pattern discovery');

  // Phase 2: Recognition and pattern discovery (2.5-4.5s)
  const phaseColors = {
    primary: getPhaseColor(1, 'primary'),
    secondary: getPhaseColor(1, 'secondary'),
    accent: getPhaseColor(1, 'accent'),
    particle: getPhaseColor(1, 'particle')
  };

  // 1. Slow down chaotic movement
  animeManager.createAnimation('recognition-slow-chaos', '.code-fragment', {
    translateX: () => animeManager.random(-100, 100),
    translateY: () => animeManager.random(-80, 80),
    rotateZ: () => animeManager.random(-30, 30),
    scale: [null, 1],
    opacity: [null, 0.9],
    duration: 800,
    delay: animeManager.stagger(20),
    easing: 'easeOutExpo',
    autoplay: true
  });

  // 2. Core node emergence (Orchestrateur appears first)
  setTimeout(() => {
    const coreNode = document.querySelector('.neural-node.node-core');
    if (coreNode) {
      animeManager.createAnimation('recognition-core-emerge', coreNode, {
        opacity: [0, 1],
        scale: [0, 1.2, 1],
        rotateZ: [180, 0],
        duration: 1200,
        easing: 'easeOutElastic(1, .8)',
        autoplay: true
      });

      // Core node glow effect
      animeManager.createAnimation('recognition-core-glow', '.node-core .pulse-ring', {
        opacity: [0, 0.6, 0.3],
        scale: [0.8, 1.5, 1.2],
        duration: 1500,
        loop: true,
        direction: 'alternate',
        easing: 'easeInOutSine',
        autoplay: true
      });
    }
  }, 300);

  // 3. Color transition to recognition blue
  animeManager.createAnimation('recognition-color-shift', '.fragment-bg', {
    fill: phaseColors.particle,
    stroke: phaseColors.primary,
    strokeWidth: 2,
    duration: 1000,
    delay: 500,
    easing: 'easeOutQuad',
    autoplay: true
  });

  // 4. Pattern-based particle grouping
  setTimeout(() => {
    animeManager.createAnimation('recognition-particle-group', '.code-fragment', {
      translateX: () => animeManager.random(-60, 60),
      translateY: () => animeManager.random(-40, 40),
      rotateZ: 0,
      scale: 1,
      duration: 1000,
      delay: animeManager.stagger(40),
      easing: 'easeOutBack(1.7)',
      autoplay: true
    });
  }, 600);

  // 5. Update particle text content to recognition terms
  setTimeout(() => {
    const recognitionFragments = [
      'AI agent pattern',
      'specification first',
      'structured approach',
      'automated testing',
      'code generation',
      'intelligent review',
      'systematic debugging',
      'documentation sync'
    ];

    document.querySelectorAll('.fragment-text').forEach((el, index) => {
      const textEl = el as HTMLElement;
      if (textEl && recognitionFragments[index % recognitionFragments.length]) {
        animeManager.createAnimation(`recognition-text-${index}`, textEl, {
          opacity: [1, 0, 1],
          scale: [1, 0.8, 1],
          duration: 600,
          delay: index * 50,
          complete: () => {
            textEl.textContent = recognitionFragments[index % recognitionFragments.length];
          },
          autoplay: true
        });
      }
    });
  }, 800);

  // 6. First connection hints (subtle)
  setTimeout(() => {
    const connections = document.querySelectorAll('.connection-active');
    if (connections.length > 0) {
      animeManager.createAnimation('recognition-connection-hints', connections, {
        opacity: [0, 0.3, 0.1],
        strokeWidth: [1, 2, 1],
        strokeDashoffset: [20, 0, 10],
        duration: 1200,
        delay: animeManager.stagger(200),
        easing: 'easeInOutQuad',
        autoplay: true
      });
    }
  }, 1000);

  // 7. Subtle zoom effect to focus attention
  animeManager.createAnimation('recognition-focus-zoom', '.svg-container', {
    scale: [1, 1.05, 1],
    duration: 1500,
    easing: 'easeInOutSine',
    autoplay: true
  });

  // 8. Recognition pulse waves from core
  setTimeout(() => {
    animeManager.createAnimation('recognition-pulse-waves', '.node-core .pulse-ring', {
      opacity: [0.6, 0, 0.6],
      scale: [1, 2.5, 1],
      strokeWidth: [3, 0, 3],
      duration: 2000,
      loop: true,
      easing: 'easeOutCirc',
      autoplay: true
    });
  }, 1200);

  // 9. Particle attraction to core (subtle)
  setTimeout(() => {
    animeManager.createAnimation('recognition-core-attraction', '.code-fragment', {
      translateX: () => animeManager.random(-40, 40),
      translateY: () => animeManager.random(-30, 30),
      duration: 800,
      delay: animeManager.stagger(60),
      easing: 'easeInOutSine',
      autoplay: true
    });
  }, 1400);

  console.log('Recognition Phase initialized - patterns emerging, core node active');
}