import { 
  registerSchema, 
  loginSchema, 
  passwordResetRequestSchema,
  passwordResetSchema,
  profileUpdateSchema,
  changePasswordSchema
} from '@/lib/schemas/auth'

import {
  registerSchemaEn,
  loginSchemaEn,
  passwordResetRequestSchemaEn,
  passwordResetSchemaEn,
  profileUpdateSchemaEn,
  changePasswordSchemaEn
} from '@/lib/schemas/auth.en'

import { 
  validateCanadianPhone,
  validateStrongPassword,
  validateName
} from '@/lib/schemas'

describe('Registration Schema Validation', () => {
  const validRegistration = {
    firstName: 'Jean',
    lastName: 'Dupont',
    email: 'jean.dupont@example.com',
    password: 'SecureP@ssw0rd',
    confirmPassword: 'SecureP@ssw0rd',
    company: 'TechCorp Inc.',
    position: 'Développeur Full-Stack',
    phone: '+1-514-555-0123',
    acceptTerms: true,
    acceptMarketing: false
  }

  it('validates correct registration data', () => {
    const result = registerSchema.safeParse(validRegistration)
    expect(result.success).toBe(true)
  })

  it('requires mandatory fields', () => {
    const requiredFields = ['firstName', 'lastName', 'email', 'password', 'confirmPassword', 'acceptTerms']
    
    requiredFields.forEach(field => {
      const invalidData = { ...validRegistration }
      delete invalidData[field as keyof typeof invalidData]
      
      const result = registerSchema.safeParse(invalidData)
      expect(result.success).toBe(false)
    })
  })

  it('validates password strength requirements', () => {
    const weakPasswords = [
      'password', // no uppercase, no special char, no number
      'PASSWORD', // no lowercase, no special char, no number
      'Password', // no special char, no number
      'Passw0rd', // no special char
      'P@ssw0rd', // too short (7 chars)
      '12345678', // no letters, no special char
    ]

    weakPasswords.forEach(password => {
      const data = { ...validRegistration, password, confirmPassword: password }
      const result = registerSchema.safeParse(data)
      expect(result.success).toBe(false)
    })
  })

  it('validates password confirmation match', () => {
    const mismatchPassword = { 
      ...validRegistration, 
      password: 'SecureP@ssw0rd',
      confirmPassword: 'DifferentP@ssw0rd'
    }
    
    const result = registerSchema.safeParse(mismatchPassword)
    expect(result.success).toBe(false)
    if (!result.success) {
      expect(result.error.issues.some(issue => issue.path.includes('confirmPassword'))).toBe(true)
    }
  })

  it('validates name format (letters, spaces, hyphens only)', () => {
    const invalidNames = ['Jean123', 'Jean@email', 'Jean_Dupont', 'J']
    
    invalidNames.forEach(firstName => {
      const data = { ...validRegistration, firstName }
      const result = registerSchema.safeParse(data)
      expect(result.success).toBe(false)
    })
  })

  it('validates email format', () => {
    const invalidEmails = ['invalid-email', '@example.com', 'user@', 'user@.com']
    
    invalidEmails.forEach(email => {
      const data = { ...validRegistration, email }
      const result = registerSchema.safeParse(data)
      expect(result.success).toBe(false)
    })
  })

  it('requires acceptTerms to be true', () => {
    const noTermsAcceptance = { ...validRegistration, acceptTerms: false }
    const result = registerSchema.safeParse(noTermsAcceptance)
    expect(result.success).toBe(false)
  })

  it('allows optional fields to be empty', () => {
    const minimalData = {
      firstName: 'Jean',
      lastName: 'Dupont',
      email: 'jean.dupont@example.com',
      password: 'SecureP@ssw0rd',
      confirmPassword: 'SecureP@ssw0rd',
      acceptTerms: true
    }
    
    const result = registerSchema.safeParse(minimalData)
    expect(result.success).toBe(true)
  })
})

describe('Login Schema Validation', () => {
  const validLogin = {
    email: 'user@example.com',
    password: 'password123',
    rememberMe: true
  }

  it('validates correct login data', () => {
    const result = loginSchema.safeParse(validLogin)
    expect(result.success).toBe(true)
  })

  it('requires email and password', () => {
    const noEmail = { password: 'password123' }
    const noPassword = { email: 'user@example.com' }

    expect(loginSchema.safeParse(noEmail).success).toBe(false)
    expect(loginSchema.safeParse(noPassword).success).toBe(false)
  })

  it('validates email format', () => {
    const invalidEmail = { ...validLogin, email: 'invalid-email' }
    const result = loginSchema.safeParse(invalidEmail)
    expect(result.success).toBe(false)
  })

  it('allows rememberMe to be optional', () => {
    const withoutRememberMe = {
      email: 'user@example.com',
      password: 'password123'
    }
    
    const result = loginSchema.safeParse(withoutRememberMe)
    expect(result.success).toBe(true)
  })
})

describe('Password Reset Schema Validation', () => {
  it('validates password reset request', () => {
    const validRequest = { email: 'user@example.com' }
    const result = passwordResetRequestSchema.safeParse(validRequest)
    expect(result.success).toBe(true)
  })

  it('validates password reset with token', () => {
    const validReset = {
      token: 'valid-reset-token-123',
      password: 'NewSecureP@ssw0rd',
      confirmPassword: 'NewSecureP@ssw0rd'
    }
    
    const result = passwordResetSchema.safeParse(validReset)
    expect(result.success).toBe(true)
  })

  it('requires password confirmation match in reset', () => {
    const mismatchReset = {
      token: 'valid-token',
      password: 'NewSecureP@ssw0rd',
      confirmPassword: 'DifferentP@ssw0rd'
    }
    
    const result = passwordResetSchema.safeParse(mismatchReset)
    expect(result.success).toBe(false)
  })
})

describe('Profile Update Schema Validation', () => {
  const validProfile = {
    firstName: 'Jean',
    lastName: 'Dupont',
    company: 'TechCorp Inc.',
    position: 'CTO',
    phone: '+1-514-555-0123',
    bio: 'Passionate about technology and innovation.',
    website: 'https://jeandupont.ca',
    linkedin: 'https://linkedin.com/in/jeandupont',
    notifications: {
      email: true,
      push: false,
      marketing: true
    }
  }

  it('validates correct profile data', () => {
    const result = profileUpdateSchema.safeParse(validProfile)
    expect(result.success).toBe(true)
  })

  it('validates URL formats', () => {
    const invalidUrls = ['not-a-url', 'ftp://example.com', 'just-text']
    
    invalidUrls.forEach(website => {
      const data = { ...validProfile, website }
      const result = profileUpdateSchema.safeParse(data)
      expect(result.success).toBe(false)
    })
  })

  it('validates bio length limit', () => {
    const longBio = { ...validProfile, bio: 'A'.repeat(501) }
    const result = profileUpdateSchema.safeParse(longBio)
    expect(result.success).toBe(false)
  })

  it('allows all fields to be optional except names', () => {
    const minimalProfile = {
      firstName: 'Jean',
      lastName: 'Dupont'
    }
    
    const result = profileUpdateSchema.safeParse(minimalProfile)
    expect(result.success).toBe(true)
  })
})

describe('Change Password Schema Validation', () => {
  const validPasswordChange = {
    currentPassword: 'OldP@ssw0rd',
    newPassword: 'NewSecureP@ssw0rd',
    confirmNewPassword: 'NewSecureP@ssw0rd'
  }

  it('validates correct password change data', () => {
    const result = changePasswordSchema.safeParse(validPasswordChange)
    expect(result.success).toBe(true)
  })

  it('requires all password fields', () => {
    const requiredFields = ['currentPassword', 'newPassword', 'confirmNewPassword']
    
    requiredFields.forEach(field => {
      const invalidData = { ...validPasswordChange }
      delete invalidData[field as keyof typeof invalidData]
      
      const result = changePasswordSchema.safeParse(invalidData)
      expect(result.success).toBe(false)
    })
  })

  it('validates new password confirmation match', () => {
    const mismatchConfirm = {
      ...validPasswordChange,
      confirmNewPassword: 'DifferentP@ssw0rd'
    }
    
    const result = changePasswordSchema.safeParse(mismatchConfirm)
    expect(result.success).toBe(false)
  })

  it('requires new password to be different from current', () => {
    const samePassword = {
      currentPassword: 'SameP@ssw0rd',
      newPassword: 'SameP@ssw0rd',
      confirmNewPassword: 'SameP@ssw0rd'
    }
    
    const result = changePasswordSchema.safeParse(samePassword)
    expect(result.success).toBe(false)
  })
})

describe('Validation Helper Functions', () => {
  describe('validateCanadianPhone', () => {
    it('validates Canadian phone number formats', () => {
      const validPhones = [
        '+1-514-555-0123',
        '(514) 555-0123',
        '514.555.0123',
        '514 555 0123',
        '5145550123'
      ]

      const invalidPhones = [
        '123',
        '+33 1 23 45 67 89',
        '555-0123',
        'not-a-phone'
      ]

      validPhones.forEach(phone => {
        expect(validateCanadianPhone(phone)).toBe(true)
      })

      invalidPhones.forEach(phone => {
        expect(validateCanadianPhone(phone)).toBe(false)
      })
    })
  })

  describe('validateStrongPassword', () => {
    it('validates strong password requirements', () => {
      const strongPasswords = [
        'SecureP@ssw0rd',
        'MyStr0ng!Pass',
        'C0mpl3x&Secure'
      ]

      const weakPasswords = [
        'password',
        'PASSWORD',
        'Password',
        'P@ssw0rd', // too short
        '12345678',
        'Passw0rd' // no special char
      ]

      strongPasswords.forEach(password => {
        expect(validateStrongPassword(password)).toBe(true)
      })

      weakPasswords.forEach(password => {
        expect(validateStrongPassword(password)).toBe(false)
      })
    })
  })

  describe('validateName', () => {
    it('validates name format and length', () => {
      const validNames = [
        'Jean',
        'Marie-Claire',
        'Jean-Baptiste',
        'O\'Connor',
        'José María'
      ]

      const invalidNames = [
        'J', // too short
        'A'.repeat(51), // too long
        'Jean123', // contains numbers
        'Jean@email', // contains special chars
        'Jean_Dupont' // contains underscore
      ]

      validNames.forEach(name => {
        expect(validateName(name)).toBe(true)
      })

      invalidNames.forEach(name => {
        expect(validateName(name)).toBe(false)
      })
    })
  })
})