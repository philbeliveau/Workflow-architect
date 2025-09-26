'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { Button } from '@/components/ui/Button';
import { ArrowRight, CheckCircle2, TrendingUp, Award, Users } from 'lucide-react';

const ProgressionBridge: React.FC = () => {
  const t = useTranslations('parcours.progression_bridge');

  const prerequisites = [
    t('prerequisites.0'),
    t('prerequisites.1'),
    t('prerequisites.2'),
    t('prerequisites.3')
  ];

  const benefits = [
    {
      icon: TrendingUp,
      title: t('benefits.0.title'),
      description: t('benefits.0.description')
    },
    {
      icon: Award,
      title: t('benefits.1.title'),
      description: t('benefits.1.description')
    },
    {
      icon: Users,
      title: t('benefits.2.title'),
      description: t('benefits.2.description')
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-background-dark via-background-dark-alt to-background-dark relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/3 left-1/4 w-96 h-96 bg-primary-blue/5 rounded-full blur-3xl"
          animate={{
            x: [0, 50, 0],
            y: [0, -30, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-accent-red/5 rounded-full blur-3xl"
          animate={{
            x: [0, -50, 0],
            y: [0, 30, 0],
            scale: [1.1, 1, 1.1],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-primary-blue to-accent-red bg-clip-text text-transparent">
              {t('title')}
            </span>
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
            {t('content')}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Prerequisites Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="p-8 bg-background-dark-alt/50 backdrop-blur-sm border border-green-500/30 rounded-2xl">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-blue-500 rounded-xl flex items-center justify-center mr-4">
                  <CheckCircle2 className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-text-light">
                  {t('prerequisites_title')}
                </h3>
              </div>
              
              <p className="text-text-secondary mb-6 leading-relaxed">
                {t('prerequisites_subtitle')}
              </p>
              
              <ul className="space-y-4">
                {prerequisites.map((prerequisite, index) => (
                  <motion.li
                    key={index}
                    className="flex items-start gap-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-text-secondary leading-relaxed">{prerequisite}</span>
                  </motion.li>
                ))}
              </ul>

              <div className="mt-8 p-4 bg-green-500/10 border border-green-500/30 rounded-xl">
                <p className="text-sm text-green-400 text-center font-medium">
                  {t('readiness_indicator')}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Benefits Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="p-8 bg-background-dark-alt/50 backdrop-blur-sm border border-purple-500/30 rounded-2xl">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mr-4">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-text-light">
                  {t('benefits_title')}
                </h3>
              </div>
              
              <p className="text-text-secondary mb-6 leading-relaxed">
                {t('benefits_subtitle')}
              </p>
              
              <div className="space-y-6">
                {benefits.map((benefit, index) => {
                  const IconComponent = benefit.icon;
                  return (
                    <motion.div
                      key={index}
                      className="flex items-start gap-4 p-4 bg-background-dark/30 rounded-xl border border-primary-blue/20"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1, duration: 0.5 }}
                      viewport={{ once: true }}
                    >
                      <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                        <IconComponent className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-text-light mb-2">{benefit.title}</h4>
                        <p className="text-sm text-text-secondary leading-relaxed">{benefit.description}</p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Transition Bridge */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="relative">
            {/* Bridge Visualization */}
            <div className="flex items-center justify-center mb-8">
              <div className="flex items-center bg-gradient-to-r from-green-500/20 to-purple-600/20 p-6 rounded-2xl border border-primary-blue/30 backdrop-blur-sm">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-lg mb-2">
                    K
                  </div>
                  <span className="text-sm text-text-secondary">Kickstart</span>
                </div>
                
                <div className="mx-8 flex items-center">
                  <div className="w-16 h-px bg-gradient-to-r from-green-500 to-purple-600" />
                  <ArrowRight className="w-8 h-8 text-primary-blue mx-4" />
                  <div className="w-16 h-px bg-gradient-to-r from-green-500 to-purple-600" />
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg mb-2">
                    A
                  </div>
                  <span className="text-sm text-text-secondary">Architecte</span>
                </div>
              </div>
            </div>

            {/* CTA */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                variant="primary"
                size="lg"
                href="/formation-architecte"
                className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700"
              >
                <span>{t('cta')}</span>
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </motion.div>

            <p className="text-sm text-text-secondary mt-4 max-w-lg mx-auto">
              {t('cta_subtitle')}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProgressionBridge;