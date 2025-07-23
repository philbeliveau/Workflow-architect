'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Clock, DollarSign, Users, CheckCircle, Star } from 'lucide-react';

const ResultsShowcase: React.FC = () => {
  const metrics = [
    {
      icon: <TrendingUp className="w-8 h-8" />,
      value: "67%",
      label: "Revues de code plus rapides",
      description: "grâce à l'analyse automatisée et aux suggestions intelligentes",
      color: "accent-blue"
    },
    {
      icon: <Clock className="w-8 h-8" />,
      value: "3 jours",
      label: "vs 3 semaines d'intégration",
      description: "avec la familiarisation de base de code alimentée par l'IA",
      color: "accent-purple"
    },
    {
      icon: <DollarSign className="w-8 h-8" />,
      value: "40%",
      label: "Marges projet plus élevées",
      description: "en livrant la même qualité en 60% du temps",
      color: "success-green"
    },
    {
      icon: <Users className="w-8 h-8" />,
      value: "95%",
      label: "Taux de rétention client",
      description: "car une livraison cohérente construit une confiance inébranlable",
      color: "accent-teal"
    }
  ];

  const testimonials = [
    {
      quote: "Je suis passé de 2 projets clients à 6 sans travailler plus d'heures. Mon taux horaire a doublé.",
      author: "Sarah Chen",
      role: "Développeuse Full-Stack Indépendante",
      rating: 5
    },
    {
      quote: "Notre équipe de 4 personnes livre maintenant plus vite que notre ancienne équipe de 8 personnes.",
      author: "Marcus Rodriguez",
      role: "CTO chez TechFlow",
      rating: 5
    },
    {
      quote: "Nous sommes devenus l'agence 'alimentée par l'IA' de notre marché. Nos marges ont augmenté de 35%.",
      author: "Jennifer Park",
      role: "Fondatrice de DevCraft Agency",
      rating: 5
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

  const itemVariants = {
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
    <section className="py-24 bg-primary-900 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-96 h-96 bg-accent-blue rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-accent-purple rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent-teal rounded-full blur-3xl opacity-20 animate-pulse delay-2000"></div>
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
            Résultats réels, équipes réelles
          </h2>
          <p className="text-xl text-text-secondary max-w-4xl mx-auto leading-relaxed">
            Nos clients n'utilisent pas seulement les outils IA – ils réalisent des 
            <span className="text-accent-blue font-semibold"> transformations de productivité mesurables.</span>
          </p>
        </motion.div>

        {/* Metrics Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {metrics.map((metric, index) => (
            <motion.div
              key={index}
              className="group relative bg-primary-800/50 backdrop-blur-sm border border-primary-700 rounded-2xl p-8 text-center hover:border-accent-blue/50 transition-all duration-300"
              variants={itemVariants}
              whileHover={{ 
                scale: 1.05,
                y: -5,
                transition: { duration: 0.2 }
              }}
            >
              {/* Background glow */}
              <div className={`absolute inset-0 bg-gradient-to-r from-${metric.color}/5 to-${metric.color}/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
              
              {/* Icon */}
              <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-${metric.color}/20 to-${metric.color}/30 rounded-full mb-6 group-hover:from-${metric.color}/30 group-hover:to-${metric.color}/40 transition-all duration-300`}>
                <div className={`text-${metric.color} transition-colors duration-300`}>
                  {metric.icon}
                </div>
              </div>

              {/* Value */}
              <div className="mb-4">
                <span className={`text-4xl font-bold text-${metric.color} group-hover:text-text-primary transition-colors duration-300`}>
                  {metric.value}
                </span>
              </div>

              {/* Label */}
              <h3 className="text-lg font-semibold text-text-primary mb-2 group-hover:text-text-primary transition-colors duration-300">
                {metric.label}
              </h3>

              {/* Description */}
              <p className="text-sm text-text-secondary group-hover:text-text-primary/90 transition-colors duration-300">
                {metric.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Testimonials */}
        <motion.div
          className="space-y-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-12">
            <h3 className="text-h2 font-bold text-text-primary mb-4">
              Ce que disent nos clients
            </h3>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className="group bg-primary-800/50 backdrop-blur-sm border border-primary-700 rounded-2xl p-8 hover:border-accent-blue/50 transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.02,
                  y: -5,
                  transition: { duration: 0.2 }
                }}
              >
                {/* Stars */}
                <div className="flex gap-1 mb-6">
                  {Array.from({ length: testimonial.rating }, (_, i) => (
                    <Star key={i} className="w-5 h-5 text-warning-orange fill-current" />
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="text-text-secondary leading-relaxed mb-6 group-hover:text-text-primary/90 transition-colors duration-300">
                  "{testimonial.quote}"
                </blockquote>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-accent-blue to-accent-purple rounded-full flex items-center justify-center">
                    <span className="text-white font-semibold">
                      {testimonial.author.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <div className="font-semibold text-text-primary group-hover:text-text-primary transition-colors duration-300">
                      {testimonial.author}
                    </div>
                    <div className="text-sm text-text-muted">
                      {testimonial.role}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-success-green/10 to-accent-blue/10 border border-success-green/20 rounded-full px-8 py-4">
            <CheckCircle className="w-6 h-6 text-success-green" />
            <span className="text-text-primary font-medium text-lg">
              Rejoignez 95% de nos clients qui renouvellent pour l'optimisation continue
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ResultsShowcase;