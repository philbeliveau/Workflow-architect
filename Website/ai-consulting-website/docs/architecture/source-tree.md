# Newcode Website - Source Tree Architecture

## Project Overview

This document outlines the source tree structure for the Newcode AI Consulting Website, a bilingual (French-first) Next.js application focused on agentic programming training and consultation services.

## Root Structure

```
ai-consulting-website/
├── README.md                    # Project documentation
├── DEPLOYMENT_GUIDE.md          # Deployment instructions
├── TIMER-SAFEGUARDS.md          # Timer security documentation
├── package.json                 # Dependencies and scripts
├── package-lock.json           # Dependency lock file
├── tsconfig.json               # TypeScript configuration
├── next.config.ts              # Next.js configuration
├── next-env.d.ts               # Next.js TypeScript definitions
├── tailwind.config.ts          # Tailwind CSS configuration
├── postcss.config.mjs          # PostCSS configuration
├── eslint.config.mjs           # ESLint configuration
├── vercel.json                 # Vercel deployment config
├── claude.md                   # Claude Code context
├── complete-setup.sh           # Development setup script
├── railway-setup.sh            # Railway deployment script
└── dev_output.log              # Development logs
```

## Source Directory (`src/`)

### Application Structure (`src/app/`)

```
src/app/
├── [locale]/                   # Internationalized routes
│   ├── layout.tsx             # Locale-specific layout
│   ├── page.tsx               # Home page
│   ├── not-found.tsx          # 404 page
│   ├── about/                 # About page
│   ├── auth/                  # Authentication pages
│   │   ├── signin/            # Sign-in page
│   │   └── signup/            # Sign-up page
│   ├── blog/                  # Blog section
│   │   ├── page.tsx           # Blog listing
│   │   ├── [slug]/            # Dynamic blog posts
│   │   ├── bmad-methodology/  # BMAD methodology post
│   │   ├── claude-alignment-techniques/
│   │   ├── gayed-trading-signals-swarm/
│   │   └── sparc-methodology/
│   ├── book-demo/             # Demo booking page
│   ├── business/              # Business audience page
│   ├── case-studies/          # Case studies page
│   ├── courses/               # Courses overview
│   ├── dashboard/             # User dashboard
│   ├── developers/            # Developer audience page
│   ├── formation-kickstart/   # Kickstart training page
│   ├── formation/             # Training section
│   │   ├── page.tsx           # Formation overview
│   │   └── [section]/         # Dynamic formation sections
│   ├── legal/                 # Legal pages
│   ├── notes/                 # User notes system
│   ├── parcours/              # Learning pathway page
│   ├── privacy/               # Privacy policy
│   ├── questions/             # Q&A system
│   ├── services/              # Services page
│   ├── terms/                 # Terms of service
│   └── cookies/               # Cookie policy
├── api/                       # API routes
│   ├── auth/                  # Authentication API
│   │   ├── [...nextauth]/     # NextAuth.js configuration
│   │   └── signup/            # User registration
│   ├── courses/               # Course management API
│   │   ├── route.ts           # Course CRUD operations
│   │   └── [id]/              # Individual course operations
│   ├── notes/                 # Notes API
│   │   ├── route.ts           # Notes CRUD operations
│   │   └── [id]/              # Individual note operations
│   ├── questions/             # Q&A API
│   └── users/                 # User management API
├── globals.css                # Global styles
├── layout.tsx                 # Root layout
├── page.tsx                   # Root page redirect
├── not-found.tsx              # Global 404 page
├── favicon.ico                # Site favicon
└── claude.md                  # Claude context for app directory
```

### Components (`src/components/`)

```
src/components/
├── auth/                      # Authentication components
│   ├── AuthButton.tsx         # Authentication button
│   └── SessionProvider.tsx    # Session context provider
├── layout/                    # Layout components
│   └── AuthenticatedLayout.tsx # Protected layout wrapper
├── sections/                  # Page section components
│   ├── AboutSection.tsx       # About section
│   ├── BMADMethodologyContent.tsx
│   ├── BMADWorkflowDiagram.tsx
│   ├── CTASection.tsx         # Call-to-action sections
│   ├── FAQSection.tsx         # FAQ component
│   ├── Footer.tsx             # Site footer
│   ├── FormationContentSection.tsx
│   ├── FormationOverview.tsx
│   ├── HeroBanner.tsx         # Hero banner component
│   ├── HeroSectionFlow.tsx    # Flow-specific hero
│   ├── MethodologyShowcase.tsx
│   ├── Navigation.tsx         # Main navigation
│   ├── PricingPackages.tsx    # Pricing display
│   ├── ProblemStatement.tsx   # Problem statement section
│   ├── ResultsShowcase.tsx    # Results showcase
│   ├── ServicesPreview.tsx    # Services preview
│   ├── SolutionOverview.tsx   # Solution overview
│   ├── TargetAudienceInteractive.tsx
│   ├── TeamSection.tsx        # Team showcase
│   ├── TechStackShowcase.tsx  # Technology showcase
│   ├── TestimonialsSection.tsx # Customer testimonials
│   ├── ToolsTrustSection.tsx  # Tools and trust indicators
│   ├── TrackSelection.tsx     # Learning track selection
│   ├── TrainingContent.tsx    # Training content display
│   ├── TransformationProcess.tsx
│   ├── TransformationProcessInteractive.tsx
│   ├── booking/               # Booking-specific components
│   │   ├── BookingForm.tsx
│   │   ├── BookingHero.tsx
│   │   ├── ContactAlternatives.tsx
│   │   └── WhatToExpect.tsx
│   ├── business/              # Business page components
│   │   ├── BusinessBenefits.tsx
│   │   ├── BusinessCTA.tsx
│   │   ├── BusinessCaseStudies.tsx
│   │   ├── BusinessHero.tsx
│   │   ├── BusinessSolutions.tsx
│   │   └── NoCodeExamples.tsx
│   ├── case-studies/          # Case study components
│   │   ├── CaseStudiesHero.tsx
│   │   ├── FeaturedCaseStudies.tsx
│   │   ├── ResultsMetrics.tsx
│   │   └── TestimonialsGrid.tsx
│   ├── developers/            # Developer page components
│   │   ├── AdvancedFeatures.tsx
│   │   ├── AgentOrchestration.tsx
│   │   ├── DeveloperCTA.tsx
│   │   ├── DevelopersHero.tsx
│   │   ├── SPARCDelegation.tsx
│   │   ├── TechnicalCaseStudies.tsx
│   │   └── TechnicalStack.tsx
│   ├── parcours/              # Learning pathway components
│   │   ├── FormationCards.tsx
│   │   ├── LearningPathVisualization.tsx
│   │   ├── ParcoursHero.tsx
│   │   ├── ProgressionBridge.tsx
│   │   └── SuccessStories.tsx
│   └── services/              # Services page components
│       ├── GuaranteeSection.tsx
│       ├── ProcessTimeline.tsx
│       ├── ServiceDetailCards.tsx
│       ├── ServicesHero.tsx
│       └── ToolsIntegration.tsx
├── ui/                        # Reusable UI components
│   ├── Button.tsx             # Button component
│   ├── CodeBlock.tsx          # Code display component
│   ├── LoadingSpinner.tsx     # Loading indicator
│   └── ProgressBar.tsx        # Progress bar component
└── claude.md                  # Claude context for components
```

### Support Files (`src/`)

```
src/
├── hooks/                     # Custom React hooks
│   └── useStrictModeSafeTimer.ts # Timer hook with safeguards
├── i18n/                      # Internationalization
│   └── request.ts             # i18n request configuration
├── lib/                       # Utility libraries
│   ├── prisma.ts              # Prisma client configuration
│   └── utils.ts               # General utilities
├── messages/                  # Translation files
│   ├── en.json                # English translations
│   └── fr.json                # French translations (primary)
├── types/                     # TypeScript type definitions
│   └── next-auth.d.ts         # NextAuth type extensions
├── utils/                     # Utility functions
│   └── timerValidation.ts     # Timer validation utilities
├── middleware.ts              # Next.js middleware for i18n
└── claude.md                  # Claude context for src
```

## Database (`prisma/`)

```
prisma/
└── schema.prisma              # Database schema definition
```

## Public Assets (`public/`)

```
public/
├── images/                    # Image assets
│   ├── N-favicon.png          # Newcode favicon
│   ├── logo-newcode.jpeg      # Company logo
│   ├── new-code-guide.jpeg    # Guide cover image
│   ├── philippe-beliveau.png  # Founder photo
│   ├── circlepic.jpeg         # Circle profile image
│   ├── remi&maxime.jpeg       # Team photos
│   └── yoan-hibert.jpeg
├── image/                     # Additional images
│   └── diagram_modes.svg      # Methodology diagrams
├── bmad/                      # BMAD methodology assets
├── contextDev_Speed.png       # Development context image
├── overview-of-tech-scene.jpeg # Tech scene overview
├── baptiste-wieczorek.jpeg    # Team member photo
├── newcode.png                # Alternative logo
├── newcode-logo.jpeg          # Logo variant
├── file.svg                   # File icon
├── globe.svg                  # Globe icon
├── next.svg                   # Next.js icon
├── vercel.svg                 # Vercel icon
└── window.svg                 # Window icon
```

## Documentation (`docs/`)

```
docs/
├── README.md                  # Documentation overview
├── prd.md                     # Product Requirements Document
├── changes.md                 # Change log
├── user-stories.md            # User stories collection
├── architecture.md            # System architecture (main)
├── architecture/              # Architecture details
│   ├── source-tree.md         # This file
│   ├── coding-standards.md    # Development standards
│   └── tech-stack.md          # Technology stack details
└── stories/                   # Individual user stories
    ├── README.md
    ├── BRAND-001-formation-kickstart-rebranding.md
    ├── BRAND-002-formation-architecte-rebranding.md
    ├── JOURNEY-001-parcours-overview-page.md
    ├── LANG-001-french-default-language.md
    ├── NAV-001-navigation-structure-update.md
    ├── PAGE-001-formation-kickstart-detailed-page.md
    ├── PAGE-002-formation-architecte-detailed-page.md
    ├── PAY-001-stripe-payment-integration-formations.md
    ├── PAY-002-guide-purchase-integration.md
    ├── PAY-003-multiple-payment-options-communication.md
    └── PROMO-001-launch-promotion-campaign.md
```

## UX Research (`UX/`)

```
UX/
├── Website-refont.md          # Website redesign notes
├── rework.md                  # UX rework documentation
├── switch-dimension-target-market-analysis.md
├── switchdimension-ux-analysis.md
├── cloud-tech-stack.png       # Tech stack diagram
└── prix.png                   # Pricing diagram
```

## Key Architecture Principles

### 1. **French-First Internationalization**
- Default locale: French (`fr`)
- English routes: `/en/*`
- Translation files in `src/messages/`
- Middleware handles locale routing

### 2. **Component Organization**
- **Sections**: Large page sections and features
- **UI**: Reusable, atomic components
- **Layout**: Structural components
- **Auth**: Authentication-specific components

### 3. **API Structure**
- RESTful API routes in `src/app/api/`
- Resource-based organization (courses, notes, questions)
- NextAuth.js for authentication

### 4. **Type Safety**
- TypeScript throughout
- Prisma type generation
- Custom type definitions in `src/types/`

### 5. **Performance Optimization**
- Next.js App Router for optimal loading
- Component-based architecture for code splitting
- Static asset optimization

## Development Considerations

### File Naming Conventions
- **Components**: PascalCase (e.g., `HeroBanner.tsx`)
- **Pages**: lowercase with hyphens (e.g., `formation-kickstart`)
- **Utilities**: camelCase (e.g., `timerValidation.ts`)
- **API Routes**: lowercase (e.g., `route.ts`)

### Import Organization
1. External libraries
2. Internal utilities and types
3. Components (UI, then sections)
4. Relative imports

### Code Organization Best Practices
- Single responsibility per component
- Consistent prop typing
- Centralized utility functions
- Modular CSS with Tailwind
- Clear separation of concerns between client/server components