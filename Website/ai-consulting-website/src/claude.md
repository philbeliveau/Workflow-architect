# Translation Requirements - Source Code

## MANDATORY Translation Guidelines for Code Development

When working in the `src/` directory, you MUST follow these translation requirements:

### Content Localization Standards

#### 1. Component Text Content
- **All user-facing text must be externalized to translation files**
- Use `src/messages/fr.json` for French content (primary)
- Use `src/messages/en.json` for English content (secondary)
- Never hardcode text strings in components

#### 2. Translation Key Structure
```json
{
  "navigation": {
    "home": "Accueil",
    "about": "À propos"
  },
  "hero": {
    "title": "Transformez votre équipe avec la programmation agentique",
    "subtitle": "Formation professionnelle en développement par spécification"
  }
}
```

#### 3. Component Implementation
```tsx
import { useTranslations } from 'next-intl';

export function Component() {
  const t = useTranslations('section');
  
  return (
    <h1>{t('title')}</h1>
  );
}
```

### French-First Development Rules

1. **Create French content first** in `fr.json`
2. **Test functionality in French** before creating English version
3. **Validate business terminology** with Newcode's Quebec context
4. **Ensure technical accuracy** in both languages

### Code Comments and Documentation

- **Code comments**: Write in English (development standard)
- **Component documentation**: Include both languages when relevant
- **README files**: French-first approach

### File Naming Conventions

- Keep component file names in English (development standard)
- Use descriptive names that work in both languages
- Ensure folder structure supports i18n routing

### Quality Assurance for Developers

- Test all user flows in both French and English
- Verify translation keys exist for all user-facing text
- Ensure proper fallbacks for missing translations
- Validate form validation messages in both languages

---

**Remember**: This codebase serves a bilingual Canadian market. French content drives the user experience design, with English as a strategic secondary market.