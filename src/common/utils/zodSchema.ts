import { z } from 'zod'

export const passwordValidationRegex = /^(?=.*[A-Z]).+$/

export const emailSchema = z
  .string()
  .min(1, { message: 'This field has to be filled.' })
  .email('This is not a valid email.')

export const passwordSchema = z
  .string()
  .min(4, { message: 'Password must be at least 4 characters' })
  .max(30, { message: 'The field must not contain more than 30 characters' })

export const schemaFile = z.instanceof(File).refine(file => file.size < 1000000, {
  message: 'Your image must be less than 1 MB.',
})

export const text = z
  .string()
  .min(3, { message: 'The field must contain more than 3 character' })
  .max(30, { message: 'The field must not contain more than 30 characters' })
