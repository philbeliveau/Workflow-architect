# Translation Requirements - App Router

## MANDATORY Translation Guidelines for Next.js App Router

When working in the `app/` directory, you MUST follow these translation requirements:

### App Router Internationalization Structure

#### 1. Route Organization
```
app/
├── [locale]/           # Dynamic locale segment
│   ├── page.tsx       # Home page in current locale
│   ├── about/         # About page route
│   ├── services/      # Services page route
│   └── layout.tsx     # Locale-specific layout
└── layout.tsx         # Root layout
```

#### 2. Page Component Structure
```tsx
import { useTranslations } from 'next-intl';

export default function Page() {
  const t = useTranslations('PageName');
  
  return (
    <div>
      <h1>{t('title')}</h1>
      <p>{t('description')}</p>
    </div>
  );
}
```

### French-First Page Development

#### 1. Content Strategy
- **Create French page content first** using business context
- **Focus on Quebec/Canadian market needs**
- **Use Newcode's established terminology**
- **Ensure SEO optimization for French search terms**

#### 2. Metadata Configuration
```tsx
import { Metadata } from 'next';

export async function generateMetadata({ params: { locale } }): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: 'PageMeta' });
  
  return {
    title: t('title'),
    description: t('description'),
    keywords: t('keywords'),
  };
}
```

#### 3. URL Structure
- **French URLs**: `/fr/a-propos`, `/fr/services`, `/fr/formation`
- **English URLs**: `/en/about`, `/en/services`, `/en/training`
- **Canonical URLs**: Point to French version as primary

### Page-Specific Guidelines

#### Landing Pages (`page.tsx`)
- French conversion messaging drives the design
- Test CTA effectiveness in French first
- Ensure value propositions resonate with Quebec market

#### Service Pages (`services/`, `formation/`)
- Use technical terms appropriate for each language
- "Programmation agentique" vs "Agentic programming"
- Pricing in CAD for both languages
- Business benefits tailored to Canadian context

#### Blog Pages (`blog/`)
- French-first content creation
- Technical accuracy in both languages
- SEO optimization for bilingual search strategy

#### Authentication Pages (`auth/`)
- Form labels and validation messages in both languages
- Error handling and success messages translated
- Legal compliance text (terms, privacy) properly localized

### Dynamic Routes and Params

#### 1. Slug-based Routes
```tsx
// For blog posts or case studies
export default function Page({ params }: { params: { slug: string, locale: string } }) {
  // Handle content based on locale and slug
  // Ensure French content exists before English
}
```

#### 2. API Route Considerations
- Return appropriate language-specific responses
- Handle form submissions in user's preferred language
- Error messages respect locale context

### SEO and Marketing Requirements

#### 1. Meta Tags
- **French pages**: Focus on Quebec market keywords
- **English pages**: Broader North American appeal
- **Structured data**: Implement in both languages

#### 2. Analytics and Tracking
- Separate tracking for French vs English user journeys
- Conversion funnel analysis by language
- A/B testing with language-specific variants

### Development Workflow for Pages

1. **Business requirements analysis** in French context
2. **French content creation** and validation
3. **Page structure development** with French content
4. **UX/UI testing** with French text lengths
5. **English translation and adaptation**
6. **Cross-language testing** and optimization
7. **SEO validation** for both languages

### Quality Assurance Checklist

- [ ] Page loads correctly in both `/fr/` and `/en/` routes
- [ ] All metadata translated and optimized
- [ ] Navigation and breadcrumbs work in both languages
- [ ] Forms and interactions handle both languages
- [ ] Error pages (404, 500) are localized
- [ ] URL structure follows i18n best practices
- [ ] SEO tags properly implemented for each language

---

**Remember**: The app router is where users experience our bilingual business. French routes and content establish the primary user experience, with English routes serving the secondary market expansion strategy.