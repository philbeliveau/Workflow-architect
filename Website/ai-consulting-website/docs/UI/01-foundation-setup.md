# 🏗️ Subtask 1: Foundation & Setup

## 📋 Overview
Establish the component architecture, dependencies, and base configuration for the Neural Assembly Engine.

## 🎯 Objectives
- Set up component structure and TypeScript interfaces
- Configure Anime.js v3 integration (current version in project)
- Implement performance monitoring
- Create development tools and utilities

## 📁 File Structure
```
src/components/animations/
├── NeuralAssemblyEngine/
│   ├── index.tsx                 # Main component export
│   ├── NeuralAssemblyEngine.tsx  # Core component
│   ├── components/
│   │   ├── SVGLayer.tsx         # SVG container and defs
│   │   ├── ParticleSystem.tsx   # Code fragment particles
│   │   ├── NeuralNodes.tsx      # AI agent nodes
│   │   ├── ConnectionNetwork.tsx # Neural connections
│   │   └── ControlPanel.tsx     # Dev controls (optional)
│   ├── animations/
│   │   ├── timelineManager.ts   # Main timeline controller
│   │   ├── phases/
│   │   │   ├── chaosPhase.ts    # Phase 1 animations
│   │   │   ├── recognitionPhase.ts # Phase 2 animations
│   │   │   ├── formationPhase.ts   # Phase 3 animations
│   │   │   ├── connectionPhase.ts  # Phase 4 animations
│   │   │   └── masteryPhase.ts     # Phase 5 animations
│   │   └── utils/
│   │       ├── animationUtils.ts   # Reusable helpers
│   │       └── performanceUtils.ts # Optimization tools
│   ├── data/
│   │   ├── nodePositions.ts     # Neural network topology
│   │   ├── codeFragments.ts     # Text content
│   │   └── colorScheme.ts       # Color definitions
│   ├── hooks/
│   │   ├── useAnimation.ts      # Animation control hook
│   │   ├── usePerformance.ts    # Performance monitoring
│   │   └── useResponsive.ts     # Responsive adaptations
│   └── types/
│       └── index.ts             # TypeScript interfaces
```

## 🔧 TypeScript Interfaces

### Core Types
```typescript
// src/components/animations/NeuralAssemblyEngine/types/index.ts

export interface NeuralNode {
  id: string;
  x: number;
  y: number;
  type: 'core' | 'specialist' | 'helper';
  role: string;
  size: number;
  connections: string[];
}

export interface CodeParticle {
  id: string;
  text: string;
  x: number;
  y: number;
  size: number;
  opacity: number;
  rotation: number;
  velocity: { x: number; y: number };
}

export interface AnimationPhase {
  name: string;
  duration: number;
  startTime: number;
  endTime: number;
  active: boolean;
}

export type NodeState = 'chaos' | 'recognition' | 'learning' | 'active' | 'mastery';

export interface AnimationConfig {
  autoplay: boolean;
  loop: boolean;
  speed: number;
  quality: 'low' | 'medium' | 'high';
  reducedMotion: boolean;
}

export interface PerformanceMetrics {
  fps: number;
  memoryUsage: number;
  renderTime: number;
  totalNodes: number;
  totalParticles: number;
}

export interface ResponsiveBreakpoint {
  name: string;
  minWidth: number;
  nodeCount: number;
  particleCount: number;
  animationSpeed: number;
  effects: 'minimal' | 'standard' | 'full';
}
```

### Animation Timeline Types
```typescript
export interface TimelineConfig {
  duration: number;
  autoplay: boolean;
  loop: boolean;
  easing: string;
  onComplete?: () => void;
  onUpdate?: (progress: number) => void;
  onPhaseChange?: (phase: AnimationPhase) => void;
}

export interface AnimationTarget {
  selector: string;
  properties: AnimeAnimParams;
  timing: {
    offset: number;
    delay?: number;
    stagger?: any;
  };
}

// Anime.js v3 compatibility types
export interface AnimeAnimParams {
  [key: string]: any;
  duration?: number;
  delay?: number;
  easing?: string;
  direction?: 'normal' | 'reverse' | 'alternate';
  loop?: boolean | number;
  autoplay?: boolean;
  complete?: () => void;
  update?: (anim: any) => void;
}
```

## 📦 Anime.js v3 Integration

### Animation Utility Class
```typescript
// src/components/animations/NeuralAssemblyEngine/animations/utils/animationUtils.ts
import anime from 'animejs/lib/anime.es.js';

export class AnimeV3Manager {
  private timelines: Map<string, anime.AnimeTimelineInstance> = new Map();
  private animations: Map<string, anime.AnimeInstance> = new Map();

  createTimeline(id: string, config: Partial<anime.AnimeParams> = {}): anime.AnimeTimelineInstance {
    const timeline = anime.timeline({
      autoplay: false,
      loop: false,
      direction: 'normal',
      easing: 'easeOutExpo',
      ...config
    });

    this.timelines.set(id, timeline);
    return timeline;
  }

  addToTimeline(
    timelineId: string,
    targets: string | Element | Element[],
    properties: anime.AnimeParams,
    offset?: string | number
  ): anime.AnimeTimelineInstance | null {
    const timeline = this.timelines.get(timelineId);
    if (!timeline) return null;

    return timeline.add({
      targets,
      ...properties
    }, offset);
  }

  createAnimation(
    id: string,
    targets: string | Element | Element[],
    properties: anime.AnimeParams
  ): anime.AnimeInstance {
    const animation = anime({
      targets,
      autoplay: false,
      ...properties
    });

    this.animations.set(id, animation);
    return animation;
  }

  play(id: string): void {
    const timeline = this.timelines.get(id);
    const animation = this.animations.get(id);

    if (timeline) timeline.play();
    if (animation) animation.play();
  }

  pause(id: string): void {
    const timeline = this.timelines.get(id);
    const animation = this.animations.get(id);

    if (timeline) timeline.pause();
    if (animation) animation.pause();
  }

  seek(id: string, time: number): void {
    const timeline = this.timelines.get(id);
    const animation = this.animations.get(id);

    if (timeline) timeline.seek(time);
    if (animation) animation.seek(time);
  }

  cleanup(): void {
    this.timelines.clear();
    this.animations.clear();
  }

  // Utility functions for common patterns
  stagger(value: number | string, options: any = {}): any {
    return anime.stagger(value, options);
  }

  random(min: number, max: number): number {
    return anime.random(min, max);
  }

  set(targets: string | Element | Element[], properties: object): void {
    anime.set(targets, properties);
  }
}
```

### Performance Monitoring
```typescript
// src/components/animations/NeuralAssemblyEngine/animations/utils/performanceUtils.ts

export class PerformanceMonitor {
  private frameCount = 0;
  private lastTime = performance.now();
  private memoryBaseline = 0;
  private isMonitoring = false;

  startMonitoring(): void {
    this.isMonitoring = true;
    this.memoryBaseline = this.getMemoryUsage();
    this.measureFrameRate();
  }

  stopMonitoring(): void {
    this.isMonitoring = false;
  }

  private measureFrameRate(): void {
    if (!this.isMonitoring) return;

    this.frameCount++;
    const currentTime = performance.now();

    if (currentTime >= this.lastTime + 1000) {
      const fps = Math.round((this.frameCount * 1000) / (currentTime - this.lastTime));

      // Emit FPS update
      window.dispatchEvent(new CustomEvent('neuralFPSUpdate', {
        detail: { fps, timestamp: currentTime }
      }));

      this.frameCount = 0;
      this.lastTime = currentTime;
    }

    requestAnimationFrame(() => this.measureFrameRate());
  }

  private getMemoryUsage(): number {
    // @ts-ignore - performance.memory is not in all browsers
    if (performance.memory) {
      // @ts-ignore
      return performance.memory.usedJSHeapSize / 1024 / 1024; // MB
    }
    return 0;
  }

  getCurrentMetrics(): PerformanceMetrics {
    return {
      fps: this.frameCount,
      memoryUsage: this.getMemoryUsage() - this.memoryBaseline,
      renderTime: performance.now(),
      totalNodes: document.querySelectorAll('.neural-node').length,
      totalParticles: document.querySelectorAll('.code-particle').length
    };
  }

  adaptQuality(fps: number): 'low' | 'medium' | 'high' {
    if (fps < 25) return 'low';
    if (fps < 45) return 'medium';
    return 'high';
  }
}
```

## 🎮 Custom Hooks

### Animation Control Hook
```typescript
// src/components/animations/NeuralAssemblyEngine/hooks/useAnimation.ts
import { useRef, useEffect, useCallback, useState } from 'react';
import { AnimeV3Manager } from '../animations/utils/animationUtils';
import { AnimationConfig, AnimationPhase } from '../types';

export const useAnimation = (config: AnimationConfig) => {
  const animeManager = useRef<AnimeV3Manager | null>(null);
  const [currentPhase, setCurrentPhase] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    animeManager.current = new AnimeV3Manager();
    return () => {
      animeManager.current?.cleanup();
    };
  }, []);

  const play = useCallback(() => {
    if (animeManager.current) {
      animeManager.current.play('main-timeline');
      setIsPlaying(true);
    }
  }, []);

  const pause = useCallback(() => {
    if (animeManager.current) {
      animeManager.current.pause('main-timeline');
      setIsPlaying(false);
    }
  }, []);

  const seek = useCallback((time: number) => {
    if (animeManager.current) {
      animeManager.current.seek('main-timeline', time);
      setProgress(time);
    }
  }, []);

  const reset = useCallback(() => {
    seek(0);
    setCurrentPhase(0);
    setIsPlaying(false);
  }, [seek]);

  return {
    animeManager: animeManager.current,
    currentPhase,
    isPlaying,
    progress,
    controls: {
      play,
      pause,
      seek,
      reset
    }
  };
};
```

### Responsive Hook
```typescript
// src/components/animations/NeuralAssemblyEngine/hooks/useResponsive.ts
import { useState, useEffect } from 'react';
import { ResponsiveBreakpoint } from '../types';

const breakpoints: ResponsiveBreakpoint[] = [
  {
    name: 'mobile',
    minWidth: 0,
    nodeCount: 8,
    particleCount: 25,
    animationSpeed: 1.2,
    effects: 'minimal'
  },
  {
    name: 'tablet',
    minWidth: 768,
    nodeCount: 12,
    particleCount: 35,
    animationSpeed: 1.0,
    effects: 'standard'
  },
  {
    name: 'desktop',
    minWidth: 1024,
    nodeCount: 16,
    particleCount: 50,
    animationSpeed: 0.8,
    effects: 'full'
  }
];

export const useResponsive = () => {
  const [currentBreakpoint, setCurrentBreakpoint] = useState<ResponsiveBreakpoint>(breakpoints[2]);

  useEffect(() => {
    const updateBreakpoint = () => {
      const width = window.innerWidth;
      const breakpoint = breakpoints
        .slice()
        .reverse()
        .find(bp => width >= bp.minWidth) || breakpoints[0];

      setCurrentBreakpoint(breakpoint);
    };

    updateBreakpoint();
    window.addEventListener('resize', updateBreakpoint);
    return () => window.removeEventListener('resize', updateBreakpoint);
  }, []);

  return currentBreakpoint;
};
```

## 🎨 Color System
```typescript
// src/components/animations/NeuralAssemblyEngine/data/colorScheme.ts

export const neuralColors = {
  phases: {
    chaos: {
      primary: '#333333',
      secondary: '#666666',
      accent: '#999999',
      background: 'rgba(51, 51, 51, 0.1)'
    },
    recognition: {
      primary: '#004499',
      secondary: '#0066cc',
      accent: '#3388dd',
      background: 'rgba(0, 102, 204, 0.1)'
    },
    learning: {
      primary: '#0066cc',
      secondary: '#0088ff',
      accent: '#66aaff',
      background: 'rgba(0, 136, 255, 0.1)'
    },
    connection: {
      primary: '#00aa00',
      secondary: '#00ff00',
      accent: '#66ff66',
      background: 'rgba(0, 255, 0, 0.1)'
    },
    mastery: {
      primary: '#ffaa00',
      secondary: '#ffcc00',
      accent: '#ffdd66',
      background: 'rgba(255, 204, 0, 0.1)'
    }
  },
  ui: {
    background: '#f8fafc',
    text: '#000000',
    textSecondary: '#666666',
    border: 'rgba(255, 255, 255, 0.2)',
    glow: 'rgba(255, 255, 255, 0.8)'
  },
  gradients: {
    chaos: 'radial-gradient(circle, rgba(51,51,51,0.8) 0%, rgba(102,102,102,0.2) 100%)',
    learning: 'radial-gradient(circle, rgba(0,136,255,1) 0%, rgba(0,68,153,0.1) 100%)',
    connection: 'radial-gradient(circle, rgba(0,255,0,1) 0%, rgba(0,153,0,0.2) 100%)',
    mastery: 'radial-gradient(circle, rgba(255,170,0,1) 0%, rgba(255,221,102,0.3) 100%)'
  }
};

export const getPhaseColor = (phase: number, element: 'primary' | 'secondary' | 'accent' = 'primary'): string => {
  const phaseNames = ['chaos', 'recognition', 'learning', 'connection', 'mastery'];
  const phaseName = phaseNames[Math.min(phase, phaseNames.length - 1)] as keyof typeof neuralColors.phases;
  return neuralColors.phases[phaseName][element];
};
```

## 🛠️ Development Tools

### Debug Control Panel (Development Only)
```typescript
// src/components/animations/NeuralAssemblyEngine/components/ControlPanel.tsx
import React from 'react';
import { AnimationConfig, PerformanceMetrics } from '../types';

interface ControlPanelProps {
  config: AnimationConfig;
  metrics: PerformanceMetrics;
  onConfigChange: (config: Partial<AnimationConfig>) => void;
  onSeek: (time: number) => void;
  onPlay: () => void;
  onPause: () => void;
  onReset: () => void;
}

export const ControlPanel: React.FC<ControlPanelProps> = ({
  config,
  metrics,
  onConfigChange,
  onSeek,
  onPlay,
  onPause,
  onReset
}) => {
  if (process.env.NODE_ENV !== 'development') return null;

  return (
    <div className="fixed top-4 right-4 bg-black bg-opacity-80 text-white p-4 rounded-lg text-sm font-mono z-50">
      <h3 className="text-lg mb-2">Neural Assembly Debug</h3>

      {/* Performance Metrics */}
      <div className="mb-4">
        <div>FPS: {metrics.fps}</div>
        <div>Memory: {metrics.memoryUsage.toFixed(1)}MB</div>
        <div>Nodes: {metrics.totalNodes}</div>
        <div>Particles: {metrics.totalParticles}</div>
      </div>

      {/* Controls */}
      <div className="flex gap-2 mb-4">
        <button onClick={onPlay} className="px-2 py-1 bg-green-600 rounded">Play</button>
        <button onClick={onPause} className="px-2 py-1 bg-yellow-600 rounded">Pause</button>
        <button onClick={onReset} className="px-2 py-1 bg-red-600 rounded">Reset</button>
      </div>

      {/* Quality Settings */}
      <div className="mb-2">
        <label>Quality:</label>
        <select
          value={config.quality}
          onChange={(e) => onConfigChange({ quality: e.target.value as any })}
          className="ml-2 bg-gray-800 text-white"
        >
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
      </div>

      {/* Speed Control */}
      <div>
        <label>Speed:</label>
        <input
          type="range"
          min="0.1"
          max="2"
          step="0.1"
          value={config.speed}
          onChange={(e) => onConfigChange({ speed: parseFloat(e.target.value) })}
          className="ml-2"
        />
        <span className="ml-2">{config.speed}x</span>
      </div>
    </div>
  );
};
```

## ✅ Deliverables Checklist

- [ ] Component file structure created
- [ ] TypeScript interfaces defined
- [ ] Anime.js v3 manager implemented
- [ ] Performance monitoring setup
- [ ] Custom hooks created
- [ ] Color system established
- [ ] Development tools configured
- [ ] Base component skeleton ready

## 🔗 Next Steps
After completing this subtask, proceed to **Subtask 2: SVG Graphics System** to implement the visual elements and neural network topology.