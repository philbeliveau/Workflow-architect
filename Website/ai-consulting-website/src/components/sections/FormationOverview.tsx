'use client';

import React, { memo } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { ArrowRight } from 'lucide-react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';

const FormationOverview: React.FC = memo(() => {
  const t = useTranslations('formation_overview');
  
  return (
    <section className="relative py-24 bg-gradient-to-br from-background-dark via-background-dark-alt to-background-dark overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-72 h-72 bg-success-green/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-primary-blue/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Background grid pattern removed for cleaner design */}

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-text-light mb-4">
            {t('title')}
          </h2>
          <p className="text-xl text-text-primary max-w-3xl mx-auto">
            {t('subtitle')}
          </p>
        </motion.div>

        {/* Two-Column Layout inspired by the reference image */}
        <div className="grid grid-cols-1 lg:grid-cols-[45%_55%] gap-16 items-start">
          
          {/* Left Column: Course Overview */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-3xl font-bold text-text-light mb-4">
                {t('overview_title')}
              </h3>
              <p className="text-lg text-text-primary mb-8">
                {t('value_proposition')}
              </p>
            </div>

            {/* Course Overview Items */}
            <div className="space-y-6">
              
              {/* Duration & Format Combined */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex items-start space-x-4"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-accent-yellow/40 rounded-full flex items-center justify-center">
                  <div className="w-6 h-6 border-2 border-accent-yellow rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-accent-yellow rounded-full"></div>
                  </div>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-accent-yellow mb-2">{t('duration_format_title')}</h4>
                  <p className="text-text-primary">
                    {t('duration_format_description')}
                  </p>
                </div>
              </motion.div>

              {/* Skill Level */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex items-start space-x-4"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-primary-blue/40 rounded-full flex items-center justify-center">
                  <div className="w-6 h-6 border-2 border-primary-blue rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-primary-blue rounded-full"></div>
                  </div>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-primary-blue mb-2">{t('level_title')}</h4>
                  <p className="text-text-primary">
                    {t('level_description')}
                  </p>
                </div>
              </motion.div>

              {/* What you get */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="flex items-start space-x-4"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-accent-purple/40 rounded-full flex items-center justify-center">
                  <div className="w-6 h-6 border-2 border-accent-purple rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-accent-purple rounded-full"></div>
                  </div>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-accent-purple mb-2">{t('what_you_get_title')}</h4>
                  <p className="text-text-primary">
                    {t('what_you_get_description')}
                  </p>
                </div>
              </motion.div>
            </div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="pt-6"
            >
              <Button 
                size="lg" 
                className="bg-primary-blue hover:bg-primary-blue/90 px-8 py-4 text-lg font-bold"
              >
                {t('cta')}
                <ArrowRight className="w-5 h-5 ml-3" />
              </Button>
            </motion.div>
          </motion.div>
          
          {/* Right Column: Circle Community Visual */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="relative aspect-[4/3] max-w-2xl mx-auto">
              {/* Circle Community Image */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl border border-primary-blue/30"
              >
                <Image
                  src="/images/circlepic.jpeg"
                  alt="Communauté Circle Newcode avec discussions et partage de projets"
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 60vw, 50vw"
                />
                
                {/* Overlay with community stats */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                
                <div className="absolute bottom-6 left-6 right-6">
                  <p className="text-white font-semibold text-lg mb-2">
                    {t('community_caption')}
                  </p>
                  
                </div>
              </motion.div>
              
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
});

FormationOverview.displayName = 'FormationOverview';

export default FormationOverview;