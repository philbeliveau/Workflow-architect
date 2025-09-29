'use client';

import React, { memo } from 'react';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { Database, Code, Globe, Zap, Shield, Server, Sparkles, Bot } from 'lucide-react';

interface CloudToolProps {
  name: string;
  icon: React.ReactNode;
  position: {
    top: string;
    left: string;
  };
  index: number;
  color: string;
}

const CloudTool: React.FC<CloudToolProps> = memo(({ name, icon, position, index, color }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{
        scale: 1.1,
        rotate: Math.random() > 0.5 ? 2 : -2,
        transition: { duration: 0.3 }
      }}
      className="absolute flex items-center space-x-2 group cursor-pointer"
      style={{ top: position.top, left: position.left }}
    >
      {/* Icon */}
      <div className="text-primary-blue group-hover:text-accent-yellow transition-colors duration-300">
        {icon}
      </div>
      
      {/* Tool Name */}
      <span className={`${color} font-bold text-lg md:text-xl group-hover:text-accent-yellow transition-colors duration-300`}>
        {name}
      </span>
    </motion.div>
  );
});

CloudTool.displayName = 'CloudTool';

const TechStackShowcase: React.FC = memo(() => {
  const t = useTranslations('tech_stack');
  
  const cloudTools = [
    { name: "Cursor", icon: <Code className="w-8 h-8" />, position: { top: "10%", left: "5%" }, color: "text-gray-200" },
    { name: "FastAPI", icon: <Zap className="w-8 h-8" />, position: { top: "10%", left: "25%" }, color: "text-gray-200" },
    { name: "Node.js", icon: <Server className="w-8 h-8" />, position: { top: "15%", left: "70%" }, color: "text-slate-200" },
    { name: "Next.js", icon: <Globe className="w-8 h-8" />, position: { top: "40%", left: "15%" }, color: "text-zinc-200" },
    { name: "Tailwind", icon: <Zap className="w-8 h-8" />, position: { top: "45%", left: "80%" }, color: "text-stone-200" },
    { name: "Supabase", icon: <Database className="w-8 h-8" />, position: { top: "75%", left: "25%" }, color: "text-neutral-200" },
    { name: "Prisma", icon: <Database className="w-8 h-8" />, position: { top: "25%", left: "45%" }, color: "text-gray-300" },
    { name: "NeonDB", icon: <Database className="w-8 h-8" />, position: { top: "65%", left: "70%" }, color: "text-slate-300" },
    { name: "Clerk", icon: <Shield className="w-8 h-8" />, position: { top: "80%", left: "50%" }, color: "text-zinc-300" },
    { name: "Claude", icon: <Bot className="w-8 h-8" />, position: { top: "60%", left: "5%" }, color: "text-stone-300" },
    { name: "Vercel", icon: <Globe className="w-8 h-8" />, position: { top: "30%", left: "85%" }, color: "text-neutral-300" }
  ];

  return (
    <section className="relative py-24 bg-gradient-to-br from-background-dark via-background-dark-alt to-background-dark overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-72 h-72 bg-accent-red/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent-yellow/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-text-light mb-4">
            {t('title')}
          </h2>
          <p className="text-xl text-text-primary max-w-3xl mx-auto mb-6">
            {t('subtitle')}
          </p>
          
          {/* Value proposition text */}
          <div className="max-w-4xl mx-auto space-y-4">
            <p className="text-lg text-text-secondary leading-relaxed">
              {t('description')}
            </p>
          </div>
        </motion.div>

        {/* Cloud Layout - Desktop */}
        <div className="hidden md:block relative min-h-[400px] md:min-h-[500px]">
          {/* Central "BUILD WITH AI" Element */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          >
            <div className="bg-gradient-to-br from-accent-yellow to-accent-red text-background-dark font-bold text-xl md:text-3xl px-8 py-4 rounded-2xl border-4 border-background-dark shadow-[8px_8px_0_#000000] hover:shadow-[12px_12px_0_#000000] hover:transform hover:-translate-x-1 hover:-translate-y-1 transition-all duration-300">
              <div className="flex items-center space-x-2">
                <Sparkles className="w-6 h-6 md:w-8 md:h-8" />
                <span>{t('cta_button')}</span>
                <Bot className="w-6 h-6 md:w-8 md:h-8" />
              </div>
            </div>
          </motion.div>

          {/* Cloud Tools */}
          {cloudTools.map((tool, index) => (
            <CloudTool
              key={tool.name}
              name={tool.name}
              icon={tool.icon}
              position={tool.position}
              index={index}
              color={tool.color}
            />
          ))}
        </div>

        {/* Mobile Word Cloud Layout */}
        <div className="md:hidden">
          <div className="relative min-h-[500px] px-4">
            {/* Central CTA Button - Fixed in center */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10"
            >
              <div className="bg-gradient-to-br from-accent-yellow to-accent-red text-background-dark font-bold text-lg px-6 py-3 rounded-2xl border-4 border-background-dark shadow-[6px_6px_0_#000000] hover:shadow-[8px_8px_0_#000000] hover:transform hover:-translate-x-1 hover:-translate-y-1 transition-all duration-300">
                <div className="flex items-center space-x-2">
                  <Sparkles className="w-5 h-5" />
                  <span>{t('cta_button')}</span>
                  <Bot className="w-5 h-5" />
                </div>
              </div>
            </motion.div>

            {/* Mobile Word Cloud - Positioned around center */}
            {[
              // Top area tools
              { ...cloudTools[0], position: { top: "15%", left: "10%" } }, // Cursor
              { ...cloudTools[1], position: { top: "20%", left: "65%" } }, // FastAPI
              { ...cloudTools[2], position: { top: "8%", left: "40%" } }, // Node.js
              
              // Left side tools  
              { ...cloudTools[3], position: { top: "35%", left: "2%" } }, // Next.js
              { ...cloudTools[9], position: { top: "65%", left: "15%" } }, // Claude
              
              // Right side tools
              { ...cloudTools[4], position: { top: "40%", left: "75%" } }, // Tailwind
              { ...cloudTools[10], position: { top: "60%", left: "70%" } }, // Vercel
              
              // Bottom area tools
              { ...cloudTools[5], position: { top: "80%", left: "25%" } }, // Supabase
              { ...cloudTools[6], position: { top: "85%", left: "55%" } }, // Prisma
              { ...cloudTools[7], position: { top: "75%", left: "45%" } }, // NeonDB
              { ...cloudTools[8], position: { top: "90%", left: "35%" } }, // Clerk
            ].map((tool, index) => (
              <motion.div
                key={tool.name}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: (index * 0.08) + 0.5 }}
                whileHover={{
                  scale: 1.1,
                  transition: { duration: 0.2 }
                }}
                className="absolute group cursor-pointer"
                style={{ 
                  top: tool.position.top, 
                  left: tool.position.left,
                  transform: `rotate(${(Math.random() * 8) - 4}deg)` // Random rotation for organic feel
                }}
              >
                <div className="flex items-center space-x-1.5 bg-background-accent-grey/50 backdrop-blur-sm rounded-full px-2.5 py-1.5 border border-primary-blue/30 hover:border-accent-yellow/60 hover:bg-background-accent-grey/70 transition-all duration-300 shadow-lg">
                  {/* Icon */}
                  <div className="text-primary-blue group-hover:text-accent-yellow transition-colors duration-300">
                    {React.cloneElement(tool.icon as React.ReactElement, { className: "w-3.5 h-3.5" })}
                  </div>
                  
                  {/* Tool Name */}
                  <span className={`${tool.color} font-medium text-xs group-hover:text-accent-yellow transition-colors duration-300 whitespace-nowrap`}>
                    {tool.name}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>

      {/* CSS for shine animation */}
      <style jsx>{`
        @keyframes shine {
          0% { transform: translateX(-100%) skew(-45deg); }
          100% { transform: translateX(200%) skew(-45deg); }
        }
      `}</style>
    </section>
  );
});

TechStackShowcase.displayName = 'TechStackShowcase';

export default TechStackShowcase;