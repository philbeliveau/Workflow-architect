import { 
  formationInquirySchema, 
  enterpriseContactSchema, 
  newsletterSchema, 
  contactSchema 
} from '@/lib/schemas/formation'

import {
  formationInquirySchemaEn,
  enterpriseContactSchemaEn,
  newsletterSchemaEn,
  contactSchemaEn
} from '@/lib/schemas/formation.en'

import { 
  getFormationInquirySchema,
  getEnterpriseContactSchema,
  getNewsletterSchema,
  getContactSchema
} from '@/lib/schemas/locale'

describe('Formation Inquiry Schema Validation', () => {
  const validFormationInquiry = {
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
    consent: true
  }

  it('validates correct formation inquiry data', () => {
    const result = formationInquirySchema.safeParse(validFormationInquiry)
    expect(result.success).toBe(true)
  })

  it('requires mandatory fields', () => {
    const invalidData = {
      name: 'Jean',
      // missing email
      formationType: 'kickstart' as const,
      consent: true
    }

    const result = formationInquirySchema.safeParse(invalidData)
    expect(result.success).toBe(false)
    if (!result.success) {
      expect(result.error.issues.some(issue => issue.path.includes('email'))).toBe(true)
    }
  })

  it('validates email format', () => {
    const invalidEmail = { ...validFormationInquiry, email: 'invalid-email' }
    const result = formationInquirySchema.safeParse(invalidEmail)
    expect(result.success).toBe(false)
  })

  it('validates Canadian phone number format', () => {
    const validPhones = ['+1-514-555-0123', '(514) 555-0123', '514.555.0123', '514 555 0123']
    const invalidPhones = ['123', '+33 1 23 45 67 89', '555-0123']

    validPhones.forEach(phone => {
      const data = { ...validFormationInquiry, phone }
      const result = formationInquirySchema.safeParse(data)
      expect(result.success).toBe(true)
    })

    invalidPhones.forEach(phone => {
      const data = { ...validFormationInquiry, phone }
      const result = formationInquirySchema.safeParse(data)
      expect(result.success).toBe(false)
    })
  })

  it('validates name length constraints', () => {
    const shortName = { ...validFormationInquiry, name: 'J' }
    const longName = { ...validFormationInquiry, name: 'A'.repeat(101) }

    expect(formationInquirySchema.safeParse(shortName).success).toBe(false)
    expect(formationInquirySchema.safeParse(longName).success).toBe(false)
  })

  it('validates goals description length', () => {
    const shortGoals = { ...validFormationInquiry, goals: 'Court' }
    const longGoals = { ...validFormationInquiry, goals: 'A'.repeat(1001) }

    expect(formationInquirySchema.safeParse(shortGoals).success).toBe(false)
    expect(formationInquirySchema.safeParse(longGoals).success).toBe(false)
  })

  it('requires consent to be true', () => {
    const noConsent = { ...validFormationInquiry, consent: false }
    const result = formationInquirySchema.safeParse(noConsent)
    expect(result.success).toBe(false)
  })
})

describe('Enterprise Contact Schema Validation', () => {
  const validEnterpriseContact = {
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
    newsletter: true
  }

  it('validates correct enterprise contact data', () => {
    const result = enterpriseContactSchema.safeParse(validEnterpriseContact)
    expect(result.success).toBe(true)
  })

  it('requires all mandatory enterprise fields', () => {
    const requiredFields = ['name', 'email', 'company', 'position', 'phone', 'companySize', 'industry', 'currentChallenges', 'projectScope', 'budget', 'timeline', 'preferredContact', 'consent']
    
    requiredFields.forEach(field => {
      const invalidData = { ...validEnterpriseContact }
      delete invalidData[field as keyof typeof invalidData]
      
      const result = enterpriseContactSchema.safeParse(invalidData)
      expect(result.success).toBe(false)
    })
  })

  it('validates current challenges description length', () => {
    const shortChallenges = { ...validEnterpriseContact, currentChallenges: 'Trop court' }
    const longChallenges = { ...validEnterpriseContact, currentChallenges: 'A'.repeat(1001) }

    expect(enterpriseContactSchema.safeParse(shortChallenges).success).toBe(false)
    expect(enterpriseContactSchema.safeParse(longChallenges).success).toBe(false)
  })

  it('validates enum fields', () => {
    const invalidCompanySize = { ...validEnterpriseContact, companySize: 'invalid-size' }
    const invalidProjectScope = { ...validEnterpriseContact, projectScope: 'invalid-scope' }
    const invalidBudget = { ...validEnterpriseContact, budget: 'invalid-budget' }

    expect(enterpriseContactSchema.safeParse(invalidCompanySize).success).toBe(false)
    expect(enterpriseContactSchema.safeParse(invalidProjectScope).success).toBe(false)
    expect(enterpriseContactSchema.safeParse(invalidBudget).success).toBe(false)
  })

  it('validates optional additional info length', () => {
    const longAdditionalInfo = { ...validEnterpriseContact, additionalInfo: 'A'.repeat(501) }
    expect(enterpriseContactSchema.safeParse(longAdditionalInfo).success).toBe(false)

    const validAdditionalInfo = { ...validEnterpriseContact, additionalInfo: 'A'.repeat(500) }
    expect(enterpriseContactSchema.safeParse(validAdditionalInfo).success).toBe(true)
  })
})

describe('Newsletter Schema Validation', () => {
  const validNewsletter = {
    email: 'user@example.com',
    firstName: 'Sophie',
    interests: ['kickstart', 'updates'] as const,
    consent: true
  }

  it('validates correct newsletter data', () => {
    const result = newsletterSchema.safeParse(validNewsletter)
    expect(result.success).toBe(true)
  })

  it('requires email and consent', () => {
    const noEmail = { ...validNewsletter, email: '' }
    const noConsent = { ...validNewsletter, consent: false }

    expect(newsletterSchema.safeParse(noEmail).success).toBe(false)
    expect(newsletterSchema.safeParse(noConsent).success).toBe(false)
  })

  it('validates interest options', () => {
    const validInterests = { ...validNewsletter, interests: ['kickstart', 'architecte', 'enterprise', 'updates'] }
    const invalidInterests = { ...validNewsletter, interests: ['invalid-interest'] }

    expect(newsletterSchema.safeParse(validInterests).success).toBe(true)
    expect(newsletterSchema.safeParse(invalidInterests).success).toBe(false)
  })
})

describe('Locale-specific Schema Selection', () => {
  it('returns French schemas for French locale', () => {
    expect(getFormationInquirySchema('fr')).toBe(formationInquirySchema)
    expect(getEnterpriseContactSchema('fr')).toBe(enterpriseContactSchema)
    expect(getNewsletterSchema('fr')).toBe(newsletterSchema)
    expect(getContactSchema('fr')).toBe(contactSchema)
  })

  it('returns English schemas for English locale', () => {
    expect(getFormationInquirySchema('en')).toBe(formationInquirySchemaEn)
    expect(getEnterpriseContactSchema('en')).toBe(enterpriseContactSchemaEn)
    expect(getNewsletterSchema('en')).toBe(newsletterSchemaEn)
    expect(getContactSchema('en')).toBe(contactSchemaEn)
  })

  it('French and English schemas have equivalent structure', () => {
    const frenchSchema = getFormationInquirySchema('fr')
    const englishSchema = getFormationInquirySchema('en')

    // Test that both schemas validate the same valid data structure
    const testData = {
      name: 'Test User',
      email: 'test@example.com',
      formationType: 'kickstart' as const,
      teamSize: '5 people',
      experience: 'beginner' as const,
      goals: 'Learn agentic programming for our team development',
      timeline: '1-month' as const,
      budget: '$10,000',
      consent: true
    }

    const frenchResult = frenchSchema.safeParse(testData)
    const englishResult = englishSchema.safeParse(testData)

    expect(frenchResult.success).toBe(englishResult.success)
  })
})