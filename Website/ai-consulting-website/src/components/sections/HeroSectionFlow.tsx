'use client';

import React, { memo } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { ArrowRight, BarChart3, TrendingUp, Users } from 'lucide-react';
import { useTranslations } from 'next-intl';
import TransformationProcessInteractive from './TransformationProcessInteractive';

const HeroSectionFlow: React.FC = memo(() => {
  const t = useTranslations('hero');
  
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
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
        
        {/* Textural pattern layer */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="absolute inset-0" 
               style={{
                 backgroundImage: `
                   radial-gradient(circle at 25% 25%, #ffffff 1px, transparent 1px),
                   radial-gradient(circle at 75% 75%, #ffffff 1px, transparent 1px)
                 `,
                 backgroundSize: '60px 60px, 80px 80px'
               }} />
        </div>
        
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
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 pt-20 sm:pt-24">
        <div className="grid grid-cols-1 lg:grid-cols-[60%_40%] gap-8 lg:gap-12 items-center min-h-[70vh]">
          {/* Left Column: Main Messaging with French content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6 lg:space-y-8"
          >
            {/* Hero Title with Flowing Gradients */}
            <h1 
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-tight tracking-[-0.02em] text-shadow-hero"
              style={{
                background: `
                  linear-gradient(135deg, 
                    #ffffff 0%, 
                    #74a6be 30%, 
                    #fbbf24 60%, 
                    #a7292e 90%
                  )
                `,
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                color: 'transparent',
                textShadow: '0 4px 16px rgba(42, 42, 42, 0.50)'
              }}
              role="banner"
            >
              Ne restez plus spectateur de l'IA
            </h1>
            
            {/* Subtitle with flowing typography */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6"
            >
              <p className="text-lg sm:text-xl md:text-2xl leading-relaxed font-medium opacity-90 tracking-[-0.01em] text-shadow-flow text-[#e5e5e5]">
                Près de 60% des apps personnalisées en entreprise sont développées hors de l'IT
              </p>
              
              <p className="text-base sm:text-lg md:text-xl leading-relaxed font-normal opacity-85 text-[#ffffff] text-shadow-flow">
                La technique n'est plus une limite
              </p>
            </motion.div>
            
            {/* Statistics Cards with Seamless Integration */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4"
            >
              {/* Stat Card 1 */}
              <motion.div
                whileHover={{ 
                  y: -4, 
                  scale: 1.02,
                  transition: { duration: 0.3, ease: [0.4, 0, 0.2, 1] }
                }}
                className="group relative"
                style={{
                  background: `
                    linear-gradient(135deg, 
                      rgba(116, 166, 190, 0.12) 0%, 
                      rgba(167, 41, 46, 0.08) 100%
                    )
                  `,
                  boxShadow: `
                    0 4px 12px rgba(0, 0, 0, 0.1),
                    inset 0 1px 0 rgba(255, 255, 255, 0.1)
                  `,
                  backdropFilter: 'none',
                  border: 'none',
                  borderRadius: '1rem'
                }}
              >
                <div className="p-4 sm:p-6 space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center"
                         style={{ background: 'rgba(116, 166, 190, 0.2)' }}>
                      <TrendingUp className="w-5 h-5 text-[#74a6be]" />
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-[#ffffff]">3-5x</p>
                      <p className="text-sm text-[#e5e5e5] opacity-80">Plus rapide</p>
                    </div>
                  </div>
                </div>
              </motion.div>
              
              {/* Stat Card 2 */}
              <motion.div
                whileHover={{ 
                  y: -4, 
                  scale: 1.02,
                  transition: { duration: 0.3, ease: [0.4, 0, 0.2, 1] }
                }}
                className="group relative"
                style={{
                  background: `
                    linear-gradient(135deg, 
                      rgba(251, 191, 36, 0.15) 0%, 
                      rgba(116, 166, 190, 0.08) 100%
                    )
                  `,
                  boxShadow: `
                    0 4px 12px rgba(0, 0, 0, 0.1),
                    inset 0 1px 0 rgba(255, 255, 255, 0.1)
                  `,
                  backdropFilter: 'none',
                  border: 'none',
                  borderRadius: '1rem'
                }}
              >
                <div className="p-4 sm:p-6 space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center"
                         style={{ background: 'rgba(251, 191, 36, 0.2)' }}>
                      <Users className="w-5 h-5 text-[#fbbf24]" />
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-[#ffffff]">1000+</p>
                      <p className="text-sm text-[#e5e5e5] opacity-80">Professionnels</p>
                    </div>
                  </div>
                </div>
              </motion.div>
              
              {/* Stat Card 3 */}
              <motion.div
                whileHover={{ 
                  y: -4, 
                  scale: 1.02,
                  transition: { duration: 0.3, ease: [0.4, 0, 0.2, 1] }
                }}
                className="group relative"
                style={{
                  background: `
                    linear-gradient(135deg, 
                      rgba(167, 41, 46, 0.12) 0%, 
                      rgba(251, 191, 36, 0.08) 100%
                    )
                  `,
                  boxShadow: `
                    0 4px 12px rgba(0, 0, 0, 0.1),
                    inset 0 1px 0 rgba(255, 255, 255, 0.1)
                  `,
                  backdropFilter: 'none',
                  border: 'none',
                  borderRadius: '1rem'
                }}
              >
                <div className="p-4 sm:p-6 space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center"
                         style={{ background: 'rgba(167, 41, 46, 0.2)' }}>
                      <BarChart3 className="w-5 h-5 text-[#a7292e]" />
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-[#ffffff]">60%</p>
                      <p className="text-sm text-[#e5e5e5] opacity-80">Hors IT</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
            
            {/* Call-to-Action Buttons with Environmental Integration */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-4"
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
                    background: `linear-gradient(135deg, #a7292e 0%, #74a6be 100%)`,
                    boxShadow: `
                      0 8px 25px rgba(167, 41, 46, 0.3),
                      0 0 20px rgba(116, 166, 190, 0.2),
                      inset 0 1px 0 rgba(255, 255, 255, 0.2)
                    `,
                    border: 'none'
                  }}
                >
                  Commencer ma transformation
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
                
                {/* Environmental glow effect */}
                <div 
                  className="absolute inset-0 rounded-lg opacity-50 group-hover:opacity-75 transition-opacity duration-300"
                  style={{
                    background: `
                      radial-gradient(circle at center, 
                        rgba(167, 41, 46, 0.4) 0%, 
                        rgba(116, 166, 190, 0.2) 50%, 
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
                href="#transformation"
                className="group relative"
                style={{
                  background: `rgba(116, 166, 190, 0.1)`,
                  border: `1px solid rgba(116, 166, 190, 0.3)`,
                  color: '#ffffff',
                  boxShadow: `
                    0 4px 12px rgba(0, 0, 0, 0.1),
                    inset 0 1px 0 rgba(255, 255, 255, 0.1)
                  `
                }}
              >
                Voir la méthode
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
            <div className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:aspect-square lg:max-w-lg mx-auto lg:mx-0">
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

HeroSectionFlow.displayName = 'HeroSectionFlow';

export default HeroSectionFlow;