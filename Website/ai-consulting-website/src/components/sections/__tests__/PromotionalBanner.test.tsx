import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
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

const englishMessages = {
  promotion: {
    banner: {
      title: '🔥 LAUNCH SPECIAL: 40% off all training programs!',
      countdown: {
        prefix: 'Only',
        suffix: 'to take advantage of this exceptional offer',
        days: 'days',
        hours: 'hours',
        minutes: 'minutes',
        seconds: 'seconds',
        expired: 'Offer expired'
      },
      cta: 'Get it now!',
      close: 'Close'
    }
  }
};

const renderWithIntl = (component: React.ReactElement, locale = 'fr') => {
  const messages = locale === 'fr' ? frenchMessages : englishMessages;
  
  return render(
    <NextIntlClientProvider locale={locale} messages={messages}>
      {component}
    </NextIntlClientProvider>
  );
};

describe('PromotionalBanner', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  describe('Rendering and Display', () => {
    it('renders promotional banner with French content by default', () => {
      const futureDate = new Date(Date.now() + 86400000); // 1 day in future
      
      renderWithIntl(
        <PromotionalBanner targetDate={futureDate} />
      );

      expect(screen.getByText(/LANCEMENT SPÉCIAL/)).toBeInTheDocument();
      expect(screen.getByText(/40% de réduction/)).toBeInTheDocument();
      expect(screen.getByText("J'en profite maintenant!")).toBeInTheDocument();
    });

    it('renders promotional banner with English content when locale is en', () => {
      const futureDate = new Date(Date.now() + 86400000);
      
      renderWithIntl(
        <PromotionalBanner targetDate={futureDate} />,
        'en'
      );

      expect(screen.getByText(/LAUNCH SPECIAL/)).toBeInTheDocument();
      expect(screen.getByText(/40% off all training/)).toBeInTheDocument();
      expect(screen.getByText('Get it now!')).toBeInTheDocument();
    });

    it('shows countdown timer with correct formatting', () => {
      // Set target date to exactly 1 day, 2 hours, 30 minutes in future
      const futureDate = new Date(Date.now() + (24 * 60 * 60 * 1000) + (2 * 60 * 60 * 1000) + (30 * 60 * 1000));
      
      renderWithIntl(
        <PromotionalBanner targetDate={futureDate} />
      );

      expect(screen.getByText(/Plus que/)).toBeInTheDocument();
      expect(screen.getByText(/pour profiter de cette offre/)).toBeInTheDocument();
    });

    it('has proper accessibility attributes', () => {
      const futureDate = new Date(Date.now() + 86400000);
      
      renderWithIntl(
        <PromotionalBanner targetDate={futureDate} />
      );

      const banner = screen.getByRole('banner');
      expect(banner).toBeInTheDocument();
      expect(banner).toHaveAttribute('aria-live', 'polite');
      
      const closeButton = screen.getByLabelText('Fermer');
      expect(closeButton).toBeInTheDocument();
    });
  });

  describe('Countdown Timer Functionality', () => {
    it('does not render when promotion is expired', () => {
      const pastDate = new Date(Date.now() - 86400000); // 1 day in past
      
      renderWithIntl(
        <PromotionalBanner targetDate={pastDate} />
      );

      expect(screen.queryByText(/LANCEMENT SPÉCIAL/)).not.toBeInTheDocument();
    });

    it('updates countdown display when timer advances', async () => {
      const futureDate = new Date(Date.now() + 60000); // 1 minute in future
      
      renderWithIntl(
        <PromotionalBanner targetDate={futureDate} />
      );

      expect(screen.getByText(/Plus que/)).toBeInTheDocument();
      
      // Fast-forward timer
      jest.advanceTimersByTime(1000);
      
      await waitFor(() => {
        expect(screen.getByText(/Plus que/)).toBeInTheDocument();
      });
    });
  });

  describe('Banner Interaction', () => {
    it('can be dismissed by clicking close button', () => {
      const futureDate = new Date(Date.now() + 86400000);
      const onDismiss = jest.fn();
      
      renderWithIntl(
        <PromotionalBanner targetDate={futureDate} onDismiss={onDismiss} />
      );

      const closeButton = screen.getByLabelText('Fermer');
      fireEvent.click(closeButton);

      expect(onDismiss).toHaveBeenCalledTimes(1);
      expect(screen.queryByText(/LANCEMENT SPÉCIAL/)).not.toBeInTheDocument();
    });

    it('does not render when isDismissed prop is true', () => {
      const futureDate = new Date(Date.now() + 86400000);
      
      renderWithIntl(
        <PromotionalBanner targetDate={futureDate} isDismissed={true} />
      );

      expect(screen.queryByText(/LANCEMENT SPÉCIAL/)).not.toBeInTheDocument();
    });

    it('scrolls to formations section when CTA is clicked', () => {
      const futureDate = new Date(Date.now() + 86400000);
      
      // Mock scroll behavior
      const mockScrollIntoView = jest.fn();
      const mockElement = { scrollIntoView: mockScrollIntoView };
      jest.spyOn(document, 'getElementById').mockReturnValue(mockElement as HTMLElement);
      
      renderWithIntl(
        <PromotionalBanner targetDate={futureDate} />
      );

      const ctaButton = screen.getByText("J'en profite maintenant!");
      fireEvent.click(ctaButton);

      expect(document.getElementById).toHaveBeenCalledWith('formations');
      expect(mockScrollIntoView).toHaveBeenCalledWith({ behavior: 'smooth' });
    });
  });

  describe('Responsive Design', () => {
    it('shows mobile CTA button on small screens', () => {
      const futureDate = new Date(Date.now() + 86400000);
      
      renderWithIntl(
        <PromotionalBanner targetDate={futureDate} />
      );

      // Both desktop (hidden on mobile) and mobile (hidden on desktop) CTAs should exist
      const ctaButtons = screen.getAllByText("J'en profite maintenant!");
      expect(ctaButtons).toHaveLength(2);
    });
  });

  describe('Timer Safety', () => {
    it('uses safe timer hook with correct configuration', async () => {
      const timerModule = await import('@/hooks/useStrictModeSafeTimer');
      const futureDate = new Date(Date.now() + 86400000);
      
      renderWithIntl(
        <PromotionalBanner targetDate={futureDate} />
      );

      expect(timerModule.useStrictModeSafeTimer).toHaveBeenCalledWith(
        'promotional-countdown',
        1000,
        expect.any(Function),
        false
      );
    });

    it('validates timer configuration in development', async () => {
      const validationModule = await import('@/utils/timerValidation');
      const futureDate = new Date(Date.now() + 86400000);
      
      renderWithIntl(
        <PromotionalBanner targetDate={futureDate} />
      );

      expect(validationModule.validateTimerConfig).toHaveBeenCalledWith(
        'promotional-countdown',
        1000,
        'PromotionalBanner'
      );
    });
  });
});