'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { CheckCircle, ArrowRight, Star, Clock, Users } from 'lucide-react';

const LearningPathVisualization: React.FC = () => {
  const t = useTranslations('parcours.learning_path');

  const pathSteps = [
    {
      id: 'kickstart',
      level: t('kickstart.level'),
      title: t('kickstart.title'),
      description: t('kickstart.description'),
      duration: t('kickstart.duration'),
      price: t('kickstart.price'),
      outcomes: [
        t('kickstart.outcomes.0'),
        t('kickstart.outcomes.1'),
        t('kickstart.outcomes.2'),
        t('kickstart.outcomes.3')
      ],
      gradient: 'from-green-500 to-blue-500',
      bgColor: 'from-green-500/10 to-blue-500/10',
      borderColor: 'border-green-500/30'
    },
    {
      id: 'architecte',
      level: t('architecte.level'),
      title: t('architecte.title'),
      description: t('architecte.description'),
      duration: t('architecte.duration'),
      price: t('architecte.price'),
      outcomes: [
        t('architecte.outcomes.0'),
        t('architecte.outcomes.1'),
        t('architecte.outcomes.2'),
        t('architecte.outcomes.3')
      ],
      gradient: 'from-blue-500 to-purple-500',
      bgColor: 'from-blue-500/10 to-purple-500/10',
      borderColor: 'border-blue-500/30'
    }
  ];

  return (
    <section className="py-20 bg-background-dark-alt relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
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

        {/* Learning Path Steps */}
        <div className="space-y-8 md:space-y-0 md:flex md:items-stretch md:gap-8">
          {pathSteps.map((step, index) => (
            <React.Fragment key={step.id}>
              {/* Formation Card */}
              <motion.div
                className="flex-1"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div className={`h-full p-8 rounded-2xl bg-gradient-to-br ${step.bgColor} border ${step.borderColor} backdrop-blur-sm hover:border-opacity-60 transition-all duration-300 group`}>
                  {/* Level Badge */}
                  <div className={`inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r ${step.gradient} text-white text-sm font-semibold mb-6`}>
                    <Star className="w-4 h-4 mr-2" />
                    {step.level}
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl md:text-3xl font-bold mb-4 text-text-light group-hover:text-primary-blue transition-colors">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-text-secondary mb-6 leading-relaxed">
                    {step.description}
                  </p>

                  {/* Duration & Price */}
                  <div className="flex items-center gap-6 mb-6">
                    <div className="flex items-center text-text-secondary">
                      <Clock className="w-5 h-5 mr-2" />
                      <span>{step.duration}</span>
                    </div>
                    <div className="text-2xl font-bold text-primary-blue">
                      {step.price}
                    </div>
                  </div>

                  {/* Outcomes */}
                  <div className="space-y-3 mb-8">
                    <h4 className="font-semibold text-text-light mb-3 flex items-center">
                      <Users className="w-5 h-5 mr-2 text-primary-blue" />
                      {t('outcomes_title')}
                    </h4>
                    {step.outcomes.map((outcome, outcomeIndex) => (
                      <motion.div
                        key={outcomeIndex}
                        className="flex items-start gap-3"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: (index * 0.2) + (outcomeIndex * 0.1), duration: 0.5 }}
                        viewport={{ once: true }}
                      >
                        <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-text-secondary text-sm leading-relaxed">
                          {outcome}
                        </span>
                      </motion.div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <motion.button
                    className={`w-full py-4 px-6 rounded-lg bg-gradient-to-r ${step.gradient} text-white font-semibold hover:scale-105 transition-transform duration-200`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {step.id === 'kickstart' ? t('cta_kickstart') : t('cta_architecte')}
                  </motion.button>
                </div>
              </motion.div>

              {/* Arrow Between Cards (Desktop) */}
              {index < pathSteps.length - 1 && (
                <motion.div
                  className="hidden md:flex items-center justify-center px-4"
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.6, duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-primary-blue to-accent-red rounded-full flex items-center justify-center shadow-lg">
                    <ArrowRight className="w-8 h-8 text-white" />
                  </div>
                </motion.div>
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Mobile Arrow (Between Cards) */}
        <div className="md:hidden flex justify-center py-8">
          <motion.div
            className="w-12 h-12 bg-gradient-to-r from-primary-blue to-accent-red rounded-full flex items-center justify-center shadow-lg"
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            viewport={{ once: true }}
            animate={{ rotate: 90 }}
          >
            <ArrowRight className="w-6 h-6 text-white" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LearningPathVisualization;