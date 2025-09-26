'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { Code, Briefcase, ArrowRight, Cpu, Users, Zap, BarChart3, BookOpen, Star, Clock } from 'lucide-react';
import { useTranslations } from 'next-intl';

const TrackSelection: React.FC = () => {
  const t = useTranslations('tracks');
  
  const tracks = [
    {
      id: "debutant",
      icon: <Code className="w-12 h-12" />,
      title: t('formations.debutant.title'),
      subtitle: t('formations.debutant.subtitle'),
      description: t('formations.debutant.description'),
      duration: t('formations.debutant.duration'),
      level: t('formations.debutant.level'),
      price: t('formations.debutant.price'),
      features: [
        t('formations.debutant.features.0'),
        t('formations.debutant.features.1'),
        t('formations.debutant.features.2'),
        t('formations.debutant.features.3')
      ],
      benefits: [
        { icon: Zap, text: t('formations.debutant.benefits.0') },
        { icon: Users, text: t('formations.debutant.benefits.1') },
        { icon: BookOpen, text: t('formations.debutant.benefits.2') }
      ],
      cta: t('formations.debutant.cta'),
      href: "/formation-kickstart",
      color: "yellow-500",
      gradient: "from-yellow-500/20 via-yellow-400/10 to-yellow-300/5",
      badge: "",
      footer: t('formations.debutant.footer')
    },
    {
      id: "avance",
      icon: <Zap className="w-12 h-12" />,
      title: t('formations.avance.title'),
      subtitle: t('formations.avance.subtitle'),
      description: t('formations.avance.description'),
      duration: t('formations.avance.duration'),
      level: t('formations.avance.level'),
      price: t('formations.avance.price'),
      features: [
        t('formations.avance.features.0'),
        t('formations.avance.features.1'),
        t('formations.avance.features.2'),
        t('formations.avance.features.3')
      ],
      benefits: [
        { icon: Cpu, text: t('formations.avance.benefits.0') },
        { icon: Zap, text: t('formations.avance.benefits.1') },
        { icon: Star, text: t('formations.avance.benefits.2') }
      ],
      cta: t('formations.avance.cta'),
      href: "/formation-avance",
      color: "primary-blue",
      gradient: "from-primary-blue/20 via-primary-blue/10 to-accent-purple/5",
      badge: "",
      footer: t('formations.avance.footer')
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
    <section id="track-selection" className="py-24 bg-gradient-to-br from-background-dark to-background-dark-alt relative overflow-hidden">
      {/* Background grid pattern with squares - Same as Hero */}
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
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center space-x-3 mb-4">
            <div className="w-12 h-12 bg-gradient-to-r from-yellow-500/20 to-primary-blue/20 rounded-xl flex items-center justify-center">
              <BookOpen className="w-6 h-6 text-primary-blue" />
            </div>
            <span className="text-lg font-semibold text-primary-blue bg-primary-blue/10 px-4 py-2 rounded-full">
              {t('header.badge')}
            </span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-text-light">
            {t('header.title')}
          </h2>
          <p className="text-xl text-text-primary max-w-4xl mx-auto leading-relaxed">
            {t('header.subtitle')}
          </p>
        </motion.div>

        {/* Track Cards */}
        <motion.div
          className="grid lg:grid-cols-2 gap-6 mb-16 max-w-4xl mx-auto"
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
              <div className={`relative bg-gradient-to-br ${track.gradient} border-2 border-${track.color}/30 rounded-xl p-4 hover:border-${track.color}/60 hover:scale-[1.02] transition-all duration-300 h-full group-hover:shadow-2xl group-hover:shadow-${track.color}/20`}>
                
                {/* Badge */}
                {track.badge && (
                  <div className="absolute -top-3 -right-3">
                    <div className={`bg-${track.color} text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg`}>
                      {track.badge}
                    </div>
                  </div>
                )}

                {/* Header with pricing */}
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-start gap-4">
                    <div className={`w-10 h-10 bg-gradient-to-r from-${track.color}/30 to-${track.color}/20 rounded-lg flex items-center justify-center group-hover:from-${track.color}/40 group-hover:to-${track.color}/30 transition-all duration-300 shadow-lg`}>
                      <div className={`text-${track.color} group-hover:scale-110 transition-transform duration-300`}>
                        {track.icon}
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className={`text-lg font-bold text-${track.color} mb-1`}>
                        {track.title}
                      </h3>
                      <p className="text-text-light font-medium text-sm mb-1">
                        {track.subtitle}
                      </p>
                      <div className="flex items-center space-x-3 text-xs">
                        <div className="flex items-center space-x-1">
                          <Clock className="w-4 h-4 text-text-secondary" />
                          <span className="text-text-secondary">{track.duration}</span>
                        </div>
                        <div className={`bg-${track.color}/10 text-${track.color} px-2 py-1 rounded-lg font-medium`}>
                          {track.level}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className={`text-xl font-bold text-${track.color} mb-1`}>
                      {track.price}
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-text-light leading-relaxed mb-3 text-base group-hover:text-white transition-colors duration-300">
                  {track.description}
                </p>

                {/* Formation Modules */}
                <div className="mb-3">
                  <h4 className="text-text-light font-semibold mb-2 flex items-center text-sm">
                    <BookOpen className="w-3 h-3 mr-2" />
                    {t('labels.program')}
                  </h4>
                  <div className="space-y-1">
                    {track.features.map((feature: string, idx: number) => (
                      <div key={idx} className={`flex items-start gap-2 p-2 bg-${track.color}/5 rounded-md border border-${track.color}/20`}>
                        <div className={`w-5 h-5 bg-${track.color}/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5`}>
                          <span className={`text-${track.color} font-bold text-xs`}>{idx + 1}</span>
                        </div>
                        <span className="text-text-light font-medium text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Benefits */}
                <div className="mb-4">
                  <h4 className="text-text-light font-semibold mb-2 flex items-center text-sm">
                    <Star className="w-3 h-3 mr-2" />
                    {t('labels.benefits')}
                  </h4>
                  <div className="grid gap-2">
                    {track.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-center gap-2 p-2 bg-white/5 rounded-md border border-white/10">
                        <benefit.icon className={`w-4 h-4 text-${track.color} flex-shrink-0`} />
                        <span className="text-text-light font-medium text-sm">{benefit.text}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA - Enhanced with color */}
                <div className="mt-4">
                  <Button 
                    variant="primary"
                    size="lg" 
                    href={track.href}
                    className={`w-full group relative overflow-hidden bg-gradient-to-r from-${track.color} to-${track.color}/80 hover:from-${track.color}/90 hover:to-${track.color} shadow-xl hover:shadow-2xl hover:shadow-${track.color}/30 transform hover:scale-105 transition-all duration-300 font-bold text-base py-3 text-white border-0`}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <span className="relative z-10 flex items-center justify-center">
                      {track.cta}
                      <ArrowRight className="ml-2 h-5 w-5 transition-all duration-300 group-hover:translate-x-2 group-hover:scale-110" />
                    </span>
                  </Button>
                  <p className={`text-center text-${track.color} text-xs mt-2 font-medium`}>
                    {track.footer}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default TrackSelection;