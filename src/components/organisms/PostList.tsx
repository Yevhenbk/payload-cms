/**
 * @fileoverview PostList organism component
 * @module components/organisms/PostList
 */

import { PostCard } from '@/components/molecules'
import type { Post } from '@/types'

export interface PostListProps {
  posts: Post[]
  emptyMessage?: string
}

/**
 * Enterprise-grade PostList component
 */
export const PostList: React.FC<PostListProps> = ({ posts, emptyMessage = 'No posts found' }) => {
  if (posts.length === 0) {
    return (
      <div className="w-full max-w-4xl mx-auto">
        <div className="text-center py-12 bg-white border border-gray-200 rounded-xl">
          <svg
            className="mx-auto h-12 w-12 text-gray-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
            />
          </svg>
          <h3 className="mt-4 text-sm font-medium text-gray-900">No posts</h3>
          <p className="mt-2 text-sm text-gray-500">{emptyMessage}</p>
        </div>
      </div>
    )
  }

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900">All Posts</h2>
        <p className="mt-1 text-sm text-gray-600">
          {posts.length} {posts.length === 1 ? 'post' : 'posts'} found
        </p>
      </div>

      <div className="grid gap-6 grid-cols-1 md:grid-cols-2">
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  )
}
