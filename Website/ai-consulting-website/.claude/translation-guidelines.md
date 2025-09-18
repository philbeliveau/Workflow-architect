# Translation Guidelines for NEWCODE Website

## 🌐 MANDATORY FRENCH/ENGLISH IMPLEMENTATION

**CRITICAL RULE**: Every new functionality, component, or content MUST implement both French and English translations simultaneously. No exceptions.

## 📁 Current Translation System Architecture

### File Structure
```
src/messages/
├── fr.json          # French translations (DEFAULT/PRIMARY)
├── en.json          # English translations
└── [future locales] # Additional languages if needed

src/i18n/
└── request.ts       # i18n configuration

src/app/[locale]/    # Locale-based routing
├── layout.tsx       # Locale layout with metadata
└── [pages]/         # All pages support both locales
```

### Supported Locales
- **`fr`** - French (PRIMARY/DEFAULT)
- **`en`** - English (SECONDARY)

## 🔧 Implementation Patterns

### 1. Component Translation Usage

```typescript
// Client Components
import { useTranslations } from 'next-intl';

const MyComponent = () => {
  const t = useTranslations('sectionKey');
  
  return (
    <div>
      <h1>{t('title')}</h1>
      <p>{t('description')}</p>
    </div>
  );
};

// Server Components
import { getTranslations } from 'next-intl/server';

export default async function MyPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations('sectionKey');
  
  return (
    <div>
      <h1>{t('title')}</h1>
      <p>{t('description')}</p>
    </div>
  );
}
```

### 2. Translation Key Structure

**Follow existing nested patterns:**

```json
{
  "sectionKey": {
    "title": "Section Title",
    "subtitle": "Section Subtitle", 
    "description": "Section Description",
    "subsection": {
      "title": "Subsection Title",
      "items": [
        "First item",
        "Second item",
        "Third item"
      ]
    },
    "cta": {
      "primary": "Primary Button",
      "secondary": "Secondary Button"
    }
  }
}
```

### 3. Dynamic Content Patterns

```typescript
// Array iteration with translations
{[0, 1, 2, 3].map((index) => (
  <li key={index}>
    {t(`benefits.items.${index}`)}
  </li>
))}

// Conditional translations
{userType === 'developer' ? t('developers.title') : t('business.title')}
```

## 📋 MANDATORY CHECKLIST FOR NEW FEATURES

### ✅ Before Creating Any New Component:

1. **Plan Translation Keys**: Define the exact translation structure first
2. **Add to fr.json**: Create French translations (PRIMARY)
3. **Add to en.json**: Create English translations (SECONDARY)  
4. **Import Translation Hook**: Use `useTranslations()` or `getTranslations()`
5. **Test Both Locales**: Verify functionality in `/fr/` and `/en/` routes

### ✅ Required Translation Elements:

**Every new feature MUST translate:**
- [ ] Page titles (`title`)
- [ ] Page descriptions (`subtitle` or `description`)
- [ ] Section headings (`title`, `subtitle`)
- [ ] Button text (`cta.primary`, `cta.secondary`)
- [ ] Form labels and placeholders
- [ ] Error messages
- [ ] Success messages
- [ ] Navigation items
- [ ] Meta descriptions for SEO

### ✅ File Update Process:

1. **Create translation keys** in both `fr.json` and `en.json`
2. **Update component** to use translation hooks
3. **Test locale switching** between `/fr/` and `/en/` routes
4. **Verify no hardcoded text** remains in components

## 🎯 Translation Key Naming Conventions

### Structure Patterns:
```
{feature}.{section}.{element}
```

### Examples:
```json
{
  "hero": {
    "title": "...",
    "subtitle": "...",
    "cta": {
      "primary": "...",
      "secondary": "..."
    }
  },
  "features": {
    "title": "...",
    "items": [...],
    "benefits": {
      "title": "...",
      "items": [...]
    }
  },
  "contact": {
    "form": {
      "title": "...",
      "fields": {
        "name": "...",
        "email": "...",
        "message": "..."
      },
      "button": "...",
      "success": "...",
      "error": "..."
    }
  }
}
```

## 🚨 CRITICAL VALIDATION RULES

### 1. NO HARDCODED TEXT
```typescript
// ❌ WRONG - Hardcoded text
<h1>Welcome to NEWCODE</h1>
<p>Master agentic development</p>

// ✅ CORRECT - Translated text  
<h1>{t('hero.title')}</h1>
<p>{t('hero.subtitle')}</p>
```

### 2. CONSISTENT KEY STRUCTURE
```json
// ❌ WRONG - Inconsistent structure
{
  "title1": "...",
  "description_text": "...",
  "buttonLabel": "..."
}

// ✅ CORRECT - Consistent nested structure
{
  "section": {
    "title": "...",
    "description": "...",
    "cta": {
      "button": "..."
    }
  }
}
```

### 3. BOTH LOCALES REQUIRED
```json
// ❌ WRONG - Only French
// fr.json: { "new_feature": { "title": "Nouvelle Fonctionnalité" } }
// en.json: { /* missing new_feature */ }

// ✅ CORRECT - Both locales
// fr.json: { "new_feature": { "title": "Nouvelle Fonctionnalité" } }
// en.json: { "new_feature": { "title": "New Feature" } }
```

## 🔄 Workflow for Adding New Content

### Step 1: Plan Translation Structure
```json
// Define in advance what keys you need
{
  "new_section": {
    "title": "",
    "description": "", 
    "features": {
      "title": "",
      "items": ["", "", ""]
    },
    "cta": {
      "button": "",
      "link": ""
    }
  }
}
```

### Step 2: Add to Both Translation Files
```bash
# Edit both files simultaneously
src/messages/fr.json  # Add French translations
src/messages/en.json  # Add English translations
```

### Step 3: Implement in Component
```typescript
import { useTranslations } from 'next-intl';

const NewComponent = () => {
  const t = useTranslations('new_section');
  
  return (
    <section>
      <h2>{t('title')}</h2>
      <p>{t('description')}</p>
      <div>
        <h3>{t('features.title')}</h3>
        <ul>
          {[0, 1, 2].map(index => (
            <li key={index}>{t(`features.items.${index}`)}</li>
          ))}
        </ul>
      </div>
      <button>{t('cta.button')}</button>
    </section>
  );
};
```

### Step 4: Test Both Locales
```bash
# Test French (default)
http://localhost:3000/fr/page

# Test English  
http://localhost:3000/en/page
```

## 📝 Translation Quality Standards

### French Translations (Primary)
- Use proper French business terminology
- Maintain professional tone ("vous" form)
- Follow Quebec French conventions when applicable
- Technical terms: prefer French when available, English when standard

### English Translations (Secondary)  
- Use professional business English
- American English spelling conventions
- Technical accuracy over literal translation
- Maintain brand voice consistency

## 🛠 Tools and Helpers

### Translation Hook Examples
```typescript
// Basic usage
const t = useTranslations('section');

// With type safety (recommended)
const t = useTranslations('section') as (key: string) => string;

// Server component usage
const t = await getTranslations('section');

// Multiple sections in one component
const heroT = useTranslations('hero');
const ctaT = useTranslations('cta');
```

### Debugging Missing Translations
```typescript
// Add fallback for missing keys
{t('possibly.missing.key') || 'Fallback text'}

// Console log for debugging
console.log('Translation key:', t('debug.key'));
```

## 🚀 ENFORCEMENT

**This is MANDATORY, not optional:**

1. **Pull Request Reviews**: No PR approved without complete translations
2. **Build Process**: Consider adding translation validation
3. **Component Creation**: Always include translation planning
4. **Code Reviews**: Check for hardcoded text in every review

## 📚 Examples from Existing Codebase

### Good Translation Implementation:
```typescript
// From CTASection.tsx
const t = useTranslations('cta');

return (
  <section>
    <h2>{t('title')}</h2>
    <p>{t('subtitle')}</p>
    <Button>{t('button')}</Button>
  </section>
);
```

### Translation File Structure:
```json
// fr.json
{
  "cta": {
    "title": "Prêt à vous formez?",
    "subtitle": "Évaluation gratuite adaptée à votre profil.",
    "button": "Réserver Évaluation Gratuite"
  }
}

// en.json  
{
  "cta": {
    "title": "Ready to get trained?",
    "subtitle": "Free assessment tailored to your profile.", 
    "button": "Book Free Assessment"
  }
}
```

---

**Remember: Every line of user-facing text must be translatable. French and English support is not optional—it's a core requirement of the NEWCODE platform.**