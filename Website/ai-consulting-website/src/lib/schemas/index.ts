// Export all schemas
export * from './formation'
export * from './auth'
export * from './formation.en'
export * from './auth.en'
export * from './locale'

// Schema validation utility functions
export type ValidationError = {
  field: string
  message: string
}

export const formatZodErrors = (errors: any[]): ValidationError[] => {
  return errors.map(error => ({
    field: error.path.join('.'),
    message: error.message
  }))
}

// Common validation patterns
export const PHONE_REGEX = /^(\+1[-.\s]?)?\(?([0-9]{3})\)?[-.\s]?([0-9]{3})[-.\s]?([0-9]{4})$/
export const PASSWORD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/
export const NAME_REGEX = /^[a-zA-ZÀ-ÿ\s-]+$/

// Validation helper functions
export const validateCanadianPhone = (phone: string): boolean => {
  return PHONE_REGEX.test(phone)
}

export const validateStrongPassword = (password: string): boolean => {
  return password.length >= 8 && PASSWORD_REGEX.test(password)
}

export const validateName = (name: string): boolean => {
  return name.length >= 2 && name.length <= 50 && NAME_REGEX.test(name)
}

// React Hook Form integration helpers
export type FormFieldError = {
  type: string
  message: string
}

export const mapZodErrorsToFormErrors = (errors: any[]): Record<string, FormFieldError> => {
  return errors.reduce((acc, error) => {
    const field = error.path.join('.')
    acc[field] = {
      type: 'validation',
      message: error.message
    }
    return acc
  }, {} as Record<string, FormFieldError>)
}