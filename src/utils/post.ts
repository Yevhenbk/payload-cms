/**
 * @fileoverview Post-related utility functions
 * @module utils/post
 */

/**
 * Extract plain text from Lexical rich text content
 */
export const getPostContentText = (content: any): string => {
  if (!content) return ''

  // If it's already a string, return it
  if (typeof content === 'string') return content

  // If it's a Lexical editor state
  if (content.root && content.root.children) {
    return extractTextFromLexical(content.root)
  }

  return ''
}

/**
 * Recursively extract text from Lexical nodes
 */
const extractTextFromLexical = (node: any): string => {
  if (!node) return ''

  let text = ''

  // If node has text property, add it
  if (node.text) {
    text += node.text
  }

  // If node has children, recursively extract text
  if (node.children && Array.isArray(node.children)) {
    text += node.children.map((child: any) => extractTextFromLexical(child)).join(' ')
  }

  return text
}

/**
 * Truncate text to a specific length
 */
export const truncateText = (text: string, maxLength: number = 150): string => {
  if (text.length <= maxLength) return text
  return text.substring(0, maxLength).trim() + '...'
}
