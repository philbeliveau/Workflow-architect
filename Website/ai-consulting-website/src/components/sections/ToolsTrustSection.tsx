'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Github, Settings, Database, FileText, Zap, Code, Brain } from 'lucide-react';

const ToolsTrustSection: React.FC = () => {
  const tools = [
    {
      name: "Claude",
      icon: <Brain className="w-8 h-8" />,
      description: "Code génération & architecture",
      color: "bg-[#d97706]"
    },
    {
      name: "GitHub",
      icon: <Github className="w-8 h-8" />,
      description: "Actions & automatisation",
      color: "bg-[#1f2937]"
    },
    {
      name: "CrewAI",
      icon: <Zap className="w-8 h-8" />,
      description: "Agents multi-tâches",
      color: "bg-[#7c3aed]"
    },
    {
      name: "Jira",
      icon: <Settings className="w-8 h-8" />,
      description: "Gestion automatisée",
      color: "bg-[#0052cc]"
    },
    {
      name: "Cursor",
      icon: <Code className="w-8 h-8" />,
      description: "Édition assistée",
      color: "bg-[#000000]"
    },
    {
      name: "Confluence",
      icon: <FileText className="w-8 h-8" />,
      description: "Documentation auto",
      color: "bg-[#172b4d]"
    }
  ];

  const metrics = [
    { value: "+67%", label: "vitesse de revue" },
    { value: "+40%", label: "marges projet" },
    { value: "3 jours", label: "vs 3 semaines onboarding" },
    { value: "95%", label: "rétention client" }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-primary-800 to-primary-900 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="grid grid-cols-8 gap-4 h-full p-8">
          {Array.from({ length: 64 }, (_, i) => (
            <div 
              key={i} 
              className="bg-accent-blue rounded-lg animate-pulse" 
              style={{
                animationDelay: `${i * 0.1}s`,
                animationDuration: '3s'
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
            Outils que nous maîtrisons
          </h2>
          <p className="text-xl text-text-secondary max-w-4xl mx-auto leading-relaxed">
            Nous installons et configurons les outils IA les plus performants 
            <span className="text-accent-blue font-semibold"> pour des résultats en production.</span>
          </p>
        </motion.div>

        {/* Tools Grid with Brutalist Style */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-20"
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
                <div className={`relative ${tool.color} border-3 border-black rounded-xl p-6 transition-all duration-300 group-hover:-translate-x-1 group-hover:-translate-y-1 cursor-pointer`}>
                  {/* Icon */}
                  <div className="flex justify-center mb-4">
                    <div className="text-white">
                      {tool.icon}
                    </div>
                  </div>
                  
                  {/* Tool Name */}
                  <div className="text-center">
                    <div className="text-white font-bold text-lg mb-2">{tool.name}</div>
                    <div className="text-white/80 text-xs">{tool.description}</div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Metrics Section */}
        <motion.div
          className="grid grid-cols-2 lg:grid-cols-4 gap-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          {metrics.map((metric, index) => (
            <motion.div
              key={index}
              className="text-center bg-primary-900/50 backdrop-blur-sm border border-primary-700 rounded-2xl p-6 hover:border-accent-blue/50 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <div className="text-3xl font-bold text-accent-blue mb-2">
                {metric.value}
              </div>
              <div className="text-text-secondary text-sm">
                {metric.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Text */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-success-green/10 to-accent-blue/10 border border-success-green/20 rounded-full px-8 py-4">
            <Settings className="w-6 h-6 text-success-green" />
            <span className="text-text-primary font-medium">
              Installation complète • Configuration optimisée • Formation équipe
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ToolsTrustSection;