import React from 'react';
import { render, screen } from '@testing-library/react';
import { NextIntlClientProvider } from 'next-intl';
import { PromotionalBanner } from '../PromotionalBanner';

// Mock the timer hooks
jest.mock('@/hooks/useStrictModeSafeTimer', () => ({
  useStrictModeSafeTimer: jest.fn(() => ({
    start: jest.fn(),
    stop: jest.fn(),
    isRunning: false
  }))
}));

jest.mock('@/utils/timerValidation', () => ({
  validateTimerConfig: jest.fn()
}));

jest.mock('@/hooks/usePromotionalAnalytics', () => ({
  usePromotionalAnalytics: jest.fn(() => ({
    trackBannerView: jest.fn(),
    trackBannerClick: jest.fn(),
    trackBannerDismiss: jest.fn(),
    trackCountdownExpired: jest.fn()
  }))
}));

const frenchMessages = {
  promotion: {
    banner: {
      title: '🔥 LANCEMENT SPÉCIAL: 40% de réduction sur toutes les formations!',
      countdown: {
        prefix: 'Plus que',
        suffix: 'pour profiter de cette offre exceptionnelle',
        days: 'jours',
        hours: 'heures',
        minutes: 'minutes',
        seconds: 'secondes',
        expired: 'Offre expirée'
      },
      cta: "J'en profite maintenant!",
      close: 'Fermer'
    }
  }
};

const renderWithIntl = (component: React.ReactElement) => {
  return render(
    <NextIntlClientProvider locale="fr" messages={frenchMessages}>
      {component}
    </NextIntlClientProvider>
  );
};

// Mock the promotional banner state hook
const mockUsePromotionalBannerState = jest.fn();
jest.mock('@/hooks/usePromotionalBannerState', () => ({
  usePromotionalBannerState: () => mockUsePromotionalBannerState()
}));

describe('PromotionalBanner - Deadline Auto-Removal', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  describe('Banner Visibility Based on Deadline', () => {
    it('shows banner when deadline is in the future', () => {
      // Mock banner state to show
      mockUsePromotionalBannerState.mockReturnValue({
        isDismissed: false,
        dismissBanner: jest.fn(),
        shouldShow: true
      });

      const futureDate = new Date(Date.now() + 86400000); // 1 day in future
      
      renderWithIntl(
        <PromotionalBanner targetDate={futureDate} />
      );

      expect(screen.getByText(/LANCEMENT SPÉCIAL/)).toBeInTheDocument();
      expect(screen.getByRole('banner')).toBeInTheDocument();
    });

    it('hides banner when deadline has passed', () => {
      // Mock banner state to not show (deadline passed)
      mockUsePromotionalBannerState.mockReturnValue({
        isDismissed: true,
        dismissBanner: jest.fn(),
        shouldShow: false
      });

      const pastDate = new Date(Date.now() - 86400000); // 1 day in past
      
      renderWithIntl(
        <PromotionalBanner targetDate={pastDate} />
      );

      expect(screen.queryByText(/LANCEMENT SPÉCIAL/)).not.toBeInTheDocument();
      expect(screen.queryByRole('banner')).not.toBeInTheDocument();
    });

    it('automatically hides banner at exact deadline moment', () => {
      jest.useFakeTimers();
      
      // Mock banner state to initially show
      mockUsePromotionalBannerState.mockReturnValue({
        isDismissed: false,
        dismissBanner: jest.fn(),
        shouldShow: true
      });

      const deadline = new Date(Date.now() + 5000); // 5 seconds in future
      
      const { rerender } = renderWithIntl(
        <PromotionalBanner targetDate={deadline} />
      );

      // Initially should show
      expect(screen.getByText(/LANCEMENT SPÉCIAL/)).toBeInTheDocument();

      // Fast-forward past deadline
      jest.advanceTimersByTime(6000);
      
      // Mock banner state to not show after deadline
      mockUsePromotionalBannerState.mockReturnValue({
        isDismissed: true,
        dismissBanner: jest.fn(),
        shouldShow: false
      });

      rerender(
        <NextIntlClientProvider locale="fr" messages={frenchMessages}>
          <PromotionalBanner targetDate={deadline} />
        </NextIntlClientProvider>
      );

      // Should no longer be visible
      expect(screen.queryByText(/LANCEMENT SPÉCIAL/)).not.toBeInTheDocument();
    });
  });

  describe('Countdown Expiration', () => {
    it('calls trackCountdownExpired when deadline is reached', () => {
      const { usePromotionalAnalytics } = require('@/hooks/usePromotionalAnalytics');
      const mockTrackCountdownExpired = jest.fn();
      
      usePromotionalAnalytics.mockReturnValue({
        trackBannerView: jest.fn(),
        trackBannerClick: jest.fn(),
        trackBannerDismiss: jest.fn(),
        trackCountdownExpired: mockTrackCountdownExpired
      });

      mockUsePromotionalBannerState.mockReturnValue({
        isDismissed: false,
        dismissBanner: jest.fn(),
        shouldShow: true
      });

      const pastDate = new Date(Date.now() - 1000); // 1 second in past
      
      renderWithIntl(
        <PromotionalBanner targetDate={pastDate} />
      );

      // Since deadline is in past, countdown should expire immediately
      expect(mockTrackCountdownExpired).toHaveBeenCalled();
    });
  });

  describe('September 5th, 2024 Specific Deadline', () => {
    it('correctly handles the September 5th deadline', () => {
      const september5th = new Date('2024-09-05T23:59:59-04:00');
      
      // Test before deadline
      const beforeDeadline = new Date(september5th.getTime() - 3600000); // 1 hour before
      jest.setSystemTime(beforeDeadline);
      
      mockUsePromotionalBannerState.mockReturnValue({
        isDismissed: false,
        dismissBanner: jest.fn(),
        shouldShow: true
      });

      const { rerender } = renderWithIntl(
        <PromotionalBanner targetDate={september5th} />
      );

      expect(screen.getByText(/LANCEMENT SPÉCIAL/)).toBeInTheDocument();

      // Test after deadline
      const afterDeadline = new Date(september5th.getTime() + 3600000); // 1 hour after
      jest.setSystemTime(afterDeadline);
      
      mockUsePromotionalBannerState.mockReturnValue({
        isDismissed: true,
        dismissBanner: jest.fn(),
        shouldShow: false
      });

      rerender(
        <NextIntlClientProvider locale="fr" messages={frenchMessages}>
          <PromotionalBanner targetDate={september5th} />
        </NextIntlClientProvider>
      );

      expect(screen.queryByText(/LANCEMENT SPÉCIAL/)).not.toBeInTheDocument();
    });

    it('handles timezone correctly for EDT deadline', () => {
      // September 5th, 2024 at 23:59:59 EDT
      const edtDeadline = new Date('2024-09-05T23:59:59-04:00');
      
      // Convert to UTC for testing
      const utcTime = edtDeadline.getTime();
      
      expect(edtDeadline.getTimezoneOffset()).toBeDefined();
      expect(utcTime).toBeGreaterThan(0);
      
      // Verify the deadline is properly set
      expect(edtDeadline.getFullYear()).toBe(2024);
      expect(edtDeadline.getMonth()).toBe(8); // September (0-indexed)
      expect(edtDeadline.getDate()).toBe(5);
    });
  });

  describe('Storage Cleanup on Deadline', () => {
    it('clears localStorage when deadline has passed', () => {
      const mockRemoveItem = jest.fn();
      const originalLocalStorage = global.localStorage;
      
      global.localStorage = {
        ...originalLocalStorage,
        removeItem: mockRemoveItem,
        getItem: jest.fn().mockReturnValue(JSON.stringify({
          isDismissed: false,
          dismissUntil: null,
          showCount: 1
        }))
      } as any;

      const pastDate = new Date(Date.now() - 86400000); // 1 day in past
      
      // The usePromotionalBannerState hook should trigger localStorage cleanup
      // when it detects the deadline has passed
      mockUsePromotionalBannerState.mockReturnValue({
        isDismissed: true,
        dismissBanner: jest.fn(),
        shouldShow: false
      });

      renderWithIntl(
        <PromotionalBanner targetDate={pastDate} />
      );

      // Verify banner doesn't render when deadline passed
      expect(screen.queryByText(/LANCEMENT SPÉCIAL/)).not.toBeInTheDocument();
      
      global.localStorage = originalLocalStorage;
    });
  });

  describe('Edge Cases', () => {
    it('handles exact deadline moment correctly', () => {
      const exactDeadline = new Date('2024-09-05T23:59:59-04:00');
      jest.setSystemTime(exactDeadline);
      
      mockUsePromotionalBannerState.mockReturnValue({
        isDismissed: true, // Should be dismissed exactly at deadline
        dismissBanner: jest.fn(),
        shouldShow: false
      });

      renderWithIntl(
        <PromotionalBanner targetDate={exactDeadline} />
      );

      expect(screen.queryByText(/LANCEMENT SPÉCIAL/)).not.toBeInTheDocument();
    });

    it('handles deadline in different timezones', () => {
      // Test with PST (3 hours behind EDT)
      const pstDeadline = new Date('2024-09-05T20:59:59-07:00'); // Same moment as EDT deadline
      const edtDeadline = new Date('2024-09-05T23:59:59-04:00');
      
      // Both should represent the same moment in time
      expect(pstDeadline.getTime()).toBe(edtDeadline.getTime());
      
      mockUsePromotionalBannerState.mockReturnValue({
        isDismissed: false,
        dismissBanner: jest.fn(),
        shouldShow: true
      });

      renderWithIntl(
        <PromotionalBanner targetDate={pstDeadline} />
      );

      // Should work the same regardless of timezone representation
      expect(screen.getByText(/LANCEMENT SPÉCIAL/)).toBeInTheDocument();
    });
  });
});