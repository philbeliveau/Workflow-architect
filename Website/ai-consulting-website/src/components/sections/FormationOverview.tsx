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
                Aperçu de la Formation
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
                <div className="flex-shrink-0 w-12 h-12 bg-accent-yellow/20 rounded-full flex items-center justify-center">
                  <div className="w-6 h-6 border-2 border-accent-yellow rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-accent-yellow rounded-full"></div>
                  </div>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-accent-yellow mb-2">Durée & Format</h4>
                  <p className="text-text-primary">
                    <strong>6 à 12 heures de formation intensive</strong> en ligne avec support communautaire. Suivez les leçons à votre rythme avec un accompagnement personnalisé. Cours mis à jour en continu — l'IA évolue, notre formation aussi.
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
                <div className="flex-shrink-0 w-12 h-12 bg-primary-blue/20 rounded-full flex items-center justify-center">
                  <div className="w-6 h-6 border-2 border-primary-blue rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-primary-blue rounded-full"></div>
                  </div>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-primary-blue mb-2">Niveau</h4>
                  <p className="text-text-primary">
                    Débutants complets aux développeurs expérimentés souhaitant maîtriser les techniques agentiques. Aucun prérequis technique nécessaire pour commencer.
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
                <div className="flex-shrink-0 w-12 h-12 bg-accent-purple/20 rounded-full flex items-center justify-center">
                  <div className="w-6 h-6 border-2 border-accent-purple rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-accent-purple rounded-full"></div>
                  </div>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-accent-purple mb-2">Ce que vous obtenez</h4>
                  <p className="text-text-primary">
                    Formation complète, communauté active, templates prêts à l'emploi, sessions live, réseau de développeurs et entrepreneurs, et des amitiés durables.
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
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 60vw, 50vw"
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
              
              {/* Floating elements */}
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