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
  Trophy
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

export default function FormationArchitectePage() {
  const t = useTranslations('formation_architecte')
  const tCommon = useTranslations('common')
  const [expandedModule, setExpandedModule] = useState<string | null>(null)

  const toggleModule = (moduleId: string) => {
    setExpandedModule(expandedModule === moduleId ? null : moduleId)
  }

  // Generate modules from translation data
  const curriculumModules: Module[] = [
    'module_1', 'module_2', 'module_3', 'module_4', 'module_5', 'module_6'
  ].map(moduleKey => ({
    id: moduleKey,
    title: t(`curriculum.modules.${moduleKey}.title`),
    duration: t(`curriculum.modules.${moduleKey}.duration`),
    description: t(`curriculum.modules.${moduleKey}.description`),
    learningObjectives: t.raw(`curriculum.modules.${moduleKey}.learning_objectives`) || [],
    keyTopics: t.raw(`curriculum.modules.${moduleKey}.key_topics`) || []
  }))

  const targetAudiences: TargetAudience[] = t.raw('target_audience.audiences') || []
  const valuePropositions: ValueProposition[] = t.raw('value_proposition.items') || []
  const professionalOutcomes: ProfessionalOutcome[] = t.raw('professional_outcomes.outcomes') || []
  const enterpriseOptions: EnterpriseOption[] = t.raw('enterprise_options.options') || []
  const roiJustificationBenefits: string[] = t.raw('roi_justification.benefits') || []
  const prerequisitesCandidates: string[] = t.raw('prerequisites.ideal_candidates') || []

  const totalDuration = curriculumModules.reduce((total, module) => {
    const duration = parseInt(module.duration)
    return total + (isNaN(duration) ? 120 : duration) // default to 120min for advanced modules
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
              className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 backdrop-blur-sm rounded-full px-6 py-2 text-yellow-400 border border-yellow-500/30 mb-6"
            >
              <Trophy className="w-4 h-4" />
              <span className="text-sm font-medium">Formation Avancée</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-6xl font-bold text-white mb-6"
            >
              {t('hero.title')}
              <span className="block text-gradient bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                {t('hero.title_highlight')}
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto"
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
                <div className="p-2 bg-yellow-500/20 rounded-lg">
                  <Clock className="w-5 h-5 text-yellow-400" />
                </div>
                <span>{Math.floor(totalDuration / 60)}h {t('hero.duration')}</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <div className="p-2 bg-yellow-500/20 rounded-lg">
                  <Building className="w-5 h-5 text-yellow-400" />
                </div>
                <span>{t('hero.level')}</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <div className="p-2 bg-yellow-500/20 rounded-lg">
                  <Globe className="w-5 h-5 text-yellow-400" />
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
              <a 
                href="https://buy.stripe.com/00wfZiaVhgcM5e91H4eEo05"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-lg font-semibold bg-gradient-to-r from-yellow-500 to-orange-500 text-white hover:from-yellow-600 hover:to-orange-600 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg"
              >
                {t('hero.cta_primary')}
                <Play className="w-5 h-5" />
              </a>
              <Button variant="outline" size="lg" className="border-white/20 text-white hover:bg-white/10">
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
                  <CheckCircle className="w-6 h-6 text-yellow-400 mt-1 flex-shrink-0" />
                  <span className="text-gray-300">{t('overview.benefits.enterprise')}</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-yellow-400 mt-1 flex-shrink-0" />
                  <span className="text-gray-300">{t('overview.benefits.scalability')}</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-yellow-400 mt-1 flex-shrink-0" />
                  <span className="text-gray-300">{t('overview.benefits.leadership')}</span>
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
                <div className="inline-flex items-center gap-2 bg-yellow-500/20 rounded-full px-4 py-2 text-yellow-400 mb-4">
                  <Award className="w-5 h-5" />
                  <span className="font-medium">Excellence Professionnelle</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{t('overview.results.title')}</h3>
                <p className="text-gray-300">{t('overview.results.subtitle')}</p>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-gray-300">
                  <Target className="w-5 h-5 text-yellow-400" />
                  <span>{t('overview.results.items.architecture')}</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <Target className="w-5 h-5 text-yellow-400" />
                  <span>{t('overview.results.items.orchestration')}</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <Target className="w-5 h-5 text-yellow-400" />
                  <span>{t('overview.results.items.enterprise')}</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Target Audience Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-6">
              {t('target_audience.title')}
            </h2>
            <p className="text-xl text-gray-300">
              {t('target_audience.subtitle')}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {targetAudiences.map((audience, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + index * 0.1 }}
                className="bg-primary-800/30 backdrop-blur-sm rounded-xl p-6 border border-white/10 text-center"
              >
                <div className="text-4xl mb-4">{audience.icon}</div>
                <h3 className="text-lg font-semibold text-white mb-3">{audience.title}</h3>
                <p className="text-gray-300 text-sm">{audience.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Value Proposition Section */}
      <section className="py-16 bg-white/5 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-6">
              {t('value_proposition.title')}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {valuePropositions.map((proposition, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 + index * 0.1 }}
                className="bg-primary-800/30 backdrop-blur-sm rounded-xl p-6 border border-white/10 text-center"
              >
                <div className="text-4xl mb-4">{proposition.icon}</div>
                <h3 className="text-lg font-semibold text-white mb-3">{proposition.title}</h3>
                <p className="text-gray-300 text-sm">{proposition.description}</p>
              </motion.div>
            ))}
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

          <div className="space-y-4">
            {curriculumModules.map((module, index) => (
              <motion.div
                key={module.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.1 + index * 0.1 }}
                className="bg-primary-800/30 backdrop-blur-sm rounded-xl border border-white/10 overflow-hidden"
              >
                <button
                  onClick={() => toggleModule(module.id)}
                  className="w-full p-6 text-left hover:bg-white/5 transition-colors"
                  aria-expanded={expandedModule === module.id}
                  aria-controls={`module-content-${module.id}`}
                  aria-label={`${expandedModule === module.id ? tCommon('close') : tCommon('open')} ${t('curriculum.module')} ${index + 1} - ${module.title}`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 flex-1">
                      <div className="flex items-center justify-center w-12 h-12 bg-yellow-500/20 rounded-xl">
                        <span className="text-lg font-bold text-yellow-400">{index + 1}</span>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-white mb-1" id={`module-header-${module.id}`}>
                          Module {index + 1} - {module.title}
                        </h3>
                        <div className="flex items-center gap-4 text-sm">
                          <span className="text-yellow-400 font-medium">{module.duration}</span>
                          <span className="text-gray-400">{module.description}</span>
                        </div>
                      </div>
                    </div>
                    {expandedModule === module.id ? (
                      <ChevronUp className="w-5 h-5 text-gray-400" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-gray-400" />
                    )}
                  </div>
                </button>

                {expandedModule === module.id && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="px-6 pb-6"
                    id={`module-content-${module.id}`}
                    role="region"
                    aria-labelledby={`module-header-${module.id}`}
                  >
                    <div className="border-t border-white/10 pt-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="text-sm font-semibold text-yellow-400 mb-3">
                            {t('curriculum.learning_objectives')}
                          </h4>
                          <ul className="space-y-2">
                            {module.learningObjectives.map((objective, idx) => (
                              <li key={idx} className="flex items-start gap-2 text-gray-300">
                                <CheckCircle className="w-4 h-4 text-yellow-400 mt-1 flex-shrink-0" />
                                <span className="text-sm">{objective}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="text-sm font-semibold text-yellow-400 mb-3">
                            {t('curriculum.key_topics')}
                          </h4>
                          <ul className="space-y-2">
                            {module.keyTopics.map((topic, idx) => (
                              <li key={idx} className="flex items-start gap-2 text-gray-300">
                                <div className="w-1.5 h-1.5 bg-yellow-400 rounded-full mt-2 flex-shrink-0" />
                                <span className="text-sm">{topic}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
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
              {t('professional_outcomes.title')}
            </h2>
            <p className="text-xl text-gray-300">
              {t('professional_outcomes.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {professionalOutcomes.map((outcome, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 + index * 0.1 }}
                className="bg-primary-800/30 backdrop-blur-sm rounded-xl p-6 border border-white/10"
              >
                <div className="text-3xl mb-4">{outcome.icon}</div>
                <h3 className="text-lg font-semibold text-white mb-3">{outcome.title}</h3>
                <p className="text-gray-300">{outcome.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ROI Justification Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-primary-800/30 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-white mb-6">
                {t('roi_justification.title')}
              </h2>
              <p className="text-xl text-gray-300">
                {t('roi_justification.subtitle')}
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {roiJustificationBenefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <TrendingUp className="w-6 h-6 text-yellow-400 mt-1 flex-shrink-0" />
                  <span className="text-gray-300">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Prerequisites Section */}
      <section className="py-16 bg-white/5 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-primary-800/30 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h2 className="text-2xl font-bold text-white mb-6">{t('prerequisites.title')}</h2>
                <p className="text-gray-300 mb-6">{t('prerequisites.subtitle')}</p>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-yellow-400 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-white">{t('prerequisites.requirements.experience.title')}</h3>
                      <p className="text-gray-300">{t('prerequisites.requirements.experience.description')}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-yellow-400 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-white">{t('prerequisites.requirements.environment.title')}</h3>
                      <p className="text-gray-300">{t('prerequisites.requirements.environment.description')}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-yellow-400 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-white">{t('prerequisites.requirements.commitment.title')}</h3>
                      <p className="text-gray-300">{t('prerequisites.requirements.commitment.description')}</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h2 className="text-2xl font-bold text-white mb-6">Candidats idéaux</h2>
                <div className="space-y-3">
                  {prerequisitesCandidates.map((candidate: string, index: number) => (
                    <div key={index} className="flex items-center gap-3">
                      <Users className="w-5 h-5 text-yellow-400" />
                      <span className="text-gray-300">{candidate}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enterprise Options Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-6">
              {t('enterprise_options.title')}
            </h2>
            <p className="text-xl text-gray-300">
              {t('enterprise_options.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {enterpriseOptions.map((option, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.3 + index * 0.1 }}
                className="bg-primary-800/30 backdrop-blur-sm rounded-xl p-6 border border-white/10"
              >
                <h3 className="text-xl font-semibold text-white mb-3">{option.title}</h3>
                <p className="text-gray-300 mb-4">{option.description}</p>
                <ul className="space-y-2">
                  {option.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-gray-300">
                      <CheckCircle className="w-4 h-4 text-yellow-400" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
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
              className="bg-gradient-to-r from-yellow-500 to-orange-500 rounded-2xl p-12 text-white"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                {t('enrollment.title')}
              </h2>
              <p className="text-xl mb-8 text-white/90 max-w-3xl mx-auto">
                {t('enrollment.subtitle')}
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-8">
                <div className="text-center">
                  <div className="text-3xl font-bold">{Math.floor(totalDuration / 60)}h</div>
                  <div className="text-white/80">{t('enrollment.stats.duration')}</div>
                </div>
                <div className="hidden sm:block w-px h-12 bg-white/30"></div>
                <div className="text-center">
                  <div className="text-3xl font-bold">Expert</div>
                  <div className="text-white/80">{t('enrollment.stats.enterprise')}</div>
                </div>
                <div className="hidden sm:block w-px h-12 bg-white/30"></div>
                <div className="text-center">
                  <div className="text-3xl font-bold">24/7</div>
                  <div className="text-white/80">{t('enrollment.stats.support')}</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
                <a 
                  href="https://buy.stripe.com/00wfZiaVhgcM5e91H4eEo05"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 text-lg font-semibold bg-white text-orange-600 hover:bg-gray-100 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg"
                >
                  {t('enrollment.cta_primary')}
                  <Play className="w-5 h-5" />
                </a>
                <Link href="/formation">
                  <Button variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10">
                    <ArrowLeft className="w-5 h-5 mr-2" />
                    {t('enrollment.cta_secondary')}
                  </Button>
                </Link>
                <Button variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10">
                  {t('enrollment.cta_enterprise')}
                  <Building className="w-5 h-5 ml-2" />
                </Button>
              </div>

              {/* Payment Flexibility Component */}
              <PaymentFlexibility
                formationName="architecte"
                price={2240} // 30% discount: 3200 * 0.7 = 2240
                originalPrice={3200}
                isPromotional={true}
                className="max-w-2xl mx-auto"
              />
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}