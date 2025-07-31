'use client';

import React, { memo } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { ArrowRight, Code, Zap } from 'lucide-react';
import { useTranslations } from 'next-intl';
const HeroBanner: React.FC = memo(() => {
  const t = useTranslations('hero');
  const benefits = t.raw('benefits.items');
  
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background-dark via-background-dark-alt to-background-dark">
      {/* Background with gradient and pattern - Dark UI First */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-72 h-72 bg-primary-blue/30 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent-red/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
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
          className="absolute top-3/4 right-1/4 text-accent-red/60"
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
          >
            {t('title')}
          </h1>
          <p className="text-xl md:text-2xl text-text-primary max-w-4xl mx-auto mb-10 leading-relaxed font-medium">
            {t('subtitle')}
          </p>
          <div className="text-lg text-text-secondary max-w-4xl mx-auto mb-12 leading-relaxed">
            {t('description')}
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="bg-gradient-to-br from-background-accent-grey/90 to-background-light-grey/90 backdrop-blur-sm rounded-3xl p-10 max-w-4xl mx-auto mb-12 border border-accent-red/40 shadow-2xl shadow-black/30">
            <div className="text-center">
              <h2 className="text-xl font-bold text-slate-100 mb-8 tracking-wide">
                {t('benefits.title')}
              </h2>
              <div className="grid md:grid-cols-2 gap-6 text-left mb-8">
                {benefits.map((benefit: string, index: number) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-2 h-2 bg-slate-300 rounded-full mt-2 flex-shrink-0 shadow-sm"></div>
                    <p className="text-slate-200 font-medium">{benefit}</p>
                  </div>
                ))}
              </div>
              <div className="text-center">
                <p className="text-slate-100 font-bold text-xl leading-relaxed tracking-wide bg-gradient-to-r from-slate-200 to-white bg-clip-text text-transparent">
                  {t('benefits.conclusion')}
                </p>
              </div>
            </div>
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
            {t('cta.primary')}
            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Button>
          
          <Button 
            variant="outline" 
            size="lg" 
            href="/book-demo"
          >
            {t('cta.secondary')}
          </Button>
        </motion.div>

      </div>
    </section>
  );
});

HeroBanner.displayName = 'HeroBanner';

export default HeroBanner;