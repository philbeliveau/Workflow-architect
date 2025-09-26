'use client';

import { useState, useEffect, useCallback, useRef } from 'react';

interface PromotionalBannerState {
  isDismissed: boolean;
  dismissUntil: string | null;
  showCount: number;
}

interface UsePromotionalBannerStateReturn {
  isDismissed: boolean;
  dismissBanner: () => void;
  resetBanner: () => void;
  shouldShow: boolean;
}

const STORAGE_KEY = 'promotional-banner-state';
const SHOW_INTERVAL = 24 * 60 * 60 * 1000; // 24 hours in milliseconds

/**
 * Hook to manage promotional banner dismissal and persistence state
 * 
 * Features:
 * - Browser localStorage persistence
 * - Temporary dismissal (24 hours)
 * - Automatic reset after deadline
 * - Show count tracking
 */
export function usePromotionalBannerState(
  deadlineDate: Date = new Date('2025-10-05T23:59:59-04:00')
): UsePromotionalBannerStateReturn {
  // Convert Date to timestamp to avoid reference equality issues
  const deadlineTimestamp = deadlineDate.getTime();
  
  const [state, setState] = useState<PromotionalBannerState>(() => {
    // Initialize state from localStorage during first render
    if (typeof window === 'undefined') {
      return {
        isDismissed: false,
        dismissUntil: null,
        showCount: 0
      };
    }

    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const parsedState: PromotionalBannerState = JSON.parse(stored);
        
        // Check if deadline has passed - clear state if expired
        if (Date.now() > deadlineTimestamp) {
          localStorage.removeItem(STORAGE_KEY);
          return {
            isDismissed: false,
            dismissUntil: null,
            showCount: 0
          };
        }

        // Check if dismissal period has expired
        if (parsedState.dismissUntil) {
          const dismissUntilTime = new Date(parsedState.dismissUntil).getTime();
          if (Date.now() > dismissUntilTime) {
            // Reset dismissal but keep show count
            const resetState = {
              ...parsedState,
              isDismissed: false,
              dismissUntil: null
            };
            localStorage.setItem(STORAGE_KEY, JSON.stringify(resetState));
            return resetState;
          }
        }

        return parsedState;
      }
    } catch (error) {
      console.warn('Failed to load promotional banner state:', error);
    }

    return {
      isDismissed: false,
      dismissUntil: null,
      showCount: 0
    };
  });

  // Save state to localStorage when it changes (but not on initial render)
  const isInitialRender = useRef(true);
  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    if (isInitialRender.current) {
      isInitialRender.current = false;
      return;
    }

    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch (error) {
      console.warn('Failed to save promotional banner state:', error);
    }
  }, [state]);

  // Dismiss banner for 24 hours
  const dismissBanner = useCallback(() => {
    const dismissUntil = new Date(Date.now() + SHOW_INTERVAL).toISOString();
    
    setState(prevState => ({
      ...prevState,
      isDismissed: true,
      dismissUntil,
      showCount: prevState.showCount + 1
    }));
  }, []);

  // Reset banner state (for testing or manual reset)
  const resetBanner = useCallback(() => {
    setState({
      isDismissed: false,
      dismissUntil: null,
      showCount: 0
    });
  }, []);

  // Determine if banner should show
  const shouldShow = useCallback(() => {
    const now = Date.now();
    
    // Don't show if past deadline
    if (now > deadlineTimestamp) {
      return false;
    }

    // Don't show if currently dismissed
    if (state.isDismissed && state.dismissUntil) {
      const dismissUntilTime = new Date(state.dismissUntil).getTime();
      if (now < dismissUntilTime) {
        return false;
      }
    }

    return true;
  }, [state, deadlineTimestamp]);

  return {
    isDismissed: !shouldShow(),
    dismissBanner,
    resetBanner,
    shouldShow: shouldShow()
  };
}