'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { Code, Briefcase, ArrowRight, Cpu, Users, Zap, BarChart3, BookOpen, Star, Clock } from 'lucide-react';
import { useTranslations } from 'next-intl';

const TrackSelection: React.FC = () => {
  const t = useTranslations('tracks');
  
  const tracks = [
    {
      id: "debutant",
      icon: <Code className="w-12 h-12" />,
      title: t('formations.debutant.title'),
      subtitle: t('formations.debutant.subtitle'),
      description: t('formations.debutant.description'),
      duration: t('formations.debutant.duration'),
      level: t('formations.debutant.level'),
      price: t('formations.debutant.price'),
      features: [
        t('formations.debutant.features.0'),
        t('formations.debutant.features.1'),
        t('formations.debutant.features.2'),
        t('formations.debutant.features.3')
      ],
      benefits: [
        { icon: Zap, text: t('formations.debutant.benefits.0') },
        { icon: Users, text: t('formations.debutant.benefits.1') },
        { icon: BookOpen, text: t('formations.debutant.benefits.2') }
      ],
      cta: t('formations.debutant.cta'),
      href: "/formation-kickstart",
      color: "yellow-500",
      gradient: "from-yellow-500/20 via-yellow-400/10 to-yellow-300/5",
      badge: "",
      footer: t('formations.debutant.footer')
    },
    {
      id: "avance",
      icon: <Zap className="w-12 h-12" />,
      title: t('formations.avance.title'),
      subtitle: t('formations.avance.subtitle'),
      description: t('formations.avance.description'),
      duration: t('formations.avance.duration'),
      level: t('formations.avance.level'),
      price: t('formations.avance.price'),
      features: [
        t('formations.avance.features.0'),
        t('formations.avance.features.1'),
        t('formations.avance.features.2'),
        t('formations.avance.features.3')
      ],
      benefits: [
        { icon: Cpu, text: t('formations.avance.benefits.0') },
        { icon: Zap, text: t('formations.avance.benefits.1') },
        { icon: Star, text: t('formations.avance.benefits.2') }
      ],
      cta: t('formations.avance.cta'),
      href: "/formation-avance",
      color: "primary-blue",
      gradient: "from-primary-blue/20 via-primary-blue/10 to-accent-purple/5",
      badge: "",
      footer: t('formations.avance.footer')
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
    <section
      id="track-selection"
      className="py-24 relative overflow-hidden"
      style={{
        background: 'var(--section-reverse)'
      }}
    >
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center space-x-3 mb-4">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-500/20 to-blue-600/20 rounded-xl flex items-center justify-center">
              <BookOpen className="w-6 h-6 text-blue-600" />
            </div>
            <span className="text-lg font-semibold text-primary-blue bg-primary-blue/10 px-4 py-2 rounded-full">
              {t('header.badge')}
            </span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-text-light">
            {t('header.title')}
          </h2>
          <p className="text-xl text-text-primary max-w-4xl mx-auto leading-relaxed">
            {t('header.subtitle')}
          </p>
        </motion.div>

        {/* Track Cards */}
        <motion.div
          className="grid lg:grid-cols-2 gap-6 mb-16 max-w-4xl mx-auto"
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
              {track.id === "debutant" ? (
                // Windows 95 Themed Card - Standardized
                <div className="relative w-full max-w-md mx-auto">
                  <style jsx>{`
                    .training-card {
                      width: 100%;
                      max-width: 400px;
                      min-height: 600px;
                      height: auto;
                      background: #ffffff;
                      border-radius: 8px;
                      box-shadow: 0 8px 32px rgba(0, 0, 0, 0.12);
                      overflow: visible;
                      transition: all 0.3s ease;
                      display: flex;
                      flex-direction: column;
                    }

                    .training-card:hover {
                      transform: translateY(-4px);
                      box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15);
                    }

                    .retro-header {
                      background: #000080;
                      padding: 8px 12px;
                      color: white;
                      font-family: "MS Sans Serif", sans-serif;
                      font-size: 12px;
                      display: flex;
                      align-items: center;
                      justify-content: space-between;
                      height: 32px;
                      flex-shrink: 0;
                    }

                    .window-controls {
                      display: flex;
                      gap: 4px;
                    }

                    .window-btn {
                      width: 16px;
                      height: 14px;
                      background: #c0c0c0;
                      border: 1px solid #808080;
                      font-size: 8px;
                      display: flex;
                      align-items: center;
                      justify-content: center;
                      cursor: pointer;
                    }

                    .card-body {
                      padding: 24px;
                      flex: 1;
                      display: flex;
                      flex-direction: column;
                      background: #ffffff;
                    }

                    .card-header {
                      margin-bottom: 20px;
                    }

                    .card-title {
                      font-size: 22px;
                      font-weight: 600;
                      color: #1a1a1a;
                      margin-bottom: 8px;
                      line-height: 1.3;
                    }

                    .card-subtitle {
                      font-size: 14px;
                      color: #666;
                      margin-bottom: 12px;
                    }

                    .card-meta {
                      display: flex;
                      align-items: center;
                      gap: 16px;
                      margin-bottom: 16px;
                    }

                    .meta-item {
                      display: flex;
                      align-items: center;
                      gap: 6px;
                      font-size: 13px;
                      color: #555;
                    }

                    .price-tag {
                      background: #f0f8ff;
                      color: #1e40af;
                      padding: 4px 12px;
                      border-radius: 16px;
                      font-weight: 600;
                      font-size: 18px;
                    }

                    .card-description {
                      font-size: 15px;
                      color: #444;
                      line-height: 1.5;
                      margin-bottom: 20px;
                    }

                    .features-list {
                      margin-bottom: 20px;
                    }

                    .features-title {
                      font-size: 14px;
                      font-weight: 600;
                      color: #333;
                      margin-bottom: 12px;
                    }

                    .feature-item {
                      display: flex;
                      align-items: center;
                      gap: 8px;
                      margin-bottom: 8px;
                      font-size: 14px;
                      color: #555;
                    }

                    .feature-icon {
                      width: 16px;
                      height: 16px;
                      background: #e8f4fd;
                      border-radius: 50%;
                      display: flex;
                      align-items: center;
                      justify-content: center;
                      font-size: 10px;
                      color: #1e40af;
                      font-weight: bold;
                    }

                    .card-footer {
                      margin-top: auto;
                      padding-top: 16px;
                      border-top: 1px solid #f0f0f0;
                    }

                    .cta-button {
                      width: 100%;
                      background: linear-gradient(135deg, #1e40af, #3b82f6);
                      color: white;
                      border: none;
                      padding: 14px 20px;
                      border-radius: 8px;
                      font-size: 15px;
                      font-weight: 600;
                      cursor: pointer;
                      transition: all 0.3s ease;
                      margin-bottom: 8px;
                    }

                    .cta-button:hover {
                      background: linear-gradient(135deg, #1e3a8a, #2563eb);
                      transform: translateY(-1px);
                    }

                    .card-footer-text {
                      text-align: center;
                      font-size: 12px;
                      color: #888;
                      font-style: italic;
                    }
                  `}</style>

                  <div className="training-card">
                    {/* Windows 95 Header */}
                    <div className="retro-header">
                      <span>💻 Formation Kickstart</span>
                      <div className="window-controls">
                        <div className="window-btn">_</div>
                        <div className="window-btn">□</div>
                        <div className="window-btn" style={{ background: '#ff4444' }}>×</div>
                      </div>
                    </div>

                    {/* Standardized Card Body */}
                    <div className="card-body">
                      <div className="card-header">
                        <h3 className="card-title">{track.title}</h3>
                        <p className="card-subtitle">{track.subtitle}</p>

                        <div className="card-meta">
                          <div className="meta-item">
                            <Clock className="w-4 h-4" />
                            <span>{track.duration}</span>
                          </div>
                          <div className="meta-item">
                            <span className="price-tag">{track.price}</span>
                          </div>
                        </div>
                      </div>

                      <p className="card-description">{track.description}</p>

                      <div className="features-list">
                        <h4 className="features-title">Ce que vous allez apprendre :</h4>
                        {track.features.map((feature: string, idx: number) => (
                          <div key={idx} className="feature-item">
                            <div className="feature-icon">✓</div>
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>

                      <div className="card-footer">
                        <button
                          className="cta-button"
                          onClick={() => window.open(track.href, '_blank')}
                          aria-label={`S'inscrire à la formation ${track.title}`}
                        >
                          {track.cta}
                        </button>
                        <p className="card-footer-text">{track.footer}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                // Terminal Themed Card - Standardized
                <div className="relative w-full max-w-md mx-auto">
                  <style jsx>{`
                    .training-card-dark {
                      width: 100%;
                      max-width: 400px;
                      min-height: 600px;
                      height: auto;
                      background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
                      border: 1px solid #dee2e6;
                      border-radius: 8px;
                      box-shadow: 0 8px 32px rgba(108, 117, 125, 0.15);
                      overflow: visible;
                      transition: all 0.3s ease;
                      display: flex;
                      flex-direction: column;
                    }

                    .training-card-dark:hover {
                      transform: translateY(-4px);
                      box-shadow: 0 12px 40px rgba(108, 117, 125, 0.25);
                      border-color: #3b82f6;
                    }

                    .terminal-header {
                      background: linear-gradient(135deg, #495057 0%, #343a40 100%);
                      padding: 12px 16px;
                      color: #ffffff;
                      font-family: "Courier New", monospace;
                      font-size: 12px;
                      display: flex;
                      align-items: center;
                      gap: 12px;
                      height: 44px;
                      flex-shrink: 0;
                      border-bottom: 1px solid #6c757d;
                    }

                    .traffic-lights {
                      display: flex;
                      gap: 6px;
                    }

                    .traffic-light {
                      width: 12px;
                      height: 12px;
                      border-radius: 50%;
                    }

                    .red { background: #ff5f56; }
                    .yellow { background: #ffbd2e; }
                    .green { background: #27ca3f; }

                    .terminal-title {
                      color: #adb5bd;
                      font-size: 11px;
                    }

                    .card-body-dark {
                      padding: 24px;
                      flex: 1;
                      display: flex;
                      flex-direction: column;
                      background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
                    }

                    .card-header-dark {
                      margin-bottom: 20px;
                    }

                    .card-title-dark {
                      font-size: 22px;
                      font-weight: 600;
                      color: #212529;
                      margin-bottom: 8px;
                      line-height: 1.3;
                    }

                    .card-subtitle-dark {
                      font-size: 14px;
                      color: #6c757d;
                      margin-bottom: 12px;
                    }

                    .card-meta-dark {
                      display: flex;
                      align-items: center;
                      gap: 16px;
                      margin-bottom: 16px;
                    }

                    .meta-item-dark {
                      display: flex;
                      align-items: center;
                      gap: 6px;
                      font-size: 13px;
                      color: #495057;
                    }

                    .price-tag-dark {
                      background: linear-gradient(135deg, #3b82f6, #2563eb);
                      color: #ffffff;
                      padding: 4px 12px;
                      border-radius: 16px;
                      font-weight: 600;
                      font-size: 18px;
                      box-shadow: 0 2px 8px rgba(59, 130, 246, 0.2);
                    }

                    .card-description-dark {
                      font-size: 15px;
                      color: #495057;
                      line-height: 1.5;
                      margin-bottom: 20px;
                    }

                    .features-list-dark {
                      margin-bottom: 20px;
                    }

                    .features-title-dark {
                      font-size: 14px;
                      font-weight: 600;
                      color: #212529;
                      margin-bottom: 12px;
                    }

                    .feature-item-dark {
                      display: flex;
                      align-items: center;
                      gap: 8px;
                      margin-bottom: 8px;
                      font-size: 14px;
                      color: #495057;
                      background: #ffffff;
                      padding: 8px;
                      border-radius: 6px;
                      border-left: 3px solid #3b82f6;
                    }

                    .feature-icon-dark {
                      width: 16px;
                      height: 16px;
                      background: linear-gradient(135deg, #3b82f6, #2563eb);
                      border-radius: 50%;
                      display: flex;
                      align-items: center;
                      justify-content: center;
                      font-size: 10px;
                      color: #ffffff;
                      font-weight: bold;
                      box-shadow: 0 2px 4px rgba(59, 130, 246, 0.3);
                    }

                    .card-footer-dark {
                      margin-top: auto;
                      padding-top: 16px;
                      border-top: 1px solid #dee2e6;
                    }

                    .cta-button-dark {
                      width: 100%;
                      background: linear-gradient(135deg, #3b82f6, #2563eb);
                      color: #ffffff;
                      border: none;
                      padding: 14px 20px;
                      border-radius: 8px;
                      font-size: 15px;
                      font-weight: 600;
                      cursor: pointer;
                      transition: all 0.3s ease;
                      margin-bottom: 8px;
                      box-shadow: 0 4px 12px rgba(59, 130, 246, 0.2);
                    }

                    .cta-button-dark:hover {
                      background: linear-gradient(135deg, #2563eb, #1d4ed8);
                      transform: translateY(-1px);
                      box-shadow: 0 6px 16px rgba(59, 130, 246, 0.3);
                    }

                    .card-footer-text-dark {
                      text-align: center;
                      font-size: 12px;
                      color: #6c757d;
                      font-style: italic;
                    }
                  `}</style>

                  <div className="training-card-dark">
                    {/* Terminal Header */}
                    <div className="terminal-header">
                      <div className="traffic-lights">
                        <div className="traffic-light red"></div>
                        <div className="traffic-light yellow"></div>
                        <div className="traffic-light green"></div>
                      </div>
                      <span className="terminal-title">architect@newcode:~/formation-avance</span>
                    </div>

                    {/* Standardized Card Body */}
                    <div className="card-body-dark">
                      <div className="card-header-dark">
                        <h3 className="card-title-dark">{track.title}</h3>
                        <p className="card-subtitle-dark">{track.subtitle}</p>

                        <div className="card-meta-dark">
                          <div className="meta-item-dark">
                            <Clock className="w-4 h-4" />
                            <span>{track.duration}</span>
                          </div>
                          <div className="meta-item-dark">
                            <span className="price-tag-dark">{track.price}</span>
                          </div>
                        </div>
                      </div>

                      <p className="card-description-dark">{track.description}</p>

                      <div className="features-list-dark">
                        <h4 className="features-title-dark">Modules avancés :</h4>
                        {track.features.map((feature: string, idx: number) => (
                          <div key={idx} className="feature-item-dark">
                            <div className="feature-icon-dark">✓</div>
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>

                      <div className="card-footer-dark">
                        <button
                          className="cta-button-dark"
                          onClick={() => window.open(track.href, '_blank')}
                          aria-label={`S'inscrire à la formation ${track.title}`}
                        >
                          {track.cta}
                        </button>
                        <p className="card-footer-text-dark">{track.footer}</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default TrackSelection;