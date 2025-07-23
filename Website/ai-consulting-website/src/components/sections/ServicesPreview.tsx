'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import ProgressBar from '@/components/ui/ProgressBar';
import { Users, Building, Zap, ArrowRight, CheckCircle } from 'lucide-react';

const ServicesPreview: React.FC = () => {
  const services = [
    {
      icon: <Users className="w-8 h-8" />,
      title: "Parcours Développeur - Formation",
      subtitle: "Maîtrisez l'orchestration d'agents IA",
      price: "2 900€",
      duration: "Formation + outils + 30j support",
      description: "Formation complète pour maîtriser l'orchestration d'agents IA. Vous repartez avec frameworks, templates, et méthodologies pour être autonome.",
      features: [
        "Formation orchestration agents (8h intensive)",
        "Frameworks et templates prêts à l'emploi",
        "Méthodologies Agentic vs Vibe coding",
        "Outils de monitoring et validation",
        "Support technique 30j + ressources complètes"
      ],
      bestFor: "Développeurs solo, startups 2-4 devs",
      cta: "Démarrer Orchestration",
      href: "/developers",
      featured: false,
      completionMetrics: [
        { label: "Config agents", value: 100 },
        { label: "Intégrations", value: 95 },
        { label: "Formation équipe", value: 90 }
      ]
    },
    {
      icon: <Building className="w-8 h-8" />,
      title: "Parcours Business - Autonomie",
      subtitle: "Devenez autonome avec l'IA métier",
      price: "3 900€",
      duration: "Formation + environnement + 60j support",
      description: "Formation pour utiliser l'IA en autonomie : dashboards, automatisations, outils internes. Vous construisez sans attendre l'équipe IT.",
      features: [
        "Formation IA métier (4h personnalisée)",
        "Environnement sécurisé pré-configuré",
        "Templates dashboards et outils internes",
        "Intégrations CRM/Spreadsheets simplifiées",
        "Support hotline business 60j inclus"
      ],
      bestFor: "CEOs, founders, chefs de projet",
      cta: "Gagner en Autonomie",
      href: "/business",
      featured: true,
      completionMetrics: [
        { label: "Env. configuré", value: 100 },
        { label: "Templates installés", value: 100 },
        { label: "Formation complète", value: 95 }
      ]
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Entreprise - Formation Complète",
      subtitle: "Toute l'équipe formée aux workflows IA",
      price: "7 900€",
      duration: "Formation équipe + accompagnement 90j",
      description: "Formation complète de l'équipe : développeurs ET dirigeants maîtrisent l'IA. Approche cohérente dans toute l'organisation.",
      features: [
        "Formation développeurs (orchestration avancée)",
        "Formation dirigeants (IA métier autonome)",
        "Méthodologies cohérentes dans l'organisation",
        "Templates et frameworks pour tous",
        "Accompagnement continu 90j inclus"
      ],
      bestFor: "Entreprises 8-20 personnes",
      cta: "Transformation Complète",
      href: "/enterprise",
      featured: false,
      completionMetrics: [
        { label: "Deux parcours actifs", value: 100 },
        { label: "Intégration unifiée", value: 95 },
        { label: "Adoption équipes", value: 92 }
      ]
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
                className="bg-accent-purple rounded-lg animate-pulse" 
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
            Services Par Parcours
          </h2>
          <p className="text-xl text-text-secondary max-w-4xl mx-auto leading-relaxed">
            Formation pratique et outils IA à prix accessible. Pas de consulting à 50k€. 
            <span className="text-accent-purple font-semibold"> Nous formons, nous outillons, vous maîtrisez.</span>
          </p>
          <div className="mt-6 inline-flex items-center gap-3 bg-gradient-to-r from-success-green/10 to-accent-purple/10 border border-success-green/20 rounded-full px-6 py-3">
            <div className="w-2 h-2 bg-success-green rounded-full animate-pulse"></div>
            <span className="text-text-secondary text-sm font-medium">
              Base abordable + support sur mesure si besoin
            </span>
          </div>
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
                  ? 'bg-gradient-to-b from-accent-purple/10 to-accent-gray/10 border-2 border-accent-purple scale-105' 
                  : 'bg-primary-900/50 border border-primary-700'
              } backdrop-blur-sm rounded-3xl p-8 hover:border-accent-purple/50 transition-all duration-300`}
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
                  <div className="bg-gradient-to-r from-accent-purple to-accent-gray text-white px-4 py-1 rounded-full text-sm font-medium">
                    Plus populaire
                  </div>
                </div>
              )}

              {/* Icon */}
              <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-accent-purple/20 to-accent-gray/20 rounded-2xl mb-6 group-hover:from-accent-purple/30 group-hover:to-accent-gray/30 transition-all duration-300">
                <div className="text-accent-purple group-hover:text-accent-purple-light transition-colors duration-300">
                  {service.icon}
                </div>
              </div>

              {/* Header */}
              <div className="mb-6">
                <h3 className="text-h3 font-bold text-text-primary mb-2 group-hover:text-text-primary transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-text-secondary text-sm mb-4">
                  {service.subtitle}
                </p>
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-2xl font-bold text-accent-purple">
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
              <div className="bg-accent-purple/5 border border-accent-purple/20 rounded-lg p-3 mb-6">
                <span className="text-accent-purple text-sm font-medium">
                  Idéal pour: {service.bestFor}
                </span>
              </div>

              {/* Progress Metrics */}
              <div className="space-y-3 mb-6">
                <h5 className="text-sm font-medium text-text-primary mb-3">
                  Taux de réussite typique :
                </h5>
                {service.completionMetrics.map((metric, idx) => (
                  <ProgressBar
                    key={idx}
                    label={metric.label}
                    value={metric.value}
                    delay={idx * 200}
                    className="mb-2"
                  />
                ))}
              </div>

              {/* CTA */}
              <Button 
                variant={service.featured ? "brutalist" : "outline"}
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
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-success-green/10 to-accent-purple/10 border border-success-green/20 rounded-2xl p-6">
              <div className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 text-success-green flex-shrink-0 mt-1" />
                <div>
                  <h4 className="text-lg font-semibold text-text-primary mb-2">Prix transparents, valeur réelle</h4>
                  <p className="text-text-secondary leading-relaxed">
                    Pas de consulting à 50k€. Formation pratique + outils + support inclus. 
                    <span className="text-accent-purple font-medium">Besoin d'accompagnement personnalisé ? Support sur mesure disponible.</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesPreview;