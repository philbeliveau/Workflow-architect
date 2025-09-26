import { z } from 'zod'

// Formation Inquiry Schema (English)
export const formationInquirySchemaEn = z.object({
  name: z
    .string()
    .min(2, 'Name must be at least 2 characters long')
    .max(100, 'Name cannot exceed 100 characters'),
  
  email: z
    .string()
    .email('Please enter a valid email address')
    .min(1, 'Email is required'),
  
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
  
  formationType: z.enum(['kickstart', 'architecte'], {
    required_error: 'Please select a training type'
  }),
  
  teamSize: z
    .string()
    .min(1, 'Please specify your team size'),
  
  experience: z.enum(['beginner', 'intermediate', 'advanced'], {
    required_error: 'Please indicate your experience level'
  }),
  
  goals: z
    .string()
    .min(10, 'Please describe your goals (minimum 10 characters)')
    .max(1000, 'Description cannot exceed 1000 characters'),
  
  timeline: z.enum(['immediate', '1-month', '3-months', '6-months'], {
    required_error: 'Please indicate your desired timeline'
  }),
  
  budget: z
    .string()
    .min(1, 'Please indicate your approximate budget'),
  
  source: z
    .string()
    .min(1, 'Please tell us how you heard about us')
    .optional(),
  
  consent: z
    .boolean()
    .refine(val => val === true, 'You must accept the terms to continue')
})

export type FormationInquiryEn = z.infer<typeof formationInquirySchemaEn>

// Enterprise Contact Schema (English)
export const enterpriseContactSchemaEn = z.object({
  name: z
    .string()
    .min(2, 'Name must be at least 2 characters long')
    .max(100, 'Name cannot exceed 100 characters'),
  
  email: z
    .string()
    .email('Please enter a valid email address')
    .min(1, 'Email is required'),
  
  company: z
    .string()
    .min(2, 'Company name must be at least 2 characters long')
    .max(100, 'Company name cannot exceed 100 characters'),
  
  position: z
    .string()
    .min(2, 'Position must be at least 2 characters long')
    .max(100, 'Position cannot exceed 100 characters'),
  
  phone: z
    .string()
    .regex(
      /^(\+1[-.\s]?)?\(?([0-9]{3})\)?[-.\s]?([0-9]{3})[-.\s]?([0-9]{4})$/,
      'Please enter a valid phone number (Canadian format)'
    ),
  
  companySize: z.enum(['5-20', '21-50', '51-200', '200+'], {
    required_error: 'Please indicate your company size'
  }),
  
  industry: z
    .string()
    .min(2, 'Please specify your industry')
    .max(100, 'Industry cannot exceed 100 characters'),
  
  currentChallenges: z
    .string()
    .min(20, 'Please describe your current challenges (minimum 20 characters)')
    .max(1000, 'Description cannot exceed 1000 characters'),
  
  projectScope: z.enum(['pilot', 'department', 'organization'], {
    required_error: 'Please indicate the project scope'
  }),
  
  budget: z.enum(['10k-25k', '25k-50k', '50k-100k', '100k+'], {
    required_error: 'Please indicate your approximate budget'
  }),
  
  timeline: z.enum(['immediate', '1-month', '3-months', '6-months'], {
    required_error: 'Please indicate your desired timeline'
  }),
  
  preferredContact: z.enum(['email', 'phone', 'video-call'], {
    required_error: 'Please indicate your preferred contact method'
  }),
  
  additionalInfo: z
    .string()
    .max(500, 'Additional information cannot exceed 500 characters')
    .optional(),
  
  consent: z
    .boolean()
    .refine(val => val === true, 'You must accept the terms to continue'),
  
  newsletter: z
    .boolean()
    .optional()
})

export type EnterpriseContactEn = z.infer<typeof enterpriseContactSchemaEn>

// Newsletter Subscription Schema (English)
export const newsletterSchemaEn = z.object({
  email: z
    .string()
    .email('Please enter a valid email address')
    .min(1, 'Email is required'),
  
  firstName: z
    .string()
    .min(2, 'First name must be at least 2 characters long')
    .max(50, 'First name cannot exceed 50 characters')
    .optional(),
  
  interests: z
    .array(z.enum(['kickstart', 'architecte', 'enterprise', 'updates']))
    .min(1, 'Please select at least one area of interest')
    .optional(),
  
  consent: z
    .boolean()
    .refine(val => val === true, 'You must consent to receive our communications')
})

export type NewsletterEn = z.infer<typeof newsletterSchemaEn>

// Contact Form Schema (English)
export const contactSchemaEn = z.object({
  name: z
    .string()
    .min(2, 'Name must be at least 2 characters long')
    .max(100, 'Name cannot exceed 100 characters'),
  
  email: z
    .string()
    .email('Please enter a valid email address')
    .min(1, 'Email is required'),
  
  subject: z
    .string()
    .min(5, 'Subject must be at least 5 characters long')
    .max(100, 'Subject cannot exceed 100 characters'),
  
  message: z
    .string()
    .min(10, 'Message must be at least 10 characters long')
    .max(1000, 'Message cannot exceed 1000 characters'),
  
  priority: z.enum(['low', 'medium', 'high'], {
    required_error: 'Please indicate the priority'
  }).optional(),
  
  consent: z
    .boolean()
    .refine(val => val === true, 'You must accept the terms to continue')
})

export type ContactEn = z.infer<typeof contactSchemaEn>