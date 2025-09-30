/**
 * Connection Network Component - Neural Assembly Engine
 * Renders curved connection paths between neural nodes with data flow visualization
 */

import React, { useMemo } from 'react';
import { NeuralNode, ConnectionPath } from '../types';
import { generateAllConnections } from '../utils/pathUtils';
import { getPhaseColor } from '../data/colorScheme';
import { getConnectionsForPhase } from '../data/nodePositions';

interface ConnectionNetworkProps {
  nodes: NeuralNode[];
  currentPhase: number;
  activeConnections?: string[];
  className?: string;
}

export const ConnectionNetwork: React.FC<ConnectionNetworkProps> = ({
  nodes,
  currentPhase,
  activeConnections = [],
  className = ""
}) => {
  const connections = useMemo(() => generateAllConnections(nodes), [nodes]);

  // Get phase-appropriate active connections
  const phaseConnections = useMemo(() => {
    const phaseConnectionIds = getConnectionsForPhase(currentPhase);
    return connections.map(conn => ({
      ...conn,
      isActive: phaseConnectionIds.includes(conn.id) || activeConnections.includes(conn.id)
    }));
  }, [connections, currentPhase, activeConnections]);

  return (
    <g className={`connection-network-layer ${className}`}>
      {phaseConnections.map(connection => (
        <ConnectionPathElement
          key={connection.id}
          connection={connection}
          currentPhase={currentPhase}
        />
      ))}
    </g>
  );
};

interface ConnectionPathElementProps {
  connection: ConnectionPath;
  currentPhase: number;
}

const ConnectionPathElement: React.FC<ConnectionPathElementProps> = ({
  connection,
  currentPhase
}) => {
  const getConnectionOpacity = (isActive: boolean, phase: number): number => {
    if (!isActive) return 0.1;

    switch (phase) {
      case 0: return 0; // Chaos - no connections
      case 1: return 0.4; // Recognition - dim connections
      case 2: return 0.6; // Learning - medium connections
      case 3: return 0.8; // Connection - strong connections
      case 4: return 1.0; // Mastery - full connections
      default: return 0.1;
    }
  };

  const getConnectionWidth = (isActive: boolean, phase: number): number => {
    if (!isActive) return 1;

    switch (phase) {
      case 1: return 1.5;
      case 2: return 2;
      case 3: return 2.5;
      case 4: return 3;
      default: return 1;
    }
  };

  const getConnectionColor = (phase: number): string => {
    return getPhaseColor(phase, 'connection');
  };

  const shouldShowDataFlow = (isActive: boolean, phase: number): boolean => {
    return isActive && phase >= 2;
  };

  const shouldShowPulse = (isActive: boolean, phase: number): boolean => {
    return isActive && phase >= 3;
  };

  return (
    <g className={`connection-group connection-${connection.id}`}>
      {/* Background path - always visible but dim */}
      <path
        d={connection.pathData}
        fill="none"
        stroke="rgba(255, 255, 255, 0.05)"
        strokeWidth="1"
        className="connection-bg"
      />

      {/* Main connection path */}
      <path
        d={connection.pathData}
        fill="none"
        stroke={getConnectionColor(currentPhase)}
        strokeWidth={getConnectionWidth(connection.isActive, currentPhase)}
        strokeOpacity={getConnectionOpacity(connection.isActive, currentPhase)}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="connection-active"
        style={{
          filter: connection.isActive ? 'url(#dataTrail)' : 'none',
          transition: 'all 0.5s ease'
        }}
      />

      {/* Active connection enhancement */}
      {connection.isActive && currentPhase >= 2 && (
        <path
          d={connection.pathData}
          fill="none"
          stroke="rgba(255, 255, 255, 0.8)"
          strokeWidth="0.5"
          strokeDasharray="0,1000"
          markerEnd="url(#connectionDot)"
          className="connection-highlight"
          style={{ opacity: 0 }}
        />
      )}

      {/* Pulse effect for strong connections */}
      {shouldShowPulse(connection.isActive, currentPhase) && (
        <path
          d={connection.pathData}
          fill="none"
          stroke={getConnectionColor(currentPhase)}
          strokeWidth={getConnectionWidth(connection.isActive, currentPhase) + 2}
          strokeOpacity="0.3"
          className="connection-pulse"
          style={{
            opacity: 0,
            filter: 'url(#pulseEffect)'
          }}
        />
      )}

      {/* Data flow particles */}
      {shouldShowDataFlow(connection.isActive, currentPhase) && (
        <DataFlowParticle
          pathData={connection.pathData}
          currentPhase={currentPhase}
          connectionId={connection.id}
        />
      )}

      {/* Bi-directional data flow for core connections */}
      {connection.isActive &&
       currentPhase >= 3 &&
       (connection.fromNode === 'orchestrator' || connection.toNode === 'orchestrator') && (
        <DataFlowParticle
          pathData={connection.pathData}
          currentPhase={currentPhase}
          connectionId={`${connection.id}-reverse`}
          reverse={true}
        />
      )}

      {/* Connection strength indicator */}
      {connection.isActive && currentPhase >= 3 && (
        <circle
          cx={connection.midpoint.x}
          cy={connection.midpoint.y}
          r={2}
          fill={getPhaseColor(currentPhase, 'accent')}
          className="connection-midpoint"
          style={{ opacity: 0 }}
        />
      )}

      {/* Data bandwidth visualization */}
      {connection.isActive && currentPhase === 4 && (
        <g className="bandwidth-indicator">
          <circle
            cx={connection.midpoint.x}
            cy={connection.midpoint.y}
            r={8}
            fill="none"
            stroke={getPhaseColor(4, 'accent')}
            strokeWidth="1"
            strokeOpacity="0.4"
            strokeDasharray="4,2"
            className="bandwidth-ring"
            style={{ opacity: 0 }}
          />
        </g>
      )}
    </g>
  );
};

interface DataFlowParticleProps {
  pathData: string;
  currentPhase: number;
  connectionId: string;
  reverse?: boolean;
}

const DataFlowParticle: React.FC<DataFlowParticleProps> = ({
  pathData,
  currentPhase,
  connectionId,
  reverse = false
}) => {
  const getParticleSize = (phase: number): number => {
    switch (phase) {
      case 2: return 1.5; // Learning - small data packets
      case 3: return 2;   // Connection - medium data flow
      case 4: return 2.5; // Mastery - large data streams
      default: return 1.5;
    }
  };

  const getAnimationDuration = (phase: number): string => {
    switch (phase) {
      case 2: return '4s';   // Learning - slower analysis
      case 3: return '3s';   // Connection - faster communication
      case 4: return '2s';   // Mastery - rapid data flow
      default: return '3s';
    }
  };

  const getParticleColor = (phase: number): string => {
    return getPhaseColor(phase, 'accent');
  };

  return (
    <g className={`data-flow-particle particle-${connectionId}`}>
      {/* Main data particle */}
      <circle
        r={getParticleSize(currentPhase)}
        fill={getParticleColor(currentPhase)}
        className="data-particle"
        style={{ opacity: 0 }}
      >
        <animateMotion
          dur={getAnimationDuration(currentPhase)}
          repeatCount="indefinite"
          path={pathData}
          begin={reverse ? "1.5s" : "0s"}
          keyTimes={reverse ? "0;1" : "0;1"}
          values={reverse ? "1;0" : "0;1"}
        />
        <animate
          attributeName="opacity"
          values="0;1;1;0"
          dur={getAnimationDuration(currentPhase)}
          repeatCount="indefinite"
          begin={reverse ? "1.5s" : "0s"}
        />
      </circle>

      {/* Particle trail effect */}
      {currentPhase >= 3 && (
        <circle
          r={getParticleSize(currentPhase) * 0.6}
          fill={getParticleColor(currentPhase)}
          fillOpacity="0.5"
          className="data-particle-trail"
          style={{ opacity: 0 }}
        >
          <animateMotion
            dur={getAnimationDuration(currentPhase)}
            repeatCount="indefinite"
            path={pathData}
            begin={reverse ? "1.8s" : "0.3s"}
          />
          <animate
            attributeName="opacity"
            values="0;0.5;0.5;0"
            dur={getAnimationDuration(currentPhase)}
            repeatCount="indefinite"
            begin={reverse ? "1.8s" : "0.3s"}
          />
        </circle>
      )}

      {/* Data burst effect for mastery phase */}
      {currentPhase === 4 && (
        <g className="data-burst">
          {[0, 1, 2].map(index => (
            <circle
              key={index}
              r={1}
              fill={getPhaseColor(4, 'accent')}
              fillOpacity="0.7"
              className="burst-particle"
              style={{ opacity: 0 }}
            >
              <animateMotion
                dur="2s"
                repeatCount="indefinite"
                path={pathData}
                begin={`${index * 0.7}s`}
              />
              <animate
                attributeName="r"
                values="1;3;1"
                dur="2s"
                repeatCount="indefinite"
                begin={`${index * 0.7}s`}
              />
              <animate
                attributeName="opacity"
                values="0;0.7;0"
                dur="2s"
                repeatCount="indefinite"
                begin={`${index * 0.7}s`}
              />
            </circle>
          ))}
        </g>
      )}
    </g>
  );
};