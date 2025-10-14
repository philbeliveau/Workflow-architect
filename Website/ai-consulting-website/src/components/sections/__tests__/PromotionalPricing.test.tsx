import React from 'react';
import { render, screen } from '@testing-library/react';
import { NextIntlClientProvider } from 'next-intl';
import { PromotionalPricing, FORMATION_PRICING } from '../PromotionalPricing';

const frenchMessages = {
  promotion: {
    banner: {
      savings: 'Économisez',
      originalPrice: 'Prix original:',
      promoPrice: 'Prix promotionnel:'
    }
  }
};

const englishMessages = {
  promotion: {
    banner: {
      savings: 'Save',
      originalPrice: 'Original price:',
      promoPrice: 'Promotional price:'
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

describe('PromotionalPricing', () => {
  describe('Formation Pricing Constants', () => {
    it('has correct kickstart formation pricing configuration', () => {
      expect(FORMATION_PRICING.kickstart).toEqual({
        id: 'kickstart',
        originalPrice: 280,
        currency: '€',
        discount: 40,
        paymentOptions: 'payable en 3x'
      });
    });

    it('has correct architecte formation pricing configuration', () => {
      expect(FORMATION_PRICING.architecte).toEqual({
        id: 'architecte',
        originalPrice: 700,
        currency: '€',
        discount: 40,
        paymentOptions: undefined
      });
    });
  });

  describe('Promotional Pricing Display', () => {
    it('displays promotional pricing correctly for kickstart formation', () => {
      const kickstartTier = FORMATION_PRICING.kickstart;
      
      renderWithIntl(
        <PromotionalPricing 
          tier={kickstartTier}
          isActive={true}
          showOriginalPrice={true}
        />
      );

      // Check discount badge
      expect(screen.getByText('🔥 -40%')).toBeInTheDocument();
      
      // Check original price with strikethrough
      expect(screen.getByText(/Prix original: 280€/)).toBeInTheDocument();
      
      // Check promotional price (280 * 0.6 = 168)
      expect(screen.getByText(/Prix promotionnel: 168€/)).toBeInTheDocument();
      
      // Check savings amount
      expect(screen.getByText(/Économisez 112€!/)).toBeInTheDocument();
      
      // Check payment options
      expect(screen.getByText('(payable en 3x)')).toBeInTheDocument();
    });

    it('displays promotional pricing correctly for architecte formation', () => {
      const architecteTier = FORMATION_PRICING.architecte;
      
      renderWithIntl(
        <PromotionalPricing 
          tier={architecteTier}
          isActive={true}
          showOriginalPrice={true}
        />
      );

      // Check discount badge
      expect(screen.getByText('🔥 -40%')).toBeInTheDocument();
      
      // Check original price with strikethrough
      expect(screen.getByText(/Prix original: 700€/)).toBeInTheDocument();

      // Check promotional price (700 * 0.6 = 420)
      expect(screen.getByText(/Prix promotionnel: 420€/)).toBeInTheDocument();

      // Check savings amount
      expect(screen.getByText(/Économisez 280€!/)).toBeInTheDocument();
      
      // No payment options for architecte
      expect(screen.queryByText(/payable/)).not.toBeInTheDocument();
    });

    it('displays regular pricing when promotional is inactive', () => {
      const kickstartTier = FORMATION_PRICING.kickstart;
      
      renderWithIntl(
        <PromotionalPricing 
          tier={kickstartTier}
          isActive={false}
          showOriginalPrice={true}
        />
      );

      // Should not show promotional elements
      expect(screen.queryByText('🔥 -40%')).not.toBeInTheDocument();
      expect(screen.queryByText(/Prix promotionnel:/)).not.toBeInTheDocument();
      expect(screen.queryByText(/Économisez/)).not.toBeInTheDocument();
      
      // Should show regular price
      expect(screen.getByText('280€')).toBeInTheDocument();
    });

    it('hides original price when showOriginalPrice is false', () => {
      const kickstartTier = FORMATION_PRICING.kickstart;
      
      renderWithIntl(
        <PromotionalPricing 
          tier={kickstartTier}
          isActive={true}
          showOriginalPrice={false}
        />
      );

      // Should not show original price
      expect(screen.queryByText(/Prix original:/)).not.toBeInTheDocument();
      
      // Should still show promotional price and discount
      expect(screen.getByText('🔥 -40%')).toBeInTheDocument();
      expect(screen.getByText(/Prix promotionnel: 168€/)).toBeInTheDocument();
    });

    it('renders with English translations', () => {
      const kickstartTier = FORMATION_PRICING.kickstart;
      
      renderWithIntl(
        <PromotionalPricing 
          tier={kickstartTier}
          isActive={true}
          showOriginalPrice={true}
        />,
        'en'
      );

      // Check English translations
      expect(screen.getByText(/Original price: 280€/)).toBeInTheDocument();
      expect(screen.getByText(/Promotional price: 168€/)).toBeInTheDocument();
      expect(screen.getByText(/Save 112€!/)).toBeInTheDocument();
    });
  });

  describe('Price Calculations', () => {
    it('calculates correct promotional prices', () => {
      // Kickstart: 280 * 0.6 = 168
      expect(Math.round(FORMATION_PRICING.kickstart.originalPrice * 0.6)).toBe(168);

      // Architecte: 700 * 0.6 = 420
      expect(Math.round(FORMATION_PRICING.architecte.originalPrice * 0.6)).toBe(420);
    });

    it('calculates correct savings amounts', () => {
      // Kickstart savings: 280 - 168 = 112
      const kickstartSavings = FORMATION_PRICING.kickstart.originalPrice -
        Math.round(FORMATION_PRICING.kickstart.originalPrice * 0.6);
      expect(kickstartSavings).toBe(112);

      // Architecte savings: 700 - 420 = 280
      const architecteSavings = FORMATION_PRICING.architecte.originalPrice -
        Math.round(FORMATION_PRICING.architecte.originalPrice * 0.6);
      expect(architecteSavings).toBe(280);
    });
  });
});