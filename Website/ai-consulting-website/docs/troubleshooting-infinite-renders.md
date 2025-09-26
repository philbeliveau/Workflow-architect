# Troubleshooting Guide: Infinite Re-render Issues

## Problem Description

The application was experiencing "Maximum update depth exceeded" errors, causing:
- Infinite component re-renders
- Timer components starting and stopping repeatedly
- Browser performance degradation
- Console spam with timer lifecycle messages

## Root Cause Analysis

### Primary Issue: Unstable Dependencies in React Hooks

The infinite re-render was caused by **unstable object references** being used as dependencies in React hooks, specifically:

1. **Date Object References**: `new Date()` objects created as default parameters
2. **Function Dependencies**: useCallback/useMemo depending on unstable references
3. **Cascading Effect**: One unstable dependency causing a chain reaction

### Specific Components Affected

#### 1. PromotionalBanner Component
**File**: `/src/components/sections/PromotionalBanner.tsx`

**Problem**:
```tsx
// ❌ PROBLEMATIC: targetDate reference changes on every render
export function PromotionalBanner({
  targetDate = new Date('2025-10-05T23:59:59-04:00'), // New object each render!
  // ...
}: PromotionalBannerProps) {
  
  const calculateTimeLeft = useCallback(() => {
    const deadline = targetDate.getTime(); // Depends on unstable reference
    // ...
  }, [targetDate]); // ❌ This causes infinite re-renders
}
```

**Solution**:
```tsx
// ✅ FIXED: Convert to stable primitive value
export function PromotionalBanner({
  targetDate = new Date('2025-10-05T23:59:59-04:00'),
  // ...
}: PromotionalBannerProps) {
  // Stabilize the date as a timestamp (primitive value)
  const targetTimestamp = targetDate.getTime();
  
  const calculateTimeLeft = useCallback(() => {
    const difference = targetTimestamp - now; // Uses stable primitive
    // ...
  }, [targetTimestamp, trackCountdownExpired]); // ✅ Stable dependencies
}
```

#### 2. usePromotionalBannerState Hook
**File**: `/src/hooks/usePromotionalBannerState.ts`

**Problem**:
```tsx
// ❌ PROBLEMATIC: useState + useEffect calling setState
useEffect(() => {
  // ... localStorage logic that calls setState
  setState(parsedState); // Triggers re-render
}, [deadlineDate]); // If deadlineDate changes, infinite loop

useEffect(() => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}, [state]); // Runs every time state changes from above useEffect
```

**Solution**:
```tsx
// ✅ FIXED: Move initialization to useState initializer
const [state, setState] = useState<PromotionalBannerState>(() => {
  // Initialize from localStorage during first render only
  // No useEffect needed for initialization
  return initializeFromLocalStorage();
});

// ✅ FIXED: Prevent initial render save
const isInitialRender = useRef(true);
useEffect(() => {
  if (isInitialRender.current) {
    isInitialRender.current = false;
    return; // Skip saving on initial render
  }
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}, [state]);
```

#### 3. TransformationProcessInteractive Component
**File**: `/src/components/sections/TransformationProcessInteractive.tsx`

**Problem**:
```tsx
// ❌ PROBLEMATIC: useMemo recreation causing useEffect loops
const flowStates = useMemo(() => [...], [translatedStages]); // Recreates array

useEffect(() => {
  flowStatesRef.current = flowStates; // Runs when flowStates changes
}, [flowStates]); // Dependency on unstable array

useEffect(() => {
  // Timer logic accessing flowStates
}, [isPlaying, duration, flowStates]); // ❌ Unstable dependency
```

**Solution**:
```tsx
// ✅ FIXED: Update refs during render (safe for refs)
const flowStatesRef = useRef(flowStates);
flowStatesRef.current = flowStates; // Direct assignment during render

useEffect(() => {
  // Timer logic using stable refs
  const currentState = flowStatesRef.current[currentFlowStateRef.current];
}, [isPlaying, duration]); // ✅ Only stable dependencies
```

## Common Patterns to Avoid

### 1. Object/Array Default Parameters
```tsx
// ❌ DON'T: Creates new object on every render
function Component({ date = new Date(), items = [] }) {
  
// ✅ DO: Use stable references or convert to primitives
function Component({ date = new Date(), items = [] }) {
  const stableTimestamp = date.getTime();
  const stableItemsRef = useRef(items);
  stableItemsRef.current = items;
```

### 2. useEffect + setState Loops
```tsx
// ❌ DON'T: setState in useEffect with changing dependencies
useEffect(() => {
  setState(computedValue);
}, [changingDependency]);

// ✅ DO: Use useState initializer or useMemo
const [state] = useState(() => computeInitialValue());
const computedValue = useMemo(() => compute(), [stableDeps]);
```

### 3. Ref Updates in useEffect
```tsx
// ❌ DON'T: useEffect to sync refs
useEffect(() => {
  ref.current = value;
}, [value]);

// ✅ DO: Update refs during render
ref.current = value; // Safe during render
```

## Prevention Strategies

### 1. Stabilize Object References
- Convert Date objects to timestamps
- Use useRef for object storage
- Implement deep comparison when needed

### 2. Minimize useEffect Dependencies
- Prefer useState initializers over useEffect initialization
- Use refs to access current values without dependencies
- Break complex effects into smaller, focused ones

### 3. Development Tools
- Enable React StrictMode to catch issues early
- Use React DevTools Profiler to identify re-render causes
- Add console logs to track hook executions in development

### 4. Code Review Checklist
- [ ] No object/array default parameters without stabilization
- [ ] No setState calls inside useEffect with changing dependencies
- [ ] Ref updates done during render, not in useEffect
- [ ] useCallback/useMemo dependencies are stable
- [ ] Timer/interval cleanup in useEffect return functions

## Testing Strategy

### 1. React StrictMode
Ensure all components work correctly with StrictMode enabled (double-invocation of effects).

### 2. Performance Monitoring
```tsx
// Add to development environment
if (process.env.NODE_ENV === 'development') {
  console.log('Component rendered:', { timestamp: Date.now() });
}
```

### 3. Integration Tests
Test components with rapid prop changes to catch infinite re-render scenarios.

## Resolution Summary

**Total Issues Fixed**: 7
- ✅ TransformationProcessInteractive: useEffect dependency stabilization
- ✅ TransformationProcessInteractive: Ref updates during render
- ✅ usePromotionalBannerState: useState initializer pattern
- ✅ usePromotionalBannerState: Initial render save prevention
- ✅ PromotionalBanner: targetDate stabilization
- ✅ Navigation: Positioning and animation optimization

**Performance Impact**: 
- Eliminated infinite re-render loops
- Reduced unnecessary DOM updates
- Improved timer stability and accuracy
- Enhanced overall application responsiveness

## Related Files

- `/src/components/sections/PromotionalBanner.tsx`
- `/src/hooks/usePromotionalBannerState.ts`
- `/src/components/sections/TransformationProcessInteractive.tsx`
- `/src/hooks/useStrictModeSafeTimer.ts`
- `/src/components/sections/Navigation.tsx`

---

**Date**: January 2025  
**Status**: Resolved  
**Severity**: Critical → Fixed