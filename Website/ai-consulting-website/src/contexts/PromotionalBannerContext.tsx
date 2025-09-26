'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

interface PromotionalBannerContextType {
  isBannerVisible: boolean;
  setBannerVisible: (visible: boolean) => void;
}

const PromotionalBannerContext = createContext<PromotionalBannerContextType | undefined>(undefined);

export function PromotionalBannerProvider({ children }: { children: React.ReactNode }) {
  const [isBannerVisible, setIsBannerVisible] = useState(true); // Default to true

  const setBannerVisible = (visible: boolean) => {
    setIsBannerVisible(visible);
  };

  return (
    <PromotionalBannerContext.Provider value={{ isBannerVisible, setBannerVisible }}>
      {children}
    </PromotionalBannerContext.Provider>
  );
}

export function usePromotionalBannerContext() {
  const context = useContext(PromotionalBannerContext);
  if (context === undefined) {
    throw new Error('usePromotionalBannerContext must be used within a PromotionalBannerProvider');
  }
  return context;
}