/**
 * Path Generation Utilities - Neural Assembly Engine
 * Algorithms for generating curved connection paths between neural nodes
 */

import { NeuralNode, ConnectionPath } from '../types';

/**
 * Generate a quadratic curve path between two nodes
 */
export const generateConnectionPath = (from: NeuralNode, to: NeuralNode): string => {
  const dx = to.x - from.x;
  const dy = to.y - from.y;
  const distance = Math.sqrt(dx * dx + dy * dy);

  // Calculate curve control points for elegant flow
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

/**
 * Generate all connection paths for a node network
 */
export const generateAllConnections = (nodes: NeuralNode[]): ConnectionPath[] => {
  const connections: ConnectionPath[] = [];
  const nodeMap = new Map(nodes.map(node => [node.id, node]));

  nodes.forEach(node => {
    node.connections.forEach(targetId => {
      const targetNode = nodeMap.get(targetId);
      if (targetNode) {
        const pathData = generateConnectionPath(node, targetNode);
        const pathLength = getPathLength(pathData);
        const midpoint = getPathMidpoint(node, targetNode);

        connections.push({
          id: `${node.id}-${targetId}`,
          fromNode: node.id,
          toNode: targetId,
          pathData,
          length: pathLength,
          midpoint,
          isActive: false // Will be set by animation system
        });
      }
    });
  });

  return connections;
};

/**
 * Calculate the approximate length of a quadratic curve path
 */
export const getPathLength = (pathData: string): number => {
  // Parse quadratic curve path data
  const matches = pathData.match(/M ([\d.]+) ([\d.]+) Q ([\d.]+) ([\d.]+) ([\d.]+) ([\d.]+)/);
  if (matches) {
    const [, x1, y1, cx, cy, x2, y2] = matches.map(Number);

    // Approximate length using two segments
    const d1 = Math.sqrt((cx - x1) ** 2 + (cy - y1) ** 2);
    const d2 = Math.sqrt((x2 - cx) ** 2 + (y2 - cy) ** 2);

    return d1 + d2;
  }
  return 0;
};

/**
 * Calculate the midpoint of a connection path
 */
export const getPathMidpoint = (from: NeuralNode, to: NeuralNode): { x: number; y: number } => {
  return {
    x: (from.x + to.x) / 2,
    y: (from.y + to.y) / 2
  };
};

/**
 * Generate a smooth spline path through multiple points
 */
export const generateSplinePath = (points: Array<{ x: number; y: number }>): string => {
  if (points.length < 2) return '';
  if (points.length === 2) {
    return `M ${points[0].x} ${points[0].y} L ${points[1].x} ${points[1].y}`;
  }

  let path = `M ${points[0].x} ${points[0].y}`;

  for (let i = 1; i < points.length - 1; i++) {
    const prev = points[i - 1];
    const curr = points[i];
    const next = points[i + 1];

    // Calculate control points for smooth curve
    const cp1x = curr.x - (next.x - prev.x) * 0.1;
    const cp1y = curr.y - (next.y - prev.y) * 0.1;
    const cp2x = curr.x + (next.x - prev.x) * 0.1;
    const cp2y = curr.y + (next.y - prev.y) * 0.1;

    path += ` C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${next.x} ${next.y}`;
  }

  return path;
};

/**
 * Generate a curved path that avoids node overlaps
 */
export const generateAvoidingPath = (
  from: NeuralNode,
  to: NeuralNode,
  obstacles: NeuralNode[]
): string => {
  const directPath = generateConnectionPath(from, to);

  // Check if direct path intersects with any obstacles
  const hasIntersection = obstacles.some(obstacle => {
    if (obstacle.id === from.id || obstacle.id === to.id) return false;
    return pathIntersectsNode(directPath, obstacle);
  });

  if (!hasIntersection) {
    return directPath;
  }

  // Generate alternative path with higher curve
  const dx = to.x - from.x;
  const dy = to.y - from.y;
  const distance = Math.sqrt(dx * dx + dy * dy);

  const midX = from.x + dx / 2;
  const midY = from.y + dy / 2;

  // Increase curve factor to avoid obstacles
  const curveFactor = Math.min(distance * 0.4, 100);
  const perpX = -dy / distance * curveFactor;
  const perpY = dx / distance * curveFactor;

  const controlX = midX + perpX;
  const controlY = midY + perpY;

  return `M ${from.x} ${from.y} Q ${controlX} ${controlY} ${to.x} ${to.y}`;
};

/**
 * Check if a path intersects with a node (simplified circle collision)
 */
const pathIntersectsNode = (pathData: string, node: NeuralNode): boolean => {
  const matches = pathData.match(/M ([\d.]+) ([\d.]+) Q ([\d.]+) ([\d.]+) ([\d.]+) ([\d.]+)/);
  if (!matches) return false;

  const [, x1, y1, cx, cy, x2, y2] = matches.map(Number);

  // Check if control point is too close to node
  const distanceToControl = Math.sqrt((cx - node.x) ** 2 + (cy - node.y) ** 2);
  return distanceToControl < node.size / 2 + 20; // 20px buffer
};

/**
 * Generate data flow particles along a path
 */
export const generateParticlePositions = (
  pathData: string,
  particleCount: number
): Array<{ x: number; y: number; angle: number }> => {
  const positions: Array<{ x: number; y: number; angle: number }> = [];

  const matches = pathData.match(/M ([\d.]+) ([\d.]+) Q ([\d.]+) ([\d.]+) ([\d.]+) ([\d.]+)/);
  if (!matches) return positions;

  const [, x1, y1, cx, cy, x2, y2] = matches.map(Number);

  for (let i = 0; i < particleCount; i++) {
    const t = i / (particleCount - 1); // 0 to 1

    // Quadratic Bézier curve calculation
    const x = (1 - t) * (1 - t) * x1 + 2 * (1 - t) * t * cx + t * t * x2;
    const y = (1 - t) * (1 - t) * y1 + 2 * (1 - t) * t * cy + t * t * y2;

    // Calculate tangent angle for particle orientation
    const dx = 2 * (1 - t) * (cx - x1) + 2 * t * (x2 - cx);
    const dy = 2 * (1 - t) * (cy - y1) + 2 * t * (y2 - cy);
    const angle = Math.atan2(dy, dx) * 180 / Math.PI;

    positions.push({ x, y, angle });
  }

  return positions;
};

/**
 * Generate a pulsing connection effect path
 */
export const generatePulsePath = (
  from: NeuralNode,
  to: NeuralNode,
  intensity: number // 0-1
): string => {
  const basePath = generateConnectionPath(from, to);

  if (intensity === 0) return basePath;

  // Add pulsing effect by varying the curve intensity
  const dx = to.x - from.x;
  const dy = to.y - from.y;
  const distance = Math.sqrt(dx * dx + dy * dy);

  const midX = from.x + dx / 2;
  const midY = from.y + dy / 2;

  // Vary curve factor based on pulse intensity
  const baseCurveFactor = Math.min(distance * 0.2, 50);
  const pulseCurveFactor = baseCurveFactor * (1 + intensity * 0.5);

  const perpX = -dy / distance * pulseCurveFactor;
  const perpY = dx / distance * pulseCurveFactor;

  const controlX = midX + perpX;
  const controlY = midY + perpY;

  return `M ${from.x} ${from.y} Q ${controlX} ${controlY} ${to.x} ${to.y}`;
};

/**
 * Calculate optimal connection points on node circumference
 */
export const getNodeConnectionPoint = (
  from: NeuralNode,
  to: NeuralNode
): { fromPoint: { x: number; y: number }, toPoint: { x: number; y: number } } => {
  const dx = to.x - from.x;
  const dy = to.y - from.y;
  const distance = Math.sqrt(dx * dx + dy * dy);

  const fromRadius = from.size / 2;
  const toRadius = to.size / 2;

  // Calculate connection points on node edges
  const fromPoint = {
    x: from.x + (dx / distance) * fromRadius,
    y: from.y + (dy / distance) * fromRadius
  };

  const toPoint = {
    x: to.x - (dx / distance) * toRadius,
    y: to.y - (dy / distance) * toRadius
  };

  return { fromPoint, toPoint };
};