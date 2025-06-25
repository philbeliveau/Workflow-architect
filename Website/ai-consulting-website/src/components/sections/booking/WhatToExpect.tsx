'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Clock, Search, Target, TrendingUp, FileText } from 'lucide-react';

const WhatToExpect: React.FC = () => {
  const agenda = [
    {
      duration: "5 min",
      title: "Présentation et contexte",
      description: "Nous apprenons à connaître votre équipe, vos projets actuels et vos objectifs de productivité.",
      icon: <Search className="w-5 h-5" />
    },
    {
      duration: "15 min",
      title: "Analyse du flux de travail",
      description: "Nous examinons votre processus de développement actuel, identifions les goulots d'étranglement et les opportunités d'automatisation.",
      icon: <Target className="w-5 h-5" />
    },
    {
      duration: "8 min",
      title: "Recommandations spécifiques",
      description: "Nous partageons 3-5 améliorations IA spécifiques que vous pouvez implémenter immédiatement pour des gains rapides.",
      icon: <TrendingUp className="w-5 h-5" />
    },
    {
      duration: "2 min",
      title: "Prochaines étapes",
      description: "Nous discutons des options pour une transformation plus approfondie si vous êtes intéressé.",
      icon: <FileText className="w-5 h-5" />
    }
  ];

  const benefits = [
    "Analyse gratuite de votre flux de travail de développement actuel",
    "Identification des 3 plus grandes opportunités d'amélioration IA",
    "Recommandations d'outils spécifiques pour votre pile technologique",
    "Plan d'action avec gains rapides implémentables en 1-2 semaines",
    "Estimation du ROI potentiel de l'automatisation IA",
    "Guide de ressources personnalisé envoyé après l'appel"
  ];

  const preparation = [
    "Réfléchissez à vos principaux défis de productivité actuels",
    "Préparez une vue d'ensemble de votre pile technologique",
    "Notez les tâches répétitives qui prennent le plus de temps",
    "Ayez une idée de vos objectifs de croissance à 6-12 mois"
  ];

  return (
    <motion.div
      className="space-y-8"
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {/* What to Expect */}
      <div className="bg-primary-800/50 backdrop-blur-sm border border-primary-700 rounded-2xl p-8">
        <h3 className="text-h3 font-bold text-text-primary mb-6 flex items-center gap-3">
          <Clock className="w-6 h-6 text-accent-blue" />
          À quoi s'attendre pendant l'appel
        </h3>

        <div className="space-y-6">
          {agenda.map((item, index) => (
            <div key={index} className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 bg-gradient-to-r from-accent-blue/20 to-accent-purple/20 rounded-lg flex items-center justify-center">
                  <div className="text-accent-blue">
                    {item.icon}
                  </div>
                </div>
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <h4 className="font-semibold text-text-primary">{item.title}</h4>
                  <span className="text-xs bg-accent-blue/10 text-accent-blue px-2 py-1 rounded-full">
                    {item.duration}
                  </span>
                </div>
                <p className="text-text-secondary text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* What You'll Receive */}
      <div className="bg-gradient-to-r from-success-green/10 to-accent-blue/10 border border-success-green/20 rounded-2xl p-8">
        <h3 className="text-h3 font-bold text-text-primary mb-6 flex items-center gap-3">
          <CheckCircle className="w-6 h-6 text-success-green" />
          Ce que vous recevrez
        </h3>

        <div className="space-y-3">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-success-green flex-shrink-0 mt-0.5" />
              <span className="text-text-secondary text-sm leading-relaxed">
                {benefit}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* How to Prepare */}
      <div className="bg-primary-800/30 border border-accent-purple/20 rounded-2xl p-8">
        <h3 className="text-h3 font-bold text-text-primary mb-6 flex items-center gap-3">
          <Target className="w-6 h-6 text-accent-purple" />
          Comment se préparer
        </h3>

        <div className="space-y-3">
          {preparation.map((item, index) => (
            <div key={index} className="flex items-start gap-3">
              <div className="w-6 h-6 bg-accent-purple/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-accent-purple text-xs font-medium">{index + 1}</span>
              </div>
              <span className="text-text-secondary text-sm leading-relaxed">
                {item}
              </span>
            </div>
          ))}
        </div>

        <div className="mt-6 p-4 bg-accent-purple/5 border border-accent-purple/20 rounded-lg">
          <p className="text-text-secondary text-sm">
            <strong className="text-accent-purple">Note :</strong> Aucune préparation technique n'est requise. 
            Nous nous concentrons sur la compréhension de vos défis et objectifs plutôt que sur les détails techniques.
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default WhatToExpect;