'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { Shield, CheckCircle, ArrowRight, Calendar, Award, TrendingUp } from 'lucide-react';

const GuaranteeSection: React.FC = () => {
  const guarantees = [
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Résultats mesurables garantis",
      description: "Si vous ne voyez pas d'améliorations de productivité mesurables dans les délais convenus, nous remboursons intégralement votre investissement."
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Qualité d'implémentation",
      description: "Nous garantissons que tous les outils et flux de travail sont correctement configurés et que votre équipe est formée pour les utiliser efficacement."
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: "Support continu inclus",
      description: "Période d'optimisation post-implémentation incluse avec support pour ajustements et améliorations basés sur l'usage réel."
    }
  ];

  const stats = [
    { value: "50+", label: "Équipes transformées" },
    { value: "95%", label: "Satisfaction client" },
    { value: "3x", label: "Amélioration moyenne" },
    { value: "30 jours", label: "Premiers résultats" }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-primary-900 via-accent-blue/5 to-primary-900 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="grid grid-cols-6 gap-8 h-full p-8">
            {Array.from({ length: 36 }, (_, i) => (
              <motion.div 
                key={i} 
                className="bg-success-green rounded-full"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.2, 0.4, 0.2]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  delay: i * 0.2
                }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Gradient orbs */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-20 w-96 h-96 bg-success-green rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-accent-blue rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Main guarantee section */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Shield icon */}
          <div className="flex justify-center mb-8">
            <motion.div
              className="relative"
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ duration: 0.3 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-success-green to-accent-blue rounded-full blur-xl opacity-50"></div>
              <div className="relative w-20 h-20 bg-gradient-to-r from-success-green to-accent-blue rounded-full flex items-center justify-center">
                <Shield className="w-10 h-10 text-white" />
              </div>
            </motion.div>
          </div>

          <h2 className="text-h1 font-bold mb-6 text-text-primary">
            Garantie de remboursement de 90 jours
          </h2>
          <p className="text-xl text-text-secondary max-w-4xl mx-auto mb-8 leading-relaxed">
            Nous sommes tellement confiants dans nos résultats que nous les garantissons
          </p>
          
          <div className="bg-gradient-to-r from-success-green/10 to-accent-blue/10 border border-success-green/20 rounded-2xl p-8 max-w-4xl mx-auto">
            <p className="text-lg text-text-primary leading-relaxed">
              <strong>Si vous ne voyez pas d'améliorations de productivité mesurables dans les 90 jours 
              suivant l'implémentation, nous rembourserons intégralement votre investissement.</strong> 
              Pas de questions posées, pas de petits caractères. Nous avons aidé plus de 50 équipes 
              à atteindre une livraison 3x plus rapide – nous sommes confiants de pouvoir faire de même pour vous.
            </p>
          </div>
        </motion.div>

        {/* Guarantee details */}
        <motion.div
          className="grid md:grid-cols-3 gap-8 mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {guarantees.map((guarantee, index) => (
            <motion.div
              key={index}
              className="group bg-primary-800/50 backdrop-blur-sm border border-primary-700 rounded-2xl p-6 hover:border-success-green/50 transition-all duration-300"
              whileHover={{ 
                scale: 1.02,
                y: -5,
                transition: { duration: 0.2 }
              }}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-success-green/20 to-success-green/30 rounded-full flex items-center justify-center group-hover:from-success-green/30 group-hover:to-success-green/40 transition-all duration-300">
                  <div className="text-success-green">
                    {guarantee.icon}
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-text-primary group-hover:text-white transition-colors duration-300">
                  {guarantee.title}
                </h3>
              </div>
              <p className="text-text-secondary leading-relaxed group-hover:text-text-primary/90 transition-colors duration-300">
                {guarantee.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats */}
        <motion.div
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="text-center bg-primary-800/30 backdrop-blur-sm border border-success-green/20 rounded-xl p-6"
              whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.2 }
              }}
            >
              <div className="text-3xl font-bold text-success-green mb-2">
                {stat.value}
              </div>
              <div className="text-text-secondary text-sm">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="space-y-6">
            <h3 className="text-h2 font-bold text-text-primary mb-4">
              Prêt à transformer votre équipe ?
            </h3>
            <p className="text-text-secondary max-w-2xl mx-auto mb-8">
              Commencez par un audit gratuit de 30 minutes pour découvrir vos plus grandes 
              opportunités d'amélioration de productivité avec l'IA.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                variant="primary" 
                size="lg" 
                href="/book-demo"
                className="group text-lg px-8 py-4 h-auto"
              >
                <Calendar className="mr-3 h-6 w-6" />
                Réserver un audit gratuit
                <ArrowRight className="ml-3 h-6 w-6 transition-transform group-hover:translate-x-1" />
              </Button>
              
              <Button 
                variant="outline" 
                size="lg" 
                href="/case-studies"
                className="text-lg px-8 py-4 h-auto"
              >
                Voir nos résultats
              </Button>
            </div>

            <p className="text-text-muted text-sm mt-6">
              Audit gratuit • Pas d'engagement • Insights exploitables immédiatement
            </p>
          </div>
        </motion.div>

        {/* Trust elements */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-wrap justify-center items-center gap-8 text-xs text-text-muted">
            <span className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-success-green" />
              Garantie résultats 90 jours
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-success-green" />
              Support continu inclus
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-success-green" />
              Formation équipe complète
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default GuaranteeSection;