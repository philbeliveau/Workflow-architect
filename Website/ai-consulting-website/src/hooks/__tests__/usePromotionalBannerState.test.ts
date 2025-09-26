import { renderHook, act } from '@testing-library/react';
import { usePromotionalBannerState } from '../usePromotionalBannerState';

// Mock localStorage
const localStorageMock = {
  getItem: jest.fn(),
  setItem: jest.fn(),
  removeItem: jest.fn(),
  clear: jest.fn(),
};
global.localStorage = localStorageMock as any;

describe('usePromotionalBannerState', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    localStorageMock.getItem.mockReturnValue(null);
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  describe('Initial State', () => {
    it('starts with banner visible when no stored state exists', () => {
      const futureDate = new Date(Date.now() + 86400000); // 1 day in future
      
      const { result } = renderHook(() => 
        usePromotionalBannerState(futureDate)
      );

      expect(result.current.shouldShow).toBe(true);
      expect(result.current.isDismissed).toBe(false);
    });

    it('hides banner when deadline has passed', () => {
      const pastDate = new Date(Date.now() - 86400000); // 1 day in past
      
      const { result } = renderHook(() => 
        usePromotionalBannerState(pastDate)
      );

      expect(result.current.shouldShow).toBe(false);
      expect(result.current.isDismissed).toBe(true);
    });
  });

  describe('Banner Dismissal', () => {
    it('dismisses banner for 24 hours when dismissBanner is called', () => {
      jest.useFakeTimers();
      const futureDate = new Date(Date.now() + 86400000);
      
      const { result } = renderHook(() => 
        usePromotionalBannerState(futureDate)
      );

      act(() => {
        result.current.dismissBanner();
      });

      expect(result.current.shouldShow).toBe(false);
      expect(result.current.isDismissed).toBe(true);
      
      // Fast-forward 23 hours - should still be dismissed
      act(() => {
        jest.advanceTimersByTime(23 * 60 * 60 * 1000);
      });
      
      expect(result.current.shouldShow).toBe(false);
      
      // Fast-forward 25 hours - should now show again
      act(() => {
        jest.advanceTimersByTime(2 * 60 * 60 * 1000);
      });
      
      expect(result.current.shouldShow).toBe(true);
    });

    it('resets banner state when resetBanner is called', () => {
      const futureDate = new Date(Date.now() + 86400000);
      
      const { result } = renderHook(() => 
        usePromotionalBannerState(futureDate)
      );

      // Dismiss banner first
      act(() => {
        result.current.dismissBanner();
      });
      
      expect(result.current.shouldShow).toBe(false);

      // Reset banner
      act(() => {
        result.current.resetBanner();
      });

      expect(result.current.shouldShow).toBe(true);
      expect(result.current.isDismissed).toBe(false);
    });
  });

  describe('LocalStorage Persistence', () => {
    it('saves state to localStorage when banner is dismissed', () => {
      const futureDate = new Date(Date.now() + 86400000);
      
      const { result } = renderHook(() => 
        usePromotionalBannerState(futureDate)
      );

      act(() => {
        result.current.dismissBanner();
      });

      expect(localStorageMock.setItem).toHaveBeenCalledWith(
        'promotional-banner-state',
        expect.stringContaining('"isDismissed":true')
      );
    });

    it('loads dismissed state from localStorage on mount', () => {
      const dismissUntil = new Date(Date.now() + 12 * 60 * 60 * 1000).toISOString(); // 12 hours
      const storedState = {
        isDismissed: true,
        dismissUntil,
        showCount: 1
      };
      
      localStorageMock.getItem.mockReturnValue(JSON.stringify(storedState));
      
      const futureDate = new Date(Date.now() + 86400000);
      
      const { result } = renderHook(() => 
        usePromotionalBannerState(futureDate)
      );

      expect(result.current.shouldShow).toBe(false);
      expect(result.current.isDismissed).toBe(true);
    });

    it('resets expired dismissal state from localStorage', () => {
      const dismissUntil = new Date(Date.now() - 60000).toISOString(); // 1 minute ago
      const storedState = {
        isDismissed: true,
        dismissUntil,
        showCount: 1
      };
      
      localStorageMock.getItem.mockReturnValue(JSON.stringify(storedState));
      
      const futureDate = new Date(Date.now() + 86400000);
      
      const { result } = renderHook(() => 
        usePromotionalBannerState(futureDate)
      );

      expect(result.current.shouldShow).toBe(true);
      expect(result.current.isDismissed).toBe(false);
    });

    it('clears localStorage when deadline has passed', () => {
      const storedState = {
        isDismissed: false,
        dismissUntil: null,
        showCount: 3
      };
      
      localStorageMock.getItem.mockReturnValue(JSON.stringify(storedState));
      
      const pastDate = new Date(Date.now() - 86400000); // 1 day in past
      
      renderHook(() => usePromotionalBannerState(pastDate));

      expect(localStorageMock.removeItem).toHaveBeenCalledWith('promotional-banner-state');
    });

    it('handles localStorage errors gracefully', () => {
      localStorageMock.getItem.mockImplementation(() => {
        throw new Error('localStorage not available');
      });
      
      const consoleSpy = jest.spyOn(console, 'warn').mockImplementation();
      
      const futureDate = new Date(Date.now() + 86400000);
      
      const { result } = renderHook(() => 
        usePromotionalBannerState(futureDate)
      );

      expect(result.current.shouldShow).toBe(true);
      expect(consoleSpy).toHaveBeenCalledWith(
        'Failed to load promotional banner state:',
        expect.any(Error)
      );
      
      consoleSpy.mockRestore();
    });
  });

  describe('Show Count Tracking', () => {
    it('increments show count when banner is dismissed', () => {
      const futureDate = new Date(Date.now() + 86400000);
      
      const { result } = renderHook(() => 
        usePromotionalBannerState(futureDate)
      );

      act(() => {
        result.current.dismissBanner();
      });

      const savedState = JSON.parse(localStorageMock.setItem.mock.calls[0][1]);
      expect(savedState.showCount).toBe(1);

      // Reset and dismiss again
      act(() => {
        result.current.resetBanner();
      });
      
      act(() => {
        result.current.dismissBanner();
      });

      const secondSavedState = JSON.parse(
        localStorageMock.setItem.mock.calls[localStorageMock.setItem.mock.calls.length - 1][1]
      );
      expect(secondSavedState.showCount).toBe(1); // Should reset to 1 after resetBanner
    });
  });

  describe('Edge Cases', () => {
    it('handles invalid JSON in localStorage', () => {
      localStorageMock.getItem.mockReturnValue('invalid json');
      
      const consoleSpy = jest.spyOn(console, 'warn').mockImplementation();
      
      const futureDate = new Date(Date.now() + 86400000);
      
      const { result } = renderHook(() => 
        usePromotionalBannerState(futureDate)
      );

      expect(result.current.shouldShow).toBe(true);
      expect(consoleSpy).toHaveBeenCalled();
      
      consoleSpy.mockRestore();
    });

    it('works in server-side rendering environment', () => {
      // Mock window as undefined to simulate SSR
      const originalWindow = global.window;
      delete (global as any).window;
      
      const futureDate = new Date(Date.now() + 86400000);
      
      const { result } = renderHook(() => 
        usePromotionalBannerState(futureDate)
      );

      expect(result.current.shouldShow).toBe(true);
      
      // Restore window
      global.window = originalWindow;
    });
  });
});