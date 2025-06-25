'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { Calendar, Send, User, Building, Users, Target, Clock } from 'lucide-react';

const BookingForm: React.FC = () => {
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
    { value: 'solo', label: 'Développeur solo' },
    { value: '2-3', label: '2-3 développeurs' },
    { value: '4-8', label: '4-8 développeurs' },
    { value: '9-15', label: '9-15 développeurs' },
    { value: '15+', label: '15+ développeurs' }
  ];

  const challenges = [
    { value: 'velocity', label: 'Vélocité de développement incohérente' },
    { value: 'onboarding', label: 'Intégration développeur trop lente' },
    { value: 'repetitive', label: 'Trop de tâches répétitives' },
    { value: 'quality', label: 'Maintenir la qualité à vitesse' },
    { value: 'scaling', label: 'Difficultés d\'évolution équipe' },
    { value: 'margins', label: 'Marges projet en baisse' },
    { value: 'other', label: 'Autre défi' }
  ];

  const timeSlots = [
    { value: 'morning', label: 'Matin (9h-12h)' },
    { value: 'afternoon', label: 'Après-midi (14h-17h)' },
    { value: 'flexible', label: 'Flexible' }
  ];

  const services = [
    { value: 'audit', label: 'Audit & Gains Rapides (2 500€)' },
    { value: 'implementation', label: 'Implémentation Complète (15 000€)' },
    { value: 'transformation', label: 'Transformation Agence (35 000€)' },
    { value: 'unsure', label: 'Pas sûr / Découvrir les options' }
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
          Réserver votre audit gratuit
        </h2>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Name and Email */}
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-text-primary mb-2">
              <User className="w-4 h-4 inline mr-2" />
              Nom complet *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 bg-primary-900 border border-primary-700 rounded-lg text-text-primary placeholder-text-muted focus:outline-none focus:border-accent-blue transition-colors"
              placeholder="Votre nom"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-text-primary mb-2">
              Email *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 bg-primary-900 border border-primary-700 rounded-lg text-text-primary placeholder-text-muted focus:outline-none focus:border-accent-blue transition-colors"
              placeholder="votre@email.com"
            />
          </div>
        </div>

        {/* Company */}
        <div>
          <label htmlFor="company" className="block text-sm font-medium text-text-primary mb-2">
            <Building className="w-4 h-4 inline mr-2" />
            Entreprise / Organisation
          </label>
          <input
            type="text"
            id="company"
            name="company"
            value={formData.company}
            onChange={handleInputChange}
            className="w-full px-4 py-3 bg-primary-900 border border-primary-700 rounded-lg text-text-primary placeholder-text-muted focus:outline-none focus:border-accent-blue transition-colors"
            placeholder="Nom de votre entreprise"
          />
        </div>

        {/* Team Size */}
        <div>
          <label htmlFor="teamSize" className="block text-sm font-medium text-text-primary mb-2">
            <Users className="w-4 h-4 inline mr-2" />
            Taille de l'équipe de développement *
          </label>
          <select
            id="teamSize"
            name="teamSize"
            value={formData.teamSize}
            onChange={handleInputChange}
            required
            className="w-full px-4 py-3 bg-primary-900 border border-primary-700 rounded-lg text-text-primary focus:outline-none focus:border-accent-blue transition-colors"
          >
            <option value="">Sélectionnez la taille</option>
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
            Principal défi actuel *
          </label>
          <select
            id="challenge"
            name="challenge"
            value={formData.challenge}
            onChange={handleInputChange}
            required
            className="w-full px-4 py-3 bg-primary-900 border border-primary-700 rounded-lg text-text-primary focus:outline-none focus:border-accent-blue transition-colors"
          >
            <option value="">Sélectionnez votre défi</option>
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
            Service qui vous intéresse
          </label>
          <select
            id="serviceInterest"
            name="serviceInterest"
            value={formData.serviceInterest}
            onChange={handleInputChange}
            className="w-full px-4 py-3 bg-primary-900 border border-primary-700 rounded-lg text-text-primary focus:outline-none focus:border-accent-blue transition-colors"
          >
            <option value="">Sélectionnez un service</option>
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
            Créneaux préférés
          </label>
          <select
            id="preferredTime"
            name="preferredTime"
            value={formData.preferredTime}
            onChange={handleInputChange}
            className="w-full px-4 py-3 bg-primary-900 border border-primary-700 rounded-lg text-text-primary focus:outline-none focus:border-accent-blue transition-colors"
          >
            <option value="">Sélectionnez un créneau</option>
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
            Message additionnel (optionnel)
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            rows={4}
            className="w-full px-4 py-3 bg-primary-900 border border-primary-700 rounded-lg text-text-primary placeholder-text-muted focus:outline-none focus:border-accent-blue transition-colors resize-none"
            placeholder="Dites-nous en plus sur vos défis ou objectifs spécifiques..."
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
          Réserver mon audit gratuit
          <Calendar className="ml-3 h-5 w-5 transition-transform group-hover:scale-110" />
        </Button>

        {/* Privacy Note */}
        <p className="text-xs text-text-muted text-center leading-relaxed">
          En soumettant ce formulaire, vous acceptez d'être contacté par notre équipe concernant 
          votre audit gratuit. Nous respectons votre vie privée et ne partagerons jamais vos informations.
        </p>
      </form>
    </motion.div>
  );
};

export default BookingForm;