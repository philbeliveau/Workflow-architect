# Newcode Website Enhancement - User Stories

## Epic Structure Overview

This document contains 11 user stories organized across 4 epics, designed to deliver the website enhancement incrementally while meeting the September 5th promotional deadline.

---

## **EPIC 1: Foundation & Language Infrastructure**
*Establish French-first approach and core site functionality*

### Story 1.1: French Default Language Configuration
**Story ID**: LANG-001  
**Epic**: Foundation & Language Infrastructure  
**Priority**: High (Sprint 1)

**User Story:**
As a French-speaking visitor to new-code.ca,  
I want the website to load in French by default instead of redirecting to `/en`,  
So that I can immediately access content in my preferred language without confusion.

**Acceptance Criteria:**
1. Root URL (new-code.ca) serves French content by default
2. English content remains accessible at /en URLs
3. Language switcher allows users to toggle between French and English
4. Browser language preferences are respected but French takes priority
5. All existing functionality works unchanged in both languages

**Technical Notes:**
- Update routing configuration at build/deployment level
- Maintain existing URL structure for English content
- Implement language detection with French priority override

**Definition of Done:**
- [ ] French content loads at root URL
- [ ] English content accessible via /en routes
- [ ] Language switcher functional
- [ ] No broken links or functionality
- [ ] Browser testing completed

---

### Story 1.2: Navigation Structure Update
**Story ID**: NAV-001  
**Epic**: Foundation & Language Infrastructure  
**Priority**: Medium (Sprint 2)

**User Story:**
As a website visitor,  
I want to see the new "Parcours" navigation option,  
So that I can easily discover the training pathway options.

**Acceptance Criteria:**
1. "Parcours" tab added to main navigation
2. Navigation is accessible in both French and English
3. Mobile navigation includes new Parcours option
4. All existing navigation elements remain functional
5. Navigation follows existing design patterns

**Technical Notes:**
- Update navigation component in both language versions
- Ensure mobile responsiveness maintained
- Link to parcours overview page (Story 3.1 dependency)

**Definition of Done:**
- [ ] Parcours tab visible in desktop navigation
- [ ] Mobile navigation updated
- [ ] Both language versions updated
- [ ] No regression in existing navigation
- [ ] Responsive design verified

---

## **EPIC 2: Training Program Restructure & Branding**
*Rebrand formations and create dedicated program pages*

### Story 2.1: Formation Kickstart Rebranding
**Story ID**: BRAND-001  
**Epic**: Training Program Restructure & Branding  
**Priority**: High (Sprint 1)

**User Story:**
As a potential student interested in beginner training,  
I want to see the updated "Formation Kickstart" branding with clear value proposition,  
So that I understand exactly what I'll learn and achieve.

**Acceptance Criteria:**
1. Update all references from "Formation Débutant" to "Formation Kickstart"
2. New tagline: "Créez votre premier site ou app avec l'IA en quelques heures"
3. Updated pricing display: 280€ (payable en 3x)
4. Call-to-action: "Passez à l'action et créez votre site web, logiciel fonctionnel en quelques heures"
5. All existing links and functionality remain intact

**Technical Notes:**
- Search and replace all text references site-wide
- Update pricing components
- Maintain existing button/link functionality

**Definition of Done:**
- [ ] All "Formation Débutant" references updated
- [ ] New tagline implemented
- [ ] Pricing correctly displayed
- [ ] CTA buttons updated
- [ ] No broken links

---

### Story 2.2: Formation Kickstart Detailed Page
**Story ID**: PAGE-001  
**Epic**: Training Program Restructure & Branding  
**Priority**: Lower (Sprint 3)

**User Story:**
As a prospective student,  
I want to view detailed curriculum information for Formation Kickstart,  
So that I can make an informed decision about enrollment.

**Acceptance Criteria:**
1. New page created at `/formation-kickstart`
2. Complete 10-module curriculum displayed with time estimates
3. Each module shows learning objectives and outcomes
4. Page follows existing design system and patterns
5. Mobile-responsive layout implemented
6. Navigation back to main formations page

**Module Content to Include:**
- Module 1: Bases du web (30min)
- Module 2: Comprendre la révolution agentique (30min)
- Module 3: Le vibe coding (30min)
- Module 4: Du besoin à la spécification (1h)
- Module 5: Générer son premier projet avec un agent (1h)
- Module 6: Améliorer ses projets et ajouter des fonctionnalités (30min)
- Module 7: Mettre en ligne son projet (30min)
- Module 8: Erreurs fréquentes et bonnes pratiques (30min)
- Module 9: Projet final (30min)
- Module 10: Pour aller plus loin, la suite (30min)

**Definition of Done:**
- [ ] Page accessible at /formation-kickstart
- [ ] All 10 modules displayed with details
- [ ] Responsive design implemented
- [ ] Navigation elements functional
- [ ] SEO meta tags implemented

---

### Story 2.3: Formation Architecte Rebranding & Pricing
**Story ID**: BRAND-002  
**Epic**: Training Program Restructure & Branding  
**Priority**: High (Sprint 1)

**User Story:**
As an advanced learner or professional,  
I want to see the updated "Formation Architecte" positioning and pricing,  
So that I understand the professional-level value offered.

**Acceptance Criteria:**
1. Update name to " Formation Architecte  "
2. Subtitle: "La vision d'un entrepreneur, la puissance d'un lead tech"
3. Pricing updated from 300€ to 700€
4. Professional positioning and messaging implemented
5. All existing functionality preserved

**Technical Notes:**
- Update all formation references site-wide
- Implement new pricing display components
- Emphasize professional/enterprise positioning

**Definition of Done:**
- [ ] Name updated across all pages
- [ ] New subtitle implemented
- [ ] Pricing updated to 700€
- [ ] Professional messaging consistent
- [ ] No functionality regression

---

### Story 2.4: Formation Architecte Detailed Page
**Story ID**: PAGE-002  
**Epic**: Training Program Restructure & Branding  
**Priority**: Lower (Sprint 3)

**User Story:**
As a professional seeking advanced training,  
I want to review comprehensive curriculum for Formation Architecte,  
So that I can evaluate the ROI and technical depth.

**Acceptance Criteria:**
1. New page created at `/formation-architecte`
2. Complete 6-module advanced curriculum displayed
3. Technical depth and professional outcomes clearly communicated
4. Page emphasizes enterprise-level capabilities
5. Responsive design implementation
6. Integration with existing site architecture

**Module Content to Include:**
- Module 1: Pourquoi vous ne pouvez pas ignorer l'IA agentique
- Module 2: Au-delà de ChatGPT: Qu'est-ce qu'un agent?
- Module 3: Setup de vos agents - Partie 1
- Module 4: Setup de vos agents - Partie 2
- Module 5: Les clés à maîtriser
- Module 6: BMAD: Les pièces manquantes

**Definition of Done:**
- [ ] Page accessible at /formation-architecte
- [ ] All 6 modules detailed with technical depth
- [ ] Enterprise positioning emphasized
- [ ] Responsive design verified
- [ ] Integration with site navigation

---

## **EPIC 3: User Journey & Parcours Overview**
*Create comprehensive training pathway presentation*

### Story 3.1: Parcours Overview Page
**Story ID**: JOURNEY-001  
**Epic**: User Journey & Parcours Overview  
**Priority**: Lower (Sprint 3)

**User Story:**
As a visitor exploring training options,  
I want to see both formations presented as a progressive learning path,  
So that I can understand how to advance from beginner to expert level.

**Acceptance Criteria:**
1. New `/parcours` page created
2. Both formations presented with clear progression pathway
3. Links to detailed pages: `/formation-kickstart` and `/formation-architecte`
4. Visual representation of learning journey
5. Clear differentiation between beginner and advanced tracks
6. Responsive design across all devices

**Technical Notes:**
- Create visual pathway/journey representation
- Implement clear CTAs to detailed pages
- Emphasize progression from beginner to advanced

**Definition of Done:**
- [ ] Page accessible at /parcours
- [ ] Visual learning journey implemented
- [ ] Links to detail pages functional
- [ ] Clear beginner → advanced progression
- [ ] Mobile responsive design
- [ ] SEO optimized

---

## **EPIC 4: Payment Integration & Promotional Campaign**
*Implement Stripe integration and launch promotional pricing*

### Story 4.1: Stripe Payment Integration - Formation Pages
**Story ID**: PAY-001  
**Epic**: Payment Integration & Promotional Campaign  
**Priority**: Medium (Sprint 2)

**User Story:**
As a student ready to enroll,  
I want to easily purchase training directly from the formation pages,  
So that I can quickly secure my spot without additional steps.

**Acceptance Criteria:**
1. Stripe payment links integrated on `/formation-kickstart` page
2. Stripe payment links integrated on `/formation-architecte` page
3. Formation Kickstart link: https://buy.stripe.com/dRmcN6bZl7Gg21X3PceEo04
4. Formation Architecte link: https://buy.stripe.com/00wfZiaVhgcM5e91H4eEo05
5. Payment buttons follow existing design patterns
6. Clear pricing display with any applicable promotions

**Technical Notes:**
- Implement Stripe redirect integration
- Ensure buttons follow existing design system
- Test payment flow completion

**Definition of Done:**
- [ ] Stripe links integrated on both formation pages
- [ ] Payment buttons styled consistently
- [ ] Payment flow tested successfully
- [ ] Promotional pricing reflected
- [ ] Mobile payment experience verified

---

### Story 4.2: Guide Purchase Integration
**Story ID**: PAY-002  
**Epic**: Payment Integration & Promotional Campaign  
**Priority**: Medium (Sprint 2)

**User Story:**
As a visitor interested in the methodology guide,  
I want to purchase "Notre guide" directly from the hero section,  
So that I can immediately access the foundational content.

**Acceptance Criteria:**
1. Stripe payment link integrated in hero section for "Notre guide"
2. Guide link: https://buy.stripe.com/00w9AU6F1d0A36185seEo03
3. Clear call-to-action button placement
4. Integration maintains existing hero section design
5. Mobile optimization implemented

**Technical Notes:**
- Integrate Stripe link in hero section
- Maintain existing hero design patterns
- Ensure mobile responsiveness

**Definition of Done:**
- [ ] Guide purchase link in hero section
- [ ] CTA button prominently placed
- [ ] Hero section design preserved
- [ ] Mobile experience optimized
- [ ] Payment flow tested

---

### Story 4.3: Launch Promotion Campaign Implementation
**Story ID**: PROMO-001  
**Epic**: Payment Integration & Promotional Campaign  
**Priority**: High (Sprint 1)

**User Story:**
As a potential customer,  
I want to see the limited-time 40% discount offer clearly displayed,  
So that I can take advantage of the promotional pricing before September 5th deadline.

**Acceptance Criteria:**
1. 40% discount banner prominently displayed site-wide
2. Countdown timer showing time remaining until September 5th midnight
3. Promotional pricing reflected on all formation pages
4. Discount code field available during checkout process
5. Clear messaging about limited-time nature of offer
6. Banner dismissible but persistent until deadline

**Technical Notes:**
- Implement countdown timer with JavaScript
- Create prominent banner component
- Ensure promotional pricing accuracy
- Test countdown timer functionality

**Definition of Done:**
- [ ] Discount banner visible site-wide
- [ ] Countdown timer functional and accurate
- [ ] Promotional pricing displayed correctly
- [ ] Banner dismissible but persistent
- [ ] Mobile banner design implemented
- [ ] Timer automatically disables after deadline

---

### Story 4.4: Multiple Payment Options Communication
**Story ID**: PAY-003  
**Epic**: Payment Integration & Promotional Campaign  
**Priority**: Medium (Sprint 2)

**User Story:**
As a customer who needs payment flexibility,  
I want to easily understand how to arrange installment payments,  
So that I can enroll even if I prefer to pay over time.

**Acceptance Criteria:**
1. "Pour les paiements en plusieurs fois : nous contacter" messaging displayed
2. Contact information or form easily accessible
3. Clear instructions for payment plan requests
4. Integration with existing contact/support systems
5. Mobile-friendly contact options

**Technical Notes:**
- Add payment flexibility messaging near payment buttons
- Ensure contact methods are easily accessible
- Maintain existing contact system integration

**Definition of Done:**
- [ ] Payment flexibility messaging displayed
- [ ] Contact options easily accessible
- [ ] Instructions clear and actionable
- [ ] Mobile-friendly implementation
- [ ] Integration with existing contact systems

---

## Implementation Roadmap

### **Sprint 1 (High Priority - Must complete before September 5th)**
- **Story 1.1**: French Default Language Configuration
- **Story 2.1**: Formation Kickstart Rebranding  
- **Story 2.3**: Formation Architecte Rebranding & Pricing
- **Story 4.3**: Launch Promotion Campaign Implementation

### **Sprint 2 (Medium Priority - Complete shortly after launch)**
- **Story 1.2**: Navigation Structure Update
- **Story 4.1**: Stripe Payment Integration - Formation Pages
- **Story 4.2**: Guide Purchase Integration
- **Story 4.4**: Multiple Payment Options Communication

### **Sprint 3 (Lower Priority - Enhancement phase)**
- **Story 2.2**: Formation Kickstart Detailed Page
- **Story 2.4**: Formation Architecte Detailed Page  
- **Story 3.1**: Parcours Overview Page

## Story Dependencies

**Key Dependencies:**
- Story 1.2 (Navigation) requires Story 3.1 (Parcours page) to be planned
- Stories 2.2 and 2.4 (detailed pages) should be completed before Story 3.1 (overview page)
- Story 4.1 (payment integration) should align with Story 4.3 (promotional pricing)
- Story 4.3 (promotional campaign) must be completed before September 5th deadline

## Success Criteria

Each epic delivers measurable value:
- **Epic 1**: French-first user experience with improved navigation
- **Epic 2**: Clear training progression and professional positioning
- **Epic 3**: Comprehensive user journey with clear pathway
- **Epic 4**: Integrated payment system with promotional conversion boost

Total estimated effort: 11 focused development sessions across 3 sprints.