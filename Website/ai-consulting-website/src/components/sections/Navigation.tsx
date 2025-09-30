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
      className="fixed left-0 right-0 z-[100] transition-all duration-300"
      style={{
        top: isBannerVisible ? '56px' : '0px',
        background: 'var(--navigation-background)',
        backdropFilter: 'blur(12px)',
        borderBottom: '1px solid rgba(0, 0, 0, 0.1)'
      }}
    >
      <nav className="max-w-6xl mx-auto px-6 py-6">
        <div className="flex items-center justify-between">
          {/* Minimal Logo */}
          <Link href="/">
            <div
              className="font-light text-xl tracking-tight hover:opacity-80 transition-opacity"
              style={{
                color: '#000000',
                fontFamily: 'Inter, system-ui, sans-serif'
              }}
            >
              NEWCODE
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="#track-selection" className="text-sm font-medium text-black hover:opacity-70 transition-opacity">
              {locale === 'fr' ? 'Parcours' : 'Tracks'}
            </Link>
            <Link href="/blog" className="text-sm font-medium text-black hover:opacity-70 transition-opacity">
              Blog
            </Link>
            <Link href="#contact" className="text-sm font-medium text-black hover:opacity-70 transition-opacity">
              Contact
            </Link>

            {/* Language Toggle */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => switchLanguage('fr')}
                className={`text-sm font-medium transition-opacity ${locale === 'fr' ? 'text-black' : 'text-black/50 hover:text-black/70'}`}
              >
                FR
              </button>
              <span className="text-black/30">|</span>
              <button
                onClick={() => switchLanguage('en')}
                className={`text-sm font-medium transition-opacity ${locale === 'en' ? 'text-black' : 'text-black/50 hover:text-black/70'}`}
              >
                EN
              </button>
            </div>
          </div>

          {/* Single CTA */}
          <div className="hidden md:block">
            <Button
              variant="primary"
              size="md"
              href="#formation-overview"
              style={{
                backgroundColor: '#000000',
                color: '#FFFFFF',
                border: 'none',
                padding: '12px 24px',
                fontSize: '14px',
                fontWeight: 500,
                borderRadius: '6px'
              }}
            >
              {locale === 'fr' ? 'Démarrer' : 'Get Started'}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-black hover:opacity-70 transition-opacity"
            onClick={toggleMobileMenu}
            aria-label={isMobileMenuOpen ? (locale === 'fr' ? "Fermer le menu mobile" : "Close mobile menu") : (locale === 'fr' ? "Ouvrir le menu mobile" : "Open mobile menu")}
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Minimal Mobile Navigation */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              className="md:hidden absolute top-full left-0 right-0"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              style={{
                background: 'var(--navigation-background)',
                backdropFilter: 'blur(12px)'
              }}
            >
              <div className="px-6 py-6 space-y-4">
                <Link
                  href="#track-selection"
                  className="block text-sm font-medium text-black hover:opacity-70"
                  onClick={closeMobileMenu}
                >
                  {locale === 'fr' ? 'Parcours' : 'Tracks'}
                </Link>
                <Link
                  href="/blog"
                  className="block text-sm font-medium text-black hover:opacity-70"
                  onClick={closeMobileMenu}
                >
                  Blog
                </Link>
                <Link
                  href="#contact"
                  className="block text-sm font-medium text-black hover:opacity-70"
                  onClick={closeMobileMenu}
                >
                  Contact
                </Link>

                {/* Mobile Language Toggle */}
                <div className="flex items-center gap-4 pt-2">
                  <span className="text-sm text-black/70">Langue:</span>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => {
                        switchLanguage('fr');
                        closeMobileMenu();
                      }}
                      className={`text-sm font-medium transition-opacity ${locale === 'fr' ? 'text-black' : 'text-black/50 hover:text-black/70'}`}
                    >
                      Français
                    </button>
                    <span className="text-black/30">|</span>
                    <button
                      onClick={() => {
                        switchLanguage('en');
                        closeMobileMenu();
                      }}
                      className={`text-sm font-medium transition-opacity ${locale === 'en' ? 'text-black' : 'text-black/50 hover:text-black/70'}`}
                    >
                      English
                    </button>
                  </div>
                </div>

                <Button
                  variant="primary"
                  size="md"
                  href="#formation-overview"
                  className="w-full mt-4"
                  style={{
                    backgroundColor: '#000000',
                    color: '#FFFFFF',
                    border: 'none',
                    padding: '12px 24px',
                    fontSize: '14px',
                    fontWeight: 500,
                    borderRadius: '6px'
                  }}
                >
                  {locale === 'fr' ? 'Démarrer' : 'Get Started'}
                </Button>
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
