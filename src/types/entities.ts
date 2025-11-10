/**
 * @fileoverview Type definitions for application entities
 * @module types/entities
 */

/**
 * User entity from PayloadCMS
 */
export interface User {
  id: string
  email: string
  name?: string | null
  createdAt: string
  updatedAt: string
}

/**
 * Category entity
 */
export interface Category {
  id: string
  title: string
  slug: string
  content?: any
  owner: string | User
  posts?: Post[]
  createdAt: string
  updatedAt: string
}

/**
 * Post entity
 */
export interface Post {
  id: string
  title: string
  slug: string
  content: any
  categories?: string[] | Category[]
  owner: string | User
  createdAt: string
  updatedAt: string
}

/**
 * Server action response types
 */
export interface ActionResponse<T = unknown> {
  success: boolean
  data?: T
  error?: string
}

/**
 * Authentication response
 */
export interface AuthResponse extends ActionResponse<User> {
  user?: User
}

/**
 * Post creation response
 */
export interface PostResponse extends ActionResponse<Post> {
  post?: Post
}
