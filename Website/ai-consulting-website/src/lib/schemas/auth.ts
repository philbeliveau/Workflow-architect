import { z } from 'zod'

// User Registration Schema
export const registerSchema = z.object({
  firstName: z
    .string()
    .min(2, 'Le prénom doit contenir au moins 2 caractères')
    .max(50, 'Le prénom ne peut pas dépasser 50 caractères')
    .regex(/^[a-zA-ZÀ-ÿ\s-]+$/, 'Le prénom ne peut contenir que des lettres, espaces et tirets'),
  
  lastName: z
    .string()
    .min(2, 'Le nom doit contenir au moins 2 caractères')
    .max(50, 'Le nom ne peut pas dépasser 50 caractères')
    .regex(/^[a-zA-ZÀ-ÿ\s-]+$/, 'Le nom ne peut contenir que des lettres, espaces et tirets'),
  
  email: z
    .string()
    .email('Veuillez entrer une adresse email valide')
    .min(1, 'L\'email est requis')
    .max(100, 'L\'email ne peut pas dépasser 100 caractères')
    .toLowerCase(),
  
  password: z
    .string()
    .min(8, 'Le mot de passe doit contenir au moins 8 caractères')
    .max(100, 'Le mot de passe ne peut pas dépasser 100 caractères')
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/,
      'Le mot de passe doit contenir au moins une minuscule, une majuscule, un chiffre et un caractère spécial'
    ),
  
  confirmPassword: z
    .string()
    .min(1, 'Veuillez confirmer votre mot de passe'),
  
  company: z
    .string()
    .min(2, 'Le nom de l\'entreprise doit contenir au moins 2 caractères')
    .max(100, 'Le nom de l\'entreprise ne peut pas dépasser 100 caractères')
    .optional(),
  
  position: z
    .string()
    .min(2, 'Le poste doit contenir au moins 2 caractères')
    .max(100, 'Le poste ne peut pas dépasser 100 caractères')
    .optional(),
  
  phone: z
    .string()
    .regex(
      /^(\+1[-.\s]?)?\(?([0-9]{3})\)?[-.\s]?([0-9]{3})[-.\s]?([0-9]{4})$/,
      'Veuillez entrer un numéro de téléphone valide (format canadien)'
    )
    .optional(),
  
  acceptTerms: z
    .boolean()
    .refine(val => val === true, 'Vous devez accepter les conditions d\'utilisation'),
  
  acceptMarketing: z
    .boolean()
    .optional()
}).refine((data) => data.password === data.confirmPassword, {
  message: 'Les mots de passe ne correspondent pas',
  path: ['confirmPassword']
})

export type Register = z.infer<typeof registerSchema>

// User Login Schema
export const loginSchema = z.object({
  email: z
    .string()
    .email('Veuillez entrer une adresse email valide')
    .min(1, 'L\'email est requis')
    .toLowerCase(),
  
  password: z
    .string()
    .min(1, 'Le mot de passe est requis'),
  
  rememberMe: z
    .boolean()
    .optional()
})

export type Login = z.infer<typeof loginSchema>

// Password Reset Request Schema
export const passwordResetRequestSchema = z.object({
  email: z
    .string()
    .email('Veuillez entrer une adresse email valide')
    .min(1, 'L\'email est requis')
    .toLowerCase()
})

export type PasswordResetRequest = z.infer<typeof passwordResetRequestSchema>

// Password Reset Schema
export const passwordResetSchema = z.object({
  token: z
    .string()
    .min(1, 'Le token est requis'),
  
  password: z
    .string()
    .min(8, 'Le mot de passe doit contenir au moins 8 caractères')
    .max(100, 'Le mot de passe ne peut pas dépasser 100 caractères')
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/,
      'Le mot de passe doit contenir au moins une minuscule, une majuscule, un chiffre et un caractère spécial'
    ),
  
  confirmPassword: z
    .string()
    .min(1, 'Veuillez confirmer votre mot de passe')
}).refine((data) => data.password === data.confirmPassword, {
  message: 'Les mots de passe ne correspondent pas',
  path: ['confirmPassword']
})

export type PasswordReset = z.infer<typeof passwordResetSchema>

// Profile Update Schema
export const profileUpdateSchema = z.object({
  firstName: z
    .string()
    .min(2, 'Le prénom doit contenir au moins 2 caractères')
    .max(50, 'Le prénom ne peut pas dépasser 50 caractères')
    .regex(/^[a-zA-ZÀ-ÿ\s-]+$/, 'Le prénom ne peut contenir que des lettres, espaces et tirets'),
  
  lastName: z
    .string()
    .min(2, 'Le nom doit contenir au moins 2 caractères')
    .max(50, 'Le nom ne peut pas dépasser 50 caractères')
    .regex(/^[a-zA-ZÀ-ÿ\s-]+$/, 'Le nom ne peut contenir que des lettres, espaces et tirets'),
  
  company: z
    .string()
    .min(2, 'Le nom de l\'entreprise doit contenir au moins 2 caractères')
    .max(100, 'Le nom de l\'entreprise ne peut pas dépasser 100 caractères')
    .optional(),
  
  position: z
    .string()
    .min(2, 'Le poste doit contenir au moins 2 caractères')
    .max(100, 'Le poste ne peut pas dépasser 100 caractères')
    .optional(),
  
  phone: z
    .string()
    .regex(
      /^(\+1[-.\s]?)?\(?([0-9]{3})\)?[-.\s]?([0-9]{3})[-.\s]?([0-9]{4})$/,
      'Veuillez entrer un numéro de téléphone valide (format canadien)'
    )
    .optional(),
  
  bio: z
    .string()
    .max(500, 'La biographie ne peut pas dépasser 500 caractères')
    .optional(),
  
  website: z
    .string()
    .url('Veuillez entrer une URL valide')
    .optional(),
  
  linkedin: z
    .string()
    .url('Veuillez entrer une URL LinkedIn valide')
    .optional(),
  
  notifications: z.object({
    email: z.boolean().optional(),
    push: z.boolean().optional(),
    marketing: z.boolean().optional()
  }).optional()
})

export type ProfileUpdate = z.infer<typeof profileUpdateSchema>

// Change Password Schema
export const changePasswordSchema = z.object({
  currentPassword: z
    .string()
    .min(1, 'Le mot de passe actuel est requis'),
  
  newPassword: z
    .string()
    .min(8, 'Le nouveau mot de passe doit contenir au moins 8 caractères')
    .max(100, 'Le mot de passe ne peut pas dépasser 100 caractères')
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/,
      'Le mot de passe doit contenir au moins une minuscule, une majuscule, un chiffre et un caractère spécial'
    ),
  
  confirmNewPassword: z
    .string()
    .min(1, 'Veuillez confirmer le nouveau mot de passe')
}).refine((data) => data.newPassword === data.confirmNewPassword, {
  message: 'Les nouveaux mots de passe ne correspondent pas',
  path: ['confirmNewPassword']
}).refine((data) => data.currentPassword !== data.newPassword, {
  message: 'Le nouveau mot de passe doit être différent de l\'ancien',
  path: ['newPassword']
})

export type ChangePassword = z.infer<typeof changePasswordSchema>