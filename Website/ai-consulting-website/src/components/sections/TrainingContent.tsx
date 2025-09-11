'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Wrench, Eye, Code2, Bot, Zap, Target, Rocket } from 'lucide-react';
import { useTranslations } from 'next-intl';

const TrainingContent: React.FC = () => {
  const t = useTranslations('training');
  
  const moduleIcons = [
    <Brain key={0} className="w-6 h-6" />,
    <Target key={1} className="w-6 h-6" />,
    <Eye key={2} className="w-6 h-6" />,
    <Code2 key={3} className="w-6 h-6" />,
    <Bot key={4} className="w-6 h-6" />,
    <Wrench key={5} className="w-6 h-6" />,
    <Zap key={6} className="w-6 h-6" />,
    <Rocket key={7} className="w-6 h-6" />
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const moduleVariants = {
    hidden: { 
      opacity: 0, 
      y: 20
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section className="py-24 bg-gradient-to-br from-background-dark via-background-dark-alt to-background-dark relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="grid grid-cols-10 gap-3 h-full p-6">
          {Array.from({ length: 100 }, (_, i) => (
            <div 
              key={i} 
              className="bg-accent-red rounded-lg animate-pulse" 
              style={{
                animationDelay: `${i * 0.08}s`,
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
            {t('subtitle').includes('structured') ? (
              <>
                <span className="text-accent-red font-semibold">8 structured modules</span> {t('subtitle').replace('8 structured modules', '')}
              </>
            ) : (
              <>
                <span className="text-accent-red font-semibold">8 modules structurés</span> {t('subtitle').replace('8 modules structurés', '')}
              </>
            )}
          </p>
        </motion.div>

        {/* Modules Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {[0, 1, 2, 3, 4, 5, 6, 7].map((index) => (
            <motion.div
              key={index}
              className="group relative bg-gradient-to-br from-primary-900/50 to-primary-800/30 backdrop-blur-sm border border-primary-700 rounded-2xl p-6 hover:border-accent-red/50 transition-all duration-300 hover:scale-105"
              variants={moduleVariants}
              whileHover={{ 
                y: -5,
                transition: { duration: 0.2 }
              }}
            >
              {/* Module number - removed per user request */}
              {/* <div className="absolute -top-3 -right-3 w-8 h-8 bg-gradient-to-r from-accent-red to-accent-red/80 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">{index + 1}</span>
              </div> */}

              {/* Icon */}
              <div className="mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-accent-red/20 to-accent-red/10 rounded-xl flex items-center justify-center group-hover:from-accent-red/30 group-hover:to-accent-red/20 transition-all duration-300">
                  <div className="text-accent-red group-hover:text-accent-red-light transition-colors duration-300">
                    {moduleIcons[index]}
                  </div>
                </div>
              </div>

              {/* Content */}
              <h3 className="text-lg font-semibold mb-3 text-text-primary group-hover:text-text-primary transition-colors duration-300 leading-tight">
                {t(`modules.${index}.title`)}
              </h3>
              <p className="text-text-secondary text-sm leading-relaxed group-hover:text-text-primary/90 transition-colors duration-300">
                {t(`modules.${index}.description`)}
              </p>

              {/* Hover effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-accent-red/0 via-accent-red/5 to-accent-red/0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TrainingContent;