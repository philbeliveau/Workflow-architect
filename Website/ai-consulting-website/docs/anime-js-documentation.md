# 🎨 Anime.js Documentation for Neural Assembly Engine

## Table of Contents
1. [Overview](#overview)
2. [Timeline Orchestration](#timeline-orchestration)
3. [SVG Path Animation](#svg-path-animation)
4. [Staggered Animations](#staggered-animations)
5. [3D Transforms & Perspective](#3d-transforms--perspective)
6. [Color Transitions](#color-transitions)
7. [Performance Optimization](#performance-optimization)
8. [Easing Functions](#easing-functions)
9. [Implementation Examples](#implementation-examples)

---

## Overview

**Anime.js v4** is our animation engine for the Neural Assembly Engine. Key changes from v3:
- `targets` parameter moved to first argument: `animate('selector', { properties })`
- `easing` renamed to `ease`
- `direction` split into `reversed` and `alternate`
- `value` in keyframes replaced with `to`
- Utility functions moved to `utils` namespace

**Core Imports for Neural Assembly Engine:**
```javascript
import {
  animate,
  createTimeline,
  utils,
  stagger,
  svg
} from 'animejs';
```

---

## Timeline Orchestration

### Basic Timeline Creation
```javascript
const neuralTimeline = createTimeline({
  autoplay: false,
  alternate: true,
  loop: 1,
  defaults: {
    ease: 'outElastic(1, .5)',
    duration: 1000
  }
});
```

### Timeline Methods
- `.add(targets, properties, timeOffset)` - Add animation to timeline
- `.init()` - Initialize timeline (required before play)
- `.play()` - Start timeline
- `.pause()` - Pause timeline
- `.seek(time)` - Jump to specific time

### Time Offset Patterns
```javascript
timeline
  .add('.neural-node', { scale: [0, 1] }, 0)           // Start at 0ms
  .add('.connection', { opacity: [0, 1] }, 500)        // Start at 500ms
  .add('.data-flow', { x: [0, 100] }, '-=200')         // Start 200ms before previous
  .add('.activation', { backgroundColor: '#00ff00' }, '+=100') // Start 100ms after previous
```

### Complex Timeline Example
```javascript
const logoTimeline = createTimeline({
  autoplay: false,
  alternate: true,
  loop: 1,
  defaults: { ease: 'outElastic(1, .5)' }
})
.add('.neural-core', {
  scale: [{ to: [0, 1], duration: 200, ease: 'outBack' }],
  translateX: [
    { to: -600, duration: 520, delay: 200, ease: 'inQuart' },
    { to: [-100, 0], duration: 500, delay: 1000, ease: 'outQuart' }
  ]
}, 0)
.add('.synapse-line', {
  opacity: { to: 1, duration: 100 },
  strokeDashoffset: {
    draw: ['0 1', '1 1'],
    duration: 1200,
    delay: stagger(100, { start: 500 }),
    ease: 'inQuart'
  }
}, 2000);
```

---

## SVG Path Animation

### Path Drawing Animation
```javascript
// Create drawable SVG paths
const drawablePaths = svg.createDrawable('.neural-path');

// Animate path drawing
timeline.add(drawablePaths, {
  strokeDashoffset: {
    draw: '0 1',        // Draw from 0% to 100%
    duration: 600,
    ease: 'outQuart'
  },
  stroke: {
    to: ['#FFF', '#00ff00'],  // Color transition during draw
    duration: 350,
    ease: 'inQuad'
  },
  delay: stagger(100, { start: 700 })
});
```

### Path Morphing
```javascript
// Morph path shape using data attributes
animate('.morphing-path', {
  d: el => el.dataset.targetShape,  // Morph to target shape
  duration: 1200,
  ease: 'outCirc'
});
```

### Advanced Path Animation
```javascript
timeline.add(svg.createDrawable('.connection-lines'), {
  strokeDashoffset: {
    draw: ['0 1', '1 1'],  // Complete draw then undraw
    duration: 1200,
    delay: stagger(100, { start: 500 }),
    ease: 'inQuart'
  },
  strokeWidth: {
    to: [0, 2],
    delay: stagger(100),
    duration: 200,
    ease: 'linear'
  },
  stroke: {
    from: '#FFF',
    duration: 800,
    delay: 400,
    ease: 'inQuad'
  }
}, 2000);
```

---

## Staggered Animations

### Basic Stagger
```javascript
animate('.neural-nodes', {
  scale: [0, 1],
  opacity: [0, 1],
  delay: stagger(100)  // 100ms delay between each element
});
```

### Grid-Based Stagger
```javascript
animate('.grid-nodes', {
  scale: stagger([2.5, 1], {
    from: 'center',
    grid: [8, 8]
  }),
  translateX: stagger([-100, 100]),
  delay: stagger(10, { from: 'center' })
});
```

### Advanced Stagger Options
```javascript
// Direction and origin control
const staggerOptions = {
  from: 'center',     // 'first', 'last', 'center', or index number
  reversed: true,     // Reverse the stagger direction
  grid: [12, 8],     // Grid dimensions for 2D stagger
  axis: 'x',         // Stagger along x or y axis
  ease: 'outQuad'    // Easing for stagger timing
};

animate('.complex-grid', {
  translateY: stagger(['2rem', '-2rem'], {
    from: 'center',
    ease: 'outQuad'
  }),
  color: '#F64E4D',
  delay: stagger([0, 600], {
    from: 'center',
    ease: 'outExpo'
  })
});
```

### Stagger Patterns for Neural Networks
```javascript
// Radial activation pattern
animate('.neural-layer-1', {
  scale: stagger([0, 1.2, 1], { from: 'center' }),
  backgroundColor: stagger(['#333', '#00ff00'], { from: 'center' }),
  delay: stagger(50, { from: 'center' })
});

// Wave propagation
animate('.data-particles', {
  translateX: stagger('200px', { from: 'first' }),
  opacity: stagger([0, 1, 0], { from: 'first' }),
  delay: stagger(25, { from: 'first' })
});
```

---

## 3D Transforms & Perspective

### Setting Up 3D Context
```css
.neural-container {
  perspective: 1000px;
  perspective-origin: 50% 50%;
  transform-style: preserve-3d;
}

.neural-element {
  transform-style: preserve-3d;
  transform-origin: 50% 50% 0px;
  will-change: transform;
}
```

### 3D Animation Properties
```javascript
animate('.neural-cube', {
  rotateX: '360deg',
  rotateY: '180deg',
  rotateZ: '90deg',
  translateZ: '100px',
  scale: [1, 1.5, 1],
  transformOrigin: '50% 50% 0px'
});
```

### Complex 3D Assembly Animation
```javascript
timeline
.add('.neural-layer', {
  rotateX: [
    { to: 90, duration: 300, ease: 'outQuad' },
    { to: 0, duration: 800, ease: 'outElastic(1, .5)' }
  ],
  translateZ: [
    { to: 200, duration: 600, ease: 'outQuart' },
    { to: 0, duration: 600, ease: 'outSine', delay: 100 }
  ],
  scale: [
    { to: 1.2, duration: 300, ease: 'outQuad' },
    { to: 1, duration: 1000, ease: 'outBounce' }
  ],
  delay: stagger(60, { from: 'center' })
})
.add('.connection-3d', {
  scaleY: [
    { to: [0, 1.5], duration: 150, ease: 'inSine' },
    { to: 1, duration: 150, ease: 'outExpo' }
  ],
  transformOrigin: '50% 100% 0'
});
```

### 3D Card Flip Effect
```javascript
animate('.info-card', {
  rotateY: '180deg',
  duration: 800,
  ease: 'outQuart',
  complete: () => {
    // Swap content
    animate('.card-back', { opacity: 1 });
  }
});
```

---

## Color Transitions

### Basic Color Animation
```javascript
animate('.neural-node', {
  backgroundColor: ['#333333', '#00ff00'],
  color: ['#ffffff', '#000000'],
  duration: 1000,
  ease: 'inOut'
});
```

### SVG Color Animation
```javascript
animate('.svg-path', {
  fill: ['#FF0000', '#00FF00'],
  stroke: ['#0000FF', '#FFFF00'],
  duration: 2000,
  ease: 'outSine'
});
```

### Color Sequences for Learning States
```javascript
// Neural learning color progression
const learningColors = [
  '#333333',  // Inactive
  '#ffaa00',  // Processing
  '#00ff00',  // Learned
  '#0088ff'   // Connected
];

animate('.learning-node', {
  backgroundColor: learningColors,
  duration: 3000,
  ease: 'linear',
  loop: true
});
```

### Gradient Animation via CSS Variables
```javascript
// Animate CSS custom properties for gradients
animate(':root', {
  '--gradient-start': ['#ff0000', '#00ff00'],
  '--gradient-end': ['#0000ff', '#ffff00'],
  duration: 2000
});
```

---

## Performance Optimization

### CSS Optimization
```css
.animated-element {
  will-change: transform, opacity;
  transform: translateZ(0); /* Force hardware acceleration */
  backface-visibility: hidden;
}

/* For 3D animations */
.transform-3d {
  transform-style: preserve-3d;
  perspective: 1000px;
}
```

### JavaScript Optimization
```javascript
// Use transform properties for better performance
animate('.element', {
  translateX: 100,     // Better than 'left'
  translateY: 50,      // Better than 'top'
  scale: 1.5,          // Better than 'width/height'
  rotate: '45deg'      // Hardware accelerated
});

// Batch DOM operations
const elements = document.querySelectorAll('.neural-node');
utils.set(elements, {
  opacity: 0,
  scale: 0
});
```

### Memory Management
```javascript
// Clean up completed animations
let animation = animate('.element', {
  opacity: [0, 1],
  complete: () => {
    animation = null; // Allow garbage collection
  }
});

// Use object pooling for many elements
const nodePool = [];
function createNode() {
  return nodePool.pop() || document.createElement('div');
}
```

### Timeline Optimization
```javascript
// Pre-initialize timeline for better performance
const optimizedTimeline = createTimeline({
  defaults: {
    ease: 'outQuart'
  }
})
.add('.batch-1', { scale: [0, 1] }, 0)
.add('.batch-2', { opacity: [0, 1] }, 200)
.add('.batch-3', { translateY: [-50, 0] }, 400)
.init(); // Initialize once, play multiple times
```

---

## Easing Functions

### Available Easing Functions (v4 syntax)
```javascript
// Basic easings (no 'ease' prefix in v4)
'linear'
'inQuad', 'outQuad', 'inOutQuad'
'inCubic', 'outCubic', 'inOutCubic'
'inQuart', 'outQuart', 'inOutQuart'
'inQuint', 'outQuint', 'inOutQuint'
'inSine', 'outSine', 'inOutSine'
'inExpo', 'outExpo', 'inOutExpo'
'inCirc', 'outCirc', 'inOutCirc'
'inBack', 'outBack', 'inOutBack'
'inElastic', 'outElastic', 'inOutElastic'
'inBounce', 'outBounce', 'inOutBounce'
```

### Custom Easing Functions
```javascript
// Custom cubic bezier
animate('.element', {
  translateX: 100,
  ease: 'cubicBezier(0.400, 0.530, 0.070, 1)'
});

// Custom function
animate('.element', {
  scale: [0, 1],
  ease: t => 1 - Math.sqrt(1 - t * t) // Custom circular ease
});
```

### Easing for Neural Networks
```javascript
// Organic, neural-like easing
const neuralEasing = 'outElastic(1, .5)';
const learningEasing = 'outCirc';
const connectionEasing = 'inOutQuart';

// Processing wave easing
const processingEasing = t => Math.sin(t * Math.PI * 3) * Math.exp(-t * 2);
```

---

## Implementation Examples

### Complete Neural Assembly Animation
```javascript
import { animate, createTimeline, utils, stagger, svg } from 'animejs';

class NeuralAssemblyEngine {
  constructor(container) {
    this.container = container;
    this.timeline = null;
    this.init();
  }

  init() {
    this.createTimeline();
    this.setupEventListeners();
  }

  createTimeline() {
    this.timeline = createTimeline({
      autoplay: false,
      loop: false,
      defaults: {
        ease: 'outElastic(1, .5)',
        duration: 1000
      }
    })

    // Phase 1: Chaos (scattered elements)
    .add('.code-fragment', {
      translateX: () => utils.random(-200, 200),
      translateY: () => utils.random(-200, 200),
      rotate: () => utils.random(-180, 180),
      opacity: [0, 0.3],
      scale: () => utils.random(0.5, 1.5),
      delay: stagger(50, { from: 'center' })
    }, 0)

    // Phase 2: Organization (neural network formation)
    .add('.neural-node', {
      scale: [0, 1],
      opacity: [0, 1],
      backgroundColor: ['#333333', '#00ff00'],
      delay: stagger(100, {
        grid: [6, 4],
        from: 'center'
      })
    }, 1000)

    // Phase 3: Connection (synapses forming)
    .add(svg.createDrawable('.synapse-path'), {
      strokeDashoffset: {
        draw: '0 1',
        duration: 800,
        ease: 'outQuart'
      },
      stroke: {
        to: ['#ffffff', '#00aaff'],
        duration: 600
      },
      delay: stagger(80, { from: 'first' })
    }, 1500)

    // Phase 4: Activation (neural firing)
    .add('.neural-pulse', {
      scale: [0, 2, 0],
      opacity: [0, 1, 0],
      backgroundColor: ['#00ff00', '#ffff00', '#00ff00'],
      duration: 600,
      delay: stagger(40, { from: 'center' })
    }, 2500)

    // Phase 5: Assembly Complete (final state)
    .add('.assembly-complete', {
      rotateY: '360deg',
      scale: [1, 1.1, 1],
      filter: 'brightness(1.2)',
      duration: 1200,
      ease: 'outBack'
    }, 3500)

    .init();
  }

  play() {
    this.timeline.play();
  }

  pause() {
    this.timeline.pause();
  }

  reset() {
    this.timeline.seek(0);
  }
}

export default NeuralAssemblyEngine;
```

### Utility Functions for Neural Animation
```javascript
// Utility class for neural network animations
class NeuralAnimationUtils {
  static createPulseEffect(selector, color = '#00ff00') {
    return animate(selector, {
      scale: [1, 1.3, 1],
      backgroundColor: ['transparent', color, 'transparent'],
      duration: 800,
      ease: 'outSine',
      loop: true
    });
  }

  static createDataFlow(pathSelector, duration = 2000) {
    return animate(pathSelector, {
      strokeDasharray: ['0 100', '50 50', '100 0'],
      duration: duration,
      ease: 'linear',
      loop: true
    });
  }

  static createLearningIndicator(selector) {
    const colors = ['#333', '#ff6600', '#ffaa00', '#00ff00'];
    return animate(selector, {
      backgroundColor: colors,
      duration: 3000,
      ease: 'steps(4)',
      loop: true
    });
  }

  static createNetworkFormation(nodeSelector, connectionSelector) {
    const timeline = createTimeline();

    timeline
      .add(nodeSelector, {
        scale: [0, 1],
        opacity: [0, 1],
        delay: stagger(150, { from: 'center' })
      })
      .add(connectionSelector, {
        strokeDashoffset: { draw: '0 1' },
        opacity: [0, 1],
        delay: stagger(100, { from: 'first' })
      }, '-=500');

    return timeline.init();
  }
}
```

---

## Performance Checklist

### ✅ DO
- Use `transform` properties over `left/top/width/height`
- Add `will-change: transform` to animated elements
- Use `translate3d()` to force hardware acceleration
- Batch DOM reads and writes
- Initialize timelines with `.init()` before playing
- Use `utils.set()` for bulk property setting

### ❌ DON'T
- Animate layout properties (`width`, `height`, `margin`, `padding`)
- Create new timelines in render loops
- Animate too many elements simultaneously (>50)
- Use complex easing functions on mobile devices
- Forget to clean up animation references

---

This documentation provides the complete foundation for building the Neural Assembly Engine animation with Anime.js v4.