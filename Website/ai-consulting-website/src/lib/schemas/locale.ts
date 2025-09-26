import { 
  formationInquirySchema, 
  enterpriseContactSchema, 
  newsletterSchema, 
  contactSchema 
} from './formation'

import { 
  formationInquirySchemaEn, 
  enterpriseContactSchemaEn, 
  newsletterSchemaEn, 
  contactSchemaEn 
} from './formation.en'

import { 
  registerSchema, 
  loginSchema, 
  passwordResetRequestSchema, 
  passwordResetSchema, 
  profileUpdateSchema, 
  changePasswordSchema 
} from './auth'

import { 
  registerSchemaEn, 
  loginSchemaEn, 
  passwordResetRequestSchemaEn, 
  passwordResetSchemaEn, 
  profileUpdateSchemaEn, 
  changePasswordSchemaEn 
} from './auth.en'

type Locale = 'fr' | 'en'

// Formation schemas by locale
export const getFormationInquirySchema = (locale: Locale) => {
  return locale === 'fr' ? formationInquirySchema : formationInquirySchemaEn
}

export const getEnterpriseContactSchema = (locale: Locale) => {
  return locale === 'fr' ? enterpriseContactSchema : enterpriseContactSchemaEn
}

export const getNewsletterSchema = (locale: Locale) => {
  return locale === 'fr' ? newsletterSchema : newsletterSchemaEn
}

export const getContactSchema = (locale: Locale) => {
  return locale === 'fr' ? contactSchema : contactSchemaEn
}

// Auth schemas by locale
export const getRegisterSchema = (locale: Locale) => {
  return locale === 'fr' ? registerSchema : registerSchemaEn
}

export const getLoginSchema = (locale: Locale) => {
  return locale === 'fr' ? loginSchema : loginSchemaEn
}

export const getPasswordResetRequestSchema = (locale: Locale) => {
  return locale === 'fr' ? passwordResetRequestSchema : passwordResetRequestSchemaEn
}

export const getPasswordResetSchema = (locale: Locale) => {
  return locale === 'fr' ? passwordResetSchema : passwordResetSchemaEn
}

export const getProfileUpdateSchema = (locale: Locale) => {
  return locale === 'fr' ? profileUpdateSchema : profileUpdateSchemaEn
}

export const getChangePasswordSchema = (locale: Locale) => {
  return locale === 'fr' ? changePasswordSchema : changePasswordSchemaEn
}

// Schema registry for easy access
export const SCHEMAS = {
  fr: {
    formationInquiry: formationInquirySchema,
    enterpriseContact: enterpriseContactSchema,
    newsletter: newsletterSchema,
    contact: contactSchema,
    register: registerSchema,
    login: loginSchema,
    passwordResetRequest: passwordResetRequestSchema,
    passwordReset: passwordResetSchema,
    profileUpdate: profileUpdateSchema,
    changePassword: changePasswordSchema
  },
  en: {
    formationInquiry: formationInquirySchemaEn,
    enterpriseContact: enterpriseContactSchemaEn,
    newsletter: newsletterSchemaEn,
    contact: contactSchemaEn,
    register: registerSchemaEn,
    login: loginSchemaEn,
    passwordResetRequest: passwordResetRequestSchemaEn,
    passwordReset: passwordResetSchemaEn,
    profileUpdate: profileUpdateSchemaEn,
    changePassword: changePasswordSchemaEn
  }
}

// Generic schema getter
export const getSchema = <T extends keyof typeof SCHEMAS.fr>(
  schemaName: T,
  locale: Locale
) => {
  return SCHEMAS[locale][schemaName]
}

// Validation error formatter with locale support
export const formatValidationErrors = (errors: any[], locale: Locale = 'fr') => {
  return errors.map(error => ({
    field: error.path.join('.'),
    message: error.message
  }))
}