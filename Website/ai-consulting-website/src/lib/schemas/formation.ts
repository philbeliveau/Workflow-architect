import { z } from 'zod'

// Formation Inquiry Schema
export const formationInquirySchema = z.object({
  name: z
    .string()
    .min(2, 'Le nom doit contenir au moins 2 caractères')
    .max(100, 'Le nom ne peut pas dépasser 100 caractères'),
  
  email: z
    .string()
    .email('Veuillez entrer une adresse email valide')
    .min(1, 'L\'email est requis'),
  
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
  
  formationType: z.enum(['kickstart', 'architecte'], {
    required_error: 'Veuillez sélectionner un type de formation'
  }),
  
  teamSize: z
    .string()
    .min(1, 'Veuillez préciser la taille de votre équipe'),
  
  experience: z.enum(['beginner', 'intermediate', 'advanced'], {
    required_error: 'Veuillez indiquer votre niveau d\'expérience'
  }),
  
  goals: z
    .string()
    .min(10, 'Veuillez décrire vos objectifs (minimum 10 caractères)')
    .max(1000, 'La description ne peut pas dépasser 1000 caractères'),
  
  timeline: z.enum(['immediate', '1-month', '3-months', '6-months'], {
    required_error: 'Veuillez indiquer votre échéancier souhaité'
  }),
  
  budget: z
    .string()
    .min(1, 'Veuillez indiquer votre budget approximatif'),
  
  source: z
    .string()
    .min(1, 'Veuillez indiquer comment vous avez entendu parler de nous')
    .optional(),
  
  consent: z
    .boolean()
    .refine(val => val === true, 'Vous devez accepter les conditions pour continuer')
})

export type FormationInquiry = z.infer<typeof formationInquirySchema>

// Enterprise Contact Schema
export const enterpriseContactSchema = z.object({
  name: z
    .string()
    .min(2, 'Le nom doit contenir au moins 2 caractères')
    .max(100, 'Le nom ne peut pas dépasser 100 caractères'),
  
  email: z
    .string()
    .email('Veuillez entrer une adresse email valide')
    .min(1, 'L\'email est requis'),
  
  company: z
    .string()
    .min(2, 'Le nom de l\'entreprise doit contenir au moins 2 caractères')
    .max(100, 'Le nom de l\'entreprise ne peut pas dépasser 100 caractères'),
  
  position: z
    .string()
    .min(2, 'Le poste doit contenir au moins 2 caractères')
    .max(100, 'Le poste ne peut pas dépasser 100 caractères'),
  
  phone: z
    .string()
    .regex(
      /^(\+1[-.\s]?)?\(?([0-9]{3})\)?[-.\s]?([0-9]{3})[-.\s]?([0-9]{4})$/,
      'Veuillez entrer un numéro de téléphone valide (format canadien)'
    ),
  
  companySize: z.enum(['5-20', '21-50', '51-200', '200+'], {
    required_error: 'Veuillez indiquer la taille de votre entreprise'
  }),
  
  industry: z
    .string()
    .min(2, 'Veuillez préciser votre secteur d\'activité')
    .max(100, 'Le secteur d\'activité ne peut pas dépasser 100 caractères'),
  
  currentChallenges: z
    .string()
    .min(20, 'Veuillez décrire vos défis actuels (minimum 20 caractères)')
    .max(1000, 'La description ne peut pas dépasser 1000 caractères'),
  
  projectScope: z.enum(['pilot', 'department', 'organization'], {
    required_error: 'Veuillez indiquer la portée du projet'
  }),
  
  budget: z.enum(['10k-25k', '25k-50k', '50k-100k', '100k+'], {
    required_error: 'Veuillez indiquer votre budget approximatif'
  }),
  
  timeline: z.enum(['immediate', '1-month', '3-months', '6-months'], {
    required_error: 'Veuillez indiquer votre échéancier souhaité'
  }),
  
  preferredContact: z.enum(['email', 'phone', 'video-call'], {
    required_error: 'Veuillez indiquer votre méthode de contact préférée'
  }),
  
  additionalInfo: z
    .string()
    .max(500, 'Les informations supplémentaires ne peuvent pas dépasser 500 caractères')
    .optional(),
  
  consent: z
    .boolean()
    .refine(val => val === true, 'Vous devez accepter les conditions pour continuer'),
  
  newsletter: z
    .boolean()
    .optional()
})

export type EnterpriseContact = z.infer<typeof enterpriseContactSchema>

// Newsletter Subscription Schema
export const newsletterSchema = z.object({
  email: z
    .string()
    .email('Veuillez entrer une adresse email valide')
    .min(1, 'L\'email est requis'),
  
  firstName: z
    .string()
    .min(2, 'Le prénom doit contenir au moins 2 caractères')
    .max(50, 'Le prénom ne peut pas dépasser 50 caractères')
    .optional(),
  
  interests: z
    .array(z.enum(['kickstart', 'architecte', 'enterprise', 'updates']))
    .min(1, 'Veuillez sélectionner au moins un domaine d\'intérêt')
    .optional(),
  
  consent: z
    .boolean()
    .refine(val => val === true, 'Vous devez accepter de recevoir nos communications')
})

export type Newsletter = z.infer<typeof newsletterSchema>

// Contact Form Schema (General)
export const contactSchema = z.object({
  name: z
    .string()
    .min(2, 'Le nom doit contenir au moins 2 caractères')
    .max(100, 'Le nom ne peut pas dépasser 100 caractères'),
  
  email: z
    .string()
    .email('Veuillez entrer une adresse email valide')
    .min(1, 'L\'email est requis'),
  
  subject: z
    .string()
    .min(5, 'Le sujet doit contenir au moins 5 caractères')
    .max(100, 'Le sujet ne peut pas dépasser 100 caractères'),
  
  message: z
    .string()
    .min(10, 'Le message doit contenir au moins 10 caractères')
    .max(1000, 'Le message ne peut pas dépasser 1000 caractères'),
  
  priority: z.enum(['low', 'medium', 'high'], {
    required_error: 'Veuillez indiquer la priorité'
  }).optional(),
  
  consent: z
    .boolean()
    .refine(val => val === true, 'Vous devez accepter les conditions pour continuer')
})

export type Contact = z.infer<typeof contactSchema>