/**
 * @fileoverview UserGreeting molecule component
 * @module components/molecules/UserGreeting
 */

'use client'

import type { User } from '@/types'
import { Button } from '@/components/atoms'
import { getUserDisplayName } from '@/utils/user'

export interface UserGreetingProps {
  user: User
  onLogout: () => void | Promise<void>
}

/**
 * UserGreeting component with enterprise styling
 */
export const UserGreeting: React.FC<UserGreetingProps> = ({ user, onLogout }) => {
  const displayName = getUserDisplayName(user)

  const handleLogout = async () => {
    await onLogout()
  }

  return (
    <div className="flex items-center justify-between w-full px-6 py-4 bg-white border border-gray-200 rounded-lg shadow-sm">
      <div className="flex items-center space-x-3">
        <div className="flex items-center justify-center w-10 h-10 bg-gray-900 rounded-full">
          <span className="text-sm font-medium text-white">
            {displayName.charAt(0).toUpperCase()}
          </span>
        </div>
        <div>
          <p className="text-sm font-medium text-gray-900">Welcome back</p>
          <p className="text-sm text-gray-600">{displayName}</p>
        </div>
      </div>
      <Button variant="ghost" size="sm" onClick={handleLogout}>
        Sign out
      </Button>
    </div>
  )
}
