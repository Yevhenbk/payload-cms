/**
 * @fileoverview Checkbox atom component
 * @module components/atoms/Checkbox
 */

import { useId } from 'react'
import type { CheckboxProps } from '@/types'
import { cn } from '@/utils/cn'

/**
 * Enterprise-grade Checkbox component with best practices
 */
export const Checkbox: React.FC<CheckboxProps> = ({ label, error, className, id, ...props }) => {
  const generatedId = useId()
  const checkboxId = id || generatedId
  const hasError = Boolean(error)

  return (
    <div className="flex items-start">
      <div className="flex items-center h-5">
        <input
          type="checkbox"
          id={checkboxId}
          className={cn(
            'h-4 w-4 rounded border-gray-300 text-gray-900 focus:ring-2 focus:ring-gray-900 focus:ring-offset-0 transition-colors',
            hasError && 'border-red-300',
            className,
          )}
          aria-invalid={hasError}
          aria-describedby={error ? `${checkboxId}-error` : undefined}
          {...props}
        />
      </div>
      {label && (
        <div className="ml-3">
          <label htmlFor={checkboxId} className="text-sm font-medium text-gray-700">
            {label}
          </label>
          {error && (
            <p id={`${checkboxId}-error`} className="mt-1 text-sm text-red-600">
              {error}
            </p>
          )}
        </div>
      )}
    </div>
  )
}
