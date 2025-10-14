/**
 * Connection Phase - Neural Assembly Engine
 * Phase 4: Network activation and connection establishment (7-10s)
 */

import { AnimeV3Manager } from '../utils/animationUtils';
import { NeuralNode } from '../../types';
import { getPhaseColor } from '../../data/colorScheme';

export async function connectionPhase(
  animeManager: AnimeV3Manager,
  nodes: NeuralNode[],
  viewport: { width: number; height: number }
): Promise<void> {
  console.log('Initializing Connection Phase - Network activation');

  // Phase 4: Connection establishment (7-10s)
  const phaseColors = {
    primary: getPhaseColor(3, 'primary'),
    secondary: getPhaseColor(3, 'secondary'),
    accent: getPhaseColor(3, 'accent'),
    particle: getPhaseColor(3, 'particle'),
    connection: getPhaseColor(3, 'connection')
  };

  // 1. Connection paths drawing sequence
  const connections = document.querySelectorAll('.connection-active');
  connections.forEach((connection, index) => {
    setTimeout(() => {
      animeManager.createAnimation(`connection-draw-${index}`, connection, {
        opacity: [0.2, 0.8],
        strokeWidth: [1, 3],
        strokeDashoffset: [100, 0],
        stroke: phaseColors.primary,
        duration: 1200,
        easing: 'easeOutExpo',
        autoplay: true
      });
    }, index * 200);
  });

  // 2. Data flow particles along connections
  setTimeout(() => {
    const dataParticles = document.querySelectorAll('.data-particle');
    dataParticles.forEach((particle, index) => {
      animeManager.createAnimation(`connection-data-flow-${index}`, particle, {
        opacity: [0, 1, 0],
        scale: [0.5, 1, 0.5],
        // SVG path animation would need custom implementation
        offsetDistance: ['0%', '100%'],
        duration: () => animeManager.random(800, 1500),
        delay: () => animeManager.random(0, 500),
        loop: true,
        easing: 'linear',
        autoplay: true
      });
    });
  }, 600);

  // 3. Color transition to connection green
  animeManager.createAnimation('connection-color-shift', '.fragment-bg', {
    fill: phaseColors.particle,
    stroke: phaseColors.primary,
    strokeWidth: 2,
    duration: 1000,
    delay: 400,
    easing: 'easeOutQuad',
    autoplay: true
  });

  // 4. Node activation sequence (all nodes become fully active)
  setTimeout(() => {
    animeManager.createAnimation('connection-node-activation', '.node-body', {
      fill: phaseColors.primary,
      stroke: phaseColors.secondary,
      strokeWidth: 3,
      scale: [1, 1.1, 1],
      duration: 800,
      delay: animeManager.stagger(100),
      easing: 'easeOutBack(1.7)',
      autoplay: true
    });
  }, 300);

  // 5. Enhanced pulse rings for active network
  animeManager.createAnimation('connection-active-pulses', '.pulse-ring', {
    opacity: [0.3, 0.8, 0.4],
    scale: [1, 1.6, 1.2],
    strokeWidth: [2, 4, 2],
    stroke: phaseColors.accent,
    duration: 1200,
    delay: animeManager.stagger(150),
    loop: true,
    easing: 'easeInOutSine',
    autoplay: true
  });

  // 6. Update particle text to collaboration terms
  setTimeout(() => {
    const collaborationFragments = [
      'swarm.coordinate()',
      'agents.collaborate()',
      'network.establish()',
      'data.synchronize()',
      'knowledge.share()',
      'patterns.recognize()',
      'solutions.emerge()',
      'efficiency.optimize()'
    ];

    document.querySelectorAll('.fragment-text').forEach((el, index) => {
      const textEl = el as HTMLElement;
      if (textEl && collaborationFragments[index % collaborationFragments.length]) {
        animeManager.createAnimation(`connection-text-${index}`, textEl, {
          opacity: [1, 0, 1],
          scale: [1, 0.8, 1],
          duration: 400,
          delay: index * 30,
          complete: () => {
            textEl.textContent = collaborationFragments[index % collaborationFragments.length];
          },
          autoplay: true
        });
      }
    });
  }, 800);

  // 7. Network synchronization effect
  setTimeout(() => {
    animeManager.createAnimation('connection-network-sync', '.neural-node', {
      scale: [1, 1.05, 1],
      duration: 600,
      delay: animeManager.stagger(50, { from: 'center' }),
      loop: 3,
      direction: 'alternate',
      easing: 'easeInOutSine',
      autoplay: true
    });
  }, 1200);

  // 8. Connection pulse waves
  setTimeout(() => {
    animeManager.createAnimation('connection-pulse-waves', '.connection-pulse', {
      opacity: [0, 0.8, 0],
      strokeWidth: [1, 4, 1],
      duration: () => animeManager.random(800, 1200),
      delay: animeManager.stagger(200),
      loop: true,
      easing: 'easeOutCirc',
      autoplay: true
    });
  }, 1500);

  // 9. Particle coordination (particles move in more organized patterns)
  setTimeout(() => {
    animeManager.createAnimation('connection-particle-coordination', '.code-fragment', {
      translateX: () => animeManager.random(-50, 50),
      translateY: () => animeManager.random(-40, 40),
      rotateZ: () => animeManager.random(-15, 15),
      scale: 1,
      opacity: 0.9,
      duration: 1000,
      delay: animeManager.stagger(40),
      easing: 'easeInOutSine',
      autoplay: true
    });
  }, 1000);

  // 10. Background network effect
  animeManager.createAnimation('connection-background-network', '.neural-background', {
    opacity: [0.15, 0.25, 0.2],
    scale: [1, 1.005, 1],
    duration: 2500,
    loop: true,
    direction: 'alternate',
    easing: 'easeInOutSine',
    autoplay: true
  });

  // 11. Knowledge flow indicators
  setTimeout(() => {
    const nodeLabels = document.querySelectorAll('.node-label');
    animeManager.createAnimation('connection-knowledge-flow', nodeLabels, {
      opacity: [0.8, 1, 0.8],
      scale: [1, 1.02, 1],
      duration: 800,
      delay: animeManager.stagger(100, { direction: 'reverse' }),
      loop: true,
      direction: 'alternate',
      easing: 'easeInOutSine',
      autoplay: true
    });
  }, 2000);

  // 12. Connection strength visualization
  setTimeout(() => {
    animeManager.createAnimation('connection-strength', '.connection-active', {
      opacity: [0.6, 1, 0.8],
      strokeWidth: [2, 4, 3],
      duration: 1500,
      delay: animeManager.stagger(200),
      loop: true,
      direction: 'alternate',
      easing: 'easeInOutSine',
      autoplay: true
    });
  }, 2200);

  console.log('Connection Phase initialized - network active, data flowing, collaboration established');
}