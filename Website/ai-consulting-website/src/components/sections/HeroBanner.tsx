'use client';

import React, { memo } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { useTranslations } from 'next-intl';
import { useLocale } from 'next-intl';
import FloatingCircles from '@/components/animations/FloatingCircles';

const HeroBanner: React.FC = memo(() => {
  const t = useTranslations('hero');
  const locale = useLocale();

  return (
    <section className="relative min-h-screen flex items-center justify-center">
      <div
        className="absolute inset-0"
        style={{
          background: 'var(--hero-gradient)'
        }}
      />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left Column - Content */}
          <div className="text-center lg:text-left">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
              {/* Hero Wordmark - Inspired by reference */}
              <h1
                className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-black tracking-tight mb-8"
                style={{
                  fontFamily: 'Inter, system-ui, sans-serif',
                  fontWeight: 300,
                  color: '#000000',
                  letterSpacing: '-0.04em',
                  lineHeight: 0.9
                }}
              >
                NEWCODE
              </h1>

              {/* Main value proposition */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-lg md:text-xl lg:text-2xl mb-6"
                style={{
                  color: '#000000',
                  fontWeight: 500,
                  letterSpacing: '0.01em',
                  lineHeight: 1.4
                }}
              >
                {locale === 'fr'
                  ? "Transformez vos connaissances métier en applications fonctionnelles — passez de 'celui qui a l'idée' à 'celui qui la réalise'"
                  : "Transform your business knowledge into functional applications — go from 'the one with the idea' to 'the one who realizes it'"
                }
              </motion.p>

              {/* Key statistic */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="text-base md:text-lg mb-4 opacity-80"
                style={{
                  color: '#000000',
                  fontWeight: 400
                }}
              >
                {locale === 'fr'
                  ? "Près de 60% des applications d'entreprise sur mesure sont développées en dehors des équipes IT"
                  : "Nearly 60% of custom enterprise apps are developed outside of IT"
                }
              </motion.p>

              {/* Technology statement */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.7 }}
                className="text-base md:text-lg mb-12 opacity-80"
                style={{
                  color: '#000000',
                  fontWeight: 400
                }}
              >
                {locale === 'fr'
                  ? "La technologie n'est plus une limitation"
                  : "Technology is no longer a limitation"
                }
              </motion.p>

              {/* Dual CTA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center lg:items-start"
              >
                <Button
                  variant="primary"
                  size="lg"
                  href="#formation-overview"
                  style={{
                    backgroundColor: '#000000',
                    color: '#FFFFFF',
                    border: 'none',
                    padding: '16px 32px',
                    fontSize: '16px',
                    fontWeight: 500,
                    borderRadius: '8px'
                  }}
                >
                  {locale === 'fr' ? 'Commencer Ma Transformation' : 'Start My Transformation'}
                </Button>

                <Button
                  variant="secondary"
                  size="lg"
                  href="#guide"
                  style={{
                    backgroundColor: 'transparent',
                    color: '#000000',
                    border: '2px solid #000000',
                    padding: '14px 30px',
                    fontSize: '16px',
                    fontWeight: 500,
                    borderRadius: '8px'
                  }}
                >
                  {locale === 'fr' ? 'Notre Guide Newcode' : 'Our Newcode Guide'}
                </Button>
              </motion.div>
            </motion.div>
          </div>

          {/* Right Column - Animation */}
          <div className="relative h-96 lg:h-[500px] hidden lg:flex items-center justify-center">
            <div className="w-full h-full border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center relative">
              <span className="text-gray-400 text-sm absolute top-2 left-2 z-10">Animation Area</span>
              <FloatingCircles className="w-full h-full" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

HeroBanner.displayName = 'HeroBanner';

export default HeroBanner;