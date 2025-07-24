'use client';

import React, { memo } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { ArrowRight, Code, Zap } from 'lucide-react';
const HeroBanner: React.FC = memo(() => {
  
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background-dark">
      {/* Background with gradient and pattern - Dark UI First */}
      <div className="absolute inset-0 bg-gradient-to-br from-background-dark via-background-dark-alt to-background-dark">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-72 h-72 bg-primary-blue/30 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent-red/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary-blue/10 rounded-full blur-3xl opacity-15 animate-pulse delay-2000"></div>
        </div>
        
        {/* Code pattern overlay */}
        <div className="absolute inset-0 opacity-5">
          <div className="grid grid-cols-12 gap-4 h-full p-8">
            {Array.from({ length: 144 }, (_, i) => (
              <div key={i} className="bg-primary-blue/20 h-1 rounded animate-pulse" style={{
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
          className="absolute top-1/4 left-1/4 text-primary-blue/40"
          animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          style={{ willChange: 'transform' }}
          aria-hidden="true"
        >
          <Code size={48} />
        </motion.div>
        <motion.div
          className="absolute top-3/4 right-1/4 text-accent-red/60"
          animate={{ y: [0, 20, 0], rotate: [0, -5, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          style={{ willChange: 'transform' }}
          aria-hidden="true"
        >
          <Zap size={56} />
        </motion.div>
      </div>

      {/* Main content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center mt-42">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 
            className="text-hero font-bold mb-8 bg-gradient-to-r from-text-light via-primary-blue to-accent-red bg-clip-text text-transparent"
            role="banner"
            aria-label="Titre principal: Passez du vibe coding à une méthode structurée"
          >
            Passez du "vibe coding" à une méthode structurée.
          </h1>
          <p className="text-xl md:text-2xl text-text-primary max-w-4xl mx-auto mb-10 leading-relaxed font-medium">
            Orchestrez des agents IA pour automatiser, fiabiliser et accélérer le développement logiciel.
          </p>
          <div className="text-lg text-text-secondary max-w-4xl mx-auto mb-12 leading-relaxed">
            Que vous soyez développeur, data scientist, chef de produit ou tout acteur du développement logiciel, nous vous donnons les clés pour sortir du flou, et adopter une approche claire, organisée et puissante grâce à la programmation agentique.
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="bg-gradient-to-br from-slate-800/40 to-slate-900/60 backdrop-blur-sm rounded-3xl p-10 max-w-4xl mx-auto mb-12 border border-slate-600/40 shadow-2xl shadow-slate-900/50">
            <div className="text-center">
              <h2 className="text-xl font-bold text-slate-100 mb-8 tracking-wide">
                Laissez vos agents IA travailler à votre place, pendant des heures, avec :
              </h2>
              <div className="grid md:grid-cols-2 gap-6 text-left mb-8">
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-slate-300 rounded-full mt-2 flex-shrink-0 shadow-sm"></div>
                  <p className="text-slate-200 font-medium">Gestion automatique des erreurs et des exceptions</p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-slate-300 rounded-full mt-2 flex-shrink-0 shadow-sm"></div>
                  <p className="text-slate-200 font-medium">Structuration des tests et des fonctionnalités dès le départ</p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-slate-300 rounded-full mt-2 flex-shrink-0 shadow-sm"></div>
                  <p className="text-slate-200 font-medium">Meilleure compréhension du contexte global de votre projet</p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-slate-300 rounded-full mt-2 flex-shrink-0 shadow-sm"></div>
                  <p className="text-slate-200 font-medium">Connexion fluide à tous vos outils via des MCP intelligents</p>
                </div>
              </div>
              <div className="text-center">
                <p className="text-slate-100 font-bold text-xl leading-relaxed tracking-wide bg-gradient-to-r from-slate-200 to-white bg-clip-text text-transparent">
                  → Vous bénéficiez maintenant des capacités d'une équipe complète.
                </p>
                <p className="text-slate-100 font-bold text-xl tracking-wide bg-gradient-to-r from-white to-slate-200 bg-clip-text text-transparent">
                  C'est maintenant une réalité, et vous pouvez y accéder !
                </p>
              </div>
            </div>
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

      </div>
    </section>
  );
});

HeroBanner.displayName = 'HeroBanner';

export default HeroBanner;