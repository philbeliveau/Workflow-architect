'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { ArrowRight, Briefcase, Users, BarChart3, Calendar, Building, Lightbulb } from 'lucide-react';

const BusinessHero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary-900 via-accent-purple/5 to-primary-900 pt-20">
      {/* Friendly Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-72 h-72 bg-accent-purple rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent-teal rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent-blue rounded-full blur-3xl opacity-20 animate-pulse delay-2000"></div>
        </div>
      </div>

      {/* Floating business elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-1/4 text-accent-purple"
          animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          <BarChart3 size={48} />
        </motion.div>
        <motion.div
          className="absolute top-3/4 right-1/4 text-accent-teal"
          animate={{ y: [0, 20, 0], rotate: [0, -5, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        >
          <Calendar size={56} />
        </motion.div>
        <motion.div
          className="absolute top-1/2 left-1/6 text-accent-blue"
          animate={{ y: [0, -15, 0], rotate: [0, 10, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        >
          <Building size={40} />
        </motion.div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >

              <div className="inline-flex items-center gap-2 bg-accent-purple/10 border border-accent-purple/20 rounded-full px-4 py-2 mb-6">
                <Briefcase className="w-4 h-4 text-accent-purple" />
                <span className="text-accent-purple text-sm font-medium">Transformation Business</span>
              </div>
              
              <h1 className="text-4xl lg:text-5xl font-bold mb-6 text-text-primary">
                <span className="text-accent-blue">Construisez vos outils sans attendre l'IT.</span>
                <span className="block text-accent-purple">De "peut-être en Q3" à "fait en 3 jours".</span>
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <p className="text-lg text-text-secondary mb-8 leading-relaxed">
                Tableau de bord client ? Outil de gestion interne ? Automatisation de processus ? 
                <strong> Décrivez ce dont vous avez besoin, obtenez une application fonctionnelle.</strong>
                <span className="text-success-green font-semibold block mt-2">
                  Construisez vos outils sans attendre l'IT. De "peut-être en Q3" à "fait en 3 jours".
                </span>
              </p>

              <div className="grid grid-cols-1 gap-4 mb-8">
                <div className="bg-primary-800/50 border border-primary-700 rounded-lg p-4">
                  <h3 className="text-accent-purple font-semibold mb-3 flex items-center gap-2">
                    <Lightbulb className="w-4 h-4" />
                    Ce Que Vous Pourrez Construire
                  </h3>
                  <div className="grid grid-cols-2 gap-4 text-text-secondary text-sm">
                    <div>
                      <strong>• Tableaux de bord clients</strong><br/>
                      Statut projet, métriques, rapports
                    </div>
                    <div>
                      <strong>• Outils internes</strong><br/>
                      Gestion inventaire, workflows équipe
                    </div>
                    <div>
                      <strong>• Automatisations</strong><br/>
                      Connecter vos outils existants
                    </div>
                    <div>
                      <strong>• Apps simples</strong><br/>
                      Portails clients, systèmes de réservation
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button 
                variant="primary" 
                size="lg" 
                href="/book-demo"
                className="group"
              >
                Voir Comment Ça Marche
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
              
              <Button 
                variant="outline" 
                size="lg" 
                href="#business-examples"
              >
                Exemples Concrets
              </Button>
            </motion.div>
          </div>

          {/* Right: Visual Examples */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="space-y-6"
          >
            {/* Dashboard Preview */}
            <div className="bg-gradient-to-r from-accent-purple/10 to-accent-teal/10 border border-accent-purple/20 rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-3 h-3 bg-red-500/30 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500/30 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500/30 rounded-full"></div>
                <span className="text-text-secondary text-sm ml-2">Tableau de Bord Client</span>
              </div>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-text-primary font-medium">Projet Website Refonte</span>
                  <span className="bg-success-green/20 text-success-green px-2 py-1 rounded text-xs">En cours</span>
                </div>
                
                <div className="w-full bg-primary-700 rounded-full h-2">
                  <div className="bg-accent-purple h-2 rounded-full" style={{ width: '75%' }}></div>
                </div>
                
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-accent-purple font-bold">75%</div>
                    <div className="text-text-secondary text-xs">Avancement</div>
                  </div>
                  <div>
                    <div className="text-accent-teal font-bold">15j</div>
                    <div className="text-text-secondary text-xs">Restants</div>
                  </div>
                  <div>
                    <div className="text-success-green font-bold">€15k</div>
                    <div className="text-text-secondary text-xs">Budget</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Simple App Preview */}
            <div className="bg-gradient-to-r from-accent-teal/10 to-accent-blue/10 border border-accent-teal/20 rounded-2xl p-6">
              <h4 className="text-text-primary font-semibold mb-3 flex items-center gap-2">
                <Calendar className="w-4 h-4 text-accent-teal" />
                Système de Réservation
              </h4>
              
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-sm">
                  <div className="w-2 h-2 bg-accent-teal rounded-full"></div>
                  <span className="text-text-secondary">9h00 - Réunion stratégie (Disponible)</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <div className="w-2 h-2 bg-warning-orange rounded-full"></div>
                  <span className="text-text-secondary">14h00 - Demo produit (Réservé)</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <div className="w-2 h-2 bg-accent-teal rounded-full"></div>
                  <span className="text-text-secondary">16h00 - Consultation (Disponible)</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Business Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {[
            { metric: "3 jours", label: "Vs 'peut-être en Q3'", icon: Calendar, color: "text-success-green" },
            { metric: "€0", label: "Coût développeur", icon: Users, color: "text-accent-teal" },
            { metric: "100%", label: "Contrôle sur vos besoins", icon: Briefcase, color: "text-accent-purple" },
            { metric: "Orchestré", label: "Systèmes IA avancés", icon: Building, color: "text-accent-blue" }
          ].map((item, index) => (
            <div key={index} className="bg-primary-800/30 border border-primary-700 rounded-xl p-4 text-center">
              <item.icon className={`w-6 h-6 ${item.color || 'text-accent-purple'} mx-auto mb-2`} />
              <div className={`text-2xl font-bold ${item.color || 'text-accent-purple'} mb-1`}>{item.metric}</div>
              <div className="text-text-secondary text-xs">{item.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default BusinessHero;