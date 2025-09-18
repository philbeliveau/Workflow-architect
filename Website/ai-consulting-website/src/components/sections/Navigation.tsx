'use client';

import React, { useState, useEffect, useCallback, memo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { Menu, X, Zap, Globe } from 'lucide-react';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import Link from 'next/link';
import { useTranslations, useLocale } from 'next-intl';

const Navigation: React.FC = memo(() => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const t = useTranslations('navigation');
  const locale = useLocale();

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
        { name: t('tracks'), href: anchors.tracks, isActive: false },
        { name: t('problem'), href: anchors.problem, isActive: false },
        { name: t('solution'), href: anchors.solution, isActive: false },
        { name: 'BMAD', href: '/blog/bmad-methodology', isActive: false },
        { name: t('contact'), href: anchors.contact, isActive: false }
      ];
    } else {
      // For specialized pages, show main sections but link back to home page sections
      return [
        { name: t('home'), href: `/${anchors.home}`, isActive: false },
        { name: t('tracks'), href: `/${anchors.tracks}`, isActive: currentPath === '/developers' || currentPath === '/business' },
        { name: t('problem'), href: `/${anchors.problem}`, isActive: false },
        { name: t('solution'), href: `/${anchors.solution}`, isActive: false },
        { name: 'BMAD', href: '/blog/bmad-methodology', isActive: currentPath.includes('/blog/bmad-methodology') },
        { name: t('contact'), href: `/${anchors.contact}`, isActive: false }
      ];
    }
  };
  
  const navItems = getNavItems();

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-background-dark-alt/95 backdrop-blur-lg shadow-lg border-b border-primary-blue/30' 
          : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <nav className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/">
            <motion.div
              className="flex items-center"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <Image
                src="/newcode-logo.jpeg"
                alt="NEWCODE Logo"
                width={120}
                height={48}
                className="h-12 w-auto object-contain"
              />
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item, index) => {
              const isExternal = item.href.startsWith('#') || item.href.startsWith('/#');
              const Component = isExternal ? 'a' : Link;
              const linkProps = isExternal ? { href: item.href } : { href: item.href };
              
              return (
                <Component key={item.name} {...linkProps}>
                  <motion.div
                    className={`transition-colors duration-200 relative group cursor-pointer ${
                      item.isActive 
                        ? 'text-primary-blue' 
                        : isScrolled 
                          ? 'text-text-light hover:text-primary-blue' 
                          : 'text-text-secondary hover:text-text-light'
                    }`}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    {item.name}
                    <motion.div
                      className={`absolute -bottom-1 left-0 h-0.5 bg-accent-red transition-all duration-300 ${
                        item.isActive ? 'w-full' : 'w-0 group-hover:w-full'
                      }`}
                      whileHover={{ width: "100%" }}
                    />
                  </motion.div>
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
              className="md:hidden absolute top-full left-0 right-0 bg-background-dark-alt/98 backdrop-blur-lg border-b border-primary-blue/30 shadow-lg"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              role="navigation"
              aria-label={locale === 'fr' ? "Menu mobile" : "Mobile menu"}
            >
              <div className="px-6 py-4 space-y-4">
                {navItems.map((item, index) => {
                  const isExternal = item.href.startsWith('#') || item.href.startsWith('/#');
                  const Component = isExternal ? 'a' : Link;
                  const linkProps = isExternal ? { href: item.href } : { href: item.href };
                  
                  return (
                    <Component key={item.name} {...linkProps}>
                      <motion.div
                        className={`block transition-colors duration-200 py-2 cursor-pointer ${
                          item.isActive 
                            ? 'text-primary-blue font-semibold' 
                            : 'text-text-light hover:text-primary-blue'
                        }`}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        onClick={closeMobileMenu}
                      >
                        {item.name}
                      </motion.div>
                    </Component>
                  );
                })}
                <motion.div
                  className="pt-4 border-t border-primary-blue/30 space-y-3"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
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
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
});

Navigation.displayName = 'Navigation';

export default Navigation;