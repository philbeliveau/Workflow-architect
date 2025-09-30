/**
 * SVG Layer Component - Neural Assembly Engine
 * Main SVG container with viewBox management and layer organization
 */

import React from 'react';
import { NeuralNode, ConnectionPath, CodeParticle } from '../types';

interface SVGLayerProps {
  nodes: NeuralNode[];
  connections: ConnectionPath[];
  particles: CodeParticle[];
  currentPhase: number;
  viewBox?: string;
  className?: string;
}

export const SVGLayer: React.FC<SVGLayerProps> = ({
  nodes,
  connections,
  particles,
  currentPhase,
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
      role="img"
      aria-label="Visualisation du réseau neuronal de programmation agentique"
    >
      <SVGDefinitions />
      <BackgroundGrid />
      <ConnectionLayer connections={connections} />
      <DataFlowLayer />
      <NodesLayer nodes={nodes} currentPhase={currentPhase} />
      <ParticleTrailsLayer particles={particles} />
      <EffectsLayer />
    </svg>
  );
};

/**
 * SVG Definitions - Gradients, Filters, and Markers
 */
const SVGDefinitions: React.FC = () => (
  <defs>
    {/* Phase-specific gradients */}
    <radialGradient id="chaosGradient" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stopColor="#333333" stopOpacity="0.8"/>
      <stop offset="100%" stopColor="#666666" stopOpacity="0.2"/>
    </radialGradient>

    <radialGradient id="recognitionGradient" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stopColor="#004499" stopOpacity="1"/>
      <stop offset="50%" stopColor="#0066cc" stopOpacity="0.6"/>
      <stop offset="100%" stopColor="#3388dd" stopOpacity="0.1"/>
    </radialGradient>

    <radialGradient id="learningGradient" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stopColor="#0066cc" stopOpacity="1"/>
      <stop offset="50%" stopColor="#0088ff" stopOpacity="0.7"/>
      <stop offset="100%" stopColor="#66aaff" stopOpacity="0.2"/>
    </radialGradient>

    <radialGradient id="connectionGradient" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stopColor="#00aa00" stopOpacity="1"/>
      <stop offset="50%" stopColor="#00ff00" stopOpacity="0.7"/>
      <stop offset="100%" stopColor="#66ff66" stopOpacity="0.2"/>
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

/**
 * Background Grid Pattern
 */
const BackgroundGrid: React.FC = () => (
  <g className="background-grid" opacity="0.1">
    <defs>
      <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
        <path
          d="M 50 0 L 0 0 0 50"
          fill="none"
          stroke="rgba(255, 255, 255, 0.2)"
          strokeWidth="1"
        />
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill="url(#grid)" />
  </g>
);

/**
 * Connection Layer - Renders connection paths between nodes
 */
interface ConnectionLayerProps {
  connections: ConnectionPath[];
}

const ConnectionLayer: React.FC<ConnectionLayerProps> = ({ connections }) => (
  <g className="connection-layer">
    {connections.map(connection => (
      <g key={connection.id} className={`connection-group connection-${connection.id}`}>
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
          strokeDasharray="0,1000"
          markerEnd="url(#connectionDot)"
          className="connection-active"
          style={{
            opacity: connection.isActive ? 1 : 0,
            filter: connection.isActive ? 'url(#dataTrail)' : 'none'
          }}
        />
      </g>
    ))}
  </g>
);

/**
 * Data Flow Layer - Animated data particles
 */
const DataFlowLayer: React.FC = () => (
  <g className="data-flow-layer">
    {/* Data flow particles will be added by animation system */}
  </g>
);

/**
 * Nodes Layer - Neural network nodes
 */
interface NodesLayerProps {
  nodes: NeuralNode[];
  currentPhase: number;
}

const NodesLayer: React.FC<NodesLayerProps> = ({ nodes, currentPhase }) => (
  <g className="nodes-layer">
    {/* Nodes will be rendered by NeuralNodes component */}
  </g>
);

/**
 * Particle Trails Layer - Code fragment particles
 */
interface ParticleTrailsLayerProps {
  particles: CodeParticle[];
}

const ParticleTrailsLayer: React.FC<ParticleTrailsLayerProps> = ({ particles }) => (
  <g className="particle-trails-layer">
    {/* Particles will be rendered by ParticleSystem component */}
  </g>
);

/**
 * Effects Layer - Additional visual effects
 */
const EffectsLayer: React.FC = () => (
  <g className="effects-layer">
    {/* Special effects like glows, halos will be added here */}
  </g>
);