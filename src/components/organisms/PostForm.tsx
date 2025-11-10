/**
 * @fileoverview PostForm organism component
 * @module components/organisms/PostForm
 */

'use client'

import { useState } from 'react'
import { Input, Textarea, Button } from '@/components/atoms'
import { createPost } from '@/server/actions/createPost'
import type { PostFormData, FormErrors } from '@/types'
import { validatePostForm } from '@/utils/validation'
import { generateSlug } from '@/utils/string'

export interface PostFormProps {
  onSuccess?: () => void
}

/**
 * Enterprise-grade PostForm component
 */
export const PostForm: React.FC<PostFormProps> = ({ onSuccess }) => {
  const [formData, setFormData] = useState<PostFormData>({
    title: '',
    slug: '',
    content: '',
    categories: [],
  })
  const [errors, setErrors] = useState<FormErrors<PostFormData>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [serverError, setServerError] = useState<string>('')
  const [successMessage, setSuccessMessage] = useState<string>('')
  const [isSlugManuallyEdited, setIsSlugManuallyEdited] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target

    // Update form data
    setFormData((prev) => {
      const newData = { ...prev, [name]: value }

      // Auto-generate slug from title if slug hasn't been manually edited
      if (name === 'title' && !isSlugManuallyEdited) {
        newData.slug = generateSlug(value)
      }

      return newData
    })

    // Track if user manually edits the slug field
    if (name === 'slug') {
      setIsSlugManuallyEdited(true)
    }

    if (errors[name as keyof PostFormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }))
    }
    if (serverError) setServerError('')
    if (successMessage) setSuccessMessage('')
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setServerError('')
    setSuccessMessage('')

    const validationErrors = validatePostForm(formData)
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      return
    }

    setIsSubmitting(true)

    try {
      const result = await createPost(formData)

      if (result.success) {
        setSuccessMessage('Post created successfully!')
        setFormData({
          title: '',
          slug: '',
          content: '',
          categories: [],
        })
        setIsSlugManuallyEdited(false)
        onSuccess?.()
      } else {
        setServerError(result.error || 'Failed to create post')
      }
    } catch (error) {
      setServerError('An unexpected error occurred')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="w-full max-w-2xl">
      <div className="bg-white px-8 py-10 shadow-lg rounded-xl border border-gray-200">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900">Create new post</h2>
          <p className="mt-2 text-sm text-gray-600">
            Fill in the details below to create a new post
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {serverError && (
            <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
              <p className="text-sm text-red-800">{serverError}</p>
            </div>
          )}

          {successMessage && (
            <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
              <p className="text-sm text-green-800">{successMessage}</p>
            </div>
          )}

          <Input
            label="Title"
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            error={errors.title}
            placeholder="Enter post title"
            required
            disabled={isSubmitting}
          />

          <Input
            label="Slug"
            type="text"
            name="slug"
            value={formData.slug}
            onChange={handleChange}
            error={errors.slug}
            placeholder="post-slug"
            helperText="URL-friendly version of the title"
            required
            disabled={isSubmitting}
          />

          <Textarea
            label="Content"
            name="content"
            value={formData.content}
            onChange={handleChange}
            error={errors.content}
            placeholder="Write your post content here..."
            rows={8}
            required
            disabled={isSubmitting}
          />

          <div className="flex gap-3 pt-4">
            <Button type="submit" variant="primary" disabled={isSubmitting} className="flex-1">
              {isSubmitting ? 'Creating...' : 'Create Post'}
            </Button>
            <Button
              type="button"
              variant="ghost"
              onClick={() => {
                setFormData({
                  title: '',
                  slug: '',
                  content: '',
                  categories: [],
                })
                setErrors({})
                setServerError('')
                setSuccessMessage('')
              }}
              disabled={isSubmitting}
            >
              Clear
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}
