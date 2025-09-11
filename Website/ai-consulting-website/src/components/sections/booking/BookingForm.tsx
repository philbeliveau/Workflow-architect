'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { Calendar, Send, User, Building, Users, Target, Clock } from 'lucide-react';
import { useTranslations } from 'next-intl';

const BookingForm: React.FC = () => {
  const t = useTranslations('booking.form');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    teamSize: '',
    challenge: '',
    preferredTime: '',
    serviceInterest: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // You would typically send this to your backend API
  };

  const teamSizes = [
    { value: 'solo', label: t('fields.team_size.options.0') },
    { value: '2-3', label: t('fields.team_size.options.1') },
    { value: '4-8', label: t('fields.team_size.options.2') },
    { value: '9-15', label: t('fields.team_size.options.3') },
    { value: '15+', label: t('fields.team_size.options.4') }
  ];

  const challenges = [
    { value: 'velocity', label: t('fields.main_challenge.options.0') },
    { value: 'onboarding', label: t('fields.main_challenge.options.1') },
    { value: 'repetitive', label: t('fields.main_challenge.options.2') },
    { value: 'quality', label: t('fields.main_challenge.options.3') },
    { value: 'scaling', label: t('fields.main_challenge.options.4') },
    { value: 'margins', label: t('fields.main_challenge.options.5') },
    { value: 'other', label: t('fields.main_challenge.options.6') }
  ];

  const timeSlots = [
    { value: 'morning', label: t('fields.preferred_time.options.0') },
    { value: 'afternoon', label: t('fields.preferred_time.options.1') },
    { value: 'flexible', label: t('fields.preferred_time.options.2') }
  ];

  const services = [
    { value: 'audit', label: t('fields.service_interest.options.0') },
    { value: 'implementation', label: t('fields.service_interest.options.1') },
    { value: 'transformation', label: t('fields.service_interest.options.2') },
    { value: 'unsure', label: t('fields.service_interest.options.3') }
  ];

  return (
    <motion.div
      className="bg-primary-800/50 backdrop-blur-sm border border-primary-700 rounded-2xl p-8"
      initial={{ opacity: 0, x: -30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="flex items-center gap-3 mb-8">
        <Calendar className="w-6 h-6 text-accent-blue" />
        <h2 className="text-h3 font-bold text-text-primary">
          {t('title')}
        </h2>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Name and Email */}
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-text-primary mb-2">
              <User className="w-4 h-4 inline mr-2" />
              {t('fields.full_name.label')}
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 bg-primary-900 border border-primary-700 rounded-lg text-text-primary placeholder-text-muted focus:outline-none focus:border-accent-blue transition-colors"
              placeholder={t('fields.full_name.placeholder')}
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-text-primary mb-2">
              {t('fields.email.label')}
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 bg-primary-900 border border-primary-700 rounded-lg text-text-primary placeholder-text-muted focus:outline-none focus:border-accent-blue transition-colors"
              placeholder={t('fields.email.placeholder')}
            />
          </div>
        </div>

        {/* Company */}
        <div>
          <label htmlFor="company" className="block text-sm font-medium text-text-primary mb-2">
            <Building className="w-4 h-4 inline mr-2" />
            {t('fields.company.label')}
          </label>
          <input
            type="text"
            id="company"
            name="company"
            value={formData.company}
            onChange={handleInputChange}
            className="w-full px-4 py-3 bg-primary-900 border border-primary-700 rounded-lg text-text-primary placeholder-text-muted focus:outline-none focus:border-accent-blue transition-colors"
            placeholder={t('fields.company.placeholder')}
          />
        </div>

        {/* Team Size */}
        <div>
          <label htmlFor="teamSize" className="block text-sm font-medium text-text-primary mb-2">
            <Users className="w-4 h-4 inline mr-2" />
            {t('fields.team_size.label')}
          </label>
          <select
            id="teamSize"
            name="teamSize"
            value={formData.teamSize}
            onChange={handleInputChange}
            required
            className="w-full px-4 py-3 bg-primary-900 border border-primary-700 rounded-lg text-text-primary focus:outline-none focus:border-accent-blue transition-colors"
          >
            <option value="">{t('fields.team_size.placeholder')}</option>
            {teamSizes.map((size) => (
              <option key={size.value} value={size.value}>
                {size.label}
              </option>
            ))}
          </select>
        </div>

        {/* Main Challenge */}
        <div>
          <label htmlFor="challenge" className="block text-sm font-medium text-text-primary mb-2">
            <Target className="w-4 h-4 inline mr-2" />
            {t('fields.main_challenge.label')}
          </label>
          <select
            id="challenge"
            name="challenge"
            value={formData.challenge}
            onChange={handleInputChange}
            required
            className="w-full px-4 py-3 bg-primary-900 border border-primary-700 rounded-lg text-text-primary focus:outline-none focus:border-accent-blue transition-colors"
          >
            <option value="">{t('fields.main_challenge.placeholder')}</option>
            {challenges.map((challenge) => (
              <option key={challenge.value} value={challenge.value}>
                {challenge.label}
              </option>
            ))}
          </select>
        </div>

        {/* Service Interest */}
        <div>
          <label htmlFor="serviceInterest" className="block text-sm font-medium text-text-primary mb-2">
            {t('fields.service_interest.label')}
          </label>
          <select
            id="serviceInterest"
            name="serviceInterest"
            value={formData.serviceInterest}
            onChange={handleInputChange}
            className="w-full px-4 py-3 bg-primary-900 border border-primary-700 rounded-lg text-text-primary focus:outline-none focus:border-accent-blue transition-colors"
          >
            <option value="">{t('fields.service_interest.placeholder')}</option>
            {services.map((service) => (
              <option key={service.value} value={service.value}>
                {service.label}
              </option>
            ))}
          </select>
        </div>

        {/* Preferred Time */}
        <div>
          <label htmlFor="preferredTime" className="block text-sm font-medium text-text-primary mb-2">
            <Clock className="w-4 h-4 inline mr-2" />
            {t('fields.preferred_time.label')}
          </label>
          <select
            id="preferredTime"
            name="preferredTime"
            value={formData.preferredTime}
            onChange={handleInputChange}
            className="w-full px-4 py-3 bg-primary-900 border border-primary-700 rounded-lg text-text-primary focus:outline-none focus:border-accent-blue transition-colors"
          >
            <option value="">{t('fields.preferred_time.placeholder')}</option>
            {timeSlots.map((slot) => (
              <option key={slot.value} value={slot.value}>
                {slot.label}
              </option>
            ))}
          </select>
        </div>

        {/* Message */}
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-text-primary mb-2">
            {t('fields.additional_message.label')}
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            rows={4}
            className="w-full px-4 py-3 bg-primary-900 border border-primary-700 rounded-lg text-text-primary placeholder-text-muted focus:outline-none focus:border-accent-blue transition-colors resize-none"
            placeholder={t('fields.additional_message.placeholder')}
          />
        </div>

        {/* Submit Button */}
        <Button 
          type="submit"
          variant="primary" 
          size="lg" 
          className="w-full group text-lg py-4 h-auto"
        >
          <Send className="mr-3 h-5 w-5" />
          {t('button')}
          <Calendar className="ml-3 h-5 w-5 transition-transform group-hover:scale-110" />
        </Button>

        {/* Privacy Note */}
        <p className="text-xs text-text-muted text-center leading-relaxed">
          {t('privacy_notice')}
        </p>
      </form>
    </motion.div>
  );
};

export default BookingForm;