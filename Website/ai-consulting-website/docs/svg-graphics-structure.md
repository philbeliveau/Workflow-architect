# 🎨 SVG Graphics Structure for Neural Assembly Engine

## 📐 SVG Layer Architecture

### Main SVG Container
```xml
<svg
  viewBox="0 0 1200 600"
  className="neural-assembly-svg"
  style={{
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    overflow: 'visible',
    pointerEvents: 'none'
  }}
>
  <defs>
    <!-- Gradients, filters, and patterns -->
  </defs>

  <!-- Background grid (optional) -->
  <g className="background-layer" opacity="0.1">
    <!-- Grid pattern -->
  </g>

  <!-- Connection paths (synapses) -->
  <g className="connection-layer">
    <!-- Neural network connections -->
  </g>

  <!-- Data flow paths -->
  <g className="dataflow-layer">
    <!-- Animated data streams -->
  </g>

  <!-- Neural nodes -->
  <g className="nodes-layer">
    <!-- AI agent nodes -->
  </g>

  <!-- Particle trails -->
  <g className="trails-layer">
    <!-- Code fragment trails -->
  </g>
</svg>
```

---

## 🎭 SVG Definitions (Defs)

### Gradients for Neural States
```xml
<defs>
  <!-- Chaos state gradient -->
  <radialGradient id="chaosGradient" cx="50%" cy="50%" r="50%">
    <stop offset="0%" stopColor="#333333" stopOpacity="0.8"/>
    <stop offset="100%" stopColor="#666666" stopOpacity="0.2"/>
  </radialGradient>

  <!-- Learning state gradient -->
  <radialGradient id="learningGradient" cx="50%" cy="50%" r="50%">
    <stop offset="0%" stopColor="#0088ff" stopOpacity="1"/>
    <stop offset="50%" stopColor="#0066cc" stopOpacity="0.6"/>
    <stop offset="100%" stopColor="#004499" stopOpacity="0.1"/>
  </radialGradient>

  <!-- Active state gradient -->
  <radialGradient id="activeGradient" cx="50%" cy="50%" r="50%">
    <stop offset="0%" stopColor="#00ff00" stopOpacity="1"/>
    <stop offset="50%" stopColor="#00cc00" stopOpacity="0.7"/>
    <stop offset="100%" stopColor="#009900" stopOpacity="0.2"/>
  </radialGradient>

  <!-- Mastery state gradient -->
  <radialGradient id="masteryGradient" cx="50%" cy="50%" r="50%">
    <stop offset="0%" stopColor="#ffaa00" stopOpacity="1"/>
    <stop offset="30%" stopColor="#ffcc00" stopOpacity="0.8"/>
    <stop offset="100%" stopColor="#ffdd66" stopOpacity="0.3"/>
  </radialGradient>

  <!-- Connection gradient -->
  <linearGradient id="connectionGradient" x1="0%" y1="0%" x2="100%" y2="0%">
    <stop offset="0%" stopColor="#ffffff" stopOpacity="0"/>
    <stop offset="50%" stopColor="#00aaff" stopOpacity="1"/>
    <stop offset="100%" stopColor="#ffffff" stopOpacity="0"/>
  </linearGradient>
</defs>
```

### Filters for Visual Effects
```xml
<defs>
  <!-- Glow effect for active nodes -->
  <filter id="nodeGlow" x="-50%" y="-50%" width="200%" height="200%">
    <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
    <feMerge>
      <feMergeNode in="coloredBlur"/>
      <feMergeNode in="SourceGraphic"/>
    </feMerge>
  </filter>

  <!-- Pulse effect -->
  <filter id="pulse" x="-50%" y="-50%" width="200%" height="200%">
    <feGaussianBlur stdDeviation="2" result="blur"/>
    <feOffset dx="0" dy="0" result="offset"/>
    <feMerge>
      <feMergeNode in="offset"/>
      <feMergeNode in="SourceGraphic"/>
    </feMerge>
  </filter>

  <!-- Data flow trail effect -->
  <filter id="dataTrail" x="-50%" y="-50%" width="200%" height="200%">
    <feGaussianBlur stdDeviation="1" result="trail"/>
    <feColorMatrix values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 0.7 0"/>
  </filter>
</defs>
```

### Markers for Arrow Heads
```xml
<defs>
  <!-- Data flow arrow -->
  <marker id="dataArrow" viewBox="0 0 10 10" refX="8" refY="3"
          markerWidth="6" markerHeight="6" orient="auto" markerUnits="strokeWidth">
    <path d="M0,0 L0,6 L9,3 z" fill="#00aaff"/>
  </marker>

  <!-- Connection endpoint -->
  <marker id="connectionDot" viewBox="0 0 6 6" refX="3" refY="3"
          markerWidth="6" markerHeight="6">
    <circle cx="3" cy="3" r="2" fill="#00ff00"/>
  </marker>
</defs>
```

---

## 🔗 Neural Network Topology

### Node Positions & Types
```typescript
// data/nodePositions.ts
export interface NeuralNode {
  id: string;
  x: number;
  y: number;
  type: 'core' | 'specialist' | 'helper';
  role: string;
  size: number;
  connections: string[];
}

export const neuralNodes: NeuralNode[] = [
  // Core orchestrator (center)
  {
    id: 'orchestrator',
    x: 600, y: 300,
    type: 'core',
    role: 'Orchestrateur Principal',
    size: 60,
    connections: ['coder', 'researcher', 'tester', 'reviewer']
  },

  // Specialist agents (inner ring)
  {
    id: 'coder',
    x: 450, y: 200,
    type: 'specialist',
    role: 'Agent Codeur',
    size: 45,
    connections: ['orchestrator', 'tester', 'formatter']
  },
  {
    id: 'researcher',
    x: 750, y: 200,
    type: 'specialist',
    role: 'Agent Recherche',
    size: 45,
    connections: ['orchestrator', 'analyzer', 'documenter']
  },
  {
    id: 'tester',
    x: 450, y: 400,
    type: 'specialist',
    role: 'Agent Test',
    size: 45,
    connections: ['orchestrator', 'coder', 'validator']
  },
  {
    id: 'reviewer',
    x: 750, y: 400,
    type: 'specialist',
    role: 'Agent Révision',
    size: 45,
    connections: ['orchestrator', 'optimizer', 'quality']
  },

  // Helper agents (outer ring)
  {
    id: 'formatter',
    x: 300, y: 150,
    type: 'helper',
    role: 'Formatage',
    size: 30,
    connections: ['coder']
  },
  {
    id: 'analyzer',
    x: 900, y: 150,
    type: 'helper',
    role: 'Analyse',
    size: 30,
    connections: ['researcher']
  },
  {
    id: 'validator',
    x: 300, y: 450,
    type: 'helper',
    role: 'Validation',
    size: 30,
    connections: ['tester']
  },
  {
    id: 'optimizer',
    x: 900, y: 450,
    type: 'helper',
    role: 'Optimisation',
    size: 30,
    connections: ['reviewer']
  },

  // Additional support agents
  {
    id: 'documenter',
    x: 600, y: 100,
    type: 'helper',
    role: 'Documentation',
    size: 25,
    connections: ['researcher', 'orchestrator']
  },
  {
    id: 'quality',
    x: 600, y: 500,
    type: 'helper',
    role: 'Qualité',
    size: 25,
    connections: ['reviewer', 'orchestrator']
  }
];
```

### SVG Node Implementation
```tsx
// components/NeuralNodes.tsx
const NeuralNode: React.FC<{ node: NeuralNode; state: NodeState }> = ({ node, state }) => {
  const getNodeGradient = (type: string, state: NodeState) => {
    switch (state) {
      case 'chaos': return 'url(#chaosGradient)';
      case 'learning': return 'url(#learningGradient)';
      case 'active': return 'url(#activeGradient)';
      case 'mastery': return 'url(#masteryGradient)';
      default: return 'url(#chaosGradient)';
    }
  };

  return (
    <g className={`neural-node node-${node.type}`} transform={`translate(${node.x}, ${node.y})`}>
      {/* Main node circle */}
      <circle
        r={node.size / 2}
        fill={getNodeGradient(node.type, state)}
        stroke="#ffffff"
        strokeWidth="2"
        filter="url(#nodeGlow)"
        className="node-body"
      />

      {/* Inner core (for core nodes) */}
      {node.type === 'core' && (
        <circle
          r={node.size / 4}
          fill="rgba(255, 255, 255, 0.3)"
          className="node-core"
        />
      )}

      {/* Pulse ring */}
      <circle
        r={node.size / 2 + 5}
        fill="none"
        stroke="rgba(255, 255, 255, 0.4)"
        strokeWidth="1"
        className="pulse-ring"
        opacity="0"
      />

      {/* Role label */}
      <text
        y={node.size / 2 + 20}
        textAnchor="middle"
        fontSize="12"
        fill="#333"
        className="node-label"
      >
        {node.role}
      </text>
    </g>
  );
};
```

---

## 🌐 Connection Network

### Connection Path Generation
```typescript
// utils/pathGenerator.ts
export const generateConnectionPath = (from: NeuralNode, to: NeuralNode): string => {
  const dx = to.x - from.x;
  const dy = to.y - from.y;
  const distance = Math.sqrt(dx * dx + dy * dy);

  // Calculate control points for curved path
  const midX = from.x + dx / 2;
  const midY = from.y + dy / 2;

  // Add curvature perpendicular to the line
  const perpX = -dy / distance * 30; // Curve intensity
  const perpY = dx / distance * 30;

  const controlX = midX + perpX;
  const controlY = midY + perpY;

  return `M ${from.x} ${from.y} Q ${controlX} ${controlY} ${to.x} ${to.y}`;
};
```

### SVG Connection Implementation
```tsx
// components/ConnectionNetwork.tsx
const ConnectionPath: React.FC<{
  from: NeuralNode;
  to: NeuralNode;
  active: boolean;
}> = ({ from, to, active }) => {
  const pathData = generateConnectionPath(from, to);

  return (
    <g className="connection-group">
      {/* Background path */}
      <path
        d={pathData}
        fill="none"
        stroke="rgba(255, 255, 255, 0.1)"
        strokeWidth="1"
        className="connection-bg"
      />

      {/* Active connection path */}
      <path
        d={pathData}
        fill="none"
        stroke="url(#connectionGradient)"
        strokeWidth="2"
        strokeDasharray="5,5"
        markerEnd="url(#connectionDot)"
        className="connection-active"
        style={{
          opacity: active ? 1 : 0,
          filter: active ? 'url(#dataTrail)' : 'none'
        }}
      />

      {/* Data flow particles */}
      {active && (
        <circle
          r="3"
          fill="#00aaff"
          className="data-particle"
        >
          <animateMotion
            dur="2s"
            repeatCount="indefinite"
            path={pathData}
          />
        </circle>
      )}
    </g>
  );
};
```

---

## ✨ Particle System

### Code Fragment Particles
```tsx
// components/ParticleSystem.tsx
interface CodeParticle {
  id: string;
  text: string;
  x: number;
  y: number;
  size: number;
  opacity: number;
  rotation: number;
}

const CodeFragment: React.FC<{ particle: CodeParticle }> = ({ particle }) => {
  return (
    <g className="code-fragment" transform={`translate(${particle.x}, ${particle.y}) rotate(${particle.rotation})`}>
      {/* Background rectangle */}
      <rect
        x="-40"
        y="-12"
        width="80"
        height="24"
        rx="4"
        fill="rgba(51, 51, 51, 0.8)"
        stroke="rgba(255, 255, 255, 0.2)"
        strokeWidth="1"
        className="fragment-bg"
      />

      {/* Code text */}
      <text
        textAnchor="middle"
        dy="4"
        fontSize={particle.size}
        fill="#ffffff"
        fontFamily="monospace"
        className="fragment-text"
      >
        {particle.text}
      </text>
    </g>
  );
};
```

### Particle Trails
```xml
<!-- SVG trail paths for particle movement -->
<g className="particle-trails">
  <path
    d="M 100 300 Q 300 100 500 200 T 900 300"
    fill="none"
    stroke="rgba(0, 170, 255, 0.3)"
    strokeWidth="1"
    strokeDasharray="2,4"
    className="particle-trail"
  />

  <!-- Multiple trails for different particle paths -->
  <path
    d="M 200 400 Q 400 200 600 300 T 1000 250"
    fill="none"
    stroke="rgba(0, 255, 0, 0.2)"
    strokeWidth="1"
    strokeDasharray="3,6"
    className="particle-trail"
  />
</g>
```

---

## 🎯 Data Flow Visualization

### Flow Path Definitions
```xml
<g className="data-flow-paths">
  <!-- Main data pipeline -->
  <path
    id="mainFlow"
    d="M 50 300 L 200 300 Q 250 250 300 300 L 500 300 Q 550 350 600 300 L 1150 300"
    fill="none"
    stroke="rgba(0, 170, 255, 0.6)"
    strokeWidth="3"
    strokeDasharray="10,5"
    className="data-flow-main"
  />

  <!-- Branch flows -->
  <path
    id="branchFlow1"
    d="M 300 300 Q 350 200 400 150 L 500 100"
    fill="none"
    stroke="rgba(0, 255, 0, 0.4)"
    strokeWidth="2"
    strokeDasharray="5,3"
    className="data-flow-branch"
  />

  <path
    id="branchFlow2"
    d="M 600 300 Q 650 400 700 450 L 800 500"
    fill="none"
    stroke="rgba(255, 170, 0, 0.4)"
    strokeWidth="2"
    strokeDasharray="5,3"
    className="data-flow-branch"
  />
</g>
```

### Animated Data Packets
```tsx
const DataPacket: React.FC<{ pathId: string; delay: number }> = ({ pathId, delay }) => {
  return (
    <g className="data-packet">
      {/* Packet shape */}
      <polygon
        points="-6,0 6,0 8,-4 -8,-4"
        fill="#00aaff"
        stroke="#ffffff"
        strokeWidth="1"
      >
        <animateMotion
          dur="4s"
          repeatCount="indefinite"
          begin={`${delay}s`}
        >
          <mpath href={`#${pathId}`} />
        </animateMotion>
      </polygon>

      {/* Packet trail */}
      <circle
        r="2"
        fill="rgba(0, 170, 255, 0.5)"
      >
        <animateMotion
          dur="4s"
          repeatCount="indefinite"
          begin={`${delay + 0.2}s`}
        >
          <mpath href={`#${pathId}`} />
        </animateMotion>
      </circle>
    </g>
  );
};
```

---

## 🌟 Special Effects

### Neural Firing Effect
```xml
<g className="neural-firing">
  <!-- Firing burst -->
  <g className="firing-burst" opacity="0">
    <!-- Multiple radiating lines -->
    <line x1="0" y1="0" x2="30" y2="0" stroke="#ffff00" strokeWidth="2" transform="rotate(0)"/>
    <line x1="0" y1="0" x2="25" y2="0" stroke="#ffff00" strokeWidth="1.5" transform="rotate(45)"/>
    <line x1="0" y1="0" x2="30" y2="0" stroke="#ffff00" strokeWidth="2" transform="rotate(90)"/>
    <line x1="0" y1="0" x2="25" y2="0" stroke="#ffff00" strokeWidth="1.5" transform="rotate(135)"/>
    <line x1="0" y1="0" x2="30" y2="0" stroke="#ffff00" strokeWidth="2" transform="rotate(180)"/>
    <line x1="0" y1="0" x2="25" y2="0" stroke="#ffff00" strokeWidth="1.5" transform="rotate(225)"/>
    <line x1="0" y1="0" x2="30" y2="0" stroke="#ffff00" strokeWidth="2" transform="rotate(270)"/>
    <line x1="0" y1="0" x2="25" y2="0" stroke="#ffff00" strokeWidth="1.5" transform="rotate(315)"/>
  </g>
</g>
```

### Assembly Complete Effect
```xml
<g className="assembly-complete" opacity="0">
  <!-- Success ring -->
  <circle
    r="100"
    fill="none"
    stroke="url(#masteryGradient)"
    strokeWidth="4"
    strokeDasharray="20,10"
    transform="rotate(-90)"
  />

  <!-- Inner sparkles -->
  <g className="sparkles">
    <circle cx="0" cy="-80" r="3" fill="#ffff00"/>
    <circle cx="60" cy="-40" r="2" fill="#ffff00"/>
    <circle cx="60" cy="40" r="3" fill="#ffff00"/>
    <circle cx="0" cy="80" r="2" fill="#ffff00"/>
    <circle cx="-60" cy="40" r="3" fill="#ffff00"/>
    <circle cx="-60" cy="-40" r="2" fill="#ffff00"/>
  </g>

  <!-- Central logo/text -->
  <text
    textAnchor="middle"
    dy="6"
    fontSize="24"
    fontWeight="300"
    fill="#ffaa00"
    className="completion-text"
  >
    NEWCODE
  </text>
  <text
    textAnchor="middle"
    dy="30"
    fontSize="12"
    fill="#666"
    className="completion-subtitle"
  >
    Programmation Agentique
  </text>
</g>
```

---

## 📱 Responsive SVG Structure

### Viewport Adaptations
```tsx
const ResponsiveSVG: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [viewBox, setViewBox] = useState("0 0 1200 600");

  useEffect(() => {
    const updateViewBox = () => {
      const width = window.innerWidth;
      if (width < 768) {
        setViewBox("200 100 800 400"); // Mobile crop
      } else if (width < 1024) {
        setViewBox("100 50 1000 500"); // Tablet crop
      } else {
        setViewBox("0 0 1200 600"); // Desktop full
      }
    };

    updateViewBox();
    window.addEventListener('resize', updateViewBox);
    return () => window.removeEventListener('resize', updateViewBox);
  }, []);

  return (
    <svg
      viewBox={viewBox}
      className="neural-svg"
      preserveAspectRatio="xMidYMid meet"
    >
      {children}
    </svg>
  );
};
```

### Mobile-Optimized Elements
```tsx
const MobileOptimizations = {
  // Reduce node count on mobile
  getVisibleNodes: (allNodes: NeuralNode[], isMobile: boolean) => {
    if (isMobile) {
      return allNodes.filter(node =>
        node.type === 'core' ||
        (node.type === 'specialist' && ['coder', 'researcher'].includes(node.role))
      );
    }
    return allNodes;
  },

  // Simplify paths on mobile
  getSimplifiedPath: (from: NeuralNode, to: NeuralNode, isMobile: boolean) => {
    if (isMobile) {
      return `M ${from.x} ${from.y} L ${to.x} ${to.y}`; // Straight line
    }
    return generateConnectionPath(from, to); // Curved path
  }
};
```

---

This SVG structure provides all the visual elements needed for the Neural Assembly Engine animation, with full consideration for performance, responsiveness, and visual impact! 🎨