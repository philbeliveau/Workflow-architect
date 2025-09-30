'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Github, Settings, Database, FileText, Zap, Code, Brain } from 'lucide-react';

const ToolsTrustSection: React.FC = () => {
  const tools = [
    {
      name: "Cursor",
      icon: <Code className="w-6 h-6 sm:w-8 sm:h-8" />,
      description: "Édition assistée",
      color: "bg-white"
    },
    {
      name: "Roo code",
      icon: <Settings className="w-6 h-6 sm:w-8 sm:h-8" />,
      description: "Orchestration et agents spécialisés",
      color: "bg-white"
    },
    {
      name: "Claude-code",
      icon: <Brain className="w-6 h-6 sm:w-8 sm:h-8" />,
      description: "Code génération & architecture",
      color: "bg-white"
    },
    {
      name: "Wrapper d'orchestration",
      icon: <Zap className="w-6 h-6 sm:w-8 sm:h-8" />,
      description: "Orchestration d'agents",
      color: "bg-white"
    },
    {
      name: "Banque d'agents",
      icon: <Database className="w-6 h-6 sm:w-8 sm:h-8" />,
      description: "Agents spécialisés",
      color: "bg-white"
    }
  ];


  return (
    <section
      className="py-24 relative overflow-hidden"
      style={{
        background: 'var(--hero-gradient)'
      }}
    >

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-h1 font-light mb-4 sm:mb-6 text-text-primary">
            Outils que nous maîtrisons
          </h2>
          <p className="text-lg sm:text-xl text-text-secondary max-w-4xl mx-auto leading-relaxed px-4">
            Garde le même UI, les outils sont des wrapper autour de claude-code 
            <span className="text-accent-blue font-semibold"> pour des résultats en production.</span>
          </p>
        </motion.div>

        {/* Tools Grid with Brutalist Style */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 mb-20 max-w-6xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {tools.map((tool, index) => (
            <motion.div
              key={tool.name}
              className="group relative"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              {/* Brutalist Button Style */}
              <div className="relative">
                <div className="absolute inset-0 bg-black translate-x-1 translate-y-1 rounded-xl"></div>
                <div className={`relative ${tool.color} border-3 border-black rounded-xl p-4 sm:p-6 transition-all duration-300 group-hover:-translate-x-1 group-hover:-translate-y-1 cursor-pointer min-h-[140px] flex flex-col justify-center`}>
                  {/* Icon */}
                  <div className="flex justify-center items-center mb-4">
                    <div className="text-black flex justify-center items-center">
                      {tool.icon}
                    </div>
                  </div>
                  
                  {/* Tool Name */}
                  <div className="text-center">
                    <div className="text-black font-bold text-base sm:text-lg mb-2">{tool.name}</div>
                    <div className="text-black/80 text-xs sm:text-sm">{tool.description}</div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>


      </div>
    </section>
  );
};

export default ToolsTrustSection;