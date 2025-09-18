'use client';

import React, { memo } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { ArrowRight, Code, Zap, Users, Bot, BookOpen, Star, Play, BarChart3 } from 'lucide-react';
import { useTranslations } from 'next-intl';
import TransformationProcessInteractive from './TransformationProcessInteractive';
import Image from 'next/image';
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

      {/* Main content - Two-column layout */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 mt-32">
        <div className="grid grid-cols-1 lg:grid-cols-[60%_40%] gap-12 items-center min-h-[70vh]">
          {/* Left Column: Main Messaging */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <h1 
              className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight bg-gradient-to-r from-text-light via-primary-blue to-accent-red bg-clip-text text-transparent"
              role="banner"
              aria-label={t('title')}
            >
              {t('title')}
              <div className="inline-flex items-center ml-4 relative">
                <Zap className="w-8 h-8 md:w-12 md:h-12 text-accent-yellow animate-pulse" />
                <div className="absolute inset-0 w-8 h-8 md:w-12 md:h-12 bg-accent-yellow/20 rounded-full animate-ping"></div>
              </div>
            </h1>
            
            {/* Main subtitle */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="space-y-6"
            >
              <p className="text-xl md:text-2xl text-text-primary leading-relaxed font-medium">
                {t('subtitle')}
              </p>
              
              {/* Statistics & Social Proof */}
              <div className="bg-background-accent-grey/30 backdrop-blur-sm rounded-2xl p-6 border border-text-secondary/20">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-accent-yellow/20 rounded-xl flex items-center justify-center">
                      <BarChart3 className="w-6 h-6 text-accent-yellow" />
                    </div>
                  </div>
                  <div>
                    <p className="text-lg md:text-xl font-semibold text-text-light mb-2">
                      60% des apps d'entreprise sont développées hors IT
                    </p>
                    <p className="text-text-primary leading-relaxed">
                      La technique n'est plus une limite — maîtrisez les outils pour concrétiser vos idées.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            
            
            {/* Call-to-Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button 
                variant="primary" 
                size="lg" 
                href="#formation-overview"
                className="group"
              >
                {t('cta.primary')}
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
              
              <Button 
                variant="outline" 
                size="lg" 
                href="#transformation"
              >
                {t('cta.secondary')}
              </Button>
            </motion.div>
          </motion.div>
          
          {/* Right Column: Transformation Process */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="aspect-square max-w-lg mx-auto lg:mx-0">
              <TransformationProcessInteractive autoPlay={true} duration={5000} />
            </div>
          </motion.div>
        </div>
        {/* This content has been moved to the new two-column layout above */}

      </div>
    </section>
  );
});

HeroBanner.displayName = 'HeroBanner';

export default HeroBanner;