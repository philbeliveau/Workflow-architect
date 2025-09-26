# Newcode Website - Technology Stack

## Overview

This document provides a comprehensive overview of the technology stack powering the Newcode AI Consulting Website. The stack is optimized for performance, scalability, French-first internationalization, and modern development practices.

## Technology Selection Summary

| Category | Technology | Version | Purpose | Rationale |
|----------|------------|---------|---------|-----------|
| **Frontend Framework** | Next.js | 15.3.4 | Full-stack React framework | App Router, SSR/SSG, internationalization |
| **UI Library** | React | 19.0.0 | Component library | Latest features, concurrent rendering |
| **Language** | TypeScript | 5.x | Static typing | Type safety, better DX, AI agent compatibility |
| **Styling** | Tailwind CSS | 4.x | Utility-first CSS | Rapid development, consistency, performance |
| **Animations** | Framer Motion | 12.19.1 | Animation library | Smooth interactions, professional UX |
| **Internationalization** | next-intl | 4.3.7 | i18n solution | French-first support, type-safe translations |
| **Authentication** | NextAuth.js | 4.24.11 | Authentication library | Multiple providers, secure sessions |
| **Database** | PostgreSQL | Latest | Relational database | ACID compliance, performance, scalability |
| **ORM** | Prisma | 6.11.1 | Database toolkit | Type safety, migrations, client generation |
| **Payment Processing** | Stripe | External | Payment platform | Secure transactions, Canadian market support |
| **Icons** | Lucide React | 0.523.0 | Icon library | Consistent, customizable icons |
| **Deployment** | Vercel | Platform | Hosting platform | Optimized for Next.js, global CDN |

## Core Technology Decisions

### 1. Next.js 15.3.4 (App Router)

**Why Chosen:**
- **App Router**: Latest routing paradigm with improved performance
- **Server Components**: Reduced JavaScript bundle size
- **Built-in Internationalization**: Native support for French-first approach
- **Performance**: Automatic code splitting, image optimization
- **SEO**: Server-side rendering for marketing pages

**Key Features Used:**
```typescript
// App Router structure
app/
├── [locale]/          # Internationalized routes
├── api/               # API routes
└── layout.tsx         # Shared layouts

// Server and Client Components
'use client';          # Client component directive
// Server components by default
```

**Configuration:**
```typescript
// next.config.ts
const nextConfig = {
  experimental: {
    serverComponentsExternalPackages: ['prisma']
  },
  images: {
    domains: ['example.com']
  }
};
```

### 2. React 19.0.0

**Why Chosen:**
- **Concurrent Features**: Improved performance for complex UIs
- **Server Components**: Better integration with Next.js
- **Automatic Batching**: Optimized state updates
- **Suspense**: Better loading states

**Usage Patterns:**
```typescript
// Concurrent features
import { Suspense } from 'react';
import { useTransition } from 'react';

function FormationPage() {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <FormationContent />
    </Suspense>
  );
}
```

### 3. TypeScript 5.x

**Why Chosen:**
- **Type Safety**: Catch errors at compile time
- **Developer Experience**: Better IDE support
- **AI Agent Compatibility**: Clearer code contracts
- **Prisma Integration**: Generated types from database schema

**Type Definitions:**
```typescript
// Custom types for business logic
interface FormationDetails {
  id: string;
  title: string;
  price: number;
  currency: 'CAD' | 'USD';
  modules: FormationModule[];
}

// Prisma generated types
import type { User, Course, Material } from '@prisma/client';
```

### 4. Tailwind CSS 4.x

**Why Chosen:**
- **Utility-First**: Rapid development
- **Consistency**: Design system enforcement
- **Performance**: CSS purging, minimal bundle size
- **Responsive**: Mobile-first design approach
- **Dark Mode**: Built-in support for future expansion

**Configuration:**
```typescript
// tailwind.config.ts
export default {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'newcode-blue': '#2563eb',
        'newcode-dark': '#1e293b',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
```

### 5. Framer Motion 12.19.1

**Why Chosen:**
- **Professional Animations**: Smooth, performant animations
- **React Integration**: Declarative animation API
- **Gesture Support**: Touch and mouse interactions
- **Performance**: Hardware acceleration, optimized rendering

**Usage Examples:**
```typescript
import { motion } from 'framer-motion';

export function HeroBanner() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="hero-banner"
    >
      <h1>Formation Kickstart</h1>
    </motion.div>
  );
}
```

### 6. next-intl 4.3.7

**Why Chosen:**
- **French-First**: Perfect for Quebec market targeting
- **Type Safety**: TypeScript integration for translations
- **Performance**: Static extraction, small bundles
- **Next.js Integration**: Works seamlessly with App Router

**Implementation:**
```typescript
// middleware.ts
import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  locales: ['fr', 'en'],
  defaultLocale: 'fr',
  localePrefix: 'as-needed'
});

// Usage in components
import { useTranslations } from 'next-intl';

export function PricingSection() {
  const t = useTranslations('formations');
  
  return (
    <div>
      <h2>{t('kickstart.title')}</h2>
      <p>{t('kickstart.price')}</p>
    </div>
  );
}
```

## Database Technology Stack

### 1. PostgreSQL

**Why Chosen:**
- **ACID Compliance**: Data integrity for payments and user accounts
- **Performance**: Excellent for complex queries and reporting
- **JSON Support**: Flexible data structures when needed
- **Scalability**: Handles growth from startup to enterprise
- **Prisma Integration**: Excellent ORM support

**Key Features Used:**
- User authentication and authorization
- Course and material management
- Progress tracking
- Q&A system
- Notes and user-generated content

### 2. Prisma 6.11.1

**Why Chosen:**
- **Type Safety**: Generated TypeScript types
- **Database Migrations**: Version-controlled schema changes
- **Query Builder**: Intuitive, SQL-like syntax
- **Performance**: Optimized queries, connection pooling
- **Development Experience**: Prisma Studio for database inspection

**Schema Design:**
```prisma
model User {
  id            String    @id @default(cuid())
  email         String    @unique
  role          UserRole  @default(USER)
  subscription  SubscriptionStatus @default(FREE)
  courses       CourseProgress[]
  notes         Note[]
  questions     Question[]
}

model Course {
  id          String   @id @default(cuid())
  title       String
  price       Float?
  isPublished Boolean  @default(false)
  materials   Material[]
  progress    CourseProgress[]
}
```

## Authentication & Security Stack

### 1. NextAuth.js 4.24.11

**Why Chosen:**
- **Multiple Providers**: Email, OAuth, credentials
- **Security**: Built-in CSRF protection, secure sessions
- **Next.js Integration**: Seamless with App Router
- **TypeScript Support**: Type-safe authentication

**Configuration:**
```typescript
// app/api/auth/[...nextauth]/route.ts
export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { type: "email" },
        password: { type: "password" }
      },
      authorize: async (credentials) => {
        // Custom authentication logic
      }
    })
  ],
  session: { strategy: "jwt" },
  pages: {
    signIn: '/auth/signin',
    signUp: '/auth/signup'
  }
};
```

### 2. Security Measures

**Implementation:**
- **Password Hashing**: bcryptjs for secure password storage
- **JWT Tokens**: Secure session management
- **HTTPS Enforcement**: All production traffic encrypted
- **Input Validation**: Zod schemas for API validation
- **SQL Injection Protection**: Prisma query builder
- **XSS Protection**: React's built-in escaping

## Payment Integration

### 1. Stripe Integration

**Why Chosen:**
- **Canadian Market**: Full support for CAD transactions
- **Security**: PCI DSS compliance handled by Stripe
- **Integration**: Simple redirect-based flow
- **Features**: Subscriptions, one-time payments, installments

**Implementation:**
```typescript
// Payment links (external)
const STRIPE_LINKS = {
  kickstart: 'https://buy.stripe.com/dRmcN6bZl7Gg21X3PceEo04',
  architecte: 'https://buy.stripe.com/00wfZiaVhgcM5e91H4eEo05'
};

// Usage in components
<a 
  href={STRIPE_LINKS.kickstart}
  className="payment-button"
>
  S'inscrire - 280€
</a>
```

## Development Tools & Workflow

### 1. Development Environment

```json
// package.json scripts
{
  "scripts": {
    "dev": "next dev",
    "build": "prisma generate && next build",
    "start": "next start",
    "lint": "next lint",
    "postinstall": "prisma generate",
    "validate-translations": "node .claude/validate-translations.js",
    "pre-commit": "npm run validate-translations && npm run lint"
  }
}
```

### 2. Code Quality Tools

| Tool | Purpose | Configuration |
|------|---------|---------------|
| **ESLint** | Code linting | `eslint.config.mjs` |
| **TypeScript** | Type checking | `tsconfig.json` |
| **Prettier** | Code formatting | `.prettierrc` |
| **Translation Validation** | i18n quality | Custom script |

### 3. AI Agent Integration

**Optimized for AI Development:**
- **Clear Type Definitions**: Better code generation
- **Consistent Patterns**: Predictable code structure
- **Documentation**: Comprehensive README and docs
- **Examples**: Clear patterns for AI to follow

## Deployment Architecture

### 1. Vercel Platform

**Why Chosen:**
- **Next.js Optimization**: Built for Next.js applications
- **Global CDN**: Fast content delivery worldwide
- **Automatic Scaling**: Handles traffic spikes
- **French Market**: Good performance in Quebec/Canada
- **Zero Configuration**: Deploy from Git

**Configuration:**
```json
// vercel.json
{
  "buildCommand": "npm run build",
  "outputDirectory": ".next",
  "installCommand": "npm install",
  "framework": "nextjs"
}
```

### 2. Environment Configuration

```bash
# Production Environment Variables
DATABASE_URL="postgresql://..."
NEXTAUTH_SECRET="..."
NEXTAUTH_URL="https://new-code.ca"
STRIPE_PUBLISHABLE_KEY="pk_live_..."
```

## Performance Optimization

### 1. Frontend Optimization

- **Code Splitting**: Automatic with Next.js App Router
- **Image Optimization**: Next.js Image component
- **Bundle Analysis**: `@next/bundle-analyzer`
- **Caching**: Static generation where possible

### 2. Database Optimization

- **Connection Pooling**: Prisma connection management
- **Query Optimization**: Prisma query analysis
- **Indexing**: Strategic database indexes
- **Caching**: Redis integration for future scaling

## Monitoring & Analytics

### 1. Performance Monitoring

- **Vercel Analytics**: Built-in performance monitoring
- **Core Web Vitals**: Automatic tracking
- **Error Tracking**: Vercel error reporting

### 2. Business Analytics

- **User Engagement**: Custom event tracking
- **Conversion Tracking**: Payment flow analysis
- **Course Progress**: Learning analytics

## Future Technology Considerations

### Potential Additions

| Technology | Purpose | Timeline |
|------------|---------|----------|
| **Redis** | Caching, sessions | Q2 2024 |
| **Elasticsearch** | Advanced search | Q3 2024 |
| **WebRTC** | Live coaching sessions | Q4 2024 |
| **Push Notifications** | Course reminders | Q2 2024 |
| **PWA** | Mobile app experience | Q3 2024 |

### Scaling Considerations

1. **Database Scaling**: Read replicas, sharding strategies
2. **CDN Enhancement**: Advanced caching strategies
3. **Microservices**: Service decomposition for scale
4. **Multi-region**: Deployment across multiple regions

## Technology Decision Rationale

### Why This Stack?

1. **Business Alignment**: Perfect for educational SaaS in Canadian market
2. **Developer Experience**: Modern, productive development
3. **Performance**: Fast, responsive user experience
4. **Scalability**: Grows with business needs
5. **Security**: Enterprise-grade security measures
6. **French-First**: Optimized for Quebec market
7. **AI-Friendly**: Easy for AI agents to understand and extend

### Alternatives Considered

| Alternative | Why Not Chosen |
|-------------|----------------|
| **Vue.js/Nuxt** | React ecosystem better for this use case |
| **Django/Flask** | TypeScript full-stack preferred |
| **WordPress** | Too limiting for custom functionality |
| **Gatsby** | Next.js more flexible for app features |
| **MongoDB** | PostgreSQL better for structured data |

## Conclusion

This technology stack provides a solid foundation for the Newcode AI consulting website, balancing modern development practices with business requirements. The French-first internationalization, robust authentication, and scalable architecture position the platform for success in the Quebec/Canadian market while maintaining the flexibility to expand globally.

The stack is optimized for both human developers and AI agents, ensuring consistent, maintainable code that supports the business mission of transforming professionals into application creators through structured agentic programming education.