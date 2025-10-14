'use client';

import React from 'react';
import { useTranslations } from 'next-intl';

interface PricingTier {
  id: string;
  originalPrice: number;
  currency: string;
  discount: number;
  paymentOptions?: string;
}

interface PromotionalPricingProps {
  tier: PricingTier;
  className?: string;
  showOriginalPrice?: boolean;
  isActive?: boolean;
}

/**
 * Promotional pricing display component
 * Shows original price with strikethrough and promotional price with discount
 */
export function PromotionalPricing({
  tier,
  className = '',
  showOriginalPrice = true,
  isActive = true
}: PromotionalPricingProps) {
  const t = useTranslations('promotion.banner');
  
  const originalPrice = tier.originalPrice;
  const discountAmount = originalPrice * (tier.discount / 100);
  const promotionalPrice = originalPrice - discountAmount;

  return (
    <div className={`promotional-pricing ${className}`}>
      {isActive && (
        <div className="promotional-badge mb-2">
          <span className="inline-flex items-center px-3 py-1 text-xs font-bold text-white bg-red-500 rounded-full">
            🔥 -{tier.discount}%
          </span>
        </div>
      )}

      <div className="pricing-display">
        {showOriginalPrice && isActive && (
          <div className="original-price text-sm text-gray-500">
            <span className="line-through">
              {t('originalPrice')} {originalPrice}{tier.currency}
            </span>
          </div>
        )}
        
        <div className="promotional-price">
          <span className={`text-2xl font-bold ${isActive ? 'text-red-600' : 'text-gray-900'}`}>
            {isActive && <span className="text-sm">{t('promoPrice')} </span>}
            {Math.round(isActive ? promotionalPrice : originalPrice)}{tier.currency}
          </span>
        </div>

        {isActive && discountAmount > 0 && (
          <div className="savings-highlight text-sm text-green-600 font-medium mt-1">
            {t('savings')} {Math.round(discountAmount)}{tier.currency}!
          </div>
        )}

        {tier.paymentOptions && (
          <div className="payment-options text-xs text-gray-600 mt-1">
            ({tier.paymentOptions})
          </div>
        )}
      </div>
    </div>
  );
}

/**
 * Formation-specific promotional pricing configurations
 */
export const FORMATION_PRICING = {
  kickstart: {
    id: 'kickstart',
    originalPrice: 280,
    currency: '€',
    discount: 40,
    paymentOptions: 'payable en 3x'
  },
  architecte: {
    id: 'architecte',
    originalPrice: 700,
    currency: '€',
    discount: 40,
    paymentOptions: undefined
  }
} as const;