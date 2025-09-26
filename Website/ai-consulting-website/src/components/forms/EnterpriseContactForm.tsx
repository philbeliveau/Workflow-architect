'use client'

import React from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useTranslations, useLocale } from 'next-intl'
import { motion } from 'framer-motion'
import { Building, Mail, Phone, Send } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { getEnterpriseContactSchema, type EnterpriseContact } from '@/lib/schemas'

interface EnterpriseContactFormProps {
  onSubmit: (data: EnterpriseContact) => Promise<void>
  isLoading?: boolean
}

export function EnterpriseContactForm({ onSubmit, isLoading = false }: EnterpriseContactFormProps) {
  const t = useTranslations('forms.enterprise_contact')
  const locale = useLocale() as 'fr' | 'en'
  
  const schema = getEnterpriseContactSchema(locale)
  
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset
  } = useForm<EnterpriseContact>({
    resolver: zodResolver(schema),
    mode: 'onBlur'
  })

  const handleFormSubmit = async (data: EnterpriseContact) => {
    try {
      await onSubmit(data)
      reset()
    } catch (error) {
      console.error('Form submission error:', error)
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-primary-800/30 backdrop-blur-sm rounded-2xl p-8 border border-white/10"
    >
      <div className="text-center mb-8">
        <div className="inline-flex items-center gap-2 bg-yellow-500/20 rounded-full px-4 py-2 text-yellow-400 mb-4">
          <Building className="w-5 h-5" />
          <span className="font-medium">{t('badge')}</span>
        </div>
        <h3 className="text-2xl font-bold text-white mb-2">{t('title')}</h3>
        <p className="text-gray-300">{t('subtitle')}</p>
      </div>

      <form onSubmit={handleSubmit(handleFormSubmit)} className="space-y-6">
        {/* Personal Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-white mb-2">
              {t('fields.name.label')}
            </label>
            <input
              type="text"
              {...register('name')}
              placeholder={t('fields.name.placeholder')}
              className="w-full px-4 py-3 bg-primary-900/50 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:border-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-400/20"
            />
            {errors.name && (
              <p className="mt-1 text-sm text-red-400">{errors.name.message}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-white mb-2">
              {t('fields.email.label')}
            </label>
            <div className="relative">
              <input
                type="email"
                {...register('email')}
                placeholder={t('fields.email.placeholder')}
                className="w-full px-4 py-3 pl-10 bg-primary-900/50 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:border-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-400/20"
              />
              <Mail className="absolute left-3 top-3.5 w-4 h-4 text-gray-400" />
            </div>
            {errors.email && (
              <p className="mt-1 text-sm text-red-400">{errors.email.message}</p>
            )}
          </div>
        </div>

        {/* Company Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-white mb-2">
              {t('fields.company.label')}
            </label>
            <input
              type="text"
              {...register('company')}
              placeholder={t('fields.company.placeholder')}
              className="w-full px-4 py-3 bg-primary-900/50 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:border-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-400/20"
            />
            {errors.company && (
              <p className="mt-1 text-sm text-red-400">{errors.company.message}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-white mb-2">
              {t('fields.position.label')}
            </label>
            <input
              type="text"
              {...register('position')}
              placeholder={t('fields.position.placeholder')}
              className="w-full px-4 py-3 bg-primary-900/50 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:border-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-400/20"
            />
            {errors.position && (
              <p className="mt-1 text-sm text-red-400">{errors.position.message}</p>
            )}
          </div>
        </div>

        {/* Phone */}
        <div>
          <label className="block text-sm font-medium text-white mb-2">
            {t('fields.phone.label')}
          </label>
          <div className="relative">
            <input
              type="tel"
              {...register('phone')}
              placeholder={t('fields.phone.placeholder')}
              className="w-full px-4 py-3 pl-10 bg-primary-900/50 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:border-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-400/20"
            />
            <Phone className="absolute left-3 top-3.5 w-4 h-4 text-gray-400" />
          </div>
          {errors.phone && (
            <p className="mt-1 text-sm text-red-400">{errors.phone.message}</p>
          )}
        </div>

        {/* Company Size and Industry */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-white mb-2">
              {t('fields.company_size.label')}
            </label>
            <select
              {...register('companySize')}
              className="w-full px-4 py-3 bg-primary-900/50 border border-white/20 rounded-lg text-white focus:border-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-400/20"
            >
              <option value="">{t('fields.company_size.placeholder')}</option>
              <option value="5-20">{t('fields.company_size.options.small')}</option>
              <option value="21-50">{t('fields.company_size.options.medium')}</option>
              <option value="51-200">{t('fields.company_size.options.large')}</option>
              <option value="200+">{t('fields.company_size.options.enterprise')}</option>
            </select>
            {errors.companySize && (
              <p className="mt-1 text-sm text-red-400">{errors.companySize.message}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-white mb-2">
              {t('fields.industry.label')}
            </label>
            <input
              type="text"
              {...register('industry')}
              placeholder={t('fields.industry.placeholder')}
              className="w-full px-4 py-3 bg-primary-900/50 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:border-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-400/20"
            />
            {errors.industry && (
              <p className="mt-1 text-sm text-red-400">{errors.industry.message}</p>
            )}
          </div>
        </div>

        {/* Current Challenges */}
        <div>
          <label className="block text-sm font-medium text-white mb-2">
            {t('fields.current_challenges.label')}
          </label>
          <textarea
            {...register('currentChallenges')}
            placeholder={t('fields.current_challenges.placeholder')}
            rows={4}
            className="w-full px-4 py-3 bg-primary-900/50 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:border-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-400/20 resize-none"
          />
          {errors.currentChallenges && (
            <p className="mt-1 text-sm text-red-400">{errors.currentChallenges.message}</p>
          )}
        </div>

        {/* Project Details */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <label className="block text-sm font-medium text-white mb-2">
              {t('fields.project_scope.label')}
            </label>
            <select
              {...register('projectScope')}
              className="w-full px-4 py-3 bg-primary-900/50 border border-white/20 rounded-lg text-white focus:border-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-400/20"
            >
              <option value="">{t('fields.project_scope.placeholder')}</option>
              <option value="pilot">{t('fields.project_scope.options.pilot')}</option>
              <option value="department">{t('fields.project_scope.options.department')}</option>
              <option value="organization">{t('fields.project_scope.options.organization')}</option>
            </select>
            {errors.projectScope && (
              <p className="mt-1 text-sm text-red-400">{errors.projectScope.message}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-white mb-2">
              {t('fields.budget.label')}
            </label>
            <select
              {...register('budget')}
              className="w-full px-4 py-3 bg-primary-900/50 border border-white/20 rounded-lg text-white focus:border-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-400/20"
            >
              <option value="">{t('fields.budget.placeholder')}</option>
              <option value="10k-25k">{t('fields.budget.options.tier1')}</option>
              <option value="25k-50k">{t('fields.budget.options.tier2')}</option>
              <option value="50k-100k">{t('fields.budget.options.tier3')}</option>
              <option value="100k+">{t('fields.budget.options.tier4')}</option>
            </select>
            {errors.budget && (
              <p className="mt-1 text-sm text-red-400">{errors.budget.message}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-white mb-2">
              {t('fields.timeline.label')}
            </label>
            <select
              {...register('timeline')}
              className="w-full px-4 py-3 bg-primary-900/50 border border-white/20 rounded-lg text-white focus:border-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-400/20"
            >
              <option value="">{t('fields.timeline.placeholder')}</option>
              <option value="immediate">{t('fields.timeline.options.immediate')}</option>
              <option value="1-month">{t('fields.timeline.options.month1')}</option>
              <option value="3-months">{t('fields.timeline.options.month3')}</option>
              <option value="6-months">{t('fields.timeline.options.month6')}</option>
            </select>
            {errors.timeline && (
              <p className="mt-1 text-sm text-red-400">{errors.timeline.message}</p>
            )}
          </div>
        </div>

        {/* Preferred Contact Method */}
        <div>
          <label className="block text-sm font-medium text-white mb-2">
            {t('fields.preferred_contact.label')}
          </label>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <label className="flex items-center space-x-3 cursor-pointer">
              <input
                type="radio"
                {...register('preferredContact')}
                value="email"
                className="w-4 h-4 text-yellow-400 border-white/20 focus:ring-yellow-400/20"
              />
              <span className="text-white">{t('fields.preferred_contact.options.email')}</span>
            </label>
            <label className="flex items-center space-x-3 cursor-pointer">
              <input
                type="radio"
                {...register('preferredContact')}
                value="phone"
                className="w-4 h-4 text-yellow-400 border-white/20 focus:ring-yellow-400/20"
              />
              <span className="text-white">{t('fields.preferred_contact.options.phone')}</span>
            </label>
            <label className="flex items-center space-x-3 cursor-pointer">
              <input
                type="radio"
                {...register('preferredContact')}
                value="video-call"
                className="w-4 h-4 text-yellow-400 border-white/20 focus:ring-yellow-400/20"
              />
              <span className="text-white">{t('fields.preferred_contact.options.video')}</span>
            </label>
          </div>
          {errors.preferredContact && (
            <p className="mt-1 text-sm text-red-400">{errors.preferredContact.message}</p>
          )}
        </div>

        {/* Additional Information */}
        <div>
          <label className="block text-sm font-medium text-white mb-2">
            {t('fields.additional_info.label')}
          </label>
          <textarea
            {...register('additionalInfo')}
            placeholder={t('fields.additional_info.placeholder')}
            rows={3}
            className="w-full px-4 py-3 bg-primary-900/50 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:border-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-400/20 resize-none"
          />
          {errors.additionalInfo && (
            <p className="mt-1 text-sm text-red-400">{errors.additionalInfo.message}</p>
          )}
        </div>

        {/* Consent and Newsletter */}
        <div className="space-y-4">
          <label className="flex items-start space-x-3 cursor-pointer">
            <input
              type="checkbox"
              {...register('consent')}
              className="w-4 h-4 mt-1 text-yellow-400 border-white/20 rounded focus:ring-yellow-400/20"
            />
            <span className="text-sm text-gray-300">
              {t('fields.consent.label')}
            </span>
          </label>
          {errors.consent && (
            <p className="text-sm text-red-400">{errors.consent.message}</p>
          )}

          <label className="flex items-start space-x-3 cursor-pointer">
            <input
              type="checkbox"
              {...register('newsletter')}
              className="w-4 h-4 mt-1 text-yellow-400 border-white/20 rounded focus:ring-yellow-400/20"
            />
            <span className="text-sm text-gray-300">
              {t('fields.newsletter.label')}
            </span>
          </label>
        </div>

        {/* Submit Button */}
        <Button
          type="submit"
          size="lg"
          disabled={isSubmitting || isLoading}
          className="w-full bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white font-semibold"
        >
          {isSubmitting || isLoading ? (
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              <span>{t('submitting')}</span>
            </div>
          ) : (
            <>
              <span>{t('submit')}</span>
              <Send className="w-5 h-5 ml-2" />
            </>
          )}
        </Button>
      </form>
    </motion.div>
  )
}