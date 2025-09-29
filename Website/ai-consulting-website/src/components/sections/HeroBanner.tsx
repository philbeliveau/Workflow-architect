'use client';

import React, { memo } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { ArrowRight, Code, Zap, Users, Bot, BookOpen, Star, Play, BarChart3, TrendingUp } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { useLocale } from 'next-intl';
import TransformationProcessInteractive from './TransformationProcessInteractive';
import Image from 'next/image';

const HeroBanner: React.FC = memo(() => {
  const t = useTranslations('hero');
  const tSections = useTranslations('sections');
  const locale = useLocale();

  const renderSubtitle = () => {
    return (
      <>
        <span className="text-white">
          {t('subtitle_parts.line1')}
          {t('subtitle_parts.highlight1')}
          {t('subtitle_parts.line2')}
        </span>
        <span className="bg-gradient-to-r from-yellow-300 to-yellow-500 bg-clip-text text-transparent font-semibold">
          {t('subtitle_parts.highlight2')}
          {t('subtitle_parts.line3')}
          {t('subtitle_parts.highlight3')}
        </span>
      </>
    );
  };
  
  return (
    <section className="relative min-h-screen lg:min-h-screen flex items-center justify-center overflow-hidden">
      {/* Environmental Background System - Layered approach */}
      <div className="absolute inset-0">
        {/* Base environmental foundation */}
        <div className="hero-environment-base absolute inset-0 bg-gradient-to-br from-[#2a2a2a] via-[#353535] to-[#2a2a2a]" />
        
        {/* Atmospheric layer with brand colors */}
        <div className="hero-environment-atmosphere absolute inset-0 opacity-[0.08]">
          <div className="absolute inset-0 bg-gradient-radial from-[#74a6be] via-transparent to-transparent" 
               style={{ backgroundPosition: '20% 20%', backgroundSize: '100% 100%' }} />
          <div className="absolute inset-0 bg-gradient-radial from-[#fbbf24] via-transparent to-transparent" 
               style={{ backgroundPosition: '80% 80%', backgroundSize: '100% 100%' }} />
          <div className="absolute inset-0 bg-gradient-radial from-[#a7292e] via-transparent to-transparent" 
               style={{ backgroundPosition: '50% 50%', backgroundSize: '140% 140%' }} />
        </div>
        
        {/* Textural pattern layer removed for cleaner design */}
        
        {/* Organic movement layer */}
        <motion.div 
          className="absolute inset-0 opacity-[0.05]"
          animate={{ 
            backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'],
          }}
          transition={{ 
            duration: 25, 
            repeat: Infinity, 
            ease: 'linear' 
          }}
          style={{
            background: `
              radial-gradient(circle at 30% 40%, #74a6be 0%, transparent 50%),
              radial-gradient(circle at 70% 60%, #fbbf24 0%, transparent 50%)
            `,
            backgroundSize: '200% 200%'
          }}
        />
      </div>

      {/* Main content - Two-column layout */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-24 pb-12 hero-mobile-spacing">
        <div className="grid grid-cols-1 lg:grid-cols-[60%_40%] gap-8 lg:gap-16 items-start lg:items-center min-h-[100vh] lg:min-h-[70vh]">
          {/* Left Column: Main Messaging with French content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Hero Title with Flowing Gradients */}
            <h1 
              className="font-brutalist-heading text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight tracking-[-0.02em] text-shadow-hero"
              style={{
                background: `
                  linear-gradient(135deg, 
                    #9ca3af 0%, 
                    #e5e7eb 30%, 
                    #fbbf24 70%, 
                    #f59e0b 100%
                  )
                `,
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                color: 'transparent',
                textShadow: '0 4px 16px rgba(42, 42, 42, 0.50)'
              }}
              role="banner"
            >
              {t('title')}
            </h1>
            
            {/* Subtitle with flowing typography */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6"
            >
              <p className="font-brutalist-body text-xl md:text-2xl leading-relaxed font-medium opacity-90 tracking-[-0.01em] text-shadow-flow text-[#e5e5e5]">
                {renderSubtitle()}
              </p>
              
              
              {/* Statistics & Social Proof */}
              <div className="bg-background-accent-grey/60 backdrop-blur-sm rounded-2xl p-6 border border-text-secondary/40">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-accent-yellow/20 rounded-xl flex items-center justify-center">
                      <BarChart3 className="w-6 h-6 text-accent-yellow" />
                    </div>
                  </div>
                  <div>
                    <p className="font-brutalist-heading text-lg md:text-xl font-semibold text-text-light mb-2">
                      {t('statistic.text')}
                    </p>
                    <p className="font-brutalist-body text-text-primary leading-relaxed">
                      {t('statistic.subtext')}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            {/* Call-to-Action Buttons with Environmental Integration */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 pt-4"
            >
              {/* Primary CTA with Environmental Glow */}
              <motion.div
                whileHover={{ 
                  scale: 1.02,
                  transition: { duration: 0.3, ease: [0.4, 0, 0.2, 1] }
                }}
                className="group relative"
              >
                <Button 
                  variant="primary" 
                  size="lg" 
                  href="#formation-overview"
                  className="relative z-10 group"
                  style={{
                    background: `linear-gradient(135deg, rgba(251, 191, 36, 0.6) 0%, rgba(245, 158, 11, 0.4) 100%)`,
                    boxShadow: `
                      0 8px 25px rgba(251, 191, 36, 0.15),
                      0 0 20px rgba(245, 158, 11, 0.1),
                      inset 0 1px 0 rgba(255, 255, 255, 0.2)
                    `,
                    border: 'none'
                  }}
                >
                  {t('cta.primary')}
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
                
                {/* Environmental glow effect */}
                <div 
                  className="absolute inset-0 rounded-lg opacity-50 group-hover:opacity-75 transition-opacity duration-300"
                  style={{
                    background: `
                      radial-gradient(circle at center, 
                        rgba(251, 191, 36, 0.15) 0%, 
                        rgba(245, 158, 11, 0.08) 50%, 
                        transparent 100%
                      )
                    `,
                    filter: 'blur(8px)',
                    transform: 'scale(1.1)',
                    zIndex: -1
                  }}
                />
              </motion.div>
              
              {/* Secondary CTA with Subtle Integration */}
              <Button 
                variant="outline" 
                size="lg" 
                href="https://buy.stripe.com/00w9AU6F1d0A36185seEo03"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative"
                style={{
                  background: `rgba(116, 166, 190, 0.1)`,
                  border: `1px solid rgba(116, 166, 190, 0.3)`,
                  color: '#ffffff',
                  boxShadow: `
                    0 4px 12px rgba(0, 0, 0, 0.1),
                    inset 0 1px 0 rgba(255, 255, 255, 0.1)
                  `,
                  textShadow: `
                    -1px -1px 0 #2a2a2a,
                    1px -1px 0 #2a2a2a,
                    -1px 1px 0 #2a2a2a,
                    1px 1px 0 #2a2a2a,
                    0 0 3px rgba(42, 42, 42, 0.8)
                  `
                }}
              >
                {t('guide.title')}
              </Button>
            </motion.div>

          </motion.div>
          
          {/* Right Column: Transformation Process */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative mt-8 lg:mt-0"
          >
            <div className="w-full max-w-lg mx-auto lg:mx-0 min-h-[600px] lg:min-h-[400px]">
              <TransformationProcessInteractive autoPlay={true} duration={5000} />
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* CSS Custom Properties */}
      <style jsx global>{`
        :root {
          /* Flow Alpha Levels */
          --flow-alpha-subtle: 0.08;
          --flow-alpha-soft: 0.15;
          --flow-alpha-medium: 0.25;
          --flow-alpha-strong: 0.40;
          
          /* Organic Spacing Scale */
          --space-flow-xs: 0.25rem;
          --space-flow-sm: 0.5rem;
          --space-flow-md: 1rem;
          --space-flow-lg: 1.618rem;
          --space-flow-xl: 2.618rem;
          --space-flow-2xl: 4.236rem;
          --space-flow-3xl: 6.854rem;
          
          /* Text Enhancement */
          --text-shadow-flow: 0 2px 8px rgba(42, 42, 42, 0.30);
          --text-shadow-hero: 0 4px 16px rgba(42, 42, 42, 0.50);
        }
        
        .text-shadow-flow {
          text-shadow: var(--text-shadow-flow);
        }
        
        .text-shadow-hero {
          text-shadow: var(--text-shadow-hero);
        }
        
        .bg-gradient-radial {
          background: radial-gradient(circle, var(--tw-gradient-stops));
        }
        
        /* Responsive Design */
        @media (max-width: 768px) {
          .hero-environment-atmosphere {
            opacity: 0.05;
          }
          
          .hero-mobile-spacing {
            padding-top: 6rem;
            padding-bottom: 6rem;
            min-height: calc(120vh);
          }
        }
        
        @media (min-width: 1025px) {
          .hero-environment-atmosphere {
            opacity: 0.08;
          }
        }
        
        /* Accessibility - Reduced Motion */
        @media (prefers-reduced-motion: reduce) {
          * {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }
        
        /* Focus States */
        button:focus-visible {
          outline: 2px solid #74a6be;
          outline-offset: 2px;
        }
      `}</style>
    </section>
  );
});

HeroBanner.displayName = 'HeroBanner';

export default HeroBanner;