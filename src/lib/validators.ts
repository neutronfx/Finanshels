import { z } from 'zod'

const phoneRegex = /^[+()0-9\-\s]{7,20}$/

export const leadFormSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, 'Please enter your full name.')
    .max(80, 'Name is too long.'),
  email: z
    .string()
    .trim()
    .email('Please enter a valid email address.')
    .max(120, 'Email is too long.'),
  phone: z
    .string()
    .trim()
    .regex(phoneRegex, 'Please enter a valid phone number.')
    .max(20, 'Phone number is too long.'),
  company: z
    .string()
    .trim()
    .min(2, 'Please enter your company name.')
    .max(120, 'Company name is too long.'),
})

export type LeadFormSchema = z.infer<typeof leadFormSchema>
