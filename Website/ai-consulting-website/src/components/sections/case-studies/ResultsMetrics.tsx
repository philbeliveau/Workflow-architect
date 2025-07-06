'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { 
  TrendingUp, 
  Clock, 
  DollarSign, 
  Users, 
  Target, 
  Award, 
  Zap,
  ArrowRight,
  Calendar
} from 'lucide-react';

const ResultsMetrics: React.FC = () => {
  const aggregateMetrics = [
    {
      icon: <TrendingUp className="w-8 h-8" />,
      value: "3x",
      label: "Amélioration moyenne de la vélocité",
      description: "Across all client transformations",
      color: "accent-blue"
    },
    {
      icon: <Clock className="w-8 h-8" />,
      value: "67%",
      label: "Réduction temps de livraison",
      description: "From initial audit to production",
      color: "accent-purple"
    },
    {
      icon: <DollarSign className="w-8 h-8" />,
      value: "40%",
      label: "Augmentation marges moyennes",
      description: "Through efficiency improvements",
      color: "success-green"
    },
    {
      icon: <Users className="w-8 h-8" />,
      value: "95%",
      label: "Taux de rétention client",
      description: "Long-term partnership success",
      color: "accent-teal"
    },
    {
      icon: <Target className="w-8 h-8" />,
      value: "30 jours",
      label: "Temps pour premiers résultats",
      description: "Initial productivity gains visible",
      color: "warning-orange"
    },
    {
      icon: <Award className="w-8 h-8" />,
      value: "50+",
      label: "Équipes transformées",
      description: "Successfully implemented solutions",
      color: "accent-blue-light"
    }
  ];

  const clientTypes = [
    {
      type: "Développeurs Solo",
      count: "23 clients",
      avgImprovement: "2.8x plus rapide",
      keyMetric: "Revenue per hour doubled",
      icon: <Users className="w-6 h-6" />
    },
    {
      type: "Équipes Startup",
      count: "18 équipes",
      avgImprovement: "3.2x vélocité sprint",
      keyMetric: "Developer onboarding: 3 days vs 3 weeks",
      icon: <Zap className="w-6 h-6" />
    },
    {
      type: "Agences",
      count: "12 agences",
      avgImprovement: "45% marges améliorées",
      keyMetric: "Client capacity increased by 60%",
      icon: <Award className="w-6 h-6" />
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
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
        duration: 0.6
      }
    }
  };

  return (
    <section className="py-24 bg-primary-900 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-96 h-96 bg-accent-blue rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-success-green rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent-purple rounded-full blur-3xl opacity-20 animate-pulse delay-2000"></div>
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
            Résultats agrégés sur tous nos clients
          </h2>
          <p className="text-xl text-text-secondary max-w-4xl mx-auto leading-relaxed">
            Plus de 50 équipes transformées avec des résultats mesurables et reproductibles
          </p>
        </motion.div>

        {/* Main Metrics Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {aggregateMetrics.map((metric, index) => (
            <motion.div
              key={index}
              className="group bg-primary-800/50 backdrop-blur-sm border border-primary-700 rounded-2xl p-8 text-center hover:border-accent-blue/50 transition-all duration-300"
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

        {/* Client Types Breakdown */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-12">
            <h3 className="text-h2 font-bold text-text-primary mb-4">
              Résultats par type de client
            </h3>
            <p className="text-text-secondary max-w-3xl mx-auto">
              Chaque type d'équipe bénéficie de transformations adaptées à leurs défis spécifiques
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {clientTypes.map((client, index) => (
              <motion.div
                key={index}
                className="group bg-gradient-to-br from-primary-800/50 to-primary-900/50 backdrop-blur-sm border border-primary-700 rounded-2xl p-8 hover:border-accent-blue/50 transition-all duration-300"
                whileHover={{ 
                  scale: 1.02,
                  y: -5,
                  transition: { duration: 0.2 }
                }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-accent-blue/20 to-accent-purple/20 rounded-full flex items-center justify-center group-hover:from-accent-blue/30 group-hover:to-accent-purple/30 transition-all duration-300">
                    <div className="text-accent-blue group-hover:text-accent-blue-light transition-colors duration-300">
                      {client.icon}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-text-primary group-hover:text-text-primary transition-colors duration-300">
                      {client.type}
                    </h4>
                    <p className="text-text-muted text-sm">{client.count}</p>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="bg-accent-blue/10 border border-accent-blue/20 rounded-lg p-3">
                    <div className="text-accent-blue font-medium text-sm mb-1">Amélioration moyenne</div>
                    <div className="text-text-primary font-semibold">{client.avgImprovement}</div>
                  </div>

                  <div className="bg-success-green/10 border border-success-green/20 rounded-lg p-3">
                    <div className="text-success-green font-medium text-sm mb-1">Métrique clé</div>
                    <div className="text-text-primary text-sm">{client.keyMetric}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="text-center bg-gradient-to-r from-accent-blue/10 to-accent-purple/10 border border-accent-blue/20 rounded-2xl p-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-h2 font-bold text-text-primary mb-6">
            Prêt à rejoindre nos histoires de succès ?
          </h3>
          <p className="text-text-secondary max-w-2xl mx-auto mb-8 leading-relaxed">
            Découvrez comment notre approche éprouvée peut transformer votre équipe de développement 
            avec des résultats mesurables en 30 jours.
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
              href="/services"
              className="text-lg px-8 py-4 h-auto"
            >
              Voir nos services
            </Button>
          </div>

          <div className="mt-8 flex flex-wrap justify-center items-center gap-8 text-sm text-text-muted">
            <span className="flex items-center gap-2">
              <div className="w-2 h-2 bg-success-green rounded-full animate-pulse"></div>
              Audit gratuit de 30 minutes
            </span>
            <span className="flex items-center gap-2">
              <div className="w-2 h-2 bg-accent-blue rounded-full animate-pulse"></div>
              Résultats garantis
            </span>
            <span className="flex items-center gap-2">
              <div className="w-2 h-2 bg-accent-purple rounded-full animate-pulse"></div>
              Support continu inclus
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ResultsMetrics;