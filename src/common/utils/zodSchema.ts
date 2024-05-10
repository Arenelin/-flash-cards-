import { z } from 'zod'

export const passwordValidationRegex = /^(?=.*[A-Z]).+$/
export const emailSchema = z
  .string()
  .min(1, { message: 'This field has to be filled.' })
  .email('This is not a valid email.')
export const passwordSchema = z
  .string()
  .min(5, { message: 'Password must be at least 5 characters' })
  .refine(val => passwordValidationRegex.test(val), {
    message: 'Password must contain one uppercase',
  })
