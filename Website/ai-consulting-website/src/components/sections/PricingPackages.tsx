'use client';

import React, { memo } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { ArrowRight, Check, Star, Zap, Shield, Users, Briefcase, Clock, TrendingUp, AlertCircle } from 'lucide-react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';

interface FormationData {
  title: string;
  subtitle: string;
  price: string;
  originalPrice?: string;
  features: string[];
  bonusFeatures?: string[];
  unlockText?: string;
  saveAmount?: string;
  ctaText: string;
  isPopular?: boolean;
}

interface FormationCardProps {
  formation: FormationData;
  index: number;
}

const FormationCard: React.FC<FormationCardProps> = memo(({ formation, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className={`
        relative rounded-2xl p-8 border-2 bg-background-accent-grey/90 backdrop-blur-sm
        ${formation.isPopular 
          ? 'border-accent-yellow shadow-2xl shadow-accent-yellow/20' 
          : 'border-text-secondary/30'
        }
      `}
    >
      {/* Save badge */}
      {formation.saveAmount && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
          <div className="bg-accent-yellow text-background-dark px-4 py-2 rounded-full text-sm font-bold">
            {formation.saveAmount}
          </div>
        </div>
      )}
      
      {/* Header */}
      <div className="mb-8">
        <h3 className="text-2xl md:text-3xl font-bold text-text-light mb-2">
          {formation.title}
        </h3>
        <p className="text-text-secondary mb-6">
          {formation.subtitle}
        </p>
        
        {/* Pricing */}
        <div className="flex items-baseline space-x-2 mb-2">
          <span className="text-4xl md:text-5xl font-bold text-text-light">
            {formation.price}
          </span>
          {formation.originalPrice && (
            <span className="text-lg text-text-secondary line-through">
              {formation.originalPrice}
            </span>
          )}
        </div>
      </div>
      
      {/* Features */}
      <div className="space-y-4 mb-8">
        {formation.features.map((feature, idx) => (
          <div key={idx} className="flex items-start space-x-3">
            <Check className="w-5 h-5 text-accent-yellow mt-0.5 flex-shrink-0" />
            <span className="text-text-light">{feature}</span>
          </div>
        ))}
        
        {/* Bonus features section */}
        {formation.bonusFeatures && formation.bonusFeatures.length > 0 && (
          <>
            <div className="bg-accent-yellow/10 border border-accent-yellow/30 rounded-lg p-4 my-6">
              <p className="text-accent-yellow font-semibold text-center">
                {formation.unlockText || "Bonus inclus:"}
              </p>
            </div>
            
            {formation.bonusFeatures.map((feature, idx) => (
              <div key={idx} className="flex items-start space-x-3">
                <Check className="w-5 h-5 text-accent-yellow mt-0.5 flex-shrink-0" />
                <span className="text-text-light">{feature}</span>
              </div>
            ))}
          </>
        )}
      </div>
      
      {/* CTA */}
      <Button
        variant="primary"
        size="lg"
        className="w-full bg-accent-yellow hover:bg-accent-yellow/80 text-background-dark font-bold"
      >
        {formation.ctaText}
      </Button>
    </motion.div>
  );
});

FormationCard.displayName = 'FormationCard';

const PricingPackages: React.FC = memo(() => {
  const formations: FormationData[] = [
    {
      title: "Formation Débutant",
      subtitle: "Formation complète",
      price: "€297",
      features: [
        "Formation complète Newcode (6h)",
        "Accès communauté privée",
        "Support technique inclus",
        "Mise à jour à vie",
        "Certificat de complétion"
      ],
      bonusFeatures: [
        "Session Q&A en groupe (1h)",
        "Templates de projets prêts à l'emploi",
        "Guide des meilleures pratiques"
      ],
      unlockText: "Tout dans Débutant, plus:",
      ctaText: "Commencer la Formation",
      isPopular: false
    },
    {
      title: "Formation Avancée",
      subtitle: "Formation premium",
      price: "€497",
      features: [
        "Tout dans Formation Débutant",
        "Formation avancée (6h supplémentaires)",
        "Projets complexes et cas d'usage",
        "Mentorat personnalisé (2h)",
        "Accès prioritaire aux nouveautés"
      ],
      bonusFeatures: [
        "Session 1:1 avec Philippe (45min)",
        "Certification Newcode Avancée",
        "Accès early-bird futures formations"
      ],
      unlockText: "Accès immédiat",
      ctaText: "Obtenir la Formation Avancée",
      isPopular: true
    }
  ];

  return (
    <section className="relative py-24 bg-gradient-to-br from-background-dark via-background-dark-alt to-background-dark overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-72 h-72 bg-primary-blue/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent-yellow/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-text-light mb-4">
            Choisissez votre formation
          </h2>
          <p className="text-xl text-text-primary max-w-3xl mx-auto">
            Des formations conçues pour votre niveau et vos objectifs
          </p>
        </motion.div>

        {/* Two-Column Formation Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
          {formations.map((formation, index) => (
            <FormationCard
              key={formation.title}
              formation={formation}
              index={index}
            />
          ))}
        </div>

        {/* Guarantee Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-gradient-to-br from-success-green/10 to-primary-blue/10 border border-success-green/30 rounded-2xl p-8 backdrop-blur-sm text-center"
        >
          <div className="flex items-center justify-center mb-4">
            <Shield className="w-8 h-8 text-success-green mr-3" />
            <h3 className="text-2xl font-bold text-success-green">
              Garantie satisfaction 30 jours
            </h3>
          </div>
          
          <p className="text-text-primary max-w-3xl mx-auto leading-relaxed">
            Si vous n'êtes pas entièrement satisfait de la formation, nous vous remboursons intégralement dans les 30 jours suivant votre achat.
          </p>
          
          {/* Trust indicators */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary-blue">98.5%</div>
              <div className="text-text-secondary text-sm">Satisfaction étudiants</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-success-green">{'< 2%'}</div>
              <div className="text-text-secondary text-sm">Demandes remboursement</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-accent-yellow">87%</div>
              <div className="text-text-secondary text-sm">Recommandent à collègues</div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
});

PricingPackages.displayName = 'PricingPackages';

export default PricingPackages;