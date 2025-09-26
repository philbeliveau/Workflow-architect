/**
 * Utility to reset promotional banner state
 * Use this in browser console if the banner is not showing due to stored dismissal state
 */
export function resetPromotionalBanner() {
  if (typeof window !== 'undefined') {
    localStorage.removeItem('promotional-banner-state');
    console.log('✅ Promotional banner state reset. Refresh the page to see the banner.');
  }
}

// Make it available globally for debugging
if (typeof window !== 'undefined') {
  (window as any).resetPromotionalBanner = resetPromotionalBanner;
}