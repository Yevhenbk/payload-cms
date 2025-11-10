/**
 * @fileoverview Logout user server action
 * @module server/actions/logoutUser
 */

'use server'

import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

/**
 * Logs out the current user by clearing the auth cookie
 */
export const logoutUser = async () => {
  const cookieStore = await cookies()

  // Delete the payload token cookie
  cookieStore.delete('payload-token')

  // Redirect to home page
  redirect('/')
}
