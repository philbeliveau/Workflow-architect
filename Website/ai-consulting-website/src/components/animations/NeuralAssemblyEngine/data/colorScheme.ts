/**
 * Color System - Neural Assembly Engine
 * Phase-based color definitions aligned with Newcode branding
 */

import { PhaseDefinition } from '../types';

// Brand-aligned neural colors with French business context
export const neuralColors = {
  phases: {
    chaos: {
      primary: '#333333',     // Dark gray for confusion/chaos
      secondary: '#666666',   // Medium gray
      accent: '#999999',      // Light gray
      background: 'rgba(51, 51, 51, 0.1)',
      particle: '#444444',
      connection: 'rgba(102, 102, 102, 0.3)'
    },
    recognition: {
      primary: '#004499',     // Deep blue for recognition/clarity
      secondary: '#0066cc',   // Medium blue
      accent: '#3388dd',      // Light blue
      background: 'rgba(0, 102, 204, 0.1)',
      particle: '#0055aa',
      connection: 'rgba(0, 136, 255, 0.4)'
    },
    learning: {
      primary: '#0066cc',     // Blue for learning/processing
      secondary: '#0088ff',   // Bright blue
      accent: '#66aaff',      // Very light blue
      background: 'rgba(0, 136, 255, 0.1)',
      particle: '#0077dd',
      connection: 'rgba(0, 136, 255, 0.5)'
    },
    connection: {
      primary: '#00aa00',     // Green for connections/networking
      secondary: '#00ff00',   // Bright green
      accent: '#66ff66',      // Light green
      background: 'rgba(0, 255, 0, 0.1)',
      particle: '#00cc00',
      connection: 'rgba(0, 255, 0, 0.6)'
    },
    mastery: {
      primary: '#ffaa00',     // Orange/gold for mastery/success
      secondary: '#ffcc00',   // Golden yellow
      accent: '#ffdd66',      // Light golden
      background: 'rgba(255, 204, 0, 0.1)',
      particle: '#ffbb00',
      connection: 'rgba(255, 204, 0, 0.7)'
    }
  },
  ui: {
    background: '#f8fafc',           // Light gray background
    backgroundDark: '#1a1a1a',       // Dark mode background
    text: '#000000',                 // Black text (aligned with NEWCODE typography)
    textSecondary: '#666666',        // Gray secondary text
    textLight: '#ffffff',            // White text for dark backgrounds
    border: 'rgba(255, 255, 255, 0.2)',
    borderDark: 'rgba(0, 0, 0, 0.1)',
    glow: 'rgba(255, 255, 255, 0.8)',
    shadow: 'rgba(0, 0, 0, 0.1)'
  },
  gradients: {
    chaos: 'radial-gradient(circle, rgba(51,51,51,0.8) 0%, rgba(102,102,102,0.2) 100%)',
    recognition: 'radial-gradient(circle, rgba(0,68,153,1) 0%, rgba(0,102,204,0.3) 100%)',
    learning: 'radial-gradient(circle, rgba(0,136,255,1) 0%, rgba(0,68,153,0.1) 100%)',
    connection: 'radial-gradient(circle, rgba(0,255,0,1) 0%, rgba(0,153,0,0.2) 100%)',
    mastery: 'radial-gradient(circle, rgba(255,170,0,1) 0%, rgba(255,221,102,0.3) 100%)',
    // Combined gradient for transitions
    neural: 'linear-gradient(45deg, #004499 0%, #0088ff 25%, #00aa00 50%, #ffaa00 75%, #ffcc00 100%)'
  },
  // SVG-specific colors for filters and effects
  effects: {
    nodeGlow: {
      chaos: 'drop-shadow(0 0 8px rgba(153, 153, 153, 0.6))',
      recognition: 'drop-shadow(0 0 8px rgba(51, 136, 221, 0.8))',
      learning: 'drop-shadow(0 0 8px rgba(0, 136, 255, 0.8))',
      connection: 'drop-shadow(0 0 8px rgba(102, 255, 102, 0.8))',
      mastery: 'drop-shadow(0 0 8px rgba(255, 221, 102, 0.8))'
    },
    connectionPulse: {
      chaos: '#666666',
      recognition: '#3388dd',
      learning: '#66aaff',
      connection: '#66ff66',
      mastery: '#ffdd66'
    }
  }
};

// Phase definitions with complete configuration
export const phaseDefinitions: PhaseDefinition[] = [
  {
    id: 0,
    name: 'Chaos',
    duration: 2500,
    delay: 0,
    color: neuralColors.phases.chaos,
    effects: ['particleScatter', 'randomMovement', 'opacity'],
    particles: {
      count: 25,
      fragments: [
        'function bugFix() {',
        '// TODO: fix later',
        'npm install --save-dev',
        'console.log("debug")',
        'git commit -m "fixes"',
        'Stack Overflow copy',
        'if (true) return false',
        '/* quick hack */',
        'var x = undefined;',
        'setTimeout(() => {}, 0)'
      ]
    }
  },
  {
    id: 1,
    name: 'Recognition',
    duration: 2000,
    delay: 300,
    color: neuralColors.phases.recognition,
    effects: ['nodeActivation', 'connectionReveal', 'focusZoom'],
    particles: {
      count: 20,
      fragments: [
        'AI agent pattern',
        'specification first',
        'structured approach',
        'automated testing',
        'code generation',
        'intelligent review',
        'systematic debugging',
        'documentation sync'
      ]
    }
  },
  {
    id: 2,
    name: 'Learning',
    duration: 2200,
    delay: 400,
    color: neuralColors.phases.learning,
    effects: ['neuralPulse', 'dataFlow', 'learningGlow'],
    particles: {
      count: 30,
      fragments: [
        'claude.orchestrate()',
        'agent.learn(context)',
        'swarm.coordinate()',
        'specification.validate()',
        'ai.generateCode()',
        'agent.review()',
        'flow.optimize()',
        'neural.connect()'
      ]
    }
  },
  {
    id: 3,
    name: 'Connection',
    duration: 1800,
    delay: 200,
    color: neuralColors.phases.connection,
    effects: ['networkSync', 'connectionStrength', 'collaboration'],
    particles: {
      count: 35,
      fragments: [
        'swarm.coordinate()',
        'agents.collaborate()',
        'network.establish()',
        'data.synchronize()',
        'knowledge.share()',
        'patterns.recognize()',
        'solutions.emerge()',
        'efficiency.optimize()'
      ]
    }
  },
  {
    id: 4,
    name: 'Mastery',
    duration: 2800,
    delay: 500,
    color: neuralColors.phases.mastery,
    effects: ['masteryGlow', 'perfectHarmony', 'confidence'],
    particles: {
      count: 40,
      fragments: [
        'Programmation Agentique',
        'Maîtrise Newcode',
        '3-5x Plus Rapide',
        'Flux IA-Natif',
        'Ingénierie Spécification',
        'Zéro Bug Atteint',
        'Documentation Parfaite',
        'Développement Autonome'
      ]
    }
  }
];

/**
 * Get color for specific phase and element
 */
export const getPhaseColor = (
  phase: number,
  element: 'primary' | 'secondary' | 'accent' | 'background' | 'particle' | 'connection' = 'primary'
): string => {
  const phaseNames = ['chaos', 'recognition', 'learning', 'connection', 'mastery'];
  const phaseName = phaseNames[Math.min(Math.max(phase, 0), phaseNames.length - 1)] as keyof typeof neuralColors.phases;
  return neuralColors.phases[phaseName][element];
};

/**
 * Get phase definition by ID
 */
export const getPhaseDefinition = (phaseId: number): PhaseDefinition | null => {
  return phaseDefinitions.find(phase => phase.id === phaseId) || null;
};

/**
 * Get gradient for specific phase
 */
export const getPhaseGradient = (phase: number): string => {
  const phaseNames = ['chaos', 'recognition', 'learning', 'connection', 'mastery'];
  const phaseName = phaseNames[Math.min(Math.max(phase, 0), phaseNames.length - 1)] as keyof typeof neuralColors.gradients;
  return neuralColors.gradients[phaseName];
};

/**
 * Get effect filter for phase
 */
export const getPhaseEffect = (
  phase: number,
  effectType: 'nodeGlow' | 'connectionPulse'
): string => {
  const phaseNames = ['chaos', 'recognition', 'learning', 'connection', 'mastery'];
  const phaseName = phaseNames[Math.min(Math.max(phase, 0), phaseNames.length - 1)] as keyof typeof neuralColors.effects.nodeGlow;
  return neuralColors.effects[effectType][phaseName];
};

/**
 * Interpolate between phase colors for smooth transitions
 */
export const interpolatePhaseColor = (
  fromPhase: number,
  toPhase: number,
  progress: number, // 0-1
  element: 'primary' | 'secondary' | 'accent' = 'primary'
): string => {
  const fromColor = getPhaseColor(fromPhase, element);
  const toColor = getPhaseColor(toPhase, element);

  // Simple hex color interpolation (can be enhanced with proper color space interpolation)
  const fromRGB = hexToRgb(fromColor);
  const toRGB = hexToRgb(toColor);

  if (!fromRGB || !toRGB) return fromColor;

  const r = Math.round(fromRGB.r + (toRGB.r - fromRGB.r) * progress);
  const g = Math.round(fromRGB.g + (toRGB.g - fromRGB.g) * progress);
  const b = Math.round(fromRGB.b + (toRGB.b - fromRGB.b) * progress);

  return `rgb(${r}, ${g}, ${b})`;
};

/**
 * Convert hex to RGB
 */
function hexToRgb(hex: string): { r: number; g: number; b: number } | null {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : null;
}

/**
 * Get all available phase names
 */
export const getPhaseNames = (): string[] => {
  return phaseDefinitions.map(phase => phase.name);
};

/**
 * Get total animation duration
 */
export const getTotalDuration = (): number => {
  return phaseDefinitions.reduce((total, phase) => total + phase.duration + phase.delay, 0);
};

/**
 * Get phase timing information
 */
export const getPhaseTimings = (): Array<{ start: number; end: number; name: string }> => {
  let currentTime = 0;
  return phaseDefinitions.map(phase => {
    const start = currentTime;
    const end = currentTime + phase.duration;
    currentTime = end + phase.delay;

    return {
      start,
      end,
      name: phase.name
    };
  });
};