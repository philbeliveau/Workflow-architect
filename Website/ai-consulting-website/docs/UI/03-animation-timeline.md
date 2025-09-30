# 🎬 Subtask 3: Animation Timeline

## 📋 Overview
Implement the five-phase animation sequence using Anime.js v3, creating a cohesive narrative that demonstrates Newcode's transformation from development chaos to agentic programming mastery.

## 🎯 Objectives
- Create five distinct animation phases with smooth transitions
- Implement Anime.js v3 timeline orchestration
- Design phase-specific visual effects and behaviors
- Ensure optimal performance across devices
- Synchronize multiple animation layers

## 🎪 Five-Phase Animation Structure

### Timeline Overview
```
Phase 1: Chaos (0-2s)           - Traditional development chaos
Phase 2: Recognition (2-4s)     - Discovering agentic programming
Phase 3: Formation (4-7s)       - Neural network assembly
Phase 4: Connection (7-10s)     - Network activation & learning
Phase 5: Mastery (10-12s)       - Complete transformation
```

## 🎭 Main Timeline Manager

### Timeline Controller
```typescript
// src/components/animations/NeuralAssemblyEngine/animations/timelineManager.ts
import anime from 'animejs/lib/anime.es.js';
import { ChaosPhase } from './phases/chaosPhase';
import { RecognitionPhase } from './phases/recognitionPhase';
import { FormationPhase } from './phases/formationPhase';
import { ConnectionPhase } from './phases/connectionPhase';
import { MasteryPhase } from './phases/masteryPhase';

export interface TimelineConfig {
  container: HTMLElement;
  autoplay: boolean;
  loop: boolean;
  speed: number;
  onPhaseChange?: (phase: number) => void;
  onComplete?: () => void;
}

export class NeuralTimelineManager {
  private timeline: anime.AnimeTimelineInstance;
  private phases: Map<string, any> = new Map();
  private config: TimelineConfig;
  private currentPhase = 0;

  constructor(config: TimelineConfig) {
    this.config = config;
    this.initializePhases();
    this.createMainTimeline();
  }

  private initializePhases(): void {
    this.phases.set('chaos', new ChaosPhase(this.config.container));
    this.phases.set('recognition', new RecognitionPhase(this.config.container));
    this.phases.set('formation', new FormationPhase(this.config.container));
    this.phases.set('connection', new ConnectionPhase(this.config.container));
    this.phases.set('mastery', new MasteryPhase(this.config.container));
  }

  private createMainTimeline(): void {
    this.timeline = anime.timeline({
      autoplay: false,
      loop: this.config.loop,
      direction: 'normal',
      easing: 'easeOutExpo',
      complete: () => {
        this.config.onComplete?.();
      },
      update: (anim) => {
        this.updateCurrentPhase(anim.progress);
      }
    });

    this.addPhasesToTimeline();
  }

  private addPhasesToTimeline(): void {
    // Phase 1: Chaos (0-2000ms)
    this.phases.get('chaos')?.addToTimeline(this.timeline, 0);

    // Phase 2: Recognition (2000-4000ms)
    this.phases.get('recognition')?.addToTimeline(this.timeline, 2000);

    // Phase 3: Formation (4000-7000ms)
    this.phases.get('formation')?.addToTimeline(this.timeline, 4000);

    // Phase 4: Connection (7000-10000ms)
    this.phases.get('connection')?.addToTimeline(this.timeline, 7000);

    // Phase 5: Mastery (10000-12000ms)
    this.phases.get('mastery')?.addToTimeline(this.timeline, 10000);
  }

  private updateCurrentPhase(progress: number): void {
    const totalDuration = 12000; // 12 seconds
    const currentTime = (progress / 100) * totalDuration;

    let newPhase = 0;
    if (currentTime >= 10000) newPhase = 4;
    else if (currentTime >= 7000) newPhase = 3;
    else if (currentTime >= 4000) newPhase = 2;
    else if (currentTime >= 2000) newPhase = 1;

    if (newPhase !== this.currentPhase) {
      this.currentPhase = newPhase;
      this.config.onPhaseChange?.(newPhase);
    }
  }

  play(): void {
    this.timeline.play();
  }

  pause(): void {
    this.timeline.pause();
  }

  restart(): void {
    this.timeline.restart();
  }

  seek(time: number): void {
    this.timeline.seek(time);
  }

  setSpeed(speed: number): void {
    // Anime.js v3 doesn't have playbackRate, simulate with duration scaling
    this.config.speed = speed;
    this.timeline.duration = 12000 / speed;
  }

  destroy(): void {
    this.timeline.pause();
    this.phases.clear();
  }

  getCurrentPhase(): number {
    return this.currentPhase;
  }

  getProgress(): number {
    return this.timeline.progress;
  }
}
```

## 🌪️ Phase 1: Chaos (0-2s)

### Chaos Phase Implementation
```typescript
// src/components/animations/NeuralAssemblyEngine/animations/phases/chaosPhase.ts
import anime from 'animejs/lib/anime.es.js';

export class ChaosPhase {
  private container: HTMLElement;

  constructor(container: HTMLElement) {
    this.container = container;
    this.setupInitialState();
  }

  private setupInitialState(): void {
    // Set initial state for all elements
    anime.set('.code-fragment', {
      opacity: 0,
      scale: 0,
      rotate: () => anime.random(-180, 180),
      translateX: () => anime.random(-200, 200),
      translateY: () => anime.random(-200, 200)
    });

    anime.set('.neural-node', {
      opacity: 0,
      scale: 0
    });

    anime.set('.connection-active', {
      strokeDasharray: '0,1000'
    });
  }

  addToTimeline(timeline: anime.AnimeTimelineInstance, offset: number): void {
    // Particles appear in chaos
    timeline.add({
      targets: '.code-fragment',
      opacity: [0, 0.6],
      scale: [0, 1],
      translateX: () => anime.random(-300, 300),
      translateY: () => anime.random(-200, 200),
      rotate: () => anime.random(-360, 360),
      duration: 1000,
      delay: anime.stagger(50, { start: 200 }),
      easing: 'easeOutElastic(1, .8)'
    }, offset);

    // Chaotic movement
    timeline.add({
      targets: '.code-fragment',
      translateX: () => anime.random(-400, 400),
      translateY: () => anime.random(-300, 300),
      rotate: '+=180',
      duration: 1500,
      delay: anime.stagger(30),
      easing: 'easeInOutSine'
    }, offset + 500);

    // Background chaos effect
    timeline.add({
      targets: '.particle-system-layer',
      opacity: [0, 0.8],
      filter: 'blur(1px)',
      duration: 800,
      easing: 'easeOutQuad'
    }, offset + 200);
  }
}
```

## 🔍 Phase 2: Recognition (2-4s)

### Recognition Phase Implementation
```typescript
// src/components/animations/NeuralAssemblyEngine/animations/phases/recognitionPhase.ts
import anime from 'animejs/lib/anime.es.js';

export class RecognitionPhase {
  private container: HTMLElement;

  constructor(container: HTMLElement) {
    this.container = container;
  }

  addToTimeline(timeline: anime.AnimeTimelineInstance, offset: number): void {
    // Particles slow down and organize
    timeline.add({
      targets: '.code-fragment',
      translateX: (el, i) => anime.random(-100, 100),
      translateY: (el, i) => anime.random(-80, 80),
      rotate: 0,
      scale: 1,
      opacity: 0.8,
      duration: 1200,
      delay: anime.stagger(20, { from: 'center' }),
      easing: 'easeOutElastic(1, .5)'
    }, offset);

    // First neural nodes appear
    timeline.add({
      targets: '.neural-node.node-core',
      opacity: [0, 0.6],
      scale: [0, 0.8],
      duration: 800,
      easing: 'easeOutBack(1.7)',
      complete: () => {
        this.addPulseEffect('.node-core');
      }
    }, offset + 600);

    // Subtle gravitational effect toward center
    timeline.add({
      targets: '.code-fragment',
      translateX: (el, i) => {
        const rect = el.getBoundingClientRect();
        const centerX = this.container.offsetWidth / 2;
        const currentX = rect.left + rect.width / 2;
        return (centerX - currentX) * 0.3;
      },
      translateY: (el, i) => {
        const rect = el.getBoundingClientRect();
        const centerY = this.container.offsetHeight / 2;
        const currentY = rect.top + rect.height / 2;
        return (centerY - currentY) * 0.3;
      },
      duration: 1000,
      delay: anime.stagger(15),
      easing: 'easeInOutQuad'
    }, offset + 800);

    // Color shift from gray to blue
    timeline.add({
      targets: '.fragment-bg',
      fill: ['rgba(51, 51, 51, 0.9)', 'rgba(0, 102, 204, 0.8)'],
      duration: 1000,
      easing: 'easeInOutSine'
    }, offset + 1000);
  }

  private addPulseEffect(selector: string): void {
    anime({
      targets: selector,
      scale: [1, 1.1, 1],
      opacity: [0.6, 1, 0.6],
      duration: 2000,
      loop: true,
      easing: 'easeInOutSine'
    });
  }
}
```

## 🧠 Phase 3: Formation (4-7s)

### Formation Phase Implementation
```typescript
// src/components/animations/NeuralAssemblyEngine/animations/phases/formationPhase.ts
import anime from 'animejs/lib/anime.es.js';

export class FormationPhase {
  private container: HTMLElement;

  constructor(container: HTMLElement) {
    this.container = container;
  }

  addToTimeline(timeline: anime.AnimeTimelineInstance, offset: number): void {
    // Neural nodes formation sequence
    this.addNodeFormationSequence(timeline, offset);

    // Particle organization around nodes
    this.addParticleOrganization(timeline, offset + 500);

    // Node activation and labeling
    this.addNodeActivation(timeline, offset + 1500);
  }

  private addNodeFormationSequence(timeline: anime.AnimeTimelineInstance, offset: number): void {
    // Core node full formation
    timeline.add({
      targets: '.neural-node.node-core',
      opacity: [0.6, 1],
      scale: [0.8, 1],
      duration: 600,
      easing: 'easeOutBack(1.7)'
    }, offset);

    // Specialist nodes appear in sequence
    timeline.add({
      targets: '.neural-node.node-specialist',
      opacity: [0, 1],
      scale: [0, 1],
      rotateY: [90, 0],
      duration: 800,
      delay: anime.stagger(200, { from: 'center' }),
      easing: 'easeOutElastic(1, .6)'
    }, offset + 400);

    // Helper nodes appear last
    timeline.add({
      targets: '.neural-node.node-helper',
      opacity: [0, 1],
      scale: [0, 1],
      translateY: [-30, 0],
      duration: 600,
      delay: anime.stagger(100),
      easing: 'easeOutBounce'
    }, offset + 1200);
  }

  private addParticleOrganization(timeline: anime.AnimeTimelineInstance, offset: number): void {
    // Particles move to orbit around nodes
    timeline.add({
      targets: '.code-fragment',
      translateX: (el, i) => {
        const nodeIndex = i % 6; // Distribute among 6 main nodes
        const angle = (i / 8) * Math.PI * 2;
        const radius = 80 + Math.random() * 40;
        return Math.cos(angle) * radius;
      },
      translateY: (el, i) => {
        const nodeIndex = i % 6;
        const angle = (i / 8) * Math.PI * 2;
        const radius = 80 + Math.random() * 40;
        return Math.sin(angle) * radius;
      },
      rotate: 0,
      scale: 0.8,
      opacity: 0.7,
      duration: 1500,
      delay: anime.stagger(30),
      easing: 'easeOutCirc'
    }, offset);

    // Orbital motion
    timeline.add({
      targets: '.code-fragment',
      rotate: '+=360',
      duration: 4000,
      loop: true,
      easing: 'linear'
    }, offset + 1000);
  }

  private addNodeActivation(timeline: anime.AnimeTimelineInstance, offset: number): void {
    // Node labels appear
    timeline.add({
      targets: '.node-label',
      opacity: [0, 1],
      translateY: [10, 0],
      duration: 400,
      delay: anime.stagger(100),
      easing: 'easeOutSine'
    }, offset);

    // Core indicator activation
    timeline.add({
      targets: '.node-core',
      opacity: [0.4, 1],
      scale: [1, 1.2, 1],
      duration: 800,
      easing: 'easeOutElastic(1, .5)'
    }, offset + 200);

    // Pulse rings activation
    timeline.add({
      targets: '.pulse-ring',
      opacity: [0, 0.6, 0],
      scale: [0.8, 1.3],
      duration: 1000,
      delay: anime.stagger(150, { from: 'center' }),
      loop: true,
      easing: 'easeOutSine'
    }, offset + 600);
  }
}
```

## 🔗 Phase 4: Connection (7-10s)

### Connection Phase Implementation
```typescript
// src/components/animations/NeuralAssemblyEngine/animations/phases/connectionPhase.ts
import anime from 'animejs/lib/anime.es.js';

export class ConnectionPhase {
  private container: HTMLElement;

  constructor(container: HTMLElement) {
    this.container = container;
  }

  addToTimeline(timeline: anime.AnimeTimelineInstance, offset: number): void {
    // Connection paths drawing
    this.addConnectionDrawing(timeline, offset);

    // Data flow animation
    this.addDataFlow(timeline, offset + 800);

    // Network synchronization
    this.addNetworkSync(timeline, offset + 1500);
  }

  private addConnectionDrawing(timeline: anime.AnimeTimelineInstance, offset: number): void {
    // Connection paths appear with drawing effect
    timeline.add({
      targets: '.connection-active',
      strokeDasharray: ['0,1000', '1000,0'],
      opacity: [0, 1],
      duration: 1200,
      delay: anime.stagger(150, { from: 'center' }),
      easing: 'easeOutQuart'
    }, offset);

    // Connection glow effect
    timeline.add({
      targets: '.connection-active',
      filter: 'url(#dataTrail)',
      strokeWidth: [1, 3, 2],
      duration: 800,
      delay: anime.stagger(100),
      easing: 'easeInOutSine'
    }, offset + 400);
  }

  private addDataFlow(timeline: anime.AnimeTimelineInstance, offset: number): void {
    // Data particles along connections
    timeline.add({
      targets: '.data-particle',
      opacity: [0, 1],
      scale: [0, 1],
      duration: 300,
      delay: anime.stagger(200),
      easing: 'easeOutBack(1.7)'
    }, offset);

    // Flowing data streams
    timeline.add({
      targets: '.connection-active',
      strokeDasharray: ['20,20', '40,10'],
      duration: 2000,
      loop: true,
      easing: 'linear'
    }, offset + 500);
  }

  private addNetworkSync(timeline: anime.AnimeTimelineInstance, offset: number): void {
    // Synchronized node pulsing
    timeline.add({
      targets: '.neural-node .node-body',
      scale: [1, 1.15, 1],
      opacity: [1, 0.8, 1],
      duration: 1000,
      delay: anime.stagger(200, { from: 'center' }),
      loop: true,
      easing: 'easeInOutSine'
    }, offset);

    // Activity indicators
    timeline.add({
      targets: '.activity-indicator',
      opacity: [0, 1],
      scale: [0, 1, 0],
      duration: 600,
      delay: anime.stagger(100),
      loop: true,
      easing: 'easeInOutSine'
    }, offset + 300);

    // Neural firing effect
    timeline.add({
      targets: '.neural-node',
      filter: 'brightness(1.3)',
      duration: 100,
      delay: (el, i) => i * 300,
      loop: true,
      direction: 'alternate',
      easing: 'easeInOutSine'
    }, offset + 800);
  }
}
```

## 👑 Phase 5: Mastery (10-12s)

### Mastery Phase Implementation
```typescript
// src/components/animations/NeuralAssemblyEngine/animations/phases/masteryPhase.ts
import anime from 'animejs/lib/anime.es.js';

export class MasteryPhase {
  private container: HTMLElement;

  constructor(container: HTMLElement) {
    this.container = container;
  }

  addToTimeline(timeline: anime.AnimeTimelineInstance, offset: number): void {
    // Network harmony and optimization
    this.addNetworkHarmony(timeline, offset);

    // Mastery transformation
    this.addMasteryTransformation(timeline, offset + 600);

    // Final reveal and completion
    this.addFinalReveal(timeline, offset + 1400);
  }

  private addNetworkHarmony(timeline: anime.AnimeTimelineInstance, offset: number): void {
    // Synchronized breathing effect
    timeline.add({
      targets: '.neural-assembly-svg',
      scale: [1, 1.02, 1],
      duration: 2000,
      loop: 2,
      easing: 'easeInOutSine'
    }, offset);

    // Perfect synchronization
    timeline.add({
      targets: '.neural-node .node-body',
      scale: [1, 1.1, 1],
      filter: 'brightness(1.2)',
      duration: 1000,
      delay: 0, // All nodes synchronized
      loop: true,
      easing: 'easeInOutSine'
    }, offset + 200);
  }

  private addMasteryTransformation(timeline: anime.AnimeTimelineInstance, offset: number): void {
    // Golden transformation
    timeline.add({
      targets: '.neural-node .node-body',
      fill: 'url(#masteryGradient)',
      stroke: '#ffaa00',
      strokeWidth: 4,
      duration: 800,
      delay: anime.stagger(100, { from: 'center' }),
      easing: 'easeOutSine'
    }, offset);

    // Particles transform to mastery state
    timeline.add({
      targets: '.code-fragment .fragment-bg',
      fill: 'rgba(255, 170, 0, 0.9)',
      stroke: '#ffcc00',
      duration: 600,
      delay: anime.stagger(20),
      easing: 'easeInOutSine'
    }, offset + 200);

    // 3D rotation reveal
    timeline.add({
      targets: '.neural-assembly-svg',
      rotateY: [0, 360],
      perspective: '1000px',
      duration: 1200,
      easing: 'easeInOutBack(1.7)'
    }, offset + 400);
  }

  private addFinalReveal(timeline: anime.AnimeTimelineInstance, offset: number): void {
    // Success message appears
    timeline.add({
      targets: '.completion-message',
      opacity: [0, 1],
      scale: [0.8, 1],
      translateY: [-20, 0],
      duration: 800,
      easing: 'easeOutBack(1.7)'
    }, offset);

    // Sparkle effects
    timeline.add({
      targets: '.mastery-sparkle',
      opacity: [0, 1, 0],
      scale: [0, 1.5, 0],
      rotate: [0, 180],
      duration: 600,
      delay: anime.stagger(100),
      loop: 2,
      easing: 'easeInOutSine'
    }, offset + 200);

    // Final glow effect
    timeline.add({
      targets: '.neural-assembly-engine',
      boxShadow: '0 0 50px rgba(255, 170, 0, 0.5)',
      duration: 1000,
      easing: 'easeOutSine'
    }, offset + 600);
  }
}
```

## 🎮 Animation Control Interface

### Timeline Control Hook
```typescript
// src/components/animations/NeuralAssemblyEngine/hooks/useTimelineControl.ts
import { useRef, useEffect, useCallback, useState } from 'react';
import { NeuralTimelineManager, TimelineConfig } from '../animations/timelineManager';

export const useTimelineControl = (
  container: HTMLElement | null,
  config: Partial<TimelineConfig> = {}
) => {
  const timelineRef = useRef<NeuralTimelineManager | null>(null);
  const [currentPhase, setCurrentPhase] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (!container) return;

    const fullConfig: TimelineConfig = {
      container,
      autoplay: false,
      loop: false,
      speed: 1,
      onPhaseChange: (phase) => setCurrentPhase(phase),
      onComplete: () => setIsPlaying(false),
      ...config
    };

    timelineRef.current = new NeuralTimelineManager(fullConfig);

    return () => {
      timelineRef.current?.destroy();
    };
  }, [container]);

  const play = useCallback(() => {
    timelineRef.current?.play();
    setIsPlaying(true);
  }, []);

  const pause = useCallback(() => {
    timelineRef.current?.pause();
    setIsPlaying(false);
  }, []);

  const restart = useCallback(() => {
    timelineRef.current?.restart();
    setCurrentPhase(0);
    setProgress(0);
    setIsPlaying(true);
  }, []);

  const seek = useCallback((time: number) => {
    timelineRef.current?.seek(time);
    setProgress((time / 12000) * 100);
  }, []);

  const setSpeed = useCallback((speed: number) => {
    timelineRef.current?.setSpeed(speed);
  }, []);

  return {
    timeline: timelineRef.current,
    currentPhase,
    isPlaying,
    progress,
    controls: {
      play,
      pause,
      restart,
      seek,
      setSpeed
    }
  };
};
```

## 📊 Performance Optimization

### Timeline Performance Utils
```typescript
// src/components/animations/NeuralAssemblyEngine/animations/utils/timelineOptimization.ts

export class TimelineOptimizer {
  private static instance: TimelineOptimizer;
  private performanceLevel: 'low' | 'medium' | 'high' = 'high';

  static getInstance(): TimelineOptimizer {
    if (!TimelineOptimizer.instance) {
      TimelineOptimizer.instance = new TimelineOptimizer();
    }
    return TimelineOptimizer.instance;
  }

  setPerformanceLevel(level: 'low' | 'medium' | 'high'): void {
    this.performanceLevel = level;
  }

  getOptimizedDuration(baseDuration: number): number {
    switch (this.performanceLevel) {
      case 'low': return baseDuration * 0.7; // Faster animations
      case 'medium': return baseDuration * 0.85;
      case 'high': return baseDuration;
      default: return baseDuration;
    }
  }

  getOptimizedStagger(baseStagger: number): number {
    switch (this.performanceLevel) {
      case 'low': return baseStagger * 0.5; // Less staggering
      case 'medium': return baseStagger * 0.75;
      case 'high': return baseStagger;
      default: return baseStagger;
    }
  }

  shouldSkipComplexAnimation(): boolean {
    return this.performanceLevel === 'low';
  }

  getOptimizedEasing(baseEasing: string): string {
    if (this.performanceLevel === 'low') {
      // Use simpler easing functions for better performance
      return baseEasing.includes('Elastic') || baseEasing.includes('Back')
        ? 'easeOutQuad'
        : baseEasing;
    }
    return baseEasing;
  }
}

// Performance monitoring integration
export const withPerformanceOptimization = (
  animationConfig: any,
  optimizer: TimelineOptimizer
) => {
  return {
    ...animationConfig,
    duration: optimizer.getOptimizedDuration(animationConfig.duration || 1000),
    easing: optimizer.getOptimizedEasing(animationConfig.easing || 'easeOutExpo'),
    delay: Array.isArray(animationConfig.delay)
      ? animationConfig.delay
      : optimizer.getOptimizedStagger(animationConfig.delay || 0)
  };
};
```

## ✅ Deliverables Checklist

- [ ] Main timeline manager implemented
- [ ] Five animation phases created and tested
- [ ] Anime.js v3 integration working correctly
- [ ] Phase transitions smooth and cohesive
- [ ] Performance optimizations applied
- [ ] Timeline control hooks functional
- [ ] Animation synchronization verified
- [ ] Error handling and cleanup implemented

## 🔗 Next Steps
After completing this subtask, proceed to **Subtask 4: Interactive Controls** to implement user controls and viewport integration for the Neural Assembly Engine.