'use client';

import React, { memo } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { ArrowRight, Code, Zap } from 'lucide-react';
const HeroBanner: React.FC = memo(() => {
  
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background-dark via-background-dark-alt to-background-dark">
      {/* Background with gradient and pattern - Dark UI First */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-72 h-72 bg-primary-blue/30 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent-red/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary-blue/10 rounded-full blur-3xl opacity-15 animate-pulse delay-2000"></div>
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
            aria-label="Titre principal: NEWCODE — Maîtrisez la programmation agentique"
          >
            NEWCODE — Maîtrisez la programmation agentique
          </h1>
          <p className="text-xl md:text-2xl text-text-primary max-w-4xl mx-auto mb-10 leading-relaxed font-medium">
            Reprendre notre place là où la valeur se crée vraiment : en tant qu'architectes, décideurs et stratèges, plutôt qu'exécutants à faible valeur ajoutée.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="bg-gradient-to-br from-background-accent-grey/90 to-background-light-grey/90 backdrop-blur-sm rounded-3xl p-10 max-w-4xl mx-auto mb-12 border border-accent-red/40 shadow-2xl shadow-black/30">
            <div className="text-center">
              <h2 className="text-xl font-bold text-slate-100 mb-8 tracking-wide">
                Ce que nous faisons
              </h2>
              <div className="text-left mb-8 space-y-4">
                <p className="text-slate-200 font-medium leading-relaxed">
                  Nous formons les équipes à maîtriser la programmation avec les agents IA et leur donnons le manuel d'utilisation clé en main.
                </p>
              </div>
              <div className="text-center">
              </div>
            </div>
          </div>
        </motion.div>

        {/* New Background Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="relative"
        >
          {/* Background elements for this section */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 right-10 w-48 h-48 bg-accent-red/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-10 left-10 w-64 h-64 bg-primary-blue/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          </div>
          
          {/* Background grid pattern */}
          <div className="absolute inset-0 opacity-3">
            <div className="grid grid-cols-8 gap-2 h-full p-4">
              {Array.from({ length: 64 }, (_, i) => (
                <div 
                  key={i} 
                  className="bg-text-secondary rounded-sm animate-pulse" 
                  style={{
                    animationDelay: `${i * 0.08}s`,
                    animationDuration: '4s'
                  }}
                ></div>
              ))}
            </div>
          </div>

          {/* Floating elements */}
          <div className="absolute inset-0 pointer-events-none">
            <motion.div
              className="absolute top-1/3 left-1/5 text-accent-red/30"
              animate={{ y: [0, -15, 0], rotate: [0, -3, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              style={{ willChange: 'transform' }}
              aria-hidden="true"
            >
              <Zap size={32} />
            </motion.div>
            <motion.div
              className="absolute bottom-1/3 right-1/5 text-primary-blue/30"
              animate={{ y: [0, 18, 0], rotate: [0, 4, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
              style={{ willChange: 'transform' }}
              aria-hidden="true"
            >
              <Code size={28} />
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
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