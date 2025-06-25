import {getRequestConfig} from 'next-intl/server';
import frMessages from '../../messages/fr.json';
import enMessages from '../../messages/en.json';

// Can be imported from a shared config
const locales = ['fr', 'en'];

const messages = {
  fr: frMessages,
  en: enMessages
};

export default getRequestConfig(async ({locale}) => {
  // Use fallback to default locale instead of notFound()
  const validLocale = locales.includes(locale as 'fr' | 'en') ? locale as 'fr' | 'en' : 'fr';

  return {
    locale: validLocale,
    messages: messages[validLocale]
  };
});