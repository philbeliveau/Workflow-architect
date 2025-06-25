'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote, User, Building, Factory } from 'lucide-react';

const TestimonialsGrid: React.FC = () => {
  const testimonials = [
    {
      quote: "Je suis passé de 2 projets clients à 6 sans travailler plus d'heures. Les flux de travail IA gèrent tout le travail répétitif, donc je peux me concentrer sur la résolution créative de problèmes que les clients paient vraiment des tarifs premium.",
      author: "Sarah Chen",
      role: "Développeuse Full-Stack Indépendante",
      company: "Freelance",
      avatar: "SC",
      rating: 5,
      metrics: ["6 projets simultanés", "Taux horaire doublé", "35h/semaine"],
      category: "solo",
      icon: <User className="w-5 h-5" />
    },
    {
      quote: "Notre équipe de 4 personnes livre maintenant plus vite que notre ancienne équipe de 8 personnes. Les flux de travail IA ne nous rendent pas seulement plus rapides – ils nous rendent plus prévisibles, ce qui est crucial pour la confiance des investisseurs.",
      author: "Marcus Rodriguez",
      role: "CTO",
      company: "TechFlow",
      avatar: "MR",
      rating: 5,
      metrics: ["200% vélocité", "3 jours intégration", "95% précision sprint"],
      category: "startup",
      icon: <Building className="w-5 h-5" />
    },
    {
      quote: "Nous sommes devenus l'agence 'alimentée par l'IA' de notre marché. Nos flux de travail IA sont notre arme secrète – les clients voient les résultats, les concurrents n'arrivent pas à comprendre comment nous faisons.",
      author: "Jennifer Park",
      role: "Fondatrice",
      company: "DevCraft Agency",
      avatar: "JP",
      rating: 5,
      metrics: ["40% marges", "50% temps réduit", "95% rétention"],
      category: "agency",
      icon: <Factory className="w-5 h-5" />
    },
    {
      quote: "L'implémentation IA a transformé notre processus de développement. Nous livrons maintenant des fonctionnalités en jours au lieu de semaines, et nos développeurs sont plus heureux car ils travaillent sur des problèmes intéressants au lieu de tâches répétitives.",
      author: "Alex Kumar",
      role: "Lead Developer",
      company: "InnovateTech",
      avatar: "AK",
      rating: 5,
      metrics: ["5x plus rapide", "90% moins répétitif", "Satisfaction équipe +60%"],
      category: "startup",
      icon: <Building className="w-5 h-5" />
    },
    {
      quote: "Avant, je passais 70% de mon temps sur de la documentation et des tests de routine. Maintenant, c'est automatisé et je peux me concentrer sur l'architecture et les fonctionnalités complexes. Mes clients obtiennent une bien meilleure valeur.",
      author: "Marie Dubois",
      role: "Développeuse Freelance",
      company: "MD Development",
      avatar: "MD",
      rating: 5,
      metrics: ["70% temps économisé", "Qualité +40%", "Clients plus satisfaits"],
      category: "solo",
      icon: <User className="w-5 h-5" />
    },
    {
      quote: "La transformation de notre agence a été remarquable. Nous gérons maintenant 40% plus de projets avec la même équipe, nos marges se sont améliorées de 35%, et nous avons une liste d'attente de 6 mois. L'IA est notre avantage concurrentiel.",
      author: "Thomas Weber",
      role: "Directeur Technique",
      company: "CodeCraft Solutions",
      avatar: "TW",
      rating: 5,
      metrics: ["40% plus projets", "35% marges", "6 mois d'attente"],
      category: "agency",
      icon: <Factory className="w-5 h-5" />
    }
  ];

  const categoryColors: Record<string, string> = {
    solo: "accent-blue",
    startup: "accent-purple", 
    agency: "accent-teal"
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const testimonialVariants = {
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
        <div className="grid grid-cols-12 gap-4 h-full p-8">
          {Array.from({ length: 144 }, (_, i) => (
            <div 
              key={i} 
              className="bg-text-secondary rounded-sm animate-pulse" 
              style={{
                animationDelay: `${i * 0.03}s`,
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
            Ce que disent nos clients
          </h2>
          <p className="text-xl text-text-secondary max-w-4xl mx-auto leading-relaxed">
            Découvrez les retours authentiques de développeurs, CTOs et propriétaires d'agences 
            qui ont transformé leurs équipes avec nos solutions IA.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div
          className="grid lg:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="group bg-primary-900/50 backdrop-blur-sm border border-primary-700 rounded-2xl p-8 hover:border-accent-blue/50 transition-all duration-300"
              variants={testimonialVariants}
              whileHover={{ 
                scale: 1.02,
                y: -5,
                transition: { duration: 0.2 }
              }}
            >
              {/* Quote icon */}
              <div className="flex justify-between items-start mb-6">
                <Quote className="w-8 h-8 text-accent-blue/50" />
                
                {/* Category badge */}
                <div className={`flex items-center gap-2 bg-${categoryColors[testimonial.category]}/10 border border-${categoryColors[testimonial.category]}/20 rounded-full px-3 py-1`}>
                  <div className={`text-${categoryColors[testimonial.category]}`}>
                    {testimonial.icon}
                  </div>
                  <span className={`text-${categoryColors[testimonial.category]} text-xs font-medium capitalize`}>
                    {testimonial.category === 'solo' ? 'Solo Dev' : testimonial.category}
                  </span>
                </div>
              </div>

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

              {/* Metrics */}
              <div className="flex flex-wrap gap-2 mb-6">
                {testimonial.metrics.map((metric, idx) => (
                  <span 
                    key={idx}
                    className={`bg-${categoryColors[testimonial.category]}/10 border border-${categoryColors[testimonial.category]}/20 text-${categoryColors[testimonial.category]} px-3 py-1 rounded-full text-xs font-medium`}
                  >
                    {metric}
                  </span>
                ))}
              </div>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className={`w-12 h-12 bg-gradient-to-r from-${categoryColors[testimonial.category]} to-accent-purple rounded-full flex items-center justify-center`}>
                  <span className="text-white font-semibold text-sm">
                    {testimonial.avatar}
                  </span>
                </div>
                <div>
                  <div className="font-semibold text-text-primary group-hover:text-white transition-colors duration-300">
                    {testimonial.author}
                  </div>
                  <div className="text-sm text-text-muted">
                    {testimonial.role} • {testimonial.company}
                  </div>
                </div>
              </div>

              {/* Hover effect */}
              <div className={`absolute inset-0 bg-gradient-to-r from-${categoryColors[testimonial.category]}/0 via-${categoryColors[testimonial.category]}/5 to-${categoryColors[testimonial.category]}/0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom stats */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-r from-success-green/10 to-accent-blue/10 border border-success-green/20 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-h3 font-bold text-text-primary mb-6">
              Satisfaction client exceptionnelle
            </h3>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-success-green mb-2">95%</div>
                <div className="text-text-secondary">Taux de rétention</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent-blue mb-2">4.9/5</div>
                <div className="text-text-secondary">Note moyenne</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent-purple mb-2">50+</div>
                <div className="text-text-secondary">Équipes satisfaites</div>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap justify-center items-center gap-8 text-sm text-text-muted">
              <span className="flex items-center gap-2">
                <Star className="w-4 h-4 text-warning-orange fill-current" />
                100% des clients recommandent nos services
              </span>
              <span className="flex items-center gap-2">
                <div className="w-2 h-2 bg-success-green rounded-full animate-pulse"></div>
                Résultats mesurables garantis
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsGrid;