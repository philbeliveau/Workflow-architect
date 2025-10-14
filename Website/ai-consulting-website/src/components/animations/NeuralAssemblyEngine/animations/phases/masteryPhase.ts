/**
 * Mastery Phase - Neural Assembly Engine
 * Phase 5: Golden transformation to agentic programming mastery (10-12s)
 */

import { AnimeV3Manager } from '../utils/animationUtils';
import { NeuralNode } from '../../types';
import { getPhaseColor } from '../../data/colorScheme';

export async function masteryPhase(
  animeManager: AnimeV3Manager,
  nodes: NeuralNode[],
  viewport: { width: number; height: number }
): Promise<void> {
  console.log('Initializing Mastery Phase - Golden transformation to agentic programming mastery');

  // Phase 5: Mastery and golden transformation (10-12s)
  const phaseColors = {
    primary: getPhaseColor(4, 'primary'),
    secondary: getPhaseColor(4, 'secondary'),
    accent: getPhaseColor(4, 'accent'),
    particle: getPhaseColor(4, 'particle'),
    connection: getPhaseColor(4, 'connection')
  };

  // 1. Golden color transformation wave
  animeManager.createAnimation('mastery-golden-wave', '.fragment-bg', {
    fill: phaseColors.particle,
    stroke: phaseColors.primary,
    strokeWidth: 3,
    duration: 1200,
    delay: animeManager.stagger(30, { from: 'center' }),
    easing: 'easeOutQuad',
    autoplay: true
  });

  // 2. Node mastery transformation (golden glow)
  animeManager.createAnimation('mastery-node-transform', '.node-body', {
    fill: phaseColors.primary,
    stroke: phaseColors.secondary,
    strokeWidth: 4,
    filter: 'drop-shadow(0 0 12px rgba(255, 221, 102, 0.8))',
    scale: [1, 1.1, 1.05],
    duration: 1000,
    delay: animeManager.stagger(80),
    easing: 'easeOutBack(1.7)',
    autoplay: true
  });

  // 3. Mastery pulse rings (golden and powerful)
  animeManager.createAnimation('mastery-golden-pulses', '.pulse-ring', {
    opacity: [0.4, 1, 0.6],
    scale: [1.2, 2, 1.5],
    strokeWidth: [3, 6, 4],
    stroke: phaseColors.accent,
    filter: 'drop-shadow(0 0 8px rgba(255, 221, 102, 0.6))',
    duration: 1500,
    delay: animeManager.stagger(100),
    loop: true,
    easing: 'easeInOutSine',
    autoplay: true
  });

  // 4. Update particle text to French mastery terms
  setTimeout(() => {
    const masteryFragments = [
      'Programmation Agentique',
      'Maîtrise Newcode',
      '3-5x Plus Rapide',
      'Flux IA-Natif',
      'Ingénierie Spécification',
      'Zéro Bug Atteint',
      'Documentation Parfaite',
      'Développement Autonome'
    ];

    document.querySelectorAll('.fragment-text').forEach((el, index) => {
      const textEl = el as HTMLElement;
      if (textEl && masteryFragments[index % masteryFragments.length]) {
        animeManager.createAnimation(`mastery-text-${index}`, textEl, {
          opacity: [1, 0, 1],
          scale: [1, 0.7, 1.1],
          rotateZ: [0, 5, 0],
          duration: 600,
          delay: index * 50,
          complete: () => {
            textEl.textContent = masteryFragments[index % masteryFragments.length];
          },
          autoplay: true
        });
      }
    });
  }, 400);

  // 5. Golden connection enhancement
  setTimeout(() => {
    animeManager.createAnimation('mastery-golden-connections', '.connection-active', {
      stroke: phaseColors.connection,
      strokeWidth: [3, 5, 4],
      opacity: [0.8, 1, 0.9],
      filter: 'drop-shadow(0 0 6px rgba(255, 204, 0, 0.7))',
      duration: 1000,
      delay: animeManager.stagger(100),
      easing: 'easeOutQuad',
      autoplay: true
    });
  }, 300);

  // 6. Perfect synchronization breathing effect
  setTimeout(() => {
    animeManager.createAnimation('mastery-synchronized-breathing', '.neural-node', {
      scale: [1.05, 1.08, 1.05],
      duration: 2000,
      delay: animeManager.stagger(0), // All synchronized
      loop: true,
      direction: 'alternate',
      easing: 'easeInOutSine',
      autoplay: true
    });
  }, 600);

  // 7. Mastery particle arrangement (perfect formation)
  setTimeout(() => {
    animeManager.createAnimation('mastery-perfect-formation', '.code-fragment', {
      translateX: () => animeManager.random(-30, 30),
      translateY: () => animeManager.random(-25, 25),
      rotateZ: 0,
      scale: 1.1,
      opacity: 1,
      duration: 1200,
      delay: animeManager.stagger(25),
      easing: 'easeOutElastic(1, .8)',
      autoplay: true
    });
  }, 500);

  // 8. Golden background mastery glow
  animeManager.createAnimation('mastery-background-glow', '.neural-background', {
    opacity: [0.2, 0.35, 0.3],
    scale: [1, 1.002, 1],
    filter: 'brightness(1.1) contrast(1.05)',
    duration: 2500,
    loop: true,
    direction: 'alternate',
    easing: 'easeInOutSine',
    autoplay: true
  });

  // 9. Knowledge mastery indicators on labels
  setTimeout(() => {
    const nodeLabels = document.querySelectorAll('.node-label');
    animeManager.createAnimation('mastery-knowledge-indicators', nodeLabels, {
      opacity: [0.9, 1, 0.9],
      scale: [1, 1.03, 1],
      filter: 'brightness(1.2)',
      textShadow: '0 0 4px rgba(255, 221, 102, 0.8)',
      duration: 1500,
      delay: animeManager.stagger(80),
      loop: true,
      direction: 'alternate',
      easing: 'easeInOutSine',
      autoplay: true
    });
  }, 800);

  // 10. Data flow mastery (smooth, efficient flow)
  setTimeout(() => {
    const dataParticles = document.querySelectorAll('.data-particle');
    dataParticles.forEach((particle, index) => {
      animeManager.createAnimation(`mastery-data-flow-${index}`, particle, {
        opacity: [0, 1, 0],
        scale: [0.8, 1.2, 0.8],
        fill: phaseColors.accent,
        offsetDistance: ['0%', '100%'],
        duration: 1000, // Faster, more efficient
        delay: () => animeManager.random(0, 200),
        loop: true,
        easing: 'easeInOutSine', // Smoother easing
        autoplay: true
      });
    });
  }, 700);

  // 11. Mastery confidence scaling
  setTimeout(() => {
    animeManager.createAnimation('mastery-confidence', '.svg-container', {
      scale: [1, 1.02, 1],
      duration: 2000,
      loop: true,
      direction: 'alternate',
      easing: 'easeInOutSine',
      autoplay: true
    });
  }, 1000);

  // 12. Final mastery celebration pulse
  setTimeout(() => {
    animeManager.createAnimation('mastery-celebration-pulse', '.pulse-ring', {
      opacity: [0.6, 1, 0.6],
      scale: [1.5, 3, 1.5],
      strokeWidth: [4, 8, 4],
      duration: 2000,
      delay: animeManager.stagger(150, { from: 'center' }),
      loop: 2, // Limited celebration
      easing: 'easeOutCirc',
      autoplay: true
    });
  }, 1200);

  // 13. Perfect harmony effect (all elements moving as one)
  setTimeout(() => {
    animeManager.createAnimation('mastery-perfect-harmony', '.neural-assembly-engine *', {
      filter: 'brightness(1.05) saturate(1.1)',
      duration: 1500,
      loop: true,
      direction: 'alternate',
      easing: 'easeInOutSine',
      autoplay: true
    });
  }, 1500);

  // 14. Achievement glow effect
  setTimeout(() => {
    animeManager.createAnimation('mastery-achievement-glow', '.code-fragment', {
      boxShadow: '0 0 8px rgba(255, 221, 102, 0.6)',
      filter: 'drop-shadow(0 0 4px rgba(255, 221, 102, 0.4))',
      duration: 1800,
      delay: animeManager.stagger(40),
      loop: true,
      direction: 'alternate',
      easing: 'easeInOutSine',
      autoplay: true
    });
  }, 1700);

  console.log('Mastery Phase initialized - Golden transformation complete, agentic programming mastery achieved!');
}