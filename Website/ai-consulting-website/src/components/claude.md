# Translation Requirements - Components

## MANDATORY Translation Guidelines for React Components

When developing components in this directory, you MUST follow these translation requirements:

### Component Development Standards

#### 1. Internationalization Implementation
- **Always use `useTranslations` hook** from `next-intl`
- **Never hardcode user-facing text** in JSX
- **Structure translation keys logically** by component/section
- **Test components in both languages** during development

#### 2. Translation Key Naming Convention
```tsx
// For HeroBanner component
const t = useTranslations('hero');

// Translation keys in messages/fr.json:
{
  "hero": {
    "title": "Transformez votre équipe",
    "subtitle": "Formation en programmation agentique",
    "cta": "Commencer maintenant"
  }
}
```

#### 3. Component Structure Template
```tsx
import { useTranslations } from 'next-intl';

export function ComponentName() {
  const t = useTranslations('componentSection');
  
  return (
    <div>
      <h1>{t('title')}</h1>
      <p>{t('description')}</p>
      <button>{t('cta')}</button>
    </div>
  );
}
```

### French-First Component Development

#### 1. Content Creation Process
1. **Define French content first** in `messages/fr.json`
2. **Build component using French keys**
3. **Test UX/UI with French text lengths**
4. **Create English translations** in `messages/en.json`
5. **Verify layout works for both languages**

#### 2. Business Context Validation
- **Technical terms**: Use "programmation agentique" not "agentic programming"
- **Target audience**: Address Quebec/Canadian market needs
- **Tone**: Professional but approachable ("vous" form in French)
- **Currency**: Display CAD prices for both languages

#### 3. Component-Specific Guidelines

**Navigation Components**:
- Keep menu items concise in both languages
- Ensure mobile navigation works with longer French text

**Form Components**:
- Translate all labels, placeholders, and validation messages
- Handle form validation errors in both languages
- Test form layouts with French text (typically 20-30% longer)

**CTA Components**:
- Use action-oriented French verbs
- Maintain conversion-focused messaging
- A/B test CTAs in both languages

**Content Components**:
- Respect French typography rules (spaces before punctuation)
- Handle date/time formatting per locale
- Ensure proper text flow and readability

### Development Workflow

1. **Create component skeleton** with translation structure
2. **Add French content** to translation files
3. **Implement component logic** using translation keys
4. **Test responsiveness** with French text
5. **Add English translations**
6. **Cross-test** both language versions
7. **Validate business messaging** alignment

### Quality Checklist

- [ ] All user-facing text uses translation keys
- [ ] French content created first and tested
- [ ] English translations maintain same meaning/intent
- [ ] Component layout handles both text lengths
- [ ] Business terminology consistent with Newcode brand
- [ ] No hardcoded strings in component code

---

**Remember**: Components are the user interface of our bilingual business. French content drives the design decisions, English follows the established patterns.