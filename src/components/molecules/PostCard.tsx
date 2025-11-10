/**
 * @fileoverview PostCard molecule component
 * @module components/molecules/PostCard
 */

import { memo } from 'react'
import type { Post } from '@/types'
import { getPostContentText, truncateText } from '@/utils/post'

export interface PostCardProps {
  post: Post
}

/**
 * PostCard component with enterprise styling and memo optimization
 */
const PostCardComponent: React.FC<PostCardProps> = ({ post }) => {
  const contentText = truncateText(getPostContentText(post.content), 150)

  return (
    <article className="p-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
      <div className="flex items-start justify-between mb-3">
        <h3 className="text-lg font-semibold text-gray-900 line-clamp-2">{post.title}</h3>
      </div>

      {post.categories && post.categories.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-4">
          {post.categories.map((category) => (
            <span
              key={typeof category === 'string' ? category : category.id}
              className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800"
            >
              {typeof category === 'string' ? category : category.title}
            </span>
          ))}
        </div>
      )}

      <p className="text-sm text-gray-600 line-clamp-3">{contentText}</p>

      <div className="mt-4 pt-4 border-t border-gray-100">
        <p className="text-xs text-gray-500">
          {new Date(post.createdAt).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          })}
        </p>
      </div>
    </article>
  )
}

export const PostCard = memo(PostCardComponent)
