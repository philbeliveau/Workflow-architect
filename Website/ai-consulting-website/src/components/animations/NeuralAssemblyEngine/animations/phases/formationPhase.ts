/**
 * Formation Phase - Neural Assembly Engine
 * Phase 3: Neural network formation (4.5-7s)
 */

import { AnimeV3Manager } from '../utils/animationUtils';
import { NeuralNode } from '../../types';
import { getPhaseColor } from '../../data/colorScheme';

export async function formationPhase(
  animeManager: AnimeV3Manager,
  nodes: NeuralNode[],
  viewport: { width: number; height: number }
): Promise<void> {
  console.log('Initializing Formation Phase - Neural network assembly');

  // Phase 3: Neural network formation (4.5-7s)
  const phaseColors = {
    primary: getPhaseColor(2, 'primary'),
    secondary: getPhaseColor(2, 'secondary'),
    accent: getPhaseColor(2, 'accent'),
    particle: getPhaseColor(2, 'particle')
  };

  // 1. Specialist nodes emergence sequence
  const specialistNodes = document.querySelectorAll('.neural-node.node-specialist');
  specialistNodes.forEach((node, index) => {
    setTimeout(() => {
      animeManager.createAnimation(`formation-specialist-${index}`, node, {
        opacity: [0, 1],
        scale: [0, 1.1, 1],
        translateY: [-20, 0],
        rotateZ: [90, 0],
        duration: 800,
        easing: 'easeOutElastic(1, .6)',
        autoplay: true
      });

      // Node label emergence
      const label = node.querySelector('.node-label');
      if (label) {
        animeManager.createAnimation(`formation-label-${index}`, label, {
          opacity: [0, 1],
          translateY: [10, 0],
          duration: 600,
          delay: 300,
          easing: 'easeOutQuad',
          autoplay: true
        });
      }

      // Node glow effect
      const pulseRing = node.querySelector('.pulse-ring');
      if (pulseRing) {
        animeManager.createAnimation(`formation-glow-${index}`, pulseRing, {
          opacity: [0, 0.4, 0.2],
          scale: [0.8, 1.3, 1.1],
          duration: 1000,
          delay: 200,
          loop: true,
          direction: 'alternate',
          easing: 'easeInOutSine',
          autoplay: true
        });
      }
    }, index * 250); // Staggered appearance
  });

  // 2. Helper nodes emergence (slightly later)
  setTimeout(() => {
    const helperNodes = document.querySelectorAll('.neural-node.node-helper');
    helperNodes.forEach((node, index) => {
      setTimeout(() => {
        animeManager.createAnimation(`formation-helper-${index}`, node, {
          opacity: [0, 1],
          scale: [0, 1],
          translateX: () => animeManager.random(-10, 10),
          duration: 600,
          easing: 'easeOutBack(1.7)',
          autoplay: true
        });
      }, index * 150);
    });
  }, 800);

  // 3. Color transition to learning blue
  animeManager.createAnimation('formation-color-transition', '.fragment-bg', {
    fill: phaseColors.particle,
    stroke: phaseColors.primary,
    strokeWidth: 2,
    duration: 1200,
    delay: 400,
    easing: 'easeOutQuad',
    autoplay: true
  });

  // 4. Node body color transitions
  animeManager.createAnimation('formation-node-colors', '.node-body', {
    fill: phaseColors.primary,
    stroke: phaseColors.secondary,
    strokeWidth: 2,
    duration: 1000,
    delay: 600,
    easing: 'easeOutQuad',
    autoplay: true
  });

  // 5. Particles arrange around nodes
  setTimeout(() => {
    animeManager.createAnimation('formation-particle-arrangement', '.code-fragment', {
      translateX: () => animeManager.random(-80, 80),
      translateY: () => animeManager.random(-60, 60),
      rotateZ: 0,
      scale: 0.9,
      opacity: 0.8,
      duration: 1200,
      delay: animeManager.stagger(50),
      easing: 'easeOutExpo',
      autoplay: true
    });
  }, 600);

  // 6. Update particle text to learning phase
  setTimeout(() => {
    const learningFragments = [
      'claude.orchestrate()',
      'agent.learn(context)',
      'swarm.coordinate()',
      'specification.validate()',
      'ai.generateCode()',
      'agent.review()',
      'flow.optimize()',
      'neural.connect()'
    ];

    document.querySelectorAll('.fragment-text').forEach((el, index) => {
      const textEl = el as HTMLElement;
      if (textEl && learningFragments[index % learningFragments.length]) {
        animeManager.createAnimation(`formation-text-${index}`, textEl, {
          opacity: [1, 0, 1],
          scale: [1, 0.8, 1],
          duration: 500,
          delay: index * 40,
          complete: () => {
            textEl.textContent = learningFragments[index % learningFragments.length];
          },
          autoplay: true
        });
      }
    });
  }, 1000);

  // 7. Neural pulse effect between nodes
  setTimeout(() => {
    animeManager.createAnimation('formation-neural-pulse', '.pulse-ring', {
      opacity: [0.2, 0.6, 0.2],
      scale: [1, 1.4, 1],
      duration: 1500,
      delay: animeManager.stagger(200),
      loop: true,
      easing: 'easeInOutSine',
      autoplay: true
    });
  }, 1200);

  // 8. Background learning glow
  animeManager.createAnimation('formation-background-glow', '.neural-background', {
    opacity: [0.1, 0.2, 0.15],
    scale: [1, 1.01, 1],
    duration: 2000,
    loop: true,
    direction: 'alternate',
    easing: 'easeInOutSine',
    autoplay: true
  });

  // 9. Preparation for connections (connection paths become visible)
  setTimeout(() => {
    animeManager.createAnimation('formation-connection-prep', '.connection-active', {
      opacity: [0, 0.2],
      strokeWidth: [1, 1.5],
      strokeDasharray: ['10,5', '5,2'],
      duration: 1000,
      delay: animeManager.stagger(100),
      easing: 'easeOutQuad',
      autoplay: true
    });
  }, 1800);

  // 10. Learning indicators on nodes
  setTimeout(() => {
    const nodeLabels = document.querySelectorAll('.node-label');
    animeManager.createAnimation('formation-learning-indicator', nodeLabels, {
      scale: [1, 1.05, 1],
      opacity: [0.8, 1, 0.8],
      duration: 1000,
      delay: animeManager.stagger(150),
      loop: true,
      direction: 'alternate',
      easing: 'easeInOutSine',
      autoplay: true
    });
  }, 2000);

  console.log('Formation Phase initialized - neural network forming, nodes learning');
}