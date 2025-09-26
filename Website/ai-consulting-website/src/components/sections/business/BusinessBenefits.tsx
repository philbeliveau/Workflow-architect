'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Search, Target, Layers, Zap, Rocket, ArrowRight, Brain, CheckCircle, Code } from 'lucide-react';
import { useTranslations } from 'next-intl';

const BusinessBenefits: React.FC = () => {
  const t = useTranslations('business.benefits');
  const processT = useTranslations('business.benefits.process');
  const ctaT = useTranslations('business.cta');

  const prototypeSteps = [
    {
      step: processT('steps.0.title'),
      icon: <Search className="w-8 h-8" />,
      color: "primary-blue",
      description: processT('steps.0.description')
    },
    {
      step: processT('steps.1.title'),
      icon: <Zap className="w-8 h-8" />,
      color: "accent-red", 
      description: processT('steps.1.description')
    },
    {
      step: processT('steps.2.title'),
      icon: <Target className="w-8 h-8" />,
      color: "primary-blue",
      description: processT('steps.2.description')
    },
    {
      step: processT('steps.3.title'),
      icon: <Layers className="w-8 h-8" />,
      color: "accent-red",
      description: processT('steps.3.description')
    },
    {
      step: processT('steps.4.title'),
      icon: <CheckCircle className="w-8 h-8" />,
      color: "primary-blue",
      description: processT('steps.4.description')
    }
  ];

  const realBottlenecks = [
    {
      icon: <Brain className="w-6 h-6" />,
      title: t('features.0.title'),
      description: t('features.0.description')
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: t('features.1.title'),
      description: t('features.1.description')
    },
    {
      icon: <Rocket className="w-6 h-6" />,
      title: t('features.2.title'),
      description: t('features.2.description')
    }
  ];


  return (
    <section className="py-24 bg-background-dark-alt">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-h1 font-bold mb-6 text-text-primary">
            {t('title')}
          </h2>
          <p className="text-xl text-text-secondary max-w-4xl mx-auto leading-relaxed">
            {t('description')} <span className="text-primary-blue font-semibold">{t('description_highlight')}</span>
          </p>
        </motion.div>

        {/* Autonomy Benefits */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-r from-primary-blue/10 to-accent-red/10 border border-primary-blue/20 rounded-2xl p-8 text-center">
            
            <div className="grid md:grid-cols-3 gap-6">
              {realBottlenecks.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  className="bg-background-accent-grey/70 rounded-xl p-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="text-primary-blue mb-3 flex justify-center">
                    {benefit.icon}
                  </div>
                  <h4 className="text-primary-blue font-bold mb-2">
                    {benefit.title}
                  </h4>
                  <p className="text-text-secondary text-sm leading-relaxed">
                    {benefit.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>


        {/* Agent Mastery Flow Diagram */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-text-primary mb-4">
              {processT('title')}
            </h3>
            <p className="text-text-secondary text-lg max-w-3xl mx-auto">
              {processT('description')}
            </p>
          </div>

          {/* Desktop Flow - Horizontal */}
          <div className="hidden lg:block relative">
            {/* Connection Lines */}
            <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-primary-blue via-primary-blue via-accent-red via-accent-red to-accent-red opacity-40 transform -translate-y-1/2"></div>
            
            <div className="flex items-center justify-between gap-4">
              {prototypeSteps.map((step, index) => (
                <React.Fragment key={step.step}>
                  <motion.div
                    className="group relative w-72"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.2 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className={`bg-gradient-to-br from-${step.color}/10 to-${step.color}/5 border-2 border-${step.color}/30 rounded-2xl p-6 h-48 flex flex-col justify-center hover:border-${step.color}/60 transition-all duration-300 relative z-10 shadow-lg hover:shadow-xl`}>
                      {/* Step Number */}
                      <div className={`absolute -top-4 -left-4 w-8 h-8 bg-background-dark border-2 border-${step.color} rounded-full flex items-center justify-center shadow-lg`}>
                        <span className={`text-${step.color} font-bold text-sm`}>{index + 1}</span>
                      </div>

                      {/* Content */}
                      <div className="text-center">
                        <div className={`w-12 h-12 bg-gradient-to-r from-${step.color}/20 to-${step.color}/40 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:from-${step.color}/30 group-hover:to-${step.color}/50 transition-all duration-300`}>
                          <div className={`text-${step.color}`}>
                            {step.icon}
                          </div>
                        </div>
                        <h4 className={`text-xl font-bold text-${step.color} mb-2`}>
                          {step.step}
                        </h4>
                        <p className="text-text-secondary text-sm">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>

                  {/* Arrow between steps */}
                  {index < prototypeSteps.length - 1 && (
                    <motion.div
                      className="flex items-center justify-center w-8 z-20 relative"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: (index * 0.2) + 0.1 }}
                      viewport={{ once: true }}
                    >
                      <ArrowRight className="w-6 h-6 text-primary-blue animate-pulse" />
                    </motion.div>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>

          {/* Mobile Flow - Vertical */}
          <div className="lg:hidden space-y-8">
            {prototypeSteps.map((step, index) => (
              <motion.div
                key={step.step}
                className="group relative"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className={`bg-gradient-to-br from-${step.color}/10 to-${step.color}/5 border-2 border-${step.color}/30 rounded-2xl p-6`}>
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 bg-gradient-to-r from-${step.color}/20 to-${step.color}/40 rounded-full flex items-center justify-center flex-shrink-0`}>
                      <div className={`text-${step.color}`}>
                        {step.icon}
                      </div>
                    </div>
                    <div className="flex-1">
                      <h4 className={`text-lg font-bold text-${step.color} mb-1`}>
                        {index + 1}. {step.step}
                      </h4>
                      <p className="text-text-secondary text-sm">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
                
                {/* Vertical Arrow */}
                {index < prototypeSteps.length - 1 && (
                  <div className="flex justify-center py-4">
                    <ArrowRight className="w-6 h-6 text-primary-blue rotate-90" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-r from-primary-blue/5 to-accent-red/5 border border-primary-blue/20 rounded-2xl p-8">
            <h4 className="text-2xl font-bold text-text-primary mb-4">
              {ctaT('title')}
            </h4>
            <p className="text-text-secondary text-lg mb-6 max-w-2xl mx-auto">
              {ctaT('description')}
              <strong className="text-primary-blue"> {ctaT('description_highlight')} </strong>
              {ctaT('description_end')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link 
                href="/formation" 
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary-blue to-accent-red text-white font-bold text-lg rounded-xl hover:from-accent-red hover:to-primary-blue transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
{ctaT('button')}
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <div className="text-text-secondary text-sm">
                {ctaT('supporting_text')}
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default BusinessBenefits;