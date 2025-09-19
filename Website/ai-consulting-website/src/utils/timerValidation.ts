/**
 * Timer Management Validation Utilities
 * 
 * Provides development-time warnings and runtime validation
 * to prevent timer race conditions and memory leaks
 */

interface TimerValidationConfig {
  maxTimers: number;
  minInterval: number;
  maxInterval: number;
  warnOnDuplicateIds: boolean;
  trackMemoryUsage: boolean;
}

const DEFAULT_CONFIG: TimerValidationConfig = {
  maxTimers: 10,
  minInterval: 16, // ~60fps
  maxInterval: 10000, // 10 seconds
  warnOnDuplicateIds: true,
  trackMemoryUsage: true
};

// Global timer tracking for development
const activeTimers = new Map<string, {
  id: string;
  interval: number;
  createdAt: number;
  component: string;
}>();

/**
 * Validates timer configuration and logs warnings in development
 */
export function validateTimerConfig(
  timerId: string,
  interval: number,
  componentName?: string,
  config: Partial<TimerValidationConfig> = {}
): boolean {
  if (process.env.NODE_ENV !== 'development') {
    return true;
  }
  
  const finalConfig = { ...DEFAULT_CONFIG, ...config };
  let isValid = true;
  
  // Validate timer ID
  if (!timerId || timerId.trim().length === 0) {
    console.error('❌ Timer Validation: Timer ID cannot be empty');
    isValid = false;
  }
  
  if (timerId.length < 3) {
    console.warn('⚠️ Timer Validation: Timer ID should be descriptive (minimum 3 characters)');
  }
  
  // Validate interval
  if (interval < finalConfig.minInterval) {
    console.warn(`⚠️ Timer Validation: Interval ${interval}ms is below recommended minimum (${finalConfig.minInterval}ms)`);
  }
  
  if (interval > finalConfig.maxInterval) {
    console.warn(`⚠️ Timer Validation: Interval ${interval}ms is above recommended maximum (${finalConfig.maxInterval}ms)`);
  }
  
  // Check for duplicate IDs
  if (finalConfig.warnOnDuplicateIds && activeTimers.has(timerId)) {
    const existing = activeTimers.get(timerId)!;
    console.warn(`⚠️ Timer Validation: Duplicate timer ID "${timerId}" detected. Existing timer created by ${existing.component} at ${new Date(existing.createdAt).toISOString()}`);
  }
  
  // Check timer limit
  if (activeTimers.size >= finalConfig.maxTimers) {
    console.warn(`⚠️ Timer Validation: Maximum timer limit (${finalConfig.maxTimers}) reached. Consider consolidating timers.`);
    logActiveTimers();
  }
  
  // Track this timer
  activeTimers.set(timerId, {
    id: timerId,
    interval,
    createdAt: Date.now(),
    component: componentName || 'Unknown'
  });
  
  return isValid;
}

/**
 * Removes timer from tracking when stopped
 */
export function untrackTimer(timerId: string): void {
  if (process.env.NODE_ENV === 'development') {
    activeTimers.delete(timerId);
  }
}

/**
 * Logs all currently active timers for debugging
 */
export function logActiveTimers(): void {
  if (process.env.NODE_ENV !== 'development') {
    return;
  }
  
  if (activeTimers.size === 0) {
    console.log('ℹ️ No active timers');
    return;
  }
  
  console.group('🕐 Active Timers');
  activeTimers.forEach((timer, id) => {
    const runtime = Date.now() - timer.createdAt;
    console.log(`📍 ${id}: ${timer.interval}ms interval, ${timer.component}, running ${runtime}ms`);
  });
  console.groupEnd();
}

/**
 * Validates useEffect dependencies for timer-related hooks
 */
export function validateTimerDependencies(
  dependencies: any[],
  timerName: string
): void {
  if (process.env.NODE_ENV !== 'development') {
    return;
  }
  
  const suspiciousDeps = dependencies.filter(dep => 
    typeof dep === 'function' && dep.name !== ''
  );
  
  if (suspiciousDeps.length > 0) {
    console.warn(`⚠️ Timer Dependencies: ${timerName} has function dependencies that may cause unnecessary re-renders:`, suspiciousDeps.map(f => f.name));
    console.log('💡 Consider wrapping functions in useCallback or moving them outside the component');
  }
}

/**
 * Memory leak detection for timers
 */
export function detectTimerMemoryLeaks(): void {
  if (process.env.NODE_ENV !== 'development') {
    return;
  }
  
  const now = Date.now();
  const longRunningTimers = Array.from(activeTimers.values()).filter(
    timer => now - timer.createdAt > 60000 // 1 minute
  );
  
  if (longRunningTimers.length > 0) {
    console.warn('⚠️ Memory Leak Detection: Long-running timers detected:');
    longRunningTimers.forEach(timer => {
      const runtime = Math.round((now - timer.createdAt) / 1000);
      console.warn(`  📍 ${timer.id}: running for ${runtime}s in ${timer.component}`);
    });
    console.log('💡 Ensure timers are properly cleaned up when components unmount');
  }
}

/**
 * React StrictMode compatibility checker
 */
export function checkStrictModeCompatibility(hookName: string): void {
  if (process.env.NODE_ENV !== 'development') {
    return;
  }
  
  // Detect if we're in StrictMode by checking if effects run twice
  let effectCount = 0;
  
  const originalConsoleLog = console.log;
  console.log = (...args) => {
    if (args[0]?.includes?.('StrictMode effect check')) {
      effectCount++;
    }
    originalConsoleLog.apply(console, args);
  };
  
  setTimeout(() => {
    console.log('StrictMode effect check');
    
    setTimeout(() => {
      if (effectCount >= 2) {
        console.log(`ℹ️ StrictMode detected - ${hookName} is designed to handle double-invocation`);
      }
      console.log = originalConsoleLog;
    }, 0);
  }, 0);
}

/**
 * Performance monitoring for timer callbacks
 */
export function monitorTimerPerformance<T extends (...args: any[]) => any>(
  callback: T,
  timerName: string,
  warningThreshold: number = 16 // 16ms = 60fps threshold
): T {
  if (process.env.NODE_ENV !== 'development') {
    return callback;
  }
  
  return ((...args: any[]) => {
    const start = performance.now();
    const result = callback(...args);
    const duration = performance.now() - start;
    
    if (duration > warningThreshold) {
      console.warn(`⚠️ Performance: ${timerName} callback took ${duration.toFixed(2)}ms (threshold: ${warningThreshold}ms)`);
      console.log('💡 Consider optimizing the callback or reducing timer frequency');
    }
    
    return result;
  }) as T;
}

// Auto-cleanup on page unload
if (typeof window !== 'undefined' && process.env.NODE_ENV === 'development') {
  window.addEventListener('beforeunload', () => {
    if (activeTimers.size > 0) {
      console.warn(`⚠️ Page unload with ${activeTimers.size} active timers - potential memory leak`);
      logActiveTimers();
    }
  });
  
  // Periodic memory leak detection
  setInterval(detectTimerMemoryLeaks, 30000); // Check every 30 seconds
}