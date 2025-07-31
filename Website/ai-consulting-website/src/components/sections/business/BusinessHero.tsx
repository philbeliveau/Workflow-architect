'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { ArrowRight, Briefcase, Users, BarChart3, Calendar, Building, Lightbulb } from 'lucide-react';
import { useTranslations } from 'next-intl';

const BusinessHero: React.FC = () => {
  const t = useTranslations('business');
  const metrics = t.raw('metrics');
  
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

              <div className="inline-flex items-center gap-2 bg-primary-blue/10 border border-primary-blue/20 rounded-full px-4 py-2 mb-6">
                <Briefcase className="w-4 h-4 text-primary-blue" />
                <span className="text-primary-blue text-sm font-medium">{t('badge')}</span>
              </div>
              
              <h1 className="text-4xl lg:text-5xl font-bold mb-6 text-text-primary">
                <span className="text-primary-blue">{t('title')}</span>
                <span className="block text-accent-red">{t('subtitle')}</span>
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <p className="text-lg text-text-secondary mb-8 leading-relaxed">
                {t('description')}
              </p>

              <div className="grid grid-cols-1 gap-4 mb-8">
                <div className="bg-background-accent-grey/50 border border-primary-blue/30 rounded-lg p-4">
                  <h3 className="text-primary-blue font-semibold mb-3 flex items-center gap-2">
                    <Lightbulb className="w-4 h-4" />
                    {t('whatYouCanBuild')}
                  </h3>
                  <div className="grid grid-cols-2 gap-4 text-text-secondary text-sm">
                    <div>
                      <strong>• {t('examples.dashboards')}</strong><br/>
                      {t('examples.dashboardsDesc')}
                    </div>
                    <div>
                      <strong>• {t('examples.tools')}</strong><br/>
                      {t('examples.toolsDesc')}
                    </div>
                    <div>
                      <strong>• {t('examples.automation')}</strong><br/>
                      {t('examples.automationDesc')}
                    </div>
                    <div>
                      <strong>• {t('examples.apps')}</strong><br/>
                      {t('examples.appsDesc')}
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
                {t('cta.primary')}
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
              
              <Button 
                variant="outline" 
                size="lg" 
                href="#business-examples"
              >
                {t('cta.secondary')}
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
            <div className="bg-gradient-to-r from-primary-blue/10 to-accent-red/10 border border-primary-blue/20 rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-3 h-3 bg-red-500/30 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500/30 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500/30 rounded-full"></div>
                <span className="text-text-secondary text-sm ml-2">{t('dashboard.title')}</span>
              </div>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-text-primary font-medium">{t('dashboard.project')}</span>
                  <span className="bg-success-green/20 text-success-green px-2 py-1 rounded text-xs">{t('dashboard.status')}</span>
                </div>
                
                <div className="w-full bg-background-dark-alt rounded-full h-2">
                  <div className="bg-primary-blue h-2 rounded-full" style={{ width: '75%' }}></div>
                </div>
                
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-primary-blue font-bold">75%</div>
                    <div className="text-text-secondary text-xs">{t('dashboard.progress')}</div>
                  </div>
                  <div>
                    <div className="text-accent-red font-bold">15j</div>
                    <div className="text-text-secondary text-xs">{t('dashboard.remaining')}</div>
                  </div>
                  <div>
                    <div className="text-success-green font-bold">€15k</div>
                    <div className="text-text-secondary text-xs">{t('dashboard.budget')}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Simple App Preview */}
            <div className="bg-gradient-to-r from-accent-red/10 to-primary-blue/10 border border-accent-red/20 rounded-2xl p-6">
              <h4 className="text-text-primary font-semibold mb-3 flex items-center gap-2">
                <Calendar className="w-4 h-4 text-accent-red" />
                {t('booking.title')}
              </h4>
              
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-sm">
                  <div className="w-2 h-2 bg-primary-blue rounded-full"></div>
                  <span className="text-text-secondary">9h00 - {t('booking.meeting')} ({t('booking.available')})</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <div className="w-2 h-2 bg-warning-orange rounded-full"></div>
                  <span className="text-text-secondary">14h00 - {t('booking.demo')} ({t('booking.reserved')})</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <div className="w-2 h-2 bg-primary-blue rounded-full"></div>
                  <span className="text-text-secondary">16h00 - {t('booking.consultation')} ({t('booking.available')})</span>
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
          {metrics.map((item: {value: string, label: string}, index: number) => {
            const icons = [Calendar, Users, Briefcase];
            const colors = ["text-success-green", "text-primary-blue", "text-accent-red"];
            const IconComponent = icons[index];
            const colorClass = colors[index];
            
            return (
              <div key={index} className="bg-background-accent-grey/30 border border-primary-blue/30 rounded-xl p-4 text-center">
                <IconComponent className={`w-6 h-6 ${colorClass} mx-auto mb-2`} />
                <div className={`text-2xl font-bold ${colorClass} mb-1`}>{item.value}</div>
                <div className="text-text-secondary text-xs">{item.label}</div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default BusinessHero;