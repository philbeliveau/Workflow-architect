# 🎨 Subtask 2: SVG Graphics System

## 📋 Overview
Design and implement all visual elements using SVG, including neural network topology, connection paths, and responsive adaptations.

## 🎯 Objectives
- Create scalable SVG structure for neural network visualization
- Implement responsive design with viewport adaptations
- Design particle system for code fragments
- Build connection network with path algorithms
- Optimize for performance across devices

## 🏗️ SVG Layer Architecture

### Main SVG Container Component
```tsx
// src/components/animations/NeuralAssemblyEngine/components/SVGLayer.tsx
import React from 'react';
import { NeuralNode } from '../types';

interface SVGLayerProps {
  nodes: NeuralNode[];
  viewBox?: string;
  className?: string;
}

export const SVGLayer: React.FC<SVGLayerProps> = ({
  nodes,
  viewBox = "0 0 1200 600",
  className = ""
}) => {
  return (
    <svg
      viewBox={viewBox}
      className={`neural-assembly-svg ${className}`}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        overflow: 'visible',
        pointerEvents: 'none'
      }}
      preserveAspectRatio="xMidYMid meet"
    >
      <SVGDefinitions />
      <BackgroundGrid />
      <ConnectionLayer nodes={nodes} />
      <DataFlowLayer />
      <NodesLayer nodes={nodes} />
      <ParticleTrailsLayer />
      <EffectsLayer />
    </svg>
  );
};
```

### SVG Definitions (Gradients, Filters, Markers)
```tsx
// SVGDefinitions component
const SVGDefinitions: React.FC = () => (
  <defs>
    {/* Phase-specific gradients */}
    <radialGradient id="chaosGradient" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stopColor="#333333" stopOpacity="0.8"/>
      <stop offset="100%" stopColor="#666666" stopOpacity="0.2"/>
    </radialGradient>

    <radialGradient id="learningGradient" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stopColor="#0088ff" stopOpacity="1"/>
      <stop offset="50%" stopColor="#0066cc" stopOpacity="0.6"/>
      <stop offset="100%" stopColor="#004499" stopOpacity="0.1"/>
    </radialGradient>

    <radialGradient id="connectionGradient" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stopColor="#00ff00" stopOpacity="1"/>
      <stop offset="50%" stopColor="#00cc00" stopOpacity="0.7"/>
      <stop offset="100%" stopColor="#009900" stopOpacity="0.2"/>
    </radialGradient>

    <radialGradient id="masteryGradient" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stopColor="#ffaa00" stopOpacity="1"/>
      <stop offset="30%" stopColor="#ffcc00" stopOpacity="0.8"/>
      <stop offset="100%" stopColor="#ffdd66" stopOpacity="0.3"/>
    </radialGradient>

    {/* Connection line gradient */}
    <linearGradient id="connectionLineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stopColor="transparent"/>
      <stop offset="50%" stopColor="#00aaff"/>
      <stop offset="100%" stopColor="transparent"/>
    </linearGradient>

    {/* Visual effects filters */}
    <filter id="nodeGlow" x="-50%" y="-50%" width="200%" height="200%">
      <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
      <feMerge>
        <feMergeNode in="coloredBlur"/>
        <feMergeNode in="SourceGraphic"/>
      </feMerge>
    </filter>

    <filter id="pulseEffect" x="-50%" y="-50%" width="200%" height="200%">
      <feGaussianBlur stdDeviation="2" result="blur"/>
      <feOffset dx="0" dy="0" result="offset"/>
      <feMerge>
        <feMergeNode in="offset"/>
        <feMergeNode in="SourceGraphic"/>
      </feMerge>
    </filter>

    <filter id="dataTrail" x="-100%" y="-100%" width="300%" height="300%">
      <feGaussianBlur stdDeviation="1.5" result="trail"/>
      <feColorMatrix values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 0.6 0"/>
    </filter>

    {/* Arrow markers for data flow */}
    <marker id="dataArrow" viewBox="0 0 10 10" refX="8" refY="3"
            markerWidth="4" markerHeight="4" orient="auto" markerUnits="strokeWidth">
      <path d="M0,0 L0,6 L9,3 z" fill="#00aaff"/>
    </marker>

    <marker id="connectionDot" viewBox="0 0 6 6" refX="3" refY="3"
            markerWidth="3" markerHeight="3">
      <circle cx="3" cy="3" r="2" fill="currentColor"/>
    </marker>
  </defs>
);
```

## 🧠 Neural Network Topology

### Node Position Data
```typescript
// src/components/animations/NeuralAssemblyEngine/data/nodePositions.ts
import { NeuralNode } from '../types';

export const neuralTopology: NeuralNode[] = [
  // Core orchestrator (center)
  {
    id: 'orchestrator',
    x: 600, y: 300,
    type: 'core',
    role: 'Orchestrateur',
    size: 60,
    connections: ['coder', 'researcher', 'tester', 'reviewer']
  },

  // Specialist agents (inner hexagon)
  {
    id: 'coder',
    x: 450, y: 200,
    type: 'specialist',
    role: 'Codeur',
    size: 45,
    connections: ['orchestrator', 'tester', 'formatter']
  },
  {
    id: 'researcher',
    x: 750, y: 200,
    type: 'specialist',
    role: 'Chercheur',
    size: 45,
    connections: ['orchestrator', 'analyzer', 'documenter']
  },
  {
    id: 'tester',
    x: 750, y: 400,
    type: 'specialist',
    role: 'Testeur',
    size: 45,
    connections: ['orchestrator', 'coder', 'validator']
  },
  {
    id: 'reviewer',
    x: 450, y: 400,
    type: 'specialist',
    role: 'Réviseur',
    size: 45,
    connections: ['orchestrator', 'optimizer', 'quality']
  },

  // Helper agents (outer ring)
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
    x: 900, y: 480,
    type: 'helper',
    role: 'Valide',
    size: 30,
    connections: ['tester']
  },
  {
    id: 'optimizer',
    x: 300, y: 480,
    type: 'helper',
    role: 'Optimise',
    size: 30,
    connections: ['reviewer']
  },

  // Support agents
  {
    id: 'documenter',
    x: 600, y: 120,
    type: 'helper',
    role: 'Docs',
    size: 25,
    connections: ['researcher']
  },
  {
    id: 'quality',
    x: 600, y: 480,
    type: 'helper',
    role: 'Qualité',
    size: 25,
    connections: ['reviewer']
  }
];

// Responsive adaptations
export const getAdaptedTopology = (breakpoint: string): NeuralNode[] => {
  switch (breakpoint) {
    case 'mobile':
      return neuralTopology.filter(node =>
        node.type === 'core' ||
        (node.type === 'specialist' && ['coder', 'researcher'].includes(node.id))
      );
    case 'tablet':
      return neuralTopology.filter(node => node.type !== 'helper' || node.size >= 30);
    default:
      return neuralTopology;
  }
};
```

### Neural Nodes Component
```tsx
// src/components/animations/NeuralAssemblyEngine/components/NeuralNodes.tsx
import React from 'react';
import { NeuralNode, NodeState } from '../types';
import { getPhaseColor } from '../data/colorScheme';

interface NeuralNodesProps {
  nodes: NeuralNode[];
  currentPhase: number;
  className?: string;
}

export const NeuralNodes: React.FC<NeuralNodesProps> = ({
  nodes,
  currentPhase,
  className = ""
}) => {
  return (
    <g className={`neural-nodes-layer ${className}`}>
      {nodes.map(node => (
        <NeuralNodeElement
          key={node.id}
          node={node}
          currentPhase={currentPhase}
        />
      ))}
    </g>
  );
};

interface NeuralNodeElementProps {
  node: NeuralNode;
  currentPhase: number;
}

const NeuralNodeElement: React.FC<NeuralNodeElementProps> = ({ node, currentPhase }) => {
  const getNodeFill = (type: string, phase: number): string => {
    if (phase === 0) return 'url(#chaosGradient)';
    if (phase === 1) return 'url(#learningGradient)';
    if (phase === 2) return 'url(#connectionGradient)';
    return 'url(#masteryGradient)';
  };

  const getStrokeWidth = (type: string): number => {
    switch (type) {
      case 'core': return 4;
      case 'specialist': return 3;
      case 'helper': return 2;
      default: return 2;
    }
  };

  return (
    <g
      className={`neural-node node-${node.type} node-${node.id}`}
      transform={`translate(${node.x}, ${node.y})`}
    >
      {/* Main node body */}
      <circle
        r={node.size / 2}
        fill={getNodeFill(node.type, currentPhase)}
        stroke="#ffffff"
        strokeWidth={getStrokeWidth(node.type)}
        filter="url(#nodeGlow)"
        className="node-body"
        style={{ opacity: 0 }}
      />

      {/* Inner core for core nodes */}
      {node.type === 'core' && (
        <circle
          r={node.size / 4}
          fill="rgba(255, 255, 255, 0.4)"
          className="node-core"
          style={{ opacity: 0 }}
        />
      )}

      {/* Pulse ring */}
      <circle
        r={node.size / 2 + 8}
        fill="none"
        stroke="rgba(255, 255, 255, 0.6)"
        strokeWidth="2"
        className="pulse-ring"
        style={{ opacity: 0 }}
      />

      {/* Activity indicator */}
      <circle
        r={3}
        fill="#ffff00"
        className="activity-indicator"
        style={{ opacity: 0 }}
      />

      {/* Role label */}
      <text
        y={node.size / 2 + 20}
        textAnchor="middle"
        fontSize={node.type === 'helper' ? '10' : '12'}
        fontWeight="300"
        fill="#333333"
        className="node-label"
        style={{ opacity: 0 }}
      >
        {node.role}
      </text>
    </g>
  );
};
```

## 🌐 Connection Network System

### Path Generation Utilities
```typescript
// src/components/animations/NeuralAssemblyEngine/utils/pathUtils.ts
import { NeuralNode } from '../types';

export interface ConnectionPath {
  id: string;
  fromNode: string;
  toNode: string;
  pathData: string;
  length: number;
  midpoint: { x: number; y: number };
}

export const generateConnectionPath = (from: NeuralNode, to: NeuralNode): string => {
  const dx = to.x - from.x;
  const dy = to.y - from.y;
  const distance = Math.sqrt(dx * dx + dy * dy);

  // Calculate curve control points
  const midX = from.x + dx / 2;
  const midY = from.y + dy / 2;

  // Add curvature perpendicular to the line
  const curveFactor = Math.min(distance * 0.2, 50);
  const perpX = -dy / distance * curveFactor;
  const perpY = dx / distance * curveFactor;

  const controlX = midX + perpX;
  const controlY = midY + perpY;

  return `M ${from.x} ${from.y} Q ${controlX} ${controlY} ${to.x} ${to.y}`;
};

export const generateAllConnections = (nodes: NeuralNode[]): ConnectionPath[] => {
  const connections: ConnectionPath[] = [];
  const nodeMap = new Map(nodes.map(node => [node.id, node]));

  nodes.forEach(node => {
    node.connections.forEach(targetId => {
      const targetNode = nodeMap.get(targetId);
      if (targetNode) {
        const pathData = generateConnectionPath(node, targetNode);
        connections.push({
          id: `${node.id}-${targetId}`,
          fromNode: node.id,
          toNode: targetId,
          pathData,
          length: getPathLength(pathData),
          midpoint: getPathMidpoint(node, targetNode)
        });
      }
    });
  });

  return connections;
};

const getPathLength = (pathData: string): number => {
  // Simplified length calculation for quadratic curves
  // In production, you might want a more accurate calculation
  const matches = pathData.match(/M ([\d.]+) ([\d.]+) Q ([\d.]+) ([\d.]+) ([\d.]+) ([\d.]+)/);
  if (matches) {
    const [, x1, y1, cx, cy, x2, y2] = matches.map(Number);
    const d1 = Math.sqrt((cx - x1) ** 2 + (cy - y1) ** 2);
    const d2 = Math.sqrt((x2 - cx) ** 2 + (y2 - cy) ** 2);
    return d1 + d2;
  }
  return 0;
};

const getPathMidpoint = (from: NeuralNode, to: NeuralNode): { x: number; y: number } => {
  return {
    x: (from.x + to.x) / 2,
    y: (from.y + to.y) / 2
  };
};
```

### Connection Network Component
```tsx
// src/components/animations/NeuralAssemblyEngine/components/ConnectionNetwork.tsx
import React, { useMemo } from 'react';
import { NeuralNode } from '../types';
import { generateAllConnections, ConnectionPath } from '../utils/pathUtils';

interface ConnectionNetworkProps {
  nodes: NeuralNode[];
  activeConnections: string[];
  className?: string;
}

export const ConnectionNetwork: React.FC<ConnectionNetworkProps> = ({
  nodes,
  activeConnections,
  className = ""
}) => {
  const connections = useMemo(() => generateAllConnections(nodes), [nodes]);

  return (
    <g className={`connection-network-layer ${className}`}>
      {connections.map(connection => (
        <ConnectionPath
          key={connection.id}
          connection={connection}
          isActive={activeConnections.includes(connection.id)}
        />
      ))}
    </g>
  );
};

interface ConnectionPathProps {
  connection: ConnectionPath;
  isActive: boolean;
}

const ConnectionPath: React.FC<ConnectionPathProps> = ({ connection, isActive }) => {
  return (
    <g className={`connection-group connection-${connection.id}`}>
      {/* Background path */}
      <path
        d={connection.pathData}
        fill="none"
        stroke="rgba(255, 255, 255, 0.1)"
        strokeWidth="1"
        className="connection-bg"
      />

      {/* Active connection path */}
      <path
        d={connection.pathData}
        fill="none"
        stroke="url(#connectionLineGradient)"
        strokeWidth="2"
        strokeDasharray="0,1000" // Will be animated
        markerEnd="url(#connectionDot)"
        className="connection-active"
        style={{
          opacity: isActive ? 1 : 0,
          filter: isActive ? 'url(#dataTrail)' : 'none'
        }}
      />

      {/* Data flow particle */}
      {isActive && (
        <DataFlowParticle pathData={connection.pathData} />
      )}
    </g>
  );
};

const DataFlowParticle: React.FC<{ pathData: string }> = ({ pathData }) => (
  <circle
    r="2"
    fill="#00aaff"
    className="data-particle"
    style={{ opacity: 0 }}
  >
    <animateMotion
      dur="3s"
      repeatCount="indefinite"
      path={pathData}
      begin="0s"
    />
  </circle>
);
```

## ✨ Particle System

### Code Fragment Data
```typescript
// src/components/animations/NeuralAssemblyEngine/data/codeFragments.ts

export const codeFragments = {
  chaos: [
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
  ],
  recognition: [
    'AI agent pattern',
    'specification first',
    'structured approach',
    'automated testing',
    'code generation',
    'intelligent review',
    'systematic debugging',
    'documentation sync'
  ],
  learning: [
    'claude.orchestrate()',
    'agent.learn(context)',
    'swarm.coordinate()',
    'specification.validate()',
    'ai.generateCode()',
    'agent.review()',
    'flow.optimize()',
    'neural.connect()'
  ],
  mastery: [
    'Agentic Programming',
    'Newcode Mastery',
    '3-5x Faster Dev',
    'AI-Native Workflow',
    'Specification Engineering',
    'Zero Bugs Achieved',
    'Perfect Documentation',
    'Autonomous Development'
  ]
};

export const getFragmentsForPhase = (phase: number): string[] => {
  switch (phase) {
    case 0: return codeFragments.chaos;
    case 1: return codeFragments.recognition;
    case 2: return codeFragments.learning;
    case 3: return codeFragments.learning;
    case 4: return codeFragments.mastery;
    default: return codeFragments.chaos;
  }
};
```

### Particle System Component
```tsx
// src/components/animations/NeuralAssemblyEngine/components/ParticleSystem.tsx
import React, { useMemo } from 'react';
import { CodeParticle } from '../types';
import { getFragmentsForPhase } from '../data/codeFragments';

interface ParticleSystemProps {
  currentPhase: number;
  particleCount: number;
  className?: string;
}

export const ParticleSystem: React.FC<ParticleSystemProps> = ({
  currentPhase,
  particleCount,
  className = ""
}) => {
  const particles = useMemo(() =>
    generateParticles(currentPhase, particleCount),
    [currentPhase, particleCount]
  );

  return (
    <g className={`particle-system-layer ${className}`}>
      {particles.map(particle => (
        <CodeFragment key={particle.id} particle={particle} />
      ))}
    </g>
  );
};

const generateParticles = (phase: number, count: number): CodeParticle[] => {
  const fragments = getFragmentsForPhase(phase);
  const particles: CodeParticle[] = [];

  for (let i = 0; i < count; i++) {
    particles.push({
      id: `particle-${i}`,
      text: fragments[Math.floor(Math.random() * fragments.length)],
      x: Math.random() * 1200,
      y: Math.random() * 600,
      size: Math.random() * 4 + 10, // 10-14px
      opacity: Math.random() * 0.6 + 0.2, // 0.2-0.8
      rotation: Math.random() * 360,
      velocity: {
        x: (Math.random() - 0.5) * 100,
        y: (Math.random() - 0.5) * 100
      }
    });
  }

  return particles;
};

interface CodeFragmentProps {
  particle: CodeParticle;
}

const CodeFragment: React.FC<CodeFragmentProps> = ({ particle }) => {
  const textLength = particle.text.length * 7; // Approximate width
  const rectWidth = Math.max(textLength, 60);

  return (
    <g
      className={`code-fragment particle-${particle.id}`}
      transform={`translate(${particle.x}, ${particle.y}) rotate(${particle.rotation})`}
      style={{ opacity: 0 }}
    >
      {/* Background rectangle */}
      <rect
        x={-rectWidth / 2}
        y={-12}
        width={rectWidth}
        height={24}
        rx="4"
        fill="rgba(51, 51, 51, 0.9)"
        stroke="rgba(255, 255, 255, 0.3)"
        strokeWidth="1"
        className="fragment-bg"
      />

      {/* Code text */}
      <text
        textAnchor="middle"
        dy="4"
        fontSize={particle.size}
        fill="#ffffff"
        fontFamily="'Monaco', 'Menlo', 'Ubuntu Mono', monospace"
        className="fragment-text"
      >
        {particle.text}
      </text>
    </g>
  );
};
```

## 📱 Responsive Adaptations

### Viewport Management
```typescript
// src/components/animations/NeuralAssemblyEngine/utils/responsiveUtils.ts

export interface ViewportConfig {
  viewBox: string;
  scale: number;
  nodeSize: number;
  fontSize: number;
  effectsLevel: 'minimal' | 'standard' | 'full';
}

export const getViewportConfig = (width: number, height: number): ViewportConfig => {
  if (width < 768) {
    // Mobile: Focus on center area
    return {
      viewBox: "300 150 600 300",
      scale: 0.8,
      nodeSize: 0.7,
      fontSize: 0.8,
      effectsLevel: 'minimal'
    };
  } else if (width < 1024) {
    // Tablet: Moderate crop
    return {
      viewBox: "150 75 900 450",
      scale: 0.9,
      nodeSize: 0.85,
      fontSize: 0.9,
      effectsLevel: 'standard'
    };
  } else {
    // Desktop: Full view
    return {
      viewBox: "0 0 1200 600",
      scale: 1.0,
      nodeSize: 1.0,
      fontSize: 1.0,
      effectsLevel: 'full'
    };
  }
};

export const adaptNodePositions = (
  nodes: NeuralNode[],
  config: ViewportConfig
): NeuralNode[] => {
  return nodes.map(node => ({
    ...node,
    size: node.size * config.nodeSize,
    x: node.x * config.scale,
    y: node.y * config.scale
  }));
};
```

### Performance-Optimized Rendering
```tsx
// Component with performance optimizations
export const OptimizedSVGLayer: React.FC<SVGLayerProps> = ({
  nodes,
  currentPhase,
  quality
}) => {
  const memoizedNodes = useMemo(() =>
    nodes.filter(node => shouldRenderNode(node, quality)),
    [nodes, quality]
  );

  const memoizedConnections = useMemo(() =>
    generateOptimizedConnections(memoizedNodes, quality),
    [memoizedNodes, quality]
  );

  return (
    <svg className="neural-svg-optimized">
      <SVGDefinitions quality={quality} />
      {quality !== 'minimal' && <BackgroundGrid />}
      <ConnectionNetwork
        connections={memoizedConnections}
        simplified={quality === 'minimal'}
      />
      <NeuralNodes
        nodes={memoizedNodes}
        currentPhase={currentPhase}
        quality={quality}
      />
      {quality === 'full' && <ParticleSystem />}
    </svg>
  );
};

const shouldRenderNode = (node: NeuralNode, quality: string): boolean => {
  switch (quality) {
    case 'minimal':
      return node.type === 'core' || (node.type === 'specialist' && node.size > 40);
    case 'standard':
      return node.type !== 'helper' || node.size >= 25;
    default:
      return true;
  }
};
```

## ✅ Deliverables Checklist

- [ ] SVG layer structure implemented
- [ ] Neural network topology defined
- [ ] Connection path algorithms created
- [ ] Particle system with code fragments
- [ ] Responsive viewport adaptations
- [ ] Performance optimizations applied
- [ ] Visual effects (gradients, filters) configured
- [ ] Component integration ready

## 🔗 Next Steps
After completing this subtask, proceed to **Subtask 3: Animation Timeline** to implement the five-phase animation sequence with Anime.js.