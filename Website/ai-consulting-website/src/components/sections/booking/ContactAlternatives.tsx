'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Mail, Phone, MessageCircle, Clock, MapPin, Calendar } from 'lucide-react';

const ContactAlternatives: React.FC = () => {
  const contactMethods = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email direct",
      value: "contact@contextedev.com",
      description: "Réponse sous 4 heures en jours ouvrables",
      action: "mailto:contact@contextedev.com",
      color: "accent-purple"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Téléphone",
      value: "+33 1 23 45 67 89",
      description: "Lundi-Vendredi, 9h-18h (heure de Paris)",
      action: "tel:+33123456789",
      color: "accent-purple"
    },
    {
      icon: <MessageCircle className="w-6 h-6" />,
      title: "Chat en direct",
      value: "Support instantané",
      description: "Disponible pendant les heures ouvrables",
      action: "#",
      color: "success-green"
    }
  ];

  const responseInfo = [
    {
      icon: <Clock className="w-5 h-5" />,
      title: "Temps de réponse",
      value: "4 heures maximum",
      description: "En jours ouvrables"
    },
    {
      icon: <Calendar className="w-5 h-5" />,
      title: "Disponibilité",
      value: "Lundi - Vendredi",
      description: "9h00 - 18h00 (Paris)"
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      title: "Fuseau horaire",
      value: "Europe/Paris",
      description: "UTC+1/UTC+2"
    }
  ];

  return (
    <motion.div
      className="space-y-8"
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
    >
      {/* Contact Methods */}
      <div className="bg-primary-800/50 backdrop-blur-sm border border-primary-700 rounded-2xl p-8">
        <h3 className="text-h3 font-bold text-text-primary mb-6">
          Autres moyens de nous contacter
        </h3>

        <div className="space-y-4">
          {contactMethods.map((method, index) => (
            <motion.a
              key={index}
              href={method.action}
              className="group block p-4 bg-primary-900/50 border border-primary-700 rounded-xl hover:border-accent-blue/50 transition-all duration-300"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <div className="flex items-start gap-4">
                <div className={`w-12 h-12 bg-gradient-to-r from-${method.color}/20 to-${method.color}/30 rounded-lg flex items-center justify-center group-hover:from-${method.color}/30 group-hover:to-${method.color}/40 transition-all duration-300`}>
                  <div className={`text-${method.color} group-hover:text-${method.color}-light transition-colors duration-300`}>
                    {method.icon}
                  </div>
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-text-primary group-hover:text-white transition-colors duration-300 mb-1">
                    {method.title}
                  </h4>
                  <p className={`text-${method.color} font-medium text-sm mb-1`}>
                    {method.value}
                  </p>
                  <p className="text-text-secondary text-xs group-hover:text-text-primary/90 transition-colors duration-300">
                    {method.description}
                  </p>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>

      {/* Response Info */}
      <div className="bg-gradient-to-r from-accent-purple/10 to-accent-gray/10 border border-accent-purple/20 rounded-2xl p-8">
        <h3 className="text-h3 font-bold text-text-primary mb-6">
          Informations de contact
        </h3>

        <div className="space-y-4">
          {responseInfo.map((info, index) => (
            <div key={index} className="flex items-center gap-4">
              <div className="w-10 h-10 bg-accent-purple/20 rounded-lg flex items-center justify-center">
                <div className="text-accent-purple">
                  {info.icon}
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-text-primary text-sm">
                  {info.title}
                </h4>
                <p className="text-accent-purple font-medium text-sm">
                  {info.value}
                </p>
                <p className="text-text-muted text-xs">
                  {info.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* FAQ Link */}
      <div className="bg-primary-800/30 border border-accent-purple/20 rounded-xl p-6 text-center">
        <h4 className="font-semibold text-text-primary mb-3">
          Des questions avant de réserver ?
        </h4>
        <p className="text-text-secondary text-sm mb-4">
          Consultez nos questions fréquentes ou contactez-nous directement.
        </p>
        <div className="space-y-3">
          <Link
            href="/faq"
            className="inline-block text-accent-purple hover:text-accent-purple-light transition-colors duration-200 text-sm font-medium"
          >
            Voir les FAQ →
          </Link>
          <br />
          <a
            href="mailto:contact@contextedev.com"
            className="inline-block text-accent-purple hover:text-accent-purple-light transition-colors duration-200 text-sm font-medium"
          >
            Poser une question par email →
          </a>
        </div>
      </div>

      {/* Testimonial */}
      <div className="bg-gradient-to-r from-success-green/10 to-accent-teal/10 border border-success-green/20 rounded-2xl p-6">
        <blockquote className="text-text-secondary italic text-sm leading-relaxed mb-4">
          "L'audit gratuit m'a donné 3 recommandations spécifiques que j'ai pu implémenter 
          immédiatement. En une semaine, j'ai économisé 6 heures de travail répétitif."
        </blockquote>
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-gradient-to-r from-success-green to-accent-teal rounded-full flex items-center justify-center">
            <span className="text-white font-semibold text-xs">AL</span>
          </div>
          <div>
            <div className="text-text-primary font-medium text-sm">Alexandre L.</div>
            <div className="text-text-muted text-xs">Développeur Full-Stack</div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ContactAlternatives;