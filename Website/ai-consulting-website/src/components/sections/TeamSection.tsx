'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import Image from 'next/image';

const TeamSection: React.FC = () => {
  const t = useTranslations('team');
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
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

  // Get team members from translations - dynamically get all members
  const teamMembers = [
    {
      name: t('members.0.name'),
      title: t('members.0.title'),
      description: t('members.0.description'),
      image: t('members.0.image'),
      alt: t('members.0.alt')
    },
    {
      name: t('members.1.name'),
      title: t('members.1.title'),
      description: t('members.1.description'),
      image: t('members.1.image'),
      alt: t('members.1.alt')
    },
    {
      name: t('members.2.name'),
      title: t('members.2.title'),
      description: t('members.2.description'),
      image: t('members.2.image'),
      alt: t('members.2.alt')
    }
  ];

  return (
    <section id="team-section" className="py-24 relative overflow-hidden">
      {/* Environmental Background System - Same as Hero */}
      <div className="absolute inset-0">
        {/* Base environmental foundation */}
        <div className="hero-environment-base absolute inset-0 bg-gradient-to-br from-[#2a2a2a] via-[#353535] to-[#2a2a2a]" />
        
        {/* Atmospheric layer with brand colors */}
        <div className="hero-environment-atmosphere absolute inset-0 opacity-[0.08]">
          <div className="absolute inset-0 bg-gradient-radial from-[#74a6be] via-transparent to-transparent" 
               style={{ backgroundPosition: '20% 20%', backgroundSize: '100% 100%' }} />
          <div className="absolute inset-0 bg-gradient-radial from-[#fbbf24] via-transparent to-transparent" 
               style={{ backgroundPosition: '80% 80%', backgroundSize: '100% 100%' }} />
          <div className="absolute inset-0 bg-gradient-radial from-[#a7292e] via-transparent to-transparent" 
               style={{ backgroundPosition: '50% 50%', backgroundSize: '140% 140%' }} />
        </div>
        
        {/* Organic movement layer */}
        <motion.div 
          className="absolute inset-0 opacity-[0.05]"
          animate={{ 
            backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'],
          }}
          transition={{ 
            duration: 25, 
            repeat: Infinity, 
            ease: 'linear' 
          }}
          style={{
            background: `
              radial-gradient(circle at 30% 40%, #74a6be 0%, transparent 50%),
              radial-gradient(circle at 70% 60%, #fbbf24 0%, transparent 50%)
            `,
            backgroundSize: '200% 200%'
          }}
        />
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
          </p>
        </motion.div>

        {/* Team Member Cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              className="group"
              variants={cardVariants}
            >
              <div className="relative bg-gradient-to-br from-primary-blue/30 to-accent-red/30 border border-text-muted/60 rounded-3xl p-8 hover:border-primary-blue/70 transition-all duration-300 h-full">
                <div className="flex flex-col items-center text-center space-y-6">
                  {/* Profile Image */}
                  <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-primary-blue/20 group-hover:border-primary-blue/40 transition-all duration-300">
                    <Image
                      src={member.image}
                      alt={member.alt}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  
                  {/* Name and Title */}
                  <div className="space-y-2">
                    <h3 className="text-h2 font-bold text-text-primary group-hover:text-text-primary transition-colors duration-300">
                      {member.name}
                    </h3>
                    <p className="text-primary-blue font-medium text-lg">
                      {member.title}
                    </p>
                  </div>
                  
                  {/* Description */}
                  <p className="text-text-secondary leading-relaxed group-hover:text-text-primary/90 transition-colors duration-300">
                    {member.description}
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

export default TeamSection;