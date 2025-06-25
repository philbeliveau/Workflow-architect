'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { Users, Building, Zap, ArrowRight, CheckCircle } from 'lucide-react';

const ServicesPreview: React.FC = () => {
  const services = [
    {
      icon: <Users className="w-8 h-8" />,
      title: "Audit de flux et gains rapides",
      subtitle: "Parfait pour les équipes prêtes à tester",
      price: "2 500€",
      duration: "1-2 semaines",
      description: "Obtenez des améliorations de productivité immédiates tout en développant la confiance pour des transformations plus importantes. Idéal pour les développeurs solo et les petites équipes.",
      features: [
        "Analyse complète du flux de travail",
        "Recommandations d'outils IA personnalisées",
        "Implémentation de 3-5 automatisations rapides",
        "Formation équipe aux pratiques IA",
        "Support email 30 jours"
      ],
      bestFor: "Développeurs solo, équipes 2-3 personnes",
      cta: "Commencer l'audit",
      href: "/services#audit",
      featured: false
    },
    {
      icon: <Building className="w-8 h-8" />,
      title: "Implémentation complète IA",
      subtitle: "Transformation systématique",
      price: "15 000€",
      duration: "4-6 semaines",
      description: "Refonte complète du flux de travail avec des intégrations IA éprouvées qui évoluent avec votre croissance. Livraison 3x plus rapide garantie sans compromis sur la qualité.",
      features: [
        "Audit et refonte complète du flux",
        "Intégration de 8-12 outils IA",
        "Scripts d'automatisation personnalisés",
        "Formation et support d'adoption",
        "Période d'optimisation 30 jours",
        "Suivi métriques de productivité"
      ],
      bestFor: "Équipes startup (3-8 développeurs)",
      cta: "Réserver implémentation",
      href: "/services#implementation",
      featured: true
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Transformation agence IA",
      subtitle: "Devenez l'agence IA de référence",
      price: "35 000€",
      duration: "8-12 semaines",
      description: "Adoption IA à l'échelle de l'organisation qui transforme la façon dont vous livrez le travail client. Marges 40%+ plus élevées et avantage concurrentiel imbattable.",
      features: [
        "Analyse et refonte organisationnelle",
        "Intégration IA pour différents types clients",
        "Formation et gestion du changement",
        "Templates communication client",
        "Période d'optimisation 90 jours",
        "Support positionnement concurrentiel"
      ],
      bestFor: "Agences (8-15 développeurs)",
      cta: "Planifier consultation",
      href: "/services#transformation",
      featured: false
    }
  ];

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
        duration: 0.6,
      }
    }
  };

  return (
    <section className="py-24 bg-gradient-to-br from-primary-800 to-primary-900 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="grid grid-cols-6 gap-8 h-full p-8">
            {Array.from({ length: 36 }, (_, i) => (
              <div 
                key={i} 
                className="bg-accent-blue rounded-lg animate-pulse" 
                style={{
                  animationDelay: `${i * 0.2}s`,
                  animationDuration: '4s'
                }}
              ></div>
            ))}
          </div>
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
            Choisissez votre chemin vers une livraison 3x plus rapide
          </h2>
          <p className="text-xl text-text-secondary max-w-4xl mx-auto leading-relaxed">
            Que vous soyez un développeur solo noyé dans le travail client ou un propriétaire d'agence cherchant à évoluer, 
            nous avons un chemin éprouvé vers la productivité alimentée par l'IA.
          </p>
        </motion.div>

        {/* Service Cards */}
        <motion.div
          className="grid lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              className={`group relative ${
                service.featured 
                  ? 'bg-gradient-to-b from-accent-blue/10 to-accent-purple/10 border-2 border-accent-blue scale-105' 
                  : 'bg-primary-900/50 border border-primary-700'
              } backdrop-blur-sm rounded-3xl p-8 hover:border-accent-blue/50 transition-all duration-300`}
              variants={cardVariants}
              whileHover={{ 
                scale: service.featured ? 1.05 : 1.02,
                y: -5,
                transition: { duration: 0.2 }
              }}
            >
              {/* Featured badge */}
              {service.featured && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-accent-blue to-accent-purple text-white px-4 py-1 rounded-full text-sm font-medium">
                    Plus populaire
                  </div>
                </div>
              )}

              {/* Icon */}
              <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-accent-blue/20 to-accent-purple/20 rounded-2xl mb-6 group-hover:from-accent-blue/30 group-hover:to-accent-purple/30 transition-all duration-300">
                <div className="text-accent-blue group-hover:text-accent-blue-light transition-colors duration-300">
                  {service.icon}
                </div>
              </div>

              {/* Header */}
              <div className="mb-6">
                <h3 className="text-h3 font-bold text-text-primary mb-2 group-hover:text-white transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-text-secondary text-sm mb-4">
                  {service.subtitle}
                </p>
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-2xl font-bold text-accent-blue">
                    {service.price}
                  </span>
                  <span className="text-text-muted text-sm">
                    {service.duration}
                  </span>
                </div>
              </div>

              {/* Description */}
              <p className="text-text-secondary mb-6 leading-relaxed group-hover:text-text-primary/90 transition-colors duration-300">
                {service.description}
              </p>

              {/* Features */}
              <div className="space-y-3 mb-6">
                {service.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-success-green flex-shrink-0 mt-0.5" />
                    <span className="text-text-secondary text-sm group-hover:text-text-primary/90 transition-colors duration-300">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              {/* Best for */}
              <div className="bg-accent-blue/5 border border-accent-blue/20 rounded-lg p-3 mb-6">
                <span className="text-accent-blue text-sm font-medium">
                  Idéal pour: {service.bestFor}
                </span>
              </div>

              {/* CTA */}
              <Button 
                variant={service.featured ? "primary" : "outline"}
                size="lg" 
                href={service.href}
                className="w-full group"
              >
                {service.cta}
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom note */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-success-green/10 to-accent-blue/10 border border-success-green/20 rounded-full px-6 py-3">
            <CheckCircle className="w-5 h-5 text-success-green" />
            <span className="text-text-secondary">
              Garantie de remboursement de 90 jours sur tous les services
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesPreview;