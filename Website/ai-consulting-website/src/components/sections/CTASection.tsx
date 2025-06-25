'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { ArrowRight, Calendar, CheckCircle, Zap } from 'lucide-react';

const CTASection: React.FC = () => {
  const benefits = [
    "Audit gratuit de 30 minutes",
    "Recommandations personnalisées",
    "Aucun engagement requis",
    "Insights exploitables immédiatement"
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-primary-900 via-accent-blue/5 to-primary-900 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="grid grid-cols-8 gap-4 h-full p-8">
            {Array.from({ length: 64 }, (_, i) => (
              <motion.div 
                key={i} 
                className="bg-accent-blue rounded-full"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.6, 0.3]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: i * 0.1
                }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Gradient orbs */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-20 w-96 h-96 bg-accent-blue rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-accent-purple rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        {/* Icon */}
        <motion.div
          className="flex justify-center mb-8"
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-accent-blue to-accent-purple rounded-full blur-xl opacity-50"></div>
            <div className="relative w-20 h-20 bg-gradient-to-r from-accent-blue to-accent-purple rounded-full flex items-center justify-center">
              <Zap className="w-10 h-10 text-white" />
            </div>
          </div>
        </motion.div>

        {/* Headline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h2 className="text-h1 font-bold mb-6 text-text-primary">
            Prêt à tripler votre vélocité de développement ?
          </h2>
        </motion.div>

        {/* Subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <p className="text-xl text-text-secondary max-w-4xl mx-auto mb-8 leading-relaxed">
            Réservez un audit gratuit de flux de travail et découvrez comment l'IA peut 
            <span className="text-accent-blue font-semibold"> transformer la productivité de votre équipe.</span>
          </p>
        </motion.div>

        {/* Benefits */}
        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              className="flex items-center gap-3 text-left"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <CheckCircle className="w-5 h-5 text-success-green flex-shrink-0" />
              <span className="text-text-secondary text-sm">
                {benefit}
              </span>
            </motion.div>
          ))}
        </motion.div>

        {/* Main CTA */}
        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <div>
            <Button 
              variant="primary" 
              size="lg" 
              href="/book-demo"
              className="group text-lg px-12 py-4 h-auto"
            >
              <Calendar className="mr-3 h-6 w-6" />
              Réserver un audit gratuit
              <ArrowRight className="ml-3 h-6 w-6 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>

          {/* Supporting text */}
          <p className="text-text-muted text-sm">
            En 30 minutes, nous analyserons votre processus de développement actuel et identifierons 
            les trois plus grandes opportunités d'accélération alimentée par l'IA.
          </p>
        </motion.div>

        {/* Trust elements */}
        <motion.div
          className="mt-16 space-y-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          {/* Guarantee */}
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-success-green/10 to-accent-blue/10 border border-success-green/20 rounded-full px-6 py-3">
            <CheckCircle className="w-5 h-5 text-success-green" />
            <span className="text-text-secondary font-medium">
              Aucun argumentaire de vente, aucun engagement requis
            </span>
          </div>

          {/* Social proof */}
          <div className="flex flex-wrap justify-center items-center gap-8 text-xs text-text-muted">
            <span className="flex items-center gap-2">
              <div className="w-2 h-2 bg-success-green rounded-full animate-pulse"></div>
              50+ équipes transformées
            </span>
            <span className="flex items-center gap-2">
              <div className="w-2 h-2 bg-accent-blue rounded-full animate-pulse"></div>
              Résultats en première semaine
            </span>
            <span className="flex items-center gap-2">
              <div className="w-2 h-2 bg-accent-purple rounded-full animate-pulse"></div>
              Satisfaction 95%
            </span>
          </div>
        </motion.div>

        {/* Floating elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <motion.div
            className="absolute top-1/4 left-1/4 text-accent-blue/30"
            animate={{ 
              y: [0, -20, 0],
              rotate: [0, 10, 0],
              scale: [1, 1.1, 1]
            }}
            transition={{ 
              duration: 5, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
          >
            <ArrowRight size={32} />
          </motion.div>
          <motion.div
            className="absolute top-3/4 right-1/4 text-accent-purple/30"
            animate={{ 
              y: [0, 15, 0],
              rotate: [0, -10, 0],
              scale: [1, 0.9, 1]
            }}
            transition={{ 
              duration: 4, 
              repeat: Infinity, 
              ease: "easeInOut",
              delay: 1 
            }}
          >
            <Calendar size={28} />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;