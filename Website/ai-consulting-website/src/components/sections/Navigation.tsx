'use client';

import React, { useState, useEffect, useCallback, memo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { Menu, X, Zap, Globe } from 'lucide-react';
import Image from 'next/image';

const Navigation: React.FC = memo(() => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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

  const navItems = [
    { name: 'Accueil', href: '#accueil' },
    { name: 'Parcours', href: '#parcours' },
    { name: 'Problème', href: '#probleme' },
    { name: 'Solution', href: '#solution' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-accent-panels/95 backdrop-blur-lg shadow-lg border-b border-primary-dark/30' 
          : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <nav className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div
            className="flex items-center gap-3"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <Image
              src="/newcode.png"
              alt="NEWCODE Logo"
              width={48}
              height={48}
              className="w-12 h-12 object-contain"
            />
            <span className={`text-xl font-bold transition-colors duration-300 ${
              isScrolled ? 'text-primary-dark' : 'text-text-primary'
            }`}>
              NEW<span className="text-cta-highlight">CODE</span>
            </span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item, index) => (
              <a key={item.name} href={item.href}>
                <motion.div
                  className={`transition-colors duration-200 relative group cursor-pointer ${
                    isScrolled 
                      ? 'text-primary-dark hover:text-primary-dark/80' 
                      : 'text-text-secondary hover:text-text-primary'
                  }`}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  {item.name}
                  <motion.div
                    className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cta-highlight group-hover:w-full transition-all duration-300"
                    whileHover={{ width: "100%" }}
                  />
                </motion.div>
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center">
            <Button variant="primary" size="md" href="/book-demo">
              Évaluation Gratuite
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-cta-highlight transition-colors duration-300 ${
              isScrolled ? 'text-primary-dark' : 'text-text-primary'
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
              className="md:hidden absolute top-full left-0 right-0 bg-accent-panels/98 backdrop-blur-lg border-b border-primary-dark/30 shadow-lg"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              role="navigation"
              aria-label="Menu mobile"
            >
              <div className="px-6 py-4 space-y-4">
                {navItems.map((item, index) => (
                  <a key={item.name} href={item.href}>
                    <motion.div
                      className="block text-primary-dark hover:text-text-secondary transition-colors duration-200 py-2 cursor-pointer"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      onClick={closeMobileMenu}
                    >
                      {item.name}
                    </motion.div>
                  </a>
                ))}
                <motion.div
                  className="pt-4 border-t border-primary-dark/30"
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