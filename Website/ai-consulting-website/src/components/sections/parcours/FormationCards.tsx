'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { Button } from '@/components/ui/Button';
import { ExternalLink, BookOpen, Target, TrendingUp } from 'lucide-react';

const FormationCards: React.FC = () => {
  const t = useTranslations('parcours.formations');

  const formations = [
    {
      id: 'kickstart',
      icon: BookOpen,
      level: t('kickstart.level'),
      title: t('kickstart.title'),
      target: t('kickstart.target'),
      price: t('kickstart.price'),
      duration: t('kickstart.duration'),
      outcomes: [
        t('kickstart.outcomes.0'),
        t('kickstart.outcomes.1'),
        t('kickstart.outcomes.2'),
        t('kickstart.outcomes.3')
      ],
      cta: t('kickstart.cta'),
      href: '/formation-kickstart',
      gradient: 'from-green-400 to-blue-500',
      bgGradient: 'from-green-500/5 to-blue-500/5',
      borderColor: 'border-green-400/30 hover:border-green-400/60',
      isRetroStyle: true
    },
    {
      id: 'architecte',
      icon: TrendingUp,
      level: t('architecte.level'),
      title: t('architecte.title'),
      target: t('architecte.target'),
      price: t('architecte.price'),
      duration: t('architecte.duration'),
      outcomes: [
        t('architecte.outcomes.0'),
        t('architecte.outcomes.1'),
        t('architecte.outcomes.2'),
        t('architecte.outcomes.3')
      ],
      cta: t('architecte.cta'),
      href: '/formation-architecte',
      gradient: 'from-blue-500 to-purple-600',
      bgGradient: 'from-blue-500/5 to-purple-600/5',
      borderColor: 'border-blue-500/30 hover:border-blue-500/60'
    }
  ];

  return (
    <section className="py-20 bg-background-dark relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/4 -left-32 w-64 h-64 bg-primary-blue/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-1/4 -right-32 w-64 h-64 bg-accent-red/5 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.5, 0.3, 0.5],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-primary-blue to-accent-red bg-clip-text text-transparent">
              {t('title')}
            </span>
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            {t('subtitle')}
          </p>
        </motion.div>

        {/* Formation Cards Grid */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {formations.map((formation, index) => {
            const IconComponent = formation.icon;

            return (
              <motion.div
                key={formation.id}
                className="group"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                viewport={{ once: true }}
              >
                {formation.isRetroStyle ? (
                  // Retro Windows 95 Style Card for Kickstart
                  <div className="relative w-full max-w-md mx-auto" role="article" aria-label={`Formation ${formation.title}`}>
                    <style jsx>{`
                      .retro-card-container {
                        width: 100%;
                        max-width: 380px;
                        height: 420px;
                        background: #c0c0c0;
                        border: 2px outset #c0c0c0;
                        padding: 2px;
                        font-family: "MS Sans Serif", "Tahoma", sans-serif;
                        font-size: 11px;
                        box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.3);
                      }

                      @media (max-width: 768px) {
                        .retro-card-container {
                          height: 380px;
                          font-size: 10px;
                        }
                      }

                      @media (max-width: 480px) {
                        .retro-card-container {
                          height: 350px;
                          font-size: 9px;
                        }
                      }

                      .retro-card {
                        display: flex;
                        flex-direction: column;
                        width: 100%;
                        height: 100%;
                        background: #c0c0c0;
                        border: 2px inset #c0c0c0;
                        overflow: hidden;
                        color: #000000;
                      }

                      .retro-card-header {
                        background: #000080;
                        padding: 2px 4px;
                        flex-shrink: 0;
                        border-bottom: 1px solid #000000;
                        color: white;
                        font-weight: bold;
                        font-size: 11px;
                        display: flex;
                        align-items: center;
                        justify-content: space-between;
                      }

                      .retro-card-tabs {
                        display: flex;
                        background: #c0c0c0;
                        border-bottom: 1px solid #808080;
                        height: 20px;
                      }

                      .retro-card-tab {
                        padding: 2px 8px;
                        font-size: 11px;
                        color: #000000;
                        background: #c0c0c0;
                        border: 2px outset #c0c0c0;
                        border-bottom: none;
                        cursor: pointer;
                        height: 18px;
                        margin-top: 1px;
                      }

                      .retro-card-tab.active {
                        background: #c0c0c0;
                        border: 2px outset #c0c0c0;
                        border-bottom: 1px solid #c0c0c0;
                        margin-top: 0;
                        height: 19px;
                        position: relative;
                        z-index: 2;
                      }

                      .retro-card-body {
                        display: flex;
                        flex-grow: 1;
                        overflow: auto;
                        padding: 4px 0 4px 2px;
                        font-family: "Courier New", monospace;
                        font-size: 12px;
                        line-height: 1.4;
                        background: #ffffff;
                        border: 1px inset #808080;
                        margin: 2px;
                      }

                      .retro-line-numbers {
                        display: flex;
                        flex-direction: column;
                        padding: 0 6px;
                        text-align: right;
                        color: #808080;
                        user-select: none;
                        font-size: 12px;
                        background: #f0f0f0;
                        border-right: 1px solid #c0c0c0;
                        min-width: 25px;
                      }

                      .retro-code-content {
                        margin: 0;
                        padding: 0 4px;
                        white-space: pre-wrap;
                        overflow-x: auto;
                        color: #000000;
                        flex: 1;
                      }

                      .retro-card-footer {
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                        background: #c0c0c0;
                        padding: 2px 4px;
                        border-top: 1px solid #808080;
                        flex-shrink: 0;
                        height: 22px;
                      }

                      .retro-copy-button {
                        display: flex;
                        align-items: center;
                        gap: 4px;
                        background: #c0c0c0;
                        color: #000000;
                        border: 2px outset #c0c0c0;
                        padding: 0 6px;
                        cursor: pointer;
                        font-size: 11px;
                        height: 18px;
                      }

                      .retro-copy-button:active {
                        border: 2px inset #c0c0c0;
                        padding: 1px 5px 0 7px;
                      }

                      .code-comment { color: #008000; }
                      .code-keyword { color: #0000ff; font-weight: bold; }
                      .code-variable { color: #800080; }
                      .code-string { color: #808080; }
                      .code-function { color: #000000; font-weight: bold; }
                    `}</style>

                    <div className="retro-card-container hover:scale-105 transition-transform duration-300">
                      <div className="retro-card">
                        {/* Window Header */}
                        <div className="retro-card-header" role="banner">
                          <span>💻 Formation - Kickstart.exe</span>
                          <div className="flex gap-1" role="toolbar" aria-label="Window controls">
                            <div className="w-3 h-3 bg-gray-400 border border-black text-[8px] text-center leading-3" role="button" aria-label="Minimize" tabIndex="0">_</div>
                            <div className="w-3 h-3 bg-gray-400 border border-black text-[8px] text-center leading-3" role="button" aria-label="Maximize" tabIndex="0">□</div>
                            <div className="w-3 h-3 bg-red-500 border border-black text-[8px] text-center leading-3" role="button" aria-label="Close" tabIndex="0">×</div>
                          </div>
                        </div>

                        {/* Tabs */}
                        <div className="retro-card-tabs" role="tablist" aria-label="Formation details">
                          <div className="retro-card-tab active" role="tab" aria-selected="true" tabIndex="0">Info.js</div>
                          <div className="retro-card-tab" role="tab" aria-selected="false" tabIndex="0">Price.css</div>
                          <div className="retro-card-tab" role="tab" aria-selected="false" tabIndex="0">Outcomes.md</div>
                        </div>

                        {/* Code Editor Body */}
                        <div className="retro-card-body" role="main" aria-label="Formation details code editor">
                          <div className="retro-line-numbers" aria-hidden="true">
                            {Array.from({length: 15}, (_, i) => (
                              <div key={i}>{i + 1}</div>
                            ))}
                          </div>
                          <div className="retro-code-content" role="region" aria-label="Formation information">
                            <span className="code-comment">// 🚀 Formation Kickstart - Débutant</span>{'\n'}
                            <span className="code-keyword">const</span> <span className="code-variable">formation</span> = {'{'}
                            {'\n'}  <span className="code-string">"title"</span>: <span className="code-string">"{formation.title}"</span>,
                            {'\n'}  <span className="code-string">"target"</span>: <span className="code-string">"{formation.target.substring(0, 45)}..."</span>,
                            {'\n'}  <span className="code-string">"price"</span>: <span className="code-string">"{formation.price}"</span>,
                            {'\n'}  <span className="code-string">"duration"</span>: <span className="code-string">"{formation.duration}"</span>,
                            {'\n'}  <span className="code-string">"outcomes"</span>: [
                            {'\n'}    <span className="code-string">"✓ Sites en quelques heures"</span>,
                            {'\n'}    <span className="code-string">"✓ Outils Bolt/Lovable"</span>,
                            {'\n'}    <span className="code-string">"✓ Méthodo complète"</span>,
                            {'\n'}    <span className="code-string">"✓ Portfolio professionnel"</span>
                            {'\n'}  ]
                            {'\n'}{'}'}
                            {'\n'}
                            {'\n'}<span className="code-comment">// 🎯 Parfait pour débuter!</span>
                          </div>
                        </div>

                        {/* Footer */}
                        <div className="retro-card-footer" role="contentinfo">
                          <span className="text-black font-normal" aria-label="File name">Formation.js</span>
                          <button
                            className="retro-copy-button"
                            onClick={() => window.open(formation.href, '_blank')}
                            aria-label={`S'inscrire à la formation ${formation.title}`}
                            type="button"
                          >
                            ▶ S'inscrire
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  // Futuristic Neural Network Style Card for Architect Training
                  <div className="relative group h-full" role="article" aria-label={`Formation ${formation.title}`}>
                    {/* Animated Neural Network Background */}
                    <div className="absolute inset-0 rounded-3xl overflow-hidden">
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-cyan-900/20"
                        animate={{
                          backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'],
                        }}
                        transition={{
                          duration: 20,
                          repeat: Infinity,
                          ease: "linear"
                        }}
                      />

                      {/* Neural Network Lines */}
                      <svg className="absolute inset-0 w-full h-full opacity-20" viewBox="0 0 400 500">
                        <defs>
                          <linearGradient id="neuralGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.6" />
                            <stop offset="50%" stopColor="#8b5cf6" stopOpacity="0.8" />
                            <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.6" />
                          </linearGradient>
                        </defs>

                        {/* Neural connections */}
                        <motion.path
                          d="M50,100 Q200,150 350,120 Q200,200 50,250 Q200,300 350,280"
                          stroke="url(#neuralGradient)"
                          strokeWidth="1"
                          fill="none"
                          initial={{ pathLength: 0 }}
                          animate={{ pathLength: 1 }}
                          transition={{ duration: 3, delay: index * 0.5, repeat: Infinity, repeatType: "reverse" }}
                        />
                        <motion.path
                          d="M80,200 Q200,100 320,180 Q200,250 80,320"
                          stroke="url(#neuralGradient)"
                          strokeWidth="1"
                          fill="none"
                          initial={{ pathLength: 0 }}
                          animate={{ pathLength: 1 }}
                          transition={{ duration: 4, delay: index * 0.3, repeat: Infinity, repeatType: "reverse" }}
                        />

                        {/* Neural nodes */}
                        <motion.circle cx="50" cy="100" r="3" fill="#3b82f6"
                          animate={{ scale: [1, 1.5, 1], opacity: [0.6, 1, 0.6] }}
                          transition={{ duration: 2, repeat: Infinity, delay: 0 }} />
                        <motion.circle cx="350" cy="120" r="3" fill="#8b5cf6"
                          animate={{ scale: [1, 1.5, 1], opacity: [0.6, 1, 0.6] }}
                          transition={{ duration: 2, repeat: Infinity, delay: 0.5 }} />
                        <motion.circle cx="200" cy="200" r="4" fill="#06b6d4"
                          animate={{ scale: [1, 1.8, 1], opacity: [0.7, 1, 0.7] }}
                          transition={{ duration: 2, repeat: Infinity, delay: 1 }} />
                      </svg>
                    </div>

                    {/* Glass morphism card */}
                    <div className="relative h-full p-6 md:p-8 lg:p-10 rounded-3xl bg-gradient-to-br from-slate-900/80 via-blue-900/40 to-purple-900/60 backdrop-blur-xl border border-blue-400/30 shadow-2xl transition-all duration-500 hover:transform hover:scale-[1.02] hover:shadow-blue-500/25 hover:border-blue-400/60">

                      {/* Holographic Header */}
                      <div className="flex items-center justify-between mb-8">
                        <div className="relative">
                          <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 rounded-2xl blur-lg opacity-75"></div>
                          <div className="relative flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-600 shadow-lg">
                            <IconComponent className="w-8 h-8 text-white" />
                          </div>
                        </div>
                        <div className="relative">
                          <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full blur opacity-75"></div>
                          <div className="relative px-4 py-2 rounded-full bg-gradient-to-r from-cyan-400/20 to-blue-500/20 border border-cyan-400/40 text-cyan-300 text-sm font-semibold backdrop-blur-sm">
                            {formation.level}
                          </div>
                        </div>
                      </div>

                      {/* Glitch Effect Title */}
                      <div className="mb-6">
                        <h3 className="text-2xl lg:text-3xl font-light mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 transition-all duration-300 group-hover:from-cyan-300 group-hover:via-blue-300 group-hover:to-purple-300">
                          {formation.title}
                        </h3>
                        <div className="flex items-start gap-3 mb-4">
                          <div className="relative mt-1">
                            <Target className="w-5 h-5 text-cyan-400" />
                            <div className="absolute inset-0 w-5 h-5 bg-cyan-400 rounded-full blur-sm opacity-50"></div>
                          </div>
                          <p className="text-slate-300 leading-relaxed font-light">
                            {formation.target}
                          </p>
                        </div>
                      </div>

                      {/* Holographic Price Panel */}
                      <div className="mb-8 p-4 rounded-xl bg-gradient-to-r from-slate-800/60 to-blue-900/40 border border-blue-400/20 backdrop-blur-sm relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-400/5 to-transparent animate-pulse"></div>
                        <div className="relative flex items-center justify-between">
                          <div>
                            <span className="text-xs text-slate-400 block font-light tracking-wide">{t('price_label')}</span>
                            <span className="text-2xl font-light text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">{formation.price}</span>
                          </div>
                          <div className="text-right">
                            <span className="text-xs text-slate-400 block font-light tracking-wide">{t('duration_label')}</span>
                            <span className="text-lg font-light text-blue-300">{formation.duration}</span>
                          </div>
                        </div>
                      </div>

                      {/* Neural Outcomes Display */}
                      <div className="mb-8">
                        <h4 className="font-light text-slate-200 mb-4 flex items-center text-sm tracking-wide">
                          <motion.span
                            className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 mr-3"
                            animate={{
                              boxShadow: ['0 0 0 0 rgba(59, 130, 246, 0.4)', '0 0 0 8px rgba(59, 130, 246, 0)', '0 0 0 0 rgba(59, 130, 246, 0.4)']
                            }}
                            transition={{ duration: 2, repeat: Infinity }}
                          />
                          {t('outcomes_title')}
                        </h4>
                        <ul className="space-y-3">
                          {formation.outcomes.map((outcome, outcomeIndex) => (
                            <motion.li
                              key={outcomeIndex}
                              className="flex items-start gap-3 text-slate-300 font-light"
                              initial={{ opacity: 0, x: -20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              transition={{ delay: (index * 0.2) + (outcomeIndex * 0.1), duration: 0.5 }}
                              viewport={{ once: true }}
                            >
                              <motion.span
                                className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 mt-2 flex-shrink-0"
                                animate={{
                                  scale: [1, 1.3, 1],
                                  opacity: [0.7, 1, 0.7]
                                }}
                                transition={{
                                  duration: 2,
                                  repeat: Infinity,
                                  delay: outcomeIndex * 0.3
                                }}
                              />
                              <span className="leading-relaxed">{outcome}</span>
                            </motion.li>
                          ))}
                        </ul>
                      </div>

                      {/* Quantum CTA Button */}
                      <div className="space-y-4">
                        <div className="relative group/btn">
                          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl blur-lg opacity-75 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
                          <Button
                            variant="primary"
                            size="lg"
                            href={formation.href}
                            className="relative w-full bg-gradient-to-r from-blue-500/80 to-purple-600/80 hover:from-blue-400/90 hover:to-purple-500/90 border border-blue-400/30 backdrop-blur-sm transition-all duration-300 group-hover/btn:scale-105 font-light tracking-wide"
                            aria-label={`S'inscrire à la formation ${formation.title}`}
                          >
                            <span>{formation.cta}</span>
                            <ExternalLink className="w-5 h-5 ml-2" aria-hidden="true" />
                          </Button>
                        </div>

                        {/* Quantum Learn More Link */}
                        <div className="text-center">
                          <a
                            href={formation.href}
                            className="text-sm text-slate-400 hover:text-cyan-300 transition-colors duration-300 inline-flex items-center gap-2 font-light tracking-wide"
                          >
                            {t('learn_more')}
                            <ExternalLink className="w-4 h-4" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Comparison Note */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="inline-block p-6 bg-background-dark-alt/50 backdrop-blur-sm border border-primary-blue/30 rounded-2xl max-w-2xl">
            <p className="text-text-secondary leading-relaxed">
              {t('comparison_note')}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FormationCards;