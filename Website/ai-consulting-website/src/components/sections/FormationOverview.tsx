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

        {/* Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-[45%_55%] gap-12 items-center">
          
          {/* Left Column: Formation Overview */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Formation Cards */}
            <div className="space-y-6">
              
              {/* Formation Débutant */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="bg-gradient-to-br from-accent-yellow/10 to-accent-yellow/5 border border-accent-yellow/30 rounded-2xl p-8 backdrop-blur-sm hover:border-accent-yellow/50 transition-all duration-300"
              >
                <div className="space-y-4">
                  <div>
                    <h3 className="text-2xl font-bold text-accent-yellow mb-2">
                      {t('formation_beginner.title')}
                    </h3>
                    <p className="text-lg text-text-light font-medium">
                      {t('formation_beginner.subtitle')}
                    </p>
                  </div>
                  
                  <ul className="space-y-2">
                    {t.raw('formation_beginner.features').map((feature: string, index: number) => (
                      <li key={index} className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-accent-yellow rounded-full"></div>
                        <span className="text-text-primary">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <blockquote className="text-accent-yellow font-semibold text-lg italic border-l-4 border-accent-yellow pl-4">
                    "{t('formation_beginner.quote')}"
                  </blockquote>
                </div>
              </motion.div>

              {/* Formation Avancée */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="bg-gradient-to-br from-primary-blue/10 to-primary-blue/5 border border-primary-blue/30 rounded-2xl p-8 backdrop-blur-sm hover:border-primary-blue/50 transition-all duration-300"
              >
                <div className="space-y-4">
                  <div>
                    <h3 className="text-2xl font-bold text-primary-blue mb-2">
                      {t('formation_advanced.title')}
                    </h3>
                    <p className="text-lg text-text-light font-medium">
                      {t('formation_advanced.subtitle')}
                    </p>
                  </div>
                  
                  <ul className="space-y-2">
                    {t.raw('formation_advanced.features').map((feature: string, index: number) => (
                      <li key={index} className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-primary-blue rounded-full"></div>
                        <span className="text-text-primary">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <blockquote className="text-primary-blue font-semibold text-lg italic border-l-4 border-primary-blue pl-4">
                    "{t('formation_advanced.quote')}"
                  </blockquote>
                </div>
              </motion.div>
            </div>

          </motion.div>
          
          {/* Right Column: Circle Community Visual */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="relative aspect-square max-w-lg mx-auto">
              {/* Circle Community Image */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl border border-primary-blue/30"
              >
                <Image
                  src="/images/circlepic.jpeg"
                  alt="Communauté Circle Newcode avec discussions et partage de projets"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                
                {/* Overlay with community stats */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                
                <div className="absolute bottom-6 left-6 right-6">
                  <p className="text-white font-semibold text-lg mb-2">
                    {t('community_caption')}
                  </p>
                  
                  {/* Community engagement indicators */}
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-success-green rounded-full animate-pulse"></div>
                      <span className="text-white/90 text-sm">150+ membres actifs</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-accent-yellow rounded-full animate-pulse delay-300"></div>
                      <span className="text-white/90 text-sm">50+ projets partagés</span>
                    </div>
                  </div>
                </div>
              </motion.div>
              
              {/* Floating elements around the image */}
              <motion.div
                className="absolute -top-4 -right-4 bg-primary-blue/20 border border-primary-blue/40 rounded-lg px-3 py-2 backdrop-blur-sm"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                <span className="text-primary-blue text-sm font-medium">🚀 Communauté</span>
              </motion.div>
              
              <motion.div
                className="absolute -bottom-4 -left-4 bg-success-green/20 border border-success-green/40 rounded-lg px-3 py-2 backdrop-blur-sm"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              >
                <span className="text-success-green text-sm font-medium">💬 Support 24/7</span>
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