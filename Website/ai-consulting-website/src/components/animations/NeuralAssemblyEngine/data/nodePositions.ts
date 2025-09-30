/**
 * Neural Network Topology Data
 * Defines the structure and positioning of the agentic programming network
 */

import { NeuralNode, ResponsiveBreakpoint } from '../types';

// Core neural topology representing agentic programming ecosystem
export const neuralTopology: NeuralNode[] = [
  // Core orchestrator (center) - The heart of agentic programming
  {
    id: 'orchestrator',
    x: 600, y: 300,
    type: 'core',
    role: 'Orchestrateur',
    size: 60,
    connections: ['coder', 'researcher', 'tester', 'reviewer', 'architect', 'optimizer']
  },

  // Primary specialist agents (inner hexagon)
  {
    id: 'coder',
    x: 450, y: 200,
    type: 'specialist',
    role: 'Codeur',
    size: 45,
    connections: ['orchestrator', 'tester', 'formatter', 'reviewer']
  },
  {
    id: 'researcher',
    x: 750, y: 200,
    type: 'specialist',
    role: 'Chercheur',
    size: 45,
    connections: ['orchestrator', 'analyzer', 'documenter', 'architect']
  },
  {
    id: 'tester',
    x: 850, y: 350,
    type: 'specialist',
    role: 'Testeur',
    size: 45,
    connections: ['orchestrator', 'coder', 'validator', 'quality']
  },
  {
    id: 'reviewer',
    x: 750, y: 500,
    type: 'specialist',
    role: 'Réviseur',
    size: 45,
    connections: ['orchestrator', 'optimizer', 'quality', 'coder']
  },
  {
    id: 'architect',
    x: 450, y: 500,
    type: 'specialist',
    role: 'Architecte',
    size: 45,
    connections: ['orchestrator', 'researcher', 'planner', 'optimizer']
  },
  {
    id: 'optimizer',
    x: 350, y: 350,
    type: 'specialist',
    role: 'Optimiseur',
    size: 45,
    connections: ['orchestrator', 'architect', 'reviewer', 'performance']
  },

  // Helper agents (outer ring) - Supporting specialist functions
  {
    id: 'formatter',
    x: 300, y: 120,
    type: 'helper',
    role: 'Format',
    size: 30,
    connections: ['coder']
  },
  {
    id: 'analyzer',
    x: 900, y: 120,
    type: 'helper',
    role: 'Analyse',
    size: 30,
    connections: ['researcher']
  },
  {
    id: 'validator',
    x: 950, y: 300,
    type: 'helper',
    role: 'Valide',
    size: 30,
    connections: ['tester']
  },
  {
    id: 'quality',
    x: 900, y: 480,
    type: 'helper',
    role: 'Qualité',
    size: 30,
    connections: ['reviewer', 'tester']
  },
  {
    id: 'planner',
    x: 300, y: 480,
    type: 'helper',
    role: 'Planif',
    size: 30,
    connections: ['architect']
  },
  {
    id: 'performance',
    x: 250, y: 300,
    type: 'helper',
    role: 'Perform',
    size: 30,
    connections: ['optimizer']
  },

  // Support agents (extended network)
  {
    id: 'documenter',
    x: 600, y: 120,
    type: 'helper',
    role: 'Docs',
    size: 25,
    connections: ['researcher']
  },
  {
    id: 'security',
    x: 750, y: 150,
    type: 'helper',
    role: 'Sécurité',
    size: 25,
    connections: ['researcher', 'tester']
  },
  {
    id: 'integration',
    x: 850, y: 450,
    type: 'helper',
    role: 'Intégra',
    size: 25,
    connections: ['tester', 'reviewer']
  },
  {
    id: 'deployment',
    x: 600, y: 480,
    type: 'helper',
    role: 'Deploy',
    size: 25,
    connections: ['reviewer', 'architect']
  },
  {
    id: 'monitoring',
    x: 450, y: 150,
    type: 'helper',
    role: 'Monitor',
    size: 25,
    connections: ['coder', 'optimizer']
  },
  {
    id: 'backup',
    x: 350, y: 450,
    type: 'helper',
    role: 'Backup',
    size: 25,
    connections: ['architect', 'optimizer']
  }
];

// Responsive adaptations for different screen sizes
export const getAdaptedTopology = (breakpoint: ResponsiveBreakpoint): NeuralNode[] => {
  const { name, nodeCount } = breakpoint;

  switch (name) {
    case 'mobile':
      // Mobile: Show only core + primary specialists (6 nodes)
      return neuralTopology.filter(node =>
        node.type === 'core' ||
        (node.type === 'specialist' && ['coder', 'researcher', 'tester', 'reviewer'].includes(node.id))
      ).map(node => ({
        ...node,
        // Adjust positions for mobile (smaller viewport)
        x: node.x * 0.6 + 240, // Scale and center
        y: node.y * 0.7 + 90,
        size: node.size * 0.8 // Slightly smaller nodes
      }));

    case 'tablet':
      // Tablet: Show core + specialists + main helpers (12 nodes)
      return neuralTopology.filter(node =>
        node.type === 'core' ||
        node.type === 'specialist' ||
        (node.type === 'helper' && node.size >= 30)
      ).map(node => ({
        ...node,
        x: node.x * 0.8 + 120, // Scale and adjust for tablet
        y: node.y * 0.85 + 45,
        size: node.size * 0.9
      }));

    case 'desktop':
      // Desktop: Show most nodes except smallest helpers
      return neuralTopology.filter(node =>
        node.type !== 'helper' || node.size >= 25
      );

    case 'large':
      // Large screens: Show all nodes with enhanced positioning
      return neuralTopology.map(node => ({
        ...node,
        x: node.x * 1.1 - 60, // Slightly expand
        y: node.y * 1.1 - 30,
        size: node.size * 1.05 // Slightly larger
      }));

    default:
      return neuralTopology;
  }
};

// Alternative topology configurations for different demo modes
export const getTopologyByMode = (mode: 'simple' | 'standard' | 'complex' | 'showcase'): NeuralNode[] => {
  switch (mode) {
    case 'simple':
      // Simple 5-node star pattern
      return [
        {
          id: 'orchestrator',
          x: 600, y: 300,
          type: 'core',
          role: 'Central',
          size: 50,
          connections: ['agent1', 'agent2', 'agent3', 'agent4']
        },
        {
          id: 'agent1',
          x: 500, y: 200,
          type: 'specialist',
          role: 'Agent 1',
          size: 35,
          connections: ['orchestrator']
        },
        {
          id: 'agent2',
          x: 700, y: 200,
          type: 'specialist',
          role: 'Agent 2',
          size: 35,
          connections: ['orchestrator']
        },
        {
          id: 'agent3',
          x: 700, y: 400,
          type: 'specialist',
          role: 'Agent 3',
          size: 35,
          connections: ['orchestrator']
        },
        {
          id: 'agent4',
          x: 500, y: 400,
          type: 'specialist',
          role: 'Agent 4',
          size: 35,
          connections: ['orchestrator']
        }
      ];

    case 'complex':
      // Complex multi-layer network
      return neuralTopology;

    case 'showcase':
      // Showcase version with French business context
      return neuralTopology.map(node => ({
        ...node,
        role: getFrenchRoleName(node.id)
      }));

    default:
      return neuralTopology;
  }
};

// French role names for showcase mode
function getFrenchRoleName(nodeId: string): string {
  const frenchNames: Record<string, string> = {
    orchestrator: 'Orchestrateur IA',
    coder: 'Développeur Agent',
    researcher: 'Chercheur IA',
    tester: 'Testeur Auto',
    reviewer: 'Réviseur Code',
    architect: 'Architecte Sys',
    optimizer: 'Optimiseur Perf',
    formatter: 'Formateur',
    analyzer: 'Analyseur',
    validator: 'Validateur',
    quality: 'Qualité',
    planner: 'Planificateur',
    performance: 'Performance',
    documenter: 'Documenteur',
    security: 'Sécurité',
    integration: 'Intégrateur',
    deployment: 'Déployeur',
    monitoring: 'Moniteur',
    backup: 'Sauvegarde'
  };

  return frenchNames[nodeId] || nodeId;
}

// Predefined connection patterns for different animation phases
export const getConnectionsForPhase = (phase: number): string[] => {
  switch (phase) {
    case 0: // Chaos
      return [];

    case 1: // Recognition
      return [
        'orchestrator-coder',
        'orchestrator-researcher',
        'orchestrator-tester'
      ];

    case 2: // Learning
      return [
        'orchestrator-coder',
        'orchestrator-researcher',
        'orchestrator-tester',
        'orchestrator-reviewer',
        'coder-formatter',
        'researcher-analyzer'
      ];

    case 3: // Connection
      return [
        'orchestrator-coder',
        'orchestrator-researcher',
        'orchestrator-tester',
        'orchestrator-reviewer',
        'orchestrator-architect',
        'orchestrator-optimizer',
        'coder-formatter',
        'coder-tester',
        'researcher-analyzer',
        'researcher-documenter',
        'tester-validator',
        'reviewer-quality'
      ];

    case 4: // Mastery
      return neuralTopology.flatMap(node =>
        node.connections.map(target => `${node.id}-${target}`)
      );

    default:
      return [];
  }
};

// Calculate network statistics
export const getNetworkStats = (nodes: NeuralNode[] = neuralTopology) => {
  const coreCount = nodes.filter(n => n.type === 'core').length;
  const specialistCount = nodes.filter(n => n.type === 'specialist').length;
  const helperCount = nodes.filter(n => n.type === 'helper').length;
  const totalConnections = nodes.reduce((sum, node) => sum + node.connections.length, 0);

  return {
    totalNodes: nodes.length,
    coreCount,
    specialistCount,
    helperCount,
    totalConnections,
    avgConnectionsPerNode: totalConnections / nodes.length,
    networkDensity: totalConnections / (nodes.length * (nodes.length - 1)) // Simplified density
  };
};

// Find optimal positioning for new nodes
export const findOptimalPosition = (
  existingNodes: NeuralNode[],
  minDistance: number = 80
): { x: number; y: number } => {
  const maxAttempts = 100;
  const bounds = { minX: 100, maxX: 1100, minY: 100, maxY: 500 };

  for (let attempt = 0; attempt < maxAttempts; attempt++) {
    const candidate = {
      x: bounds.minX + Math.random() * (bounds.maxX - bounds.minX),
      y: bounds.minY + Math.random() * (bounds.maxY - bounds.minY)
    };

    const tooClose = existingNodes.some(node => {
      const distance = Math.sqrt(
        Math.pow(candidate.x - node.x, 2) + Math.pow(candidate.y - node.y, 2)
      );
      return distance < minDistance;
    });

    if (!tooClose) {
      return candidate;
    }
  }

  // Fallback to center if no optimal position found
  return { x: 600, y: 300 };
};