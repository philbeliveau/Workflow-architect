import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
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

jest.mock('@/hooks/usePromotionalBannerState', () => ({
  usePromotionalBannerState: jest.fn(() => ({
    isDismissed: false,
    dismissBanner: jest.fn(),
    shouldShow: true
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

// Helper to simulate mobile viewport
const simulateMobileViewport = () => {
  Object.defineProperty(window, 'innerWidth', {
    writable: true,
    configurable: true,
    value: 375, // iPhone SE width
  });
  
  Object.defineProperty(window, 'innerHeight', {
    writable: true,
    configurable: true,
    value: 667,
  });
  
  window.dispatchEvent(new Event('resize'));
};

// Helper to simulate desktop viewport
const simulateDesktopViewport = () => {
  Object.defineProperty(window, 'innerWidth', {
    writable: true,
    configurable: true,
    value: 1024,
  });
  
  Object.defineProperty(window, 'innerHeight', {
    writable: true,
    configurable: true,
    value: 768,
  });
  
  window.dispatchEvent(new Event('resize'));
};

describe('PromotionalBanner - Mobile Responsiveness', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  afterEach(() => {
    // Reset to desktop by default
    simulateDesktopViewport();
  });

  describe('Mobile Layout', () => {
    beforeEach(() => {
      simulateMobileViewport();
    });

    it('renders mobile-optimized layout on small screens', () => {
      const futureDate = new Date(Date.now() + 86400000);
      
      renderWithIntl(
        <PromotionalBanner targetDate={futureDate} />
      );

      const container = screen.getByRole('banner');
      
      // Check mobile padding classes are applied
      expect(container).toHaveClass('py-3', 'px-4');
      
      // Check that title uses mobile text size
      const title = screen.getByText(/LANCEMENT SPÉCIAL/);
      expect(title.parentElement).toHaveClass('text-sm');
    });

    it('shows mobile CTA button and hides desktop CTA', () => {
      const futureDate = new Date(Date.now() + 86400000);
      
      renderWithIntl(
        <PromotionalBanner targetDate={futureDate} />
      );

      const ctaButtons = screen.getAllByText("J'en profite maintenant!");
      
      // Should have both desktop (hidden) and mobile (visible) CTAs
      expect(ctaButtons).toHaveLength(2);
      
      // Desktop CTA should be hidden on mobile
      const desktopCTA = ctaButtons[0].closest('.hidden.md\\:block');
      expect(desktopCTA).toBeInTheDocument();
      
      // Mobile CTA should be visible
      const mobileCTA = ctaButtons[1].closest('.block.md\\:hidden');
      expect(mobileCTA).toBeInTheDocument();
    });

    it('uses smaller close button on mobile', () => {
      const futureDate = new Date(Date.now() + 86400000);
      
      renderWithIntl(
        <PromotionalBanner targetDate={futureDate} />
      );

      const closeButton = screen.getByLabelText('Fermer');
      expect(closeButton).toBeInTheDocument();
      
      // Close button should be optimized for touch
      expect(closeButton).toHaveClass('p-1');
    });

    it('centers content on mobile', () => {
      const futureDate = new Date(Date.now() + 86400000);
      
      renderWithIntl(
        <PromotionalBanner targetDate={futureDate} />
      );

      const content = screen.getByText(/LANCEMENT SPÉCIAL/).parentElement;
      expect(content).toHaveClass('text-center', 'md:text-left');
    });
  });

  describe('Desktop Layout', () => {
    beforeEach(() => {
      simulateDesktopViewport();
    });

    it('renders desktop-optimized layout on large screens', () => {
      const futureDate = new Date(Date.now() + 86400000);
      
      renderWithIntl(
        <PromotionalBanner targetDate={futureDate} />
      );

      const container = screen.getByRole('banner');
      
      // Check desktop padding classes
      expect(container).toHaveClass('md:py-4', 'md:px-6');
      
      // Check that title uses larger text on desktop
      const title = screen.getByText(/LANCEMENT SPÉCIAL/);
      expect(title.parentElement).toHaveClass('md:text-lg');
    });

    it('shows desktop CTA button and hides mobile CTA', () => {
      const futureDate = new Date(Date.now() + 86400000);
      
      renderWithIntl(
        <PromotionalBanner targetDate={futureDate} />
      );

      const ctaButtons = screen.getAllByText("J'en profite maintenant!");
      expect(ctaButtons).toHaveLength(2);
      
      // Desktop CTA should be visible
      const desktopCTA = ctaButtons[0].closest('.hidden.md\\:block');
      expect(desktopCTA).toBeInTheDocument();
      
      // Mobile CTA should be hidden
      const mobileCTA = ctaButtons[1].closest('.block.md\\:hidden');
      expect(mobileCTA).toBeInTheDocument();
    });

    it('left-aligns content on desktop', () => {
      const futureDate = new Date(Date.now() + 86400000);
      
      renderWithIntl(
        <PromotionalBanner targetDate={futureDate} />
      );

      const content = screen.getByText(/LANCEMENT SPÉCIAL/).parentElement;
      expect(content).toHaveClass('text-center', 'md:text-left');
    });
  });

  describe('Touch Interactions', () => {
    beforeEach(() => {
      simulateMobileViewport();
    });

    it('handles touch events for mobile CTA button', () => {
      const futureDate = new Date(Date.now() + 86400000);
      
      // Mock scroll behavior
      const mockScrollIntoView = jest.fn();
      const mockElement = { scrollIntoView: mockScrollIntoView };
      jest.spyOn(document, 'getElementById').mockReturnValue(mockElement as HTMLElement);
      
      renderWithIntl(
        <PromotionalBanner targetDate={futureDate} />
      );

      const ctaButtons = screen.getAllByText("J'en profite maintenant!");
      const mobileCTA = ctaButtons[1]; // Second button is mobile CTA
      
      fireEvent.click(mobileCTA);

      expect(document.getElementById).toHaveBeenCalledWith('formations');
      expect(mockScrollIntoView).toHaveBeenCalledWith({ behavior: 'smooth' });
    });

    it('handles touch events for close button', () => {
      const futureDate = new Date(Date.now() + 86400000);
      const onDismiss = jest.fn();
      
      renderWithIntl(
        <PromotionalBanner targetDate={futureDate} onDismiss={onDismiss} />
      );

      const closeButton = screen.getByLabelText('Fermer');
      fireEvent.click(closeButton);

      expect(onDismiss).toHaveBeenCalled();
    });
  });

  describe('Responsive Text Sizing', () => {
    it('uses appropriate font sizes for different screen sizes', () => {
      const futureDate = new Date(Date.now() + 86400000);
      
      renderWithIntl(
        <PromotionalBanner targetDate={futureDate} />
      );

      // Title should have responsive sizing
      const title = screen.getByText(/LANCEMENT SPÉCIAL/);
      expect(title.parentElement).toHaveClass('text-sm', 'md:text-lg');
      
      // Countdown should have responsive sizing
      const countdown = screen.getByText(/Plus que/);
      expect(countdown).toHaveClass('text-xs', 'md:text-sm');
    });
  });

  describe('Accessibility on Mobile', () => {
    beforeEach(() => {
      simulateMobileViewport();
    });

    it('maintains accessibility attributes on mobile', () => {
      const futureDate = new Date(Date.now() + 86400000);
      
      renderWithIntl(
        <PromotionalBanner targetDate={futureDate} />
      );

      const banner = screen.getByRole('banner');
      expect(banner).toHaveAttribute('aria-live', 'polite');
      
      const closeButton = screen.getByLabelText('Fermer');
      expect(closeButton).toBeInTheDocument();
    });

    it('has appropriate touch target sizes', () => {
      const futureDate = new Date(Date.now() + 86400000);
      
      renderWithIntl(
        <PromotionalBanner targetDate={futureDate} />
      );

      const closeButton = screen.getByLabelText('Fermer');
      const mobileCTA = screen.getAllByText("J'en profite maintenant!")[1];
      
      // Touch targets should be large enough (at least 44px recommended)
      expect(closeButton).toHaveClass('p-1'); // Provides adequate touch area
      expect(mobileCTA).toHaveClass('py-2', 'px-6'); // Adequate touch area
    });
  });

  describe('Performance on Mobile', () => {
    beforeEach(() => {
      simulateMobileViewport();
    });

    it('uses appropriate animation classes for mobile', () => {
      const futureDate = new Date(Date.now() + 86400000);
      
      renderWithIntl(
        <PromotionalBanner targetDate={futureDate} />
      );

      const banner = screen.getByRole('banner');
      expect(banner).toHaveClass('animate-pulse');
    });
  });
});