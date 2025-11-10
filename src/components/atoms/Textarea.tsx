/**
 * @fileoverview Textarea atom component
 * @module components/atoms/Textarea
 */

import { useId } from 'react'
import type { TextareaProps } from '@/types'
import { cn } from '@/utils/cn'

/**
 * Enterprise-grade Textarea component with best practices
 */
export const Textarea: React.FC<TextareaProps> = ({
  label,
  error,
  helperText,
  className,
  id,
  rows = 4,
  ...props
}) => {
  const generatedId = useId()
  const textareaId = id || generatedId
  const hasError = Boolean(error)

  return (
    <div className="w-full">
      {label && (
        <label htmlFor={textareaId} className="block text-sm font-medium text-gray-700 mb-1.5">
          {label}
        </label>
      )}
      <textarea
        id={textareaId}
        rows={rows}
        className={cn(
          'block w-full px-3 py-2 bg-white border rounded-lg text-sm shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-0 transition-colors resize-none',
          hasError
            ? 'border-red-300 text-red-900 focus:border-red-500 focus:ring-red-500'
            : 'border-gray-300 text-gray-900 focus:border-gray-900 focus:ring-gray-900',
          className,
        )}
        aria-invalid={hasError}
        aria-describedby={
          error ? `${textareaId}-error` : helperText ? `${textareaId}-helper` : undefined
        }
        {...props}
      />
      {error && (
        <p id={`${textareaId}-error`} className="mt-1.5 text-sm text-red-600">
          {error}
        </p>
      )}
      {helperText && !error && (
        <p id={`${textareaId}-helper`} className="mt-1.5 text-sm text-gray-500">
          {helperText}
        </p>
      )}
    </div>
  )
}
