'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { Zap, Mail, MapPin, Phone, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const Footer: React.FC = () => {
  const quickLinks = [
    { name: 'Accueil', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'Cas d\'étude', href: '/case-studies' },
    { name: 'Blog', href: '/blog' },
    { name: 'À propos', href: '/about' }
  ];

  const services = [
    { name: 'Audit de flux', href: '/services#audit' },
    { name: 'Implémentation complète', href: '/services#implementation' },
    { name: 'Transformation agence', href: '/services#transformation' },
    { name: 'Formation équipe', href: '/services#training' }
  ];

  const legal = [
    { name: 'Confidentialité', href: '/privacy' },
    { name: 'Conditions', href: '/terms' },
    { name: 'Cookies', href: '/cookies' },
    { name: 'Mentions légales', href: '/legal' }
  ];

  return (
    <footer className="bg-primary-900 border-t border-primary-700 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="grid grid-cols-12 gap-2 h-full p-4">
          {Array.from({ length: 144 }, (_, i) => (
            <div 
              key={i} 
              className="bg-accent-blue rounded-sm animate-pulse" 
              style={{
                animationDelay: `${i * 0.05}s`,
                animationDuration: '4s'
              }}
            />
          ))}
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Newsletter Section */}
        <div className="py-16 border-b border-primary-700">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-h2 font-bold text-text-primary mb-4">
              Restez à jour avec l'IA
            </h3>
            <p className="text-text-secondary mb-8 leading-relaxed">
              Recevez des guides pratiques, des études de cas et des insights sur l'IA 
              directement dans votre boîte mail. Pas de spam, que du contenu de valeur.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto">
              <div className="flex-1 w-full">
                <input
                  type="email"
                  placeholder="votre@email.com"
                  className="w-full px-4 py-3 bg-primary-800 border border-primary-700 rounded-lg text-text-primary placeholder-text-muted focus:outline-none focus:border-accent-blue transition-colors"
                />
              </div>
              <Button variant="primary" size="md" className="whitespace-nowrap">
                S'abonner
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid md:grid-cols-4 gap-8 lg:gap-12">
            {/* Company Info */}
            <div className="md:col-span-1">
              {/* Logo */}
              <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 bg-gradient-to-r from-accent-blue to-accent-purple rounded-lg flex items-center justify-center">
                  <Zap className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold text-text-primary">
                  AI<span className="text-accent-blue">Dev</span>
                </span>
              </div>

              <p className="text-text-secondary mb-6 leading-relaxed">
                Nous transformons les petites équipes de développement en machines 
                de productivité alimentées par l'IA avec du consulting fait-avec-vous.
              </p>

              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-text-secondary">
                  <Mail className="w-4 h-4 text-accent-blue" />
                  <span className="text-sm">contact@aidev-consulting.fr</span>
                </div>
                <div className="flex items-center gap-3 text-text-secondary">
                  <Phone className="w-4 h-4 text-accent-blue" />
                  <span className="text-sm">+33 1 23 45 67 89</span>
                </div>
                <div className="flex items-center gap-3 text-text-secondary">
                  <MapPin className="w-4 h-4 text-accent-blue" />
                  <span className="text-sm">Paris, France</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold text-text-primary mb-6">
                Navigation
              </h4>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-text-secondary hover:text-accent-blue transition-colors duration-200"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-lg font-semibold text-text-primary mb-6">
                Services
              </h4>
              <ul className="space-y-3">
                {services.map((service) => (
                  <li key={service.name}>
                    <a
                      href={service.href}
                      className="text-text-secondary hover:text-accent-blue transition-colors duration-200"
                    >
                      {service.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h4 className="text-lg font-semibold text-text-primary mb-6">
                Légal
              </h4>
              <ul className="space-y-3">
                {legal.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      className="text-text-secondary hover:text-accent-blue transition-colors duration-200"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-primary-700">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-text-muted text-sm">
              © 2025 AI Dev Consulting. Tous droits réservés.
            </p>
            
            <div className="flex items-center gap-6 text-sm text-text-muted">
              <span>🇫🇷 Français</span>
              <span className="w-px h-4 bg-primary-700"></span>
              <Link href="/en" className="hover:text-text-secondary transition-colors">
                🇺🇸 English
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;