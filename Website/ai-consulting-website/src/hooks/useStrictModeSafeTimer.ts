import { useRef, useEffect, useCallback } from 'react';

/**
 * Timer Management Singleton - Prevents multiple timer instances globally
 * This addresses React.StrictMode race conditions and component remounting issues
 */
interface GlobalTimerInstance {
  intervalId: number | null;
  componentId: string | null;
  isRunning: boolean;
}

const globalTimerRegistry: Map<string, GlobalTimerInstance> = new Map();

/**
 * StrictMode-safe timer hook with built-in race condition protection
 * 
 * Features:
 * - Global timer singleton per timer ID
 * - Transition locks to prevent duplicate executions
 * - Automatic cleanup on unmount
 * - Development debugging support
 * - StrictMode compatibility
 * 
 * @param timerId Unique identifier for this timer instance
 * @param interval Timer interval in milliseconds
 * @param callback Function to execute on each timer tick
 * @param autoStart Whether to start the timer immediately
 * 
 * @example
 * ```typescript
 * const { start, stop, isRunning } = useStrictModeSafeTimer(
 *   'transformation-flow',
 *   200,
 *   () => {
 *     setProgress(prev => prev + 1);
 *   }
 * );
 * ```
 */
export function useStrictModeSafeTimer(
  timerId: string,
  interval: number,
  callback: () => void,
  autoStart: boolean = false
) {
  // Unique instance identifier for debugging
  const instanceIdRef = useRef(`${timerId}-${Math.random().toString(36).substr(2, 9)}`);
  const callbackRef = useRef(callback);
  const isLocallyRunningRef = useRef(false);
  const isExecutingRef = useRef(false); // Execution lock for callback
  
  // Keep callback ref up to date
  callbackRef.current = callback;
  
  // Get or create global timer instance
  const getGlobalInstance = useCallback((): GlobalTimerInstance => {
    if (!globalTimerRegistry.has(timerId)) {
      globalTimerRegistry.set(timerId, {
        intervalId: null,
        componentId: null,
        isRunning: false
      });
    }
    return globalTimerRegistry.get(timerId)!;
  }, [timerId]);
  
  // Protected callback execution
  const executeCallback = useCallback(() => {
    const currentInstanceId = instanceIdRef.current;
    
    // Execution lock prevents duplicate calls within same tick
    if (isExecutingRef.current) {
      console.warn(`⚠️ [${currentInstanceId}] Timer callback execution blocked - already in progress`);
      return;
    }
    
    isExecutingRef.current = true;
    
    try {
      callbackRef.current();
    } catch (error) {
      console.error(`❌ [${currentInstanceId}] Timer callback error:`, error);
    } finally {
      // Release execution lock after microtask queue
      setTimeout(() => {
        isExecutingRef.current = false;
      }, 0);
    }
  }, []);
  
  // Start timer with global protection
  const start = useCallback(() => {
    const currentInstanceId = instanceIdRef.current;
    const globalInstance = getGlobalInstance();
    
    // Clear any existing timer from other instances
    if (globalInstance.intervalId && globalInstance.componentId !== currentInstanceId) {
      clearInterval(globalInstance.intervalId);
      console.log(`🧹 [${currentInstanceId}] Cleared existing timer from ${globalInstance.componentId}`);
    }
    
    // Only start if not already running
    if (!globalInstance.isRunning) {
      const intervalId = window.setInterval(executeCallback, interval);
      
      // Update global state
      globalInstance.intervalId = intervalId;
      globalInstance.componentId = currentInstanceId;
      globalInstance.isRunning = true;
      
      // Update local state
      isLocallyRunningRef.current = true;
      
      console.log(`🚀 [${currentInstanceId}] Timer started (${interval}ms interval)`);
    } else {
      console.warn(`⚠️ [${currentInstanceId}] Timer already running by ${globalInstance.componentId}`);
    }
  }, [timerId, interval, executeCallback, getGlobalInstance]);
  
  // Stop timer
  const stop = useCallback(() => {
    const currentInstanceId = instanceIdRef.current;
    const globalInstance = getGlobalInstance();
    
    if (globalInstance.intervalId && globalInstance.componentId === currentInstanceId) {
      clearInterval(globalInstance.intervalId);
      globalInstance.intervalId = null;
      globalInstance.componentId = null;
      globalInstance.isRunning = false;
      
      console.log(`🛑 [${currentInstanceId}] Timer stopped`);
    }
    
    isLocallyRunningRef.current = false;
    isExecutingRef.current = false;
  }, [getGlobalInstance]);
  
  // Reset timer
  const reset = useCallback(() => {
    stop();
    if (autoStart) {
      // Use setTimeout to ensure stop cleanup completes
      setTimeout(start, 0);
    }
  }, [stop, start, autoStart]);
  
  // Auto-start if requested
  useEffect(() => {
    if (autoStart) {
      start();
    }
    
    // Cleanup on unmount
    return () => {
      const currentInstanceId = instanceIdRef.current;
      const globalInstance = getGlobalInstance();
      
      if (globalInstance.componentId === currentInstanceId) {
        stop();
        console.log(`🗑️ [${currentInstanceId}] Timer cleaned up on unmount`);
      }
    };
  }, [autoStart, start, stop, getGlobalInstance]);
  
  // Development-time validation
  useEffect(() => {
    if (process.env.NODE_ENV === 'development') {
      if (interval < 50) {
        console.warn(`⚠️ Timer interval ${interval}ms is very short - consider performance impact`);
      }
      
      if (!timerId || timerId.length < 3) {
        console.warn(`⚠️ Timer ID "${timerId}" should be descriptive and unique`);
      }
    }
  }, [timerId, interval]);
  
  return {
    start,
    stop,
    reset,
    isRunning: isLocallyRunningRef.current,
    timerId: instanceIdRef.current
  };
}

/**
 * Development utility to inspect global timer state
 */
export function getGlobalTimerDebugInfo() {
  if (process.env.NODE_ENV === 'development') {
    const debugInfo: Record<string, any> = {};
    globalTimerRegistry.forEach((instance, timerId) => {
      debugInfo[timerId] = {
        isRunning: instance.isRunning,
        componentId: instance.componentId,
        hasInterval: !!instance.intervalId
      };
    });
    return debugInfo;
  }
  return {};
}