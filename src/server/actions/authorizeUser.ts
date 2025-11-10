/**
 * @fileoverview User authentication server actions
 * @module server/actions/authorizeUser
 */

'use server'

import { cookies } from 'next/headers'
import { getPayload } from 'payload'
import config from '@/payload.config'
import type { AuthResponse } from '@/types'

/**
 * Authenticates a user with email and password
 * @param email - User's email address
 * @param password - User's password
 * @returns Authentication response with user data or error
 */
export const authorizeUser = async (email: string, password: string): Promise<AuthResponse> => {
  try {
    const payloadConfig = await config
    const payload = await getPayload({ config: payloadConfig })

    const result = await payload.login({
      collection: 'users',
      data: {
        email,
        password,
      },
    })

    if (result.token && result.user) {
      const cookieStore = await cookies()
      cookieStore.set('payload-token', result.token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'lax',
        maxAge: 60 * 60 * 24 * 7, // 7 days
        path: '/',
      })

      // Map PayloadCMS user to our User type
      const user = {
        id: result.user.id,
        email: result.user.email,
        name: result.user.name ?? undefined,
        createdAt: result.user.createdAt,
        updatedAt: result.user.updatedAt,
      }

      return { success: true, user }
    }

    return { success: false, error: 'Invalid credentials' }
  } catch (error) {
    console.error('Authorization error:', error)
    return { success: false, error: 'Login failed' }
  }
}

/**
 * Logs out the current user by clearing the authentication cookie
 * @returns Success status
 */
export const logoutUser = async (): Promise<{ success: boolean }> => {
  const cookieStore = await cookies()
  cookieStore.delete('payload-token')
  return { success: true }
}
