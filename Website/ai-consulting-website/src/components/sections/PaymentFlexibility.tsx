'use client'

import { useEffect } from 'react'
import { useTranslations } from 'next-intl'
import { usePromotionalAnalytics } from '@/hooks/usePromotionalAnalytics'
import { 
  CreditCard, 
  Calendar, 
  Clock
} from 'lucide-react'

interface PaymentFlexibilityProps {
  formationName: 'kickstart' | 'architecte' | 'avance'
  price: number
  originalPrice?: number
  isPromotional?: boolean
  className?: string
  theme?: 'light' | 'dark'
  stripeUrl?: string
}

export function PaymentFlexibility({ 
  formationName, 
  price, 
  originalPrice,
  isPromotional = false,
  className = '',
  theme = 'light',
  stripeUrl
}: PaymentFlexibilityProps) {
  const tPromo = useTranslations('promotion.banner')
  const { trackPricingView } = usePromotionalAnalytics()

  // Track promotional pricing view on mount
  useEffect(() => {
    trackPricingView(formationName, isPromotional);
  }, [formationName, isPromotional, trackPricingView]);

  // Theme-based styling with yellow and gray
  const containerStyles = theme === 'dark' 
    ? "bg-gradient-to-r from-yellow-900/30 to-gray-900/40 border-l-4 border-yellow-400 rounded-r-xl p-4 shadow-lg backdrop-blur-sm border border-yellow-400/20"
    : "bg-gradient-to-r from-yellow-50 to-gray-50 border-l-4 border-yellow-500 rounded-r-xl p-4 shadow-sm"

  return (
    <div className={`payment-flexibility ${className}`}>
      <div className={containerStyles}>
        <div className="text-center">
          {/* Promotional Pricing Display */}
          {isPromotional && originalPrice && (
            <div className="mb-3">
              <div className="flex items-center justify-center gap-2 mb-1">
                <span className="text-xs font-bold text-white bg-red-500 px-2 py-1 rounded-full">
                  🔥 -40%
                </span>
                <span className={theme === 'dark' 
                  ? "text-sm text-yellow-300 font-medium" 
                  : "text-sm text-gray-700 font-medium"
                }>
                  {tPromo('savings')} {originalPrice - price}€!
                </span>
              </div>
              <div className="flex items-center justify-center gap-3">
                <span className={theme === 'dark' 
                  ? "text-sm text-gray-400 line-through" 
                  : "text-sm text-gray-500 line-through"
                }>
                  {originalPrice}€
                </span>
                <span className={theme === 'dark' 
                  ? "text-lg font-bold text-yellow-400" 
                  : "text-lg font-bold text-gray-700"
                }>
                  {price}€
                </span>
              </div>
            </div>
          )}
          
          {/* Stripe CTA Button */}
          {stripeUrl && (
            <a 
              href={stripeUrl}
              className={theme === 'dark' 
                ? "inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold bg-yellow-500 text-gray-900 hover:bg-yellow-400 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg mb-3"
                : "inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold bg-gray-800 text-white hover:bg-gray-700 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg mb-3"
              }
            >
              Commencer maintenant
            </a>
          )}
          
          {/* Minimal payment info */}
          <p className={theme === 'dark' 
            ? "text-xs text-gray-300" 
            : "text-xs text-gray-600"
          }>
            Paiement échelonné disponible - <a href="mailto:hello@new-code.ca" className={theme === 'dark' 
              ? "text-yellow-400 hover:text-yellow-300" 
              : "text-gray-700 hover:text-gray-900"
            }>contactez-nous</a>
          </p>
        </div>
      </div>
    </div>
  )
}