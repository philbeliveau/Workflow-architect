import { z } from 'zod'

// User Registration Schema (English)
export const registerSchemaEn = z.object({
  firstName: z
    .string()
    .min(2, 'First name must be at least 2 characters long')
    .max(50, 'First name cannot exceed 50 characters')
    .regex(/^[a-zA-ZÀ-ÿ\s-]+$/, 'First name can only contain letters, spaces, and hyphens'),
  
  lastName: z
    .string()
    .min(2, 'Last name must be at least 2 characters long')
    .max(50, 'Last name cannot exceed 50 characters')
    .regex(/^[a-zA-ZÀ-ÿ\s-]+$/, 'Last name can only contain letters, spaces, and hyphens'),
  
  email: z
    .string()
    .email('Please enter a valid email address')
    .min(1, 'Email is required')
    .max(100, 'Email cannot exceed 100 characters')
    .toLowerCase(),
  
  password: z
    .string()
    .min(8, 'Password must be at least 8 characters long')
    .max(100, 'Password cannot exceed 100 characters')
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/,
      'Password must contain at least one lowercase letter, one uppercase letter, one number, and one special character'
    ),
  
  confirmPassword: z
    .string()
    .min(1, 'Please confirm your password'),
  
  company: z
    .string()
    .min(2, 'Company name must be at least 2 characters long')
    .max(100, 'Company name cannot exceed 100 characters')
    .optional(),
  
  position: z
    .string()
    .min(2, 'Position must be at least 2 characters long')
    .max(100, 'Position cannot exceed 100 characters')
    .optional(),
  
  phone: z
    .string()
    .regex(
      /^(\+1[-.\s]?)?\(?([0-9]{3})\)?[-.\s]?([0-9]{3})[-.\s]?([0-9]{4})$/,
      'Please enter a valid phone number (Canadian format)'
    )
    .optional(),
  
  acceptTerms: z
    .boolean()
    .refine(val => val === true, 'You must accept the terms of use'),
  
  acceptMarketing: z
    .boolean()
    .optional()
}).refine((data) => data.password === data.confirmPassword, {
  message: 'Passwords do not match',
  path: ['confirmPassword']
})

export type RegisterEn = z.infer<typeof registerSchemaEn>

// User Login Schema (English)
export const loginSchemaEn = z.object({
  email: z
    .string()
    .email('Please enter a valid email address')
    .min(1, 'Email is required')
    .toLowerCase(),
  
  password: z
    .string()
    .min(1, 'Password is required'),
  
  rememberMe: z
    .boolean()
    .optional()
})

export type LoginEn = z.infer<typeof loginSchemaEn>

// Password Reset Request Schema (English)
export const passwordResetRequestSchemaEn = z.object({
  email: z
    .string()
    .email('Please enter a valid email address')
    .min(1, 'Email is required')
    .toLowerCase()
})

export type PasswordResetRequestEn = z.infer<typeof passwordResetRequestSchemaEn>

// Password Reset Schema (English)
export const passwordResetSchemaEn = z.object({
  token: z
    .string()
    .min(1, 'Token is required'),
  
  password: z
    .string()
    .min(8, 'Password must be at least 8 characters long')
    .max(100, 'Password cannot exceed 100 characters')
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/,
      'Password must contain at least one lowercase letter, one uppercase letter, one number, and one special character'
    ),
  
  confirmPassword: z
    .string()
    .min(1, 'Please confirm your password')
}).refine((data) => data.password === data.confirmPassword, {
  message: 'Passwords do not match',
  path: ['confirmPassword']
})

export type PasswordResetEn = z.infer<typeof passwordResetSchemaEn>

// Profile Update Schema (English)
export const profileUpdateSchemaEn = z.object({
  firstName: z
    .string()
    .min(2, 'First name must be at least 2 characters long')
    .max(50, 'First name cannot exceed 50 characters')
    .regex(/^[a-zA-ZÀ-ÿ\s-]+$/, 'First name can only contain letters, spaces, and hyphens'),
  
  lastName: z
    .string()
    .min(2, 'Last name must be at least 2 characters long')
    .max(50, 'Last name cannot exceed 50 characters')
    .regex(/^[a-zA-ZÀ-ÿ\s-]+$/, 'Last name can only contain letters, spaces, and hyphens'),
  
  company: z
    .string()
    .min(2, 'Company name must be at least 2 characters long')
    .max(100, 'Company name cannot exceed 100 characters')
    .optional(),
  
  position: z
    .string()
    .min(2, 'Position must be at least 2 characters long')
    .max(100, 'Position cannot exceed 100 characters')
    .optional(),
  
  phone: z
    .string()
    .regex(
      /^(\+1[-.\s]?)?\(?([0-9]{3})\)?[-.\s]?([0-9]{3})[-.\s]?([0-9]{4})$/,
      'Please enter a valid phone number (Canadian format)'
    )
    .optional(),
  
  bio: z
    .string()
    .max(500, 'Bio cannot exceed 500 characters')
    .optional(),
  
  website: z
    .string()
    .url('Please enter a valid URL')
    .optional(),
  
  linkedin: z
    .string()
    .url('Please enter a valid LinkedIn URL')
    .optional(),
  
  notifications: z.object({
    email: z.boolean().optional(),
    push: z.boolean().optional(),
    marketing: z.boolean().optional()
  }).optional()
})

export type ProfileUpdateEn = z.infer<typeof profileUpdateSchemaEn>

// Change Password Schema (English)
export const changePasswordSchemaEn = z.object({
  currentPassword: z
    .string()
    .min(1, 'Current password is required'),
  
  newPassword: z
    .string()
    .min(8, 'New password must be at least 8 characters long')
    .max(100, 'Password cannot exceed 100 characters')
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/,
      'Password must contain at least one lowercase letter, one uppercase letter, one number, and one special character'
    ),
  
  confirmNewPassword: z
    .string()
    .min(1, 'Please confirm the new password')
}).refine((data) => data.newPassword === data.confirmNewPassword, {
  message: 'New passwords do not match',
  path: ['confirmNewPassword']
}).refine((data) => data.currentPassword !== data.newPassword, {
  message: 'New password must be different from the current password',
  path: ['newPassword']
})

export type ChangePasswordEn = z.infer<typeof changePasswordSchemaEn>