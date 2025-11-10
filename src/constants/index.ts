/**
 * @fileoverview Application-wide constants
 * @module constants
 */

/**
 * Form validation messages
 */
export const VALIDATION_MESSAGES = {
  REQUIRED: 'This field is required',
  INVALID_EMAIL: 'Please enter a valid email address',
  MIN_LENGTH: (min: number) => `Minimum ${min} characters required`,
  MAX_LENGTH: (max: number) => `Maximum ${max} characters allowed`,
} as const

/**
 * API endpoints
 */
export const API_ROUTES = {
  AUTH: '/api/auth',
  POSTS: '/api/posts',
  CATEGORIES: '/api/categories',
  USERS: '/api/users',
} as const

/**
 * Application routes
 */
export const APP_ROUTES = {
  HOME: '/',
  ADMIN: '/admin',
  LOGIN: '/',
} as const

/**
 * Test user credentials
 */
export const TEST_USER = {
  EMAIL: 'test@test.com',
  PASSWORD: 'test',
  NAME: 'test',
} as const

/**
 * UI Messages
 */
export const UI_MESSAGES = {
  LOGIN_SUCCESS: 'Successfully logged in',
  LOGIN_ERROR: 'Invalid credentials',
  POST_CREATED: 'Post created successfully!',
  POST_ERROR: 'Failed to create post',
  LOADING: 'Loading...',
  CREATING: 'Creating...',
  LOGGING_IN: 'Logging in...',
} as const

/**
 * Form field limits
 */
export const FIELD_LIMITS = {
  TITLE_MAX: 200,
  SLUG_MAX: 200,
  CONTENT_MAX: 10000,
  EMAIL_MAX: 255,
} as const
