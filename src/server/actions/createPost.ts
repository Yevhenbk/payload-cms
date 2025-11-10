/**
 * @fileoverview Post creation server actions
 * @module server/actions/createPost
 */

'use server'

import { headers as getHeaders } from 'next/headers'
import { getPayload } from 'payload'
import { revalidatePath } from 'next/cache'
import config from '@/payload.config'
import type { PostResponse } from '@/types'

interface CreatePostData {
  title: string
  slug: string
  content: string
  categories?: string[]
}

/**
 * Creates a new post with the authenticated user as owner
 * @param data - Post creation data
 * @returns Post response with created post data or error
 */
export const createPost = async (data: CreatePostData): Promise<PostResponse> => {
  try {
    const headers = await getHeaders()
    const payloadConfig = await config
    const payload = await getPayload({ config: payloadConfig })

    // Get the authenticated user
    const { user } = await payload.auth({ headers })

    if (!user) {
      return { success: false, error: 'Not authenticated' }
    }

    // Create the post
    const post = await payload.create({
      collection: 'posts',
      data: {
        title: data.title,
        slug: data.slug,
        content: {
          root: {
            type: 'root',
            children: [
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    text: data.content,
                    version: 1,
                  },
                ],
                version: 1,
              },
            ],
            direction: 'ltr',
            format: '',
            indent: 0,
            version: 1,
          },
        },
        categories: data.categories || [],
        owner: user.id,
      },
    })

    revalidatePath('/')

    return { success: true, post: post as any }
  } catch (error: any) {
    console.error('Error creating post:', error)
    return { success: false, error: error.message || 'Failed to create post' }
  }
}
