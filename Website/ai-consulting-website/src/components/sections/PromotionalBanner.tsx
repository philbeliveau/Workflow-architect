'use client';

import React, { useState, useCallback, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import { X } from 'lucide-react';
import { useStrictModeSafeTimer } from '@/hooks/useStrictModeSafeTimer';
import { validateTimerConfig } from '@/utils/timerValidation';
import { usePromotionalBannerState } from '@/hooks/usePromotionalBannerState';
import { usePromotionalAnalytics } from '@/hooks/usePromotionalAnalytics';
import { usePromotionalBannerContext } from '@/contexts/PromotionalBannerContext';

interface CountdownTime {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

interface PromotionalBannerProps {
  className?: string;
  targetDate?: Date;
  onDismiss?: () => void;
}

/**
 * Site-wide promotional banner with countdown timer
 * Features:
 * - French-first internationalization
 * - Secure countdown timer with race condition protection
 * - Dismissible but persistent until deadline
 * - Mobile responsive design
 * - Automatic removal after deadline
 */
export function PromotionalBanner({
  className = '',
  targetDate = new Date('2025-10-05T23:59:59-04:00'), // Default target date
  onDismiss
}: PromotionalBannerProps) {
  const t = useTranslations('promotion.banner');
  
  // Stabilize targetDate to prevent infinite re-renders
  const targetTimestamp = targetDate.getTime();
  
  // Add hydration state to prevent mismatch
  const [isHydrated, setIsHydrated] = useState(false);
  const [timeLeft, setTimeLeft] = useState<CountdownTime | null>(null);
  const [isExpired, setIsExpired] = useState(false);

  // Handle hydration
  useEffect(() => {
    setIsHydrated(true);
  }, []);
  
  // Use persistent banner state hook
  const { isDismissed, dismissBanner, shouldShow } = usePromotionalBannerState(targetDate);
  
  // Use analytics tracking hook
  const { trackBannerView, trackBannerClick, trackBannerDismiss, trackCountdownExpired } = usePromotionalAnalytics();

  // Use banner context to communicate visibility
  const { setBannerVisible } = usePromotionalBannerContext();

  // Update context when banner visibility changes, but only after hydration
  useEffect(() => {
    if (!isHydrated) return;
    
    const bannerIsVisible = !isExpired && shouldShow;
    setBannerVisible(bannerIsVisible);
  }, [isHydrated, isExpired, shouldShow, setBannerVisible]);


  // Calculate time remaining until deadline
  const calculateTimeLeft = useCallback((): CountdownTime | null => {
    const now = new Date().getTime();
    const difference = targetTimestamp - now;

    if (difference <= 0) {
      setIsExpired(true);
      trackCountdownExpired();
      return null;
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
      seconds: Math.floor((difference % (1000 * 60)) / 1000)
    };
  }, [targetTimestamp, trackCountdownExpired]);

  // Timer callback with transition guards
  const updateCountdown = useCallback(() => {
    const newTimeLeft = calculateTimeLeft();
    setTimeLeft(newTimeLeft);
  }, [calculateTimeLeft]);

  // Track banner view on mount
  useEffect(() => {
    if (shouldShow && !isExpired) {
      trackBannerView();
    }
  }, [shouldShow, isExpired, trackBannerView]);

  // Validate timer configuration for development
  useEffect(() => {
    validateTimerConfig(
      'promotional-countdown', 
      1000, 
      'PromotionalBanner'
    );
  }, []);

  // Initialize countdown timer with safeguards
  const { start, stop } = useStrictModeSafeTimer(
    'promotional-countdown',
    1000, // Update every second
    updateCountdown,
    false // Don't auto-start
  );

  // Start timer on mount, stop when expired or dismissed
  useEffect(() => {
    if (!isExpired && shouldShow) {
      // Initial calculation
      updateCountdown();
      start();
    } else {
      stop();
    }

    return () => {
      stop();
    };
  }, [isExpired, shouldShow, start, stop, updateCountdown]);

  // Handle banner dismissal
  const handleDismiss = useCallback(() => {
    trackBannerDismiss('close');
    dismissBanner();
    stop();
    onDismiss?.();
  }, [trackBannerDismiss, dismissBanner, stop, onDismiss]);

  // Don't render if expired or dismissed, but wait for hydration first
  if (!isHydrated) {
    // During SSR and initial client render, always render to prevent hydration mismatch
    return (
      <div 
        className={`
          fixed top-0 left-0 w-full bg-gradient-to-r from-yellow-300 to-yellow-200 
          text-slate-900 py-2 px-4 md:py-3 md:px-6
          shadow-sm border-b border-yellow-400
          z-[99999]
          ${className}
        `}
        role="banner"
        aria-live="polite"
        suppressHydrationWarning
        style={{ visibility: 'hidden' }}
      />
    );
  }

  // After hydration, check if we should show
  if (isExpired || !shouldShow) {
    return null;
  }

  // Format countdown display
  const formatCountdown = () => {
    if (!timeLeft) return t('countdown.expired');
    
    const parts = [];
    if (timeLeft.days > 0) parts.push(`${timeLeft.days} ${t('countdown.days')}`);
    if (timeLeft.hours > 0) parts.push(`${timeLeft.hours} ${t('countdown.hours')}`);
    if (timeLeft.minutes > 0) parts.push(`${timeLeft.minutes} ${t('countdown.minutes')}`);
    if (timeLeft.seconds > 0) parts.push(`${timeLeft.seconds} ${t('countdown.seconds')}`);
    
    return `${t('countdown.prefix')} ${parts.join(' ')} ${t('countdown.suffix')}`;
  };

  return (
    <div 
      className={`
        fixed top-0 left-0 w-full bg-gradient-to-r from-yellow-300 to-yellow-200 
        text-slate-900 py-2 px-4 md:py-3 md:px-6
        shadow-sm border-b border-yellow-400
        z-[99999]
        ${className}
      `}
      role="banner"
      aria-live="polite"
      suppressHydrationWarning
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Main content */}
        <div className="flex-1 text-center md:text-left">
          <div className="font-medium text-sm md:text-base mb-1">
            {t('title')}
          </div>
          
          {/* Static date display */}
          <div className="text-xs md:text-sm text-slate-700">
            {t('deadline')}
          </div>
        </div>

        {/* CTA Button - Hidden on mobile for space */}
        <div className="hidden md:block ml-4">
          <button
            onClick={() => {
              trackBannerClick('cta');
              // Scroll to formation sections or open booking
              const formationSection = document.getElementById('formations');
              formationSection?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="
              bg-slate-900 text-white font-medium py-2 px-4 rounded-md
              hover:bg-slate-800 transition-colors duration-200
              text-sm whitespace-nowrap border border-slate-700
            "
          >
            {t('cta')}
          </button>
        </div>

        {/* Dismiss button */}
        <button
          onClick={handleDismiss}
          className="
            ml-2 p-1 hover:bg-yellow-400 rounded-full transition-colors
            flex-shrink-0
          "
          aria-label={t('close')}
        >
          <X size={16} className="text-slate-700 hover:text-slate-900" />
        </button>
      </div>

      {/* Mobile CTA - Full width at bottom */}
      <div className="block md:hidden mt-2 text-center">
        <button
          onClick={() => {
            trackBannerClick('cta-mobile');
            const formationSection = document.getElementById('formations');
            formationSection?.scrollIntoView({ behavior: 'smooth' });
          }}
          className="
            bg-slate-900 text-white font-medium py-2 px-6 rounded-md
            hover:bg-slate-800 transition-colors duration-200
            text-sm border border-slate-700
          "
        >
          {t('cta')}
        </button>
      </div>
    </div>
  );
}