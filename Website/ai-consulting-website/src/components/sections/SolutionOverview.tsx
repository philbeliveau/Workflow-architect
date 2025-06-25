'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Search, Settings, TrendingUp, ArrowRight } from 'lucide-react';

const SolutionOverview: React.FC = () => {
  const steps = [
    {
      number: "01",
      icon: <Search className="w-8 h-8" />,
      title: "Auditez votre flux de travail actuel",
      description: "Nous analysons votre processus de développement existant, identifions les goulots d'étranglement et cartographions exactement où l'IA peut avoir le plus grand impact. Aucune recommandation générique – tout est adapté aux besoins spécifiques et à la pile technologique de votre équipe."
    },
    {
      number: "02",
      icon: <Settings className="w-8 h-8" />,
      title: "Implémentez l'automatisation IA",
      description: "En travaillant aux côtés de votre équipe, nous intégrons les bons outils IA dans votre flux de travail quotidien. De la génération de code aux tests automatisés, de la documentation aux revues de PR – nous gérons la configuration, la configuration et la formation."
    },
    {
      number: "03",
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Mesurez et optimisez les résultats",
      description: "Nous suivons des métriques spécifiques : temps de livraison, qualité du code, satisfaction des développeurs et retours clients. Ensuite, nous optimisons continuellement vos flux de travail pour maximiser les gains de productivité et assurer le succès à long terme."
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

  const stepVariants = {
    hidden: { 
      opacity: 0, 
      x: -50,
      scale: 0.95
    },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 0.8,
      }
    }
  };

  return (
    <section className="py-24 bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 right-20 w-64 h-64 bg-accent-purple rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-accent-blue rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Background grid pattern */}
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
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-h1 font-bold mb-6 text-text-primary">
            Implémentation IA avec vous
          </h2>
          <p className="text-xl text-text-secondary max-w-4xl mx-auto leading-relaxed">
            Nous ne vous enseignons pas seulement les outils IA. Nous les implémentons avec votre équipe, 
            optimisons vos flux de travail et <span className="text-accent-blue font-semibold">garantissons des résultats mesurables.</span>
          </p>
        </motion.div>

        {/* Steps */}
        <motion.div
          className="space-y-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="group"
              variants={stepVariants}
            >
              <div className={`flex flex-col lg:flex-row items-center gap-12 ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}>
                {/* Content */}
                <div className="flex-1 space-y-6">
                  {/* Step number and title */}
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-6xl font-bold text-accent-blue/20 group-hover:text-accent-blue/40 transition-colors duration-300">
                      {step.number}
                    </span>
                    <div>
                      <h3 className="text-h2 font-bold text-text-primary group-hover:text-white transition-colors duration-300">
                        {step.title}
                      </h3>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-lg text-text-secondary leading-relaxed group-hover:text-text-primary/90 transition-colors duration-300">
                    {step.description}
                  </p>

                  {/* Arrow for desktop */}
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block">
                      <div className="flex items-center gap-2 text-accent-blue group-hover:text-accent-blue-light transition-colors duration-300">
                        <ArrowRight className="w-5 h-5" />
                        <span className="text-sm font-medium">Étape suivante</span>
                      </div>
                    </div>
                  )}
                </div>

                {/* Icon section */}
                <div className="flex-shrink-0">
                  <motion.div
                    className="relative"
                    whileHover={{ 
                      scale: 1.05,
                      rotate: 5,
                      transition: { duration: 0.3 }
                    }}
                  >
                    {/* Glow effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-accent-blue to-accent-purple rounded-3xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
                    
                    {/* Main icon container */}
                    <div className="relative bg-gradient-to-r from-accent-blue/10 to-accent-purple/10 border border-accent-blue/20 rounded-3xl p-12 group-hover:border-accent-blue/40 transition-all duration-300">
                      <div className="text-accent-blue group-hover:text-accent-blue-light transition-colors duration-300">
                        {step.icon}
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* Arrow for mobile */}
                {index < steps.length - 1 && (
                  <div className="lg:hidden flex justify-center">
                    <div className="w-px h-12 bg-gradient-to-b from-accent-blue to-transparent"></div>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-success-green/10 to-accent-blue/10 border border-success-green/20 rounded-full px-8 py-4">
            <div className="w-3 h-3 bg-success-green rounded-full animate-pulse"></div>
            <span className="text-text-primary font-medium">
              Approche systématique pour des résultats garantis
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SolutionOverview;