'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { Star, Quote, ExternalLink, Trophy, Briefcase, Code } from 'lucide-react';
import { Button } from '@/components/ui/Button';

const SuccessStories: React.FC = () => {
  const t = useTranslations('parcours.success_stories');

  const stories = [
    {
      id: 'tech_student',
      name: t('stories.0.name'),
      role: t('stories.0.role'),
      journey: t('stories.0.journey'),
      outcome: t('stories.0.outcome'),
      quote: t('stories.0.quote'),
      progression: [
        t('stories.0.progression.0'),
        t('stories.0.progression.1'),
        t('stories.0.progression.2')
      ],
      icon: Code,
      gradient: 'from-blue-500 to-purple-600',
      rating: 5
    },
    {
      id: 'business_student',
      name: t('stories.1.name'),
      role: t('stories.1.role'),
      journey: t('stories.1.journey'),
      outcome: t('stories.1.outcome'),
      quote: t('stories.1.quote'),
      progression: [
        t('stories.1.progression.0'),
        t('stories.1.progression.1'),
        t('stories.1.progression.2')
      ],
      icon: Briefcase,
      gradient: 'from-green-500 to-blue-500',
      rating: 5
    },
    {
      id: 'freelancer',
      name: t('stories.2.name'),
      role: t('stories.2.role'),
      journey: t('stories.2.journey'),
      outcome: t('stories.2.outcome'),
      quote: t('stories.2.quote'),
      progression: [
        t('stories.2.progression.0'),
        t('stories.2.progression.1'),
        t('stories.2.progression.2')
      ],
      icon: Trophy,
      gradient: 'from-purple-500 to-pink-600',
      rating: 5
    }
  ];

  const portfolioExamples = [
    {
      level: t('portfolio.kickstart.level'),
      projects: [
        t('portfolio.kickstart.projects.0'),
        t('portfolio.kickstart.projects.1'),
        t('portfolio.kickstart.projects.2')
      ]
    },
    {
      level: t('portfolio.architecte.level'),
      projects: [
        t('portfolio.architecte.projects.0'),
        t('portfolio.architecte.projects.1'),
        t('portfolio.architecte.projects.2')
      ]
    }
  ];

  return (
    <section className="py-20 bg-background-dark-alt relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M50 50c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10zm10 0c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
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

        {/* Student Journey Stories */}
        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {stories.map((story, index) => {
            const IconComponent = story.icon;
            return (
              <motion.div
                key={story.id}
                className="group"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="h-full p-8 bg-background-dark/50 backdrop-blur-sm border border-primary-blue/30 rounded-2xl hover:border-primary-blue/50 transition-all duration-300 hover:transform hover:scale-[1.02]">
                  {/* Header */}
                  <div className="flex items-center justify-between mb-6">
                    <div className={`w-12 h-12 bg-gradient-to-r ${story.gradient} rounded-xl flex items-center justify-center`}>
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex items-center gap-1">
                      {[...Array(story.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </div>

                  {/* Student Info */}
                  <div className="mb-6">
                    <h3 className="text-xl font-bold text-text-light mb-2">{story.name}</h3>
                    <p className="text-text-secondary text-sm">{story.role}</p>
                  </div>

                  {/* Quote */}
                  <div className="mb-6 p-4 bg-background-dark-alt/50 rounded-xl border-l-4 border-primary-blue">
                    <Quote className="w-5 h-5 text-primary-blue mb-2" />
                    <p className="text-text-secondary italic leading-relaxed text-sm">
                      {story.quote}
                    </p>
                  </div>

                  {/* Journey & Outcome */}
                  <div className="space-y-4 mb-6">
                    <div>
                      <h4 className="font-semibold text-text-light mb-2 text-sm">{t('journey_label')}</h4>
                      <p className="text-text-secondary text-sm leading-relaxed">{story.journey}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-text-light mb-2 text-sm">{t('outcome_label')}</h4>
                      <p className="text-text-secondary text-sm leading-relaxed">{story.outcome}</p>
                    </div>
                  </div>

                  {/* Progression Steps */}
                  <div>
                    <h4 className="font-semibold text-text-light mb-3 text-sm">{t('progression_label')}</h4>
                    <div className="space-y-2">
                      {story.progression.map((step, stepIndex) => (
                        <motion.div
                          key={stepIndex}
                          className="flex items-center gap-3 text-sm"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: (index * 0.2) + (stepIndex * 0.1), duration: 0.5 }}
                          viewport={{ once: true }}
                        >
                          <div className={`w-6 h-6 bg-gradient-to-r ${story.gradient} rounded-full flex items-center justify-center text-white text-xs font-bold`}>
                            {stepIndex + 1}
                          </div>
                          <span className="text-text-secondary leading-relaxed">{step}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Portfolio Examples Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              <span className="bg-gradient-to-r from-primary-blue to-accent-red bg-clip-text text-transparent">
                {t('portfolio.title')}
              </span>
            </h3>
            <p className="text-text-secondary max-w-2xl mx-auto">
              {t('portfolio.subtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {portfolioExamples.map((example, index) => (
              <motion.div
                key={index}
                className="p-8 bg-background-dark/50 backdrop-blur-sm border border-primary-blue/30 rounded-2xl"
                initial={{ opacity: 0, x: index === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h4 className="text-xl font-bold text-text-light mb-6 text-center">
                  {example.level}
                </h4>
                <ul className="space-y-4">
                  {example.projects.map((project, projectIndex) => (
                    <motion.li
                      key={projectIndex}
                      className="flex items-start gap-3"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: (index * 0.2) + (projectIndex * 0.1), duration: 0.5 }}
                      viewport={{ once: true }}
                    >
                      <div className="w-2 h-2 bg-gradient-to-r from-primary-blue to-accent-red rounded-full mt-2 flex-shrink-0" />
                      <span className="text-text-secondary leading-relaxed">{project}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Career Progression CTA */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="inline-block p-8 bg-gradient-to-br from-primary-blue/10 to-accent-red/10 border border-primary-blue/30 rounded-2xl backdrop-blur-sm">
            <h3 className="text-2xl font-bold text-text-light mb-4">
              {t('career_progression.title')}
            </h3>
            <p className="text-text-secondary mb-6 max-w-lg">
              {t('career_progression.description')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="primary"
                size="lg"
                href="/formation-kickstart"
              >
                <span>{t('career_progression.cta_kickstart')}</span>
                <ExternalLink className="w-5 h-5 ml-2" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                href="/case-studies"
              >
                <span>{t('career_progression.cta_case_studies')}</span>
                <ExternalLink className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SuccessStories;