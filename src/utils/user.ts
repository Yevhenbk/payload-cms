/**
 * @fileoverview User-related utility functions
 * @module utils/user
 */

import type { User } from '@/types'

/**
 * Gets a display-friendly name from a user object
 * Prioritizes: name > email username > email
 * @param user - User object
 * @returns Display name
 */
export const getUserDisplayName = (user: User): string => {
  if (user.name) {
    return user.name
  }

  const emailUsername = user.email.split('@')[0]
  return emailUsername || user.email
}

/**
 * Checks if a user has a custom name set
 * @param user - User object
 * @returns True if user has a name
 */
export const hasCustomName = (user: User): boolean => {
  return Boolean(user.name)
}
