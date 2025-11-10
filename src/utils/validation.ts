/**
 * @fileoverview Form validation utility functions
 * @module utils/validation
 */

import { VALIDATION_MESSAGES, FIELD_LIMITS } from '@/constants'

/**
 * Validates email format
 * @param email - Email to validate
 * @returns Error message or undefined
 */
export const validateEmail = (email: string): string | undefined => {
  if (!email) return VALIDATION_MESSAGES.REQUIRED

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(email)) {
    return VALIDATION_MESSAGES.INVALID_EMAIL
  }

  if (email.length > FIELD_LIMITS.EMAIL_MAX) {
    return VALIDATION_MESSAGES.MAX_LENGTH(FIELD_LIMITS.EMAIL_MAX)
  }

  return undefined
}

/**
 * Validates required field
 * @param value - Value to validate
 * @returns Error message or undefined
 */
export const validateRequired = (value: string): string | undefined => {
  return value.trim() ? undefined : VALIDATION_MESSAGES.REQUIRED
}

/**
 * Validates field length
 * @param value - Value to validate
 * @param min - Minimum length
 * @param max - Maximum length
 * @returns Error message or undefined
 */
export const validateLength = (value: string, min?: number, max?: number): string | undefined => {
  if (min && value.length < min) {
    return VALIDATION_MESSAGES.MIN_LENGTH(min)
  }
  if (max && value.length > max) {
    return VALIDATION_MESSAGES.MAX_LENGTH(max)
  }
  return undefined
}

/**
 * Validates login form data
 */
export const validateLoginForm = (data: { email: string; password: string }) => {
  const errors: Record<string, string> = {}

  const emailError = validateEmail(data.email)
  if (emailError) errors.email = emailError

  const passwordError = validateRequired(data.password)
  if (passwordError) errors.password = passwordError

  return errors
}

/**
 * Validates post form data
 */
export const validatePostForm = (data: { title: string; slug: string; content: string }) => {
  const errors: Record<string, string> = {}

  const titleError = validateRequired(data.title)
  if (titleError) errors.title = titleError

  const slugError = validateRequired(data.slug)
  if (slugError) errors.slug = slugError

  const contentError = validateRequired(data.content)
  if (contentError) errors.content = contentError

  return errors
}
