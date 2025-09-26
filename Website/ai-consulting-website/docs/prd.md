# Newcode Website Enhancement - Product Requirements Document (PRD)

## Goals and Background Context

### Goals
- Enable French-first user experience by defaulting to French language instead of `/en` redirect
- Rebrand and restructure training offerings into clear progressive learning path (Formation Kickstart → Formation Architecte)
- Create dedicated journey pages that effectively communicate the value proposition of each training level
- Implement comprehensive navigation structure with clear pathways to both training programs
- Integrate Stripe payment processing to reduce friction in enrollment process
- Launch limited-time promotional campaign (-40% until September 5th) to accelerate early adoption
- Establish flexible payment options including installment plans to increase accessibility

### Background Context

Newcode has established itself as a pioneer in agentic programming education, transforming non-technical professionals into application creators through AI agent communication. The current website architecture doesn't effectively communicate the progressive learning methodology that differentiates Newcode from scattered YouTube tutorials and trial-and-error approaches.

The website enhancement addresses critical conversion barriers: language preference confusion, unclear training progression, payment friction, and missed promotional opportunities. By restructuring the user journey around the two-tier training model (Kickstart for beginners, Architecte for advanced practitioners), the site will better serve the target segments of wannabe coders who need structured guidance from ideation to production-ready applications.

### Change Log
| Date | Version | Description | Author |
|------|---------|-------------|---------|
| 2024-09-26 | v1.0 | Initial PRD for website enhancement project | John (PM) |

## Requirements

### Functional Requirements

**FR1**: Default language redirect - Website must serve French content at root URL (new-code.ca) instead of redirecting to `/en`

**FR2**: Formation Kickstart rebranding - Update all references from "Formation Débutant" to "Formation Kickstart – Créez votre premier site ou app avec l'IA en quelques heures"

**FR3**: Formation Architecte rebranding - Update to "Formation Architecte: De l'idée au logiciel scalable : la vision d'un entrepreneur, la puissance d'un lead tech"

**FR4**: Pricing updates - Formation Kickstart: 280€ (payable en 3x), Formation Architecte: 3200€ (updated from 300€)

**FR5**: Dedicated formation pages - Create `/formation-kickstart` and `/formation-architecte` pages with complete curricula

**FR6**: Parcours navigation - Add "Parcours" tab to main navigation with overview of both training programs

**FR7**: Stripe payment integration - Integrate payment links on formation pages and hero section for guide

**FR8**: Promotional campaign - Display 40% discount offer with countdown timer until September 5th midnight

**FR9**: Payment flexibility - Provide clear communication for installment payment options ("nous contacter")

**FR10**: Curriculum display - Present complete module breakdown for both formations with time estimates and learning objectives

### Non-Functional Requirements

**NFR1**: French-first language implementation must maintain existing English `/en` URL structure

**NFR2**: All new pages must follow existing design system and responsive patterns

**NFR3**: Payment integration must not disrupt existing site performance

**NFR4**: Promotional countdown must be accurate and automatically disable after deadline

**NFR5**: Mobile responsiveness required for all new pages and components

## User Interface Design Goals

### Overall UX Vision
Create a clear, progressive learning journey that guides visitors from awareness to enrollment while emphasizing the professional, structured approach that differentiates Newcode from casual online tutorials.

### Key Interaction Paradigms
- **Progressive disclosure**: Start with overview, dive deeper on demand
- **Clear conversion paths**: Multiple entry points leading to payment
- **Educational hierarchy**: Beginner → Advanced pathway clearly communicated
- **Urgency without pressure**: Promotional elements that encourage action without overwhelming

### Core Screens and Views
- **Home page with French default**: Primary landing experience in French
- **Parcours overview page**: Training pathway presentation
- **Formation Kickstart details**: Complete curriculum with 10 modules
- **Formation Architecte details**: Advanced curriculum with 6 modules
- **Payment integration points**: Seamless Stripe checkout flows
- **Promotional campaign elements**: Countdown and discount messaging

### Accessibility: WCAG AA
All new components and pages must meet WCAG AA standards for accessibility.

### Branding
Maintain existing Newcode visual identity while emphasizing professional, educational positioning. French content takes visual priority with clean, conversion-focused design.

### Target Device and Platforms: Web Responsive
Primary focus on desktop and mobile web experience, optimized for both French and English speaking Canadian market.

## Technical Assumptions

### Repository Structure: Monorepo
Continue using existing repository structure within Website/ai-consulting-website directory.

### Service Architecture
Maintain existing static site architecture with enhanced routing for French-first approach and new page structure.

### Testing Requirements
- Unit testing for new components
- Integration testing for payment flows
- Manual testing for promotional campaign elements
- Cross-browser testing for language switching

### Additional Technical Assumptions
- Stripe integration will use existing merchant account
- Countdown timer will be client-side JavaScript with server-side validation
- French language routing will be implemented at build/deployment level
- Existing analytics and tracking will be maintained across all new pages

## Epic List

### Epic 1: Foundation & Language Infrastructure
Establish French-first approach and core site functionality including default language configuration and navigation updates.

### Epic 2: Training Program Restructure & Branding  
Rebrand formations and create dedicated program pages with complete curricula and updated pricing.

### Epic 3: User Journey & Parcours Overview
Create comprehensive training pathway presentation that guides visitors through progressive learning options.

### Epic 4: Payment Integration & Promotional Campaign
Implement Stripe integration and launch promotional pricing with countdown timer and flexible payment communication.

## Implementation Priority

### Sprint 1 (High Priority - Must complete before September 5th)
- French default language configuration
- Formation rebranding (both programs)
- Promotional campaign implementation
- Core Stripe payment integration

### Sprint 2 (Medium Priority - Complete shortly after launch)
- Navigation structure updates
- Payment integration completion
- Multiple payment options communication

### Sprint 3 (Lower Priority - Enhancement phase)
- Detailed curriculum pages
- Parcours overview page
- Advanced user journey optimization

## Success Metrics

- **Conversion Rate**: Increase in enrollment rate from French visitors
- **User Journey**: Reduced bounce rate on training program pages
- **Promotional Effectiveness**: Discount code usage and campaign conversion
- **Payment Completion**: Successful Stripe transaction completion rate
- **User Experience**: Time spent on curriculum pages and pathway completion

## Next Steps

### UX Expert Prompt
Review the PRD and create wireframes for the new parcours overview page and detailed formation pages, ensuring clear progression narrative and conversion optimization.

### Architect Prompt  
Implement the technical requirements starting with French-first routing configuration, then proceed with page creation and payment integration following the sprint priorities outlined in this PRD.