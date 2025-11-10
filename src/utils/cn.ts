/**
 * @fileoverview Utility for merging Tailwind CSS classes
 * @module utils/cn
 */

import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

/**
 * Merges class names with Tailwind CSS conflict resolution
 */
export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs))
}
