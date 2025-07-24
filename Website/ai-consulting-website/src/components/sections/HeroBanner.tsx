'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { ArrowRight, Code, Zap } from 'lucide-react';
const HeroBanner: React.FC = () => {
  
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-primary-900">
      {/* Background with gradient and pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-20 w-72 h-72 bg-accent-purple rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent-gray rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent-purple-light rounded-full blur-3xl opacity-10 animate-pulse delay-2000"></div>
        </div>
        
        {/* Code pattern overlay */}
        <div className="absolute inset-0 opacity-3">
          <div className="grid grid-cols-12 gap-4 h-full p-8">
            {Array.from({ length: 144 }, (_, i) => (
              <div key={i} className="bg-accent-gray h-1 rounded animate-pulse" style={{
                animationDelay: `${i * 0.1}s`,
                animationDuration: '3s'
              }}></div>
            ))}
          </div>
        </div>
      </div>

      {/* Floating elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-1/4 text-accent-purple"
          animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          <Code size={48} />
        </motion.div>
        <motion.div
          className="absolute top-3/4 right-1/4 text-accent-gray"
          animate={{ y: [0, 20, 0], rotate: [0, -5, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        >
          <Zap size={56} />
        </motion.div>
      </div>

      {/* Main content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-hero font-bold mb-6 bg-gradient-to-r from-text-primary via-accent-gray to-accent-purple bg-clip-text text-transparent">
            Passez du "vibe coding" à une méthode structurée.<br />
            Orchestrez des agents IA pour automatiser, fiabiliser et accélérer le développement logiciel.
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <p className="text-lg md:text-xl text-text-secondary max-w-4xl mx-auto mb-8 leading-relaxed">
            Que vous soyez développeur, data scientist, chef de produit ou tout acteur du développement logiciel,
            nous vous donnons les clés pour sortir du flou, et adopter une approche claire, organisée et puissante grâce à la programmation agentique.
          </p>
          
          <div className="text-base text-text-secondary max-w-3xl mx-auto mb-8">
            <p className="mb-4">
              Laissez vos agents IA travailler à votre place, pendant des heures, avec :
            </p>
            <ul className="text-left space-y-2 mb-6">
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-accent-purple rounded-full mt-2 flex-shrink-0"></div>
                <span>la Gestion automatique des erreurs et des exceptions</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-accent-purple rounded-full mt-2 flex-shrink-0"></div>
                <span>une Structuration des tests et des fonctionnalités dès le départ</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-accent-purple rounded-full mt-2 flex-shrink-0"></div>
                <span>une Meilleure compréhension du contexte global de votre projet</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-accent-purple rounded-full mt-2 flex-shrink-0"></div>
                <span>Connexion fluide à tous vos outils via des MCP intelligents</span>
              </li>
            </ul>
            <p className="text-accent-purple font-semibold text-lg">
              —> Vous bénéficiez maintenant des capacités d'une équipe complète. C'est maintenant une réalité, et vous pouvez y accéder !
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Button 
            variant="primary" 
            size="lg" 
            href="#track-selection"
            className="group"
          >
            Découvrir les parcours
            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Button>
          
          <Button 
            variant="outline" 
            size="lg" 
            href="/book-demo"
          >
            Évaluation Gratuite
          </Button>
        </motion.div>

        {/* Trust indicators */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <p className="text-sm text-text-muted mb-4">
            Nous améliorons, nous n'remplaçons pas • Nous intégrons, nous ne perturbons pas
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 text-xs text-text-muted">
            <span className="flex items-center gap-2">
              <div className="w-2 h-2 bg-success-green rounded-full animate-pulse"></div>
              Développeurs : Orchestration IA avancée
            </span>
            <span className="flex items-center gap-2">
              <div className="w-2 h-2 bg-accent-purple rounded-full animate-pulse"></div>
              Dirigeants : Solutions métier immédiates
            </span>
            <span className="flex items-center gap-2">
              <div className="w-2 h-2 bg-accent-gray rounded-full animate-pulse"></div>
              Mesuré, pas promis
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroBanner;