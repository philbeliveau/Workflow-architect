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
  Star,
  Award,
  Settings,
  FileText,
  Rocket,
  CheckSquare,
  Compass
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

export default function FormationKickstartPage() {
  const t = useTranslations('formation_kickstart')
  const tCommon = useTranslations('common')

  // Generate modules from translation data
  const curriculumModules: Module[] = [
    'module_1', 'module_2', 'module_3', 'module_4', 'module_5',
    'module_6', 'module_7', 'module_8', 'module_9', 'module_10'
  ].map(moduleKey => ({
    id: moduleKey,
    title: t(`curriculum.modules.${moduleKey}.title`),
    duration: t(`curriculum.modules.${moduleKey}.duration`),
    description: t(`curriculum.modules.${moduleKey}.description`),
    learningObjectives: t.raw(`curriculum.modules.${moduleKey}.learning_objectives`) || [],
    keyTopics: t.raw(`curriculum.modules.${moduleKey}.key_topics`) || []
  }))

  const totalDuration = curriculumModules.reduce((total, module) => {
    const duration = parseInt(module.duration)
    return total + (isNaN(duration) ? 30 : duration) // default to 30min if parsing fails
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
              className="inline-flex items-center gap-2 bg-accent-purple/20 backdrop-blur-sm rounded-full px-6 py-2 text-accent-purple border border-accent-purple/30 mb-6"
            >
              <Star className="w-4 h-4" />
              <span className="text-sm font-medium">Formation Kickstart</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-6xl font-bold text-white mb-6"
            >
              {t('hero.title')}
              <span className="block text-accent-purple">{t('hero.title_highlight')}</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto"
            >
              {t('hero.subtitle')}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12"
            >
              <div className="flex items-center gap-3 text-gray-300">
                <div className="p-2 bg-accent-purple/20 rounded-lg">
                  <Clock className="w-5 h-5 text-accent-purple" />
                </div>
                <span>{Math.floor(totalDuration / 60)}h {t('hero.duration')}</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <div className="p-2 bg-accent-purple/20 rounded-lg">
                  <Users className="w-5 h-5 text-accent-purple" />
                </div>
                <span>{t('hero.level')}</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <div className="p-2 bg-accent-purple/20 rounded-lg">
                  <Globe className="w-5 h-5 text-accent-purple" />
                </div>
                <span>{t('hero.online')}</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Button size="lg" className="bg-accent-purple hover:bg-accent-purple-light text-white">
                {t('hero.cta_primary')}
                <Play className="w-5 h-5 ml-2" />
              </Button>
              <Button variant="outline" size="lg" className="border-white/40 text-white hover:bg-white/20 hover:border-white/60">
                {t('hero.cta_secondary')}
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
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                  <span className="text-gray-300">{t('overview.benefits.practical')}</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                  <span className="text-gray-300">{t('overview.benefits.methodology')}</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                  <span className="text-gray-300">{t('overview.benefits.support')}</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
              className="bg-primary-800/50 backdrop-blur-sm rounded-2xl p-8 border border-white/10"
            >
              <div className="text-center mb-6">
                <div className="inline-flex items-center gap-2 bg-accent-purple/20 rounded-full px-4 py-2 text-accent-purple mb-4">
                  <Award className="w-5 h-5" />
                  <span className="font-medium">Résultats garantis</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{t('overview.results.title')}</h3>
                <p className="text-gray-300">{t('overview.results.subtitle')}</p>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-gray-300">
                  <Target className="w-5 h-5 text-accent-purple" />
                  <span>{t('overview.results.items.website')}</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <Target className="w-5 h-5 text-accent-purple" />
                  <span>{t('overview.results.items.mastery')}</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <Target className="w-5 h-5 text-accent-purple" />
                  <span>{t('overview.results.items.methodology')}</span>
                </div>
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
            transition={{ delay: 0.7 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              {t('curriculum.title')}
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              {t('curriculum.subtitle')}
            </p>
          </motion.div>

          <div className="space-y-6">
            {curriculumModules.map((module, index) => (
              <motion.div
                key={module.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + index * 0.1 }}
                className="bg-primary-800/30 backdrop-blur-sm rounded-xl border border-white/10 p-6"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex items-center justify-center w-12 h-12 bg-accent-purple/20 rounded-xl">
                    <span className="text-lg font-bold text-accent-purple">{index + 1}</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-white mb-1">
                      Module {index + 1} - {module.title}
                    </h3>
                    <div className="flex items-center gap-4 text-sm">
                      <span className="text-accent-purple font-medium">{module.duration}</span>
                      <span className="text-gray-400">{module.description}</span>
                    </div>
                  </div>
                </div>

                <div className="border-t border-white/10 pt-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="text-sm font-semibold text-accent-purple mb-3">
                        {t('curriculum.learning_objectives')}
                      </h4>
                      <ul className="space-y-2">
                        {module.learningObjectives.map((objective, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-gray-300">
                            <CheckCircle className="w-4 h-4 text-green-400 mt-1 flex-shrink-0" />
                            <span className="text-sm">{objective}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-accent-purple mb-3">
                        {t('curriculum.key_topics')}
                      </h4>
                      <ul className="space-y-2">
                        {module.keyTopics.map((topic, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-gray-300">
                            <div className="w-1.5 h-1.5 bg-accent-purple rounded-full mt-2 flex-shrink-0" />
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

      {/* Learning Outcomes Section */}
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
            {[
              {
                title: t('outcomes.skills.tools.title'),
                description: t('outcomes.skills.tools.description'),
                icon: Settings
              },
              {
                title: t('outcomes.skills.specifications.title'),
                description: t('outcomes.skills.specifications.description'),
                icon: FileText
              },
              {
                title: t('outcomes.skills.websites.title'),
                description: t('outcomes.skills.websites.description'),
                icon: Globe
              },
              {
                title: t('outcomes.skills.hosting.title'),
                description: t('outcomes.skills.hosting.description'),
                icon: Rocket
              },
              {
                title: t('outcomes.skills.practices.title'),
                description: t('outcomes.skills.practices.description'),
                icon: CheckSquare
              },
              {
                title: t('outcomes.skills.planning.title'),
                description: t('outcomes.skills.planning.description'),
                icon: Compass
              }
            ].map((outcome, index) => {
              const IconComponent = outcome.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9 + index * 0.1 }}
                  className="bg-primary-800/30 backdrop-blur-sm rounded-xl p-6 border border-white/10"
                >
                  <div className="mb-4">
                    <IconComponent className="w-8 h-8 text-gray-300" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-3">{outcome.title}</h3>
                  <p className="text-gray-300">{outcome.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Prerequisites Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-primary-800/30 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h2 className="text-2xl font-bold text-white mb-6">{t('prerequisites.title')}</h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-white">{t('prerequisites.requirements.no_experience.title')}</h3>
                      <p className="text-gray-300">{t('prerequisites.requirements.no_experience.description')}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-white">{t('prerequisites.requirements.computer.title')}</h3>
                      <p className="text-gray-300">{t('prerequisites.requirements.computer.description')}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-white">{t('prerequisites.requirements.motivation.title')}</h3>
                      <p className="text-gray-300">{t('prerequisites.requirements.motivation.description')}</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h2 className="text-2xl font-bold text-white mb-6">{t('prerequisites.target_title')}</h2>
                <div className="space-y-3">
                  {t.raw('prerequisites.target_audience').map((target: string, index: number) => (
                    <div key={index} className="flex items-center gap-3">
                      <Users className="w-5 h-5 text-accent-purple" />
                      <span className="text-gray-300">{target}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Next Steps and Enrollment CTA */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-gradient-to-r from-accent-purple to-accent-purple-light rounded-2xl p-12 text-white"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                {t('enrollment.title')}
              </h2>
              <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
                {t('enrollment.subtitle')}
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-8">
                <div className="text-center">
                  <div className="text-3xl font-bold">6h</div>
                  <div className="text-white/80">{t('enrollment.stats.duration')}</div>
                </div>
                <div className="hidden sm:block w-px h-12 bg-white/30"></div>
                <div className="text-center">
                  <div className="text-3xl font-bold">100%</div>
                  <div className="text-white/80">{t('enrollment.stats.practical')}</div>
                </div>
                <div className="hidden sm:block w-px h-12 bg-white/30"></div>
                <div className="text-center">
                  <div className="text-3xl font-bold">30j</div>
                  <div className="text-white/80">{t('enrollment.stats.guarantee')}</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
                <Link href="/formation">
                  <Button variant="outline" size="lg" className="border-white/50 text-white hover:bg-white/20 hover:border-white/70">
                    <ArrowLeft className="w-5 h-5 mr-2" />
                    {t('enrollment.cta_secondary')}
                  </Button>
                </Link>
              </div>

              {/* Payment Flexibility Component */}
              <PaymentFlexibility
                formationName="kickstart"
                price={196} // 30% discount: 280 * 0.7 = 196
                originalPrice={280}
                isPromotional={true}
                theme="dark"
                stripeUrl="https://buy.stripe.com/dRmcN6bZl7Gg21X3PceEo04"
                className="max-w-2xl mx-auto"
              />
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}