'use client';

import React, { memo } from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle, FileText, Sparkles, ArrowRight, ArrowDown, Users, CheckSquare, Zap } from 'lucide-react';

interface TransformationStage {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  bgPattern: string;
  colorScheme: string;
}

const TransformationProcess: React.FC = memo(() => {
  const stages: TransformationStage[] = [
    {
      id: 'chaos',
      title: 'État de Confusion',
      description: 'Équipes dispersées, coordination difficile, priorités floues',
      icon: <AlertTriangle className="w-8 h-8" />,
      bgPattern: 'from-accent-red/20 via-background-dark to-background-dark-alt',
      colorScheme: 'text-accent-red border-accent-red/40'
    },
    {
      id: 'specification',
      title: 'Spécifications Claires',
      description: 'Documentation structurée, tâches atomiques, instructions précises',
      icon: <FileText className="w-8 h-8" />,
      bgPattern: 'from-primary-blue/20 via-background-dark to-background-dark-alt',
      colorScheme: 'text-primary-blue border-primary-blue/40'
    },
    {
      id: 'completion',
      title: 'Applications Fonctionnelles',
      description: 'Prototypes créés par IA, développement efficace, résultats concrets',
      icon: <Sparkles className="w-8 h-8" />,
      bgPattern: 'from-accent-yellow/20 via-background-dark to-background-dark-alt',
      colorScheme: 'text-accent-yellow border-accent-yellow/40'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, staggerChildren: 0.3 }
    }
  } as const;

  const stageVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] }
    }
  } as const;

  const arrowVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.5, delay: 0.4 }
    }
  } as const;

  return (
    <section className="relative py-20 bg-gradient-to-br from-background-dark via-background-dark-alt to-background-dark overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-72 h-72 bg-primary-blue/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent-yellow/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary-blue/10 rounded-full blur-3xl opacity-15 animate-pulse delay-2000"></div>
      </div>
      
      {/* Background grid pattern with squares */}
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
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-16"
        >
          <h2 className="text-h1 font-bold mb-6 bg-gradient-to-r from-text-light via-primary-blue to-accent-red bg-clip-text text-transparent">
            Transformation Progressive
          </h2>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto leading-relaxed">
            De la confusion initiale aux applications fonctionnelles grâce à notre méthodologie
          </p>
        </motion.div>

        {/* Transformation stages */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 items-center mb-16"
        >
          {stages.map((stage, index) => (
            <React.Fragment key={stage.id}>
              {/* Stage Card */}
              <motion.div
                variants={stageVariants}
                className="relative group"
              >
                <div className={`relative bg-gradient-to-br ${stage.bgPattern} backdrop-blur-sm rounded-2xl p-8 border ${stage.colorScheme} shadow-xl transition-all duration-300 group-hover:shadow-2xl group-hover:scale-105`}>
                  {/* Chaos state pattern */}
                  {stage.id === 'chaos' && (
                    <div className="absolute inset-0 opacity-10">
                      <div className="absolute top-4 left-4 w-3 h-3 bg-accent-red rounded-full animate-ping"></div>
                      <div className="absolute top-8 right-6 w-2 h-2 bg-accent-red rounded-full animate-pulse delay-300"></div>
                      <div className="absolute bottom-6 left-8 w-4 h-4 bg-accent-red rounded-full animate-bounce delay-700"></div>
                      <div className="absolute bottom-4 right-4 w-2 h-2 bg-accent-red rounded-full animate-ping delay-1000"></div>
                    </div>
                  )}

                  {/* Specification state pattern */}
                  {stage.id === 'specification' && (
                    <div className="absolute inset-0 opacity-10">
                      <div className="grid grid-cols-4 gap-1 p-4 h-full">
                        {Array.from({ length: 16 }, (_, i) => (
                          <motion.div
                            key={i}
                            className="bg-primary-blue rounded-sm"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: [0, 1, 0] }}
                            transition={{
                              duration: 2,
                              delay: i * 0.1,
                              repeat: Infinity,
                              repeatDelay: 1
                            }}
                          />
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Completion state pattern */}
                  {stage.id === 'completion' && (
                    <div className="absolute inset-0 opacity-15">
                      <motion.div
                        className="absolute top-4 right-4 text-accent-yellow"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                      >
                        <Zap size={20} />
                      </motion.div>
                      <motion.div
                        className="absolute bottom-4 left-4 text-accent-yellow"
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 2, repeat: Infinity, ease: [0.4, 0, 0.6, 1] }}
                      >
                        <CheckSquare size={16} />
                      </motion.div>
                    </div>
                  )}

                  {/* Icon container */}
                  <motion.div
                    className={`w-16 h-16 ${stage.colorScheme.split(' ')[0]}/20 rounded-lg flex items-center justify-center mb-6 mx-auto`}
                    animate={
                      stage.id === 'chaos' 
                        ? { x: [0, -5, 0], rotate: [-1, 1, -1] }
                        : stage.id === 'specification'
                        ? { y: [0, -3, 0], scale: [1, 1.02, 1] }
                        : { scale: [1, 1.05, 1], rotate: [0, 2, 0] }
                    }
                    transition={{
                      duration: stage.id === 'chaos' ? 3 : stage.id === 'specification' ? 2.5 : 2,
                      repeat: Infinity,
                      ease: [0.4, 0, 0.6, 1]
                    }}
                  >
                    <div className={stage.colorScheme.split(' ')[0]}>
                      {stage.icon}
                    </div>
                  </motion.div>

                  {/* Content */}
                  <div className="text-center">
                    <h3 className="text-xl font-bold text-text-light mb-4">
                      {stage.title}
                    </h3>
                    <p className="text-text-secondary leading-relaxed">
                      {stage.description}
                    </p>
                  </div>

                  {/* Step number */}
                  <div className="absolute -top-3 -left-3 w-8 h-8 bg-gradient-to-br from-accent-red to-primary-blue rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg">
                    {index + 1}
                  </div>
                </div>
              </motion.div>

              {/* Arrow between stages */}
              {index < stages.length - 1 && (
                <motion.div
                  variants={arrowVariants}
                  className="flex justify-center items-center"
                >
                  {/* Desktop arrow */}
                  <motion.div
                    className="hidden lg:block text-accent-red/60"
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: [0.4, 0, 0.6, 1] }}
                  >
                    <ArrowRight size={32} />
                  </motion.div>
                  
                  {/* Mobile arrow */}
                  <motion.div
                    className="block lg:hidden text-accent-red/60"
                    animate={{ y: [0, 5, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: [0.4, 0, 0.6, 1] }}
                  >
                    <ArrowDown size={28} />
                  </motion.div>
                </motion.div>
              )}
            </React.Fragment>
          ))}
        </motion.div>

        {/* Description text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-gradient-to-br from-background-accent-grey/90 to-background-light-grey/90 backdrop-blur-sm rounded-2xl p-8 max-w-5xl mx-auto border border-primary-blue/40 shadow-xl"
        >
          <div className="text-center">
            <div className="flex items-center justify-center mb-6">
              <Users className="w-6 h-6 text-primary-blue mr-3" />
              <span className="text-lg font-semibold text-text-light">
                Notre Méthodologie
              </span>
            </div>
            <p className="text-text-secondary leading-relaxed text-lg">
              Les équipes <strong className="text-primary-blue">apprennent à communiquer avec des 
              agents IA</strong> pour passer directement de leurs idées à des prototypes fonctionnels sans coder. 
              Notre formation enseigne le <strong className="text-accent-yellow">"développement par spécification"</strong> où 
              les participants maîtrisent l'art de donner des instructions précises aux IA pour créer des applications, 
              <strong className="text-accent-red"> rendant le développement logiciel accessible à tous</strong>.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
});

TransformationProcess.displayName = 'TransformationProcess';

export default TransformationProcess;