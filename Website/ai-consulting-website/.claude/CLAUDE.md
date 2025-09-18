# NEWCODE Website Development Guidelines

## 🌐 MANDATORY FRENCH/ENGLISH TRANSLATIONS

**CRITICAL REQUIREMENT**: Every new functionality, component, page, or piece of content MUST implement both French and English translations before deployment.

### Quick Reference
- **Primary Language**: French (`fr`) - DEFAULT
- **Secondary Language**: English (`en`) - REQUIRED
- **Translation Files**: `src/messages/fr.json` and `src/messages/en.json`
- **Validation**: `npm run validate-translations`

### Implementation Checklist
Before creating ANY new component or functionality:

1. **✅ Plan translation keys** following existing nested structure
2. **✅ Add to `fr.json`** (primary translations)
3. **✅ Add to `en.json`** (secondary translations)
4. **✅ Use translation hooks** (`useTranslations()` or `getTranslations()`)
5. **✅ Test both locales** (`/fr/page` and `/en/page`)
6. **✅ Run validation** (`npm run validate-translations`)

### Translation Patterns

```typescript
// Client Components
import { useTranslations } from 'next-intl';
const t = useTranslations('section');

// Server Components  
import { getTranslations } from 'next-intl/server';
const t = await getTranslations('section');

// Usage
<h1>{t('title')}</h1>
<p>{t('description')}</p>
```

### Translation Structure
```json
{
  "feature": {
    "title": "Feature Title",
    "description": "Feature Description", 
    "subsection": {
      "title": "Subsection Title",
      "items": ["Item 1", "Item 2", "Item 3"]
    },
    "cta": {
      "primary": "Primary Button",
      "secondary": "Secondary Button"
    }
  }
}
```

## 🚨 ENFORCEMENT RULES

### Prohibited Practices
- ❌ **No hardcoded text** in components
- ❌ **No single-language implementations**
- ❌ **No English-only content**
- ❌ **No untranslated error messages**

### Required Practices  
- ✅ **All user-facing text must use translation keys**
- ✅ **Both French and English must be complete**
- ✅ **Validation must pass before commits**
- ✅ **New features require translation planning**

### Validation Commands
```bash
# Check translation completeness
npm run validate-translations

# Pre-commit checks (includes translation validation)
npm run pre-commit

# Development with real-time locale testing
npm run dev
# Test: http://localhost:3000/fr/page
# Test: http://localhost:3000/en/page
```

## 📁 Project Structure

```
src/
├── messages/           # Translation files
│   ├── fr.json        # French (primary)
│   └── en.json        # English (secondary)
├── i18n/
│   └── request.ts     # i18n configuration
├── app/[locale]/      # Locale-based routing
└── components/        # All components must support i18n
```

## 🔄 Development Workflow

### For New Features:
1. **Design translation structure first**
2. **Add keys to both `fr.json` and `en.json`**
3. **Implement component with translation hooks**
4. **Test both locales thoroughly**
5. **Run `npm run validate-translations`**
6. **Ensure no hardcoded text remains**

### For Content Updates:
1. **Update both language files simultaneously**
2. **Maintain consistent key structure**
3. **Preserve existing translation patterns**
4. **Validate after changes**

## 📚 Detailed Guidelines

For comprehensive translation implementation guidelines, see:
**`.claude/translation-guidelines.md`**

This document contains:
- Complete implementation patterns
- Translation quality standards
- Debugging techniques
- Advanced use cases
- Code examples from existing codebase

## 🛠 Tools & Scripts

- **`npm run validate-translations`** - Check translation completeness
- **`npm run pre-commit`** - Full validation before commits
- **`.claude/validate-translations.js`** - Validation script source

## 🎯 Success Metrics

- ✅ **295 translation keys** currently managed
- ✅ **100% parity** between French and English
- ✅ **Zero hardcoded text** in components
- ✅ **Automated validation** prevents deployment issues

---

**Remember: French/English bilingual support is not optional—it's a core architectural requirement of the NEWCODE platform. Every feature must be accessible to both language communities from day one.**