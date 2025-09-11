'use client';

import React, { memo } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { ArrowRight, Code, Zap, Users, Bot, BookOpen } from 'lucide-react';
import { useTranslations } from 'next-intl';
const HeroBanner: React.FC = memo(() => {
  const t = useTranslations('hero');
  const tSections = useTranslations('sections');
  
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background-dark via-background-dark-alt to-background-dark">
      {/* Background with gradient and pattern - Dark UI First */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-72 h-72 bg-primary-blue/30 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent-yellow/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary-blue/10 rounded-full blur-3xl opacity-15 animate-pulse delay-2000"></div>
        </div>
        
        {/* Background grid pattern with squares */}
        <div className="absolute inset-0 opacity-5">
          <div className="grid grid-cols-12 gap-2 h-full p-4">
            {Array.from({ length: 144 }, (_, i) => (
              <div 
                key={i} 
                className="bg-text-secondary rounded-sm animate-pulse" 
                style={{
                  animationDelay: `${i * 0.05}s`,
                  animationDuration: '3s'
                }}
              ></div>
            ))}
          </div>
        </div>
      </div>

      {/* Floating elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-1/4 text-primary-blue/40"
          animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          style={{ willChange: 'transform' }}
          aria-hidden="true"
        >
          <Code size={48} />
        </motion.div>
        <motion.div
          className="absolute top-3/4 right-1/4 text-accent-yellow/60"
          animate={{ y: [0, 20, 0], rotate: [0, -5, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          style={{ willChange: 'transform' }}
          aria-hidden="true"
        >
          <Zap size={56} />
        </motion.div>
      </div>

      {/* Main content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center mt-42">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 
            className="text-hero font-bold mb-8 bg-gradient-to-r from-text-light via-primary-blue to-accent-red bg-clip-text text-transparent"
            role="banner"
            aria-label={t('title')}
          >
            {t('title')}
          </h1>
          <p className="text-xl md:text-2xl text-text-primary max-w-4xl mx-auto mb-10 leading-relaxed font-medium">
            {t('subtitle')}
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="bg-gradient-to-br from-background-accent-grey/90 to-background-light-grey/90 backdrop-blur-sm rounded-2xl p-6 max-w-4xl mx-auto mb-12 border border-accent-red/40 shadow-xl">
            <div className="text-center">
              {/* Compact 3 Steps */}
              <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-6">
                {/* Step 1 */}
                <div className="flex flex-col items-center text-center max-w-[140px]">
                  <div className="w-12 h-12 bg-primary-blue/20 rounded-lg flex items-center justify-center mb-2">
                    <Users className="w-6 h-6 text-primary-blue" />
                  </div>
                  <span className="text-sm font-semibold text-slate-100 mb-1">{t('steps.formation.title')}</span>
                  <span className="text-xs text-slate-400 leading-tight">{t('steps.formation.description')}</span>
                </div>

                <ArrowRight className="w-5 h-5 text-accent-red/60 hidden md:block" />
                <ArrowRight className="w-4 h-4 text-accent-red/60 rotate-90 md:hidden" />

                {/* Step 2 */}
                <div className="flex flex-col items-center text-center max-w-[140px]">
                  <div className="w-12 h-12 bg-accent-red/20 rounded-lg flex items-center justify-center mb-2">
                    <Bot className="w-6 h-6 text-accent-red" />
                  </div>
                  <span className="text-sm font-semibold text-slate-100 mb-1">{t('steps.mastery.title')}</span>
                  <span className="text-xs text-slate-400 leading-tight">{t('steps.mastery.description')}</span>
                </div>

                <ArrowRight className="w-5 h-5 text-accent-red/60 hidden md:block" />
                <ArrowRight className="w-4 h-4 text-accent-red/60 rotate-90 md:hidden" />

                {/* Step 3 */}
                <div className="flex flex-col items-center text-center max-w-[140px]">
                  <div className="w-12 h-12 bg-accent-purple/20 rounded-lg flex items-center justify-center mb-2">
                    <BookOpen className="w-6 h-6 text-accent-purple" />
                  </div>
                  <span className="text-sm font-semibold text-slate-100 mb-1">{t('steps.autonomy.title')}</span>
                  <span className="text-xs text-slate-400 leading-tight">{t('steps.autonomy.description')}</span>
                </div>
              </div>

              {/* Enhanced summary */}
              <p className="text-slate-200 text-sm font-medium">
                {t('summary')}
              </p>
            </div>
          </div>
        </motion.div>

        {/* New Background Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="relative"
        >
          {/* Background elements for this section */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 right-10 w-48 h-48 bg-accent-red/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-10 left-10 w-64 h-64 bg-accent-yellow/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          </div>
          
          {/* Background grid pattern */}
          <div className="absolute inset-0 opacity-3">
            <div className="grid grid-cols-8 gap-2 h-full p-4">
              {Array.from({ length: 64 }, (_, i) => (
                <div 
                  key={i} 
                  className="bg-text-secondary rounded-sm animate-pulse" 
                  style={{
                    animationDelay: `${i * 0.08}s`,
                    animationDuration: '4s'
                  }}
                ></div>
              ))}
            </div>
          </div>

          {/* Floating elements */}
          <div className="absolute inset-0 pointer-events-none">
            <motion.div
              className="absolute top-1/3 left-1/5 text-accent-yellow/30"
              animate={{ y: [0, -15, 0], rotate: [0, -3, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              style={{ willChange: 'transform' }}
              aria-hidden="true"
            >
              <Zap size={32} />
            </motion.div>
            <motion.div
              className="absolute bottom-1/3 right-1/5 text-primary-blue/30"
              animate={{ y: [0, 18, 0], rotate: [0, 4, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
              style={{ willChange: 'transform' }}
              aria-hidden="true"
            >
              <Code size={28} />
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Button 
            variant="primary" 
            size="lg" 
            href="#track-selection"
            className="group"
          >
            {t('cta.training')}
            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Button>
          
          <Button 
            variant="outline" 
            size="lg" 
            href="/guide"
          >
            {t('cta.guide')}
          </Button>
        </motion.div>

      </div>
    </section>
  );
});

HeroBanner.displayName = 'HeroBanner';

export default HeroBanner;