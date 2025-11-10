/**
 * @fileoverview Type definitions for form components
 * @module types/forms
 */

import { ChangeEvent, FormEvent } from 'react'

/**
 * Base input props
 */
export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: string
  helperText?: string
}

/**
 * Textarea props
 */
export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string
  error?: string
  helperText?: string
}

/**
 * Button props
 */
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'danger' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  isLoading?: boolean
  fullWidth?: boolean
}

/**
 * Checkbox props
 */
export interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string
  error?: string
}

/**
 * Form field props
 */
export interface FormFieldProps {
  label: string
  error?: string
  helperText?: string
  required?: boolean
  children: React.ReactNode
}

/**
 * Login form data
 */
export interface LoginFormData {
  email: string
  password: string
}

/**
 * Post form data
 */
export interface PostFormData {
  title: string
  slug: string
  content: string
  categories: string[]
}

/**
 * Form validation errors
 */
export type FormErrors<T> = Partial<Record<keyof T, string>>
