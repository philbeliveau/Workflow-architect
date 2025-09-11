'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { Zap, Mail, MapPin, Phone, ArrowRight } from 'lucide-react';
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
        {/* Newsletter Section */}
        <div className="py-16 border-b border-text-muted">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-h2 font-bold text-text-light mb-4">
              {t('newsletter.title')}
            </h3>
            <p className="text-text-secondary mb-8 leading-relaxed">
              {t('newsletter.description')}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto">
              <div className="flex-1 w-full">
                <input
                  type="email"
                  placeholder={t('newsletter.placeholder')}
                  className="w-full px-4 py-3 bg-background-dark border border-text-muted rounded-lg text-text-light placeholder-text-muted focus:outline-none focus:border-accent-red transition-colors"
                />
              </div>
              <Button variant="primary" size="md" className="whitespace-nowrap">
                {t('newsletter.button')}
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