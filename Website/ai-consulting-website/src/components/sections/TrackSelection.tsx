'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { Code, Briefcase, ArrowRight, Cpu, Users, Zap, BarChart3 } from 'lucide-react';
import { useTranslations } from 'next-intl';

const TrackSelection: React.FC = () => {
  const t = useTranslations('trackSelection');
  
  const tracks = [
    {
      id: "developers",
      icon: <Code className="w-12 h-12" />,
      title: t('developers.title'),
      subtitle: t('developers.subtitle'),
      description: t('developers.description'),
      features: [
        t('developers.features.0'),
        t('developers.features.1'),
        t('developers.features.2'),
        t('developers.features.3'),
        t('developers.features.4')
      ],
      benefits: [
        { icon: Cpu, text: t('developers.benefits.0') },
        { icon: Zap, text: t('developers.benefits.1') },
        { icon: BarChart3, text: t('developers.benefits.2') }
      ],
      cta: t('developers.cta'),
      href: "/developers",
      color: "accent-blue",
      gradient: "from-accent-blue/10 to-accent-purple/10"
    },
    {
      id: "business",
      icon: <Briefcase className="w-12 h-12" />,
      title: t('business.title'),
      subtitle: t('business.subtitle'),
      description: t('business.description'),
      features: [
        t('business.features.0'),
        t('business.features.1'),
        t('business.features.2'),
        t('business.features.3'),
        t('business.features.4')
      ],
      benefits: [
        { icon: Users, text: t('business.benefits.0') },
        { icon: Zap, text: t('business.benefits.1') },
        { icon: BarChart3, text: t('business.benefits.2') }
      ],
      cta: t('business.cta'),
      href: "/business",
      color: "accent-purple",
      gradient: "from-accent-purple/10 to-accent-teal/10"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 30,
      scale: 0.95
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8
      }
    }
  };

  return (
    <section id="track-selection" className="py-24 bg-gradient-to-br from-primary-900 to-primary-800 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="grid grid-cols-8 gap-4 h-full p-8">
          {Array.from({ length: 64 }, (_, i) => (
            <div 
              key={i} 
              className="bg-accent-blue rounded-lg animate-pulse" 
              style={{
                animationDelay: `${i * 0.1}s`,
                animationDuration: '4s'
              }}
            />
          ))}
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
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
            {t('subtitle')}
            <span className="text-accent-blue font-semibold"> {t('highlight')}</span>
          </p>
        </motion.div>

        {/* Track Cards */}
        <motion.div
          className="grid lg:grid-cols-2 gap-8 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {tracks.map((track, index) => (
            <motion.div
              key={track.id}
              className="group"
              variants={cardVariants}
            >
              <div className={`relative bg-gradient-to-br ${track.gradient} border border-primary-700 rounded-3xl p-8 hover:border-${track.color}/50 transition-all duration-300 h-full`}>
                {/* Icon and header */}
                <div className="flex items-start gap-6 mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-r from-${track.color}/20 to-${track.color}/30 rounded-2xl flex items-center justify-center group-hover:from-${track.color}/30 group-hover:to-${track.color}/40 transition-all duration-300`}>
                    <div className={`text-${track.color} group-hover:text-${track.color}-light transition-colors duration-300`}>
                      {track.icon}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-h2 font-bold text-text-primary group-hover:text-white transition-colors duration-300 mb-2">
                      {track.title}
                    </h3>
                    <p className={`text-${track.color} font-medium text-lg`}>
                      {track.subtitle}
                    </p>
                  </div>
                </div>

                {/* Description */}
                <p className="text-text-secondary leading-relaxed mb-6 group-hover:text-text-primary/90 transition-colors duration-300">
                  {track.description}
                </p>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="text-text-primary font-semibold mb-3">Ce que vous obtenez :</h4>
                  <ul className="space-y-2">
                    {track.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-text-secondary text-sm">
                        <div className={`w-1.5 h-1.5 bg-${track.color} rounded-full mt-2 flex-shrink-0`}></div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Benefits */}
                <div className="mb-8">
                  <h4 className="text-text-primary font-semibold mb-3">Résultats typiques :</h4>
                  <div className="space-y-3">
                    {track.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <benefit.icon className={`w-4 h-4 text-${track.color}`} />
                        <span className="text-text-secondary text-sm">{benefit.text}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <Button 
                  variant="primary"
                  size="lg" 
                  href={track.href}
                  className="w-full group"
                >
                  {track.cta}
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom section */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="bg-primary-800/50 border border-primary-700 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-h3 font-bold text-text-primary mb-4">
              {t('keyInsight.title')}
            </h3>
            <div className="grid md:grid-cols-2 gap-6 text-left">
              <div>
                <h4 className="text-accent-blue font-semibold mb-2">{t('keyInsight.clientDashboard')}</h4>
                <p className="text-text-secondary text-sm">{t('keyInsight.clientSolution')}</p>
              </div>
              <div>
                <h4 className="text-accent-purple font-semibold mb-2">{t('keyInsight.authSystem')}</h4>
                <p className="text-text-secondary text-sm">{t('keyInsight.authSolution')}</p>
              </div>
            </div>
            <div className="mt-6">
              <Button variant="outline" size="md" href="/book-demo">
                {t('keyInsight.notSure')}
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TrackSelection;