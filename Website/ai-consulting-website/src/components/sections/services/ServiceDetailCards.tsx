'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { Users, Building, Zap, ArrowRight, CheckCircle, Clock, Euro, Target } from 'lucide-react';

const ServiceDetailCards: React.FC = () => {
  const services = [
    {
      id: "audit",
      icon: <Users className="w-10 h-10" />,
      title: "Audit de flux et gains rapides",
      subtitle: "Parfait pour les équipes prêtes à tester",
      price: "2 500€",
      duration: "1-2 semaines",
      guarantee: "25% d'amélioration de productivité ou remboursement",
      description: "Obtenez des améliorations de productivité immédiates tout en développant la confiance pour des transformations plus importantes. La plupart des clients voient des gains de productivité de 25-40% dès la première semaine.",
      includes: [
        "Analyse du flux de travail actuel et identification des goulots d'étranglement",
        "Recommandations d'outils IA adaptées à votre pile technologique",
        "Implémentation de 3-5 automatisations à gains rapides",
        "Formation de l'équipe aux pratiques de développement alimentées par l'IA",
        "Support email de 30 jours pour questions et optimisation"
      ],
      bestFor: "Développeurs solo, équipes 2-3 personnes, agences testant l'adoption IA",
      cta: "Commencer l'audit",
      href: "/book-demo?service=audit",
      featured: false,
      color: "accent-blue"
    },
    {
      id: "implementation",
      icon: <Building className="w-10 h-10" />,
      title: "Implémentation complète IA",
      subtitle: "Transformation systématique pour équipes en croissance",
      price: "15 000€",
      duration: "4-6 semaines",
      guarantee: "Livraison 3x plus rapide ou remboursement",
      description: "Refonte complète du flux de travail avec des intégrations IA éprouvées qui évoluent avec votre croissance. Le résultat : une livraison 3x plus rapide prévisible sans compromis sur la qualité.",
      includes: [
        "Audit et refonte complète du flux de travail",
        "Intégration de 8-12 outils IA à travers votre cycle de développement",
        "Scripts d'automatisation personnalisés pour vos besoins spécifiques",
        "Formation équipe et support d'adoption",
        "Période d'optimisation de 30 jours avec vérifications hebdomadaires",
        "Suivi et rapport des métriques de productivité"
      ],
      bestFor: "Équipes startup (3-8 développeurs), agences en croissance, équipes avec vélocité incohérente",
      cta: "Réserver implémentation",
      href: "/book-demo?service=implementation",
      featured: true,
      color: "accent-purple"
    },
    {
      id: "transformation",
      icon: <Zap className="w-10 h-10" />,
      title: "Transformation agence IA",
      subtitle: "Devenez l'agence alimentée par l'IA de votre marché",
      price: "35 000€",
      duration: "8-12 semaines",
      guarantee: "40% d'amélioration des marges ou remboursement",
      description: "Adoption IA à l'échelle organisationnelle qui transforme la façon dont vous livrez le travail client. Le résultat : 40%+ de marges plus élevées et un avantage concurrentiel imbattable.",
      includes: [
        "Analyse et refonte de flux de travail à l'échelle organisationnelle",
        "Intégration d'outils IA personnalisés pour différents types de clients",
        "Formation équipe et support de gestion du changement",
        "Templates de communication client mettant en avant les avantages IA",
        "Période d'optimisation de 90 jours avec vérifications bi-hebdomadaires",
        "Support de positionnement concurrentiel et marketing"
      ],
      bestFor: "Agences (8-15 développeurs), équipes servant plusieurs types de clients, agences prêtes à se différencier",
      cta: "Planifier consultation",
      href: "/book-demo?service=transformation",
      featured: false,
      color: "accent-teal"
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
        <div className="grid grid-cols-6 gap-8 h-full p-8">
          {Array.from({ length: 36 }, (_, i) => (
            <div 
              key={i} 
              className="bg-accent-blue rounded-lg animate-pulse" 
              style={{
                animationDelay: `${i * 0.2}s`,
                animationDuration: '4s'
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
            Nos services de transformation IA
          </h2>
          <p className="text-xl text-text-secondary max-w-4xl mx-auto leading-relaxed">
            Chaque service est conçu pour livrer des résultats mesurables avec une approche fait-avec-vous 
            qui garantit le succès de votre transformation IA.
          </p>
        </motion.div>

        {/* Service Cards */}
        <motion.div
          className="space-y-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              className="group"
              variants={cardVariants}
              id={service.id}
            >
              <div className={`${
                service.featured 
                  ? 'bg-gradient-to-r from-accent-blue/10 to-accent-purple/10 border-2 border-accent-blue' 
                  : 'bg-primary-900/50 border border-primary-700'
              } backdrop-blur-sm rounded-3xl p-8 lg:p-12 hover:border-accent-blue/50 transition-all duration-300 relative`}>
                
                {/* Featured badge */}
                {service.featured && (
                  <div className="absolute -top-4 left-8">
                    <div className="bg-gradient-to-r from-accent-blue to-accent-purple text-white px-6 py-2 rounded-full text-sm font-medium">
                      ⭐ Plus populaire
                    </div>
                  </div>
                )}

                <div className="grid lg:grid-cols-2 gap-12 items-start">
                  {/* Left side - Service info */}
                  <div className="space-y-8">
                    {/* Header */}
                    <div>
                      <div className="flex items-center gap-4 mb-4">
                        <div className={`w-16 h-16 bg-gradient-to-r from-${service.color}/20 to-${service.color}/30 rounded-2xl flex items-center justify-center group-hover:from-${service.color}/30 group-hover:to-${service.color}/40 transition-all duration-300`}>
                          <div className={`text-${service.color} group-hover:text-${service.color}-light transition-colors duration-300`}>
                            {service.icon}
                          </div>
                        </div>
                        <div>
                          <h3 className="text-h2 font-bold text-text-primary group-hover:text-text-primary transition-colors duration-300 mb-2">
                            {service.title}
                          </h3>
                          <p className="text-text-secondary">
                            {service.subtitle}
                          </p>
                        </div>
                      </div>

                      {/* Price and duration */}
                      <div className="flex flex-wrap items-center gap-6 mb-6">
                        <div className="flex items-center gap-2">
                          <Euro className="w-5 h-5 text-accent-blue" />
                          <span className="text-2xl font-bold text-accent-blue">
                            {service.price}
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="w-5 h-5 text-text-muted" />
                          <span className="text-text-muted">
                            {service.duration}
                          </span>
                        </div>
                      </div>

                      {/* Guarantee */}
                      <div className="bg-success-green/10 border border-success-green/20 rounded-lg p-4 mb-6">
                        <div className="flex items-center gap-3">
                          <CheckCircle className="w-5 h-5 text-success-green flex-shrink-0" />
                          <span className="text-success-green font-medium text-sm">
                            {service.guarantee}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-text-secondary leading-relaxed group-hover:text-text-primary/90 transition-colors duration-300">
                      {service.description}
                    </p>

                    {/* Best for */}
                    <div className="bg-accent-blue/5 border border-accent-blue/20 rounded-lg p-4">
                      <div className="flex items-start gap-3">
                        <Target className="w-5 h-5 text-accent-blue flex-shrink-0 mt-0.5" />
                        <div>
                          <h4 className="text-accent-blue font-medium mb-2">Idéal pour :</h4>
                          <p className="text-text-secondary text-sm">{service.bestFor}</p>
                        </div>
                      </div>
                    </div>

                    {/* CTA */}
                    <Button 
                      variant={service.featured ? "primary" : "outline"}
                      size="lg" 
                      href={service.href}
                      className="w-full lg:w-auto group"
                    >
                      {service.cta}
                      <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </div>

                  {/* Right side - What's included */}
                  <div className="space-y-6">
                    <h4 className="text-h3 font-semibold text-text-primary group-hover:text-text-primary transition-colors duration-300">
                      Ce qui est inclus :
                    </h4>
                    
                    <div className="space-y-4">
                      {service.includes.map((item, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-success-green flex-shrink-0 mt-1" />
                          <span className="text-text-secondary leading-relaxed group-hover:text-text-primary/90 transition-colors duration-300">
                            {item}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
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
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-success-green/10 to-accent-blue/10 border border-success-green/20 rounded-full px-8 py-4">
            <CheckCircle className="w-6 h-6 text-success-green" />
            <span className="text-text-primary font-medium">
              Tous les services incluent une garantie de remboursement de 90 jours
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServiceDetailCards;