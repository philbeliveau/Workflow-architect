import { getRequestConfig } from 'next-intl/server';

export default getRequestConfig(async ({ locale }) => {
  // Validate locale
  if (!locale || !['fr', 'en'].includes(locale)) {
    locale = 'fr'; // fallback to default
  }
  
  return {
    locale,
    messages: (await import(`../messages/${locale}.json`)).default
  };
});