'use client';

import React, { useState, useEffect, useCallback, memo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { Menu, X, Zap, Globe } from 'lucide-react';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

const Navigation: React.FC = memo(() => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const handleScroll = useCallback(() => {
    setIsScrolled(window.scrollY > 50);
  }, []);

  const toggleMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(prev => !prev);
  }, []);

  const closeMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(false);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  // Always use the same navigation items for consistency
  const getNavItems = () => {
    if (pathname === '/') {
      return [
        { name: 'Accueil', href: '#accueil', isActive: true },
        { name: 'Parcours', href: '#parcours', isActive: false },
        { name: 'Problème', href: '#probleme', isActive: false },
        { name: 'Solution', href: '#solution', isActive: false },
        { name: 'Contact', href: '#contact', isActive: false }
      ];
    } else {
      // For specialized pages, show main sections but link back to home page sections
      return [
        { name: 'Accueil', href: '/#accueil', isActive: false },
        { name: 'Parcours', href: '/#parcours', isActive: pathname === '/developers' || pathname === '/business' },
        { name: 'Problème', href: '/#probleme', isActive: false },
        { name: 'Solution', href: '/#solution', isActive: false },
        { name: 'Contact', href: '/#contact', isActive: false }
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
                src="/images/logo-newcode.jpeg"
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

          {/* CTA Button */}
          <div className="hidden md:flex items-center">
            <Button variant="primary" size="md" href="/book-demo">
              Évaluation Gratuite
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-red transition-colors duration-300 ${
              isScrolled ? 'text-text-light' : 'text-text-light'
            }`}
            onClick={toggleMobileMenu}
            aria-label={isMobileMenuOpen ? "Fermer le menu mobile" : "Ouvrir le menu mobile"}
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
              aria-label="Menu mobile"
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
                  className="pt-4 border-t border-primary-blue/30"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  <Button 
                    variant="primary" 
                    size="md" 
                    href="/book-demo"
                    className="w-full"
                  >
                    Évaluation Gratuite
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