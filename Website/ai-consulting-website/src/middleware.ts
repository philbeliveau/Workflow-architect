import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  // A list of all locales that are supported
  locales: ['fr', 'en'],
 
  // Used when no locale matches
  defaultLocale: 'fr',
  
  // Optional: Configure pathname localization
  localePrefix: 'as-needed'
});

export const config = {
  // Match only internationalized pathnames, exclude static assets
  matcher: [
    // Enable a redirect to a matching locale at the root
    '/',
    
    // Set a cookie to remember the previous locale for
    // all requests that have a locale prefix
    '/(fr|en)/:path*',
    
    // Enable redirects that add missing locales but exclude static assets
    '/((?!api|_next|_vercel|favicon.ico|images|.*\\.(?:jpg|jpeg|png|gif|svg|ico|webp|avif)$).*)'
  ]
};