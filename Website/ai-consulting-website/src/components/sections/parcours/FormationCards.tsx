'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { Button } from '@/components/ui/Button';
import { ExternalLink, BookOpen, Target, TrendingUp } from 'lucide-react';

const FormationCards: React.FC = () => {
  const t = useTranslations('parcours.formations');

  const formations = [
    {
      id: 'kickstart',
      icon: BookOpen,
      level: t('kickstart.level'),
      title: t('kickstart.title'),
      target: t('kickstart.target'),
      price: t('kickstart.price'),
      duration: t('kickstart.duration'),
      outcomes: [
        t('kickstart.outcomes.0'),
        t('kickstart.outcomes.1'),
        t('kickstart.outcomes.2'),
        t('kickstart.outcomes.3')
      ],
      cta: t('kickstart.cta'),
      href: '/formation-kickstart',
      gradient: 'from-green-400 to-blue-500',
      bgGradient: 'from-green-500/5 to-blue-500/5',
      borderColor: 'border-green-400/30 hover:border-green-400/60'
    },
    {
      id: 'architecte',
      icon: TrendingUp,
      level: t('architecte.level'),
      title: t('architecte.title'),
      target: t('architecte.target'),
      price: t('architecte.price'),
      duration: t('architecte.duration'),
      outcomes: [
        t('architecte.outcomes.0'),
        t('architecte.outcomes.1'),
        t('architecte.outcomes.2'),
        t('architecte.outcomes.3')
      ],
      cta: t('architecte.cta'),
      href: '/formation-architecte',
      gradient: 'from-blue-500 to-purple-600',
      bgGradient: 'from-blue-500/5 to-purple-600/5',
      borderColor: 'border-blue-500/30 hover:border-blue-500/60'
    }
  ];

  return (
    <section className="py-20 bg-background-dark relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/4 -left-32 w-64 h-64 bg-primary-blue/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-1/4 -right-32 w-64 h-64 bg-accent-red/5 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.5, 0.3, 0.5],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
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
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            {t('subtitle')}
          </p>
        </motion.div>

        {/* Formation Cards Grid */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {formations.map((formation, index) => {
            const IconComponent = formation.icon;
            
            return (
              <motion.div
                key={formation.id}
                className="group"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div className={`h-full p-8 lg:p-10 rounded-3xl bg-gradient-to-br ${formation.bgGradient} border ${formation.borderColor} backdrop-blur-sm transition-all duration-300 hover:transform hover:scale-[1.02] hover:shadow-2xl`}>
                  {/* Header */}
                  <div className="flex items-center justify-between mb-8">
                    <div className={`flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${formation.gradient} shadow-lg`}>
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <div className={`px-4 py-2 rounded-full bg-gradient-to-r ${formation.gradient} text-white text-sm font-semibold`}>
                      {formation.level}
                    </div>
                  </div>

                  {/* Title & Target */}
                  <div className="mb-6">
                    <h3 className="text-2xl lg:text-3xl font-bold mb-4 text-text-light group-hover:text-primary-blue transition-colors">
                      {formation.title}
                    </h3>
                    <div className="flex items-start gap-3 mb-4">
                      <Target className="w-5 h-5 text-accent-red mt-1 flex-shrink-0" />
                      <p className="text-text-secondary leading-relaxed">
                        {formation.target}
                      </p>
                    </div>
                  </div>

                  {/* Price & Duration */}
                  <div className="flex items-center justify-between mb-8 p-4 bg-background-dark-alt/50 rounded-xl border border-primary-blue/20">
                    <div>
                      <span className="text-sm text-text-secondary block">{t('price_label')}</span>
                      <span className="text-2xl font-bold text-primary-blue">{formation.price}</span>
                    </div>
                    <div className="text-right">
                      <span className="text-sm text-text-secondary block">{t('duration_label')}</span>
                      <span className="text-lg font-semibold text-text-light">{formation.duration}</span>
                    </div>
                  </div>

                  {/* Outcomes */}
                  <div className="mb-8">
                    <h4 className="font-semibold text-text-light mb-4 flex items-center">
                      <span className={`w-2 h-2 rounded-full bg-gradient-to-r ${formation.gradient} mr-3`} />
                      {t('outcomes_title')}
                    </h4>
                    <ul className="space-y-3">
                      {formation.outcomes.map((outcome, outcomeIndex) => (
                        <motion.li
                          key={outcomeIndex}
                          className="flex items-start gap-3 text-text-secondary"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: (index * 0.2) + (outcomeIndex * 0.1), duration: 0.5 }}
                          viewport={{ once: true }}
                        >
                          <span className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${formation.gradient} mt-2 flex-shrink-0`} />
                          <span className="leading-relaxed">{outcome}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA Button */}
                  <div className="space-y-4">
                    <Button
                      variant="primary"
                      size="lg"
                      href={formation.href}
                      className="w-full group-hover:scale-105 transition-transform duration-200"
                    >
                      <span>{formation.cta}</span>
                      <ExternalLink className="w-5 h-5 ml-2" />
                    </Button>
                    
                    {/* Learn More Link */}
                    <div className="text-center">
                      <a
                        href={formation.href}
                        className="text-sm text-text-secondary hover:text-primary-blue transition-colors duration-200 inline-flex items-center gap-2"
                      >
                        {t('learn_more')}
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Comparison Note */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="inline-block p-6 bg-background-dark-alt/50 backdrop-blur-sm border border-primary-blue/30 rounded-2xl max-w-2xl">
            <p className="text-text-secondary leading-relaxed">
              {t('comparison_note')}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FormationCards;