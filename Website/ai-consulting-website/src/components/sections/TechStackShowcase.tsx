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
}

const CloudTool: React.FC<CloudToolProps> = memo(({ name, icon, position, index }) => {
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
      className="absolute flex items-center space-x-3 group cursor-pointer"
      style={{ top: position.top, left: position.left }}
    >
      {/* Icon */}
      <div className="text-primary-blue group-hover:text-accent-yellow transition-colors duration-300">
        {icon}
      </div>
      
      {/* Tool Name */}
      <span className="text-text-light font-bold text-lg md:text-xl group-hover:text-accent-yellow transition-colors duration-300">
        {name}
      </span>
    </motion.div>
  );
});

CloudTool.displayName = 'CloudTool';

const TechStackShowcase: React.FC = memo(() => {
  const t = useTranslations();
  
  const cloudTools = [
    { name: "Cursor", icon: <Code className="w-8 h-8" />, position: { top: "10%", left: "5%" } },
    { name: "Node.js", icon: <Server className="w-8 h-8" />, position: { top: "15%", left: "70%" } },
    { name: "Next.js", icon: <Globe className="w-8 h-8" />, position: { top: "40%", left: "15%" } },
    { name: "Tailwind", icon: <Zap className="w-8 h-8" />, position: { top: "45%", left: "80%" } },
    { name: "Supabase", icon: <Database className="w-8 h-8" />, position: { top: "75%", left: "25%" } },
    { name: "Prisma", icon: <Database className="w-8 h-8" />, position: { top: "25%", left: "45%" } },
    { name: "NeonDB", icon: <Database className="w-8 h-8" />, position: { top: "65%", left: "70%" } },
    { name: "Clerk", icon: <Shield className="w-8 h-8" />, position: { top: "80%", left: "50%" } },
    { name: "Claude", icon: <Bot className="w-8 h-8" />, position: { top: "60%", left: "5%" } },
    { name: "Vercel", icon: <Globe className="w-8 h-8" />, position: { top: "30%", left: "85%" } }
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
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-text-light mb-4">
            Les outils des professionnels
          </h2>
          <p className="text-xl text-text-primary max-w-3xl mx-auto mb-6">
            Maîtrisez la stack technologique de demain
          </p>
          
        </motion.div>

        {/* Cloud Layout */}
        <div className="relative min-h-[600px] md:min-h-[800px]">
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
                <span>BUILD</span>
                <span className="text-background-dark/80">WITH</span>
                <Bot className="w-6 h-6 md:w-8 md:h-8" />
                <span>AI</span>
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
            />
          ))}
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