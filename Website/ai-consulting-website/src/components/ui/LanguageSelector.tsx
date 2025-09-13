'use client';

import React from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { useLocale } from 'next-intl';
import { motion } from 'framer-motion';
import { Globe } from 'lucide-react';

const LanguageSelector: React.FC = () => {
  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale();
  
  const switchLanguage = () => {
    const newLocale = locale === 'en' ? 'fr' : 'en';
    const currentPath = pathname.replace(`/${locale}`, '');
    router.push(`/${newLocale}${currentPath}`);
  };

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={switchLanguage}
      className="flex items-center gap-2 px-3 py-2 rounded-lg bg-background-accent-grey/20 hover:bg-background-accent-grey/30 transition-colors duration-200 border border-text-secondary/20"
      aria-label={locale === 'en' ? 'Switch to French' : 'Passer en anglais'}
    >
      <Globe className="w-4 h-4 text-primary-blue" />
      <span className="text-sm font-medium text-text-primary">
        {locale === 'en' ? 'FR' : 'EN'}
      </span>
    </motion.button>
  );
};

export default LanguageSelector;