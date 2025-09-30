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
    <section className="relative min-h-screen flex items-center justify-center bg-white pt-32">
      <div className="w-full max-w-6xl mx-auto px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="space-y-12"
        >
          {/* Massive Centered Headline - JetScale Style */}
          <h1
            className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl leading-none tracking-tight"
            style={{
              fontFamily: 'Inter, system-ui, sans-serif',
              fontWeight: 600,
              color: '#000000',
              letterSpacing: '-0.06em',
              lineHeight: 0.85
            }}
          >
            {t('title')}
          </h1>

          {/* Clean Subheading */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-2xl md:text-3xl lg:text-4xl max-w-5xl mx-auto text-gray-700"
            style={{
              fontFamily: 'Inter, system-ui, sans-serif',
              fontWeight: 400,
              letterSpacing: '-0.02em',
              lineHeight: 1.3
            }}
          >
            {t('subtitle')}
          </motion.p>

          {/* Single CTA - JetScale Style */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="pt-8"
          >
            <Button
              variant="primary"
              size="lg"
              href="#formation-overview"
              className="px-8 py-4 text-lg font-medium bg-blue-600 hover:bg-blue-700 text-white rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              {locale === 'fr' ? 'Voir en Action' : 'See It in Action'}
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
});

HeroBanner.displayName = 'HeroBanner';

export default HeroBanner;