'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { ArrowRight, Code, Zap } from 'lucide-react';
import { useTranslations } from 'next-intl';

const HeroBanner: React.FC = () => {
  const t = useTranslations('hero');
  
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-primary-900">
      {/* Background with gradient and pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-72 h-72 bg-accent-blue rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent-purple rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent-teal rounded-full blur-3xl opacity-20 animate-pulse delay-2000"></div>
        </div>
        
        {/* Code pattern overlay */}
        <div className="absolute inset-0 opacity-5">
          <div className="grid grid-cols-12 gap-4 h-full p-8">
            {Array.from({ length: 144 }, (_, i) => (
              <div key={i} className="bg-text-secondary h-1 rounded animate-pulse" style={{
                animationDelay: `${i * 0.1}s`,
                animationDuration: '3s'
              }}></div>
            ))}
          </div>
        </div>
      </div>

      {/* Floating elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-1/4 text-accent-blue"
          animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          <Code size={48} />
        </motion.div>
        <motion.div
          className="absolute top-3/4 right-1/4 text-accent-purple"
          animate={{ y: [0, 20, 0], rotate: [0, -5, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        >
          <Zap size={56} />
        </motion.div>
      </div>

      {/* Main content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-hero font-bold mb-6 bg-gradient-to-r from-text-primary via-accent-blue to-accent-purple bg-clip-text text-transparent">
            {t('title')}
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <p className="text-lg md:text-xl text-text-secondary max-w-4xl mx-auto mb-8 leading-relaxed">
            {t('subtitle')}
            <span className="text-accent-blue font-semibold"> {t('highlight')}</span>
          </p>
          <div className="text-base text-text-muted max-w-3xl mx-auto mb-12">
            {t('description')}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Button 
            variant="primary" 
            size="lg" 
            href="#track-selection"
            className="group"
          >
            {t('primaryCta')}
            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Button>
          
          <Button 
            variant="outline" 
            size="lg" 
            href="/book-demo"
          >
            {t('secondaryCta')}
          </Button>
        </motion.div>

        {/* Trust indicators */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <p className="text-sm text-text-muted mb-4">
            {t('trustLine')}
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 text-xs text-text-muted">
            <span className="flex items-center gap-2">
              <div className="w-2 h-2 bg-success-green rounded-full animate-pulse"></div>
              {t('metrics.developers')}
            </span>
            <span className="flex items-center gap-2">
              <div className="w-2 h-2 bg-accent-blue rounded-full animate-pulse"></div>
              {t('metrics.business')}
            </span>
            <span className="flex items-center gap-2">
              <div className="w-2 h-2 bg-accent-purple rounded-full animate-pulse"></div>
              {t('metrics.measured')}
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroBanner;