'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { Code, Briefcase, ArrowRight, Cpu, Users, Zap, BarChart3 } from 'lucide-react';
const TrackSelection: React.FC = () => {
  
  const tracks = [
    {
      id: "developers",
      icon: <Code className="w-12 h-12" />,
      title: "Développeurs, Scientifique de données & Équipes Tech",
      subtitle: "Orchestration d'agents, ingénierie de contexte",
      description: "Accélérez votre développement avec des systèmes d'agents IA, l'orchestration Claude-code et monter en puissance vos vos équipes avec notre méthodologie.",
      features: [
        "• Vulgarisation du nouveau paradigme de programmation IA",
        "• Configuration de vos environnements",
        "• Configuration et présentation de MCP avancés",
        "• Wrapper Claude-code pour l'orchestration d'agents",
        "• Méthodologie pour développer des products requirements",
        "• Apprendre à aligner vos IA pour réduire les bugs de développement",
        "• Bibliothèques de prompts internes",
        "• Apprendre à travailler efficacement avec les agents",
        "• Apprendre à développer des systèmes très complexes",
        "• Apprendre à couvrir tout la chaîne de valeurs, de la recherche, au besoin d'affaire, au PRD, à l'alignement avec les développeurs, au développement, à la livraison"
      ],
      benefits: [
        { icon: Cpu, text: "Onboarding: 2 semaines → 2 heures" },
        { icon: Zap, text: "Cycle de revue: 2-4 jours → 4-8 heures" },
        { icon: BarChart3, text: "Réduction du temps à débugger significativement" }
      ],
      cta: "Explorer le Parcours Technique",
      href: "/developers",
      color: "primary-blue",
      gradient: "from-primary-blue/10 to-accent-red/10"
    },
    {
      id: "business",
      icon: <Briefcase className="w-12 h-12" />,
      title: "Dirigeants & PO, analyste d'affaires",
      subtitle: "Programmer en langage naturel",
      description: "Construisez vos propres tableaux de bord, outils internes et automatisations sans attendre l'équipe de développement.",
      features: [
        "• Environnement IA configuré pour vos besoins",
        "• Du langage naturel aux applications fonctionnelles",
        "• Templates d'intégration CRM/spreadsheets/bases de données",
        "• Formation personnalisée incluse",
        "• Support 30 jours"
      ],
      benefits: [
        { icon: Users, text: "Tableaux de bord clients automatiques" },
        { icon: Zap, text: "Outils internes en jours, pas mois" },
        { icon: BarChart3, text: "Automatisation des processus métier" }
      ],
      cta: "Explorer le Parcours Business",
      href: "/business",
      color: "accent-purple",
      gradient: "from-accent-red/10 to-primary-blue/10"
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
        duration: 0.8
      }
    }
  };

  return (
    <section id="track-selection" className="py-24 bg-gradient-to-br from-background-dark to-background-dark-alt relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="grid grid-cols-8 gap-4 h-full p-8">
          {Array.from({ length: 64 }, (_, i) => (
            <div 
              key={i} 
              className="bg-primary-blue rounded-lg animate-pulse" 
              style={{
                animationDelay: `${i * 0.1}s`,
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
            Choisissez Votre Parcours
          </h2>
          <p className="text-xl text-text-secondary max-w-4xl mx-auto leading-relaxed">
            Deux approches distinctes pour deux besoins différents.
            <span className="text-primary-blue font-semibold"> Même excellence, outils adaptés.</span>
          </p>
        </motion.div>

        {/* Track Cards */}
        <motion.div
          className="grid lg:grid-cols-2 gap-8 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {tracks.map((track, index) => (
            <motion.div
              key={track.id}
              className="group"
              variants={cardVariants}
            >
              <div className={`relative bg-gradient-to-br ${track.gradient} border border-text-muted/30 rounded-3xl p-8 hover:border-${track.color}/50 transition-all duration-300 h-full`}>
                {/* Icon and header */}
                <div className="flex items-start gap-6 mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-r from-${track.color}/20 to-${track.color}/30 rounded-2xl flex items-center justify-center group-hover:from-${track.color}/30 group-hover:to-${track.color}/40 transition-all duration-300`}>
                    <div className={`text-${track.color} group-hover:text-${track.color}-light transition-colors duration-300`}>
                      {track.icon}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-h2 font-bold text-text-primary group-hover:text-text-primary transition-colors duration-300 mb-2">
                      {track.title}
                    </h3>
                    <p className={`text-${track.color} font-medium text-lg`}>
                      {track.subtitle}
                    </p>
                  </div>
                </div>

                {/* Description */}
                <p className="text-text-secondary leading-relaxed mb-6 group-hover:text-text-primary/90 transition-colors duration-300">
                  {track.description}
                </p>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="text-text-primary font-semibold mb-3">Ce que vous obtenez :</h4>
                  <ul className="space-y-2">
                    {track.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-text-secondary text-sm">
                        <div className={`w-1.5 h-1.5 bg-${track.color} rounded-full mt-2 flex-shrink-0`}></div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Benefits */}
                <div className="mb-8">
                  <h4 className="text-text-primary font-semibold mb-3">Résultats typiques :</h4>
                  <div className="space-y-3">
                    {track.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <benefit.icon className={`w-4 h-4 text-${track.color}`} />
                        <span className="text-text-secondary text-sm">{benefit.text}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA - Enhanced */}
                <div className="mt-8 pt-6 border-t border-text-muted/20">
                  <Button 
                    variant="primary"
                    size="lg" 
                    href={track.href}
                    className="w-full group relative overflow-hidden bg-gradient-to-r from-accent-red to-accent-red/90 hover:from-accent-red/90 hover:to-accent-red shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 font-bold text-lg py-4"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-primary-blue/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <span className="relative z-10 flex items-center justify-center">
                      {track.cta}
                      <ArrowRight className="ml-3 h-6 w-6 transition-all duration-300 group-hover:translate-x-2 group-hover:scale-110" />
                    </span>
                  </Button>
                  <p className="text-center text-text-muted text-sm mt-3 font-medium">
                    {track.id === 'developers' ? '🚀 Pour développeurs & équipes tech' : '💼 Pour dirigeants & analystes'}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default TrackSelection;