import React, { ReactElement } from 'react'
import { render, RenderOptions } from '@testing-library/react'
import { NextIntlProvider } from 'next-intl'

// Mock messages for testing
const mockMessages = {
  fr: {
    formation_architecte: {
      hero: {
        title: 'Formation Architecte IA Avancée',
        title_highlight: 'Maîtrisez l\'Enterprise',
        subtitle: 'Formation professionnelle pour CTOs et équipes techniques',
        duration: 'heures de formation intensive',
        level: 'Niveau Expert',
        online: 'Formation en ligne',
        cta_primary: 'Commencer maintenant',
        cta_secondary: 'En savoir plus'
      },
      curriculum: {
        title: 'Programme de Formation Expert',
        subtitle: 'Six modules avancés pour transformer votre organisation',
        module: 'Module',
        learning_objectives: 'Objectifs d\'apprentissage',
        key_topics: 'Sujets clés'
      },
      navigation: {
        home: 'Accueil',
        formation: 'Formation',
        current: 'Architecte IA'
      }
    },
    forms: {
      enterprise_contact: {
        badge: 'Contact Enterprise',
        title: 'Parlons de votre projet',
        subtitle: 'Nos experts vous contactent sous 24h',
        fields: {
          name: {
            label: 'Nom complet',
            placeholder: 'Votre nom complet'
          },
          email: {
            label: 'Adresse email',
            placeholder: 'votre.email@entreprise.com'
          },
          company: {
            label: 'Entreprise',
            placeholder: 'Nom de votre entreprise'
          },
          position: {
            label: 'Poste',
            placeholder: 'Votre titre/poste'
          },
          phone: {
            label: 'Téléphone',
            placeholder: '+1 (514) 555-0123'
          },
          company_size: {
            label: 'Taille de l\'entreprise',
            placeholder: 'Sélectionnez la taille',
            options: {
              small: '5-20 employés',
              medium: '21-50 employés',
              large: '51-200 employés',
              enterprise: '200+ employés'
            }
          },
          industry: {
            label: 'Secteur d\'activité',
            placeholder: 'Votre secteur d\'activité'
          },
          current_challenges: {
            label: 'Défis actuels',
            placeholder: 'Décrivez vos principaux défis technologiques'
          },
          project_scope: {
            label: 'Portée du projet',
            placeholder: 'Sélectionnez la portée',
            options: {
              pilot: 'Projet pilote',
              department: 'Département',
              organization: 'Organisation complète'
            }
          },
          budget: {
            label: 'Budget approximatif',
            placeholder: 'Sélectionnez votre budget',
            options: {
              tier1: '10k$ - 25k$',
              tier2: '25k$ - 50k$',
              tier3: '50k$ - 100k$',
              tier4: '100k$+'
            }
          },
          timeline: {
            label: 'Échéancier',
            placeholder: 'Sélectionnez l\'échéancier',
            options: {
              immediate: 'Immédiat',
              month1: '1 mois',
              month3: '3 mois',
              month6: '6 mois'
            }
          },
          preferred_contact: {
            label: 'Méthode de contact préférée',
            options: {
              email: 'Email',
              phone: 'Téléphone',
              video: 'Appel vidéo'
            }
          },
          additional_info: {
            label: 'Informations supplémentaires',
            placeholder: 'Autres détails importants...'
          },
          consent: {
            label: 'J\'accepte les conditions d\'utilisation'
          },
          newsletter: {
            label: 'Je souhaite recevoir les actualités Newcode'
          }
        },
        submit: 'Envoyer la demande',
        submitting: 'Envoi en cours...'
      }
    },
    common: {
      open: 'Ouvrir',
      close: 'Fermer'
    }
  },
  en: {
    formation_architecte: {
      hero: {
        title: 'Advanced AI Architect Training',
        title_highlight: 'Master Enterprise',
        subtitle: 'Professional training for CTOs and technical teams',
        duration: 'hours of intensive training',
        level: 'Expert Level',
        online: 'Online Training',
        cta_primary: 'Start Now',
        cta_secondary: 'Learn More'
      },
      curriculum: {
        title: 'Expert Training Program',
        subtitle: 'Six advanced modules to transform your organization',
        module: 'Module',
        learning_objectives: 'Learning Objectives',
        key_topics: 'Key Topics'
      },
      navigation: {
        home: 'Home',
        formation: 'Training',
        current: 'AI Architect'
      }
    },
    forms: {
      enterprise_contact: {
        badge: 'Enterprise Contact',
        title: 'Let\'s discuss your project',
        subtitle: 'Our experts will contact you within 24h',
        fields: {
          name: {
            label: 'Full Name',
            placeholder: 'Your full name'
          },
          email: {
            label: 'Email Address',
            placeholder: 'your.email@company.com'
          },
          company: {
            label: 'Company',
            placeholder: 'Your company name'
          },
          position: {
            label: 'Position',
            placeholder: 'Your title/position'
          },
          phone: {
            label: 'Phone',
            placeholder: '+1 (514) 555-0123'
          },
          company_size: {
            label: 'Company Size',
            placeholder: 'Select company size',
            options: {
              small: '5-20 employees',
              medium: '21-50 employees',
              large: '51-200 employees',
              enterprise: '200+ employees'
            }
          },
          industry: {
            label: 'Industry',
            placeholder: 'Your industry'
          },
          current_challenges: {
            label: 'Current Challenges',
            placeholder: 'Describe your main technical challenges'
          },
          project_scope: {
            label: 'Project Scope',
            placeholder: 'Select project scope',
            options: {
              pilot: 'Pilot project',
              department: 'Department',
              organization: 'Full organization'
            }
          },
          budget: {
            label: 'Approximate Budget',
            placeholder: 'Select your budget',
            options: {
              tier1: '$10k - $25k',
              tier2: '$25k - $50k',
              tier3: '$50k - $100k',
              tier4: '$100k+'
            }
          },
          timeline: {
            label: 'Timeline',
            placeholder: 'Select timeline',
            options: {
              immediate: 'Immediate',
              month1: '1 month',
              month3: '3 months',
              month6: '6 months'
            }
          },
          preferred_contact: {
            label: 'Preferred Contact Method',
            options: {
              email: 'Email',
              phone: 'Phone',
              video: 'Video call'
            }
          },
          additional_info: {
            label: 'Additional Information',
            placeholder: 'Other important details...'
          },
          consent: {
            label: 'I accept the terms of use'
          },
          newsletter: {
            label: 'I want to receive Newcode updates'
          }
        },
        submit: 'Send Request',
        submitting: 'Sending...'
      }
    },
    common: {
      open: 'Open',
      close: 'Close'
    }
  }
}

interface CustomRenderOptions extends Omit<RenderOptions, 'wrapper'> {
  locale?: 'fr' | 'en'
}

function createWrapper(locale: 'fr' | 'en' = 'fr') {
  return function Wrapper({ children }: { children: React.ReactNode }) {
    return (
      <NextIntlProvider 
        locale={locale} 
        messages={mockMessages[locale]}
        timeZone="America/Toronto"
      >
        {children}
      </NextIntlProvider>
    )
  }
}

function customRender(
  ui: ReactElement,
  { locale = 'fr', ...options }: CustomRenderOptions = {}
) {
  return render(ui, {
    wrapper: createWrapper(locale),
    ...options,
  })
}

// Test data factories
export const createMockFormationInquiry = (overrides = {}) => ({
  name: 'Jean Dupont',
  email: 'jean.dupont@example.com',
  company: 'TechCorp Inc.',
  position: 'CTO',
  phone: '+1-514-555-0123',
  formationType: 'architecte' as const,
  teamSize: '10-15 personnes',
  experience: 'intermediate' as const,
  goals: 'Améliorer la productivité de notre équipe de développement avec l\'IA',
  timeline: '3-months' as const,
  budget: '50,000$ - 100,000$',
  source: 'Recherche Google',
  consent: true,
  ...overrides
})

export const createMockEnterpriseContact = (overrides = {}) => ({
  name: 'Marie Tremblay',
  email: 'marie.tremblay@enterprise.com',
  company: 'Enterprise Solutions Inc.',
  position: 'VP Technology',
  phone: '+1-416-555-9876',
  companySize: '51-200' as const,
  industry: 'Technologie financière',
  currentChallenges: 'Notre équipe perd beaucoup de temps sur des tâches répétitives qui pourraient être automatisées.',
  projectScope: 'organization' as const,
  budget: '100k+' as const,
  timeline: '6-months' as const,
  preferredContact: 'video-call' as const,
  additionalInfo: 'Nous aimerions discuter d\'une approche progressive.',
  consent: true,
  newsletter: true,
  ...overrides
})

export const createMockUser = (overrides = {}) => ({
  firstName: 'Jean',
  lastName: 'Dupont',
  email: 'jean.dupont@example.com',
  company: 'TechCorp Inc.',
  position: 'Développeur Full-Stack',
  phone: '+1-514-555-0123',
  ...overrides
})

// Re-export everything
export * from '@testing-library/react'
export { customRender as render }
export { mockMessages }