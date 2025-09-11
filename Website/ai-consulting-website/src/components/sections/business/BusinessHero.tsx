'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { ArrowRight, Briefcase, Users, BarChart3, Calendar, Building, Lightbulb } from 'lucide-react';

const BusinessHero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background-dark via-background-dark-alt to-background-dark pt-20">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-72 h-72 bg-accent-red/30 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-primary-blue/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary-blue/20 rounded-full blur-3xl opacity-20 animate-pulse delay-2000"></div>
        </div>
        
        {/* Background grid pattern with squares */}
        <div className="absolute inset-0 opacity-5">
          <div className="grid grid-cols-12 gap-2 h-full p-4">
            {Array.from({ length: 144 }, (_, i) => (
              <div 
                key={i} 
                className="bg-text-secondary rounded-sm animate-pulse" 
                style={{
                  animationDelay: `${i * 0.05}s`,
                  animationDuration: '3s'
                }}
              ></div>
            ))}
          </div>
        </div>
      </div>

      {/* Floating business elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-1/4 text-primary-blue/40"
          animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          <BarChart3 size={48} />
        </motion.div>
        <motion.div
          className="absolute top-3/4 right-1/4 text-accent-red/60"
          animate={{ y: [0, 20, 0], rotate: [0, -5, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        >
          <Calendar size={56} />
        </motion.div>
        <motion.div
          className="absolute top-1/2 left-1/6 text-primary-blue/50"
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

              <div className="inline-flex items-center gap-2 bg-accent-red/10 border border-accent-red/20 rounded-full px-4 py-2 mb-6">
                <Lightbulb className="w-4 h-4 text-accent-red" />
                <span className="text-accent-red text-sm font-medium">Le Code n'était pas le Goulot</span>
              </div>
              
              <h1 className="text-4xl lg:text-5xl font-bold mb-6 text-text-primary">
                <span className="text-primary-blue">De l'idée d'affaires</span>
                <span className="block text-accent-red">aux specifications validées</span>
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <p className="text-lg text-text-secondary mb-8 leading-relaxed">
                Le vrai goulot ? Définir les <strong>bonnes user stories</strong>, prioriser les <strong>bonnes fonctionnalités</strong>, 
                et valider les <strong>bons parcours utilisateur</strong>. 
                <span className="text-primary-blue font-semibold block mt-2">
                  Les agents IA transforment vos besoins business en prototypes testables 
                </span>
                <span className="text-accent-red font-semibold block">
                  pour valider les specs avant le développement coûteux.
                </span>
              </p>

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
                href="/formation"
                className="group"
              >
                Apprendre la Méthode
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
              
              <Button 
                variant="outline" 
                size="lg" 
                href="#validation-process"
              >
                Voir le Processus
              </Button>
            </motion.div>
          </div>

          {/* Right: New Validation Process */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="space-y-6"
          >
            <div className="bg-background-accent-grey/50 border border-primary-blue/30 rounded-lg p-6">
              <h3 className="text-primary-blue font-semibold mb-4 flex items-center gap-2">
                <Lightbulb className="w-5 h-5" />
                Du Business aux Spécifications
              </h3>
              <div className="space-y-4 text-text-secondary text-sm">
                <div>
                  <strong className="text-text-primary">• Définir les User Stories</strong><br/>
                  Besoins utilisateur → fonctionnalités concrètes
                </div>
                <div>
                  <strong className="text-text-primary">• Prioriser & UI/UX</strong><br/>
                  Roadmap + maquettes interactives
                </div>
                <div>
                  <strong className="text-text-primary">• Prototype Fonctionnel</strong><br/>
                  Agents IA génèrent l'interface testable
                </div>
                <div>
                  <strong className="text-text-primary">• Specs Validées</strong><br/>
                  Cahier des charges basé sur du réel
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
          className="mt-16 grid grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {[
            { metric: "3 jours", label: "Vs 'peut-être en Q3'", icon: Calendar, color: "text-success-green" },
            { metric: "€0", label: "Coût développeur", icon: Users, color: "text-primary-blue" },
            { metric: "100%", label: "Contrôle sur vos besoins", icon: Briefcase, color: "text-accent-red" },
          ].map((item, index) => (
            <div key={index} className="bg-background-accent-grey/30 border border-primary-blue/30 rounded-xl p-4 text-center">
              <item.icon className={`w-6 h-6 ${item.color || 'text-primary-blue'} mx-auto mb-2`} />
              <div className={`text-2xl font-bold ${item.color || 'text-primary-blue'} mb-1`}>{item.metric}</div>
              <div className="text-text-secondary text-xs">{item.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default BusinessHero;