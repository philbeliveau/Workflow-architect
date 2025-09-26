'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useTranslations } from 'next-intl'
import { 
  Clock, 
  CheckCircle, 
  ChevronDown, 
  ChevronUp,
  ArrowLeft,
  Target,
  Users,
  Globe,
  BookOpen,
  Play,
  Award,
  Building,
  TrendingUp,
  Trophy,
  Code,
  Cpu,
  Zap,
  Layers,
  UserCheck,
  Rocket,
  Brain,
  GraduationCap
} from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { PaymentFlexibility } from '@/components/sections/PaymentFlexibility'
import Navigation from '@/components/sections/Navigation'
import Link from 'next/link'

interface Module {
  id: string
  title: string
  duration: string
  description: string
  learningObjectives: string[]
  keyTopics: string[]
}

interface TargetAudience {
  title: string
  description: string
  icon: string
}

interface ValueProposition {
  title: string
  description: string
  icon: string
}

interface ProfessionalOutcome {
  title: string
  description: string
  icon: string
}

interface EnterpriseOption {
  title: string
  description: string
  features: string[]
}

export default function FormationAvancePage() {
  const t = useTranslations('tracks.formations.avance')
  const tCommon = useTranslations('common')
  const tModules = useTranslations('tracks.formations.avance.modules')

  // Advanced modules for scalable software architecture
  const curriculumModules: Module[] = [
    {
      id: 'module_1',
      title: tModules('module_1.title'),
      duration: tModules('module_1.duration'),
      description: tModules('module_1.description'),
      learningObjectives: [
        tModules('module_1.learningObjectives.0'),
        tModules('module_1.learningObjectives.1'),
        tModules('module_1.learningObjectives.2')
      ],
      keyTopics: [
        tModules('module_1.keyTopics.0'),
        tModules('module_1.keyTopics.1'),
        tModules('module_1.keyTopics.2'),
        tModules('module_1.keyTopics.3')
      ]
    },
    {
      id: 'module_2', 
      title: tModules('module_2.title'),
      duration: tModules('module_2.duration'),
      description: tModules('module_2.description'),
      learningObjectives: [
        tModules('module_2.learningObjectives.0'),
        tModules('module_2.learningObjectives.1'),
        tModules('module_2.learningObjectives.2')
      ],
      keyTopics: [
        tModules('module_2.keyTopics.0'),
        tModules('module_2.keyTopics.1'),
        tModules('module_2.keyTopics.2'),
        tModules('module_2.keyTopics.3')
      ]
    },
    {
      id: 'module_3',
      title: tModules('module_3.title'),
      duration: tModules('module_3.duration'),
      description: tModules('module_3.description'),
      learningObjectives: [
        tModules('module_3.learningObjectives.0'),
        tModules('module_3.learningObjectives.1'),
        tModules('module_3.learningObjectives.2')
      ],
      keyTopics: [
        tModules('module_3.keyTopics.0'),
        tModules('module_3.keyTopics.1'),
        tModules('module_3.keyTopics.2'),
        tModules('module_3.keyTopics.3')
      ]
    },
    {
      id: 'module_4',
      title: tModules('module_4.title'),
      duration: tModules('module_4.duration'),
      description: tModules('module_4.description'),
      learningObjectives: [
        tModules('module_4.learningObjectives.0'),
        tModules('module_4.learningObjectives.1'),
        tModules('module_4.learningObjectives.2')
      ],
      keyTopics: [
        tModules('module_4.keyTopics.0'),
        tModules('module_4.keyTopics.1'),
        tModules('module_4.keyTopics.2'),
        tModules('module_4.keyTopics.3')
      ]
    },
    {
      id: 'module_5',
      title: tModules('module_5.title'),
      duration: tModules('module_5.duration'),
      description: tModules('module_5.description'),
      learningObjectives: [
        tModules('module_5.learningObjectives.0'),
        tModules('module_5.learningObjectives.1'),
        tModules('module_5.learningObjectives.2')
      ],
      keyTopics: [
        tModules('module_5.keyTopics.0'),
        tModules('module_5.keyTopics.1'),
        tModules('module_5.keyTopics.2'),
        tModules('module_5.keyTopics.3')
      ]
    },
    {
      id: 'module_6',
      title: tModules('module_6.title'),
      duration: tModules('module_6.duration'),
      description: tModules('module_6.description'),
      learningObjectives: [
        tModules('module_6.learningObjectives.0'),
        tModules('module_6.learningObjectives.1'),
        tModules('module_6.learningObjectives.2')
      ],
      keyTopics: [
        tModules('module_6.keyTopics.0'),
        tModules('module_6.keyTopics.1'),
        tModules('module_6.keyTopics.2'),
        tModules('module_6.keyTopics.3')
      ]
    }
  ]

  const totalDuration = curriculumModules.reduce((total, module) => {
    const duration = parseInt(module.duration.replace('h', '').replace('min', ''))
    return total + (isNaN(duration) ? 150 : duration) // default to 150min for advanced modules
  }, 0)

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900">
      {/* Navigation */}
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-primary-blue/20 to-accent-purple/20 backdrop-blur-sm rounded-full px-6 py-2 text-primary-blue border border-primary-blue/30 mb-6"
            >
              <Trophy className="w-4 h-4" />
              <span className="text-sm font-medium">{t('misc.formation_avancee')}</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-6xl font-bold text-white mb-6"
            >
              {t('title')}
              <span className="block text-gradient bg-gradient-to-r from-primary-blue to-accent-purple bg-clip-text text-transparent">
                {t('subtitle')}
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto"
            >
              {t('description')}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12"
            >
              <div className="flex items-center gap-3 text-gray-300">
                <div className="p-2 bg-primary-blue/20 rounded-lg">
                  <Clock className="w-5 h-5 text-primary-blue" />
                </div>
                <span>{t('duration')}</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <div className="p-2 bg-primary-blue/20 rounded-lg">
                  <Building className="w-5 h-5 text-primary-blue" />
                </div>
                <span>{t('level')}</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <div className="p-2 bg-primary-blue/20 rounded-lg">
                  <Globe className="w-5 h-5 text-primary-blue" />
                </div>
                <span>{t('misc.online_training')}</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <a 
                href="https://buy.stripe.com/00wfZiaVhgcM5e91H4eEo05"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-lg font-semibold bg-gradient-to-r from-primary-blue to-accent-purple text-white hover:from-primary-blue/90 hover:to-accent-purple/90 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg"
              >
                {t('cta')}
                <Play className="w-5 h-5" />
              </a>
              <Button variant="outline" size="lg" className="border-white/40 text-white hover:bg-white/20 hover:border-white/60">
                {t('misc.learn_more')}
                <BookOpen className="w-5 h-5 ml-2" />
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 bg-white/5 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
            >
              <h2 className="text-3xl font-bold text-white mb-6">
                {t('overview.title')}
              </h2>
              <p className="text-gray-300 mb-6 text-lg">
                {t('overview.description')}
              </p>
              <div className="space-y-4">
                {[0, 1, 2].map((index: number) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-primary-blue mt-1 flex-shrink-0" />
                    <span className="text-gray-300">{t(`benefits.${index}`)}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
              className="bg-primary-800/50 backdrop-blur-sm rounded-2xl p-8 border border-white/10"
            >
              <div className="text-center mb-6">
                <div className="inline-flex items-center gap-2 bg-primary-blue/20 rounded-full px-4 py-2 text-primary-blue mb-4">
                  <Award className="w-5 h-5" />
                  <span className="font-medium">{t('overview.card.badge')}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{t('overview.card.title')}</h3>
                <p className="text-gray-300">{t('overview.card.subtitle')}</p>
              </div>
              
              <div className="space-y-3">
                {[0, 1, 2].map((index: number) => {
                  const icons = [Cpu, Zap, Target];
                  const IconComponent = icons[index];
                  return (
                    <div key={index} className="flex items-center gap-3 text-gray-300">
                      <IconComponent className="w-5 h-5 text-primary-blue" />
                      <span>{t(`overview.card.features.${index}`)}</span>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Curriculum Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              {t('curriculum.title')}
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              {t('curriculum.subtitle')}
            </p>
          </motion.div>

          <div className="space-y-6">
            {curriculumModules.map((module, index) => (
              <motion.div
                key={module.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.1 + index * 0.1 }}
                className="bg-primary-800/30 backdrop-blur-sm rounded-xl border border-white/10 p-6"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex items-center justify-center w-12 h-12 bg-primary-blue/20 rounded-xl">
                    <span className="text-lg font-bold text-primary-blue">{index + 1}</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-white mb-1">
                      Module {index + 1} - {module.title}
                    </h3>
                    <div className="flex items-center gap-4 text-sm">
                      <span className="text-primary-blue font-medium">{module.duration}</span>
                      <span className="text-gray-400">{module.description}</span>
                    </div>
                  </div>
                </div>

                <div className="border-t border-white/10 pt-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="text-sm font-semibold text-primary-blue mb-3">
                        {t('misc.learning_objectives')}
                      </h4>
                      <ul className="space-y-2">
                        {module.learningObjectives.map((objective, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-gray-300">
                            <CheckCircle className="w-4 h-4 text-primary-blue mt-1 flex-shrink-0" />
                            <span className="text-sm">{objective}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-primary-blue mb-3">
                        {t('misc.key_topics')}
                      </h4>
                      <ul className="space-y-2">
                        {module.keyTopics.map((topic, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-gray-300">
                            <div className="w-1.5 h-1.5 bg-primary-blue rounded-full mt-2 flex-shrink-0" />
                            <span className="text-sm">{topic}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Professional Outcomes Section */}
      <section className="py-16 bg-white/5 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-6">
              {t('outcomes.title')}
            </h2>
            <p className="text-xl text-gray-300">
              {t('outcomes.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[0, 1, 2, 3, 4, 5].map((index: number) => {
              const icons = [Layers, UserCheck, Rocket, Target, Brain, GraduationCap];
              const IconComponent = icons[index];
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.2 + index * 0.1 }}
                  className="bg-primary-800/30 backdrop-blur-sm rounded-xl p-6 border border-white/10"
                >
                  <div className="mb-4">
                    <IconComponent className="w-8 h-8 text-gray-300" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-3">{t(`outcomes.items.${index}.title`)}</h3>
                  <p className="text-gray-300">{t(`outcomes.items.${index}.description`)}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Final Enrollment CTA */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-gradient-to-r from-primary-blue to-accent-purple rounded-2xl p-12 text-white"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                {t('cta_final.title')}
              </h2>
              <p className="text-xl mb-8 text-white/90 max-w-3xl mx-auto">
                {t('cta_final.description')}
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-8">
                {[0, 1, 2].map((index: number) => (
                  <>
                    <div key={index} className="text-center">
                      <div className="text-3xl font-bold">{t(`cta_final.stats.${index}.value`)}</div>
                      <div className="text-white/80">{t(`cta_final.stats.${index}.label`)}</div>
                    </div>
                    {index < 2 && <div className="hidden sm:block w-px h-12 bg-white/30"></div>}
                  </>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
                <Link href="/formation">
                  <Button variant="outline" size="lg" className="border-white/50 text-white hover:bg-white/20 hover:border-white/70">
                    <ArrowLeft className="w-5 h-5 mr-2" />
                    {t('cta_final.back_button')}
                  </Button>
                </Link>
              </div>

              {/* Payment Flexibility Component */}
              <PaymentFlexibility
                formationName="avance"
                price={2240} // 30% discount: 3200 * 0.7 = 2240
                originalPrice={3200}
                isPromotional={true}
                theme="dark"
                stripeUrl="https://buy.stripe.com/00wfZiaVhgcM5e91H4eEo05"
                className="max-w-2xl mx-auto"
              />
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}