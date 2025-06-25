# Page Structures and Component Specifications

## Site Architecture

### Routing Structure
```
/ (Homepage)
/services (Services/Offerings)
/case-studies (Case Studies)
/book-demo (Book a Demo/Contact)
/blog (Blog)
/blog/[slug] (Individual Blog Posts)
/about (About Us)
/pricing (Pricing)
```

## Page Breakdown

### 1. Homepage (/)

#### Components:
- **HeroBanner**
  - Title: "Deploy AI Workflows. Deliver 3x Faster."
  - Subtitle: "Transform your small dev team into an AI-powered productivity machine with done-with-you consulting that delivers measurable results in weeks, not months."
  - Primary CTA: "Book a Workflow Audit"
  - Secondary CTA: "See Case Studies"
  - Background: Dark gradient with subtle code-like pattern overlay
  - Interactive element: Floating code snippets or terminal windows

- **TrustBar**
  - Text: "Trusted by 50+ development teams"
  - Logos: Client company logos (anonymized if needed)
  - Metrics: "Average 3x faster delivery" | "95% client retention" | "30-day results guarantee"

- **ProblemStatement**
  - Headline: "Small Teams, Big Productivity Gap"
  - Subheading: "AI tools promise 30%+ efficiency gains. Most teams only achieve 10-15%. We bridge that gap."
  - Three-column layout with pain points:
    - "Drowning in repetitive tasks"
    - "Inconsistent AI tool results"
    - "No time to learn complex workflows"

- **SolutionOverview**
  - Headline: "Done-With-You AI Implementation"
  - Three-step process:
    1. "Audit your current workflow" (Icon: Magnifying glass)
    2. "Implement AI-powered automation" (Icon: Robot/Gear)
    3. "Measure and optimize results" (Icon: Chart trending up)

- **ServicesPreview**
  - Grid of service cards (3 columns)
  - Each card: Icon, Title, Brief description, "Learn More" link

- **ResultsShowcase**
  - Headline: "Real Results, Real Teams"
  - Metrics carousel or grid:
    - "67% faster code reviews"
    - "3 days vs 3 weeks onboarding"
    - "40% higher project margins"
  - Background: Subtle animation or gradient

- **TestimonialsSection**
  - Headline: "What Our Clients Say"
  - Testimonial cards with:
    - Quote
    - Name and title
    - Company (if allowed)
    - Photo (avatar if needed)
  - Carousel or grid layout

- **CTASection**
  - Headline: "Ready to 3x Your Development Velocity?"
  - Description: "Book a free workflow audit and see how AI can transform your team's productivity."
  - Primary CTA: "Book Free Audit"
  - Secondary info: "30-minute call, no commitment required"

#### Layout:
- Full-width hero section
- Contained content sections (max-width: 1200px)
- Alternating background colors for visual separation
- Sticky navigation header

### 2. Services Page (/services)

#### Components:
- **ServicesHero**
  - Title: "AI-Powered Development Services"
  - Subtitle: "Choose your path to 3x faster delivery"
  - Background: Gradient with geometric patterns

- **ServiceDetailCards**
  - Three main service tiers:
    
    **1. Workflow Audit & Quick Wins**
    - Duration: 1-2 weeks
    - Price: $2,500
    - Includes: Current state analysis, AI tool recommendations, quick implementation wins
    - Best for: Solo developers and 2-3 person teams
    - CTA: "Start Audit"
    
    **2. Full AI Workflow Implementation**
    - Duration: 4-6 weeks
    - Price: $15,000
    - Includes: Complete workflow redesign, AI tool integration, team training, 30-day optimization
    - Best for: Startup teams (3-8 developers)
    - CTA: "Book Implementation"
    
    **3. AI-First Agency Transformation**
    - Duration: 8-12 weeks
    - Price: $35,000
    - Includes: Organization-wide AI adoption, custom workflow design, team training, 90-day optimization
    - Best for: Agencies (8-15 developers)
    - CTA: "Schedule Consultation"

- **ProcessTimeline**
  - Visual timeline showing implementation phases
  - Week-by-week breakdown
  - Milestones and deliverables

- **ToolsIntegration**
  - Grid of AI tools we integrate:
    - Claude/ChatGPT
    - GitHub Copilot
    - Cursor
    - CrewAI
    - Autogen
    - Custom automation scripts
  - Each with logo and brief description

- **GuaranteeSection**
  - "90-Day Money-Back Guarantee"
  - "If you don't see measurable productivity improvements within 90 days, we'll refund your investment."

### 3. Case Studies Page (/case-studies)

#### Components:
- **CaseStudiesHero**
  - Title: "Real Teams, Real Results"
  - Subtitle: "See how we've helped development teams achieve 3x faster delivery"

- **CaseStudyGrid**
  - Featured case studies (3-4 detailed ones)
  - Each case study card:
    - Client type (anonymized)
    - Challenge summary
    - Solution approach
    - Key results/metrics
    - "Read Full Story" CTA

- **DetailedCaseStudy** (expandable or separate pages)
  - **Before/After Comparison**
    - Workflow diagrams
    - Time comparisons
    - Productivity metrics
  - **Implementation Process**
    - Timeline
    - Tools used
    - Challenges overcome
  - **Results Metrics**
    - Quantified improvements
    - ROI calculations
    - Client testimonial

- **ResultsMetrics**
  - Aggregate results across all clients
  - Visual charts and graphs
  - Key statistics highlighted

### 4. Book Demo Page (/book-demo)

#### Components:
- **BookingHero**
  - Title: "Book Your Free Workflow Audit"
  - Subtitle: "30-minute call to identify your biggest productivity opportunities"

- **CalendlyEmbed** or **CustomBookingForm**
  - Calendar integration
  - Time zone handling
  - Form fields:
    - Name
    - Email
    - Company
    - Team size
    - Current biggest challenge
    - Preferred meeting time

- **WhatToExpect**
  - Agenda for the call
  - Preparation instructions
  - What they'll receive after

- **ContactAlternatives**
  - Email contact
  - Phone number
  - Response time expectations

### 5. Blog Page (/blog)

#### Components:
- **BlogHero**
  - Title: "AI Development Insights"
  - Subtitle: "Practical guides and field notes from the front lines of AI-powered development"

- **FeaturedPost**
  - Latest or most important blog post
  - Large image
  - Excerpt
  - "Read More" CTA

- **BlogGrid**
  - Grid of blog post cards
  - Each card: Image, title, excerpt, date, author, tags
  - Pagination or infinite scroll

- **BlogSidebar**
  - Categories
  - Popular posts
  - Newsletter signup
  - Search functionality

### 6. Individual Blog Post (/blog/[slug])

#### Components:
- **BlogPostHeader**
  - Title
  - Author info
  - Publication date
  - Reading time estimate
  - Social share buttons

- **BlogPostContent**
  - Rich text content
  - Code syntax highlighting
  - Embedded images/videos
  - Table of contents for long posts

- **RelatedPosts**
  - 3-4 related articles
  - Based on tags or categories

- **NewsletterSignup**
  - Inline or bottom-of-post subscription form

## Component Library Specifications

### Core Components

#### HeroBanner
```typescript
interface HeroBannerProps {
  title: string;
  subtitle: string;
  primaryCTA: {
    text: string;
    href: string;
    variant: 'primary' | 'secondary';
  };
  secondaryCTA?: {
    text: string;
    href: string;
    variant: 'primary' | 'secondary';
  };
  backgroundImage?: string;
  backgroundGradient?: string;
}
```

#### ServiceCard
```typescript
interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  price?: string;
  duration?: string;
  features: string[];
  ctaText: string;
  ctaHref: string;
  featured?: boolean;
}
```

#### TestimonialCard
```typescript
interface TestimonialCardProps {
  quote: string;
  author: {
    name: string;
    title: string;
    company?: string;
    avatar?: string;
  };
  rating?: number;
}
```

#### CaseStudyCard
```typescript
interface CaseStudyCardProps {
  title: string;
  clientType: string;
  challenge: string;
  solution: string;
  results: {
    metric: string;
    improvement: string;
  }[];
  image?: string;
  href: string;
}
```

#### MetricCard
```typescript
interface MetricCardProps {
  value: string;
  label: string;
  description?: string;
  icon?: React.ReactNode;
  trend?: 'up' | 'down' | 'neutral';
}
```

#### BlogPostCard
```typescript
interface BlogPostCardProps {
  title: string;
  excerpt: string;
  author: string;
  publishDate: string;
  readTime: string;
  image?: string;
  tags: string[];
  href: string;
}
```

### Layout Components

#### Navigation
- Sticky header
- Logo on left
- Navigation links in center
- CTA button on right
- Mobile hamburger menu
- Smooth scroll to sections

#### Footer
- Company info
- Quick links
- Contact information
- Social media links
- Newsletter signup
- Legal links

#### Container
- Max-width: 1200px
- Responsive padding
- Centered content

### Design System

#### Colors
```css
:root {
  --primary-900: #1a1a1a;
  --primary-800: #2d2d2d;
  --primary-700: #404040;
  --accent-purple: #8b5cf6;
  --accent-teal: #14b8a6;
  --accent-blue: #3b82f6;
  --success-green: #10b981;
  --warning-orange: #f59e0b;
  --text-primary: #ffffff;
  --text-secondary: #a1a1aa;
  --text-muted: #71717a;
}
```

#### Typography
```css
/* Headlines */
.text-hero { font-size: 3.5rem; font-weight: 800; line-height: 1.1; }
.text-h1 { font-size: 2.5rem; font-weight: 700; line-height: 1.2; }
.text-h2 { font-size: 2rem; font-weight: 600; line-height: 1.3; }
.text-h3 { font-size: 1.5rem; font-weight: 600; line-height: 1.4; }

/* Body text */
.text-lg { font-size: 1.125rem; line-height: 1.6; }
.text-base { font-size: 1rem; line-height: 1.6; }
.text-sm { font-size: 0.875rem; line-height: 1.5; }
```

#### Spacing
- Base unit: 4px
- Scale: 4px, 8px, 12px, 16px, 24px, 32px, 48px, 64px, 96px, 128px

#### Breakpoints
```css
/* Mobile first approach */
@media (min-width: 640px) { /* sm */ }
@media (min-width: 768px) { /* md */ }
@media (min-width: 1024px) { /* lg */ }
@media (min-width: 1280px) { /* xl */ }
```

## API Endpoints

### Contact/Lead Capture
```
POST /api/contact
{
  name: string;
  email: string;
  company?: string;
  message: string;
  source: 'hero' | 'services' | 'blog' | 'demo';
}
```

### Newsletter Signup
```
POST /api/newsletter
{
  email: string;
  source: string;
}
```

### Blog Content
```
GET /api/blog
GET /api/blog/[slug]
```

### Calendar Booking
```
POST /api/booking
{
  name: string;
  email: string;
  company?: string;
  teamSize: string;
  challenge: string;
  preferredTime: string;
}
```

## Technical Requirements

### Framework
- Next.js 14+ with App Router
- TypeScript
- Tailwind CSS
- Framer Motion for animations

### Performance
- Core Web Vitals optimization
- Image optimization
- Lazy loading
- Code splitting

### SEO
- Server-side rendering
- Meta tags optimization
- Structured data
- Sitemap generation

### Accessibility
- WCAG 2.1 AA compliance
- Keyboard navigation
- Screen reader support
- Color contrast compliance

