'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { Menu, X, Zap, Globe } from 'lucide-react';
import { useTranslations, useLocale } from 'next-intl';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

const Navigation: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const t = useTranslations('navigation');
  const locale = useLocale();
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: t('home'), href: '/' },
    { name: t('developers'), href: '/developers' },
    { name: t('business'), href: '/business' },
    { name: t('caseStudies'), href: '/case-studies' },
    { name: t('services'), href: '/services' }
  ];

  const getLanguageSwitchPath = () => {
    const currentPath = pathname.replace(`/${locale}`, '') || '/';
    const newLocale = locale === 'fr' ? 'en' : 'fr';
    return `/${newLocale}${currentPath}`;
  };

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-primary-900/95 backdrop-blur-lg shadow-lg border-b border-primary-700' 
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
            className="flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <div className="w-8 h-8 bg-gradient-to-r from-accent-blue to-accent-purple rounded-lg flex items-center justify-center">
              <Zap className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-text-primary">
              AI<span className="text-accent-blue">Dev</span>
            </span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                className="text-text-secondary hover:text-text-primary transition-colors duration-200 relative group"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                {item.name}
                <motion.div
                  className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent-blue group-hover:w-full transition-all duration-300"
                  whileHover={{ width: "100%" }}
                />
              </motion.a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <div className="flex items-center gap-4">
              {/* Language Switcher */}
              <div className="flex items-center gap-2">
                <Globe className="w-4 h-4 text-text-secondary" />
                <Link
                  href={getLanguageSwitchPath()}
                  className="text-text-secondary hover:text-text-primary transition-colors duration-200 text-sm"
                >
                  {locale === 'fr' ? 'EN' : 'FR'}
                </Link>
              </div>
              
              <Button variant="primary" size="md" href="/book-demo">
                {t('freeEvaluation')}
              </Button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-text-primary p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              className="md:hidden absolute top-full left-0 right-0 bg-primary-900/98 backdrop-blur-lg border-b border-primary-700 shadow-lg"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="px-6 py-4 space-y-4">
                {navItems.map((item, index) => (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    className="block text-text-secondary hover:text-text-primary transition-colors duration-200 py-2"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </motion.a>
                ))}
                <motion.div
                  className="pt-4 border-t border-primary-700"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  <div className="space-y-4">
                    {/* Mobile Language Switcher */}
                    <div className="flex items-center justify-center gap-3 py-2 border-t border-primary-700">
                      <Globe className="w-4 h-4 text-text-secondary" />
                      <Link
                        href={getLanguageSwitchPath()}
                        className="text-text-secondary hover:text-text-primary transition-colors duration-200"
                      >
                        {locale === 'fr' ? 'Switch to English' : 'Passer au Français'}
                      </Link>
                    </div>
                    
                    <Button 
                      variant="primary" 
                      size="md" 
                      href="/book-demo"
                      className="w-full"
                    >
                      {t('freeEvaluation')}
                    </Button>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
};

export default Navigation;