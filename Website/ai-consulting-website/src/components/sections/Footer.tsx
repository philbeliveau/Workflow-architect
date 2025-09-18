'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { Zap, Mail, MapPin, Phone } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { useParams, useRouter } from 'next/navigation';

const Footer: React.FC = () => {
  const t = useTranslations('footer');
  const params = useParams();
  const router = useRouter();
  const currentLocale = params?.locale as string || 'fr';

  return (
    <footer className="bg-background-dark-alt border-t border-text-muted relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="grid grid-cols-12 gap-2 h-full p-4">
          {Array.from({ length: 144 }, (_, i) => (
            <div 
              key={i} 
              className="bg-accent-red rounded-sm animate-pulse" 
              style={{
                animationDelay: `${i * 0.05}s`,
                animationDuration: '4s'
              }}
            />
          ))}
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid md:grid-cols-4 gap-8 lg:gap-12">
            {/* Company Info */}
            <div className="md:col-span-1">
              {/* Logo */}
              <div className="flex items-center mb-6">
                <Image
                  src="/images/logo-newcode.jpeg"
                  alt="NEWCODE Logo"
                  width={80}
                  height={32}
                  className="h-8 w-auto object-contain"
                />
              </div>

              <p className="text-text-secondary mb-6 leading-relaxed">
                {t('company_description')}
              </p>

              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-text-secondary">
                  <Mail className="w-4 h-4 text-accent-red" />
                  <span className="text-sm">philbeliv@gmail.com</span>
                </div>
                <div className="flex items-center gap-3 text-text-secondary">
                  <Phone className="w-4 h-4 text-accent-red" />
                  <span className="text-sm">+1 514-773-4780</span>
                </div>
                <div className="flex items-center gap-3 text-text-secondary">
                  <MapPin className="w-4 h-4 text-accent-red" />
                  <span className="text-sm">Montréal, Québec</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold text-text-light mb-6">
                {t('sections.navigation')}
              </h4>
              <ul className="space-y-3">
                {[0, 1, 2, 3, 4].map((index) => (
                  <li key={index}>
                    <Link
                      href={t(`quick_links.${index}.href`)}
                      className="text-text-secondary hover:text-cta-highlight transition-colors duration-200"
                    >
                      {t(`quick_links.${index}.name`)}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-lg font-semibold text-text-light mb-6">
                {t('sections.services')}
              </h4>
              <ul className="space-y-3">
                {[0, 1, 2, 3].map((index) => (
                  <li key={index}>
                    <Link
                      href={t(`services_links.${index}.href`)}
                      className="text-text-secondary hover:text-cta-highlight transition-colors duration-200"
                    >
                      {t(`services_links.${index}.name`)}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h4 className="text-lg font-semibold text-text-light mb-6">
                {t('sections.legal')}
              </h4>
              <ul className="space-y-3">
                {[0, 1, 2, 3].map((index) => (
                  <li key={index}>
                    <Link
                      href={t(`legal_links.${index}.href`)}
                      className="text-text-secondary hover:text-cta-highlight transition-colors duration-200"
                    >
                      {t(`legal_links.${index}.name`)}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-neutral-support">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-text-muted text-sm">
              {t('copyright')}
            </p>
            
            <div className="flex items-center gap-6 text-sm text-text-muted">
              <span>{t('language.current')}</span>
              <span className="w-px h-4 bg-neutral-support"></span>
              <Link 
                href={currentLocale === 'fr' ? '/en' : '/fr'} 
                className="hover:text-text-secondary transition-colors"
              >
                {t('language.other')}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;