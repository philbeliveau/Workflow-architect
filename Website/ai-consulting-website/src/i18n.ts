import {notFound} from 'next/navigation';
import {getRequestConfig} from 'next-intl/server';

const locales = ['fr', 'en'];

export default getRequestConfig(async ({locale}) => {
  // Validate that the incoming locale is valid
  if (!locales.includes(locale as string)) notFound();

  return {
    locale: locale as string,
    messages: (await import(`../messages/${locale}.json`)).default
  };
});

export {locales};