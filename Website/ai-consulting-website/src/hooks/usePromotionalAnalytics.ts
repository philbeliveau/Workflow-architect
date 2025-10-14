'use client';

import { useCallback, useEffect } from 'react';

interface PromotionalAnalyticsEvent {
  event: string;
  properties: Record<string, any>;
  timestamp: string;
}

interface UsePromotionalAnalyticsReturn {
  trackBannerView: () => void;
  trackBannerClick: (action: string) => void;
  trackBannerDismiss: (method: 'close' | 'timeout') => void;
  trackPricingView: (formation: string, isPromotional: boolean) => void;
  trackCountdownExpired: () => void;
}

/**
 * Hook for tracking promotional campaign analytics
 * 
 * Features:
 * - Banner engagement tracking
 * - Pricing interaction tracking  
 * - Countdown timer analytics
 * - Browser console logging for development
 * - Extensible for production analytics integration
 */
export function usePromotionalAnalytics(): UsePromotionalAnalyticsReturn {
  
  // Generic event tracking function
  const trackEvent = useCallback((event: string, properties: Record<string, any> = {}) => {
    const analyticsEvent: PromotionalAnalyticsEvent = {
      event,
      properties: {
        ...properties,
        campaign: 'launch-promotion-40-percent',
        source: 'promotional-banner',
        url: typeof window !== 'undefined' ? window.location.href : '',
        userAgent: typeof window !== 'undefined' ? window.navigator.userAgent : '',
        viewport: typeof window !== 'undefined' ? {
          width: window.innerWidth,
          height: window.innerHeight
        } : null
      },
      timestamp: new Date().toISOString()
    };

    // Development logging
    if (process.env.NODE_ENV === 'development') {
      console.group(`📊 Promotional Analytics: ${event}`);
      console.log('Event:', event);
      console.log('Properties:', analyticsEvent.properties);
      console.log('Timestamp:', analyticsEvent.timestamp);
      console.groupEnd();
    }

    // In production, this would integrate with analytics services like:
    // - Google Analytics 4
    // - Mixpanel
    // - Amplitude
    // - Custom analytics API
    
    // Example production integrations:
    if (typeof window !== 'undefined') {
      // Google Analytics 4 example
      if ((window as any).gtag) {
        (window as any).gtag('event', event, {
          custom_campaign: 'launch-promotion',
          custom_properties: JSON.stringify(analyticsEvent.properties)
        });
      }

      // Mixpanel example
      if ((window as any).mixpanel) {
        (window as any).mixpanel.track(event, analyticsEvent.properties);
      }

      // Custom analytics API example
      // fetch('/api/analytics', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(analyticsEvent)
      // }).catch(console.warn);
    }
  }, []);

  // Track banner view (impression)
  const trackBannerView = useCallback(() => {
    trackEvent('promotional_banner_viewed', {
      action: 'impression',
      campaign_type: 'discount_banner'
    });
  }, [trackEvent]);

  // Track banner clicks (CTA, links)
  const trackBannerClick = useCallback((action: string) => {
    trackEvent('promotional_banner_clicked', {
      action,
      campaign_type: 'discount_banner',
      click_type: action === 'cta' ? 'primary_cta' : 'secondary_action'
    });
  }, [trackEvent]);

  // Track banner dismissal
  const trackBannerDismiss = useCallback((method: 'close' | 'timeout') => {
    trackEvent('promotional_banner_dismissed', {
      dismiss_method: method,
      campaign_type: 'discount_banner'
    });
  }, [trackEvent]);

  // Track promotional pricing views
  const trackPricingView = useCallback((formation: string, isPromotional: boolean) => {
    trackEvent('promotional_pricing_viewed', {
      formation_type: formation,
      is_promotional: isPromotional,
      pricing_type: isPromotional ? 'discounted' : 'regular'
    });
  }, [trackEvent]);

  // Track countdown expiration
  const trackCountdownExpired = useCallback(() => {
    trackEvent('promotional_countdown_expired', {
      campaign_type: 'discount_banner',
      expiration_reason: 'deadline_reached'
    });
  }, [trackEvent]);

  return {
    trackBannerView,
    trackBannerClick,
    trackBannerDismiss,
    trackPricingView,
    trackCountdownExpired
  };
}

/**
 * Utility function to track page views with promotional context
 */
export function trackPromotionalPageView(pageName: string, hasPromotionalContent: boolean) {
  // Early return if not in browser environment
  if (typeof window === 'undefined') return;

  const event = {
    event: 'promotional_page_view',
    properties: {
      page_name: pageName,
      has_promotional_content: hasPromotionalContent,
      campaign: 'launch-promotion-40-percent',
      timestamp: new Date().toISOString(),
      url: typeof window !== 'undefined' ? window.location.href : ''
    }
  };

  if (process.env.NODE_ENV === 'development') {
    console.log('📄 Page View with Promotional Context:', event);
  }

  // Production analytics integration would go here
}