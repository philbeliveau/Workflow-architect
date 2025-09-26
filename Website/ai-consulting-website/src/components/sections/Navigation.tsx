'use client';

import React, { useState, useEffect, useCallback, memo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { Menu, X, Zap, Globe } from 'lucide-react';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import Link from 'next/link';
import { useTranslations, useLocale } from 'next-intl';
import { usePromotionalBannerContext } from '@/contexts/PromotionalBannerContext';

const Navigation: React.FC = memo(() => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const t = useTranslations('navigation');
  const locale = useLocale();
  const { isBannerVisible } = usePromotionalBannerContext();
  const [isHydrated, setIsHydrated] = useState(false);

  // Handle hydration
  useEffect(() => {
    setIsHydrated(true);
  }, []);

  const handleScroll = useCallback(() => {
    setIsScrolled(window.scrollY > 50);
  }, []);

  const toggleMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(prev => !prev);
  }, []);

  const closeMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(false);
  }, []);

  const switchLanguage = useCallback((newLocale: string) => {
    // Get the path segments
    const pathSegments = pathname.split('/').filter(Boolean);
    
    // Check if first segment is a locale (fr or en)
    const currentLocaleInPath = ['fr', 'en'].includes(pathSegments[0]) ? pathSegments[0] : null;
    
    // Get the path without locale
    let basePath = '';
    if (currentLocaleInPath) {
      basePath = '/' + pathSegments.slice(1).join('/');
    } else {
      basePath = pathname;
    }
    
    // Clean up the base path
    if (basePath === '/' || basePath === '') {
      basePath = '';
    }
    
    // Build the new path
    const newPath = `/${newLocale}${basePath}`;
    router.push(newPath);
  }, [pathname, router]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  // Always use the same navigation items for consistency
  const getNavItems = () => {
    const currentPath = pathname.replace(`/${locale}`, '') || '/';
    // Use locale-appropriate anchors
    const anchors = locale === 'fr' 
      ? { home: '#accueil', tracks: '#parcours', problem: '#probleme', solution: '#solution', contact: '#contact' }
      : { home: '#home', tracks: '#tracks', problem: '#problem', solution: '#solution', contact: '#contact' };
      
    if (currentPath === '/') {
      return [
        { name: t('home'), href: anchors.home, isActive: true },
        { name: t('parcours'), href: '#track-selection', isActive: false },
        { name: t('blog'), href: '/blog', isActive: false },
        { name: t('contact'), href: anchors.contact, isActive: false }
      ];
    } else {
      // For specialized pages, show main sections but link back to home page sections
      return [
        { name: t('home'), href: `/#accueil`, isActive: false },
        { name: t('parcours'), href: `/#track-selection`, isActive: false },
        { name: t('blog'), href: '/blog', isActive: currentPath.includes('/blog') },
        { name: t('contact'), href: `/#contact`, isActive: false }
      ];
    }
  };
  
  const navItems = getNavItems();

  return (
    <header
      className={`fixed ${!isHydrated || isBannerVisible ? 'top-16 md:top-20' : 'top-0'} left-0 right-0 z-[100] bg-background-dark-alt/95 backdrop-blur-md shadow-sm border-b border-primary-blue/20 transition-all duration-300 ease-in-out`}
      suppressHydrationWarning
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/">
            <div className="flex items-center hover:opacity-90 transition-opacity duration-200">
              <Image
                src="/newcode-logo.jpeg"
                alt="NEWCODE Logo"
                width={120}
                height={48}
                className="h-12 w-auto object-contain"
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item, index) => {
              const isExternal = item.href.startsWith('#') || item.href.startsWith('/#');
              const Component = isExternal ? 'a' : Link;
              const linkProps = isExternal ? { href: item.href } : { href: item.href };
              
              return (
                <Component key={item.name} {...linkProps}>
                  <div
                    className={`transition-colors duration-200 relative group cursor-pointer ${
                      item.isActive 
                        ? 'text-primary-blue font-semibold' 
                        : 'text-text-light hover:text-primary-blue'
                    }`}
                  >
                    {item.name}
                    <div
                      className={`absolute -bottom-1 left-0 h-0.5 bg-accent-red transition-all duration-300 ${
                        item.isActive ? 'w-full' : 'w-0 group-hover:w-full'
                      }`}
                    />
                  </div>
                </Component>
              );
            })}
          </div>

          {/* Language Switcher & CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <div className="flex items-center gap-2">
              <Globe className="w-4 h-4 text-text-secondary" />
              <button
                onClick={() => switchLanguage(locale === 'fr' ? 'en' : 'fr')}
                className="text-sm text-text-secondary hover:text-primary-blue transition-colors duration-200 uppercase font-medium"
              >
                {locale === 'fr' ? 'EN' : 'FR'}
              </button>
            </div>
            <Button variant="primary" size="md" href="/book-demo">
              {locale === 'fr' ? 'Évaluation Gratuite' : 'Free Assessment'}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-red transition-colors duration-300 ${
              isScrolled ? 'text-text-light' : 'text-text-light'
            }`}
            onClick={toggleMobileMenu}
            aria-label={isMobileMenuOpen ? (locale === 'fr' ? "Fermer le menu mobile" : "Close mobile menu") : (locale === 'fr' ? "Ouvrir le menu mobile" : "Open mobile menu")}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              id="mobile-menu"
              className="md:hidden absolute top-full left-0 right-0 bg-background-dark-alt/99 backdrop-blur-lg border-b border-primary-blue/30 shadow-lg"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2, ease: "easeInOut" }}
              role="navigation"
              aria-label={locale === 'fr' ? "Menu mobile" : "Mobile menu"}
            >
              <div className="px-4 sm:px-6 py-4 space-y-4">
                {navItems.map((item, index) => {
                  const isExternal = item.href.startsWith('#') || item.href.startsWith('/#');
                  const Component = isExternal ? 'a' : Link;
                  const linkProps = isExternal ? { href: item.href } : { href: item.href };
                  
                  return (
                    <Component key={item.name} {...linkProps}>
                      <div
                        className={`block transition-colors duration-200 py-2 cursor-pointer ${
                          item.isActive 
                            ? 'text-primary-blue font-semibold' 
                            : 'text-text-light hover:text-primary-blue'
                        }`}
                        onClick={closeMobileMenu}
                      >
                        {item.name}
                      </div>
                    </Component>
                  );
                })}
                <div className="pt-4 border-t border-primary-blue/30 space-y-3">
                  <div className="flex items-center justify-center gap-2 py-2">
                    <Globe className="w-4 h-4 text-text-secondary" />
                    <button
                      onClick={() => switchLanguage(locale === 'fr' ? 'en' : 'fr')}
                      className="text-sm text-text-secondary hover:text-primary-blue transition-colors duration-200 uppercase font-medium"
                    >
                      {locale === 'fr' ? 'EN' : 'FR'}
                    </button>
                  </div>
                  <Button 
                    variant="primary" 
                    size="md" 
                    href="/book-demo"
                    className="w-full"
                  >
                    {locale === 'fr' ? 'Évaluation Gratuite' : 'Free Assessment'}
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
});

Navigation.displayName = 'Navigation';

export default Navigation;
