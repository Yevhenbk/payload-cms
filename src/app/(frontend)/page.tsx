import { headers as getHeaders } from 'next/headers.js'
import { getPayload } from 'payload'
import React from 'react'

import config from '@/payload.config'
import { HomePage } from '@/components/templates'
import { logoutUser } from '@/server/actions/logoutUser'
import type { Post, User } from '@/types'
import './styles.css'

/**
 * Home page - displays login or post creation based on authentication status
 */
const Page = async () => {
  const headers = await getHeaders()
  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })
  const { user } = await payload.auth({ headers })

  // Fetch posts if user is authenticated
  let posts: Post[] = []

  if (user) {
    const postsData = await payload.find({
      collection: 'posts',
      limit: 10,
      sort: '-createdAt',
    })
    posts = postsData.docs as Post[]
  }

  return <HomePage user={user as User | null} posts={posts} onLogout={logoutUser} />
}

export default Page
