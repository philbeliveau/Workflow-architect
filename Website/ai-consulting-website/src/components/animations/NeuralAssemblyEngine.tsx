'use client';

import React, { useEffect, useRef, useState, useCallback } from 'react';
import anime from 'animejs';

export interface NeuralNode {
  id: string;
  x: number;
  y: number;
  type: 'input' | 'hidden' | 'output';
  layer: number;
  isActive: boolean;
  connections: string[];
}

export interface Connection {
  id: string;
  from: string;
  to: string;
  strength: number;
  isActive: boolean;
}

export interface AnimationPhase {
  name: string;
  duration: number;
  delay: number;
  isComplete: boolean;
}

export interface NeuralAssemblyEngineProps {
  width?: number;
  height?: number;
  autoPlay?: boolean;
  showControls?: boolean;
  className?: string;
}

const NeuralAssemblyEngine: React.FC<NeuralAssemblyEngineProps> = ({
  width = 800,
  height = 600,
  autoPlay = true,
  showControls = false,
  className = ''
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  const timelineRef = useRef<anime.AnimeTimelineInstance | null>(null);
  const interactionRef = useRef<anime.AnimeInstance | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [currentPhase, setCurrentPhase] = useState(0);
  const [nodes, setNodes] = useState<NeuralNode[]>([]);
  const [connections, setConnections] = useState<Connection[]>([]);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const phases: AnimationPhase[] = [
    { name: 'Chaos', duration: 2000, delay: 0, isComplete: false },
    { name: 'Recognition', duration: 1500, delay: 500, isComplete: false },
    { name: 'Formation', duration: 2000, delay: 300, isComplete: false },
    { name: 'Connection', duration: 1800, delay: 200, isComplete: false },
    { name: 'Mastery', duration: 2500, delay: 400, isComplete: false }
  ];

  // Brand-aligned neural network colors
  const NEURAL_COLORS = {
    core: 'linear-gradient(135deg, #BCBCBC, #9A9A9A)',
    satellites: [
      'linear-gradient(135deg, #ABABAB, #898989)',
      'linear-gradient(135deg, #9A9A9A, #787878)',
      'linear-gradient(135deg, #BCBCBC, #ABABAB)',
      'linear-gradient(135deg, #898989, #787878)',
      'linear-gradient(135deg, #B0B0B0, #808080)',
      'linear-gradient(135deg, #A0A0A0, #707070)',
      'linear-gradient(135deg, #C0C0C0, #909090)',
      'linear-gradient(135deg, #959595, #757575)'
    ]
  };

  // Generate initial neural network structure
  const generateNetworkStructure = useCallback(() => {
    const newNodes: NeuralNode[] = [];
    const newConnections: Connection[] = [];

    // Input layer (6 nodes)
    for (let i = 0; i < 6; i++) {
      newNodes.push({
        id: `input-${i}`,
        x: 80,
        y: 80 + (i * 80),
        type: 'input',
        layer: 0,
        isActive: false,
        connections: []
      });
    }

    // Hidden layers (3 layers with varying nodes)
    const hiddenLayerSizes = [8, 6, 4];
    hiddenLayerSizes.forEach((size, layerIndex) => {
      const xPos = 240 + (layerIndex * 180);
      for (let i = 0; i < size; i++) {
        const yOffset = (6 - size) * 40; // Center smaller layers
        newNodes.push({
          id: `hidden-${layerIndex}-${i}`,
          x: xPos,
          y: 80 + yOffset + (i * 80),
          type: 'hidden',
          layer: layerIndex + 1,
          isActive: false,
          connections: []
        });
      }
    });

    // Output layer (3 nodes)
    for (let i = 0; i < 3; i++) {
      newNodes.push({
        id: `output-${i}`,
        x: width - 80,
        y: 160 + (i * 120),
        type: 'output',
        layer: 4,
        isActive: false,
        connections: []
      });
    }

    // Generate connections between layers
    newNodes.forEach(node => {
      if (node.layer < 4) {
        const nextLayerNodes = newNodes.filter(n => n.layer === node.layer + 1);
        nextLayerNodes.forEach(targetNode => {
          const connectionId = `${node.id}-${targetNode.id}`;
          newConnections.push({
            id: connectionId,
            from: node.id,
            to: targetNode.id,
            strength: Math.random(),
            isActive: false
          });
          node.connections.push(connectionId);
        });
      }
    });

    setNodes(newNodes);
    setConnections(newConnections);
  }, [width]);

  // Mouse tracking for interactive effects
  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    setMousePos({
      x: ((e.clientX - rect.left) / rect.width - 0.5) * 2,
      y: ((e.clientY - rect.top) / rect.height - 0.5) * 2
    });
  }, []);

  // Initialize network structure
  useEffect(() => {
    generateNetworkStructure();
  }, [generateNetworkStructure]);

  // Intersection Observer for viewport detection
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setIsVisible(true);
          setHasAnimated(true);
          if (autoPlay) {
            startFivePhaseAnimation();
          }
        }
      },
      { threshold: 0.3 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
      containerRef.current.addEventListener('mousemove', handleMouseMove);
    }

    return () => {
      observer.disconnect();
      if (containerRef.current) {
        containerRef.current.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, [hasAnimated, handleMouseMove, autoPlay]);

  const startFivePhaseAnimation = () => {
    if (!svgRef.current) return;

    // Reset animation state
    setCurrentPhase(0);

    // Phase 1: Chaos - Random particle movement
    executePhase1();
  };

  const executePhase1 = () => {
    if (!svgRef.current) return;

    const chaosParticles = svgRef.current.querySelectorAll('.chaos-particle');

    anime({
      targets: chaosParticles,
      translateX: () => anime.random(-100, 100),
      translateY: () => anime.random(-50, 50),
      scale: [0, 1, 0.8],
      opacity: [0, 1, 0.7],
      duration: phases[0].duration,
      delay: anime.stagger(100),
      easing: 'easeOutElastic(1, .8)',
      complete: () => {
        setCurrentPhase(1);
        setTimeout(executePhase2, phases[1].delay);
      }
    });
  };

  const executePhase2 = () => {
    if (!svgRef.current) return;

    const inputNodes = svgRef.current.querySelectorAll('.input-node');

    anime({
      targets: inputNodes,
      scale: [0.8, 1.2, 1],
      fill: ['#64748b', '#3b82f6'],
      duration: phases[1].duration,
      delay: anime.stagger(150),
      easing: 'easeInOutQuad',
      complete: () => {
        setCurrentPhase(2);
        setTimeout(executePhase3, phases[2].delay);
      }
    });
  };

  const executePhase3 = () => {
    if (!svgRef.current) return;

    const hiddenNodes = svgRef.current.querySelectorAll('.hidden-node');

    anime({
      targets: hiddenNodes,
      scale: [0, 1],
      fill: ['#64748b', '#10b981'],
      duration: phases[2].duration,
      delay: anime.stagger(80),
      easing: 'easeOutBack',
      complete: () => {
        setCurrentPhase(3);
        setTimeout(executePhase4, phases[3].delay);
      }
    });
  };

  const executePhase4 = () => {
    if (!svgRef.current) return;

    const connections = svgRef.current.querySelectorAll('.connection-line');

    anime({
      targets: connections,
      strokeDashoffset: [anime.setDashoffset, 0],
      opacity: [0, 1],
      stroke: ['#64748b', '#8b5cf6'],
      duration: phases[3].duration,
      delay: anime.stagger(50),
      easing: 'easeInOutSine',
      complete: () => {
        setCurrentPhase(4);
        setTimeout(executePhase5, phases[4].delay);
      }
    });
  };

  const executePhase5 = () => {
    if (!svgRef.current) return;

    const outputNodes = svgRef.current.querySelectorAll('.output-node');
    const allElements = svgRef.current.querySelectorAll('.neural-element');

    // Output nodes activation
    anime({
      targets: outputNodes,
      scale: [0, 1.3, 1],
      fill: ['#64748b', '#f59e0b'],
      duration: 1000,
      delay: anime.stagger(200),
      easing: 'easeOutBounce'
    });

    // Final harmonization
    anime({
      targets: allElements,
      opacity: [0.7, 1],
      filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.1))',
      duration: 1500,
      delay: 1000,
      easing: 'easeInOutQuad',
      complete: () => {
        console.log('Neural Assembly Engine animation complete');
      }
    });
  };

  // Interactive magnetic effects
  useEffect(() => {
    if (!isVisible || !containerRef.current) return;

    const satellites = containerRef.current.querySelectorAll('.neural-satellite');
    const connections = containerRef.current.querySelectorAll('.neural-connection');

    if (interactionRef.current) interactionRef.current.pause();

    interactionRef.current = anime({
      targets: satellites,
      translateX: (el, i) => {
        const baseX = parseFloat(el.getAttribute('data-base-x') || '0');
        return baseX + (mousePos.x * 15 * (1 - i * 0.1));
      },
      translateY: (el, i) => {
        const baseY = parseFloat(el.getAttribute('data-base-y') || '0');
        return baseY + (mousePos.y * 12 * (1 - i * 0.1));
      },
      duration: 800,
      easing: 'easeOutQuart'
    });

    // Update connection opacity based on mouse proximity
    connections.forEach((connection, i) => {
      const intensity = Math.max(0.2, 0.6 - Math.abs(mousePos.x) * 0.3 - Math.abs(mousePos.y) * 0.3);
      (connection as HTMLElement).style.opacity = intensity.toString();
    });

  }, [mousePos, isVisible]);

  useEffect(() => {
    if (!isVisible || !containerRef.current) return;

    const core = containerRef.current.querySelector('.neural-core');
    const satellites = containerRef.current.querySelectorAll('.neural-satellite');
    const connections = containerRef.current.querySelectorAll('.neural-connection');

    // Store base positions for interactive effects
    satellites.forEach((satellite, i) => {
      const angle = (i / satellites.length) * 2 * Math.PI;
      const radius = 120 + (i % 3) * 30;
      const x = Math.cos(angle) * radius;
      const y = Math.sin(angle) * radius;
      satellite.setAttribute('data-base-x', x.toString());
      satellite.setAttribute('data-base-y', y.toString());
    });

    // Create sophisticated timeline animation
    timelineRef.current = anime.timeline({
      autoplay: true,
      easing: 'easeOutElastic(1, .8)'
    });

    // Stage 1: Genesis - Core materializes
    timelineRef.current.add({
      targets: core,
      scale: [0, 1],
      opacity: [0, 1],
      rotate: '1turn',
      duration: 1200,
      easing: 'easeOutBack(1.7)'
    });

    // Stage 2: Neural pathways emerge
    timelineRef.current.add({
      targets: connections,
      strokeDashoffset: [1000, 0],
      opacity: [0, 0.4],
      duration: 1500,
      delay: anime.stagger(150),
      easing: 'easeOutQuart'
    }, '-=800');

    // Stage 3: Satellites assemble with staggered orbital entry
    timelineRef.current.add({
      targets: satellites,
      scale: [0, 1],
      opacity: [0, 1],
      translateX: (el, i) => {
        const angle = (i / satellites.length) * 2 * Math.PI;
        const radius = 120 + (i % 3) * 30;
        return Math.cos(angle) * radius;
      },
      translateY: (el, i) => {
        const angle = (i / satellites.length) * 2 * Math.PI;
        const radius = 120 + (i % 3) * 30;
        return Math.sin(angle) * radius;
      },
      rotate: () => anime.random(-180, 180),
      duration: 1000,
      delay: anime.stagger(200, { from: 'center' }),
      easing: 'easeOutElastic(1, .6)'
    }, '-=1000');

    // Stage 4: Equilibrium - Continuous breathing motion
    timelineRef.current.add({
      targets: core,
      scale: [1, 1.05, 1],
      duration: 2000,
      loop: true,
      direction: 'alternate',
      easing: 'easeInOutSine'
    }, '+=500');

    timelineRef.current.add({
      targets: satellites,
      rotate: (el, i) => `+=${360 + i * 45}`,
      duration: 20000,
      loop: true,
      easing: 'linear'
    }, '-=1500');

    return () => {
      if (timelineRef.current) timelineRef.current.pause();
      if (interactionRef.current) interactionRef.current.pause();
    };
  }, [isVisible]);

  return (
    <div
      ref={containerRef}
      className={`neural-assembly-engine relative ${className}`}
      style={{ width: `${width}px`, height: `${height}px` }}
    >
      <svg
        ref={svgRef}
        width="100%"
        height="100%"
        viewBox={`0 0 ${width} ${height}`}
        className="overflow-visible"
      >
        {/* Background grid for context */}
        <defs>
          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#f1f5f9" strokeWidth="1" opacity="0.3"/>
          </pattern>
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />

        {/* Chaos particles for Phase 1 */}
        {Array.from({ length: 20 }, (_, i) => (
          <circle
            key={`chaos-${i}`}
            className="chaos-particle neural-element"
            cx={anime.random(50, width - 50)}
            cy={anime.random(50, height - 50)}
            r="3"
            fill="#64748b"
            opacity="0"
          />
        ))}

        {/* Neural network connections */}
        {connections.map(connection => {
          const fromNode = nodes.find(n => n.id === connection.from);
          const toNode = nodes.find(n => n.id === connection.to);

          if (!fromNode || !toNode) return null;

          return (
            <line
              key={connection.id}
              className="connection-line neural-element"
              x1={fromNode.x}
              y1={fromNode.y}
              x2={toNode.x}
              y2={toNode.y}
              stroke="#64748b"
              strokeWidth="2"
              strokeDasharray="5,5"
              opacity="0"
              filter="url(#glow)"
            />
          );
        })}

        {/* Neural network nodes */}
        {nodes.map(node => (
          <circle
            key={node.id}
            className={`${node.type}-node neural-element`}
            cx={node.x}
            cy={node.y}
            r={node.type === 'output' ? '12' : node.type === 'hidden' ? '8' : '10'}
            fill="#64748b"
            stroke="#ffffff"
            strokeWidth="2"
            opacity="0.8"
          />
        ))}

        {/* Phase indicator */}
        <text
          x="20"
          y="30"
          className="phase-indicator"
          fill="#374151"
          fontSize="14"
          fontFamily="Inter, sans-serif"
          fontWeight="500"
        >
          Phase: {phases[currentPhase]?.name || 'Ready'}
        </text>
      </svg>

      {/* Control panel (if enabled) */}
      {showControls && (
        <div className="absolute bottom-4 left-4 flex gap-2">
          <button
            onClick={startFivePhaseAnimation}
            className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 text-sm"
          >
            Start
          </button>
          <button
            onClick={() => timelineRef.current?.pause()}
            className="px-3 py-1 bg-yellow-500 text-white rounded hover:bg-yellow-600 text-sm"
          >
            Pause
          </button>
          <button
            onClick={() => timelineRef.current?.play()}
            className="px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600 text-sm"
          >
            Resume
          </button>
          <button
            onClick={() => {
              setCurrentPhase(0);
              setHasAnimated(false);
              if (autoPlay) startFivePhaseAnimation();
            }}
            className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 text-sm"
          >
            Reset
          </button>
        </div>
      )}
    </div>
  );
};

export default NeuralAssemblyEngine;