/**
 * Neural Nodes Component - Neural Assembly Engine
 * Renders neural network nodes with phase-based styling and French role names
 */

import React from 'react';
import { NeuralNode } from '../types';
import { getPhaseColor, getPhaseEffect } from '../data/colorScheme';

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

const NeuralNodeElement: React.FC<NeuralNodeElementProps> = ({
  node,
  currentPhase
}) => {
  const getNodeFill = (type: string, phase: number): string => {
    switch (phase) {
      case 0: return 'url(#chaosGradient)';
      case 1: return 'url(#recognitionGradient)';
      case 2: return 'url(#learningGradient)';
      case 3: return 'url(#connectionGradient)';
      case 4: return 'url(#masteryGradient)';
      default: return 'url(#chaosGradient)';
    }
  };

  const getStrokeColor = (phase: number): string => {
    return getPhaseColor(phase, 'accent');
  };

  const getStrokeWidth = (type: string): number => {
    switch (type) {
      case 'core': return 4;
      case 'specialist': return 3;
      case 'helper': return 2;
      default: return 2;
    }
  };

  const getNodeOpacity = (type: string, phase: number): number => {
    if (phase === 0) return 0.6; // Chaos - dimmed
    if (phase === 4) return 1.0; // Mastery - full brightness
    return 0.8; // Learning phases
  };

  const shouldShowActivityIndicator = (phase: number): boolean => {
    return phase >= 2; // Show activity from learning phase onwards
  };

  const getTextColor = (phase: number): string => {
    // Use darker colors for better readability
    switch (phase) {
      case 0: return '#333333';
      case 1: return '#1a365d';
      case 2: return '#1a365d';
      case 3: return '#1a3a1a';
      case 4: return '#8b5a00';
      default: return '#333333';
    }
  };

  const getFontSize = (type: string): string => {
    switch (type) {
      case 'core': return '14';
      case 'specialist': return '12';
      case 'helper': return '10';
      default: return '12';
    }
  };

  return (
    <g
      className={`neural-node node-${node.type} node-${node.id} phase-${currentPhase}`}
      transform={`translate(${node.x}, ${node.y})`}
      role="group"
      aria-label={`Agent ${node.role} de type ${node.type}`}
    >
      {/* Pulse ring - outer glow effect */}
      <circle
        r={node.size / 2 + 12}
        fill="none"
        stroke={getPhaseColor(currentPhase, 'accent')}
        strokeWidth="2"
        strokeOpacity="0.4"
        className="pulse-ring"
        style={{
          opacity: 0,
          filter: 'url(#pulseEffect)'
        }}
      />

      {/* Secondary ring for depth */}
      <circle
        r={node.size / 2 + 6}
        fill="none"
        stroke={getPhaseColor(currentPhase, 'secondary')}
        strokeWidth="1"
        strokeOpacity="0.6"
        className="secondary-ring"
        style={{ opacity: 0 }}
      />

      {/* Main node body */}
      <circle
        r={node.size / 2}
        fill={getNodeFill(node.type, currentPhase)}
        stroke={getStrokeColor(currentPhase)}
        strokeWidth={getStrokeWidth(node.type)}
        filter="url(#nodeGlow)"
        className="node-body"
        style={{
          opacity: 0,
          transition: 'all 0.3s ease'
        }}
        onAnimationEnd={() => {
          // Animation callback can be handled by parent
        }}
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

      {/* Specialist indicator ring */}
      {node.type === 'specialist' && currentPhase >= 1 && (
        <circle
          r={node.size / 2 - 3}
          fill="none"
          stroke="rgba(255, 255, 255, 0.8)"
          strokeWidth="1"
          strokeDasharray="5,3"
          className="specialist-ring"
          style={{ opacity: 0 }}
        />
      )}

      {/* Activity indicator - shows data processing */}
      {shouldShowActivityIndicator(currentPhase) && (
        <circle
          r={3}
          fill={getPhaseColor(currentPhase, 'accent')}
          className="activity-indicator"
          style={{
            opacity: 0,
            transformOrigin: 'center'
          }}
        />
      )}

      {/* Data flow indicators for active connections */}
      {currentPhase >= 3 && node.type !== 'helper' && (
        <g className="data-flow-indicators">
          {[0, 120, 240].map((angle, index) => (
            <circle
              key={index}
              r={1.5}
              fill={getPhaseColor(currentPhase, 'connection')}
              className="data-indicator"
              transform={`rotate(${angle}) translate(${node.size / 2 + 15}, 0)`}
              style={{ opacity: 0 }}
            />
          ))}
        </g>
      )}

      {/* Node role label */}
      <text
        y={node.size / 2 + 20}
        textAnchor="middle"
        fontSize={getFontSize(node.type)}
        fontWeight="300" // NEWCODE brand requirement
        fill={getTextColor(currentPhase)}
        className="node-label"
        style={{
          opacity: 0,
          userSelect: 'none',
          pointerEvents: 'none'
        }}
      >
        {node.role}
      </text>

      {/* Type indicator for accessibility */}
      <title>{`Agent ${node.role} - Type: ${node.type} - Phase: ${currentPhase}`}</title>

      {/* Connection points for visual reference */}
      {currentPhase >= 2 && (
        <g className="connection-points">
          {node.connections.slice(0, 4).map((_, index) => {
            const angle = (index * 90) * Math.PI / 180;
            const x = Math.cos(angle) * (node.size / 2 + 8);
            const y = Math.sin(angle) * (node.size / 2 + 8);

            return (
              <circle
                key={index}
                cx={x}
                cy={y}
                r={1}
                fill={getPhaseColor(currentPhase, 'connection')}
                className="connection-point"
                style={{ opacity: 0 }}
              />
            );
          })}
        </g>
      )}

      {/* Mastery crown effect for core node in final phase */}
      {node.type === 'core' && currentPhase === 4 && (
        <g className="mastery-crown">
          <circle
            r={node.size / 2 + 20}
            fill="none"
            stroke="url(#masteryGradient)"
            strokeWidth="3"
            strokeOpacity="0.8"
            strokeDasharray="8,4"
            className="crown-ring"
            style={{ opacity: 0 }}
          />
          {[0, 60, 120, 180, 240, 300].map((angle, index) => (
            <g
              key={index}
              transform={`rotate(${angle})`}
              className="crown-spike"
            >
              <path
                d={`M 0,${-node.size / 2 - 25} L 3,${-node.size / 2 - 15} L -3,${-node.size / 2 - 15} Z`}
                fill={getPhaseColor(4, 'accent')}
                style={{ opacity: 0 }}
              />
            </g>
          ))}
        </g>
      )}

      {/* Debug information (only in development) */}
      {process.env.NODE_ENV === 'development' && (
        <text
          y={-node.size / 2 - 10}
          textAnchor="middle"
          fontSize="8"
          fill="#999"
          className="debug-info"
          style={{ opacity: 0.5 }}
        >
          {node.id}
        </text>
      )}
    </g>
  );
};