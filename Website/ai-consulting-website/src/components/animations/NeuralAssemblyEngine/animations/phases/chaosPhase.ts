/**
 * Chaos Phase - Neural Assembly Engine
 * Phase 1: Traditional development chaos (0-2.5s)
 */

import { AnimeV3Manager } from '../utils/animationUtils';
import { NeuralNode } from '../../types';
import { getPhaseColor } from '../../data/colorScheme';

export async function chaosPhase(
  animeManager: AnimeV3Manager,
  nodes: NeuralNode[],
  viewport: { width: number; height: number }
): Promise<void> {
  console.log('Initializing Chaos Phase - Traditional development chaos');

  // Phase 1: Chaotic particle movement (0-2.5s)
  const phaseColors = {
    primary: getPhaseColor(0, 'primary'),
    secondary: getPhaseColor(0, 'secondary'),
    particle: getPhaseColor(0, 'particle')
  };

  // Hide all neural nodes initially
  animeManager.set('.neural-node', {
    opacity: 0,
    scale: 0
  });

  // Hide connections
  animeManager.set('.connection-active', {
    opacity: 0,
    strokeDasharray: '5,10',
    strokeDashoffset: 0
  });

  // 1. Initialize particles in complete chaos
  animeManager.createAnimation('chaos-particles-init', '.code-fragment', {
    opacity: [0, 0.8],
    scale: [0, animeManager.random(0.6, 1.2)],
    translateX: () => animeManager.random(-200, 200),
    translateY: () => animeManager.random(-150, 150),
    rotateZ: () => animeManager.random(-45, 45),
    duration: 800,
    delay: animeManager.stagger(50),
    easing: 'easeOutBack(1.7)',
    autoplay: true
  });

  // 2. Chaotic particle movement
  setTimeout(() => {
    animeManager.createAnimation('chaos-movement', '.code-fragment', {
      translateX: () => animeManager.random(-250, 250),
      translateY: () => animeManager.random(-200, 200),
      rotateZ: () => animeManager.random(-180, 180),
      scale: () => animeManager.random(0.5, 1.5),
      duration: 1500,
      delay: animeManager.stagger(30),
      easing: 'easeInOutSine',
      autoplay: true
    });
  }, 200);

  // 3. Particle color transition to chaos colors
  animeManager.createAnimation('chaos-colors', '.fragment-bg', {
    fill: phaseColors.particle,
    stroke: phaseColors.secondary,
    strokeWidth: 1,
    duration: 1000,
    delay: 400,
    easing: 'easeOutQuad',
    autoplay: true
  });

  // 4. Random pulsing and scaling
  animeManager.createAnimation('chaos-pulse', '.code-fragment', {
    scale: () => [1, animeManager.random(0.7, 1.3), 1],
    opacity: () => [0.8, animeManager.random(0.4, 1), 0.8],
    duration: () => animeManager.random(600, 1200),
    delay: animeManager.stagger(100),
    loop: true,
    direction: 'alternate',
    easing: 'easeInOutSine',
    autoplay: true
  });

  // 5. Erratic text changes (simulate buggy code)
  setTimeout(() => {
    const chaosFragments = [
      'function bugFix() {',
      '// TODO: fix later',
      'console.log("debug")',
      'if (true) return false',
      '/* quick hack */',
      'var x = undefined;',
      'npm install --save-dev',
      'git commit -m "fixes"',
      'Stack Overflow copy',
      'setTimeout(() => {}, 0)'
    ];

    document.querySelectorAll('.fragment-text').forEach((el, index) => {
      const textEl = el as HTMLElement;
      if (textEl) {
        const randomFragment = chaosFragments[Math.floor(Math.random() * chaosFragments.length)];
        textEl.textContent = randomFragment;
      }
    });
  }, 600);

  // 6. Add slight background effects
  animeManager.createAnimation('chaos-background', '.neural-background', {
    opacity: [0, 0.1],
    scale: [1, 1.02],
    duration: 2000,
    loop: true,
    direction: 'alternate',
    easing: 'easeInOutSine',
    autoplay: true
  });

  // 7. Random connection flickers (brief)
  setTimeout(() => {
    animeManager.createAnimation('chaos-connection-flicker', '.connection-active', {
      opacity: [0, 0.2, 0],
      strokeWidth: [1, 3, 1],
      duration: () => animeManager.random(200, 800),
      delay: animeManager.stagger(300),
      loop: 3,
      easing: 'easeInOutQuad',
      autoplay: true
    });
  }, 1000);

  console.log('Chaos Phase initialized - particles in chaotic motion');
}